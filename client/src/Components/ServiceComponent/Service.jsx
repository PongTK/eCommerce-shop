import React from "react";
import "./Service.css";
import TrophyImg from "/public/Images/trophy 1.svg";
import WarrantyImg from "/public/Images/guarantee.svg";
import ShippingImg from "/public/Images/shipping.svg";
import SupportImg from "/public/Images/customer-support.svg";

function Service() {
  return (
    <>
      <section className="service-section">
        <div className="service-wrapper">
          <div className="service-content">
            <img src={TrophyImg} alt="TrophyImg" />
            <div className="service-text">
              <p id="service-title">High Quality</p>
              <p id="service-detail">crafted from top materials</p>
            </div>
          </div>
          <div className="service-content">
            <img src={WarrantyImg} alt="WarrantyImg" />
            <div className="service-text">
              <p id="service-title">Warranty</p>
              <p id="service-detail">Over 2 years</p>
            </div>
          </div>
          <div className="service-content">
            <img src={ShippingImg} alt="ShippingImg" />
            <div className="service-text">
              <p id="service-title">Free Shipping</p>
              <p id="service-detail">Order over $150</p>
            </div>
          </div>
          <div className="service-content">
            <img src={SupportImg} alt="SupportImg" />
            <div className="service-text">
              <p id="service-title">24 / 7 Support</p>
              <p id="service-detail">Dedicated support</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
