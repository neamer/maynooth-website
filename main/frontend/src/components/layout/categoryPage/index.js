import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
  }, [categoryName]);

  return (
    <>
      {basketIsOpen ? <ShoppingBasket onClick={setBasketIsOpen} /> : ""}
      <Header onClick={setBasketIsOpen} />
      <CategoryHero Category={categoryName} heroImgSrc={categoryPic} />
      <Showcase LightText heading="New in category" />
      <SecondSection GoUnder>
        <ExtendBackground />
        <ProductList />
        <Footer />
      </SecondSection>
    </>
  );
}

export default CategoryPage;
