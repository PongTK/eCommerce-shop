import React from "react";
import "./Cart.css";

function Cart() {
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
          <h2 class="no-have-product">No have Product</h2>
          <div className="order-table-container">
            <div className="order-product">
              <div className="order-product-nameimg">
                <div className="order-product-img">
                  <img src="" alt="pd-img" />
                </div>
                <div className="order-product-name">pd name</div>
              </div>
              <div className="order-product-price">$123</div>
              <div className="order-product-quantity">
                <button className="quantity-dec">-</button>
                <input type="text" id="quantity-show" value="1" />
                <button className="quantity-inc">+</button>
              </div>
              <div className="order-product-total">$999</div>
              <div className="order-product-delete">delete</div>
            </div>
          </div>
          <div className="order-table-button">
            <div className="coupon">
              <input type="text" placeholder="Enter coupon code..." />
              <button>Apply Coupon</button>
            </div>
            <button>Continue Shopping</button>
          </div>
        </div>
        <aside className="cart-total">
          <div className="cart-total-header">
            <p>CART TOTAL</p>
          </div>
          <div className="cart-total-subtotal">
            <span>Sub Total :</span>
            <span className="subtotal">$999</span>
          </div>
          <div className="cart-total-tax">
            <span>Tax 7% :</span>
            <span className="taxtotal">$77</span>
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
                <span className="total">$1076</span>
              </div>
              <button className="proceed-to-checkout">
                Proceed To Checkout
              </button>
            </div>
          </form>
        </aside>
      </section>
    </>
  );
}

export default Cart;
