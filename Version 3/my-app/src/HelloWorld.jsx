import React from "react";
import { heroes } from "./heroes";
import ViewInfo from "./ViewInfo";
import { useState } from "react";

const HelloWorld = () => {
  const ApiKey = "PXXFcw5HPuxFF3fDjQ4fE81xlEcG0ESa";
  const peticion = fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${ApiKey}`
  );
  peticion
    .then((res) => {
      let data;
      res.json().then((data) => {
        console.log(data);
      });
      console.log(data);
    })
    .catch(console.warn);
};

export default HelloWorld;
