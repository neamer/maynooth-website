import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import Header from "../common/header";
import ShoppingBasket from "../shoppingBasket";
import CategoryHero from "./CategoryHero";
import Search from "../common/search";
import SortBy from "../common/sortBy/SortBy";
import Showcase from "../common/Showcase";
import SecondSection from "../common/SecondSection";
import ProductList from "../common/ProductList";
import Footer from "../common/footer";

import { PAGINATOR_SIZE } from "../common/pagination/Constants";

import "./index.css";
import PageButton from "../common/pagination/PageButton";
import ScrollAnchor from "../common/ScrollAnchor";

import LoadProductGroup from "../common/LoadProductGroup";

function CategoryPage(props) {
  const [searchInput, setSearchInput] = useState("");
  const [basketIsOpen, setBasketIsOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [newInCategory, setNewInCategory] = useState(null);

  const params = useParams();

  let categoryName = null;

  let categoryPic = null;

  switch (params.category) {
    case "living-room":
      categoryName = "Living Room";
      break;
    case "bedroom":
      categoryName = "Bedroom";
      break;
    case "kitchen-and-dining":
      categoryName = "Kitchen & Dining";
      break;

    default:
      break;
  }

  useEffect(() => {
    document.title = `Maynooth Furniture - ${categoryName}`;

    LoadProductGroup(`new-in-${params.category}`, setNewInCategory);
    loadPage(1);
  }, [categoryName, searchInput]);

  const pageAfterNext = () =>
    page * PAGINATOR_SIZE + PAGINATOR_SIZE + 1 <= response.count;

  const changeSearchInput = () => {
    loadPage(1);
  };

  const loadPage = (page) => {
    setLoading(true);

    console.log(
      `attempted loading page ${page} of category ${categoryName}! Keyword -> ${searchInput}`
    );

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        category: categoryName[0],
        searchInput: searchInput,
      },
    };

    axios
      .get(`/api/products/?page=${page}`, config)
      .then((res) => {
        setLoading(false);

        setTimeout(() => console.log("waited 500"), 500);

        setResponse(res.data);
        setPage(page);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data, err.response.status);
      });
  };

  return (
    <>
      {basketIsOpen ? <ShoppingBasket onClick={setBasketIsOpen} /> : ""}
      <Header onClick={setBasketIsOpen} />
      <CategoryHero Category={categoryName} heroImgSrc={categoryPic} />
      <div className="category-line"></div>
      <Showcase heading="Staff picks" Background products={newInCategory} />
      <SecondSection style={{ paddingTop: "60px" }}>
        <ScrollAnchor />
        <div className="content-wrapper">
          {searchInput !== "" ? (
            <h2 className="search-results-heading search-results-heading-category">
              Search results for "{searchInput}"
            </h2>
          ) : (
            ""
          )}
          <div className="filter-grid">
            <Search onClick={setSearchInput} />
            <SortBy Light />
          </div>
        </div>

        {response !== null ? (
          <>
            {loading ? (
              <ProductList Loading List={response.results} />
            ) : (
              <ProductList List={response.results} />
            )}

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

              {response.next ? (
                <PageButton page={page + 1} onClick={loadPage} />
              ) : (
                " "
              )}

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

        <Footer />
      </SecondSection>
    </>
  );
}

export default CategoryPage;
