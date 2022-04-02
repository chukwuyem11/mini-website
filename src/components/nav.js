import React, { useState } from "react";
import { motion, AnimatePresence  } from "framer-motion";

import { css, jsx } from "@emotion/react";
import facepaint from "facepaint";
// import { signIn, signOut, useSession } from "next-auth/client"

const breakpoints = [576, 768, 992, 1200];
const query = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
import { BiMenuAltRight } from "react-icons/bi";

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

const Nav = () =>{
    // const [session, loading] = useSession()
    // console.log(session)
    const [modalopen, setModalopen] = useState(false)

    return(
        
            <div css={mq({
                display: "flex",
                paddingLeft: [10,30,30,30],
                paddingRight: [10,30,30,30],
                paddingTop: 20,
                alignItems: "center",
            })}>
                <div css={mq({
                    flex: "20%",
                    
                })}>
                <img css={mq({
                    width: [150,200,200,200]
                })} src="donceptlogo.png"/>
                </div>
                
<div css={mq({
                    flex: "30%"
                })}>
                <div css={mq({
                    display: ["none","flex","flex","flex"],
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
                        fontSize: 30,
                        display: ["block","none","none","none"],
                        marginLeft: 40,
                        cursor: "pointer"
                    })} onClick={() => setModalopen(!modalopen)}>
                    <BiMenuAltRight  color="#ffffff"/></div>
                    <AnimatePresence>
                    {modalopen &&
                    
                    <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} exit={{opacity: 0,  y: 20}} css={mq({
                        position: "relative"
                    })}>
                        <div css={mq({
                        position: "absolute",
                        top: 0,
                        right: 30,
                        width: 200,
                        borderRadius: 5,
                        backgroundColor: "#161328",
                        color: "#000"
                    })}> <div css={mq({
                        color: "#fff",
                        fontSize: 20,
                        padding: "10px 15px",
                        border: "solid",
                        borderWidth: "0px 0px 1px 0px",
                        borderColor: "#f5f5f5"
                    })}>
                    Features
                    </div>
                    <div css={mq({
                        color: "#fff",
                        padding: "10px 15px",
                        border: "solid",
                        borderWidth: "0px 0px 1px 0px",
                        borderColor: "#f5f5f5",
                        fontSize: 20,
                    })}>
                    How it works
                    </div>
                    <div css={mq({
                        color: "#fff",
                        padding: "10px 15px",
                        
                        
                        fontSize: 20,
                    })}>
                        Pricing
                    </div></div>
                    </motion.div> }</AnimatePresence>
               <div css={mq({
                   display: ["none","flex","flex","flex"],
                   alignItems: "center",
                   justifyContent: "right",
               })}>
                   {/* {!session && (
        <>
         <div css={mq({
                    color: "#fff",
                    marginRight: 50,
                    fontSize: 20,
                })} onClick={() => signIn()}>
                   Login </div>
          
        </>
      )}
      {session && (
        <>
         <div css={mq({
                    color: "#fff",
                    marginRight: 50,
                    fontSize: 20,
                })} onClick={() => signOut()}>
                   Logout </div>
          
        </>
      )} */}
      <div css={mq({
                    color: "#fff",
                    marginRight: 50,
                    fontSize: 20,
                })} >
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