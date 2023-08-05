// eslint-disable-next-line no-unused-vars
import React from "react";
import "./serviceCard.scss";
import shopOnline from "../../assets/mobile_service.svg";

const ServiceCard = () => {
  return (
    <div className="item" style={{ display: "flex" }}>
      <img
        src={shopOnline}
        alt=""
        style={{ marginRight: "15px", marginBottom: "auto" }}
      />
      <div>
        <span className="header">Shop Online</span>
        <p className="discription">
          This online shopping feature brings forth a plethora of gadgets like
          phones, refrigerators, washing machines, cameras, etc. for you to
          choose from and make a smart buy.
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
