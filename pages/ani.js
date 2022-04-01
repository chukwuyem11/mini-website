import React from "react";

import { css, jsx } from "@emotion/react";
import facepaint from "facepaint";
import { Swipeable } from "react-swipeable";
import { motion, AnimatePresence  } from "framer-motion";


const breakpoints = [576, 768, 992, 1200];
const query = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

const Ani = () => {
    const [position, positionSet] = React.useState(0);

  const right = () => {
    if (position < features.length - 1) {
      positionSet(position + 1);
    }
  }

  const left = () => {
    if (position > 0) {
      positionSet(position - 1);
    }
  }
  const handleSwipe = ({ dir }) => {
    if (dir === "Right") {
      if (position < slides.length - 1) {
        positionSet(position + 1);
      }
    }
    if (dir === "Left") {
      if (position > 0) {
        positionSet(position - 1);
      }
    }
  };
  const features = [
    {
        id: 0,
        img : "svg/green.svg",
        title: "Unlimited Links.",
        body: "Link to everywhere. Add an unlimited number of links to your website."
      },
      {
        id: 1,
        img : "svg/blue.svg",
        title: " Social Icons.",
        body: "Easily link your all social media accounts. Let people easily connect with you."
      },
      {
        id: 2,
        img : "svg/purple.svg",
        title: "Logo/Personal Picture.",
        body: "Easily upload your brand identity or personal picture to your mini-website."
      },
      {
        id: 3,
        img : "svg/yellow.svg",
        title: "Contact Form.",
        body: "Let individuals easily fill a form to reach to you or your business. You get alerted instantly."
      },
      {
        id: 4,
        img : "svg/red.svg",
        title: "SEO.",
        body: "Get found easily on Google or other search engines with Search Engine Optimization."
      },
      {
        id: 5,
        img : "svg/orange.svg",
        title: "Meta Tags Editor.",
        body: "Easily add Facebook Pixel, Google Analytics, Facebook Verification codes to your website."
      },
  ]
    return(
<>
<div>
                <button onClick={() => left()}>Left</button>
            </div>
            <div>
                <button onClick={() => right()}>Right</button>
            </div>
            <div css={css`
            display: flex;
            justify-content: center;
            `}>
        <div  css={css`
          width: 100%;
          height: 100vh;
          overflow: hidden;
          padding: 0px;
          margin: 0px;
          display: flex;
          justify-content: center;
          align-items: center;
         
          `}>
            
          <div css={css`
          position: relative;
          `} >
             {features.map((slide) => (
      <motion.div
     
                  css={css`
                  position: absolute;
                
  overflow: hidden;
 
  border-radius: 10px;
  top: 0;
        
       
       
                  `}
                  key={slide.id}
                  initial={{ scale: 0, rotation: -180 }}
                  animate={{
                    rotate: 0,
                    left: `${(slide.id - position) * 60 - 30}vw`,
                    scale: slide.id === position ? 1 : 0.8,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                >
                  <div
                    css={mq({
                      backgroundColor: "#161328",
                      borderRadius: 10,
                      padding: 20,
                      height: 230,
                      width: 250,
                    })}
                  >
                    <div>
                      <img src={slide.img} />
                    </div>
                    <div
                      css={mq({
                        fontSize: [20,22,22,22],
                        fontWeight: "bold",
                        color: "#fff",
                      })}
                    >
                      <p>{slide.title}</p>
                    </div>
                    <div
                      css={mq({
                        fontSize: 14,

                        color: "#fff",
                      })}
                    >
                      <p>
                       {slide.body}
                      </p>
                    </div>
                  </div>
                </motion.div>))}
                
                </div>
        </div> </div></>
    )
}

export default Ani