import React, { useEffect, useState } from "react";
import "./Shop.css";
import { Route, Routes, NavLink } from "react-router-dom";

import AllProducts from "../Products/AllProducts";
import Electronics from "../Products/Electronics";
import Jewelery from "../Products/Jewelery";
import MenC from "../Products/MenC";
import WomenC from "../Products/WomenC";
import axios from "axios";

function Shop() {
  const [cates, setCates] = useState([]);

  const getCates = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products`);
    const uniqueCates = [
      ...new Set(response.data.map((item) => item.category)),
    ];
    const selectedCates = uniqueCates.slice(0, 4);
    setCates(selectedCates);
  };

  useEffect(() => {
    getCates();
  }, []);

  const cateElements = cates.map((cate) => {
    return (
      <NavLink
        key={cate}
        to={`/shop/${cate}`}
        className="cate"
        activeClassName="active"
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
          <div className="category-group">
            <NavLink
              exact
              to="/shop/"
              className="cate all-products"
              activeClassName="active"
            >
              <h3 className="elec-cate-title">All Products</h3>
            </NavLink>
            {cateElements}
          </div>
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
    </>
  );
}

export default Shop;
