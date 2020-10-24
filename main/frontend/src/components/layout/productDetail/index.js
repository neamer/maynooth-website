import React, { useEffect, useState } from "react";

import axios from "axios";

import { useParams } from "react-router-dom";

import Header from "../common/header";
import GoBack from "./GoBack";

import "./index.css";
import ProductPictures from "./ProductPictures";
import ProductInfo from "./ProductInfo";
import ProductDetailedDesc from "./ProductDetailedDesc";
import SecondSection from "../common/SecondSection";
import Showcase from "../common/Showcase";
import ProductAction from "./ProductAction";
import Footer from "../common/footer";

function ProductDetail(props) {
  const [product, setProduct] = useState(null);

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
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err.response.data, err.response.status);
      });
  }, [params]);

  return (
    <>
      <Header />
      <div
        className="detail-wrapper"
        style={{
          backgroundImage:
            'url("static/frontend/background-1.png"), url("static/frontend/background-4.svg")',
        }}
      >
        <div className="content-wrapper">
          {product !== null ? (
            <div className="detail-info-div">
              <ProductPictures Pictures={product.pictures} />
              <ProductInfo
                Category={product.category}
                Name={product.name}
                ShortDesc={product.short_desc}
              />
              <ProductAction Price={product.price} InStock={product.in_stock} />
            </div>
          ) : (
            "loading"
          )}
          <ProductDetailedDesc />
        </div>
      </div>
      <SecondSection GoUnder>
        <Showcase Light heading="Similar Items" />
        <Footer />
      </SecondSection>
    </>
  );
}

export default ProductDetail;
