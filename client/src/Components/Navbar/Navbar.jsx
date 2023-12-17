import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import account from "/public/Images/account-outline.svg";
import Cart from "/public/Images/shopping-cart-outlined.svg";

function Navbar({ setdisplayRegisPage }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const onRegisterClick = () => {
    setdisplayRegisPage(true);
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <>
      <nav className="navbar-section">
        <div className="navbar-wrapper">
          <a href="#" className="navbar-logo">
            TK Store
          </a>
          <div className="navbar-toggle" onClick={toggleDropdown}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className={`navbar-manu ${showDropdown ? "hidden" : ""}`}>
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
          {showDropdown && (
            <div className="navbar-manu-dropdown">
              <Link exact to="/" className="homeBtn" onClick={closeDropdown}>
                Home
              </Link>
              <Link
                exact
                to="/Shop"
                className="contactBtn"
                onClick={closeDropdown}
              >
                Shop
              </Link>
              <Link
                exact
                to="/About"
                className="aboutBtn"
                onClick={closeDropdown}
              >
                About
              </Link>
              <Link
                exact
                to="/Contact"
                className="contactBtn"
                onClick={closeDropdown}
              >
                Contact us
              </Link>
              <Link
                exact
                to="/Cart"
                className="CartBtn"
                onClick={closeDropdown}
              >
                <img src={Cart} alt="shopping-cart-outlined" />
                <p>Cart</p>
              </Link>
              <div onClick={onRegisterClick} className="accBtn">
                <img src={account} alt="account-outline" />
                <p>Profle</p>
              </div>
            </div>
          )}
          <div className={`navbar-profile ${showDropdown ? "hidden" : ""}`}>
            <Link exact to="/Cart" className="CartBtn">
              <img src={Cart} alt="shopping-cart-outlined" />
            </Link>
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
