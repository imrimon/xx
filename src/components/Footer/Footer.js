import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer bg-dark">
      <div className="container-fluild padding">
        <div className="row text-center padding">
          <div className="col-md-4">
            <hr className="light" />
            <p>Contact Us</p>
            <hr className="light" />
            <p>Medicare@gmail.com</p>
            <p>100 Street ,London</p>
            <p>City,State, 53100</p>
          </div>
          <div className="col-md-4">
            <hr className="light" />
            <h5>Our Hours</h5>
            <hr className="light" />
            <p>Monday:9am -5pm</p>
            <p>Saturday: 10am-4pm</p>
            <p>Sunday : Closed</p>
          </div>
          <div className="col-md-4">
            <hr className="light" />
            <h5>Service Areas</h5>
            <hr className="light" />
            <p>City,Central London, 000000</p>
            <p>City,East London, 000000</p>
            <p>City,West London, 000000</p>
          </div>
          <div className="col-12">
            <hr className="light" />
            <h5>@asirfaisal.dip</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
