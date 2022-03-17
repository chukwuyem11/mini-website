import DashboardNav2 from "./dashboardnav2";
import { css, jsx } from "@emotion/react";
import facepaint from "facepaint";

const breakpoints = [576, 768, 992, 1200];
const query = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
const Settings = () => {
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
                
            })}>
               <div css={mq({
                fontSize: 30,
                fontWeight: 600,
               
            })}><p>Account Settings</p></div>
            
            <div >
                <div css={mq({
                    display: "flex",
                    width: "50%",
                    alignItems: "center"
                })}>
            <div><img
            css={mq({
              
             
            })}
            src={"/svg/informationbutton.svg"}
          /></div>
          <div css={mq({
                    marginLeft: 20
                })}>Details here won’t appear publicly, they are for your account use only.</div>
          </div>
            </div>
            </div>
            <div css={mq({
                marginTop: 20
            })}>
                <div css={mq({
                    display: "flex",
                    justifyContent: "space-between"
                })}>
                <div>
                <div css={mq({
                fontSize: 20,
                fontWeight: 600,
               
            })}>Business name</div>
            <div> <input  css={mq({
            width: 400,
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
                fontSize: 20,
                marginTop: 20,
                fontWeight: 600,
               
            })}>Full name</div>
            <div> <input  css={mq({
            width: 400,
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
        })}  /></div></div>

<div>
<div css={mq({
                fontSize: 20,
                fontWeight: 600,
               
            })}>Phone number</div>
            <div> <input  css={mq({
            width: 400,
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
                fontSize: 20,
                fontWeight: 600,
                marginTop: 20
               
            })}>Email address</div>
            <div> <input  css={mq({
            width: 400,
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
        })}  /></div></div>
        
        </div>
        <button css={mq({
                           fontSize: 18,
                           border: "none",
                
                           backgroundColor: "#6D61DF",
                           fontFamily: "Tisa Sans Pro",
                color: "#fff",
                paddingLeft: 30,
                paddingRight: 30,
                paddingTop: 10,
                paddingBottom: 10,
                borderRadius: 5,
                fontWeight: "bold",
                marginTop: 20
                
                    
                    
                       })}>SAVE</button>


                       <div css={mq({
                            marginTop: 50
                       })}>
                            <div css={mq({
                fontSize: 25,
                fontWeight: 600,
               
            })}><p>Change Account Password</p></div>
                       <div css={mq({
                fontSize: 20,
                fontWeight: 600,
               
               
            })}>Old Password</div>
            <div> <input  css={mq({
            width: 400,
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
                fontSize: 20,
                fontWeight: 600,
               marginTop: 20
               
            })}>New Password</div>
            <div> <input  css={mq({
            width: 400,
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
                fontSize: 20,
                fontWeight: 600,
               marginTop: 20
               
            })}>Repeat New Password</div>
            <div> <input  css={mq({
            width: 400,
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
        <div  css={mq({
              
              marginTop: 20,
              marginBottom: 50

          })}>
             <button css={mq({
                           fontSize: 18,
                           border: "none",
                
                           backgroundColor: "#6D61DF",
                           fontFamily: "Tisa Sans Pro",
                color: "#fff",
                paddingLeft: 30,
                paddingRight: 30,
                paddingTop: 10,
                paddingBottom: 10,
                borderRadius: 5,
                fontWeight: "bold",
               
                
                    
                    
                       })}>SAVE</button> </div>
                       </div>
            </div>
            
          </div></div>
         
      </DashboardNav2>
    </div>
  );
};

export default Settings;
