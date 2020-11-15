import React, { useState, useEffect } from "react";
import axios from "axios";

import Search from "../common/search";

import "./ProductList.css";
import Product from "./Product";

function ProductList(props) {
  return (
    <div className="content-wrapper product-list-wrapper">
      <div className="filter-grid">
        {props.Light ? <Search Light /> : <Search />}
        <div
          className={
            props.Light
              ? "filter-reorder filter-reorder-light"
              : "filter-reorder"
          }
        >
          newest
        </div>
      </div>
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
