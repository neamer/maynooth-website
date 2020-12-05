import React, { useState, useEffect } from "react";

import axios from "axios";

import { useParams } from "react-router-dom";

import Header from "../common/header";
import Search from "../common/search";
import PageButton from "../common/pagination/PageButton";

import "./index.css";
import ProductList from "../common/ProductList";
import SecondSection from "../common/SecondSection";
import Footer from "../common/footer";

import { PAGINATOR_SIZE } from "../common/pagination/Constants";

function SearchResults() {
  const params = useParams();
  const [page, setPage] = useState(1);
  const [response, setResponse] = useState(null);
  const [searchInput, setSearchInput] = useState("NONE");

  useEffect(() => {
    // fetch the product information

    setSearchInput((state) => params.input.replace(/-/g, " "));

    document.title = `${searchInput} - Maynooth Furniture`;

    loadPage(1);
  }, [params]);

  const loadPage = (page) => {
    console.log(`attempted loading page ${page} of keyword ${searchInput}!`);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        searchInput,
      },
    };

    axios
      .get(`/api/products/search/?page=${page}`, config)
      .then((res) => {
        setResponse(res.data);
        setPage(page);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data, err.response.status);
      });
  };

  const pageAfterNext = () =>
    page * PAGINATOR_SIZE + page + 1 <= response.count - PAGINATOR_SIZE;

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

        <div className="content-wrapper">
          <div className="filter-grid">
            <Search Light />
            <div className="filter-reorder filter-reorder-light">newest</div>
          </div>
        </div>

        {response !== null ? (
          <>
            <ProductList List={response} />

            <div className="page-buttons-wrapper">
              {page > 2 ? (
                <PageButton page={page - 2} onClick={loadPage} />
              ) : (
                ""
              )}

              {page > 1 ? (
                <PageButton page={page - 1} onClick={loadPage} />
              ) : (
                ""
              )}

              <PageButton page={page} active onClick={loadPage} />

              {1 == 1 ? <PageButton page={page + 1} onClick={loadPage} /> : " "}

              {pageAfterNext() ? (
                <PageButton page={page + 2} onClick={loadPage} />
              ) : (
                " "
              )}
            </div>
          </>
        ) : (
          ""
        )}
        <SecondSection>
          <Footer />
        </SecondSection>
      </div>
    </>
  );
}

export default SearchResults;
