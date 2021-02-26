import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import ArrowIcon from "../common/img/arrowDark.svg";
import ArrowIconLight from "../common/img/arrowLight.svg";
import "./Showcase.css";

function Showcase(props) {
  const [position, setPosition] = useState(0);
  const [responsive, setResponsive] = useState(false);
  const [elementsDisplayed, setElementsDisplayed] = useState(1);

  // remove
  const elements = [
    {
      price: "$379",
      name: "Haru Large Double Sofa Bed",
      shortDesc: "3 colors available",
      src: "/static/frontend/sampleProductPic.png",
    },
    {
      price: "$321.00",
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
      price: "$458.99",
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
      setElementsDisplayed(1);
    } else if (document.body.clientWidth <= 1366) {
      setElementsDisplayed(1);
    } else {
      setElementsDisplayed(2);
    }
  }, []);

  window.addEventListener("resize", () => {
    if (document.body.clientWidth <= 750) {
      if (!responsive) {
        setResponsive(true);
        setPosition(0);
        setElementsDisplayed(1);
      }
    } else if (document.body.clientWidth <= 1366) {
      if (responsive) {
        setResponsive(false);
        setPosition(0);
        setElementsDisplayed(1);
      }
    } else {
      if (responsive) {
        setResponsive(false);
        setPosition(0);
        setElementsDisplayed(2);
      }
    }
  });

  const goLeft = () => {
    setPosition((currPosition) => currPosition - 1);
  };

  const goRight = () => {
    console.log(` props.products.length -> ${props.products.length}`);
    setPosition((currPosition) => currPosition + 1);
  };

  return (
    <div
      className="showcase-wrapper"
      style={
        props.Background
          ? {
              backgroundImage:
                'url("static/frontend/background-1.png"), url("static/frontend/background-4.svg")',
            }
          : {}
      }
    >
      <div className="content-wrapper">
        <h1
          className={
            props.Light
              ? "showcase-heading showcase-heading-light"
              : "showcase-heading"
          }
        >
          {props.heading}
        </h1>

        {props.products ? (
          <div className="showcase-container">
            {props.products.map((item, index) => {
              return (
                <Link
                  key={index}
                  className="showcase-slider-element link-default"
                  style={{
                    transform: `translate(${
                      position * (responsive ? -292 : -600)
                    }px)`,
                  }}
                  to={`/product/${item.name.replace(/-/g, " ")}`}
                >
                  <div
                    className="showcase-pic-div"
                    style={{ backgroundImage: `url(${item.pictures[0]})` }}
                  >
                    <h3
                      className={
                        props.Light
                          ? "showcase-price showcase-price-light"
                          : "showcase-price"
                      }
                    >
                      ${item.price}
                    </h3>
                  </div>
                  <h3
                    className={
                      props.Light || props.LightText
                        ? "showcase-name showcase-name-light"
                        : "showcase-name"
                    }
                  >
                    {item.name}
                  </h3>
                  <p
                    className={
                      props.Light || props.LightText
                        ? "showcase-desc showcase-desc-light"
                        : "showcase-desc"
                    }
                  >
                    {item.colors.length} color/s available
                  </p>
                </Link>
              );
            })}

            {position !== 0 ? (
              <button
                className="showcase-btn showcase-btn-left"
                onClick={goLeft}
              >
                {props.Light ? (
                  <ArrowIconLight className="arrow arrow-left" />
                ) : (
                  <ArrowIcon className="arrow arrow-left" />
                )}
              </button>
            ) : (
              ""
            )}

            {position + elementsDisplayed < props.products.length ? (
              <button
                className="showcase-btn showcase-btn-right"
                onClick={goRight}
              >
                {props.Light ? (
                  <ArrowIconLight className="arrow" />
                ) : (
                  <ArrowIcon className="arrow" />
                )}
              </button>
            ) : (
              ""
            )}
          </div>
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
}

export default Showcase;
