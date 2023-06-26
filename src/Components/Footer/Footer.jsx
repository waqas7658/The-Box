import React from "react";
import "../Footer/Footer.css";
import logo from "../Images/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container my-5 mx-5">
          <div className="row">
            <div className="col-6 my-5">
              <div className=" d-flex mx-3 my-3">
                <h3 className="footer_h5 mx-2">ADDRESS:</h3>
                <p className="footer_p">
                  6391 Elgin St. Celina, Delaware 10299
                </p>
              </div>
              <div className=" d-flex mx-3 my-3">
                <h3 className="footer_h5 mx-2 ">PHONE:</h3>
                <p className="footer_p">03470155049</p>
              </div>
              <div className=" d-flex mx-3 my-3">
                <h3 className="footer_h5 mx-2 ">EMAIL:</h3>
                <p className="footer_p">wa266867@gmail.com</p>
              </div>

              <img src={logo} alt="logo" className="mx-4" />
              <h3 className="footer_h3">The Box</h3>
            </div>
            <div className="col-6">
              <h3 className="newletter"> NEWSLETTER:</h3>
              <div className="subscribe d-flex">
                <input
                  type="email"
                  className="fotter_email"
                  placeholder="Your Email Here"
                />
                <button className="footer_btn">Subscribe</button>
              </div>
              <div className="social">
                <h3 className=" fw-bolder mx-2">SOCIAL:</h3>
                <div className=" d-flex ">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className=" social_icon mx-2"
                  />
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="social_icon mx-2 "
                  />
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="social_icon mx-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copywrite">
          <p className=" text-light">
            TheBox Company © 2022. All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
