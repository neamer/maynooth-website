import React from "react";

import "./ProductInfo.css";

function ProductInfo(props) {
  return (
    <div className="product-detail-info-wrapper product-detail-action-wrapper">
      <h4 className="product-detail-category">
        {props.Category === "L"
          ? "Living Room"
          : props.Category === "K"
          ? "Kitchen & Dining"
          : "Bedroom"}
      </h4>
      <h2 className="product-detail-name">{props.Name}</h2>
      <p className="product-detail-desc">{props.ShortDesc}</p>
    </div>
  );
}

export default ProductInfo;
