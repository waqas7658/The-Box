import React from "react";
import "../Reputation/Reputation.css";
import Cards from "./Cards/Cards";
import data from "./Cards/Data";

const Reputation = () => {
  return (
    <>
      <div className="reputation">
        <h4 className="reputation_heading ">Our Reputation</h4>
        <div className="container">
          <div className="row">
            {data.map((card) => (
              <div className="col-md-4">
                <Cards {...card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Reputation;
