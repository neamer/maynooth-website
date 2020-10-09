import React, { useState, useEffect } from "react";

import ArrowIcon from "./arrowDark.svg";
import "./Showcase.css";

function Showcase(props) {
  const [position, setPosition] = useState(0);
  const [responsive, setResponsive] = useState(false);
  const [elementsDisplayed, setElementsDisplayed] = useState(1);

  const elements = [
    {
      price: "$379",
      name: "Haru Large Double Sofa Bed",
      shortDesc: "3 colors available",
      src: "/static/frontend/sampleProductPic.png",
    },
    {
      price: "$321",
      name: "Cecil Accent Armchair",
      shortDesc: "4 colors available",
      src: "/static/frontend/sampleProductPic2.png",
    },
    {
      price: "$546",
      name: "Blue Sofa",
      shortDesc: "Medium sized comfortable Blue Sofa",
      src: "/static/frontend/sampleProductPic.png",
    },
    {
      price: "$458",
      name: "Blue Sofa",
      shortDesc: "Medium sized comfortable Blue Sofa",
      src: "/static/frontend/sampleProductPic2.png",
    },
    {
      price: "$983",
      name: "Blue Sofa",
      shortDesc: "Medium sized comfortable Blue Sofa",
      src: "/static/frontend/sampleProductPic.png",
    },
  ];

  useEffect(() => {
    if (document.body.clientWidth <= 750) {
      setResponsive(true);
    }
    setElementsDisplayed(responsive ? 1 : 2);
  }, [responsive]);

  window.addEventListener("resize", () => {
    setElementsDisplayed(responsive ? 1 : 2);
  });

  const goLeft = () => {
    setPosition((currPosition) => currPosition - 1);
  };

  const goRight = () => {
    setPosition((currPosition) => currPosition + 1);
  };

  return (
    <div
      className="showcase-wrapper"
      style={{
        backgroundImage:
          'url("static/frontend/background-1.svg"), url("static/frontend/background-2.svg")',
      }}
    >
      <div className="content-wrapper">
        <h1 className="showcase-heading">New In Store</h1>
        <div className="showcase-container">
          {elements.map((item, index) => {
            return (
              <div
                key={index}
                className="showcase-slider-element"
                style={{
                  transform: `translate(${
                    position * (responsive ? -292 : -600)
                  }px)`,
                }}
              >
                <div
                  className="showcase-pic-div"
                  style={{ backgroundImage: `url(${item.src})` }}
                >
                  <h3 className={ props.light ? "showcase-price showcase-price-light" : "showcase-price"}>{item.price}</h3>
                </div>
                <h3 className={ props.Light ? "showcase-name showcase-name-light" : "showcase-name"}>{item.name}</h3>
                <p className={ props.Light ? "showcase-desc showcase-desc-light" : "showcase-desc"}>{item.shortDesc}</p>
              </div>
            );
          })}
          {position !== 0 ? (
            <button
              className="showcase-btn showcase-btn-left"
              onClick={goLeft}
            >
              <ArrowIcon className="arrow arrow-left" />
            </button>
          ) : (
            ""
          )}

          {position + elementsDisplayed !== elements.length ? (
            <button
              className="showcase-btn showcase-btn-right"
              onClick={goRight}
            >
              <ArrowIcon className="arrow" />
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Showcase;
