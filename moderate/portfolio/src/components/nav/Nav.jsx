import React from "react";
import "./style.scss";

const Nav = () => {
  return (
    <div className="Nav__">
      <div className="Nav__title">
        <h1>My Logo</h1>
      </div>
      <nav className="Nav__nav">
        <ul>
          <li className="Nav__nav-group_nav-link cyan">
            <a href="#home">Home</a>
          </li>
          <li className="Nav__nav-group_nav-link green">
            <a href="#myWork">My Work</a>
          </li>
          <li className="Nav__nav-group_nav-link gray">
            <a href="#resume">Resume</a>
          </li>
          <li className="Nav__nav-group_nav-link brown">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
