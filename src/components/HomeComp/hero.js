import React from "react";
import { css, jsx } from "@emotion/react";
import facepaint from "facepaint";
import Nav from "../nav";

const breakpoints = [576, 768, 992, 1200];
const query = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
const Hero = () => {
  return (
    <div css={mq({
        backgroundImage: "url('herobg.png')",
       
        
    })}>
        <Nav />
        <div css={mq({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: 500

        })}>
        <div  >
            <div css={mq({
                color: "#fff",
                textAlign: "center",
                marginTop: 100,
                fontSize: 65,
                fontWeight: "bold"
            })}>
            Get a mini website</div>
            <div css={mq({
            display: "flex",
            justifyContent: "center",
            marginTop: 20
            
        })}>
            <div css={mq({
                color: "#fff",
                textAlign: "center",
                fontSize: 25,
                width: "40vw",
           
               
            })}>
            Get a website with all the essentials without the complexity. Start by searching your domain name.</div>
        </div></div>
        <div css={mq({
            display: "flex",
            justifyContent: "center",
            marginTop: 20,
            marginBottom: 20,
        })}>
        <input css={mq({
            width: "30vw",
            padding: 10,
            outline: "none",
                border: "none",
                borderLeftRadius: 5,
                borderRadius: "5px 0px 0px 5px",
            ":focus" : {
                
                outline: "none",
                border: "none",
                padding: 10,
            }
        })} type="box" placeholder="Businessname.com"></input> <div>
        <button css={mq({
            backgroundColor: "#6D61DF",
            color: "#fff",
            padding: 10,
            borderRadius: "0px 5px 5px 0px",
            outline: "none",
                border: "none",
                fontSize: 18,
        })}>search</button>
    </div>
   
        </div>
        <div css={mq({
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
           
        })}>
        <div css={mq({
                color: "#fff",
                textAlign: "center",
                fontSize: 20,
               
               
               
            })}>
           Already have a domain name. Transfer domain <span css={mq({
               color: "#F091A3"
           })}>here</span> </div></div></div>
       
        
    </div>
  );
}

export default Hero;
