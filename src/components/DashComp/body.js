import DashboardNav from "./dashboardnav";
import { css, jsx } from "@emotion/react";
import facepaint from "facepaint";

const breakpoints = [576, 768, 992, 1200];
const query = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
const Body = () => {
  return (
    <div>
      <DashboardNav>
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
                  src={"svg/bell.svg"}
                />{" "}
                <img
                  css={mq({
                    marginLeft: 20,
                    width: 30,
                  })}
                  src={"svg/user.svg"}
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
                width: "100%",
                color: "#000",
                backgroundColor: "#fff",
                borderRadius: 10
            })}>
                <div css={mq({
                    display: "flex",
                    flexDirection: "column",
                    paddingRight: 30,
                    paddingLeft: 30
                })}>
                <div css={mq({
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                   
                })}>
                <div css={mq({
                    display: "flex",
                    alignItems: "center"
                })}>
                <div css={mq({
                    fontSize: 25,
                    fontWeight: 600,
                    color: "#1f1b39"
                })}><p>Step 1 :</p></div>  <div css={mq({
                    marginLeft: 20,
                    fontSize: 25,
                    fontWeight: 600,
                    color: "#1f1b39"
                })}><p> Edit your details</p></div>
                </div>
                <div> <img src={"svg/close.svg"} /></div>
                </div>
                <div css={mq({
                    display: "flex",
                    justifyContent: "space-between",
                   
                    marginTop: 20
                })}>
                    <div css={mq({
                        flex: "50%",
                       
                    })}>
                    <div>
                    Add your Phone numbers, Links,  Short write-up about your business and your Logo/Personal Picture. <span css={mq({
            color: "#6d61df",
            fontWeight: 600
        })}>Edit Details</span>
                    </div>
                    <div>
                    <img src={"svg/greentab.svg"} />
                    <img  css={mq({
                    marginLeft: 10,
                   
                })} src={"svg/emptytab.svg"} />
                    <img css={mq({
                    marginLeft: 10,
                   
                })} src={"svg/emptytab.svg"} />
                    <img css={mq({
                    marginLeft: 10,
                   
                })} src={"svg/emptytab.svg"} />
                    <img css={mq({
                    marginLeft: 10,
                   
                })} src={"svg/emptytab.svg"} />
                    </div> </div>
                    <div css={mq({
                        flex: "50%",
                    display: "flex",
                    paddingBottom: 50
                  
                })}>
                    <button css={mq({
                           fontSize: 18,
                           border: "solid",
                borderWidth: 1,
                borderColor: "#1f1b39",
                           backgroundColor: "#fff",
                           fontFamily: "Tisa Sans Pro",
                color: "#1f1b39",
                paddingLeft: 30,
                paddingRight: 30,
                paddingTop: 10,
                paddingBottom: 10,
                borderRadius: 5,
                fontWeight: "bold",
                marginLeft: 80,
                
                    
                    
                       })}>SKIP TUTORIAL</button>
                       <button css={mq({
                           fontSize: 18,
                           backgroundColor: "#6d61df",
                           fontFamily: "Tisa Sans Pro",
                           marginLeft: 20,
                color: "#fff",
                paddingLeft: 30,
                paddingRight: 30,
                paddingTop: 10,
                paddingBottom: 10,
                borderRadius: 5,
                fontWeight: "bold",
                outline: "none",
                    border: "none",
                    
                       })}>NEXT STEP</button>
                    </div>
                </div>
                
                </div>
               
            </div>
            <div css={mq({
                marginTop: 50
            })}>
               <div css={mq({
                fontSize: 30,
                fontWeight: 600,
               
            })}><p>Website</p></div>
                <div css={mq({
                    display: "flex",
                    justifyContent: "space-between"
                })}>
                    <div css={mq({
                        backgroundColor: "#fff",
                        paddingLeft: 50,
                        paddingRight: 50,
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderRadius: 10,
                        border: "solid",
                        borderWidth: 1,
                        borderColor: "#eff1f2"
                    })}>
                        <div css={mq({
                    display: "flex",
                    justifyContent: "center"
                })}>
                    <img css={mq({
                   
                   
                })} src={"svg/designbox.svg"} /> </div>  
            <div css={mq({
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center"
            })}><p>Design</p></div></div>
            <div css={mq({
                        backgroundColor: "#fff",
                        paddingLeft: 50,
                        paddingRight: 50,
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderRadius: 10,
                        border: "solid",
                        borderWidth: 1,
                        borderColor: "#eff1f2"
                    })}>
                        <div css={mq({
                    display: "flex",
                    justifyContent: "center"
                })}>
                    <img css={mq({
                    
                   
                })} src={"svg/detailsbox.svg"} /> </div>  
            <div css={mq({
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center"
            })}><p>Details</p></div></div>
             <div css={mq({
                        backgroundColor: "#fff",
                        paddingLeft: 50,
                        paddingRight: 50,
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderRadius: 10,
                        border: "solid",
                        borderWidth: 1,
                        borderColor: "#eff1f2"
                    })}>
                        <div css={mq({
                    display: "flex",
                    justifyContent: "center"
                })}>
                    <img css={mq({
                   
                   
                })} src={"svg/colorsbox.svg"} /> </div>  
            <div css={mq({
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center"
            })}><p>Colors</p></div></div>
             <div css={mq({
                        backgroundColor: "#fff",
                        paddingLeft: 50,
                        paddingRight: 50,
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderRadius: 10,
                        border: "solid",
                        borderWidth: 1,
                        borderColor: "#eff1f2"
                    })}>
                        <div css={mq({
                    display: "flex",
                    justifyContent: "center"
                })}>
                    <img css={mq({
                    
                   
                })} src={"svg/socialmediabox.svg"} /> </div>  
            <div css={mq({
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center"
            })}><p>Social Media</p></div></div>
            </div></div>
            <div css={mq({
                marginTop: 50
            })}>
               <div css={mq({
                fontSize: 30,
                fontWeight: 600,
               
            })}><p>Domain</p></div>
                <div css={mq({
                    display: "flex",
                    justifyContent: "space-between"
                })}>
                    <div css={mq({
                        backgroundColor: "#fff",
                        paddingLeft: 50,
                        paddingRight: 50,
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderRadius: 10,
                        border: "solid",
                        borderWidth: 1,
                        borderColor: "#eff1f2"
                    })}>
                        <div css={mq({
                    display: "flex",
                    justifyContent: "center"
                })}>
                    <img css={mq({
                   
                   
                })} src={"svg/emailsbox.svg"} /> </div>  
            <div css={mq({
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center"
            })}><p>Emails</p></div></div>
            <div css={mq({
                        backgroundColor: "#fff",
                        paddingLeft: 50,
                        paddingRight: 50,
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderRadius: 10,
                        border: "solid",
                        borderWidth: 1,
                        borderColor: "#eff1f2"
                    })}>
                        <div css={mq({
                    display: "flex",
                    justifyContent: "center"
                })}>
                    <img css={mq({
                    
                   
                })} src={"svg/nameserversbow.svg"} /> </div>  
            <div css={mq({
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center"
            })}><p>Nameservers</p></div></div>
             <div css={mq({
                        backgroundColor: "#fff",
                        paddingLeft: 50,
                        paddingRight: 50,
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderRadius: 10,
                        border: "solid",
                        borderWidth: 1,
                        borderColor: "#eff1f2"
                    })}>
                        <div css={mq({
                    display: "flex",
                    justifyContent: "center"
                })}>
                    <img css={mq({
                   
                   
                })} src={"svg/verifybox.svg"} /> </div>  
            <div css={mq({
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center"
            })}><p>FB Verification</p></div></div>
             <div css={mq({
                        backgroundColor: "#fff",
                        paddingLeft: 50,
                        paddingRight: 50,
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderRadius: 10,
                        border: "solid",
                        borderWidth: 1,
                        borderColor: "#eff1f2"
                    })}>
                        <div css={mq({
                    display: "flex",
                    justifyContent: "center"
                })}>
                    <img css={mq({
                    
                   
                })} src={"svg/linksbox.svg"} /> </div>  
            <div css={mq({
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center"
            })}><p>Links</p></div></div>
            </div></div>
            <div css={mq({
                marginTop: 50
            })}>
               <div css={mq({
                fontSize: 30,
                fontWeight: 600,
               
            })}><p>Account</p></div>
                <div css={mq({
                    display: "flex",
                    justifyContent: "space-between"
                })}>
                    <div css={mq({
                        backgroundColor: "#fff",
                        paddingLeft: 50,
                        paddingRight: 50,
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderRadius: 10,
                        border: "solid",
                        borderWidth: 1,
                        borderColor: "#eff1f2"
                    })}>
                        <div css={mq({
                    display: "flex",
                    justifyContent: "center"
                })}>
                    <img css={mq({
                   
                   
                })} src={"svg/accountbox.svg"} /> </div>  
            <div css={mq({
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center"
            })}><p>Settings</p></div></div>
            <div css={mq({
                        backgroundColor: "#fff",
                        paddingLeft: 50,
                        paddingRight: 50,
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderRadius: 10,
                        border: "solid",
                        borderWidth: 1,
                        borderColor: "#eff1f2"
                    })}>
                        <div css={mq({
                    display: "flex",
                    justifyContent: "center"
                })}>
                    <img css={mq({
                    
                   
                })} src={"svg/paymentinfobox.svg"} /> </div>  
            <div css={mq({
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center"
            })}><p>Payment Info</p></div></div>
             <div css={mq({
                        backgroundColor: "#fff",
                        paddingLeft: 50,
                        paddingRight: 50,
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderRadius: 10,
                        border: "solid",
                        borderWidth: 1,
                        borderColor: "#eff1f2"
                    })}>
                        <div css={mq({
                    display: "flex",
                    justifyContent: "center"
                })}>
                    <img css={mq({
                   
                   
                })} src={"svg/upgradebox.svg"} /> </div>  
            <div css={mq({
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center"
            })}><p>Upgrade</p></div></div>
             <div css={mq({
                        backgroundColor: "#fff",
                        paddingLeft: 50,
                        paddingRight: 50,
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderRadius: 10,
                        border: "solid",
                        borderWidth: 1,
                        borderColor: "#eff1f2"
                    })}>
                        <div css={mq({
                    display: "flex",
                    justifyContent: "center"
                })}>
                    <img css={mq({
                    
                   
                })} src={"svg/helpbox.svg"} /> </div>  
            <div css={mq({
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center"
            })}><p>Help</p></div></div>
            </div></div>
          </div></div>
      </DashboardNav>
    </div>
  );
};

export default Body;
