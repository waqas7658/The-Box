import React from "react";
import "../Services/Services.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonDigging,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <>
      <div id="services">
        <div className=" text-center">
          <h4 className="service_h4 py-5">Services</h4>
          <div className="container mx-auto my-5">
            <div className="row ms-auto ps-5">
              <div className="col-md-4">
                <div className="servive_card text-center">
                  <FontAwesomeIcon icon={faPersonDigging} size="xl" />

                  <hr className=" w-25" />
                  <p className="service_p">Construction</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="servive_card text-center " id="service_blue">
                  <FontAwesomeIcon icon={faLightbulb} size="xl" />

                  <hr className=" w-25" />
                  <p className="service_p  text-light">Renovation</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="servive_card text-center">
                  <FontAwesomeIcon icon={faPersonDigging} size="xl" />

                  <hr className=" w-25" />
                  <p className="service_p">Consultation</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto my-5  ">
            <div className="row ms-auto ps-5">
              <div className="col-md-4">
                <div className="servive_card text-center" id="service_blue">
                  <FontAwesomeIcon icon={faPersonDigging} size="xl" />

                  <hr className=" w-25" />
                  <p className="service_p text-light">Repair Service</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="servive_card text-center ">
                  <FontAwesomeIcon icon={faLightbulb} size="xl" />

                  <hr className=" w-25" />
                  <p className="service_p  ">Architect</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="servive_card text-center" id="service_blue">
                  <FontAwesomeIcon icon={faPersonDigging} size="xl" />

                  <hr className=" w-25" />
                  <p className="service_p text-light">Electric</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
