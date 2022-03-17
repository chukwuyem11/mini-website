import DashboardNav2 from "./dashboardnav2";
import { css, jsx } from "@emotion/react";
import facepaint from "facepaint";

const breakpoints = [576, 768, 992, 1200];
const query = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
const PaymentInfo = () => {
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
                
                marginTop: 50
            })}>
                <div css={mq({
                fontSize: 25,
                fontWeight: 600,
                
               
               
            })}>Manage Payment Methods</div>
                <div css={mq({
                    backgroundColor: "#fff",
                    borderRadius: 10,
                    marginTop: 20,
                    border: "solid",
            borderWidth: 1,
            borderColor: "#EFF1F2",
            width: 450
                })}>
                <div css={mq({
                fontSize: 25,
                fontWeight: 600,
                paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 30,
            paddingRight: 30,
                border: "solid",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
            display: "flex",
            alignItems: "center"
            
               
            })}><img
            css={mq({
              
            })}
            src={"/svg/mastercard.svg"}
        /> <div css={mq({
              marginLeft: 30
        })}>{ade}</div></div>
            <div css={mq({
                 fontSize: 25,
                 fontWeight: 600,
                 paddingTop: 20,
                paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
            display: "flex",
            alignItems: "center"
                    
            })}>
           
           <img
            css={mq({
              
            })}
            src={"/svg/visa.svg"}
          />
            <div css={mq({
              marginLeft: 30
        })}>{ade}</div>
            </div>
            <div css={mq({
                paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                fontSize: 22,
                fontWeight: 700,
                color: "#6D61DF",
            })}>+ Add New Card</div>
            </div>
            
           
            </div>
            
            <div css={
                mq({
                    marginTop: 100
                  
                })
            }>
                <div css={mq({
                fontSize: 25,
                fontWeight: 600,
               
               
               
            })}>Manage Payment Methods</div>
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
    })}>Date</th>
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
    })}>Due Date</th>
    <th css={mq({
        paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
    })}></th>
  </tr></thead>
  <tbody>
  <tr
  >
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
    })}>Mini - website</td>
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
    })}>25/07/2021</td>
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
    })}>23/07/2022</td>
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
            color: "#6D61DF",
            fontWeight: 700
    })}>Pay now</td>
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
    })}>Mini - website</td>
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
    })}>25/07/2021</td>
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
    })}>23/07/2022</td>
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
            color: "#6D61DF",
            fontWeight: 700
    })}>Pay now</td>
  </tr></tbody>
  
</table></div>

<div css={
                mq({
                    marginTop: 100
                  
                })
            }>
                <div css={mq({
                fontSize: 25,
                fontWeight: 600,
               
               
               
            })}>Payment History</div>
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
    })}>Date</th>
    
  </tr></thead>
  <tbody>
  <tr
  >
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
    })}>Mini - website</td>
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
    })}>25/07/2021</td>
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
    })}>Mini - website</td>
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
    })}>25/07/2021</td>
    
  </tr></tbody>
  
</table></div>
            
          </div></div>
         
      </DashboardNav2>
    </div>
  );
};

export default PaymentInfo;
