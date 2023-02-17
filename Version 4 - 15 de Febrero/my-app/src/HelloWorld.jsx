import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GitGrid } from "./components/GitGrid";

const HelloWord = () => {
  const [categorias, setCategorias] = useState(["One Punch", "Dragon Ball"]);

  console.log("🚀 ~ file: HelloWord.jsx:6 ~ HelloWord ~ categorias", categorias);
  const agregarCategorias = (newCategory) => {
    setCategorias([...categorias, newCategory]);
  };
  return (
    <div>
      <AddCategory onNewCategory={(e)=>agregarCategorias(e)}  />

      <ol>
        {categorias.map((category) => {
          return <GitGrid key={category} category={category}/>;
        })}
      </ol>
    </div>
  );
};

export default HelloWord;
