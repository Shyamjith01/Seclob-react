/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const Storecard = (props) => {
  return (
    <div className="store_items">
      <img src={props.imgSrc} alt="" />
      <div className="pro-details">
        <span className="modal">{props.name}</span>
        <span
          className="off-price"
          style={{ color: "#F3A725", fontSize: "16px" }}
        >
          {props.price} <span className="price">{props.oldPrice}</span>
        </span>
      </div>
    </div>
  );
};

export default Storecard;
