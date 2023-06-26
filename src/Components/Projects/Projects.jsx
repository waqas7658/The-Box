import React from "react";
import "../Projects/Projects.css";
import Pcards from "./Pcards/Pcards";
import Pdata from "./Pcards/Pcard";

const Projects = () => {
  return (
    <>
      <div className="project2">
        <div className="container-fluid ">
          <div className="row justify-content-center">
            <div className="col-md-2 col-sm-2">
              <h4>Projects</h4>
              <div className="list">
                <ul>
                  <li className="all fw-bolder">All</li>
                  <li className="items">Commercial</li>
                  <li className="items">Residential</li>
                  <li className="items">Other</li>
                </ul>
              </div>
            </div>
            <div className="col-md-10 col-sm-10">
              <div className="container ">
                <div className="row my-5 mx-5 ">
                  {Pdata.map((pcard) => (
                    <div className="col-md-6">
                      <Pcards {...pcard} />
                    </div>
                  ))}

                  <div className="row justify-content-between">
                    <button className="p_back mx-4"> Back</button>
                    <button className="p_next "> Next</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
