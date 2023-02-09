import React from "react";
import { heroes } from "./heroes";
import ViewInfo from "./ViewInfo";

const HelloWorld = () => {
  return(
    <div>
      {
        heroes.map((hero, index) => (
          hero.id && <ViewInfo id={index} heroes={hero}/>
        ))
      }
    </div>
  )
};

export default HelloWorld;
