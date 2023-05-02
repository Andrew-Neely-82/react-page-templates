import { coffee, sound, workbench } from "../../img/export.js";
import React from "react";
import "./style.sass";

const Work = () => {
  return (
    <div className="Work__" id="myWork">
      <div className="Work__heading">
        <h2>My Work</h2>
        <p>Some of my latest projects.</p>
      </div>
      <div className="Work__images">
        <img src={coffee} alt="coffee" />
        <img src={workbench} alt="worktable" />
        <img src={workbench} alt="worktable" />
        <img src={coffee} alt="coffee" />
        <img src={sound} alt="speakers" />
        <img src={workbench} alt="worktable" />
      </div>
      <div className="Work__footer">
        <p>Just call me awesome.</p>
      </div>
    </div>
  );
};

export default Work;
