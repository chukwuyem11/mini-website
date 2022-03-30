import React from "react";
import { css, jsx } from "@emotion/react";
import facepaint from "facepaint";
import Lineone from "../../svgs/lineonesvg";
import Linetwo from "../../svgs/linetwosvg";
// import Linethree from "../../";


const breakpoints = [576, 768, 992, 1200];
const query = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
const Body = () => {
  const [tab, setTab] = React.useState("a");
  const [tab1, setTab1] = React.useState("a");
  return (
    <div>
      <div>
        <div
          css={mq({
            position: "relative",
          })}
        >
          
          <div
            css={mq({
              position: "absolute",
              left: "50%",
              right: "50%",
              bottom: -15,
            })}
          >
            <Lineone />
          </div>
        </div>
      </div>
      <div>
        <div
          css={mq({
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            marginTop: [160,150,150,150],
          })}
        >
          <div
            css={mq({
              textAlign: "center",
              fontWeight: "bold",
              fontSize: [35,45,45,45],
            })}
          >
            {" "}
            Your own{" "}
            <span
              css={mq({
                color: "#3531D4",
              })}
            >
              business
            </span>{" "}
            name{" "}
            <span
              css={mq({
                color: "#3531D4",
              })}
            >
              .com
            </span>
          </div>
          <div
            css={mq({
              display: "flex",
              justifyContent: "center",
            })}
          >
            <div
              css={mq({
                width: ["80vw","40vw","40vw","40vw"],
                marginTop: 20,
              })}
            >
              <div
                css={mq({
                  textAlign: "center",
                  fontSize: [22,25,25,25],
                })}
              >
                Bye to long and tiring website links or name. Use your business
                or creator name as your website link. Get found easily.
              </div>
            </div>
          </div>
          <div
            css={mq({
              display: "flex",
              justifyContent: "center",
              marginTop: 20,
            })}
          >
            <video src="searchvid.mp4" width="320" height="240" autoPlay loop />
          </div>
        </div>
      </div>
      <div>
      <div
          css={mq({
            position: "relative",
            display: ["block","none","none","none"]
          })}
        >
          
          <div
            css={mq({
              position: "absolute",
              left: "50%",
              right: "50%",
              top: 0,
            })}
          >
            <Lineone />
          </div>
        </div>
        <div
          css={mq({
            position: "relative",
            display: ["none","block","block","block"]
          })}
        >
          
          <div
            css={mq({
              position: "absolute",
              left: "30%",
              right: "70%",
              top: 0,
            })}
          >
            <Linetwo />
          </div>
        </div>
      </div>
      <div
        css={mq({
          display: "flex",
          justifyContent: "center",

          marginTop: [150,150,150,180],
        })}
      >
        <div
          css={mq({
            display: "flex",
            flexDirection: ["column","row","row","row"],
            marginTop: [50,0,0,0],
            justifyContent: "space-between",
            width: "80vw",
          })}
        >
          <div
            css={mq({
              flex: ["100%","50%","50%","50%"],
              display: ["none","block","block","block"]
            })}
          >
            <div>
              <img css={mq({
                width: 500
              })} src={"emailimage.png"} />
            </div>
          </div>
          <div
            css={mq({
              flex: ["100%","50%","50%","50%"],
            })}
          >
            <div
              css={mq({
                textAlign: "left",
                fontWeight: "bold",
                fontSize: [30,40,40,40],
              })}
            >
              Build trust with{" "}
              <span
                css={mq({
                  color: "#3531D4",
                })}
              >
                {" "}
                professional webmails.
              </span>
            </div>
            <div
              css={mq({
                marginTop: 20,
                fontSize: [22,25,25,25],
              })}
            >
              Build trust with your audience & customers by getting a
              professional email address at your domain.
            </div>
            <div
              css={mq({
                display: "flex",
                justifyContent: "space-between",
                marginTop: 20,
              })}
            >
              <div>
                <div
                  css={mq({
                    display: "flex",

                    alignItems: "center",
                  })}
                >
                  <div>
                    {" "}
                    <img src={"svg/checkicon.svg"} />
                  </div>
                  <div
                    css={mq({
                      fontSize: [20,22,22,22],
                      fontWeight: "bold",
                      marginLeft: 10,
                    })}
                  >
                    3 webmails.
                  </div>
                </div>
                <div
                  css={mq({
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                    marginTop: 20,
                  })}
                >
                  <div>
                    {" "}
                    <img src={"svg/checkicon.svg"} />
                  </div>
                  <div
                    css={mq({
                      fontSize: [20,22,22,22],
                      fontWeight: "bold",
                      marginLeft: 10,
                    })}
                  >
                    Gmail integration.
                  </div>
                </div>
              </div>
              <div>
                <div
                  css={mq({
                    display: "flex",

                    alignItems: "center",
                  })}
                >
                  <div>
                    {" "}
                    <img src={"svg/checkicon.svg"} />
                  </div>
                  <div
                    css={mq({
                      fontSize: [22,25,25,25],
                      fontWeight: "bold",
                      marginLeft: 10,
                    })}
                  >
                    Spam filter.
                  </div>
                </div>
                <div
                  css={mq({
                    display: "flex",

                    alignItems: "center",

                    marginTop: 20,
                  })}
                >
                  <div>
                    {" "}
                    <img src={"svg/checkicon.svg"} />
                  </div>
                  <div
                    css={mq({
                      fontSize: [22,25,25,25],
                      fontWeight: "bold",
                      marginLeft: 10,
                    })}
                  >
                    Email forwarder.
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                css={mq({
                  fontSize: [22,25,25,25],
                  fontWeight: "bold",
                  color: "#3531D4",
                  textDecoration: "underline",
                  marginTop: 20,
                })}
              >
                LEARN MORE
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        css={mq({
          position: "relative",
          display: ["none", "block","block","block"]
        })}
      >
        
        <div
          css={mq({
            position: "absolute",
            left: "30%",
            right: "70%",
            top: 0,
          })}
        >
          <img src={"svg/linethree.svg"} />
        </div>
      </div>

      <div
          css={mq({
            position: "relative",
            display: ["block", "none","none","none"]
          })}
        >
          
          <div
            css={mq({
              position: "absolute",
              left: "50%",
              right: "50%",
              top: 0,
            })}
          >
            <Lineone />
          </div>
        </div>

      <div css={mq({
        marginTop: 170,
        backgroundColor: "#fafafa",
        // borderRadius: "40% 40% 0px 0px",
        display: ["block","none","none","none"],
        paddingLeft: 20,
        paddingRight: 20
      })}><div css={mq({
        marginTop: 50,
        display: "flex",
        justifyContent: "center"
      })}><div
      css={mq({
        textAlign: "center",
      
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 35,
      })}
    >
      Personalize your various URLs with{" "}
      <span
        css={mq({
          color: "#3531D4",
        })}
      >
        {" "}
        domain links.{" "}
      </span>
    </div></div>
    
        <div css={mq({
       marginTop: 40,
        display: "flex",
        justifyContent: "space-between",
       
      })}>

      <div css={mq({
       paddingBottom:5,
       paddingTop: 5,
       paddingRight: 10,
       paddingLeft: 10,
        border: "solid",
        borderWidth: 1,
        borderColor: tab == "a" ? "#fff" :"#c4c4c4",
        borderRadius: 50,
        fontSize: 16,
        backgroundColor: tab == "a" ? "#3531D4" : "",
        color: tab == "a" ? "#fff" : ""
      })}  onClick={() => setTab("a")}>Personalise your stores</div>
      <div css={mq({
        paddingBottom:5,
        paddingTop: 5,
        paddingRight: 10,
        paddingLeft: 10,
        border: "solid",
        borderWidth: 1,
        borderColor: tab == "b" ? "#fff" :"#c4c4c4",
        borderRadius: 50,
        fontSize: 16,
        backgroundColor: tab == "b" ? "#3531D4" : "",
        color: tab == "b" ? "#fff" : ""
      })}  onClick={() => setTab("b")}>Shorten Links</div>
      <div css={mq({
        paddingBottom:5,
        paddingTop: 5,
        paddingRight: 10,
        paddingLeft: 10,
        border: "solid",
        borderWidth: 1,
        borderColor: tab == "c" ? "#fff" :"#c4c4c4",
        borderRadius: 50,
        fontSize: 16,
        backgroundColor: tab == "c" ? "#3531D4" : "",
        color: tab == "c" ? "#fff" : ""
      })}  onClick={() => setTab("c")}>Social Media Handles</div>

      </div>
      <div
            css={mq({
              
            })}   
              >
                <div>
                  <div
                    css={mq({
                      display: "flex",
                      
                      marginTop: 20,
                      display: tab == "a" ? "block" : "none",
                    })}
                  >
                    
                    <div
                      
                    >
                      <div
                        css={mq({
                          fontWeight: "bold",
                          fontSize: 22,
                          color: tab == "a" ? "#000" : "#969393",
                        })}
                        onClick={() => setTab("a")}
                      >
                        
                        Personalize your eCommerce store link to 
                        your domain name
                      </div>
                      <div
                        css={mq({
                          fontSize: 16,
                          marginTop: 10,
                          display: tab == "a" ? "block" : "none",
                        })}
                      >
                        Turn your Paystack shop or online store to your domains
                        links easily.
                      </div>
                    </div>
                  </div>
                  <div
                    css={mq({
                      display: "flex",
                      marginTop: 20,
                      display: tab == "b" ? "block" : "none",
                    })}
                  >
                   
                    <div
                     
                    >
                      <div
                        css={mq({
                          fontWeight: "bold",
                          fontSize: 22,
                          color: tab == "b" ? "#000" : "#969393",
                        })}
                        onClick={() => setTab("b")}
                      >
                        {" "}
                        Shorten lengthy WhatsApp links to yourdomain.com/chat
                      </div>
                      <div
                        css={mq({
                          fontSize: 16,
                          marginTop: 10,
                          display: tab == "b" ? "block" : "none",
                        })}
                      >
                        Let your clients eaily reach you - make your Telegram,
                        WhatsApp links shorter.
                      </div>
                    </div>
                  </div>
                  <div
                    css={mq({
                      display: "flex",
                      marginTop: 20,
                      display: tab == "c" ? "block" : "none",
                    })}
                  >
                   
                    <div
                     
                    >
                      <div
                        css={mq({
                          fontWeight: "bold",
                          fontSize: 22,
                          color: tab == "c" ? "#000" : "#969393",
                        })}
                        onClick={() => setTab("c")}
                      >
                        {" "}
                        Make your social media handles more memorable.
                      </div>
                      <div
                        css={mq({
                          fontSize: 16,
                          marginTop: 10,
                          display: tab == "c" ? "block" : "none",
                        })}
                      >
                        Make it easier to share your social media handles. Turn
                        them to domain links.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                css={mq({
                  flex: "50%",
                })}
              >
                <div
                  css={mq({
                    display: tab == "a" ? "block" : "none",
                  })}
                >
                  <div css={mq({
                    display: "flex",
                    justifyContent: "right",
                    marginTop: 20

                  })}>
                  <img
                    css={mq({
                      width: 400,
                     
                      
                    })}
                    src={"pics/ecomm.png"}
                  /></div>
                </div>
                <div
                  css={mq({
                    display: tab == "b" ? "block" : "none",
                   
                  })}
                >
                   <div css={mq({
                    display: "flex",
                    justifyContent: "right",
                    marginTop: 10
                  
                  })}>
                  <img
                    css={mq({
                      width: 400,
                     
                    })}
                    src={"pics/whatsapp.png"}
                  /></div>
                </div>
                <div
                  css={mq({
                    display: tab == "c" ? "block" : "none",
                  })}
                >
                   <div css={mq({
                    display: "flex",
                    justifyContent: "right",
                    marginTop: 10

                  })}>
                  <img
                    css={mq({
                      width: 400,
                     
                    })}
                    src={"pics/socialmedia.png"}
                  /></div>
                </div>
              </div>

      
    </div>


      <div
        css={mq({
          display: ["none","flex","flex","flex"],
          justifyContent: "center",
        })}
      >
        <div
          css={mq({
            display: "flex",
            flexDirection: "column",
            width: "80vw",
            backgroundColor: "#FAFAFA",

            borderRadius: 10,
            marginTop: 120,
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 50,
            paddingRight: 50,
          })}
        >
          <div
            css={mq({
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            })}
          >
            <div
              css={mq({
                textAlign: "center",
                width: "70%",
                fontSize: 45,
                fontWeight: "bold",
                marginTop: 35,
              })}
            >
              Personalize your various URLs with{" "}
              <span
                css={mq({
                  color: "#3531D4",
                })}
              >
                {" "}
                domain links.{" "}
              </span>
            </div>
          </div>
          <div>
            <div
              css={mq({
                display: "flex",
                justifyContent: "space-between",
                marginTop: 50,
              })}
            >
              <div
                css={mq({
                  flex: "50%",
                })}
              >
                <div>
                  <div
                    css={mq({
                      display: "flex",
                      marginTop: 20,
                    })}
                  >
                    <div>
                      <div
                        css={mq({
                          backgroundColor: "#3531D4",
                          color: "#fff",
                          paddingBottom: 2,
                          paddingLeft: 8,
                          paddingRight: 8,
                          paddingTop: 2,
                          borderRadius: "100%",
                          marginTop: 7,
                          fontWeight: "bold",
                        })}
                      >
                        1
                      </div>
                    </div>
                    <div
                      css={mq({
                        marginLeft: 10,
                      })}
                    >
                      <div
                        css={mq({
                          fontWeight: "bold",
                          fontSize: 22,
                          color: tab == "a" ? "#000" : "#969393",
                        })}
                        onClick={() => setTab("a")}
                      >
                        {" "}
                        Personalize your eCommerce store link to your domain
                        name
                      </div>
                      <div
                        css={mq({
                          fontSize: 16,
                          marginTop: 10,
                          display: tab == "a" ? "block" : "none",
                        })}
                      >
                        Turn your Paystack shop or online store to your domains
                        links easily.
                      </div>
                    </div>
                  </div>
                  <div
                    css={mq({
                      display: "flex",
                      marginTop: 20,
                    })}
                  >
                    <div>
                      <div
                        css={mq({
                          backgroundColor: "#3531D4",
                          color: "#fff",
                          paddingBottom: 2,
                          paddingLeft: 8,
                          paddingRight: 8,
                          paddingTop: 2,
                          borderRadius: "100%",
                          marginTop: 7,
                          fontWeight: "bold",
                        })}
                      >
                        2
                      </div>
                    </div>
                    <div
                      css={mq({
                        marginLeft: 10,
                      })}
                    >
                      <div
                        css={mq({
                          fontWeight: "bold",
                          fontSize: 22,
                          color: tab == "b" ? "#000" : "#969393",
                        })}
                        onClick={() => setTab("b")}
                      >
                        {" "}
                        Shorten lengthy WhatsApp links to yourdomain.com/chat
                      </div>
                      <div
                        css={mq({
                          fontSize: 16,
                          marginTop: 10,
                          display: tab == "b" ? "block" : "none",
                        })}
                      >
                        Let your clients eaily reach you - make your Telegram,
                        WhatsApp links shorter.
                      </div>
                    </div>
                  </div>
                  <div
                    css={mq({
                      display: "flex",
                      marginTop: 20,
                    })}
                  >
                    <div>
                      <div
                        css={mq({
                          backgroundColor: "#3531D4",
                          color: "#fff",
                          paddingBottom: 2,
                          paddingLeft: 8,
                          paddingRight: 8,
                          paddingTop: 2,
                          borderRadius: "100%",
                          marginTop: 7,
                          fontWeight: "bold",
                        })}
                      >
                        3
                      </div>
                    </div>
                    <div
                      css={mq({
                        marginLeft: 10,
                      })}
                    >
                      <div
                        css={mq({
                          fontWeight: "bold",
                          fontSize: 22,
                          color: tab == "c" ? "#000" : "#969393",
                        })}
                        onClick={() => setTab("c")}
                      >
                        {" "}
                        Make your social media handles more memorable.
                      </div>
                      <div
                        css={mq({
                          fontSize: 16,
                          marginTop: 10,
                          display: tab == "c" ? "block" : "none",
                        })}
                      >
                        Make it easier to share your social media handles. Turn
                        them to domain links.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                css={mq({
                  flex: "50%",
                })}
              >
                <div
                  css={mq({
                    display: tab == "a" ? "block" : "none",
                  })}
                >
                  <img
                    css={mq({
                      width: 550,
                      marginBottom: -15
                      
                    })}
                    src={"pics/ecomm.png"}
                  />
                </div>
                <div
                  css={mq({
                    display: tab == "b" ? "block" : "none",
                  })}
                >
                  <img
                    css={mq({
                      width: 550,
                      marginBottom: -15
                    })}
                    src={"pics/whatsapp.png"}
                  />
                </div>
                <div
                  css={mq({
                    display: tab == "c" ? "block" : "none",
                  })}
                >
                  <img
                    css={mq({
                      width: 550,
                      marginBottom: -15
                    })}
                    src={"pics/socialmedia.png"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
          css={mq({
            position: "relative",
            display: ["block", "none","none","none"]
          })}
        >
          
          <div
            css={mq({
              position: "absolute",
              left: "50%",
              right: "50%",
              top: 0,
            })}
          >
            <Lineone />
          </div>
        </div>
      <div
        css={mq({
          position: "relative",
          display: ["none", "block","block","block"]
        })}
      >
        
        <div
          css={mq({
            position: "absolute",
            left: "18%",
            right: "82%",
            top: 0,
          })}
        >
          <img src={"svg/linefour.svg"} />
        </div>
      </div>
      <div
        css={mq({
          marginTop: [170,150,150,150],
          backgroundColor: "#1f1b39",
          height: ["",700,700,700],
          display: "flex",
          justifyContent: ["left","center","center","center"],
          padding:["0px 20px",0,0,0],
          alignItems: "center",
        })}
      >
        <div
          css={mq({
            width: "80%",
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
                flex: "30%",
                display: ["none","block","block","block"],
              })}
            >
              <img
                css={mq({
                position: "relative",
                  height: 800,
                  top: 110,
                  left: -30,
                  // marginLeft: -50,
                  display: tab1 == "a" ? "block" : "none",
                })}
                src={"pics/linker.png"}
              />
              <img
                css={mq({
             
                  position: "relative",
                  height: 800,
                  top: 110,
                  left: -30,
                  display: tab1 == "b" ? "block" : "none",
                })}
                src={"pics/profiler.png"}
              />
              <img
                css={mq({
                 
                  position: "relative",
                  height: 800,
                  top: 110,
                  left: -30,
                  display: tab1 == "c" ? "block" : "none",
                })}
                src={"pics/postee.png"}
              />
            </div>
            <div
              css={mq({
                flex: ["100%","70%","70%","70%"],
              })}
            >
              <div
                css={mq({
                  marginTop: [40,180,180,180],
                  paddingLeft: [0,25,25,25],
                  paddingRight: [0,50,50,50],
                })}
              >
                <div
                  css={mq({
                    fontSize: [30,40,40,40],
                    fontWeight: "bold",
                    color: "#fff",
                  })}
                >
                  Choose preferred templates.
                </div>
                
                <div
                  css={mq({
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 25,
                  })}
                >
                  <div
                    css={mq({
                      flex: "60%",
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
                          display: "flex",
                          alignItems: "center"
                        })}
                        onClick={() => setTab1("a")}
                      >
                        <div>
                          {tab1 == "a" ? (
                            <img css={mq({width: [20,25,25,25]})} src={"svg/fullcircle.svg"} />
                          ) : (
                            <img css={mq({width: [20,25,25,25]})} src={"svg/emptycircle.svg"} />
                          )}
                        </div>
                        <div
                          css={mq({
                            fontSize: [15,20,20,20],
                            fontWeight: 600,
                            color: "#fff",
                            marginLeft: 10,
                            marginTop: -4,
                          })}
                        >
                          LINKER
                        </div>
                      </div>
                      <div
                        css={mq({
                          display: "flex",
                          alignItems: "center"
                        })}
                        onClick={() => setTab1("b")}
                      >
                        <div>
                          {tab1 == "b" ? (
                            <img css={mq({width: [20,25,25,25]})} src={"svg/fullcircle.svg"} />
                          ) : (
                            <img css={mq({width: [20,25,25,25]})} src={"svg/emptycircle.svg"} />
                          )}
                        </div>
                        <div
                          css={mq({
                            fontSize: [15,20,20,20],
                            fontWeight: 600,
                            color: "#fff",
                            marginLeft: 10,
                            marginTop: -4,
                          })}
                        >
                          PROFILER
                        </div>
                      </div>
                      <div
                        css={mq({
                          display: "flex",
                          alignItems: "center"
                        })}
                        onClick={() => setTab1("c")}
                      >
                        <div>
                          {tab1 == "c" ? (
                            <img css={mq({width: [20,25,25,25]})} src={"svg/fullcircle.svg"} />
                          ) : (
                            <img css={mq({width: [20,25,25,25]})} src={"svg/emptycircle.svg"} />
                          )}
                        </div>
                        <div
                          css={mq({
                            fontSize: [15,20,20,20],
                            fontWeight: 600,
                            color: "#fff",
                            marginLeft: 10,
                            marginTop: -4,
                          })}
                        >
                          POSTEE
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    css={mq({
                      flex: "10%",
                      display: ["none","block","block","block"]
                    })}
                  ></div>
                  <div
                    css={mq({
                      flex: "10%",
                    })}
                  ></div>
                  <div>
                    <div
                      css={mq({
                        display: "flex",
                        alignItems: "center"
                      })}
                    >
                      <div
                        css={mq({
                          fontSize: [15,20,20,20],
                          fontWeight: 600,
                          color: "#fff",
                          marginRight: 10,
                          marginTop: -4,
                          display: ["none", "block", "block", "block"]
                        })}
                      >
                        SEE MORE
                      </div>
                      <div>
                        <img css={mq({width: [20,25,25,25]})} src={"svg/arrow.svg"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div
              css={mq({
                display: ["block","none","none","none"],
                marginTop: 30
              })}
            >
              <div css={mq({
                display: "flex",
                justifyContent: "center"
              })}>
<img
                css={mq({
                  width: 300,
                  // marginLeft: -50,
                  display: tab1 == "a" ? "block" : "none",
                })}
                src={"pics/linker.png"}
              />
              </div>
              <div css={mq({
                display: "flex",
                justifyContent: "center"
              })}>
              <img
                css={mq({
             
                  width: 300,
                  display: tab1 == "b" ? "block" : "none",
                })}
                src={"pics/profiler.png"}
              /></div>

<div css={mq({
                display: "flex",
                justifyContent: "center"
              })}>
              <img
                css={mq({
                 
                 
                  width: 300,
                  
                  display: tab1 == "c" ? "block" : "none",
                })}
                src={"pics/postee.png"}
              /></div>
            </div>
                <div css={mq({
                      marginTop: 20,
                      marginBottom: [50,0,0,0],
                      display: "grid",
                     
                      
                      width: [400,700,700,700],
  height: [800,700,700,700],
                      gridTemplateColumns: ["1fr 1fr","1fr 1fr  1fr","1fr 1fr  1fr","1fr 1fr  1fr"],
    gridTemplateRows: [" 1fr 1fr","1fr 1fr  1fr","1fr 1fr  1fr","1fr 1fr  1fr"],
                      // justifyContent: "space-between",
                      columnGap: [20,20,20,20],
    rowGap: [20,20,20,20],
    
                  })}>
 <div
                    css={mq({
                      backgroundColor: "#161328",
                      borderRadius: 10,
                      padding: 20,
                     
                      
                    })}
                  >
                    <div>
                      <img src={"svg/green.svg"} />
                    </div>
                    <div
                      css={mq({
                        fontSize: [20,22,22,22],
                        fontWeight: "bold",
                        color: "#fff",
                      })}
                    >
                      <p>Unlimited Links.</p>
                    </div>
                    <div
                      css={mq({
                        fontSize: 14,

                        color: "#fff",
                      })}
                    >
                      <p>
                        Link to everywhere. Add an unlimited number of links to
                        your website.
                      </p>
                    </div>
                  </div>
                  <div
                    css={mq({
                      backgroundColor: "#161328",
                      borderRadius: 10,
                      padding: 20,
                      
                    })}
                  >
                    <div>
                      <img src={"svg/blue.svg"} />
                    </div>
                    <div
                      css={mq({
                        fontSize: [20,22,22,22],
                        fontWeight: "bold",
                        color: "#fff",
                      })}
                    >
                      <p>Social Icons.</p>
                    </div>
                    <div
                      css={mq({
                        fontSize: 14,

                        color: "#fff",
                      })}
                    >
                      <p>
                        Easily link your all social media accounts. Let people
                        easily connect with you.
                      </p>
                    </div>
                  </div>
                  <div
                    css={mq({
                      backgroundColor: "#161328",
                      borderRadius: 10,
                      padding: 20,
                   
                    })}
                  >
                    <div>
                      <img src={"svg/purple.svg"} />
                    </div>
                    <div
                      css={mq({
                        fontSize: [20,22,22,22],
                        fontWeight: "bold",
                        color: "#fff",
                      })}
                    >
                      <p>Logo/Personal Picture.</p>
                    </div>
                    <div
                      css={mq({
                        fontSize: 14,

                        color: "#fff",
                      })}
                    >
                      <p>
                        Easily upload your brand identity or personal picture to
                        your mini-website.
                      </p>
                    </div>
                  </div>
                  <div
                    css={mq({
                      backgroundColor: "#161328",
                      borderRadius: 10,
                      padding: 20,
                     
                    })}
                  >
                    <div>
                      <img src={"svg/yellow.svg"} />
                    </div>
                    <div
                      css={mq({
                        fontSize: [20,22,22,22],
                        fontWeight: "bold",
                        color: "#fff",
                      })}
                    >
                      <p>Contact Form.</p>
                    </div>
                    <div
                      css={mq({
                        fontSize: 14,

                        color: "#fff",
                      })}
                    >
                      <p>
                        Let individuals easily fill a form to reach to you or
                        your business. You get alerted instantly.
                      </p>
                    </div>
                  </div>
                  <div
                    css={mq({
                      backgroundColor: "#161328",
                      borderRadius: 10,
                      padding: 20,
                      
                    })}
                  >
                    <div>
                      <img src={"svg/red.svg"} />
                    </div>
                    <div
                      css={mq({
                        fontSize: [20,22,22,22],
                        fontWeight: "bold",
                        color: "#fff",
                      })}
                    >
                      <p>SEO.</p>
                    </div>
                    <div
                      css={mq({
                        fontSize: 14,

                        color: "#fff",
                      })}
                    >
                      <p>
                        Get found easily on Google or other search engines with
                        Search Engine Optimization.
                      </p>
                    </div>
                  </div>
                  <div
                    css={mq({
                      backgroundColor: "#161328",
                      borderRadius: 10,
                      padding: 20,
                   
                      
                    })}
                  >
                    <div>
                      <img src={"svg/orange.svg"} />
                    </div>
                    <div
                      css={mq({
                        fontSize: [20,22,22,22],
                        fontWeight: "bold",
                        color: "#fff",
                      })}
                    >
                      <p>Meta Tags Editor.</p>
                    </div>
                    <div
                      css={mq({
                        fontSize: 14,

                        color: "#fff",
                      })}
                    >
                      <p>
                        Easily add Facebook Pixel, Google Analytics, Facebook
                        Verification codes to your website.
                      </p>
                    </div>
                  </div>

                  </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div
          css={mq({
            position: "relative",
            display: ["block", "none","none","none"]
          })}
        >
          
          <div
            css={mq({
              position: "absolute",
              left: "50%",
              right: "50%",
              top: 0,
            })}
          >
            <Lineone />
          </div>
        </div>
      <div
        css={mq({
          position: "relative",
          display: ["none", "block","block","block"]
        })}
      >
        
        <div
          css={mq({
            position: "absolute",
            left: "18%",
            right: "82%",
            top: 10,
          })}
        >
          <img src={"svg/linefive.svg"} />
        </div>
      </div>
      <div>
        <div
          css={mq({
            marginTop: [170,170,170,170],
            display: "flex",
            justifyContent: "center",
          })}
        >
          <div
            css={mq({
              display: "flex",
              justifyContent: "space-between",
              flexDirection: ["column-reverse", "row","row","row"],
              padding: ["0px 20px",0,0,0],
              width: ["100%","80%","80%","80%"],
            })}
          >
            <div>
              <div
                css={mq({
                  fontSize: [30,40,40,40],
                  fontWeight: "bold",
                })}
              >
                <p>
                  Grandma-tested{" "}
                  <span
                    css={mq({
                      color: "#6d61df",
                    })}
                  >
                    Dashboard
                  </span>
                </p>
              </div>
              <div
                css={mq({
                  fontSize: [22,25,25,25],
                  fontWeight: 400,
                })}
              >
                <p>
                  Our dashboard was built from the ground up for the everyday
                  customer.
                </p>
              </div>
              <div>
                <div
                  css={mq({
                    display: "flex",
                    alignItems: "center",

                  })}
                >
                  <img css={mq({width: [25,35,35,35]})} src={"svg/box.svg"} />{" "}
                  <div
                    css={mq({
                      fontSize: [25,30,30,30],
                      fontWeight: "bold",
                      marginLeft: 20,
                    })}
                  >
                    No developers needed.
                  </div>{" "}
                </div>
                <div
                  css={mq({
                    display: "flex",
                    alignItems: "center",
                    marginTop: 20,
                  })}
                >
                  <img  css={mq({width: [25,35,35,35]})} src={"svg/box.svg"} />{" "}
                  <div
                    css={mq({
                      fontSize: [25,30,30,30],
                      fontWeight: "bold",
                      marginLeft: 20,
                    })}
                  >
                    No developers needed.
                  </div>{" "}
                </div>
                <div
                  css={mq({
                    display: "flex",
                    alignItems: "center",
                    marginTop: 20,
                  })}
                >
                  <img  css={mq({width: [25,35,35,35]})} src={"svg/box.svg"} />{" "}
                  <div
                    css={mq({
                      fontSize: [25,30,30,30],
                      fontWeight: "bold",
                      marginLeft: 20,
                    })}
                  >
                    No developers needed.
                  </div>{" "}
                </div>
                <div
                  css={mq({
                    display: "flex",
                    alignItems: "center",
                    marginTop: 20,
                  
                  })}
                >
                  <img  css={mq({width: [25,35,35,35]})} src={"svg/box.svg"} />{" "}
                  <div
                    css={mq({
                      fontSize: [25,30,30,30],
                      fontWeight: "bold",
                      marginLeft: 20,
                    })}
                  >
                    No developers needed.
                  </div>{" "}
                </div>
              </div>
              <div
                css={mq({
                  fontSize: [20,22,22,22],
                  fontWeight: "bold",
                  textDecoration: "underline",
                  color: "#6d61df",
                })}
              >
                <p>EXPLORE DASHBOARD</p>
              </div>
            </div>
            <div css={mq({
              display: ["none", "block","block","block"]
            })}>
              <img
                css={mq({
                  width: [450,600,600,600],
                  marginRight: -100,
                  marginTop: 10,
                })}
                src={"pics/grandma.png"}
              />
            </div>
          </div>
        </div>
      </div>
      <div
          css={mq({
            position: "relative",
            display: ["block", "none","none","none"]
          })}
        >
          
          <div
            css={mq({
              position: "absolute",
              left: "50%",
              right: "50%",
              top: 0,
            })}
          >
            <Lineone />
          </div>
        </div>
      <div
        css={mq({
          position: "relative",
          display: ["none", "block","block","block"]
        })}
      >
        
        <div
          css={mq({
            position: "absolute",
            left: "50%",
            right: "50%",
            top: 0,
          })}
        >
          <img src={"svg/linesix.svg"} />
        </div>
      </div>
      <div
        css={mq({
          marginTop: [170,110,110,110],
          padding: ["0px 20px", 0,0,0],
          background: "linear-gradient(180deg, #4E4885 0%, #1F1B39 100%)",
          height: 500,
        })}
      >
        <div
          css={mq({
            display: "flex",
            justifyContent: "center",

          })}
        >
          <div
            css={mq({
              display: "flex",
              justifyContent: "space-between",
flexDirection: ["column","row","row","row"],
              width: ["100%","80%","80%","80%"],
            })}
          >
            <div
              css={mq({
                flex: ["100%","50%","50%","50%"],

              })}
            >
              <div
                css={mq({
                  fontWeight: "bold",
                  fontSize: [30,40,40,40],
                  color: "#fff",
                })}
              >
                <p>Simple, affordable pricing</p>
              </div>
              <div
                css={mq({
                  fontSize: [22,25,25,25],
                  color: "#fff",
                })}
              >
                <p>
                  Our mini-website prices are paid annually, and it
                  pre-installed with amazing templates. Bye-bye to tiring
                  monthly fees & other technical jargons limits.
                </p>
              </div>
              <div
                css={mq({
                  fontWeight: 600,
                  fontSize: [20,22,22,22],
                  color: "#fff",
                  textDecoration: "underline",
                })}
              >
                <p>SEE PRICING</p>
              </div>
            </div>
            <div
              css={mq({
                flex: ["100%","50%","50%","50%"],
              })}
            >
              <div
                css={mq({
                  width: 400,

                  marginTop: [30,60,60,60],
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  marginLeft: [0,150,150,150],
                  boxShadow: "0px 0px 26px 0px rgba(0,0,0,0.1)",
                })}
              >
                <div
                  css={mq({
                    display: "flex",
                    justifyContent: "center",
                  })}
                >
                  <div
                    css={mq({
                      marginTop: 50,
                    })}
                  >
                    <select
                      css={mq({
                        outline: "none",
                        border: "solid",
                        borderColor: "#e2dff8",
                        borderWidth: 1,
                        padding: 10,
                        borderRadius: 5,
                        fontFamily: "Tisa Sans Pro",
                        fontSize: 18,

                        ":focus": {
                          outline: "none",
                          border: "solid",
                          borderWidth: 1,
                          borderColor: "#e2dff8",
                          padding: 10,
                          borderRadius: 5,
                        },
                      })}
                      name="select"
                    >
                      <option value="valor1" selected>
                        .com
                      </option>
                      <option value="valor2">.ng</option>
                      <option value="valor3">.co</option>
                    </select>{" "}
                  </div>
                </div>
                <div
                  css={mq({
                    textAlign: "center",
                  })}
                >
                  <div
                    css={mq({
                      fontSize: [30,40,40,40],
                      marginTop: 20,
                      fontWeight: "bold",
                    })}
                  >
                    ₦ 9,900
                  </div>
                  <div
                    css={mq({
                    fontSize: [20,22,22,22],
                    })}
                  >
                    per year
                  </div>
                  <div
                    css={mq({
                      display: "flex",
                      justifyContent: "center",
                      marginTop: 30,
                    })}
                  >
                    {/* <div css={mq({
    border: "dashed ",
    width: 300,
   borderWidth: 1,
   borderColor: "#dbddde"
})}></div> */}
                    <img
                      css={mq({
                        width: 350,
                      })}
                      src={"svg/lineseven.svg"}
                    />
                  </div>

                  <div
                    css={mq({
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: 60,
                    })}
                  >
                    <div
                      css={mq({
                        display: "flex",

                        marginTop: 30,
                      })}
                    >
                      <img css={mq({width: [25,35,35,35]})} src={"svg/box.svg"} />
                      <div
                        css={mq({
                          fontSize: [20,22,22,22],
                          fontWeight: 600,
                          marginLeft: 20,
                        })}
                      >
                        Domain registration
                      </div>{" "}
                    </div>

                    <div
                      css={mq({
                        display: "flex",

                        marginTop: 30,
                      })}
                    >
                      <img css={mq({width: [25,35,35,35]})}  src={"svg/box.svg"} />
                      <div
                        css={mq({
                          fontSize: [20,22,22,22],
                          fontWeight: 600,
                          marginLeft: 20,
                        })}
                      >
                        3 Professional webmails
                      </div>
                    </div>

                    <div
                      css={mq({
                        display: "flex",

                        marginTop: 30,
                      })}
                    >
                      <img css={mq({width: [25,35,35,35]})}  src={"svg/box.svg"} />
                      <div
                        css={mq({
                          fontSize: [20,22,22,22],
                          fontWeight: 600,
                          marginLeft: 20,
                        })}
                      >
                        5 Domain links
                      </div>
                    </div>

                    <div
                      css={mq({
                        display: "flex",

                        marginTop: 30,
                      })}
                    >
                      <img css={mq({width: [25,35,35,35]})}  src={"svg/box.svg"} />
                      <div
                        css={mq({
                          fontSize: [20,22,22,22],
                          fontWeight: 600,
                          marginLeft: 20,
                        })}
                      >
                        Amazing templates
                      </div>
                    </div>
                  </div>
                  <div
                    css={mq({
                      backgroundColor: "#6d61df",
                      marginTop: 30,
                      display: "flex",
                      justifyContent: "center",
                      paddingTop: 10,
                      paddingBottom: 10,
                      borderRadius: "0px 0px 10px 10px",
                    })}
                  >
                    <div
                      css={mq({
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      })}
                    >
                      <div
                        css={mq({
                          fontSize: [20,22,22,22],
                          fontWeight: 600,
                          color: "#fff",
                        })}
                      >
                        GET STARTED
                      </div>
                      <img
                        css={mq({
                          marginLeft: 15,
                          width: [25,35,35,35]
                        })}
                        src={"svg/right-arrow.svg"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        css={mq({
          marginTop: [450,350,350,350],
          backgroundColor: "#202020",
          paddingTop: 50,
        })}
      >
        <div>
          <div
            css={mq({
              fontSize: [55,65,65,65],
              fontWeight: "bold",
              color: "#fff",

              textAlign: "center",
            })}
          >
            Get started now.
          </div>
          <div
            css={mq({
              fontSize: [22,25,25,25],

              color: "#fff",
              textAlign: "center",
            })}
          >
            Get your mini-website today. Start by searching your domain name.
          </div>
        </div>
        <div
          css={mq({
            display: "flex",
            justifyContent: "center",
            marginTop: 20,
            marginBottom: 20,
          })}
        >
          <input
            css={mq({
              width: ["50vw","30vw","30vw","30vw"],
              padding: 10,
              outline: "none",
              border: "none",
              borderLeftRadius: 5,
              borderRadius: "5px 0px 0px 5px",
              ":focus": {
                outline: "none",
                border: "none",
                padding: 10,
              },
            })}
            type="box"
            placeholder="Businessname.com"
          ></input>{" "}
          <div>
            <button
              css={mq({
                backgroundColor: "#6D61DF",
                color: "#fff",
                padding: 10,
                borderRadius: "0px 5px 5px 0px",
                outline: "none",
                border: "none",
                fontSize: 18,
              })}
            >
              search
            </button>
          </div>
        </div>
        <img
          css={mq({
            marginTop: 20,
            width: "100%",
          })}
          src={"svg/lineeight.svg"}
        />
        <div
          css={mq({
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: ["column","row","row","row"],
            padding: "0px 20px",
            marginTop: 50,
          })}
        >
          <div>
            <div
              css={mq({
                color: "#fff",
                fontSize: [22,25,25,25],
                fontWeight: 600,
              })}
            >
              Contact
            </div>
            <div
              css={mq({
                fontSize: [20,22,22,22],
                color: "#E3FDFF",
                marginTop: 20,
              })}
            >
              hello@doncept.com
            </div>
            <div
              css={mq({
                fontWeight: "bold",
                fontSize: [22,25,25,25],
                color: "#fff",
                marginTop: 20,
              })}
            >
              +2348100632477
            </div>
            <div>
              <select
                css={mq({
                  outline: "none",
                  border: "none",
                  color: "#fff",
                  width: 150,
                  padding: 10,
                  marginTop: 20,
                  borderRadius: 5,
                  fontFamily: "Tisa Sans Pro",
                  fontSize: 18,
                  backgroundColor: "#363636",

                  ":focus": {
                    outline: "none",
                    border: "none",

                    padding: 10,
                    borderRadius: 5,
                  },
                })}
                name="select"
              >
                <option value="valor1" selected>
                  Nigeria
                </option>
              </select>
            </div>
            <div
              css={mq({
                display: "flex",
                marginTop: 20,
              })}
            >
              <img css={mq({})} src={"svg/facebook.svg"} />
              <img
                css={mq({
                  marginLeft: 15,
                })}
                src={"svg/instagram.svg"}
              />
              <img
                css={mq({
                  marginLeft: 15,
                })}
                src={"svg/linkedin.svg"}
              />
              <img
                css={mq({
                  marginLeft: 15,
                })}
                src={"svg/whatsapp.svg"}
              />
            </div>
          </div>
          <div css={mq({
            marginTop: [50, 0,0,0]
          })}>
            <div
              css={mq({
                color: "#fff",
                fontSize: [22,25,25,25],
                fontWeight: 600,
              })}
            >
              Templates
            </div>

            <div
              css={mq({
                color: "#fff",
                fontSize: [20,22,22,22],
                marginTop: 20,
              })}
            >
              Linker
            </div>
            <div
              css={mq({
                color: "#fff",
                fontSize: [20,22,22,22],
                marginTop: 20,
              })}
            >
              Profiler
            </div>
            <div
              css={mq({
                color: "#fff",
                fontSize: [20,22,22,22],
                marginTop: 20,
              })}
            >
              Postee
            </div>
            <div
              css={mq({
                color: "#fff",
                fontSize: [20,22,22,22],
                marginTop: 20,
              })}
            >
              All templates
            </div>
          </div>
          <div css={mq({
            marginTop: [50, 0,0,0]
          })}>
            <div
              css={mq({
                color: "#fff",
                fontSize: [22,25,25,25],
                fontWeight: 600,
              })}
            >
              Resources
            </div>
            <div
              css={mq({
                color: "#fff",
                fontSize: [20,22,22,22],
                marginTop: 20,
              })}
            >
              Pricing
            </div>
            <div
              css={mq({
                color: "#fff",
                fontSize: [20,22,22,22],
                marginTop: 20,
              })}
            >
              Help Center
            </div>
            <div
              css={mq({
                color: "#fff",
                fontSize: [20,22,22,22],
                marginTop: 20,
              })}
            >
              Integrations
            </div>
            <div
              css={mq({
                color: "#fff",
                fontSize: [20,22,22,22],
                marginTop: 20,
              })}
            >
              Use Cases
            </div>
          </div>
          <div css={mq({
            marginTop: [50, 0,0,0]
          })}>
            <div
              css={mq({
                color: "#fff",
                fontSize: [22,25,25,25],
                fontWeight: 600,
              })}
            >
              Company
            </div>
            <div
              css={mq({
                color: "#fff",
                fontSize: [20,22,22,22],
                marginTop: 20,
              })}
            >
              About us
            </div>
            <div
              css={mq({
                color: "#fff",
                fontSize: [20,22,22,22],
                marginTop: 20,
              })}
            >
              Contact
            </div>
            <div
              css={mq({
                color: "#fff",
                fontSize: [20,22,22,22],
                marginTop: 20,
              })}
            >
              Support
            </div>
            <div
              css={mq({
                color: "#fff",
                fontSize: [20,22,22,22],
                marginTop: 20,
              })}
            >
              Terms & Conditons
            </div>
            <div
              css={mq({
                color: "#fff",
                fontSize: [20,22,22,22],
                marginTop: 20,
              })}
            >
              Legal
            </div>
          </div>
        </div>
        <div
          css={mq({
            marginTop: 50,
            display: "flex",
            paddingLeft: 150,
            paddingBottom: 20,
          })}
        >
          <div
            css={mq({
              color: "#fff",

              fontSize: 18,
            })}
          >
            © DONCEPT TECH LIMITED
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Body;
