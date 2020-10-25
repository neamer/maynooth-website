import React from "react";

import "./ProductDetailedDesc.css";

function ProductDetailedDesc(props) {
  return (
    <div className="detailed-desc-wrapper">
      <h3 className="detailed-desc-header">Details</h3>
      <p className="detailed-desc-body">{props.DetailDesc}</p>
    </div>
  );
}

export default ProductDetailedDesc;
