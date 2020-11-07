import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

import Search from "../common/search";

import "./ProductList.css";
import Product from "./Product";

function ProductList() {
  const [results, setResults] = useState(null);

  useEffect(() => {
    // load the products when the component gets initially rendered

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .get("/api/products/", config)
      .then((res) => {
        setResults(res.data.results);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data, err.response.status);
      });
  }, []);

  return (
    <div className="content-wrapper product-list-wrapper">
      <div className="filter-grid">
        <Search />
        <div className="filter-reorder">newest</div>
      </div>
      <div className="results-wrapper">
        <div className="results-grid">
          {results
            ? results.map((item, index) => {
                return index % 3 === 0 ? (
                  <Product Product={item} Left />
                ) : index % 3 === 1 ? (
                  <Product Product={item} Middle />
                ) : (
                  <Product Product={item} Right />
                );

                return (
                  <Link
                    className="link-default"
                    to={`/product/${item.name.replace(/-/g, " ")}`}
                    key={index}
                  >
                    <div className={}>
                      <div
                        className="result-product-pic-div"
                        style={{ backgroundImage: `url(${item.pictures[0]})` }}
                      >
                        <h3 className="result-product-price">{item.price}</h3>
                      </div>
                      <h3 className="result-product-name">{item.name}</h3>
                      <p className="result-product-tagline">
                        {item.colors.length} colors available
                      </p>
                    </div>
                  </Link>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
