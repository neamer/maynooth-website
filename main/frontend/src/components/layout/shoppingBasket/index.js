import React, { useEffect } from "react";

import "./index.css";
import CloseIcon from "./img/close.svg";

function ShoppingBasket(props) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="basket-wrapper">
      <div className="basket-close-btn" onClick={() => props.onClick(false)}>
        <CloseIcon className="basket-close-icon" />
      </div>

      <div className="basket-grid">
        <div className="basket-left-section">
          <h1 className="basket-heading">SHOPPING BASKET</h1>

          <div className="basket-table-top-row">
            <div className="top-row-product">PRODUCT</div>
            <div className="top-row-quantity">QUANTITY</div>
            <div className="top-row-price">PRICE</div>
            <div className="top-row-whitespace"></div>
          </div>

          <div className="basket-table-wrapper">
            <div className="basket-table-row">
              <div className="basket-table-pic"></div>
              <div className="basket-table-info">
                <h3 className="basket-table-name">Blue Sofa Haru Large</h3>
                <p className="basket-table-color">Blue</p>
              </div>
              <input
                type="number"
                name="quantity"
                id=""
                value="1"
                className="basket-table-quantity"
              />
              <div className="basket-table-price">$399.00</div>
              <button className="basket-table-remove">REMOVE</button>
            </div>
            <div className="basket-table-row">
              <div className="basket-table-pic"></div>
              <div className="basket-table-info">
                <h3 className="basket-table-name">Blue Sofa Haru Large</h3>
                <p className="basket-table-color">Blue</p>
              </div>
              <input
                type="number"
                name="quantity"
                id=""
                value="1"
                className="basket-table-quantity"
              />
              <div className="basket-table-price">$399.00</div>
              <button className="basket-table-remove">REMOVE</button>
            </div>
            <div className="basket-table-row">
              <div className="basket-table-pic"></div>
              <div className="basket-table-info">
                <h3 className="basket-table-name">Blue Sofa Haru Large</h3>
                <p className="basket-table-color">Blue</p>
              </div>
              <input
                type="number"
                name="quantity"
                id=""
                value="1"
                className="basket-table-quantity"
              />
              <div className="basket-table-price">$399.00</div>
              <button className="basket-table-remove">REMOVE</button>
            </div>
          </div>
        </div>
        <div className="basket-right-section">a</div>
      </div>
    </div>
  );
}

/* 

*/

export default ShoppingBasket;
