import React, { useState } from "react";
import { addProduct } from "../../redux/basket/basketActions";

import CheckMark from "./checkMark.svg";

import "./ProductAction.css";

function ProductAction(props) {
  const [quantity, setQuantity] = useState(1);
  const [btnDisabled, setBtnDisabled] = useState(false);

  const addToCart = () => {
    setBtnDisabled(true);
    props.onClick(quantity);
    setTimeout(() => setBtnDisabled(false), 1000);
  };

  return (
    <div className="product-detail-action-wrapper">
      <h1 className="product-detail-price">${props.Price}</h1>
      <div className="add-to-cart-grid">
        <div>
          <input
            className="add-to-cart-qty"
            type="number"
            name="add-to-cart-qty"
            id=""
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div>
          {btnDisabled ? (
            <button className="add-to-cart-button" disabled>
              ITEM ADDED
            </button>
          ) : (
            <button className="add-to-cart-button" onClick={() => addToCart()}>
              ADD TO CART
            </button>
          )}
        </div>
      </div>
      {props.InStock ? (
        <h5 className="product-detail-in-stock">
          in stock <CheckMark className="check-mark" />
        </h5>
      ) : (
        <h5>out of stock</h5>
      )}
    </div>
  );
}

export default ProductAction;
