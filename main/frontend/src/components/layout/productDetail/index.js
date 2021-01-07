import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/basket/basketActions";

import axios from "axios";

import { useParams } from "react-router-dom";

import Header from "../common/header";
import ShoppingBasket from "../shoppingBasket";
import ProductPictures from "./ProductPictures";
import ProductInfo from "./ProductInfo";
import ProductDetailedDesc from "./ProductDetailedDesc";
import SecondSection from "../common/SecondSection";
import Showcase from "../common/Showcase";
import ProductAction from "./ProductAction";
import Footer from "../common/footer";

import "./index.css";

function ProductDetail(props) {
  const [product, setProduct] = useState(null);
  const [reccomendations, setReccomendations] = useState(null);
  const [basketIsOpen, setBasketIsOpen] = useState(false);
  const dispatch = useDispatch();

  const params = useParams();

  useEffect(() => {
    // fetch the product information

    let productName = params.productName.replace(/-/g, " ");

    document.title = `${productName} - Maynooth Furniture`;

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        productName,
      },
    };

    axios
      .get("/api/product/", config)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data.product);
        setReccomendations(res.data.reccomendations);
      })
      .catch((err) => {
        console.log(err.response.data, err.response.status);
      });
  }, [params]);

  const AddToBasket = (amount) => {
    const productToBasket = {
      name: product.name,
      price: product.price,
      color: product.colors[0],
      picture: product.pictures[0],
      quantity: amount,
    };

    dispatch(addProduct(productToBasket));
  };

  return (
    <>
      {basketIsOpen ? <ShoppingBasket onClick={setBasketIsOpen} /> : ""}
      <Header onClick={setBasketIsOpen} />
      <div
        className="detail-wrapper"
        style={{
          backgroundImage:
            'url("static/frontend/background-1.png"), url("static/frontend/background-4.svg")',
        }}
      >
        <div className="content-wrapper">
          {product !== null ? (
            <>
              <div className="detail-info-div">
                <ProductPictures Pictures={product.pictures} />
                <ProductInfo
                  Category={product.category}
                  Name={product.name}
                  ShortDesc={product.short_desc}
                />
                <ProductAction
                  Price={product.price}
                  InStock={product.in_stock}
                  onClick={AddToBasket}
                />
              </div>
              <ProductDetailedDesc DetailDesc={product.detail_desc} />
            </>
          ) : (
            "loading"
          )}
        </div>
      </div>
      <SecondSection GoUnder>
        <Showcase Light heading="Similar Items" products={reccomendations} />
        <Footer />
      </SecondSection>
    </>
  );
}

export default ProductDetail;
