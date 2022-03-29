import { motion,  } from "framer-motion";
import Backdrop from "./backdrop";
import { MdClose } from "react-icons/md";
import facepaint from "facepaint";
const breakpoints = [576, 768, 992, 1200];
const query = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

const Modal = (props) => {
 const dropIn = {
    hidden: {
    
      x: -500,
      
    },
    visible: {
     y: "0",
      x: "0",
      // opacity: 1,
      transition: {
        duration: 0.500,
        
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      x: -500,
     
    },
  };

  return (
    <Backdrop onClick={props.handleClose}>
      <motion.div
     
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div css={mq({
                display: "flex",
               
               
                justifyContent: "center",
                flexDirection: "column"
            })} onClick={props.handleClose}>
        
        
                    <div css={mq({ })}>
                   
  <div css={mq({position: "fixed", top: 0, left: 0, marginTop: -16,backgroundColor: "#1F1B39", width: props.width, height: "100vh",  })} onClick={props.handleClose}>
  <div css={mq({ display: "flex", alignItems: "center", justifyContent: "right", marginTop: 10  })}><div css={mq({
    fontSize: 18,
    fontWeight: 600,
    color: "#fff"
  })}>Close</div>
         <div css={mq({
           
           // px: 2, py: 1,
           cursor: "pointer",
           marginLeft: 10,
           marginRight: 10
           // mx:[1, "", ""]
         })} onClick={props.handleClose}> <img src={props.image} /></div></div>{props.children}</div></div></div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
