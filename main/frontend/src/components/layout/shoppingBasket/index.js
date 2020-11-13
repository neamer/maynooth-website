import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import "./index.css";
import CloseIcon from "./img/close.svg";
import SimilarItems from "./SimilarItems";
import BasketProduct from "./BasketProduct";
import BasketProductResp from "./BasketProductResp";

function ShoppingBasket(props) {
  const productsInBasket = useSelector((state) => state.products);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const getSubtotal = () => {
    let result = 0;

    productsInBasket.forEach((item) => {
      result += item.price * item.quantity;
    });

    return result;
  };

  return (
    <div className="basket-wrapper">
      <div className="basket-close-btn" onClick={() => props.onClick(false)}>
        <CloseIcon className="basket-close-icon" />
      </div>

      <div className="basket-grid">
        <div
          className="basket-left-section"
          style={{
            backgroundImage: 'url("static/frontend/background-5.svg")',
          }}
        >
          <h1 className="basket-heading">SHOPPING BASKET</h1>

          <div className="basket-table-top-row">
            <div className="top-row-product">PRODUCT</div>
            {document.body.clientWidth > 1366 ? (
              <>
                <div className="top-row-quantity">QUANTITY</div>
                <div className="top-row-price">PRICE</div>
                <div className="top-row-whitespace"></div>
              </>
            ) : (
              ""
            )}
          </div>

          {productsInBasket.length === 0 ? (
            <>
              <h2 className="basket-empty-h">Your basket is empty!</h2>
              <p className="basket-empty-p">
                Add some products to the basket and they will show up here
              </p>
            </>
          ) : (
            <div className="basket-table-wrapper">
              {productsInBasket.map((item, index) => {
                return document.body.clientWidth > 1366 ? (
                  <BasketProduct key={index} product={item} />
                ) : (
                  <BasketProductResp key={index} product={item} />
                );
              })}
            </div>
          )}
        </div>
        <div className="basket-right-section">
          <div className="basket-summary-wrapper">
            <div className="basket-summary">
              <h3 className="basket-summary-header">SUMMARY</h3>
              <label htmlFor="shippingOptions" className="basket-summary-label">
                SHIPPING OPTIONS
              </label>
              <select name="shippingOptions" className="summary-input">
                <option value="economy" className="summary-shipping-option">
                  economy
                </option>
                <option value="standard" className="summary-shipping-option">
                  standard
                </option>
                <option value="premium" className="summary-shipping-option">
                  premium
                </option>
              </select>

              <label htmlFor="shippingOptions" className="basket-summary-label">
                DISCOUNT CODE
              </label>
              <input
                type="text"
                name="discountCode"
                className="summary-input"
              />

              {productsInBasket.length !== 0 ? (
                <>
                  <div className="summary-subtotal">
                    <span>SUBTOTAL</span>
                    <span>${getSubtotal()}</span>
                  </div>
                  <hr className="summary-line" />
                </>
              ) : (
                ""
              )}
              <button className="summary-proceed-btn">
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
          <div className="basket-similar-wrapper">
            <h3 className="basket-similar-header">RECOMMENDATIONS</h3>
            <p className="basket-similar-subtitle">
              Based on the items in your cart
            </p>
            {productsInBasket.length === 0 ? "" : <SimilarItems />}
          </div>
        </div>
      </div>
    </div>
  );
}

/* 

*/

export default ShoppingBasket;
