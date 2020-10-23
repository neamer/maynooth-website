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
import ExtendBackground from "./ExtendBackground";
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
      <div className="detail-wrapper">
        <div className="content-wrapper">
          <GoBack />
          {product !== null ? (
            <div className="detail-info-div">
              <ProductPictures />
              <ProductInfo
                Category={product.category}
                Name={product.name}
                ShortDesc={product.short_desc}
                Price={product.price}
                InStock={product.in_stock}
              />
            </div>
          ) : (
            "loading"
          )}
        </div>
      </div>
      <SecondSection>
        <div className="content-wrapper" style={{ paddingTop: "30px" }}>
          <ProductDetailedDesc />
        </div>
        <Showcase Light heading="Similar Items" />
        <Footer />
      </SecondSection>
    </>
  );
}

export default ProductDetail;
