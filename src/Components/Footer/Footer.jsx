import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer-section">
        <div className="footer-wrapper">
          <div className="box1">
            <div className="logo">My Store</div>
            <div className="address"> 120/40 Sathorn, Bangkok, Thailand</div>
          </div>
          <div className="copy-right"> 2023 My Store. All right reverved</div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
