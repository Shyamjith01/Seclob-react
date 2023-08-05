// eslint-disable-next-line no-unused-vars
import React from "react";
import "./services.scss";
import services from "../../assets/service.png";
import enquiry from "../../assets/enquiry.png";
import auction from "../../assets/auction.png";
import job from "../../assets/job.png";
import vehicleService from "../../assets/vehicleService.png";
import news from "../../assets/news.png";
import store from "../../assets/store.png";
import eats from "../../assets/eats.png";
import doctorBooking from "../../assets/doctorBooking.png";
import lawyerBooking from "../../assets/lawyerBooking.png";
import cabs from "../../assets/cabs.png";
import rooms from "../../assets/rooms.png";
import recharge from "../../assets/recharge.png";
import deliveryBoys from "../../assets/delivery.png";
import buySell from "../../assets/buysell.png";
import Movies from "../../assets/movie.png";
import tripCampanian from "../../assets/trip.png";

const Services = () => {
  const items = [
    { name: "Services", fileName: services },
    { name: "Enquiry", fileName: enquiry },
    { name: "Auction", fileName: auction },
    { name: "Job", fileName: job },
    { name: "Vehicle Service", fileName: vehicleService },
    { name: "News", fileName: news },
    { name: "Store", fileName: store },
    { name: "Eats", fileName: eats },
    { name: "Doctor Booking", fileName: doctorBooking },
    { name: "Lawyer Booking", fileName: lawyerBooking },
    { name: "Job", fileName: job },
    { name: "Cabs", fileName: cabs },
    { name: "Rooms", fileName: rooms },
    { name: "Recharge", fileName: recharge },
    { name: "Delivery Boy", fileName: deliveryBoys },
    { name: "Buy & Sell", fileName: buySell },
    { name: "Movie & Events", fileName: Movies },
    { name: "Trip Campanian", fileName: tripCampanian },
  ];

 
  return (
    <div className="main_box">
      {items.map((data, key) => {
        return (
          <div className="items" key={key}>
            <img src={data.fileName} alt="" /> 
            <span>{data.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
