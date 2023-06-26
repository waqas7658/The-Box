import React from "react";
import "../Pcards/Pcards.css";
// import pcard1 from "../../Images/pcard1.png";
const Pcards = (pcard) => {
  return (
    <>
      <div className="pcard mx-2 my-5">
        <img src={pcard.img} alt="" />
        <div className="card_dis">
          <p className="card_heading">{pcard.heading}</p>
          <p className="address">{pcard.address}</p>
        </div>
      </div>
    </>
  );
};

export default Pcards;
