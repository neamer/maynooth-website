import React, { useState, useEffect } from "react";

import axios from "axios";

import { useParams } from "react-router-dom";

import Header from "../common/header";

import "./index.css";
import ProductList from "../common/ProductList";
import SecondSection from "../common/SecondSection";
import Footer from "../common/footer";

function SearchResults() {
  const params = useParams();
  const [resultList, setResultList] = useState(null);

  useEffect(() => {
    // fetch the product information

    let searchInput = params.input.replace(/-/g, " ");

    document.title = `${searchInput} - Maynooth Furniture`;

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        searchInput,
      },
    };

    axios
      .get("/api/products/search/", config)
      .then((res) => {
        console.log(res.data);
        setResultList(res.data);
      })
      .catch((err) => {
        console.log(err.response.data, err.response.status);
      });
  }, [params]);

  return (
    <>
      <Header />
      <div
        className="search-results-main-wrapper"
        style={{
          backgroundImage:
            'url("static/frontend/background-1.svg"), url("static/frontend/background-3.svg")',
        }}
      >
        <div className="content-wrapper">
          <h2 className="search-results-heading">
            Search results for "{params.input}"
          </h2>
        </div>
        <ProductList Light List={resultList} />
        <SecondSection>
          <Footer />
        </SecondSection>
      </div>
    </>
  );
}

export default SearchResults;
