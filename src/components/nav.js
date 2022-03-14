import { css, jsx } from "@emotion/react";
import facepaint from "facepaint";

const breakpoints = [576, 768, 992, 1200];
const query = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

const Nav = () =>{
    return(
        
            <div css={mq({
                display: "flex",
                paddingLeft: 30,
                paddingRight: 30,
                paddingTop: 20,
                alignItems: "center",
            })}>
                <div css={mq({
                    flex: "20%"
                })}>
                <img src="donceptlogo.png"/>
                </div>
                
<div css={mq({
                    flex: "30%"
                })}>
                <div css={mq({
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "left",
                })}>
                <div css={mq({
                    color: "#fff",
                    fontSize: 20,
                })}>
                Features
                </div>
                <div css={mq({
                    color: "#fff",
                    marginLeft: 50,
                    fontSize: 20,
                })}>
                How it works
                </div>
                <div css={mq({
                    color: "#fff",
                    marginLeft: 50,
                    fontSize: 20,
                })}>
                    Pricing
                </div>
                </div>
                </div>
                <div css={mq({
                    flex: "20%"
                })}></div>
                
                <div css={mq({
                    flex: "30%"
                })}>
               <div css={mq({
                   display: "flex",
                   alignItems: "center",
                   justifyContent: "right",
               })}>
                   <div css={mq({
                    color: "#fff",
                    marginRight: 50,
                    fontSize: 20,
                })}>
                   Login </div>
                   <div>
                       <button css={mq({
                           fontSize: 18,
                           backgroundColor: "#3BB75E",
                           fontFamily: "Tisa Sans Pro",
                color: "#fff",
                paddingLeft: 30,
                paddingRight: 30,
                paddingTop: 15,
                paddingBottom: 15,
                borderRadius: 3,
                fontWeight: "bold",
                outline: "none",
                    border: "none",
                    
                       })}>GET STARTED</button>
                   </div>
               </div>
                </div>
            </div>
            
        
    )
}
export default Nav