import React, { useState, useEffect } from "react";
import axios from "axios";

import Search from "../common/search";

import "./ProductList.css";

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
                return (
                  <div
                    key={index}
                    className={
                      index % 3 === 0
                        ? "result-product-wrapper product-left"
                        : index % 3 === 1
                        ? "result-product-wrapper product-middle"
                        : "result-product-wrapper product-right"
                    }
                  >
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
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
