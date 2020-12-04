import React from "react";

import "./ProductList.css";
import Product from "./Product";

function ProductList(props) {
  return (
    <div className="content-wrapper product-list-wrapper">
      <div className="results-wrapper">
        <div className="results-grid">
          {props.List
            ? props.List.map((item, index) => {
                if (props.Light) {
                  return index % 3 === 0 ? (
                    <Product Product={item} key={index} Light Left />
                  ) : index % 3 === 1 ? (
                    <Product Product={item} key={index} Light Middle />
                  ) : (
                    <Product Product={item} key={index} Light Right />
                  );
                } else {
                  return index % 3 === 0 ? (
                    <Product Product={item} key={index} Left />
                  ) : index % 3 === 1 ? (
                    <Product Product={item} key={index} Middle />
                  ) : (
                    <Product Product={item} key={index} Right />
                  );
                }
              })
            : ""}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
