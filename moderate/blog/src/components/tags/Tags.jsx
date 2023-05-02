import React from "react";
import "./style.scss";

const Tags = () => {
  return (
    <div className="Tags_ shadow">
      <div className="Tags_header">
        <h4 className="Tags_header_title">Tags</h4>
      </div>
      <div className="Tags_tags-container">
        <div class="Tags_tags-container_tag highlighted">Travel</div>
        <span class="Tags_tags-container_tag">New York</span>
        <span class="Tags_tags-container_tag">London</span>
        <span class="Tags_tags-container_tag">IKEA</span>
        <span class="Tags_tags-container_tag">NORWAY</span>
        <span class="Tags_tags-container_tag">DIY</span>
        <span class="Tags_tags-container_tag">Ideas</span>
        <span class="Tags_tags-container_tag">Baby</span>
        <span class="Tags_tags-container_tag">Family</span>
        <span class="Tags_tags-container_tag">News</span>
        <span class="Tags_tags-container_tag">Clothing</span>
        <span class="Tags_tags-container_tag">Shopping</span>
        <span class="Tags_tags-container_tag">Sports</span>
        <span class="Tags_tags-container_tag">Games</span>
      </div>
    </div>
  );
};

export default Tags;
