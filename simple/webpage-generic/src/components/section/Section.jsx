import React from "react";
import "./style.scss";

const Section = () => {
  const Info = () => {
    return (
      <div className="Section__content-container">
        <h1>Heading</h1>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>
      </div>
    );
  };

  const Ads = () => {
    return (
      <div className="Section__wrapper-ads">
        <div className="Section__wrapper-ads-small">AD</div>
        <div className="Section__wrapper-ads-large">AD</div>
      </div>
    );
  };

  const SectionContainer = () => {
    return (
      <div className="Section__container">
        <Info />
        <Ads />
      </div>
    );
  };

  return (
    <section className="Section__wrapper">
      <SectionContainer />
      <SectionContainer />
      <SectionContainer />
    </section>
  );
};

export default Section;
