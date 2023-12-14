import React, { useState } from "react";
import "./Register.css";

import {
  AiOutlineClose,
  AiFillFacebook,
  AiFillGoogleSquare,
} from "react-icons/ai";
import registerImg from "/public/Images/register.jpg";

function Register({ setdisplayRegisPage }) {
  const [showRegisterCard, setShowRegisterCard] = useState(true);

  const closePopUp = () => {
    setdisplayRegisPage(false);
  };

  const toggleCard = () => {
    setShowRegisterCard(!showRegisterCard);
    const registerBtn = document.querySelector(".register-btn");
    registerBtn.classList.toggle("active");
  };

  return (
    <>
      <section className="register-section">
        <div className="register-BG"></div>
        <div className="register-content">
          <div className="acc-img">
            <img src={registerImg} alt="registerImg" />
          </div>
          <div className="register-column">
            <div className="close" onClick={closePopUp}>
              <AiOutlineClose />
            </div>
            <div className="register-box">
              <div className="register-btn" onClick={toggleCard}>
                <p className="register-color-btn">Register</p>
                <p className="login-color-btn">Login</p>
                <button className="change-btn"></button>
              </div>
              <div className="change-card">
                {showRegisterCard ? (
                  <div class="register-card">
                    <input type="text" placeholder="Enter you fristname" />
                    <input type="text" placeholder="Enter you lastname" />
                    <input type="email" placeholder="Enter you email" />
                    <input type="password" placeholder="Enter you password" />
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="8"
                      placeholder="Enter you address"
                    ></textarea>
                    <button class="submit-btn">Register</button>
                    <p class="already-title">
                      Already have an account{" "}
                      <span class="clickLogin" onClick={toggleCard}>
                        Login
                      </span>
                    </p>
                    <p>or</p>
                    <ul class="social-icon">
                      <li>
                        <a href="#">
                          <AiFillFacebook />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <AiFillGoogleSquare />
                        </a>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <div class="login-card">
                    <input type="email" placeholder="Enter you email" />
                    <input type="password" placeholder="Enter you password" />
                    <button class="submit-btn">Log in</button>
                    <div class="checkUser">
                      <div class="rememberMe">
                        <input
                          type="checkbox"
                          id="rememberCheckBx"
                          name="rememberCheckBx"
                        />
                        <label for="rememberCheckBx"> Remember Me</label>
                      </div>
                      <p class="forget-password">Forget password ? </p>
                    </div>
                    <p>or</p>
                    <ul class="social-icon">
                      <li>
                        <a href="#">
                          <AiFillFacebook />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <AiFillGoogleSquare />
                        </a>
                      </li>
                    </ul>
                    <div class="createAccount">
                      <p>
                        Don't have any account{" "}
                        <span class="clickRegister" onClick={toggleCard}>
                          Register Now
                        </span>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
