import React from "react";
import "./Shop.css";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";

import AllProducts from "../Products/AllProducts";
import Electronics from "../Products/Electronics";
import Jewelery from "../Products/Jewelery";
import MenC from "../Products/MenC";
import WomenC from "../Products/WomenC";

function Shop() {
  return (
    <>
      <header>
        <span className="header-text">Shop</span>
        <span className="header-subText">Functional | Economical | Fine</span>
      </header>
      <BrowserRouter>
        <section className="category-section">
          <div className="category-wrapper">
            <div className="category-group">
              <NavLink exact to="/" className="allProducts cate">
                <h3 className="elec-cate-title">All Products</h3>
              </NavLink>
              <NavLink exact to="/electronics" className="elec cate">
                <h3 className="elec-cate-title">Electronics</h3>
              </NavLink>
              <NavLink exact to="/jewelery" className="jewel cate">
                <h3 className="jewel-cate-title">Jewelery</h3>
              </NavLink>
              <NavLink exact to="/men's clothing" className="MenC cate">
                <h3 className="MenC-cate-title">Men's Clothing</h3>
              </NavLink>
              <NavLink exact to="/women's clothing" className="WomenC cate">
                <h3 className="WomenC-cate-title">Women's Clothing</h3>
              </NavLink>
            </div>
          </div>
        </section>
        <section className="product-list">
          <Routes>
            <Route index element={<AllProducts />} />
            <Route path="electronics" element={<Electronics />} />
            <Route path="jewelery" element={<Jewelery />} />
            <Route path="men's clothing" element={<MenC />} />
            <Route path="women's clothing" element={<WomenC />} />
          </Routes>
        </section>
      </BrowserRouter>
    </>
  );
}

export default Shop;
