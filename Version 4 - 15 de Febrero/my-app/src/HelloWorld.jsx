import { useState } from "react";
import AddCategory from "./components/AddCategory";

const HelloWorld = () => {
  const [categorias, setCategorias] = useState(['One Punch Man', 'Dragon Ball']);
  const agregarCategoria = (newCategory) => {
    setCategorias([...categorias,newCategory]);
  }
  return (
    <div>
      <AddCategory onNewCategory={(e)=>agregarCategoria(e)} />
      <ol>
        {
          categorias.map((category) => {
            return <li key={category}>{category}</li>
          })
        }
      </ol>
    </div>
  );
};

export default HelloWorld;
