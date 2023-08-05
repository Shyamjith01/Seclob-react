/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./jobcard.scss";

const Jobcard = (props) => {
  return (
    <div className="homeService_items" style={{ position: "relative" }}>
      <img
        src={props.imgSrc}
        alt=""
        style={{ borderRadius: "20px", width: "15rem" }}
      />
      <div className="overlay"></div>
      <span className="service_name">{props.name}</span>
    </div>
  );
};

export default Jobcard;
