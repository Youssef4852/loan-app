import React from "react";
import MyInput from './MyInput'

function MyComponents({label, evnetInput, handleChange, type }) {
  return (
    <>
      <MyInput label={label} evnetInput={evnetInput} handleChange={handleChange} type={type}/>
    </>
  );
}

export default MyComponents;