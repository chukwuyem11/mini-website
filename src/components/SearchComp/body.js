import React from "react";
import { css, jsx } from "@emotion/react";
import facepaint from "facepaint";
import Nav2 from "../nav2"
const breakpoints = [576, 768, 992, 1200];
const query = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));


const SearchBody = () => {
    const [domain, setDomain] = React.useState("")
    const domains = [
        {name: "theallureshop.com.ng",
    price: 18500,
    oldprice: 17500,},
    {name: "theallureshop.net",
    price: 18500,
    oldprice: 17500,},
    {name: "theallureshop.com",
    price: 18500,
    oldprice: 17500,},
    {name: "theallureshop.io",
    price: 18500,
    oldprice: 17500,},
    {name: "theallureshop.makata",
    price: 18500,
    oldprice: 17500,},
    {name: "theallureshop.biz",
    price: 18500,
    oldprice: 17500,},
    {name: "theallureshop.uk",
    price: 18500,
    oldprice: 17500,},
    ]
    return(
        
        <div>
<Nav2 />
            <div css={mq({
            display: "flex",
            justifyContent: "center",
            marginTop: 50,
            marginBottom: 20,
        })}>
        <input css={mq({
            width: "30vw",
            padding: 10,
            outline: "none",
            border: "solid",
            borderWidth: 1,
            borderColor: "#e2dff8",
            borderRightColor: "transparent",
               
                borderRadius: "5px 0px 0px 5px",
            ":focus" : {
                
                outline: "none",
                border: "solid",
            borderWidth: 1,
            borderColor: "#e2dff8",
            borderRightColor: "transparent",
                padding: 10,
            }
        })} type="box" placeholder="Businessname.com"></input> <div>
        <button css={mq({
            backgroundColor: "#6D61DF",
            color: "#fff",
            padding: 10,
            borderRadius: "0px 5px 5px 0px",
            outline: "none",
                border: "none",
                fontSize: 18,
        })}>search</button>
    </div>
   
        </div>
        <div css={mq({
            fontSize: 25,
            fontWeight: 600,
            textAlign: "center"
        })}><p>Search results for <span css={mq({
            color: "#6d61df"
        })}>theallureshop.com</span></p></div>
        <div css={mq({
            fontSize: 25,
            fontWeight: 600,
            textAlign: "center",
            color: "#aaaaaa"
        })}><p>Choose a domain and click continue to create your mini-website</p></div>
        <div css={mq({
             display: "flex",
             justifyContent: "center"
        })}>
<div css={mq({
                display: "flex",
                flexDirection: "column",
                width: "80%",
                border: "solid",
                marginTop: 50,
            borderWidth: 1,
           
            borderColor: "#e2dff8",
            borderRadius: 10,
            borderTopWidth: 5,
            borderTopColor:"#6d61df"
            })}>
                
<div css={mq({
         
            border: "solid",
                    borderWidth: 1,
                    borderColor: "transparent",
                    borderBottomColor: "#e2dff8",
                    boxShadow: "0px 0px 32px -10px rgba(0,0,0,0.28)"
                    
       
         
    })}>
        <div css={mq({
            fontSize: 18,
            backgroundColor: "#6d61df",
            fontFamily: "Tisa Sans Pro",
            width: 300,
 color: "#fff",
 paddingLeft: 30,
 paddingRight: 30,
 paddingTop: 15,
 paddingBottom: 15,
 borderRadius: "10px 0px 0px 0px",
 marginTop: -5,
 marginLeft: -2,
 fontWeight: "bold",
 outline: "none",
     border: "none",
        })}>
            <div css={mq({
                display: "flex",
                justifyContent: "center"
            })}>
            Domain Available!</div></div>
        <div css={mq({
            paddingLeft: 30,
            paddingRight: 30,
            paddingTop: 30,
            paddingBottom: 30,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        })}>
        <div css={mq({
        display: "flex",
        
    })}><div css={mq({
        color: "#49465e ",
        fontSize: 22,
        fontWeight: 600,
    })}>theallureshop.io</div> <div css={mq({
        color: "#d5d5d5 ",
        fontSize: 22,
        fontWeight: 600,
        marginLeft: 20
    })}>+ mini website</div></div><div css={mq({
        display: "flex",
        alignItems: "center",
    })}><div css={mq({
        textDecoration: "line-through",
        color: "#d5d5d5 ",
        fontSize: 22,
        fontWeight: 600,
        marginRight: 20
    })}>18900</div> <div css={mq({
        color: "#49465e ",
        fontSize: 22,
        fontWeight: 600,
        marginRight: 50
    })}>17900/year</div> <div>
    <button css={mq({
        fontSize: 18,
        backgroundColor: "#3BB75E",
        fontFamily: "Tisa Sans Pro",
color: "#fff",
paddingLeft: 30,
paddingRight: 30,
paddingTop: 10,
paddingBottom: 10,
borderRadius: 3,
fontWeight: "bold",
outline: "none",
 border: "none",
 
    })}>Continue</button>
</div></div></div></div>
</div></div>
        <div css={mq({
            fontSize: 25,
            fontWeight: 600,
            textAlign: "center",
            color: "#49465e",
            marginTop: 50,
        })}><p>Other domain options</p></div>

        <div css={mq({
            display: "flex",
            justifyContent: "center"
        })}>
            <div css={mq({
                display: "flex",
                flexDirection: "column",
                width: "80%",
                border: "solid",
            borderWidth: 1,
            borderColor: "#e2dff8",
            borderRadius: 10
            })}>
    {domains.map((domain) => (<div css={mq({
         paddingLeft: 30,
         paddingRight: 30,
         paddingTop: 20,
         paddingBottom: 20,
         display: "flex",
         justifyContent: "space-between",
         alignItems: "center",
            border: "solid",
                    borderWidth: 1,
                    borderColor: "transparent",
                    borderBottomColor: "#e2dff8",
                    
       
         
    })}><div css={mq({
        display: "flex",
        
    })}><div css={mq({
        color: "#49465e ",
        fontSize: 22,
        fontWeight: 600,
    })}>{domain.name}</div> <div css={mq({
        color: "#d5d5d5 ",
        fontSize: 22,
        fontWeight: 600,
        marginLeft: 20
    })}>+ mini website</div></div><div css={mq({
        display: "flex",
        alignItems: "center",
    })}><div css={mq({
        textDecoration: "line-through",
        color: "#d5d5d5 ",
        fontSize: 22,
        fontWeight: 600,
        marginRight: 20
    })}>{domain.oldprice}</div> <div css={mq({
        color: "#49465e ",
        fontSize: 22,
        fontWeight: 600,
        marginRight: 50
    })}>{domain.price}/year</div> <div>
    <button css={mq({
        fontSize: 18,
        backgroundColor: "#49465e",
        fontFamily: "Tisa Sans Pro",
color: "#fff",
paddingLeft: 30,
paddingRight: 30,
paddingTop: 10,
paddingBottom: 10,
borderRadius: 3,
fontWeight: "bold",
outline: "none",
 border: "none",
 
    })}>Continue</button>
</div></div></div>) )}</div>
        </div>
        </div>
    )
}

export default SearchBody