import React from "react";
import { heroes } from "./heroes";
import ViewInfo from "./ViewInfo";
import { useState } from "react";

const HelloWorld = () => {
  const [valueImg, setValueImg] = useState();
  
  const getImagenes = async () => {
    try {
      const ApiKey = "PXXFcw5HPuxFF3fDjQ4fE81xlEcG0ESa";
      const peticion = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${ApiKey}`
      );
      const { data } = await peticion.json();
      const { url } = data.images.original;
      const img = document.createElement('img');
      img.src = url;
      document.body.append(img);
    } catch (error) {
      console.log(error)
    }
  };

  getImagenes();

};

export default HelloWorld;
