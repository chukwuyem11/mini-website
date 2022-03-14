import { css, jsx } from "@emotion/react";
import facepaint from "facepaint";

const breakpoints = [576, 768, 992, 1200];
const query = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

const DashboardNav = (props) => {
    return (
        <div css={mq({
            backgroundColor: "#fafafa",
            
        })}>
            <div css={ mq({
                display: "flex",
                
            })}>
                <div css={mq({

                })}><div css={mq({
                    
                    backgroundColor: "#1f1b39",
                    height: "100vh",
                    width: 300,
                    position: "fixed",
                    overflow: "scroll",
                    "&::-webkit-scrollbar": {
                        width: 5, background: "#c4c4c4", height: 0 
                      }, "&::-webkit-scrollbar-thumb": {
                        width: 5, background: "#000", borderRadius: 5
                      },
                    
                })}><div css={mq({
                    padding: 10
                })}><div  css={mq({
                    display: "flex",
                    justifyContent: "space-between",
                    backgroundColor:"#6d61df",
                    alignItems: "center",
                    padding: 15,
                    borderRadius: 5
                })}>
                    <div ><div css={mq({
                        color: "#fff",
                        fontSize: 22,
                        fontWeight: 500
                    })}>Doncept</div>
                    <div css={mq({
                        color: "#fff",
                        fontSize: 16,
                        
                    })}><p>doncept.com.ng</p></div>
                    </div>
                    <div> 
                   
                    <img src={"svg/downwardarrow.svg"} />
                  </div>
                    </div></div>
                    <div css={mq({
                         display: "flex",
                        alignItems: "center",
                        backgroundColor: "#6d61df",
                        padding: 15,
                        marginTop: 10,
                    })}><div> <img src={"svg/home.svg"} /></div> <div css={mq({
                        fontSize: 16,
                        color: "#fff",
                        marginLeft: 10
                    })}>Home</div></div>
                     <div css={mq({
                         display: "flex",
                        alignItems: "center",
                       
                        padding: 15,
                        ":hover": {
                            backgroundColor: "#6d61df",
                        }
                    })}><div> <img src={"svg/design.svg"} /></div> <div css={mq({
                        fontSize: 16,
                        color: "#fff",
                        marginLeft: 10
                    })}>Design</div></div>
                      <div css={mq({
                         display: "flex",
                        alignItems: "center",
                     
                        padding: 15,
                        ":hover": {
                            backgroundColor: "#6d61df",
                        }
                    })}><div> <img src={"svg/colors.svg"} /></div> <div css={mq({
                        fontSize: 16,
                        color: "#fff",
                        marginLeft: 10
                    })}>Colors</div></div>
                      <div css={mq({
                         display: "flex",
                        alignItems: "center",
                      
                        padding: 15,
                        ":hover": {
                            backgroundColor: "#6d61df",
                        }
                    })}><div> <img src={"svg/socialmedia.svg"} /></div> <div css={mq({
                        fontSize: 16,
                        color: "#fff",
                        marginLeft: 10
                    })}>Social Media</div></div>
                      <div css={mq({
                         display: "flex",
                        alignItems: "center",
                      
                        padding: 15,
                        ":hover": {
                            backgroundColor: "#6d61df",
                        }
                    })}><div> <img src={"svg/emails.svg"} /></div> <div css={mq({
                        fontSize: 16,
                        color: "#fff",
                        marginLeft: 10
                    })}>Emails</div></div>
                      <div css={mq({
                         display: "flex",
                        alignItems: "center",
                       
                        padding: 15,
                        ":hover": {
                            backgroundColor: "#6d61df",
                        }
                    })}><div> <img src={"svg/nameservers.svg"} /></div> <div css={mq({
                        fontSize: 16,
                        color: "#fff",
                        marginLeft: 10
                    })}>Nameservers</div></div>
                      <div css={mq({
                         display: "flex",
                        alignItems: "center",
                       
                        padding: 15,
                        ":hover": {
                            backgroundColor: "#6d61df",
                        }
                    })}><div> <img src={"svg/FBveri.svg"} /></div> <div css={mq({
                        fontSize: 16,
                        color: "#fff",
                        marginLeft: 10
                    })}>FB Verification</div></div>
                      <div css={mq({
                         display: "flex",
                        alignItems: "center",
                    
                        padding: 15,
                        ":hover": {
                            backgroundColor: "#6d61df",
                        }
                    })}><div> <img src={"svg/links.svg"} /></div> <div css={mq({
                        fontSize: 16,
                        color: "#fff",
                        marginLeft: 10
                    })}>Links</div></div>
                      <div css={mq({
                         display: "flex",
                        alignItems: "center",
                       
                        padding: 15,
                        ":hover": {
                            backgroundColor: "#6d61df",
                        }
                    })}><div> <img src={"svg/payments.svg"} /></div> <div css={mq({
                        fontSize: 16,
                        color: "#fff",
                        marginLeft: 10
                    })}>Payment Info</div></div>
                      <div css={mq({
                         display: "flex",
                        alignItems: "center",
                      
                        padding: 15,
                        ":hover": {
                            backgroundColor: "#6d61df",
                        }
                    })}><div> <img src={"svg/upgrade.svg"} /></div> <div css={mq({
                        fontSize: 16,
                        color: "#fff",
                        marginLeft: 10
                    })}>Upgrade</div></div>
                     <div css={mq({
                         display: "flex",
                        alignItems: "center",
                      
                        padding: 15,
                        ":hover": {
                            backgroundColor: "#6d61df",
                        }
                    })}><div> <img src={"svg/help.svg"} /></div> <div css={mq({
                        fontSize: 16,
                        color: "#fff",
                        marginLeft: 10
                    })}>Help</div></div>
                     <div css={mq({
                         display: "flex",
                        alignItems: "center",
                      
                        padding: 15,
                        ":hover": {
                            backgroundColor: "#6d61df",
                        }
                    })}><div> <img src={"svg/settings.svg"} /></div> <div css={mq({
                        fontSize: 16,
                        color: "#fff",
                        marginLeft: 10
                    })}>Settings</div></div>
                    </div></div>
    <div css={mq({
        flex: "70%",
       
    })} >{props.children}</div>
            </div>
        </div>
    )
}

export default DashboardNav