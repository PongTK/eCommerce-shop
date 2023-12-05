import { useEffect, useState, React } from "react";
import "./Products.css";
import axios from "axios";

function WomenC() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadproduct = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/category/women's clothing"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    loadproduct();
  }, []);
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

export default WomenC;
