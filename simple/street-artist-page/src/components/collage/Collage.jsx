import React from "react";
import img from "./img.js";
import "./style.scss";

const Collage = () => {
  return (
    <div className="Collage__">
      <div className="Collage__container">
        <img src={img.streetart} alt={`streetart`} title={`streetart`} />
        <img src={img.streetart2} alt={`streetart 2`} title={`streetart 2`} />
        <img src={img.streetart5} alt={`streetart 5`} title={`streetart 5`} />
      </div>

      <div className="Collage__container">
        <img src={img.streetart3} alt={`streetart 3`} title={`streetart 3`} />
        <img src={img.streetart4} alt={`streetart 4`} title={`streetart 4`} />
      </div>
    </div>
  );
};

export default Collage;
