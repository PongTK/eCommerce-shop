import { useEffect, useState, React } from "react";
import "./Products.css";
import axios from "axios";
import PopUpProduct from "../PopUpProduct/PopUpProduct";

function AllProducts() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [displayPopUpProduct, setdisplayPopUpProduct] = useState(false);

  let popUpProductPopUp = false;
  if (!!displayPopUpProduct) {
    popUpProductPopUp = (
      <PopUpProduct
        setdisplayPopUpProduct={setdisplayPopUpProduct}
        selectedProduct={selectedProduct}
        products={products}
        setSelectedProduct={setSelectedProduct}
      />
    );
  }

  const onPopUpProductClick = (product) => {
    setSelectedProduct(product);
    setdisplayPopUpProduct(true);
  };

  useEffect(() => {
    const loadproduct = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
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
                <div
                  id="seeDetail"
                  onClick={() => onPopUpProductClick(product)}
                >
                  View Product
                </div>
              </div>
            </div>
          </span>
        ))}
      </div>
      {popUpProductPopUp}
    </>
  );
}

export default AllProducts;
