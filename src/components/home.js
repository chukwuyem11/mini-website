import React from "react";
import { css, jsx } from "@emotion/react";
import facepaint from "facepaint";
import Hero from "./HomeComp/hero";
import Body from "./HomeComp/body";


const breakpoints = [576, 768, 992, 1200];
const query = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

const HomePage = () =>{
    return(
        <div>
            <Hero />
            <Body />
            
        </div>
    )
}
export default HomePage