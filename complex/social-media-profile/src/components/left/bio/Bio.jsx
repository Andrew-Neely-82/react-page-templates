import React from "react";
import { avatar3 } from "../../../img/export";
import "./style.scss";

const Bio = () => {
  return (
    <div className="Bio_ round shadow">
      <div className="Bio_container">
        <h4>My Profile</h4>
        <p>
          <img src={avatar3} alt="avatar3" />
        </p>
        <hr />
        <p className="Bio_info"><i class="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i> Designer, UI</p>
        <p className="Bio_info"><i class="fa fa-home fa-fw w3-margin-right w3-text-theme"></i> London, UK</p>
        <p className="Bio_info"><i class="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i> April 1, 1988</p>
      </div>
    </div>
  );
};

export default Bio;
