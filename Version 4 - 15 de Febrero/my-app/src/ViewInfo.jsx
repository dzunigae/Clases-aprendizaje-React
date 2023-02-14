import React from "react";
import "./styles.css";

const ViewInfo = ({ heroes }) => {
  console.log(heroes);
  return (
    <div>
        <div className="infoHeroes">
            {heroes.name}
        </div>
    </div>
  )
};

export default ViewInfo;
