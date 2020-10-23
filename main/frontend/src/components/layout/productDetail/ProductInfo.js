import React, { useState, useEffect } from "react";

import CheckMark from "./checkMark.svg";

import "./ProductInfo.css";

function ProductInfo(props) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product-detail-info-wrapper">
      <h4 className="product-detail-category">
        {props.Category === "L"
          ? "Living Room"
          : props.Category === "K"
          ? "Kitchen & Dining"
          : "Bedroom"}
      </h4>
      <h2 className="product-detail-name">{props.Name}</h2>
      <p className="product-detail-desc">{props.ShortDesc}</p>
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
          <button className="add-to-cart-button">ADD TO CART</button>
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

export default ProductInfo;
