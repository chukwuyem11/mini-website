import Nav2 from "./nav2"
import { css, jsx } from "@emotion/react";
import facepaint from "facepaint";

const breakpoints = [576, 768, 992, 1200];
const query = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
const Upgrade = () => {
const services = [
    {
        name: "Email Accounts",
        number: 5,
        Amount: 8900,
        period: "One-time fee",
        button: "UPGRADE",
        icon: "carbonupgrade"
    },
    {
        name: "Email Accounts",
        number: 100,
        Amount: 8900,
        period: "One-time fee",
        button: "UPGRADE",
        icon: "carbonupgrade"
    },
    {
        name: "Domain Links",
        number: 100,
        Amount: 8900,
        period: "One-time fee",
        button: "UPGRADE",
        icon: "carbonupgrade"
    },
    {
        name: "Email Storage",
        number: "2GB",
        Amount: 8900,
        period: "Yearly",
        button: "UPGRADE",
        icon: "carbonupgrade"
    },
    {
       
        name: "Email Storage",
        number: "10GB",
        Amount: 8900,
        period: "Yearly",
        button: "UPGRADE",
        icon: "carbonupgrade"
    },
    {
        name: "Email Storage",
        number: "50GB",
        Amount: 8900,
        period: "Yearly",
        button: "UPGRADE",
        icon: "carbonupgrade"
    },
    {
        name: "Full Ecommerce Website",
        number: 5,
        Amount: 8900,
        period: "Dynamic",
        button: "LEARN MORE",
        icon: "options"
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
              width: ["100%", "75%","75%","75%"],

              paddingRight: [0, 50, 50, 50],
              paddingTop: 20,
              paddingBottom: 20,
              paddingRight: [20, 0, 0, 0],
              paddingLeft: [20, 0, 0, 0],
            })}
          >


           
            
            <div css={mq({
               
                marginTop: 40
            })}>
                 <div css={mq({
                fontSize: [22,25,25,25],
                fontWeight: 600,
               
               
               
            })}>Manage Payment Methods</div>
              <div css={mq({
                    display: "flex",
                    width: ["100%","65%","65%","65%"],
                    alignItems: "center",
                    marginTop: 20
                })}>
            <div><img
            css={mq({
              
             
            })}
            src={"/svg/informationbutton.svg"}
          /></div>
          <div css={mq({
                    marginLeft: 20,
                    fontSize: [15, 18, 18, 18],
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
                    marginTop: 20,
                    paddingRight: 20,
                    display: "flex",
                    display: ["none", "block", "block", "block"]
                    
                  
                })
            }>

                <div>
               
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

  {services.map((service) => (<tbody>
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
            fontSize: [16,18,18,18],
            color: "#777777"
    })}>{service.name}<span css={mq({
        color: "#6D61DF",
        fontWeight: 600
    })}>({service.number})</span></td>
    <td css={mq({
        paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
            fontSize: [16,18,18,18],
            color: "#3BB75E",
            fontWeight: 700
})}>₦{service.Amount}</td>
    <td css={mq({
        paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
                fontSize: [16,18,18,18],
            color: "#777777",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
})}>{service.period}</td>
    <td css={mq({
        paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 30,
                paddingRight: 30,
                border: "solid",
                fontSize: [16,18,18,18],
            color: "#777777",
            borderWidth: 1,
            borderColor: "transparent",
            borderBottomColor: "#EFF1F2",
    })}> <button css={mq({
        fontSize: 18,
        border: "none",
        display: ["none","block","block","block"],
        backgroundColor: "#6D61DF",
        fontFamily: "Tisa Sans Pro",
color: "#fff",
paddingLeft: 30,
paddingRight: 30,
paddingTop: 10,
paddingBottom: 10,
borderRadius: 5,
fontWeight: "bold",


 
 
})}>{service.button}</button>

<img
              css={mq({
                display: ["block","none","none","none"],
                marginLeft: 50,
              })}
              src={`/svg/${service.icon}.svg`}
            />
</td>
    
    
  </tr></tbody>))}
            </table>

                  </div>
               
            </div>

<div css={mq({
    marginTop: 50
})}>
    <div css={mq({
                 
                 marginBottom: 20
              })}>
                <div css={mq({
                backgroundColor: "#fff",
                borderRadius: 10,
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
                flex: "40%",
                padding: 10
              })}>
                
              <div css={mq({
                fontSize: 16,
                fontWeight: 600
              })}>
              Service</div>
             
             </div>
             <div css={mq({
               flex: "30%"
              })}>
              
              <div css={mq({
               
               
               fontSize: 16,
               fontWeight: 600
              })}>Amount</div></div>
              <div css={mq({
               flex: "30%"
              })}>
              
              <div css={mq({
               fontSize: 16,
               fontWeight: 600
              })}>
              Period</div></div>
             
              <div css={mq({
                flex: "10%",
                display: "flex",
                justifyContent: "center"
              })}>
                  
                
               </div>
              </div>
           

              
    
              {services.map((service) => (<div css={mq({
                 
                 
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
                flex: "40%",
                padding: 10,
                
              })}>
                
              <div css={mq({
               
                
            fontSize: [16,18,18,18],
            color: "#777777"
              })}>
              {service.name}</div>
              <div css={mq({
        color: "#6D61DF",
        fontWeight: 600
    })}>({service.number})</div>
             </div>
             <div css={mq({
               flex: "30%"
              })}>
              
              <div css={mq({
               
               fontSize: [16,18,18,18],
               color: "#3BB75E",
               fontWeight: 700
              })}>₦{service.Amount}</div></div>
              <div css={mq({
               flex: "30%"
              })}>
              
              <div css={mq({
                fontSize: 16,
                marginLeft: 5,
              color: "#777777"
              })}>{service.period}</div></div>
             
              <div css={mq({
                flex: "10%",
                display: "flex",
                justifyContent: "center"
              })}>
                  
                
                <img
              css={mq({
                
                marginLeft: 50,
              })}
              src={`/svg/${service.icon}.svg`}
            /></div>
              </div>
            </div>

              </div>))} </div></div>
              
            </div>


            
          </div></div>
         
      </Nav2>
    </div>
  );
};

export default Upgrade;
