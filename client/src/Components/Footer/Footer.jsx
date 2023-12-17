import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer-section">
        <div className="footer-wrapper">
          <div className="box1">
            <div className="logo">TK Store</div>
            <div className="address">
              AAA tower 20th floor, 789 sathorn St, bangkok, Thailand 10120
            </div>
          </div>
          <div className="copy-right">
            2023 TK Store. <br />
            All right reverved
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
