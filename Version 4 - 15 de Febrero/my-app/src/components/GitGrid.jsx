import { useEffect, useState } from "react";

export const GitGrid = ({ category }) => {
  const [valueImg, setValueImg] = useState("");

  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Ttl4VAZ6oqqGkgvX7Kh1zXR2QOibn6ZA&q=${category}&limit=20`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));

    setValueImg(gifs);
    return gifs;
  };

  useEffect(() => {
    getGifs();
  }, []);

  return (
    <div>
      <center>
        <center><h5>{category}</h5></center>
        <img src={valueImg[0]?.url} className="tarea" alt="imagen default"/>
      </center>
    </div>
  );
};
