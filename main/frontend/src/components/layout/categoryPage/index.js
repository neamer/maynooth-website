import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import Header from "../common/header";
import CategoryHero from "./CategoryHero";
import Showcase from "../common/Showcase";
import SecondSection from "../common/SecondSection";
import ProductList from "./ProductList";
import Footer from "../common/footer";
import ExtendBackground from "./ExtendBackground";

import "./index.css";

function CategoryPage(props) {
  const params = useParams();

  let categoryName;

  let categoryPic;

  switch (params.category) {
    case "livingroom":
      categoryName = "Living Room";
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
  }, []);

  return (
    <>
      <Header />
      <CategoryHero Category={categoryName} />
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
