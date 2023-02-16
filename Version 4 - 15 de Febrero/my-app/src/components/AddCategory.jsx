import React, { useState } from "react";

const AddCategory = ({onNewcategory}) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = (e) => {
    console.log(e);
    setInputValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim().length < 1) return;
    onNewcategory(inputValue.trim());
    setInputValue('');
  }

  return (
    <form onSubmit={(e)=>onSubmit(e)}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={(e) => onInputChange(e)}
      />
    </form>
  );
};

export default AddCategory;
