import React from "react";

import { Link } from "react-router-dom";

import "./Product.css";

function Product(props) {
  return (
    <div
      className={
        props.Left
          ? "result-product-wrapper product-left"
          : props.Middle
          ? "result-product-wrapper product-middle"
          : "result-product-wrapper product-right"
      }
    >
      <Link
        className="link-default"
        to={`/product/${props.Product.name.replace(/-/g, " ")}`}
      >
        <div
          className="result-product-pic-div"
          style={{ backgroundImage: `url(${props.Product.pictures[0]})` }}
        >
          <h3
            className={
              props.Light
                ? "result-product-price-light result-product-price"
                : "result-product-price"
            }
          >
            {props.Product.price}
          </h3>
        </div>
        <h3
          className={
            props.Light
              ? "result-product-name-light result-product-name"
              : "result-product-name"
          }
        >
          {props.Product.name}
        </h3>
        <p
          className={
            props.Light
              ? "result-product-tagline-light result-product-tagline"
              : "result-product-tagline"
          }
        >
          {props.Product.colors.length} colors available
        </p>
      </Link>
    </div>
  );
}

export default Product;
