import React, { useState, useEffect } from "react";

import ArrowIcon from "./arrow.svg";
import "./ProductHighlightDesktop.css";

function ProductHighlightDesktop() {
  const [position, setPosition] = useState(0);
  const [responsive, setResponsive] = useState(false);
  const [elementsDisplayed, setElementsDisplayed] = useState(1);

  const elements = [
    {
      price: "$123",
      name: "Blue Sofa",
      shortDesc: "3 colors available",
      src: "/static/frontend/sampleProductPicBg.png",
    },
    {
      price: "$321",
      name: "Haru Large Double Sofa Bed",
      shortDesc: "1 color available",
      src: "/static/frontend/sampleProductPicBg.png",
    },
    {
      price: "$546",
      name: "Blue Sofa",
      shortDesc: "Medium sized comfortable Blue Sofa",
      src: "/static/frontend/sampleProductPicBg.png",
    },
    {
      price: "$458",
      name: "Blue Sofa",
      shortDesc: "Medium sized comfortable Blue Sofa",
      src: "/static/frontend/sampleProductPicBg.png",
    },
    {
      price: "$983",
      name: "Blue Sofa",
      shortDesc: "Medium sized comfortable Blue Sofa",
      src: "/static/frontend/sampleProductPicBg.png",
    },
  ];

  useEffect(() => {
    if (document.body.clientWidth <= 750) {
      setResponsive(true);
    }
    setElementsDisplayed(responsive ? 1 : 3);
  }, [responsive]);

  window.addEventListener("resize", () => {
    setElementsDisplayed(responsive ? 1 : 3);
  });

  const goLeft = () => {
    setPosition((currPosition) => currPosition - 1);
  };

  const goRight = () => {
    setPosition((currPosition) => currPosition + 1);
  };

  return (
    <div className="content-wrapper">
      <h1 className="highlight-heading">New In Store</h1>
      <div className="highlight-container">
        {elements.map((item, index) => {
          return (
            <div
              key={index}
              className="highlight-slider-element"
              style={{
                transform: `translate(${
                  position * (responsive ? -292 : -372)
                }px)`,
              }}
            >
              <div
                className="highlight-pic-div"
                style={{ backgroundImage: `url(${item.src})` }}
              >
                <h3 className="highlight-price">{item.price}</h3>
                <p className="highlight-shopnow">
                  SHOP NOW <ArrowIcon className="highlight-arrow" />
                </p>
              </div>
              <h3 className="highlight-name">{item.name}</h3>
              <p className="highlight-desc">{item.shortDesc}</p>
            </div>
          );
        })}
        {position !== 0 ? (
          <button className="slider-btn slider-btn-left" onClick={goLeft}>
            Left
          </button>
        ) : (
          ""
        )}

        {position + elementsDisplayed !== elements.length ? (
          <button className="slider-btn slider-btn-right" onClick={goRight}>
            Right
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default ProductHighlightDesktop;
