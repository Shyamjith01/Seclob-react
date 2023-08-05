// eslint-disable-next-line no-unused-vars
import React from "react";
import BannerImg1 from "../../assets/banner1.png";
import Banner2 from "../../assets/banner2.png";
import "./banner.scss";
import { Container } from "@mui/material";
import reward1 from "../../assets/rewards 1.png";
import mobileRecharge from "../../assets/mobile_recharge.png";

const Banner = () => {
  return (
    <Container
      maxWidth="xl"
      style={{
        background: "#ffff",
        color: "black",
        padding: "0px 5rem",
        marginBottom: "2rem",
      }}
    >
      <div className="banner">
        <div className="left">
          <img src={BannerImg1} alt="" />
          <img src={Banner2} alt="" />
        </div>
        <div className="right">
          <div className="top">
            <div className="left">
              <div className="item" style={{ display: "flex" }}>
                <img
                  src={mobileRecharge}
                  alt=""
                  style={{ marginRight: "15px", marginBottom: "auto" }}
                />
                <div style={{textAlign:'start',color:'#ffff',display:'flex',justifyContent:'center',flexDirection:'column'}}>
                  <span className="header" style={{color:'#ffff'}}>Mobile Recharge</span>
                  <p className="discription" style={{color:'#ffff',margin:'0px'}}>
                  Recharge your phone with 2% off
                  </p>
                </div>
              </div>
            </div>
            <div className="right">
              <span className="off-price">2%</span>
              <span className="off-text">off</span>
            </div>
          </div>
          <div className="bottom">
            <div className="icon">
              <img src={reward1} alt="" />
            </div>
            <div className="reward-text">
              <h3>Rewards</h3>
              <span>invite friends get rewards</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
