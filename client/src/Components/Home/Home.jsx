import React from "react";
import "./Home.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ElecImg from "/public/Images/wall_plug.jpg";
import JewelImg from "/public/Images/jewelery.jpg";
import MenCImg from "/public/Images/men's clothing.jpg";
import WomenCImg from "/public/Images/women's clothing.jpg";
import { NavLink } from "react-router-dom";

import welcomeImg from "/public/Images/shop_open.jpg";
import joinUsOnline from "/public/Images/join_us_online.jpg";
import winterFashion from "/public/Images/winter_fashion.jpg";
import monthlySub from "/public/Images/monthly_sub.jpg";

function Home({ setdisplayRegisPage }) {
  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const onRegisterClick = () => {
    setdisplayRegisPage(true);
  };

  return (
    <>
      <Slider {...sliderSettings}>
        <div className="slider-item welcome">
          <img src={welcomeImg} alt="shop-open" />
          <div className="slider-container">
            <div className="slider-content">
              <h1>WELCOME TO</h1>
              <h1>TK STORE</h1>
              <p>
                orem ipsum dolor sit amet consectetur, adipisicing elit.
                Deserunt voluptatibus cupiditate expedita doloribus sit
                reiciendis, sequi vero ut sapiente et accusantium quis ducimus,
                ipsum obcaecati ad consectetur sed dolore. Iusto!
              </p>
            </div>
          </div>
        </div>
        <div className="slider-item discount">
          <img src={joinUsOnline} alt="join-us-online" />
          <div className="slider-container">
            <div className="slider-content">
              <h1>REGISTER TO GET</h1>
              <h1>20% DISCOUNT</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deserunt voluptatibus cupiditate expedita doloribus sit
                reiciendis, sequi vero ut sapiente et accusantium quis ducimus,
                ipsum obcaecati ad consectetur sed dolore. Iusto!
              </p>
              <button className="slider-btn" onClick={onRegisterClick}>
                Register
              </button>
            </div>
          </div>
        </div>
        <div className="slider-item collection">
          <img src={winterFashion} alt="winter-fashion" />
          <div className="slider-container">
            <div className="slider-content">
              <h1>2023 COLLECTION</h1>
              <h1>WINTER FASHION</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deserunt voluptatibus cupiditate expedita doloribus sit
                reiciendis, sequi vero ut sapiente et accusantium quis ducimus,
                ipsum obcaecati ad consectetur sed dolore. Iusto!
              </p>
              <button className="slider-btn">
                <NavLink exact to="/Shop">
                  See Collection
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </Slider>
      <section className="home-section">
        <div className="promotion-container">
          <h1 className="coupon-heading">Coupons</h1>
          <marquee loop="infinities" direction="left">
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,
              eum?
            </span>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,
              eum?
            </span>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,
              eum?
            </span>
          </marquee>
          <div className="promotion-grid">
            <div className="coupon-grid-M">
              <h3>First time register to get 20% discount</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, ea.
              </p>
              <button className="coupon">Get it</button>
            </div>
            <div className="coupon-grid-S">
              <p>Free shipping when purchases of 500 or more</p>
              <button className="coupon">Get it</button>
            </div>
            <div className="coupon-grid-S">
              <p>Get 5% discount when purchasing 1000</p>
              <button className="coupon">Get it</button>
            </div>
            <div className="coupon-grid-S">
              <p>Buy 1 get 1 free every 1st of the month.</p>
              <button className="coupon">Get it</button>
            </div>
          </div>
        </div>
        <div className="category-grid">
          <NavLink to="/shop/electronics" className="cate-box">
            <div className="img">
              <img src={ElecImg} alt="ElecImg" />
            </div>
            <div className="cate-box-content">
              <h1>ELECTRONICS</h1>
            </div>
          </NavLink>
          <NavLink to="/shop/jewelery" className="cate-box">
            <div className="img">
              <img src={JewelImg} alt="JewelImg" />
            </div>
            <div className="cate-box-content">
              <h1>JEWELERY</h1>
            </div>
          </NavLink>
          <NavLink to="/shop/men's clothing" className="cate-box">
            <div className="img">
              <img src={MenCImg} alt="MenCImg" />
            </div>
            <div className="cate-box-content">
              <h1>MEN'S FASHION</h1>
            </div>
          </NavLink>
          <NavLink to="/shop/women's clothing" className="cate-box">
            <div className="img">
              <img src={WomenCImg} alt="WomenCImg" />
            </div>
            <div className="cate-box-content">
              <h1>WOMEN'S FASHION</h1>
            </div>
          </NavLink>
        </div>
        <div className="supscription">
          <img src={monthlySub} alt="monthly-sub" />
          <h1>Monthly subscription with us to</h1>
          <h1>receive many privileges</h1>
          <button onClick={onRegisterClick}>Register Now!</button>
        </div>
      </section>
    </>
  );
}

export default Home;
