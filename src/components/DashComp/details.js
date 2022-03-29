import Nav2 from "./nav2";
import { css, jsx } from "@emotion/react";
import facepaint from "facepaint";

const breakpoints = [576, 768, 992, 1200];
const query = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
const Details = () => {
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
              width: ["100%", "75%", "75%", "75%"],

              paddingRight: [0, 50, 50, 50],
              paddingTop: 20,
              paddingBottom: 20,
            })}
          >
            <div
              css={mq({
                marginTop: 50,
                paddingRight: [20, 0, 0, 0],
                paddingLeft: [20, 0, 0, 0],
              })}
            >
              <div
                css={mq({
                  fontSize: [22,30,30,30],
                  fontWeight: 600,
                })}
              >
                <p>Upload Image</p>
              </div>
              <div>
                <label >
                  <input
                    css={mq({
                      display: "none",
                    })}
                    type="file"
                  />
                  <div
                    css={mq({
                      display: "flex",
                      justifyContent: "center",
                      border: "dashed",
                      borderColor: "#e0def7",
                      borderWidth: 2,
                      paddingBottom: 10,
                      borderRadius: 10,
                      paddingTop: 20,
                      backgroundColor: "#fff",
                    })}
                  >
                    <div>
                      <div
                        css={mq({
                          display: "flex",
                          justifyContent: "center",
                        })}
                      >
                        <img
                          css={mq({
                            width: 50,
                          })}
                          src={"/svg/image.svg"}
                        />{" "}
                      </div>
                      <div
                        css={mq({
                          fontSize: 16,
                          color: "#777777",
                          padding: 10,
                        })}
                      >
                        <p>
                          Click or drag your Logo or Personal Picture to this
                          area to upload
                        </p>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div
              css={mq({
                marginTop: 50,
                paddingRight: [20, 0, 0, 0],
                paddingLeft: [20, 0, 0, 0],
              })}
            >
              <div
                css={mq({
                  fontSize: [22,30,30,30],
                  fontWeight: 600,
                })}
              >
                <p>Business Name</p>
              </div>
              <div>
                <input
                  css={mq({
                    width: ["100%", 300, 300, 300],
                    paddingTop: 15,
                    paddingBottom: 15,
                    paddingLeft: 10,
                    paddingRight: 10,
                    outline: "none",
                    border: "solid",
                    borderWidth: 1,
                    borderColor: "#e2dff8",

                    borderRadius: 5,
                    ":focus": {
                      outline: "none",
                      border: "solid",
                      borderWidth: 1,
                      borderColor: "#e2dff8",

                      paddingTop: 15,
                      paddingBottom: 15,
                      paddingLeft: 10,
                      paddingRight: 10,
                    },
                  })}
                />
              </div>
            </div>
            <div
              css={mq({
                marginTop: 50,
                paddingRight: [20, 0, 0, 0],
                paddingLeft: [20, 0, 0, 0],
              })}
            >
              <div
                css={mq({
                  fontSize: [22,30,30,30],
                  fontWeight: 600,
                })}
              >
                <p>About Us Write Up</p>
              </div>
              <div>
                <textarea
                  id="txtid"
                  name="txtname"
                  rows="5"
                  cols="45"
                 
                  css={mq({
                    paddingTop: 15,
                    paddingBottom: 15,
                    paddingLeft: 10,
                    paddingRight: 10,
                    outline: "none",
                    border: "solid",
                    borderWidth: 1,
                    borderColor: "#e2dff8",

                    borderRadius: 5,
                    ":focus": {
                      outline: "none",
                      border: "solid",
                      borderWidth: 1,
                      borderColor: "#e2dff8",

                      paddingTop: 15,
                      paddingBottom: 15,
                      paddingLeft: 10,
                      paddingRight: 10,
                    },
                  })}
                />
              </div>
            </div>
            <div
              css={mq({
                marginTop: 50,
                paddingRight: [20, 0, 0, 0],
                paddingLeft: [20, 0, 0, 0],
              })}
            >
              <div
                css={mq({
                  fontSize: [22,30,30,30],
                  fontWeight: 600,
                })}
              >
                <p>Button Links</p>
              </div>
              <div
                css={mq({
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: ["column", "row", "row", "row"],
                })}
              >
                <div css={mq({})}>
                  <div
                    css={mq({
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    })}
                  >
                    <div
                      css={mq({
                        fontSize: [20,22,22,22],
                        fontWeight: 600,
                      })}
                    >
                      <p>Button 1 :</p>
                    </div>{" "}
                    <div>
                      <img
                        css={mq({
                          width: 30,
                        })}
                        src={"/svg/delbutton.svg"}
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <div>
                        <label css={mq({ color: "#777777", fontSize: [18, 20, 20, 20], fontWeight: 500})}>Button Link</label>
                      </div>
                      <input
                        css={mq({
                          width: ["100%", 400, 400, 400],
                          paddingTop: 15,
                          paddingBottom: 15,
                          paddingLeft: 10,
                          paddingRight: 10,
                          outline: "none",
                          border: "solid",
                          borderWidth: 1,
                          borderColor: "#e2dff8",

                          borderRadius: 5,
                          ":focus": {
                            outline: "none",
                            border: "solid",
                            borderWidth: 1,
                            borderColor: "#e2dff8",

                            paddingTop: 15,
                            paddingBottom: 15,
                            paddingLeft: 10,
                            paddingRight: 10,
                          },
                        })}
                      />
                    </div>
                    <div
                      css={mq({
                        marginTop: 20,
                      })}
                    >
                      <div>
                        <label css={mq({ color: "#777777", fontSize: [18, 20, 20, 20], fontWeight: 500})}>Button URL</label>
                      </div>
                      <input
                        css={mq({
                          width: ["100%", 400, 400, 400],
                          paddingTop: 15,
                          paddingBottom: 15,
                          paddingLeft: 10,
                          paddingRight: 10,
                          outline: "none",
                          border: "solid",
                          borderWidth: 1,
                          borderColor: "#e2dff8",

                          borderRadius: 5,
                          ":focus": {
                            outline: "none",
                            border: "solid",
                            borderWidth: 1,
                            borderColor: "#e2dff8",

                            paddingTop: 15,
                            paddingBottom: 15,
                            paddingLeft: 10,
                            paddingRight: 10,
                          },
                        })}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  {" "}
                  <div
                    css={mq({
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    })}
                  >
                    <div
                      css={mq({
                        fontSize: [20,22,22,22],
                        fontWeight: 600,
                      })}
                    >
                      <p>Button 2 :</p>
                    </div>{" "}
                    <div>
                      <img
                        css={mq({
                          width: 30,
                        })}
                        src={"/svg/delbutton.svg"}
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <div>
                        <label css={mq({ color: "#777777", fontSize: [18, 20, 20, 20], fontWeight: 500})}>Button Link</label>
                      </div>
                      <input
                        css={mq({
                          width: ["100%", 400, 400, 400],
                          paddingTop: 15,
                          paddingBottom: 15,
                          paddingLeft: 10,
                          paddingRight: 10,
                          outline: "none",
                          border: "solid",
                          borderWidth: 1,
                          borderColor: "#e2dff8",

                          borderRadius: 5,
                          ":focus": {
                            outline: "none",
                            border: "solid",
                            borderWidth: 1,
                            borderColor: "#e2dff8",

                            paddingTop: 15,
                            paddingBottom: 15,
                            paddingLeft: 10,
                            paddingRight: 10,
                          },
                        })}
                      />
                    </div>
                    <div
                      css={mq({
                        marginTop: 20,
                      })}
                    >
                      <div>
                        <label css={mq({ color: "#777777", fontSize: [18, 20, 20, 20], fontWeight: 500})}>Button URL</label>
                      </div>
                      <input
                        css={mq({
                          width: ["100%", 400, 400, 400],
                          paddingTop: 15,
                          paddingBottom: 15,
                          paddingLeft: 10,
                          paddingRight: 10,
                          outline: "none",
                          border: "solid",
                          borderWidth: 1,
                          borderColor: "#e2dff8",

                          borderRadius: 5,
                          ":focus": {
                            outline: "none",
                            border: "solid",
                            borderWidth: 1,
                            borderColor: "#e2dff8",

                            paddingTop: 15,
                            paddingBottom: 15,
                            paddingLeft: 10,
                            paddingRight: 10,
                          },
                        })}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                css={mq({
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: ["column", "row", "row", "row"],
                })}
              >
                <div>
                  <div
                    css={mq({
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    })}
                  >
                    <div
                      css={mq({
                        fontSize: [20,22,22,22],
                        fontWeight: 600,
                      })}
                    >
                      <p>Button 3 :</p>
                    </div>{" "}
                    <div>
                      <img
                        css={mq({
                          width: 30,
                        })}
                        src={"/svg/delbutton.svg"}
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <div>
                        <label css={mq({ color: "#777777", fontSize: [18, 20, 20, 20], fontWeight: 500})}>Button Link</label>
                      </div>
                      <input
                        css={mq({
                          width: ["100%",400,400, 400],
                          paddingTop: 15,
                          paddingBottom: 15,
                          paddingLeft: 10,
                          paddingRight: 10,
                          outline: "none",
                          border: "solid",
                          borderWidth: 1,
                          borderColor: "#e2dff8",

                          borderRadius: 5,
                          ":focus": {
                            outline: "none",
                            border: "solid",
                            borderWidth: 1,
                            borderColor: "#e2dff8",

                            paddingTop: 15,
                            paddingBottom: 15,
                            paddingLeft: 10,
                            paddingRight: 10,
                          },
                        })}
                      />
                    </div>
                    <div
                      css={mq({
                        marginTop: 20,
                      })}
                    >
                      <div>
                        <label css={mq({ color: "#777777", fontSize: [18, 20, 20, 20], fontWeight: 500})}>Button URL</label>
                      </div>
                      <input
                        css={mq({
                          width: ["100%",400, 400, 400],
                          paddingTop: 15,
                          paddingBottom: 15,
                          paddingLeft: 10,
                          paddingRight: 10,
                          outline: "none",
                          border: "solid",
                          borderWidth: 1,
                          borderColor: "#e2dff8",

                          borderRadius: 5,
                          ":focus": {
                            outline: "none",
                            border: "solid",
                            borderWidth: 1,
                            borderColor: "#e2dff8",

                            paddingTop: 15,
                            paddingBottom: 15,
                            paddingLeft: 10,
                            paddingRight: 10,
                          },
                        })}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    css={mq({
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    })}
                  >
                    <div
                      css={mq({
                        fontSize: [20,22,22,22],
                        fontWeight: 600,
                      })}
                    >
                      <p>Button 4 :</p>
                    </div>{" "}
                    <div>
                      <img
                        css={mq({
                          width: 30,
                        })}
                        src={"/svg/delbutton.svg"}
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <div>
                        <label css={mq({ color: "#777777", fontSize: [18, 20, 20, 20], fontWeight: 500})}>Button Link</label>
                      </div>
                      <input
                        css={mq({
                          width: ["100%",400,400,400],
                          paddingTop: 15,
                          paddingBottom: 15,
                          paddingLeft: 10,
                          paddingRight: 10,
                          outline: "none",
                          border: "solid",
                          borderWidth: 1,
                          borderColor: "#e2dff8",

                          borderRadius: 5,
                          ":focus": {
                            outline: "none",
                            border: "solid",
                            borderWidth: 1,
                            borderColor: "#e2dff8",

                            paddingTop: 15,
                            paddingBottom: 15,
                            paddingLeft: 10,
                            paddingRight: 10,
                          },
                        })}
                      />
                    </div>
                    <div
                      css={mq({
                        marginTop: 20,
                      })}
                    >
                      <div>
                        <label css={mq({ color: "#777777", fontSize: [18, 20, 20, 20], fontWeight: 500})}>Button URL</label>
                      </div>
                      <input
                        css={mq({
                          width: ["100%",400,400,400],
                          paddingTop: 15,
                          paddingBottom: 15,
                          paddingLeft: 10,
                          paddingRight: 10,
                          outline: "none",
                          border: "solid",
                          borderWidth: 1,
                          borderColor: "#e2dff8",

                          borderRadius: 5,
                          ":focus": {
                            outline: "none",
                            border: "solid",
                            borderWidth: 1,
                            borderColor: "#e2dff8",

                            paddingTop: 15,
                            paddingBottom: 15,
                            paddingLeft: 10,
                            paddingRight: 10,
                          },
                        })}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              css={mq({
                display: "flex",
                justifyContent: ["right", "center", "center", "center"],
                marginTop: 50,
                marginBottom: 50,
                paddingRight: [20, 0, 0, 0],
                paddingLeft: [20, 0, 0, 0],
              })}
            >
              <button
                css={mq({
                  fontSize: 18,
                  border: "none",

                  backgroundColor: "#3BB75E",
                  fontFamily: "Tisa Sans Pro",
                  color: "#fff",
                  paddingLeft: 30,
                  paddingRight: 30,
                  paddingTop: 10,
                  paddingBottom: 10,
                  borderRadius: 5,
                  fontWeight: "bold",
                })}
              >
                + ADD MORE BUTTONS
              </button>{" "}
            </div>
            <div
              css={mq({
                display: "flex",
                justifyContent: "right",
                marginTop: 50,
                marginBottom: 50,
                paddingRight: [20, 0, 0, 0],
                paddingLeft: [20, 0, 0, 0],
              })}
            >
              <button
                css={mq({
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
                })}
              >
                SAVE CHANGES
              </button>{" "}
            </div>
          </div>
        </div>
      </Nav2>
    </div>
  );
};

export default Details;
