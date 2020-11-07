import React from "react";

import { Link } from "react-router-dom";

import "./Product.css";

function Product(props) {
  return (
    <Link
      className="link-default"
      to={`/product/${props.Product.name.replace(/-/g, " ")}`}
      key={index}
    >
      <div
        className={
          props.Left
            ? "result-product-wrapper product-left"
            : props.Middle === 1
            ? "result-product-wrapper product-middle"
            : "result-product-wrapper product-right"
        }
      >
        <div
          className="result-product-pic-div"
          style={{ backgroundImage: `url(${props.Product.pictures[0]})` }}
        >
          <h3 className="result-product-price">{props.Product.price}</h3>
        </div>
        <h3 className="result-product-name">{props.Product.name}</h3>
        <p className="result-product-tagline">
          {props.Product.colors.length} colors available
        </p>
      </div>
    </Link>
  );
}

export default Product;
