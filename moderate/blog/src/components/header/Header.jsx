import React from "react";
import "./style.scss";

const Header = () => {
  return (
    <div className="Header_">
      <h1 className="Header_title">MY BLOG</h1>
      <p className="Header_description">
        Welcome to the blog of&nbsp;<span className="Header_description_highlight">unknown</span>
      </p>
    </div>
  );
};

export default Header;
