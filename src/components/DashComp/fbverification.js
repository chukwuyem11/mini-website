import Nav2 from "./nav2";
import { css, jsx } from "@emotion/react";
import facepaint from "facepaint";

const breakpoints = [576, 768, 992, 1200];
const query = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
const FBverification = () => {
  return (
    <div>
      <Nav2>
        
        <div
          css={mq({
            display: "flex",
            justifyContent: "right",
            
          })}
        >
        <div
            css={mq({
              display: "flex",
              flexDirection: "column",
              width: ["100%", "75%", "75%", "75%"],

              paddingRight: [0, 50, 50, 50],
              paddingTop: 20,
              paddingBottom: 20,
            })}
          >


           
            
            <div css={mq({
                paddingRight: [20, 0, 0, 0],
                paddingLeft: [20, 0, 0, 0],
            })}>
               <div css={mq({
                fontSize: [25,30,30,30],
                fontWeight: 600,
               
            })}><p>Verify your Facebook Ad Account</p></div>
            
            <div >
            <div css={mq({
                    display: "flex",
                    width: ["100%","50%","50%","50%"],
                    alignItems: "center"
                })}>
            <div><img
            css={mq({
              
             
            })}
            src={"/svg/informationbutton.svg"}
          /></div>
          <div css={mq({
             fontSize: [15, 18, 18, 18],
                    marginLeft: 20
                })}>Paste the <span css={mq({
                    color: "#3BB75E",
                    fontWeight: 500
                })}>Meta Tag</span> code you copied from your <span css={mq({
                    color: "#4267B2",
                    fontWeight: 500
                })}>Facebook Business Manager</span> below. <span css={mq({
                    color: "#4267B2",
                    fontWeight: 600
                })}>Watch how</span></div>
          </div>
            </div>
            </div>
            <div css={mq({
                marginTop: 50,
                paddingRight: [20, 0, 0, 0],
                paddingLeft: [20, 0, 0, 0],
            })}>
               
            <div>
                <textarea id="txtid" name="txtname" rows="10" cols="45" maxlength="200" css={mq({
           
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 10,
            paddingRight: 10,
            outline: "none",
            border: "solid",
            borderWidth: 1,
            borderColor: "#e2dff8",
           
            
            
               
                borderRadius: 5,
            ":focus" : {
                
                outline: "none",
                border: "solid",
            borderWidth: 1,
            borderColor: "#e2dff8",
            
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 10,
            paddingRight: 10,
            }
        })}  />
              </div>
            </div>
            <div  css={mq({
              display: "flex",
              justifyContent: "right",
              marginTop: 50,
              marginBottom: 50,
              paddingRight: [20, 0, 0, 0],
                paddingLeft: [20, 0, 0, 0],

          })}>
             <button css={mq({
                           fontSize: 18,
                           border: "none",
                
                           backgroundColor: "#1f1b39",
                           fontFamily: "Tisa Sans Pro",
                color: "#fff",
                paddingLeft: 30,
                paddingRight: 30,
                paddingTop: 10,
                paddingBottom: 10,
                borderRadius: 5,
                fontWeight: "bold",
                marginLeft: 80,
                
                    
                    
                       })}>SAVE CHANGES</button> </div>
          </div></div>
         
      </Nav2>
    </div>
  );
};

export default FBverification;
