import React from "react";
import "./style.scss";

const Footer = () => {
  return (
    <div className="Footer_">
      <button className="Footer_button inactive">Previous</button>
      <button className="Footer_button">Next »</button>
      <p className="Footer_info">
        Powered by{" "}
        <a className="Footer_info_link" href="https://www.w3schools.com/w3css/default.asp" target="_blank" rel="noreferrer">
          w3.css
        </a>
      </p>
    </div>
  );
};

export default Footer;
