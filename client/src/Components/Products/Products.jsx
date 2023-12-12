import React, { useEffect, useState } from "react";
import "./Products.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function Products() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [category]);

  return (
    <>
      <div className="product-wrapper">
        {products.map((product) => (
          <span key={product.id} className="product-card">
            <div className="product-img-wrapper">
              <img className="productImg" src={product.image} alt="" />
            </div>
            <div className="product-title-wrapper">
              <p className="product-title">{product.title}</p>
              <p className="product-title">${product.price}</p>
              <div className="productBtn">
                <a id="seeDetail" href="">
                  View Product
                </a>
              </div>
            </div>
          </span>
        ))}
      </div>
    </>
  );
}

export default Products;
