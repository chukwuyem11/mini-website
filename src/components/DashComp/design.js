import Nav2 from "./nav2"
import { css, jsx } from "@emotion/react";
import React, { useState, useRef, useEffect,} from "react";
import {motion} from "framer-motion"
import facepaint from "facepaint";

const breakpoints = [576, 768, 992, 1200];
const query = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
const Design = () => {
    const [width, setWidth] = useState(0)
    const carousel = useRef()

    useEffect(() => {
        console.log(carousel.current.scrollWidth, carousel.current.offsetWidth,)
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    })
    
    
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

              paddingRight: ["",50,50,50],
              paddingTop: 20,
              paddingBottom: 20,
              paddingRight: [20,0,0,20],
              paddingLeft:[20,0,0,0],
            })}
          >



          

            <div css={mq({
                
               
            })}>
               <div css={mq({
                fontSize: 30,
                fontWeight: 600,
               
            })}><p>Image Style</p></div>
            
            <div css={mq({
        //    display: "flex",
           display: ["block", "none", "none", "none"],
        //    alignItems: "center",
          
        //    justifyContent: "center"
         })}>
          
          <div >
<div  ref={carousel}  css={mq({
    cursor: "grab",
    overflow: "hidden",
    width: 350,
    margin: "0 20px",
    
})}>
<motion.div  drag="x" dragConstraints={{right: 0, left: -width}} css={mq({
               display: "flex",
            //    backgroundColor: "lightblue"
            })}>
                <motion.div  css={mq({
                    
                 
                    padding: 20                })}>
   <div css={mq({
                        backgroundColor: "#fff",
                        paddingLeft: 50,
                        paddingRight: 50,
                        paddingTop: 20,
                        paddingBottom: 20,
                        borderRadius: 10,
                        border: "solid",
                        borderWidth: 1,
                        borderColor: "#eff1f2"
                    })}>
                        <div css={mq({
                    display: "flex",
                    justifyContent: "center"
                })}>
                    <div css={mq({
                        width: 150,
                        height: 150,
                        borderRadius: "100%",
                        backgroundColor: "#c4c4c4"
                    })}></div> </div>  
            <div css={mq({
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center"
            })}><p>Circle</p></div></div></motion.div>
    <motion.div css={mq({
                   
                    padding: 20                })}>
   <div css={mq({
                        backgroundColor: "#fff",
                        paddingLeft: 50,
                        paddingRight: 50,
                        paddingTop: 20,
                        paddingBottom: 20,
                        borderRadius: 10,
                        border: "solid",
                        borderWidth: 1,
                        borderColor: "#eff1f2"
                    })}>
                        <div css={mq({
                    display: "flex",
                    justifyContent: "center"
                })}>
                    <div css={mq({
                        width: 150,
                        height: 150,
                        borderRadius: 5,
                        backgroundColor: "#c4c4c4"
                    })}></div> </div>  
            <div css={mq({
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center"
            })}><p>Rounded</p></div></div></motion.div>
   <motion.div css={mq({
                   
                    padding: 20                })}>
    <div css={mq({
                        backgroundColor: "#fff",
                        paddingLeft: 50,
                        paddingRight: 50,
                        paddingTop: 20,
                        paddingBottom: 20,
                        borderRadius: 10,
                        border: "solid",
                        borderWidth: 1,
                        borderColor: "#eff1f2"
                    })}>
                        <div css={mq({
                    display: "flex",
                    justifyContent: "center"
                })}>
                     <div css={mq({
                        width: 150,
                        height: 150,
                      
                        backgroundColor: "#c4c4c4"
                    })}></div> </div>  
            <div css={mq({
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center"
            })}><p>Square</p></div></div></motion.div>
   
</motion.div>
</div>

</div></div>
            <div  css={mq({
                   
                    display: ["none", "block", "block", "block"]
                })}>
                <div css={mq({
                    display: "flex",
                    justifyContent: "space-between",
                    
                })}>
                    <div css={mq({
                        backgroundColor: "#fff",
                        paddingLeft: 50,
                        paddingRight: 50,
                        paddingTop: 20,
                        paddingBottom: 20,
                        borderRadius: 10,
                        border: "solid",
                        borderWidth: 1,
                        borderColor: "#eff1f2"
                    })}>
                        <div css={mq({
                    display: "flex",
                    justifyContent: "center"
                })}>
                    <div css={mq({
                        width: 150,
                        height: 150,
                        borderRadius: "100%",
                        backgroundColor: "#c4c4c4"
                    })}></div> </div>  
            <div css={mq({
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center"
            })}><p>Circle</p></div></div>
            <div css={mq({
                        backgroundColor: "#fff",
                        paddingLeft: 50,
                        paddingRight: 50,
                        paddingTop: 20,
                        paddingBottom: 20,
                        borderRadius: 10,
                        border: "solid",
                        borderWidth: 1,
                        borderColor: "#eff1f2"
                    })}>
                        <div css={mq({
                    display: "flex",
                    justifyContent: "center"
                })}>
                    <div css={mq({
                        width: 150,
                        height: 150,
                        borderRadius: 5,
                        backgroundColor: "#c4c4c4"
                    })}></div> </div>  
            <div css={mq({
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center"
            })}><p>Rounded</p></div></div>
             <div css={mq({
                        backgroundColor: "#fff",
                        paddingLeft: 50,
                        paddingRight: 50,
                        paddingTop: 20,
                        paddingBottom: 20,
                        borderRadius: 10,
                        border: "solid",
                        borderWidth: 1,
                        borderColor: "#eff1f2"
                    })}>
                        <div css={mq({
                    display: "flex",
                    justifyContent: "center"
                })}>
                     <div css={mq({
                        width: 150,
                        height: 150,
                      
                        backgroundColor: "#c4c4c4"
                    })}></div> </div>  
            <div css={mq({
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center"
            })}><p>Square</p></div></div>
             
            </div></div></div>
            <div css={mq({
                marginTop: 50
            })}>
               <div css={mq({
                fontSize: 30,
                fontWeight: 600,
               
            })}><p>Button Style</p></div>
            <div css={mq({
           
           display: ["block", "none", "none", "none"]
        //    alignItems: "center",
          
        //    justifyContent: "center"
         })}>
          
          <div >
<div  ref={carousel}  css={mq({
    cursor: "grab",
    overflow: "hidden",
    width: 350,
    margin: "0 20px",
    
})}>
<motion.div  drag="x" dragConstraints={{right: 0, left: -width}} css={mq({
               display: "flex",
            //    backgroundColor: "lightblue"
            })}>
                <motion.div  css={mq({
                    
                 
                    padding: 20                })}>
   <div css={mq({
                        backgroundColor: "#fff",
                        paddingLeft: 50,
                        paddingRight: 50,
                        paddingTop: 20,
                        paddingBottom: 20,
                        borderRadius: 10,
                        border: "solid",
                        borderWidth: 1,
                        borderColor: "#eff1f2"
                    })}>
                        <div css={mq({
                    display: "flex",
                    justifyContent: "center"
                })}>
                    <div css={mq({
                        width: 200,
                        height: 50,
                        borderRadius: 50,
                        backgroundColor: "#c4c4c4"
                    })}></div> </div>  
            <div css={mq({
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center"
            })}><p>Round</p></div></div></motion.div>
    <motion.div css={mq({
                   
                    padding: 20                })}>
   <div css={mq({
                        backgroundColor: "#fff",
                        paddingLeft: 50,
                        paddingRight: 50,
                        paddingTop: 20,
                        paddingBottom: 20,
                        borderRadius: 10,
                        border: "solid",
                        borderWidth: 1,
                        borderColor: "#eff1f2"
                    })}>
                        <div css={mq({
                    display: "flex",
                    justifyContent: "center"
                })}>
                    <div css={mq({
                        width: 150,
                        height: 150,
                        borderRadius: 5,
                        backgroundColor: "#c4c4c4"
                    })}></div> </div>  
            <div css={mq({
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center"
            })}><p>Rounded</p></div></div></motion.div>
   <motion.div css={mq({
                   
                    padding: 20                })}>
    <div css={mq({
                        backgroundColor: "#fff",
                        paddingLeft: 50,
                        paddingRight: 50,
                        paddingTop: 20,
                        paddingBottom: 20,
                        borderRadius: 10,
                        border: "solid",
                        borderWidth: 1,
                        borderColor: "#eff1f2"
                    })}>
                        <div css={mq({
                    display: "flex",
                    justifyContent: "center"
                })}>
                      <div css={mq({
                        width: 200,
                        height: 50,
                       
                        backgroundColor: "#c4c4c4"
                    })}></div> </div>  
            <div css={mq({
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center"
            })}><p>Square</p></div></div></motion.div>
   
</motion.div>
</div>

</div></div>
             <div  css={mq({
                   
                   display: ["none", "block", "block", "block"]
               })}>
                <div css={mq({
                    display: "flex",
                    justifyContent: "space-between"
                })}>
                    <div css={mq({
                        backgroundColor: "#fff",
                        paddingLeft: 50,
                        paddingRight: 50,
                        paddingTop: 20,
                        paddingBottom: 20,
                        borderRadius: 10,
                        border: "solid",
                        borderWidth: 1,
                        borderColor: "#eff1f2"
                    })}>
                        <div css={mq({
                    display: "flex",
                    justifyContent: "center"
                })}>
                    <div css={mq({
                        width: 200,
                        height: 50,
                        borderRadius: 50,
                        backgroundColor: "#c4c4c4"
                    })}></div> </div>  
            <div css={mq({
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center"
            })}><p>Round</p></div></div>
            <div css={mq({
                        backgroundColor: "#fff",
                        paddingLeft: 50,
                        paddingRight: 50,
                        paddingTop: 20,
                        paddingBottom: 20,
                        borderRadius: 10,
                        border: "solid",
                        borderWidth: 1,
                        borderColor: "#eff1f2"
                    })}>
                        <div css={mq({
                    display: "flex",
                    justifyContent: "center"
                })}>
                    <div css={mq({
                        width: 200,
                        height: 50,
                        borderRadius: 5,
                        backgroundColor: "#c4c4c4"
                    })}></div> </div>  
            <div css={mq({
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center"
            })}><p>Rounded</p></div></div>
             <div css={mq({
                        backgroundColor: "#fff",
                        paddingLeft: 50,
                        paddingRight: 50,
                        paddingTop: 20,
                        paddingBottom: 20,
                        borderRadius: 10,
                        border: "solid",
                        borderWidth: 1,
                        borderColor: "#eff1f2"
                    })}>
                        <div css={mq({
                    display: "flex",
                    justifyContent: "center"
                })}>
                      <div css={mq({
                        width: 200,
                        height: 50,
                       
                        backgroundColor: "#c4c4c4"
                    })}></div> </div>  
            <div css={mq({
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center"
            })}><p>Square</p></div></div>
             
            </div></div></div>
            <div css={mq({
                marginTop: 50
            })}>
               <div css={mq({
                fontSize: 30,
                fontWeight: 600,
               
            })}><p>Typography</p></div>
            <div><input css={mq({
            width: ["100%",300, 300,300],
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
        })}  /></div>
            </div>
            <div css={mq({
                marginTop: 50
            })}>
               <div css={mq({
                fontSize: 30,
                fontWeight: 600,
               
            })}><p>Social Buttons Style</p></div>
            <div css={mq({
           display: "flex",
           display: ["block", "none", "none", "none"]
        //    alignItems: "center",
          
        //    justifyContent: "center"
         })}>
          
          <div >
<div  ref={carousel}  css={mq({
    cursor: "grab",
    overflow: "hidden",
    width: 350,
    margin: "0 20px",
    
})}>
<motion.div  drag="x" dragConstraints={{right: 0, left: -width}} css={mq({
               display: "flex",
            //    backgroundColor: "lightblue"
            })}>
                <motion.div  css={mq({
                    
                 
                    padding: 20                })}>
   <div css={mq({
                        backgroundColor: "#fff",
                        paddingLeft: 50,
                        paddingRight: 50,
                        paddingTop: 20,
                        paddingBottom: 20,
                        borderRadius: 10,
                        border: "solid",
                        borderWidth: 1,
                        borderColor: "#eff1f2"
                    })}>
                        <div css={mq({
                    display: "flex",
                    justifyContent: "center"
                })}>
                    <div css={mq({
                    display: "flex",
                    justifyContent: "space-between"
                })}>
                    <div css={mq({
                        width: 50,
                        height: 50,
                        borderRadius: "100%",
                        backgroundColor: "#c4c4c4"
                    })}></div>
                    <div css={mq({
                        marginLeft: 10,
                        width: 50,
                        height: 50,
                        borderRadius: "100%",
                        backgroundColor: "#c4c4c4"
                    })}></div>
                    <div css={mq({
                         marginLeft: 10,
                        width: 50,
                        height: 50,
                        borderRadius: "100%",
                        backgroundColor: "#c4c4c4"
                    })}></div> </div> </div>  
            <div css={mq({
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center"
            })}><p>Circle</p></div></div></motion.div>
    <motion.div css={mq({
                   
                    padding: 20                })}>
   <div css={mq({
                        backgroundColor: "#fff",
                        paddingLeft: 50,
                        paddingRight: 50,
                        paddingTop: 20,
                        paddingBottom: 20,
                        borderRadius: 10,
                        border: "solid",
                        borderWidth: 1,
                        borderColor: "#eff1f2"
                    })}>
                        <div css={mq({
                    display: "flex",
                    justifyContent: "center"
                })}>
                   <div css={mq({
                    display: "flex",
                    justifyContent: "space-between"
                })}>
                    <div css={mq({
                        width: 50,
                        height: 50,
                        borderRadius: 5,
                        backgroundColor: "#c4c4c4"
                    })}></div>
                    <div css={mq({
                        marginLeft: 10,
                        width: 50,
                        height: 50,
                        borderRadius: 5,
                        backgroundColor: "#c4c4c4"
                    })}></div>
                    <div css={mq({
                         marginLeft: 10,
                        width: 50,
                        height: 50,
                        borderRadius: 5,
                        backgroundColor: "#c4c4c4"
                    })}></div> </div> </div>  
            <div css={mq({
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center"
            })}><p>Rounded</p></div></div></motion.div>
   <motion.div css={mq({
                   
                    padding: 20                })}>
    <div css={mq({
                        backgroundColor: "#fff",
                        paddingLeft: 50,
                        paddingRight: 50,
                        paddingTop: 20,
                        paddingBottom: 20,
                        borderRadius: 10,
                        border: "solid",
                        borderWidth: 1,
                        borderColor: "#eff1f2"
                    })}>
                        <div css={mq({
                    display: "flex",
                    justifyContent: "center"
                })}>
                   <div css={mq({
                    display: "flex",
                    justifyContent: "space-between"
                })}>
                    <div css={mq({
                        width: 50,
                        height: 50,
                        borderRadius: 5,
                        backgroundColor: "#c4c4c4"
                    })}></div>
                    <div css={mq({
                        marginLeft: 10,
                        width: 50,
                        height: 50,
                        borderRadius: 5,
                        backgroundColor: "#c4c4c4"
                    })}></div>
                    <div css={mq({
                         marginLeft: 10,
                        width: 50,
                        height: 50,
                        borderRadius: 5,
                        backgroundColor: "#c4c4c4"
                    })}></div> </div> </div>  
            <div css={mq({
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center"
            })}><p>Rounded</p></div></div>
             </motion.div>
            <motion.div css={mq({
                   
                   padding: 20                })}>
   
            <div css={mq({
                       backgroundColor: "#fff",
                       paddingLeft: 50,
                       paddingRight: 50,
                       paddingTop: 20,
                       paddingBottom: 20,
                       borderRadius: 10,
                       border: "solid",
                       borderWidth: 1,
                       borderColor: "#eff1f2"
                   })}>
                       <div css={mq({
                   display: "flex",
                   justifyContent: "center"
               })}>
                   <div css={mq({
                   display: "flex",
                   justifyContent: "space-between"
               })}>
                   <div css={mq({
                       width: 50,
                       height: 50,
                       
                       backgroundColor: "#c4c4c4"
                   })}></div>
                   <div css={mq({
                       marginLeft: 10,
                       width: 50,
                       height: 50,
                       
                       backgroundColor: "#c4c4c4"
                   })}></div>
                   <div css={mq({
                        marginLeft: 10,
                       width: 50,
                       height: 50,
                       
                       backgroundColor: "#c4c4c4"
                   })}></div> </div> </div>  
           <div css={mq({
               fontSize: 20,
               fontWeight: 600,
               textAlign: "center"
           })}><p>Square</p></div></div></motion.div>
   
</motion.div>
</div>

</div></div>
         <div  css={mq({
                   
                   display: ["none", "block", "block", "block"]
               })}>
                <div css={mq({
                    display: "flex",
                    justifyContent: "space-between"
                })}>
                    <div css={mq({
                        backgroundColor: "#fff",
                        paddingLeft: 50,
                        paddingRight: 50,
                        paddingTop: 20,
                        paddingBottom: 20,
                        borderRadius: 10,
                        border: "solid",
                        borderWidth: 1,
                        borderColor: "#eff1f2"
                    })}>
                        <div css={mq({
                    display: "flex",
                    justifyContent: "center"
                })}>
                    <div css={mq({
                    display: "flex",
                    justifyContent: "space-between"
                })}>
                    <div css={mq({
                        width: 50,
                        height: 50,
                        borderRadius: "100%",
                        backgroundColor: "#c4c4c4"
                    })}></div>
                    <div css={mq({
                        marginLeft: 10,
                        width: 50,
                        height: 50,
                        borderRadius: "100%",
                        backgroundColor: "#c4c4c4"
                    })}></div>
                    <div css={mq({
                         marginLeft: 10,
                        width: 50,
                        height: 50,
                        borderRadius: "100%",
                        backgroundColor: "#c4c4c4"
                    })}></div> </div> </div>  
            <div css={mq({
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center"
            })}><p>Circle</p></div></div>
            <div css={mq({
                        backgroundColor: "#fff",
                        paddingLeft: 50,
                        paddingRight: 50,
                        paddingTop: 20,
                        paddingBottom: 20,
                        borderRadius: 10,
                        border: "solid",
                        borderWidth: 1,
                        borderColor: "#eff1f2"
                    })}>
                        <div css={mq({
                    display: "flex",
                    justifyContent: "center"
                })}>
                   <div css={mq({
                    display: "flex",
                    justifyContent: "space-between"
                })}>
                    <div css={mq({
                        width: 50,
                        height: 50,
                        borderRadius: 5,
                        backgroundColor: "#c4c4c4"
                    })}></div>
                    <div css={mq({
                        marginLeft: 10,
                        width: 50,
                        height: 50,
                        borderRadius: 5,
                        backgroundColor: "#c4c4c4"
                    })}></div>
                    <div css={mq({
                         marginLeft: 10,
                        width: 50,
                        height: 50,
                        borderRadius: 5,
                        backgroundColor: "#c4c4c4"
                    })}></div> </div> </div>  
            <div css={mq({
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center"
            })}><p>Rounded</p></div></div>
             <div css={mq({
                        backgroundColor: "#fff",
                        paddingLeft: 50,
                        paddingRight: 50,
                        paddingTop: 20,
                        paddingBottom: 20,
                        borderRadius: 10,
                        border: "solid",
                        borderWidth: 1,
                        borderColor: "#eff1f2"
                    })}>
                        <div css={mq({
                    display: "flex",
                    justifyContent: "center"
                })}>
                    <div css={mq({
                    display: "flex",
                    justifyContent: "space-between"
                })}>
                    <div css={mq({
                        width: 50,
                        height: 50,
                        
                        backgroundColor: "#c4c4c4"
                    })}></div>
                    <div css={mq({
                        marginLeft: 10,
                        width: 50,
                        height: 50,
                        
                        backgroundColor: "#c4c4c4"
                    })}></div>
                    <div css={mq({
                         marginLeft: 10,
                        width: 50,
                        height: 50,
                        
                        backgroundColor: "#c4c4c4"
                    })}></div> </div> </div>  
            <div css={mq({
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center"
            })}><p>Square</p></div></div>
             
            </div></div></div>
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
          
      </Nav2>
    </div>
  );
};


export default Design;
