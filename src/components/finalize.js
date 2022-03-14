import React from "react";
import { css, jsx } from "@emotion/react";
import facepaint from "facepaint";
const breakpoints = [576, 768, 992, 1200];
const query = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

const Finalize = () => {
  return (
    <div css={mq({
        backgroundColor: "#fafafa",
        display: "flex",
        flexDirection: "column",
        height: "100vh"
    })}>
      <div
        css={mq({
          display: "flex",
          justifyContent: "center",
          marginTop: 10,
        })}
      >
        <img
          css={mq({
            width: 200,
          })}
          src="donceptbluelogo.png"
        />
      </div>
      <div
        css={mq({
          display: "flex",
          justifyContent: "center",
          marginTop: 50
        })}
      >
          <div>
          <div css={mq({
              fontSize: 35,
              fontWeight: 600
          })}>Finalize your mini-website</div>
        <div
          css={mq({
            display: "flex",
            justifyContent: "space-between",
            width: "90%",
            marginTop: 20
          })}
        >
            <div>
            <div css={mq({
              fontSize: 25,
              fontWeight: 500
          })}>Create your account</div>
                <div  css={mq({
            display: "flex",
            justifyContent: "space-between",
            width: "90%",
            marginTop: 20
          })}>
          <div css={mq({
              marginRight: 40
          })}>
              
              <div css={mq({
                marginTop: 10
            })}>
              <label css={mq({
                  fontSize: 18
              })}>Full Name</label>
              <div>
                <input css={mq({
            width: 300,
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 10,
            paddingRight: 10,
            outline: "none",
            border: "solid",
            borderWidth: 1,
            borderColor: "#e2dff8",
            marginTop: 10,
            
            
               
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
            <div css={mq({
                marginTop: 10
            })}>
              <label css={mq({
                  fontSize: 18
              })}>Email Address</label>
              <div>
                <input css={mq({
            width: 300,
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 10,
            paddingRight: 10,
            outline: "none",
            border: "solid",
            borderWidth: 1,
            borderColor: "#e2dff8",
            marginTop: 10,
            
               
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
            <div css={mq({
                marginTop: 10
            })}>
              <label css={mq({
                  fontSize: 18
              })}>Password</label>
              <div>
                <input css={mq({
            width: 300,
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 10,
            paddingRight: 10,
            outline: "none",
            border: "solid",
            borderWidth: 1,
            borderColor: "#e2dff8",
            marginTop: 10,
            
               
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
          </div>
          <div>
          <div css={mq({
                marginTop: 10
            })}>
              <label css={mq({
                  fontSize: 18
              })}>Business Name</label>
              <div>
                <input css={mq({
            width: 300,
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 10,
            paddingRight: 10,
            outline: "none",
            border: "solid",
            borderWidth: 1,
            borderColor: "#e2dff8",
            marginTop: 10,
            
               
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
        })} />
              </div>
            </div>
            <div css={mq({
                marginTop: 10
            })}>
              <label css={mq({
                  fontSize: 18
              })}>Phone Number</label>
              <div>
                <input css={mq({
            width: 300,
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 10,
            paddingRight: 10,
            outline: "none",
            border: "solid",
            borderWidth: 1,
            borderColor: "#e2dff8",
            marginTop: 10,
            
               
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
            <div css={mq({
                marginTop: 10
            })}>
              <label css={mq({
                  fontSize: 18
              })}>Confirm Password</label>
              <div>
                <input css={mq({
            width: 300,
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 10,
            paddingRight: 10,
            outline: "none",
            border: "solid",
            borderWidth: 1,
            borderColor: "#e2dff8",
            marginTop: 10,
            
               
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
        })} />
              </div>
            </div>
          </div> </div></div>
          
          <div>
            <div css={mq({
                marginLeft: 50,
                width: 400,
                backgroundColor: "#fff",
                borderRadius: 10,
               
                border: "solid",
                borderWidth: 1,
                borderColor: "#f7f8f8",
            })}>
                <div css={mq({
                    textAlign: "center",
                    fontSIze: 25,
                    fontWeight: 600,
                    
         paddingTop: 10,
         paddingBottom: 10,
         border: "solid",
                    borderWidth: 1,
                    borderColor: "transparent",
                    borderBottomColor: "#f7f8f8",
                })}><p>Order Summary</p></div>
                <div css={mq({
                    display: "flex",
                    justifyContent: "space-between",
                    paddingLeft: 30,
         paddingRight: 30,
         paddingTop: 10,
         paddingBottom: 10,
         border: "solid",
                    borderWidth: 1,
                    borderColor: "transparent",
                    borderBottomColor: "#f7f8f8",
                })}>
                    <div><div css={mq({
        
        fontSize: 22,
        fontWeight: 500,
        
    })}>Mini-website <br /> <span css={mq({
        color: "#6d61df"
    })}> doncept.com</span></div> </div>
                    <div>
                        <div css={mq({
        textDecoration: "line-through",
        color: "#d5d5d5 ",
        fontSize: 22,
        fontWeight: 500,
        marginRight: 20
    })}>₦17,000</div>
                        <div css={mq({
        
        fontSize: 25,
        fontWeight: 500,
        
    })}>₦9,900</div>

                    </div>
                </div>
                <div css={mq({
                    paddingTop: 10,
                    paddingBottom: 20,
                    paddingLeft: 30,
         paddingRight: 30,
                    border: "solid",
                               borderWidth: 1,
                               borderColor: "transparent",
                               borderBottomColor: "#f7f8f8",
                })}><div css={mq({
        
                    fontSize: 22,
                    fontWeight: 600,
                    
                })}>Have a Coupon code?</div>
                <div>
                <div css={mq({
            display: "flex",
            justifyContent: "center",
            marginTop: 20,
            // marginBottom: 20,
        })}>
        <input css={mq({
            width: "30vw",
            padding: 10,
            outline: "none",
            border: "solid",
            borderWidth: 1,
            borderColor: "#e2dff8",
            borderRightColor: "transparent",
               
                borderRadius: "5px 0px 0px 5px",
            ":focus" : {
                
                outline: "none",
                border: "solid",
            borderWidth: 1,
            borderColor: "#e2dff8",
            borderRightColor: "transparent",
                padding: 10,
            }
        })} type="box" ></input> <div>
        <button css={mq({
            backgroundColor: "#E73A04",
            color: "#fff",
            padding: 10,
            borderRadius: "0px 5px 5px 0px",
            outline: "none",
                border: "none",
                fontSize: 18,
                fontWeight: 600,
                fontFamily: "Tisa Sans Pro"
        })}>Apply</button>
    </div>
   
        </div>
                </div>
                
                </div>
                <div css={mq({
                    paddingTop: 20,
                    paddingBottom: 20,
                    paddingLeft: 30,
         paddingRight: 30,
                    border: "solid",
                               borderWidth: 1,
                               borderColor: "transparent",
                               borderBottomColor: "#f7f8f8",
                })}>
                
                    <div>  <button css={mq({
        fontSize: 18,
        backgroundColor: "#3BB75E",
        fontFamily: "Tisa Sans Pro",
       
color: "#fff",
paddingLeft: 30,
paddingRight: 30,
paddingTop: 10,
paddingBottom: 10,
borderRadius: 3,
fontWeight: "bold",
outline: "none",
 border: "none",
 
    })}>Register & Checkout Now</button></div>
                </div>
            </div>
          </div>
        </div></div>
      </div>
    </div>
  );
};

export default Finalize;
