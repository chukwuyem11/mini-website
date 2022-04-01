import React from "react";
import { css, jsx } from "@emotion/react";
import facepaint from "facepaint";
import axios from "axios";
import { useQuery, useMutation } from "react-query";


const breakpoints = [576, 768, 992, 1200];
const query = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);


const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

const Signup = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const { isLoading, isSuccess, isError, mutate, mutateAsync } = useMutation(
        () => {
          axios.post(`/api/signup`, {
            email: email,
            password: password,
            
          }).then((response) => {
            setPassword("")
            setEmail("")
            console.log(response)
          })
          .catch((error) => {
            console.log(error);
          });
        }
      );
    
      const handleChange = () => {
        mutate()
          
      };
  return (
    <div css={mq({
        
    })}>
        <div>
        <label>Email</label>
        <input defaultValue="Hello"
              onChange={(e) => setEmail(e.target.value)}
              value={email} />
        </div>
        <div>
        <label >Password</label>
        <input defaultValue="Hello"
              onChange={(e) => setPassword(e.target.value)}
              value={password} />
        </div>
        <div>
            <button onClick={() => handleChange()}>Login</button>
        </div>
      
    </div>
  );
};

export default Signup;
