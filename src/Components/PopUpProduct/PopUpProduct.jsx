import React, { useState } from "react";
import "./PopUpProduct.css";
import { AiOutlineClose, AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

function PopUpProduct({
  setdisplayPopUpProduct,
  selectedProduct,
  products,
  setSelectedProduct,
}) {
  const [quantity, setQuantity] = useState(1);

  //ตรวจสอบข้อมูลที่ถูกส่งมาจากหน้ารายการสินค้า
  if (!selectedProduct) {
    return null;
  }

  const prevProduct = () => {
    const currentIndex = products.findIndex(
      (product) => product.id === selectedProduct.id
    );

    if (currentIndex === -1 || currentIndex === 0) {
      setSelectedProduct(products[0]);
    } else {
      setSelectedProduct(products[currentIndex - 1]);
    }
  };

  const nextProduct = () => {
    const currentIndex = products.findIndex(
      (product) => product.id === selectedProduct.id
    );

    if (currentIndex === -1 || currentIndex === products.length - 1) {
      setSelectedProduct(products[products.length - 1]);
    } else {
      setSelectedProduct(products[currentIndex + 1]);
    }
  };

  const prevQuantity = () => {
    if (quantity > 1) {
      setQuantity((quantity) => quantity - 1);
    }
  };

  const nextQuantity = () => {
    setQuantity((quantity) => quantity + 1);
  };

  const closePopUp = () => {
    setdisplayPopUpProduct(false);
  };

  return (
    <>
      <section className="popup-product-section">
        <div className="popup-product-BG"></div>
        <div className="popup-product-container">
          <div className="close" onClick={closePopUp}>
            <AiOutlineClose />
          </div>
          <div className="popup-product-img-wrap">
            <button className="prev" onClick={prevProduct}>
              <AiOutlineLeft />
            </button>
            <img
              className="popup-product-img"
              src={selectedProduct.image}
              alt=""
            />
            <button className="next" onClick={nextProduct}>
              <AiOutlineRight />
            </button>
          </div>
          <div className="popup-product-content">
            <h1 className="popup-product-name">{selectedProduct.title}</h1>
            <h3 className="popup-product-price">${selectedProduct.price}</h3>
            <p className="popup-product-detail">
              {selectedProduct.description}
            </p>
            <div className="popup-product-quantity">
              <button className="quantity-dec" onClick={prevQuantity}>
                -
              </button>
              <input type="text" id="quantity-show" value={quantity} />
              <button className="quantity-inc" onClick={nextQuantity}>
                +
              </button>
            </div>
            <div className="popup-product-btn">
              <button id="addToCart"> ADD TO CART</button>
              <button id="checkOutcart">CHECK OUT CART</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PopUpProduct;
