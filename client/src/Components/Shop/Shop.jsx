import React, { useEffect, useState } from "react";
import "./Shop.css";
import { Route, Routes, NavLink } from "react-router-dom";
import axios from "axios";

import Service from "../ServiceComponent/Service";
import AllProducts from "../Products/AllProducts";
import Electronics from "../Products/Electronics";
import Jewelery from "../Products/Jewelery";
import MenC from "../Products/MenC";
import WomenC from "../Products/WomenC";

function Shop() {
  const [cates, setCates] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const getCates = async () => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/categories`
    );
    setCates(response.data);
  };

  useEffect(() => {
    getCates();
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const cateElements = cates.map((cate) => {
    return (
      <NavLink
        key={cate}
        to={`/shop/${cate}`}
        className="cate"
        activeClassName="active"
        onClick={closeDropdown}
      >
        <h3 className="elec-cate-title">{cate}</h3>
      </NavLink>
    );
  });

  return (
    <>
      <header>
        <span className="header-text">SHOP</span>
        <span className="header-subText">Functional | Economical | Fine</span>
      </header>
      <section className="category-section">
        <div className="category-wrapper">
          <div className="category-toggle" onClick={toggleDropdown}>
            Category
          </div>
          {showDropdown && (
            <div className="category-group-dropdown">
              <NavLink
                exact
                to="/shop/"
                className="cate all-products"
                activeClassName="active"
                onClick={closeDropdown}
              >
                <h3 className="elec-cate-title">All Products</h3>
              </NavLink>
              {cateElements}
            </div>
          )}
        </div>
      </section>
      <section className="product-list">
        <Routes>
          <Route path="/" element={<AllProducts />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/jewelery" element={<Jewelery />} />
          <Route path="/men's clothing" element={<MenC />} />
          <Route path="/women's clothing" element={<WomenC />} />
        </Routes>
      </section>
      <Service />
    </>
  );
}

export default Shop;
