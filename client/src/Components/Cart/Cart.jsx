import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Cart.css";
import { cartList } from "../PopUpProduct/PopUpProduct";
import { AiTwotoneDelete } from "react-icons/ai";

function Cart() {
  const [productInCart, setProductInCart] = useState([]);

  useEffect(() => {
    const getCartLocalstorage = localStorage.getItem("cart");
    setProductInCart(JSON.parse(getCartLocalstorage));
  }, [cartList]);

  const handleQuantityChange = (id, newQuantity) => {
    const updateCart = cartList.value.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: newQuantity,
          total: product.price * newQuantity,
        };
      }
      return product;
    });

    cartList.value = updateCart;
    setProductInCart(updateCart);

    localStorage.setItem("cart", JSON.stringify(updateCart));
  };

  const handleDeleteClick = (id) => {
    console.log("Deleting product with ID:", id);
    cartList.value = cartList.value.filter((product) => product.id !== id);

    setProductInCart(cartList.value);

    localStorage.setItem("cart", JSON.stringify(cartList.value));
  };

  const productInCartTOShow = productInCart.map((cartProduct) => {
    return (
      <div className="order-product" key={cartProduct.id}>
        <div className="order-product-nameimg">
          <div className="order-product-img">
            <img src={cartProduct.image} alt="pd-img" />
          </div>
          <div className="order-product-name">{cartProduct.title}</div>
        </div>
        <div className="order-product-price">${cartProduct.price}</div>
        <div className="order-product-quantity">
          <button
            className="quantity-dec"
            onClick={() => {
              if (cartProduct.quantity > 1) {
                const newQuantity = cartProduct.quantity - 1;
                handleQuantityChange(cartProduct.id, newQuantity);
              }
            }}
          >
            &lt;
          </button>
          <input
            type="text"
            id="quantity-show"
            value={cartProduct.quantity}
            readOnly
          />
          <button
            className="quantity-inc"
            onClick={() => {
              const newQuantity = cartProduct.quantity + 1;
              handleQuantityChange(cartProduct.id, newQuantity);
            }}
          >
            &gt;
          </button>
        </div>
        <div className="order-product-total">
          ${cartProduct.total.toFixed(2)}
        </div>
        <div
          className="order-product-delete"
          onClick={() => handleDeleteClick(cartProduct.id)}
        >
          <AiTwotoneDelete />
        </div>
      </div>
    );
  });

  return (
    <>
      <header>
        <span className="header-text">CART</span>
        <span className="header-subText">Discount | Order | Receive</span>
      </header>
      <section className="cart-section">
        <div className="order-table">
          <div className="order-table-header">
            <ul>
              <li>PRODUCT</li>
              <li>PRICE</li>
              <li>QUANTITY</li>
              <li>TOTAL</li>
              <li>DELETE</li>
            </ul>
          </div>
          <div className="order-table-container">
            {productInCartTOShow.length ? (
              productInCartTOShow
            ) : (
              <h2 className="no-have-product">No have Product</h2>
            )}
          </div>
          <div className="order-table-button">
            <div className="coupon">
              <input type="text" placeholder="Enter coupon code..." />
              <button className="couponBtn">Apply Coupon</button>
            </div>
            <button className="cont-shopping">
              <NavLink exact to="/Shop">
                Continue Shopping
              </NavLink>
            </button>
          </div>
        </div>
        <aside className="cart-total">
          <div className="cart-total-header">
            <p>CART TOTAL</p>
          </div>
          <div className="cart-total-subtotal">
            <span>Sub Total :</span>
            <span className="subtotal">
              $
              {productInCart
                .reduce((acc, product) => acc + product.total, 0)
                .toFixed(2)}
            </span>
          </div>
          <div className="cart-total-tax">
            <span>Tax 7% :</span>
            <span className="taxtotal">
              $
              {(
                productInCart.reduce((acc, product) => acc + product.total, 0) *
                0.07
              ).toFixed(2)}
            </span>
          </div>
          <div className="cart-total-coupon">
            <span>Coupon Code :</span>
            <span className="coupontotal">$00.00</span>
          </div>
          <form action="">
            <div className="delivery-address-box">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                placeholder="Enter your address"
              />
            </div>
            <div className="delivery-address-box">
              <label htmlFor="province">Province</label>
              <input
                type="text"
                id="province"
                placeholder="Enter your province"
              />
            </div>
            <div className="delivery-address-box">
              <label htmlFor="city">City</label>
              <input type="text" id="city" placeholder="Enter your city" />
            </div>
            <div className="delivery-address-box">
              <label htmlFor="postcode">Postcode</label>
              <input
                type="text"
                id="postcode"
                placeholder="Enter your postcode"
              />
            </div>
            <div className="proceed">
              <div className="proceed-total">
                <span>Total :</span>
                <span className="total">
                  $
                  {(
                    productInCart.reduce(
                      (acc, product) => acc + product.total,
                      0
                    ) +
                    productInCart.reduce(
                      (acc, product) => acc + product.total,
                      0
                    ) *
                      0.07
                  ).toFixed(2)}
                </span>
              </div>
              <div className="proceed-to-checkout">Proceed To Checkout</div>
            </div>
          </form>
        </aside>
      </section>
    </>
  );
}

export default Cart;
