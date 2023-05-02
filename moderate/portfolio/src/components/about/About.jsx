import { avatar } from "../../img/export.js";
import React from "react";
import "./style.scss";

const About = () => {
  return (
    <div className="About__">
      <div className="About__header">
        <h1>About Me</h1>
      </div>
      <div className="About__image">
        <img src={avatar} alt="Person" />
      </div>
      <div className="About__info">
        <p>Lorem ipusm sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
        <p>Lorem ipusm sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
      </div>
    </div>
  );
};

export default About;
