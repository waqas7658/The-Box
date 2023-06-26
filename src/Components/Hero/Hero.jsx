import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="heading">
          <h1 className="hero_heading">Building things is our mission.</h1>
        </div>
        <div className="projects">
          <h5>Feature Projects </h5>
          <p>The National University of Architecture</p>
          <div className="button1">
            <button className="btn_back"> Back</button>
            <button className="btn_next"> Next </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
