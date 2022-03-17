import DashboardNav2 from "./dashboardnav2";
import { css, jsx } from "@emotion/react";
import facepaint from "facepaint";

const breakpoints = [576, 768, 992, 1200];
const query = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
const Colors = () => {
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
               
            })}><p>Choose Color Theme</p></div>
            
            <div >
            <div >
                    <div css={mq({
                    display: "flex",
                    
                })}>
                    <div css={mq({
                        width: 40,
                        height: 40,
                        
                        backgroundColor: "#000"
                    })}></div>
                    <div css={mq({
                        marginLeft: 10,
                        width: 40,
                        height: 40,
                        
                        backgroundColor: "#0036F6"
                    })}></div>
                    <div css={mq({
                         marginLeft: 10,
                        width: 40,
                        height: 40,
                        
                        backgroundColor: "#EF2626"
                    })}></div>
                    <div css={mq({
                         marginLeft: 10,
                        width: 40,
                        height: 40,
                        
                        backgroundColor: "#6D61DF"
                    })}></div>
                    <div css={mq({
                         marginLeft: 10,
                        width: 40,
                        height: 40,
                        
                        backgroundColor: "#3BB75E"
                    })}></div> </div> </div> 
            </div>
            <div css={mq({
                marginTop: 10
            })}>
            <div >
                    <div css={mq({
                    display: "flex",
                    
                })}>
                    <div css={mq({
                        width: 40,
                        height: 40,
                        
                        backgroundColor: "#2F80ED"
                    })}></div>
                    <div css={mq({
                        marginLeft: 10,
                        width: 40,
                        height: 40,
                        
                        backgroundColor: "#6FCF97"
                    })}></div>
                    <div css={mq({
                         marginLeft: 10,
                        width: 40,
                        height: 40,
                        
                        backgroundColor: "#27AE60"
                    })}></div>
                    <div css={mq({
                         marginLeft: 10,
                        width: 40,
                        height: 40,
                        
                        backgroundColor: "#219653"
                    })}></div>
                    <div css={mq({
                         marginLeft: 10,
                        width: 40,
                        height: 40,
                        
                        backgroundColor: "#F2994A"
                    })}></div> </div> </div> 
            </div>
            <div css={mq({
                marginTop: 10
            })}>
            <div >
                    <div css={mq({
                    display: "flex",
                    
                })}>
                    <div css={mq({
                        width: 40,
                        height: 40,
                        
                        backgroundColor: "#D828A7"
                    })}></div>
                    <div css={mq({
                        marginLeft: 10,
                        width: 40,
                        height: 40,
                        
                        backgroundColor: "#A8C00F"
                    })}></div>
                    <div css={mq({
                         marginLeft: 10,
                        width: 40,
                        height: 40,
                        
                        backgroundColor: "#EC6215"
                    })}></div>
                    <div css={mq({
                         marginLeft: 10,
                        width: 40,
                        height: 40,
                        
                        backgroundColor: "#14B7C1"
                    })}></div>
                    <div css={mq({
                         marginLeft: 10,
                        width: 40,
                        height: 40,
                        
                        backgroundColor: "#1983E4"
                    })}></div> </div> </div> 
            </div>
            <div css={mq({
                marginTop: 10
            })}>
            <div >
                    <div css={mq({
                    display: "flex",
                    
                })}>
                    <div css={mq({
                        width: 40,
                        height: 40,
                        
                        backgroundColor: "#1F1B39"
                    })}></div>
                    <div css={mq({
                        marginLeft: 10,
                        width: 40,
                        height: 40,
                        
                        backgroundColor: "#F2C94C"
                    })}></div>
                    <div css={mq({
                         marginLeft: 10,
                        width: 40,
                        height: 40,
                        
                        backgroundColor: "#EB5757"
                    })}></div>
                    <div css={mq({
                         marginLeft: 10,
                        width: 40,
                        height: 40,
                        
                        backgroundColor: "#E4405F"
                    })}></div>
                    <div css={mq({
                         marginLeft: 10,
                        width: 40,
                        height: 40,
                        
                        backgroundColor: "#828282"
                    })}></div> </div> </div> 
            </div>
            <div css={mq({
                marginTop: 10
            })}>
            <div >
                    <div css={mq({
                    display: "flex",
                    
                })}>
                    <div css={mq({
                        width: 40,
                        height: 40,
                        
                        backgroundColor: "#9B51E0"
                    })}></div>
                    <div css={mq({
                        marginLeft: 10,
                        width: 40,
                        height: 40,
                        
                        backgroundColor: "#BB6BD9"
                    })}></div>
                    <div css={mq({
                         marginLeft: 10,
                        width: 40,
                        height: 40,
                        
                        backgroundColor: "#4F4F4F"
                    })}></div>
                    <div css={mq({
                         marginLeft: 10,
                        width: 40,
                        height: 40,
                        
                        backgroundColor: "#5025D1"
                    })}></div>
                    <div css={mq({
                         marginLeft: 10,
                        width: 40,
                        height: 40,
                        
                        backgroundColor: "#2D9CDB"
                    })}></div> </div> </div> 
            </div>
            </div>
            <div css={mq({
                marginTop: 50
            })}>
                <div css={mq({
                    display: "flex",
                    
                    alignItems: "center"
                })}>
               <div css={mq({
                fontSize: 30,
                fontWeight: 600,
               
            })}><p>Input Color Code</p></div> <div css={mq({
                color: "red",
                fontWeight: 500,
                marginLeft: 50
            })}>*optional</div></div>
            <div> <input placeholder="Businessname.com" css={mq({
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

export default Colors;
