import DashboardNav2 from "./dashboardnav2";
import { css, jsx } from "@emotion/react";
import facepaint from "facepaint";

const breakpoints = [576, 768, 992, 1200];
const query = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
const Upgrade = () => {
    function cardHide(card) {
        let hideNum = [];
          for(let i = 0; i < card.length; i++){
          if(i < card.length-4){
            hideNum.push("*");
          }else{
            hideNum.push(card[i]);
          }
        }
        return hideNum.join("");
      }

    const  ade = cardHide("1234567890987654")
    console.log(ade)
  return (
    <div>
      <DashboardNav2>
        <div
          css={mq({
            display: "flex",
            justifyContent: "right",
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
              width: "75%",

              paddingRight: 50,
              paddingTop: 20,
              paddingBottom: 20,
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
                  fontSize: 35,
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
              width: "75%",

              paddingRight: 50,
              paddingTop: 20,
              paddingBottom: 20,
            })}
          >


           
            
            <div css={mq({
                
                marginTop: 40
            })}>
                 <div css={mq({
                fontSize: 25,
                fontWeight: 600,
               
               
               
            })}>Manage Payment Methods</div>
              <div css={mq({
                    display: "flex",
                    width: "65%",
                    alignItems: "center",
                    marginTop: 20
                })}>
            <div><img
            css={mq({
              
             
            })}
            src={"/svg/informationbutton.svg"}
          /></div>
          <div css={mq({
                    marginLeft: 20
                })}>Whichever package you purhase will be added. If you have buy <span css={mq({
                    fontWeight: 600
                })}> Email Accounts (5)</span> and you previously have <span css={mq({
                    fontWeight: 600
                })}>3</span>, you will now have  <span css={mq({
                    fontWeight: 600
                })}>38 Email Accounts</span></div>
          </div>
            
           
            </div>
            
            <div css={
                mq({
                    marginTop: 20
                  
                })
            }>
               
            <table css={mq({
                backgroundColor: "#fff",
                marginTop: 20,
                borderRadius: 10,
                border: "solid",
                width: "100%",
        borderWidth: 1,
        borderColor: "#EFF1F2",
            })}>
                <thead>
  <tr css={mq({
      textAlign: "left",
      
            
  })}>
      
    <th css={mq({
        paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
                fontSize: 18,
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
    })}>Service</th>
    <th css={mq({
        paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
                fontSize: 18,
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
    })}>Amount</th>
    <th css={mq({
        paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
                fontSize: 18,
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
    })}>Period</th>
    <th css={mq({
        paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
                fontSize: 18,
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
    })}></th>
    
   
  </tr></thead>
  <tbody>
  <tr>
  <td css={mq({
        paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
            fontSize: 18,
            color: "#777777"
    })}>Email Accounts<span css={mq({
        color: "#6D61DF",
        fontWeight: 600
    })}>(5)</span></td>
    <td css={mq({
        paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
            fontSize: 18,
            color: "#3BB75E",
            fontWeight: 700
    })}>₦8,900</td>
    <td css={mq({
        paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
                fontSize: 18,
            color: "#777777",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
    })}>One-time fee</td>
    <td css={mq({
        paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
                fontSize: 18,
            color: "#777777",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
    })}> <button css={mq({
        fontSize: 18,
        border: "none",

        backgroundColor: "#6D61DF",
        fontFamily: "Tisa Sans Pro",
color: "#fff",
paddingLeft: 30,
paddingRight: 30,
paddingTop: 10,
paddingBottom: 10,
borderRadius: 5,
fontWeight: "bold",


 
 
    })}>UPGRADE</button></td>
    
    
  </tr>
  <tr>
  <td css={mq({
        paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
            fontSize: 18,
            color: "#777777"
    })}>Email Accounts<span css={mq({
        color: "#6D61DF",
        fontWeight: 600
    })}>(100)</span></td>
    <td css={mq({
        paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
            fontSize: 18,
            color: "#3BB75E",
            fontWeight: 700
    })}>₦8,900</td>
    <td css={mq({
        paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
                fontSize: 18,
            color: "#777777",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
    })}>One-time fee</td>
    <td css={mq({
        paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
                fontSize: 18,
            color: "#777777",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
    })}> <button css={mq({
        fontSize: 18,
        border: "none",

        backgroundColor: "#6D61DF",
        fontFamily: "Tisa Sans Pro",
color: "#fff",
paddingLeft: 30,
paddingRight: 30,
paddingTop: 10,
paddingBottom: 10,
borderRadius: 5,
fontWeight: "bold",


 
 
    })}>UPGRADE</button></td>
    
    
  </tr>
  <tr>
  <td css={mq({
        paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
            fontSize: 18,
            color: "#777777"
    })}>Domain Links <span css={mq({
        color: "#6D61DF",
        fontWeight: 600
    })}>(5)</span></td>
    <td css={mq({
        paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
            fontSize: 18,
            color: "#3BB75E",
            fontWeight: 700
    })}>₦8,900</td>
    <td css={mq({
        paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
                fontSize: 18,
            color: "#777777",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
    })}>One-time fee</td>
    <td css={mq({
        paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
                fontSize: 18,
            color: "#777777",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
    })}> <button css={mq({
        fontSize: 18,
        border: "none",

        backgroundColor: "#6D61DF",
        fontFamily: "Tisa Sans Pro",
color: "#fff",
paddingLeft: 30,
paddingRight: 30,
paddingTop: 10,
paddingBottom: 10,
borderRadius: 5,
fontWeight: "bold",


 
 
    })}>UPGRADE</button></td>
    
    
  </tr>
  <tr>
  <td css={mq({
        paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
            fontSize: 18,
            color: "#777777"
    })}>Domain Links <span css={mq({
        color: "#6D61DF",
        fontWeight: 600
    })}>(100)</span></td>
    <td css={mq({
        paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
            fontSize: 18,
            color: "#3BB75E",
            fontWeight: 700
    })}>₦8,900</td>
    <td css={mq({
        paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
                fontSize: 18,
            color: "#777777",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
    })}>One-time fee</td>
    <td css={mq({
        paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
                fontSize: 18,
            color: "#777777",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
    })}> <button css={mq({
        fontSize: 18,
        border: "none",

        backgroundColor: "#6D61DF",
        fontFamily: "Tisa Sans Pro",
color: "#fff",
paddingLeft: 30,
paddingRight: 30,
paddingTop: 10,
paddingBottom: 10,
borderRadius: 5,
fontWeight: "bold",


 
 
    })}>UPGRADE</button></td>
    
    
  </tr>
  <tr>
  <td css={mq({
        paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
            fontSize: 18,
            color: "#777777"
    })}>Email Storage <span css={mq({
        color: "#6D61DF",
        fontWeight: 600
    })}>(2 GB)</span></td>
    <td css={mq({
        paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
            fontSize: 18,
            color: "#3BB75E",
            fontWeight: 700
    })}>₦8,900</td>
    <td css={mq({
        paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
                fontSize: 18,
            color: "#777777",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
    })}>Yearly</td>
    <td css={mq({
        paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
                fontSize: 18,
            color: "#777777",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
    })}> <button css={mq({
        fontSize: 18,
        border: "none",

        backgroundColor: "#6D61DF",
        fontFamily: "Tisa Sans Pro",
color: "#fff",
paddingLeft: 30,
paddingRight: 30,
paddingTop: 10,
paddingBottom: 10,
borderRadius: 5,
fontWeight: "bold",


 
 
    })}>UPGRADE</button></td>
    
    
  </tr>
  <tr>
  <td css={mq({
        paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
            fontSize: 18,
            color: "#777777"
    })}>Email Storage <span css={mq({
        color: "#6D61DF",
        fontWeight: 600
    })}>(10 GB)</span></td>
    <td css={mq({
        paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
            fontSize: 18,
            color: "#3BB75E",
            fontWeight: 700
    })}>₦8,900</td>
    <td css={mq({
        paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
                fontSize: 18,
            color: "#777777",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
    })}>Yearly</td>
    <td css={mq({
        paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
                fontSize: 18,
            color: "#777777",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
    })}> <button css={mq({
        fontSize: 18,
        border: "none",

        backgroundColor: "#6D61DF",
        fontFamily: "Tisa Sans Pro",
color: "#fff",
paddingLeft: 30,
paddingRight: 30,
paddingTop: 10,
paddingBottom: 10,
borderRadius: 5,
fontWeight: "bold",


 
 
    })}>UPGRADE</button></td>
    
    
  </tr>
  <tr>
  <td css={mq({
        paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
            fontSize: 18,
            color: "#777777"
    })}>Email Storage <span css={mq({
        color: "#6D61DF",
        fontWeight: 600
    })}>(50 GB)</span></td>
    <td css={mq({
        paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
            fontSize: 18,
            color: "#3BB75E",
            fontWeight: 700
    })}>₦8,900</td>
    <td css={mq({
        paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
                fontSize: 18,
            color: "#777777",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
    })}>Yearly</td>
    <td css={mq({
        paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
                fontSize: 18,
            color: "#777777",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
    })}> <button css={mq({
        fontSize: 18,
        border: "none",

        backgroundColor: "#6D61DF",
        fontFamily: "Tisa Sans Pro",
color: "#fff",
paddingLeft: 30,
paddingRight: 30,
paddingTop: 10,
paddingBottom: 10,
borderRadius: 5,
fontWeight: "bold",


 
 
    })}>UPGRADE</button></td>
    
    
  </tr>
  <tr>
  <td css={mq({
        paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
            fontSize: 18,
            color: "#777777"
    })}>Full Ecommerce Website<span css={mq({
        color: "#6D61DF",
        fontWeight: 600
    })}>(5)</span></td>
    <td css={mq({
        paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
            fontSize: 18,
            color: "#3BB75E",
            fontWeight: 700
    })}>₦8,900</td>
    <td css={mq({
        paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
                fontSize: 18,
            color: "#777777",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
    })}>Dynamic</td>
    <td css={mq({
        paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
                fontSize: 18,
            color: "#777777",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
    })}> <button css={mq({
        fontSize: 18,
        border: "none",

        backgroundColor: "#6D61DF",
        fontFamily: "Tisa Sans Pro",
color: "#fff",
paddingLeft: 30,
paddingRight: 30,
paddingTop: 10,
paddingBottom: 10,
borderRadius: 5,
fontWeight: "bold",


 
 
    })}>LEARN MORE</button></td>
    
    
  </tr></tbody>
  
</table></div>


            
          </div></div>
         
      </DashboardNav2>
    </div>
  );
};

export default Upgrade;
