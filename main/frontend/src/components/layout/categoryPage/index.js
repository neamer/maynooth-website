import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import Header from "../common/header";
import ShoppingBasket from "../shoppingBasket";
import CategoryHero from "./CategoryHero";
import Search from "../common/search";
import Showcase from "../common/Showcase";
import SecondSection from "../common/SecondSection";
import ProductList from "../common/ProductList";
import Footer from "../common/footer";
import ExtendBackground from "./ExtendBackground";

import { PAGINATOR_SIZE } from "../common/pagination/Constants";

import "./index.css";
import PageButton from "../common/pagination/PageButton";

function CategoryPage(props) {
  const [basketIsOpen, setBasketIsOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [response, setResponse] = useState(null);

  const params = useParams();

  let categoryName;

  let categoryPic;

  switch (params.category) {
    case "livingroom":
      categoryName = "Living Room";
      categoryPic = "static/frontend/livingRoomHero.png";
      break;
    case "bedroom":
      categoryName = "Bedroom";
      break;
    case "kitchendining":
      categoryName = "Kitchen & Dining";
      break;

    default:
      break;
  }

  useEffect(() => {
    document.title = `Maynooth Furniture - ${categoryName}`;

    // load the products when the component gets initially rendered

    loadPage(1);
  }, [categoryName]);

  const pageAfterNext = () =>
    page * PAGINATOR_SIZE + page + 1 <= response.count - PAGINATOR_SIZE;

  const loadPage = (page) => {
    console.log(`attempted loading page ${page} of category ${categoryName}!`);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .get(`/api/products/?page=${page}`, config)
      .then((res) => {
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
      <Showcase LightText heading="New in category" />
      <SecondSection GoUnder>
        <div className="content-wrapper">
          <div className="filter-grid">
            <Search />
            <div className="filter-reorder">newest</div>
          </div>
        </div>

        <ExtendBackground />
        {response !== null ? (
          <>
            <ProductList List={response.results} />

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
