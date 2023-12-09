import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import account from "/public/Images/account-outline.svg";
import Cart from "/public/Images/shopping-cart-outlined.svg";

function Navbar({ setdisplayRegisPage }) {
  const onRegisterClick = () => {
    setdisplayRegisPage(true);
  };
  return (
    <>
      <nav className="navbar-section">
        <div className="navbar-wrapper">
          <a href="#" className="navbar-logo">
            My Store
          </a>
          <div className="navbar-manu">
            <Link exact to="/" className="homeBtn">
              Home
            </Link>
            <Link exact to="/Shop" className="contactBtn">
              Shop
            </Link>
            <Link exact to="/About" className="aboutBtn">
              About
            </Link>
            <Link exact to="/Contact" className="contactBtn">
              Contact us
            </Link>
          </div>
          <div className="navbar-profile">
            <a href="#" className="CartBtn">
              <img src={Cart} alt="shopping-cart-outlined" />
            </a>
            <div onClick={onRegisterClick} className="accBtn">
              <img src={account} alt="account-outline" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
