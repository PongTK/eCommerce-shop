import React from "react";
import "./Navbar.css";
import account from "/public/Images/account-outline.svg";
import Cart from "/public/Images/shopping-cart-outlined.svg";

function Navbar() {
  return (
    <>
      <div className="navbar-section">
        <div className="navbar-wrapper">
          <a href="#" className="navbar-logo">
            My Store
          </a>
          <div className="navbar-manu">
            <a href="#" className="homeBtn">
              Home
            </a>
            <a href="#" className="contactBtn">
              Shop
            </a>
            <a href="#" className="aboutBtn">
              About
            </a>
            <a href="#" className="contactBtn">
              Contact us
            </a>
          </div>
          <div className="navbar-profile">
            <a href="#" className="CartBtn">
              <img src={Cart} alt="shopping-cart-outlined" />
            </a>
            <a href="#" className="accBtn">
              <img src={account} alt="account-outline" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
