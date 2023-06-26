import React from "react";
import "../Aboutme/AboutMe.css";
import about_img from "../Images/aboutme.png";
const AboutMe = () => {
  return (
    <>
      <div className="container-fluid " id="about">
        <div className=" about_img">
          <img className=" img-fluid" src={about_img} alt="" />
        </div>
        <div className="about_me ">
          <h4 className="about_h4">About us</h4>
          <div>
            <p className="about_p">
              For more than 30 years we have been delivering world-class
              construction and we’ve built many lasting relationships along the
              way.
            </p>
            <p className="about_p1">
              {" "}
              We’ve matured into an industry leader and trusted resource for
              those seeking quality, innovation and reliability when building in
              the U.S.
            </p>
          </div>
          <div>
            <button className="about_btn">More on our History</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
