import DashboardNav2 from "./dashboardnav2";
import { css, jsx } from "@emotion/react";
import facepaint from "facepaint";

const breakpoints = [576, 768, 992, 1200];
const query = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
const Socialmedia = () => {
  return (
    <div>
      <DashboardNav2>
        <div
          css={mq({
            display: "flex",
            justifyContent: "right",
            border: "solid",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#e3e3e3",
          })}
        >
          <div
            css={mq({
              display: "flex",
              flexDirection: "column",
              width: "75%",

              paddingRight: 50,
              paddingTop: 20,
              paddingBottom: 20,
            })}
          >
            <div
              css={mq({
                display: "flex",
                justifyContent: "space-between",
              })}
            >
              <div
                css={mq({
                  fontSize: 35,
                  fontWeight: 600,
                  color: "#1f1b39",
                })}
              >
                Dashboard
              </div>
              <div
                css={mq({
                  display: "flex",
                })}
              >
                <img
                  css={mq({
                    width: 30,
                  })}
                  src={"/svg/bell.svg"}
                />{" "}
                <img
                  css={mq({
                    marginLeft: 20,
                    width: 30,
                  })}
                  src={"/svg/user.svg"}
                />
              </div>
            </div>
            
          </div>
        
        </div>
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
              width: "75%",

              paddingRight: 50,
              paddingTop: 20,
              paddingBottom: 20,
            })}
          >


           
            
            <div css={mq({
                marginTop: 50
            })}>
               <div css={mq({
                fontSize: 30,
                fontWeight: 600,
               
            })}>Social Media Details</div>
            
            
           
           
            
            
            </div>
            <div css={mq({
                marginTop: 50
            })}>
                <div css={mq({
                    display: "flex",
                    justifyContent: "space-between"
                })}>
               <div>
               <div css={mq({
                fontSize: 25,
                fontWeight: 500,
               
            })}>WhatsApp link</div> 
            <div> <input placeholder="https://wa.me/2348103628279" css={mq({
            width: 400,
            fontFamily: "Tisa Sans Pro",
            marginTop: 10,
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
        })}  /></div>
        <div css={mq({
                fontSize: 25,
                fontWeight: 500,
                marginTop: 20
               
            })}>Facebook link</div> 
            <div> <input placeholder="https://facebook.com/doncept/" css={mq({
            width: 400,
            fontFamily: "Tisa Sans Pro",
            marginTop: 10,
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
        })}  /></div>
        <div css={mq({
                fontSize: 25,
                fontWeight: 500,
                marginTop: 20
               
            })}>Email address</div> 
            <div> <input placeholder="janedoe99@gmail.com" css={mq({
            width: 400,
            fontFamily: "Tisa Sans Pro",
            marginTop: 10,
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
        })}  /></div>
        <div css={mq({
                fontSize: 25,
                fontWeight: 500,
                marginTop: 20
               
            })}>YouTube link</div> 
            <div> <input  css={mq({
            width: 400,
            fontFamily: "Tisa Sans Pro",
            marginTop: 10,
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
        })}  /></div>
        <div css={mq({
                fontSize: 25,
                fontWeight: 500,
                marginTop: 20
               
            })}>Telegram link</div> 
            <div> <input  css={mq({
            width: 400,
            fontFamily: "Tisa Sans Pro",
            marginTop: 10,
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
        })}  /></div>
        <div css={mq({
                fontSize: 25,
                fontWeight: 500,
                marginTop: 20
               
            })}>Pinterest link</div> 
            <div> <input  css={mq({
            width: 400,
            fontFamily: "Tisa Sans Pro",
            marginTop: 10,
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
        })}  /></div>
        
            </div> <div><div>
            <div css={mq({
                fontSize: 25,
                fontWeight: 500,
               
            })}>Instagram link</div> 
            <div> <input placeholder="https://instagram.com/donceptit/" css={mq({
            width: 400,
            fontFamily: "Tisa Sans Pro",
            marginTop: 10,
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
        })}  /></div>
        <div css={mq({
                fontSize: 25,
                fontWeight: 500,
                marginTop: 20
               
            })}>Twitter link</div> 
            <div> <input placeholder="https://twitter.com/donceptit/" css={mq({
            width: 400,
            fontFamily: "Tisa Sans Pro",
            marginTop: 10,
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
        })}  /></div>
        <div css={mq({
                fontSize: 25,
                fontWeight: 500,
                marginTop: 20
               
            })}>LinkedIn link</div> 
            <div> <input css={mq({
            width: 400,
            fontFamily: "Tisa Sans Pro",
            marginTop: 10,
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
        })}  /></div>
        <div css={mq({
                fontSize: 25,
                fontWeight: 500,
                marginTop: 20
               
            })}>TikTok link</div> 
            <div> <input  css={mq({
            width: 400,
            fontFamily: "Tisa Sans Pro",
            marginTop: 10,
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
        })}  /></div>
        <div css={mq({
                fontSize: 25,
                fontWeight: 500,
                marginTop: 20
               
            })}>Dribble link</div> 
            <div> <input  css={mq({
            width: 400,
            fontFamily: "Tisa Sans Pro",
            marginTop: 10,
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
        })}  /></div>
        <div css={mq({
                fontSize: 25,
                fontWeight: 500,
                marginTop: 20
               
            })}>Vimeo link</div> 
            <div> <input  css={mq({
            width: 400,
            fontFamily: "Tisa Sans Pro",
            marginTop: 10,
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
        })}  /></div>
        
            </div></div></div></div>
            <div  css={mq({
              display: "flex",
              justifyContent: "right",
              marginTop: 50,
              marginBottom: 50

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
         
      </DashboardNav2>
    </div>
  );
};

export default Socialmedia;
