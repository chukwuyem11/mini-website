import Nav2 from "./nav2";
import { css, jsx } from "@emotion/react";
import facepaint from "facepaint";

const breakpoints = [576, 768, 992, 1200];
const query = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
const PaymentInfo = () => {
    const payments = [
        {
            name: "Mini - website",
            price: 8900,
            period: "yearly",
            date: "25/07/2021",
            due_date: "23/07/2022"
        },
        {
            name: "Mini - website",
            price: 7000,
            period: "yearly",
            date: "25/07/2021",
            due_date: "23/07/2022"
        },
    ]
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
              paddingRight: [20, 0, 0, 0],
                paddingLeft: [20, 0, 0, 0],
            })}
          >


           
            
            <div css={mq({
                
                marginTop: 50,
                
            })}>
                <div css={mq({
                fontSize: [22,25,25,25],
                fontWeight: 600,
                
               
               
            })}>Manage Payment Methods</div>
            
                <div css={mq({
                    backgroundColor: "#fff",
                    borderRadius: 10,
                    marginTop: 20,
                    border: "solid",
            borderWidth: 1,
            borderColor: "#EFF1F2",
            width: ["100%",450,450,450]
                })}>
                <div css={mq({
               fontSize: [22,25,25,25],
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
                 fontSize: [22,25,25,25],
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
                fontSize: [20,22,22,22],
                fontWeight: 700,
                color: "#6D61DF",
            })}>+ Add New Card</div>
            </div>
            
           
            </div>
            
            
            
            <div css={
                mq({
                    marginTop: 50,
                    paddingRight: [0,20,20,20],
                
                    
                    
                  
                })
            }>
                <div css={mq({
                fontSize: [22,25,25,25],
                fontWeight: 600,
               
               
               
            })}>Manage Active Payments</div>

                <div css={mq({
              display: ["none", "block", "block", "block"]
            })}>
               
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

  {payments.map((payment) => (<tbody>
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
})}>{payment.name}</td>
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
})}>{payment.price}</td>
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
})}>{payment.price}</td>
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
})}>{payment.date}</td>
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
})}>{payment.due_date}</td>
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
  </tr></tbody>))}
            </table>

                  </div>

                  <div css={mq({
                backgroundColor: "#fff",
                borderRadius: 10,
                marginTop: 20,
         
                border: "solid",
        borderWidth: 1,
        borderColor: "#EFF1F2",
        
        display: ["block", "none","none","none"]
        
            })}>
                
              <div css={mq({
                display: "flex",
                alignItems: "center",
                border: "solid",
                borderWidth: 1,
                borderColor: "transparent",
                borderBottomColor: "#EFF1F2",
                paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 10,
              paddingBottom: 10,
              })}>
              <div css={mq({
                flex: "20%",
                padding: 10
              })}>
                
              <div css={mq({
                fontSize: 16,
                fontWeight: 600
              })}>
              Service</div>
             
             </div>
             <div css={mq({
               flex: "20%"
              })}>
              
              <div css={mq({
               
               
               fontSize: 16,
               fontWeight: 600
              })}>Amount</div></div>
              <div css={mq({
               flex: "20%"
              })}>
              
              <div css={mq({
               fontSize: 16,
               fontWeight: 600
              })}>
              Period</div></div>
              <div css={mq({
               flex: "20%"
              })}>
              
              <div css={mq({
               fontSize: 16,
               fontWeight: 600
              })}>
              Date</div></div>
              <div css={mq({
               flex: "20%"
              })}>
              
              <div css={mq({
               fontSize: 16,
               fontWeight: 600
              })}>
              Due Date</div></div>
             
             
              </div>
           

              
    
              {payments.map((payment) => (<div css={mq({
                 
                 
              })}>
                <div css={mq({
                backgroundColor: "#fff",
                borderRadius: 10,
                border: "solid",
                borderWidth: 1,
                borderColor: "transparent",
                borderBottomColor: "#EFF1F2",
       
        display: ["block", "none","none","none"]
        
            })}>
              <div css={mq({
                display: "flex",
                alignItems: "center",
              paddingLeft: 10,
              paddingRight: 10
              })}>
              <div css={mq({
                flex: "20%",
                padding: 10
              })}>
                
              <div css={mq({
               fontSize: [16,18,18,18],
               color: "#777777"
              })}>
{payment.name}</div>
             
             </div>
             <div css={mq({
               flex: "20%"
              })}>
              
              <div css={mq({
               
               
               color: "#6D61DF",
        fontWeight: 600
})}>{payment.price}</div></div>
              <div css={mq({
               flex: "20%"
              })}>
              
              <div css={mq({
               fontSize: 16,
               marginLeft: 5,
             color: "#777777"
              })}>
              {payment.period}</div></div>
              <div css={mq({
               flex: "20%"
              })}>
              
              <div css={mq({
               fontSize: [16,18,18,18],
               color: "#777777"
              })}>
              {payment.date}</div></div>
              <div css={mq({
               flex: "20%"
              })}>
              
              <div css={mq({
               fontSize: [16,18,18,18],
               color: "#777777"
              })}>
              {payment.due_date}</div></div>
              </div>
            </div>

              </div>))} </div>

           </div>

<div css={
                mq({
                    marginTop: 50,
                    paddingRight: [0,20,20,20],
                })
            }>
                <div css={mq({
               fontSize: [22,25,25,25],
                fontWeight: 600,
               
               
               
            })}>Payment History</div>
            <div css={mq({
                display: ["none", "block","block","block"]
            })}>
               
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
  
 </tr></thead>

 {payments.map((payment) => (<tbody>
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
})}>{payment.name}</td>
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
})}>{payment.price}</td>
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
})}>{payment.price}</td>
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
})}>{payment.date}</td>
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
})}>{payment.due_date}</td>
   
 </tr></tbody>))}
           </table>

                 </div>
                 
                 
                 <div css={mq({
                backgroundColor: "#fff",
                borderRadius: 10,
                marginTop: 20,
                marginBottom: 50,
                border: "solid",
        borderWidth: 1,
        borderColor: "#EFF1F2",
        
        display: ["block", "none","none","none"]
        
            })}>
                
              <div css={mq({
                display: "flex",
                alignItems: "center",
                border: "solid",
                borderWidth: 1,
                borderColor: "transparent",
                borderBottomColor: "#EFF1F2",
                paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 10,
              paddingBottom: 10,
              })}>
              <div css={mq({
                flex: "20%",
                padding: 10
              })}>
                
              <div css={mq({
                fontSize: 16,
                fontWeight: 600
              })}>
              Service</div>
             
             </div>
             <div css={mq({
               flex: "20%"
              })}>
              
              <div css={mq({
               
               
               fontSize: 16,
               fontWeight: 600
              })}>Amount</div></div>
              <div css={mq({
               flex: "20%"
              })}>
              
              <div css={mq({
               fontSize: 16,
               fontWeight: 600
              })}>
              Period</div></div>
              <div css={mq({
               flex: "20%"
              })}>
              
              <div css={mq({
               fontSize: 16,
               fontWeight: 600
              })}>
              Date</div></div>
              <div css={mq({
               flex: "20%"
              })}>
              
              <div css={mq({
               fontSize: 16,
               fontWeight: 600
              })}>
              Due Date</div></div>
             
             
              </div>
           

              
    
              {payments.map((payment) => (<div css={mq({
                 
                 
              })}>
                <div css={mq({
                backgroundColor: "#fff",
                borderRadius: 10,
                border: "solid",
                borderWidth: 1,
                borderColor: "transparent",
                borderBottomColor: "#EFF1F2",
       
        display: ["block", "none","none","none"]
        
            })}>
              <div css={mq({
                display: "flex",
                alignItems: "center",
              paddingLeft: 10,
              paddingRight: 10
              })}>
              <div css={mq({
                flex: "20%",
                padding: 10
              })}>
                
              <div css={mq({
               fontSize: [16,18,18,18],
               color: "#777777"
              })}>
{payment.name}</div>
             
             </div>
             <div css={mq({
               flex: "20%"
              })}>
              
              <div css={mq({
               
               
               color: "#6D61DF",
        fontWeight: 600
})}>{payment.price}</div></div>
              <div css={mq({
               flex: "20%"
              })}>
              
              <div css={mq({
               fontSize: 16,
               marginLeft: 5,
             color: "#777777"
              })}>
              {payment.period}</div></div>
              <div css={mq({
               flex: "20%"
              })}>
              
              <div css={mq({
               fontSize: [16,18,18,18],
               color: "#777777"
              })}>
              {payment.date}</div></div>
              <div css={mq({
               flex: "20%"
              })}>
              
              <div css={mq({
               fontSize: [16,18,18,18],
               color: "#777777"
              })}>
              {payment.due_date}</div></div>
              </div>
            </div>

              </div>))} </div>
                 </div>
            
          </div></div>
         
      </Nav2>
    </div>
  );
};

export default PaymentInfo;
