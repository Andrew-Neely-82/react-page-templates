import React from "react";
import "./style.scss";

const Form = () => {
  return (
    <form className="Form__">
      <label htmlFor="">Name</label>
      <input type="text" />
      <label htmlFor="">Email</label>
      <input type="text" />
      <label htmlFor="">Message</label>
      <input type="text" />
      <input className="submit" type="submit" value="Send" />
    </form>
  );
};

export default Form;
