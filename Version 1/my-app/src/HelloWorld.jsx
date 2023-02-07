import React, { useState } from "react";

const HelloWorld = ({ title, fecha }) => {
  const [value, setValue] = useState();
  const [validate, setValidate] = useState(false);
  console.log("HellorWorld.jsx:4 - value:", value);

  const validateValue = () => {
    setValue("hola grupo, soy un estado");
    setValidate(!validate);
  };

  return (
    <div className="formApre">
      <h1>{title}</h1>
      <span className="fechaDate">{fecha}</span>
      <form>
        <div onClick={validateValue}>
          <label>
            {validate && value}
            <input type="text" name="nombre" />
          </label>
        </div>
        <div>
          <label>
            Name: Cedula
            <input type="number" name="cedula" />
          </label>
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};

export default HelloWorld;
