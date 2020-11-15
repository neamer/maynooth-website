import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import Header from "../common/header";
import ShoppingBasket from "../shoppingBasket";
import CategoryHero from "./CategoryHero";
import Showcase from "../common/Showcase";
import SecondSection from "../common/SecondSection";
import ProductList from "../common/ProductList";
import Footer from "../common/footer";
import ExtendBackground from "./ExtendBackground";

import "./index.css";

function CategoryPage(props) {
  const [basketIsOpen, setBasketIsOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [resultList, setResultList] = useState(null);

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

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .get("/api/products/", config)
      .then((res) => {
        setResultList(res.data.results);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data, err.response.status);
      });
  }, [categoryName]);

  const pageAfterNext = () => {};

  return (
    <>
      {basketIsOpen ? <ShoppingBasket onClick={setBasketIsOpen} /> : ""}
      <Header onClick={setBasketIsOpen} />
      <CategoryHero Category={categoryName} heroImgSrc={categoryPic} />
      <Showcase LightText heading="New in category" />
      <SecondSection GoUnder>
        <ExtendBackground />
        <ProductList List={resultList} />
        <Footer />
      </SecondSection>
    </>
  );
}

export default CategoryPage;
