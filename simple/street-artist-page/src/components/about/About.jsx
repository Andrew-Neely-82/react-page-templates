import React from "react";
import boy from "../../images/boy.jpg";
import "./style.scss";

const About = () => {
  return (
    <div className="About__" id="about">
      <h1>About</h1>
      <img src={boy} alt="" />
      <p>Just me, myself and I, exploring the universe of unknownment. I have a heart of love and a interest in lorem ipsum and mauris neque quam blog. I want to share my world with you. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
      <span>Do not hesitate to contact me!</span>
    </div>
  );
};

export default About;
