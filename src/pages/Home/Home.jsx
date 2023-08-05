// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../../components/header/Header";
import "./home.scss";
import search_icon from "../../assets/search_icon.png";
import { Button, Container } from "@mui/material";
import Services from "../../components/services/Services";
import Banner from "../../components/Banner_section/Banner";
import carAccess from "../../assets/carpng.png";
import personImg from "../../assets/person.png";
import mobileImg from "../../assets/mobilePhoto.png";
import foodImg from "../../assets/food.png";
import scheduleImg from "../../assets/scheduled 1.png";
import About from "../../components/About-us/About";
import Footer from "../../components/Footer/Footer";
import Jobcard from "../../components/JobCard/Jobcard";
import Storecard from "../../components/StoreCard/Storecard";

const Home = () => {
  const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <Header />
      <Container
        maxWidth="xl"
        style={{ color: "black", padding: "0 50px" }}
      >
        <div className="home">
          <h1>
            What are you <span style={{ color: "#2CB070" }}>looking</span>{" "}
            for...?
          </h1>
          <br />
          <div className="search_option">
            <div
              className="inner_box"
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0 9px",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex" }}>
                <div
                  className="search_icon"
                  style={{
                    width: "5rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={search_icon}
                    alt=""
                    style={{ width: "2.2rem", objectFit: "contain" }}
                  />
                </div>
                {/* <div className='search_text' style={{fontSize:'15px',display:'flex',alignItems:'center'}}>
                  Search anything....
                </div> */}
                <input
                  type="text"
                  style={{
                    fontSize: "15px",
                    display: "flex",
                    alignItems: "center",
                    outline: "none",
                    border: "none",
                    background: "transparent",
                  }}
                  placeholder="Search anything...."
                />
              </div>
              <Button
                color="inherit"
                style={{
                  background: "#2CB070",
                  color: "white",
                  height: "2.9rem",
                  borderRadius: "20px",
                  display: "flex",
                  padding: "6px 20px",
                }}
              >
                Explore
              </Button>
            </div>
          </div>
          <Services />
          <Banner />
        </div>
      </Container>
      <div className="services_div">
        <Container maxWidth="xl" style={{ padding: "0 8rem",paddingTop:'2rem'}}>
          <span>Vehicle Services</span>
          <div className="service_items">
            {numArray.map((e, i) => {
              return (
                <div className="item" key={i}>
                  <img src={carAccess} alt="" />
                  <span>Car Accessories</span>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
      <div className="services_div" style={{marginTop:'1rem'}}>
        <Container maxWidth="xl" style={{ padding: "0 8rem",paddingTop:'2rem'}}>
          <span>Hom Services</span>
          <div className="service_items" style={{justifyContent:'space-between',marginTop:'2rem'}}>
          <Jobcard imgSrc={personImg} name={'Painter'} />
          <Jobcard imgSrc={personImg} name={'Painter'} />
          <Jobcard imgSrc={personImg} name={'Painter'} />
          <Jobcard imgSrc={personImg} name={'Painter'} />
          </div>
        </Container>
      </div>
      <div className="services_div" style={{marginTop:'1rem'}}>
        <Container maxWidth="xl" style={{ padding: "0 8rem",paddingTop:'2rem'}}>
          <span>Store</span>
          <div className="service_items" style={{justifyContent:'space-between',marginTop:'2rem'}}>
            <Storecard imgSrc={mobileImg} oldPrice={'25000/-'} price={'23000/-'} name={'Y15s'} />
            <Storecard imgSrc={mobileImg} oldPrice={'25000/-'} price={'23000/-'} name={'Y15s'} />
            <Storecard imgSrc={mobileImg} oldPrice={'25000/-'} price={'23000/-'} name={'Y15s'} />
            <Storecard imgSrc={mobileImg} oldPrice={'25000/-'} price={'23000/-'} name={'Y15s'} />
          </div>
        </Container>
      </div>
      <div className="services_div" style={{marginTop:'1rem'}}>
        <Container maxWidth="xl" style={{ padding: "0 8rem",paddingTop:'2rem'}}>
          <span>Eats</span>
          <div className="service_items" style={{justifyContent:'space-between',marginTop:'2rem'}}>
            <Storecard imgSrc={foodImg} oldPrice={'150/-'} price={'100/-'} name={'Biriyani'} />
            <Storecard imgSrc={foodImg} oldPrice={'150/-'} price={'100/-'} name={'Biriyani'} />
            <Storecard imgSrc={foodImg} oldPrice={'150/-'} price={'100/-'} name={'Biriyani'} />
            <Storecard imgSrc={foodImg} oldPrice={'150/-'} price={'100/-'} name={'Biriyani'} />
          </div>
        </Container>
      </div>
      <div className="services_div" style={{marginTop:'1rem'}}>
        <Container maxWidth="xl" style={{ padding: "0 8rem",paddingTop:'2rem'}}>
          <span>Job</span>
          <div className="service_items" style={{justifyContent:'space-between',marginTop:'2rem'}}>
          <Jobcard imgSrc={personImg} name={'painter'} />
          <Jobcard imgSrc={personImg} name={'painter'} />
          <Jobcard imgSrc={personImg} name={'painter'} />
          <Jobcard imgSrc={personImg} name={'painter'} />
          </div>
        </Container>
      </div>
      <div className="feature">
        <Container maxWidth="xl" style={{ padding: "0 8rem",paddingTop:'2rem'}}>
          <span>Why seclob</span>
            <div className="service_items" style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:'2rem'}}>
              <div className="item" >
                <div style={{background:'#ffff',padding:'15px',borderRadius:'50px',width:'3rem',height:'3rem'}}><img src={scheduleImg} alt="" /></div>
                <span>On Demand/ <br />Scheduled</span>
              </div>
              <div className="item">
                <div style={{background:'#ffff',padding:'15px',borderRadius:'50px',width:'3rem',height:'3rem'}}><img src={scheduleImg} alt="" /></div>
                <span>Verified Partners </span>
              </div>
              <div className="item">
                <div style={{background:'#ffff',padding:'15px',borderRadius:'50px',width:'3rem',height:'3rem'}}><img src={scheduleImg} alt="" /></div>
                <span>Service Warranty</span>
              </div>
              <div className="item">
                <div style={{background:'#ffff',padding:'15px',borderRadius:'50px',width:'3rem',height:'3rem'}}><img src={scheduleImg} alt="" /></div>
                <span>Transparent Pricing</span>
              </div>
              <div className="item">
                <div style={{background:'#ffff',padding:'15px',borderRadius:'50px',width:'3rem',height:'3rem'}}><img src={scheduleImg} alt="" /></div>
                <span>Online Payments</span>
              </div>
              <div className="item">
                <div style={{background:'#ffff',padding:'15px',borderRadius:'50px',width:'3rem',height:'3rem'}}><img src={scheduleImg} alt="" /></div>
                <span>24 x 7 <br /> Support</span>
              </div>
            </div> 
        </Container>
      </div>
      <About />
      <Footer />
    </div>
  );
};

export default Home;
