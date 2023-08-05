import "./about.scss";
import { Container } from "@mui/material";
import ServiceCard from "../Service-card/ServiceCard";
import seclobLogo from "../../assets/seclob_logo.png";

const About = () => {
  const sampleArray = [1, 2, 3];
  return (
    <div style={{ paddingBottom: "3rem" }}>
      <Container
        maxWidth="xl"
        style={{ padding: "0 8rem", paddingTop: "2rem" }}
      >
        <div className="links">
          <span>About us</span>
          <div className="vl"></div>
          <span>Terms & Conditions</span>
          <div className="vl"></div>
          <span>Privacy Policy</span>
          <div className="vl"></div>
          <span>Cancellation Policy</span>
          <div className="vl"></div>
          <span>FAQ</span>
          <div className="vl"></div>
          <span>Blog</span>
          <div className="vl"></div>
          <span>Services</span>
          <div className="vl"></div>
          <span>Shopping</span>
          <div className="vl"></div>
          <span>Shopping</span>
        </div>
        <div className="paragraph">
          <p>
            Welcome to Justdial, your &apos;one stop shop&apos; where you are assisted
            with day-to-day and exclusive planning and purchasing activities. We
            take pride in our iconic customer support number, 8888888888 and the
            fact that we own a strong hold on local business information pan
            India.
          </p>
          <p>
            Our service extends from providing address and contact details of
            business establishments around the country, to making orders and
            reservations for leisure, medical, financial, travel and domestic
            purposes. We enlist business information across varied sectors like
            Hotels, Restaurants, Auto Care, Home Decor, Personal and Pet Care,
            Fitness, Insurance, Real Estate, Sports, Schools, etc. from all over
            the country. Holding information right from major cities like
            Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Ahmedabad and Pune our
            reach stretches out to other smaller cities across the country too.
          </p>
          <p>
            Our &apos;Free Listing&apos; feature gives a platform to showcase
            varied specialities. We then furnish you with the information via
            phone, SMS, web, App and WAP as well as, create a space for you to
            share your experiences through our &apos;Rate & Review&apos;
            feature. Through the &apos;Best Deals&apos;, &apos;Last Minute
            Deals&apos; and &apos;Live Quotes&apos;, we make sure that you are
            offered the best bargains in the market.
          </p>
        </div>
        <div className="seclob_service">
          <span className="sub_header">
            Some of our services that will prove useful to you on a day-to-day
            basis are:
          </span>
          {sampleArray.map((data, key) => {
            return (
              <div className="row" style={{ display: "flex" }} key={key}>
                <ServiceCard  />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
              </div>
            );
          })}
        </div>
        <div className="paragraph">
          <p>
            Some of the other services that can be of assistance to you for
            leisure, health and home convenience are - Courier Service, Laundry
            Service, AC Repair, Thyrocare, Metropolis, Order Mineral Water, Book
            a Table, Doctor&apos;s Appointment, Order Food Online, etc. <br /> <br />
            With an endless number of things under the sun, you can be sure this
            will be your &apos;One Stop Shop&apos; to find everything and more.
          </p>

          <div className="logo_section">
            <img src={seclobLogo} alt="" />
          </div>
          <p style={{textAlign:'center',width:'50%',marginLeft:'auto',marginRight:'auto',marginTop:'2.5rem'}}>
            Seclob brings the best of Home Maintenance and Repairs, Utility,
            Lifestyle, Health, Beauty Services, and Local Shopping to the
            customer, right where they are, all through an easy to use platform.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default About;
