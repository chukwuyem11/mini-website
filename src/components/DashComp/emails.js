import DashboardNav2 from "./dashboardnav2";
import { css, jsx } from "@emotion/react";
import facepaint from "facepaint";

const breakpoints = [576, 768, 992, 1200];
const query = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
const Emails = () => {
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
                display: "flex",
                justifyContent: "space-between",
                marginTop: 50
            })}>
                <div css={mq({
                    backgroundColor: "#fff",
                    borderRadius: 10,
                    border: "solid",
            borderWidth: 1,
            borderColor: "#EFF1F2",
            width: 450
                })}>
                <div css={mq({
                fontSize: 25,
                fontWeight: 600,
                paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 30,
            paddingRight: 30,
                border: "solid",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
            
               
            })}>Email Address</div>
            <div css={mq({
                paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
                    
            })}><div css={mq({
                fontSize: 18,
                color: "#777777"
            })}><p>Add a new email account with ease.</p></div>
            <div  css={mq({
                fontSize: 18,
                color: "#777777"
            })}><p>Access mail easily at: <span css={mq({
                color: "#6D61DF",
                fontWeight: 600
            })}>https://mail.doncept.com</span></p></div>
            <div css={mq({
                fontSize: 22,
                fontWeight: 600
            })}><p>2/3 Emails created</p></div>
            
            </div>
            <div css={mq({
                paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                fontSize: 22,
                fontWeight: 600,
                color: "#6D61DF",
            })}>+ Add Email Account</div>
            </div>
            
            <div css={mq({
                    backgroundColor: "#fff",
                    borderRadius: 10,
                    border: "solid",
            borderWidth: 1,
            borderColor: "#EFF1F2",
            width: 450
                })}>
                <div css={mq({
                fontSize: 25,
                fontWeight: 600,
                paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 30,
            paddingRight: 30,
                border: "solid",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
            
               
            })}>Plan Details</div>
            <div css={mq({
                paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
                    
            })}>
            <div  css={mq({
                fontSize: 18,
                color: "#777777"
            })}><p>Your plan limit is <span css={mq({
               
                fontWeight: 600
            })}>500MB</span></p></div>
            <div css={mq({
                fontSize: 18,
                color: "#777777"
            })}><p>Easily upgrade your storage and email limit</p></div>
            
            
            </div>
            <div css={mq({
                display: "flex",
                alignItems: "center",
                paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
            })}>
            <img
            css={mq({
              width: 30,
            })}
            src={"/svg/uparrow.svg"}
          />
            <div css={mq({
                
                fontSize: 22,
                fontWeight: 600,
                marginLeft: 10,
                color: "#6D61DF",
            })}>Upgrade Email Limit </div> </div>
            </div>
            </div>
            <div css={mq({
                marginTop: 50
            })}>
                <div css={mq({
                fontSize: 30,
                fontWeight: 600,
               
            })}><p>Manage Email Accounts</p></div>
            
            <div css={mq({
                backgroundColor: "#fff",
                borderRadius: 10,
                border: "solid",
        borderWidth: 1,
        borderColor: "#EFF1F2",
            })}><div css={mq({
                paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
            display: "flex"
                    
            })}><div css={mq({
                fontSize: 20,
                fontWeight: 600,
            })}>Email accounts</div> <div css={mq({
                fontSize: 20,
                fontWeight: 600,
                marginLeft: 200
            })}>Forward to</div></div>
            
            <div css={mq({
                paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
            display: "flex"
                    
            })}><div css={mq({
                fontSize: 18,
                color: "#777777",
                fontWeight: 500
            })}>info@doncept.com.ng</div> <div css={mq({
                fontSize: 18,
                color: "#777777",
                marginLeft: 160,
                fontWeight: 500
            })}>donceptemail@gmail.com</div>
            <div css={mq({
                fontSize: 20,
                color: "#6D61DF",
                marginLeft: 150,
                fontWeight: 600
            })}>Login</div><img
            css={mq({
              
              marginLeft: 50,
            })}
            src={"/svg/options.svg"}
          />
            </div>
            <div css={mq({
                paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                
            display: "flex"
                    
            })}><div css={mq({
                fontSize: 18,
                color: "#777777",
                fontWeight: 500,
            })}>hello@doncept.com.ng</div> <div css={mq({
                fontSize: 18,
                color: "#777777",
                marginLeft: 160,
                fontWeight: 500
            })}>donceptemail@gmail.com</div>
            <div css={mq({
                fontSize: 20,
                color: "#6D61DF",
                marginLeft: 150,
                fontWeight: 600
            })}>Login</div><img
            css={mq({
              
              marginLeft: 50,
            })}
            src={"/svg/options.svg"}
          />
            </div>
            </div>
            </div>
            
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

export default Emails;
