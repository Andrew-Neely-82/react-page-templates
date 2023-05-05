import React from "react";
import "./style.scss";

const Share = () => {
  return (
    <div className="Share_ round shadow">
      <div className="Share_container">
        <h6>Social Media template by w3.css</h6>
        <p contenteditable="true" class="w3-border w3-padding">
          Status: Feeling Blue
        </p>
        <button type="button" class="w3-button w3-theme">
          <i class="fa fa-pencil"></i> &nbsp;Post
        </button>
      </div>
    </div>
  );
};

export default Share;
