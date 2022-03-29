import Nav2 from "./nav2"
import { css, jsx } from "@emotion/react";
import facepaint from "facepaint";
import {motion} from "framer-motion"

const breakpoints = [576, 768, 992, 1200];
const query = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
const Emails = () => {

  const mails = [
    {
      id: 1,
      email: "info@doncept.com.ng",
    forwarded: "donceptemail@gmail.com"
  },
  {
    id: 2,
    email: "hello@doncept.com.ng",
  forwarded: "donceptemail@gmail.com"
}
  ]
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
              width: ["100%", "75%","75%","75%"],

              paddingRight: [0, 50, 50, 50],
              paddingTop: 20,
              paddingBottom: 20,
            })}
          >


           
            
            <div css={mq({
                display: "flex",
                justifyContent: "space-between",
                flexDirection: ["column","row","row","row"],
                marginTop: 50,
                paddingRight: [20, 0, 0, 0],
                paddingLeft: [20, 0, 0, 0],
            })}>
                <div css={mq({
                    backgroundColor: "#fff",
                    borderRadius: 10,
                    border: "solid",
            borderWidth: 1,
            borderColor: "#EFF1F2",
            width: ["100%",450,450,450]
                })}>
                <div css={mq({
                fontSize: [22,25,25,25],
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
                fontSize: [16,18,18,18],
                color: "#777777"
            })}><p>Add a new email account with ease.</p></div>
            <div  css={mq({
               fontSize: [16,18,18,18],
                color: "#777777"
            })}><p>Access mail easily at: <span css={mq({
                color: "#6D61DF",
                fontWeight: 600
            })}>https://mail.doncept.com</span></p></div>
            <div css={mq({
                fontSize: [20,22,22,22],
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
                    marginTop: [50,0,0,0],
                    border: "solid",
            borderWidth: 1,
            borderColor: "#EFF1F2",
            width: ["100%",450,450,450]
                })}>
                <div css={mq({
                fontSize: [22,25,25,25],
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
              <div css={mq({
                paddingTop: 20,
                paddingBottom: 20,
               
              })}>
              <div css={mq({
                border: "solid",
                borderWidth: 1,
                borderRadius: 50,
                borderColor: "#c5c0f2",
              })}>
  <motion.div animate={{ width:"30%" }} initial={{width:"0%"}} transition={{ ease: "easeOut", duration: 1 }} css={mq({
     
                height:24,
                backgroundColor:"#6D61DF",
                // width:"30%",
                borderRadius: 50,
                display: "flex",
                justifyContent: "right",
                
                
                
              })} ><div css={mq({
                paddingLeft: 10,
                paddingRight: 10,
                fontSize: [16,18,18,18],
                color: "#fff",
                fontWeight: 500
               
              })}>150</div></motion.div>
</div></div>
            <div  css={mq({
                fontSize: [16,18,18,18],
                color: "#777777"
            })}><p>Your plan limit is <span css={mq({
               
                fontWeight: 600
            })}>500MB</span></p></div>
            <div css={mq({
                fontSize: [16,18,18,18],
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
                
                fontSize: [20,22,22,22],
                fontWeight: 600,
                marginLeft: 10,
                color: "#6D61DF",
            })}>Upgrade Email Limit </div> </div>
            </div>
            </div>
            <div css={mq({
                marginTop: 50,
                paddingRight: [20, 0, 0, 0],
                paddingLeft: [20, 0, 0, 0],
            })}>
                <div css={mq({
                fontSize: 30,
                fontWeight: 600,
                paddingRight: [20, 0, 0, 0],
                paddingLeft: [20, 0, 0, 0],
               
            })}><p>Manage Email Accounts</p></div>
            
            <div css={mq({
                backgroundColor: "#fff",
                borderRadius: 10,
                border: "solid",
        borderWidth: 1,
        borderColor: "#EFF1F2",
        display: ["none", "block","block","block"]
        
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
            <div>
              {mails.map((mail) => (<div key={mail.id} css={mq({
                 paddingLeft: 10,
                 paddingRight: 10,
                 marginBottom: 20
              })}>
                <div css={mq({
                backgroundColor: "#fff",
                borderRadius: 10,
                border: "solid",
        borderWidth: 1,
        borderColor: "#EFF1F2",
        paddingLeft: 20,
        paddingRight: 20,
        display: ["block", "none","none","none"]
        
            })}>
              <div css={mq({
                display: "flex",
                alignItems: "center",
              
              })}>
              <div css={mq({
                flex: "70%",
                padding: 10
              })}>
                
              <div css={mq({
                fontSize: 18,
                fontWeight: 600
              })}>
              {mail.email}</div>
              <div css={mq({
                display: "flex",
                marginTop: 10,
              })}>
              <img
              css={mq({
               
                marginLeft: 10,
              })}
              src={"/svg/group.svg"}
            />
              <div css={mq({
                fontSize: 14,
                marginLeft: 5,
              color: "#777777"
              })}>{mail.forwarded}</div></div></div>
              <div css={mq({
                flex: "10%",
                display: "flex",
                justifyContent: "center",
                border: "solid",
                borderWidth: 1,
                borderColor: "transparent",
                borderLeftColor: "#e3e3e3",
                borderRightColor: "#e3e3e3",
                
              })}><img
              css={mq({
                
              
              })}
              src={"/svg/options.svg"}
            /></div>
              <div css={mq({
                flex: "10%"
              })}>
                
                <img
              css={mq({
                
                marginLeft: 50,
              })}
              src={"/svg/vecmail.svg"}
            /></div>
              </div>
            </div>

              </div>))}
              
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

export default Emails;
