import React from "react";
import { rows } from "./rows.js";
import "./style.scss";

const Resume = () => {
  return (
    <div className="Resume__" id="resume">
      <div className="Resume__header">
        <h2>Resume</h2>
        <p>A draft from my CV</p>
      </div>
      <div className="Resume__table">
        {/* titles */}
        <span className="Resume__table-title pad8-16">Year</span>
        <span className="Resume__table-title pad8">Title</span>
        <span className="Resume__table-title pad8">Where</span>

        {/* rows */}
        {rows.map((row, index) => (
          <React.Fragment key={index}>
            <span className={`Resume__table-info ${row.isWhite ? "white" : ""} pad8-16`}>{row.year}</span>
            <span className={`Resume__table-info ${row.isWhite ? "white" : ""} pad8`}>{row.title}</span>
            <span className={`Resume__table-info ${row.isWhite ? "white" : ""} pad8`}>{row.where}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Resume;