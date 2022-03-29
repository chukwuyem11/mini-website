import React, { useState } from "react";
import facepaint from "facepaint";
import DashboardNav2 from "./dashboardnav2";
import { motion, AnimatePresence,  } from "framer-motion";
import Modal from "../menu/modal"
import Mobmenu2 from "./mobmenu2"
const breakpoints = [576, 768, 992, 1200];
const query = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

const Nav2 = (props) => {
  const [modalopen, setModalopen] = useState(false)
    
  const close = () => setModalopen(false)
  const open = () => setModalopen(true)
    return (
        <div>
          <AnimatePresence
                 initial={false}
                 exitBeforeEnter={true}
                 onExitComplete={() => null}
                 >

{modalopen && <Modal width= {300} image={"/svg/close.svg"} modalopen={modalopen} handleClose={close}><Mobmenu2 /></Modal>}
                 </AnimatePresence>
            <DashboardNav2>
            <div
          css={mq({
            display: "flex",
            justifyContent: ["space-between","right","right","right"],
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
              width: ["100%", "75%","75%","75%"],

              paddingRight: 50,
              paddingTop: 20,
              paddingBottom: 20,
            })}
          >
            <div
              css={mq({
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              
              paddingLeft:[20,0,0,0],
              })}
            >
              <div css={mq({
                 cursor: "pointer",
                 display: ["block","none","none","none"]
                })}  onClick={() => (modalopen ? close() : open())}>
              <img
                  css={mq({
                 
                  })}
                  src={"/svg/menuicon.svg"}
                />             </div>
              <div
                css={mq({
                  fontSize: [25,35,35,35],
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
                <div>{props.children}</div></DashboardNav2>
        </div>
    )
}

export default Nav2