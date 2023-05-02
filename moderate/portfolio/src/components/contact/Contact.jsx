import React from "react";
import "./style.scss";

const Contact = () => {
  return (
    <div className="Contact__" id="contact">
      <div className="Contact__container">
        <h1 className="Contact__container_heading">Contact</h1>
        <p className="Contact__container_p">GET IN TOUCH</p>
        <form action="#">
          <div className="Contact__container-input">
            <label htmlFor="name">Name</label>
            <input class="input" type="text" name="" id="name" />
          </div>
          <div className="Contact__container-input">
            <label>Email</label>
            <input class="input" type="text" required="" name="Email"></input>
          </div>
          <div className="Contact__container-input">
            <label>Message</label>
            <input class="input" type="text" required="" name="Message"></input>
          </div>
          <div className="Contact__button-container">
            <input className="button" type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
