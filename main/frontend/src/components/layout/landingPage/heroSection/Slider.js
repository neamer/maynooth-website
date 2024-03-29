import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";

import ArrowIcon from "../../common/img/arrowLight.svg";
import "./Slider.css";

function Slider() {
  const [position, setPosition] = useState(0);
  const [fontSize, setFontSize] = useState(100);
  const [lineHeight, setLineHeight] = useState(100);
  const [responsive, setResponsive] = useState(false);

  let elements = [
    {
      caption: "The perfect sofa for your home",
      action: "SHOP SOFAS",
      src: "static/frontend/slide1.png",
      link: "/search/sofa",
    },
    {
      caption: "Everything you need for your dining room",
      action: "SHOP NOW",
      src: "static/frontend/slide2.png",
      link: "/shopbyroom/kitchen-and-dining",
    },
    {
      caption: "Everything you need for your bedroom",
      action: "SHOP NOW",
      src: "static/frontend/slide3.jpg",
      link: "/shopbyroom/bedroom",
    },
  ];

  const goLeft = () => {
    setPosition(position + 100);
  };

  const goRight = () => {
    setPosition(position - 100);
  };

  useEffect(() => {
    setFontSize(parseInt(window.innerHeight * 0.06) + "px");
    setLineHeight(parseInt(window.innerHeight * 0.08) + "px");
    if (document.body.clientWidth <= 750) {
      setResponsive(true);
    }
  }, []);

  return (
    <div className="hero-slider">
      {elements.map((item, index) => {
        return (
          <div
            key={index}
            className="slider-element"
            style={{
              transform: `translate(${position}%)`,
              backgroundImage: `url(${item.src})`,
            }}
          >
            <div className="slider-content-wrapper">
              <h1
                className="slider-caption"
                style={
                  responsive
                    ? { fontSize: fontSize, lineHeight: lineHeight }
                    : {}
                }
              >
                {item.caption}
              </h1>

              <Link to={item.link}>
                <button className="slider-action">{item.action}</button>
              </Link>
            </div>
          </div>
        );
      })}
      {position !== 0 ? (
        <button className="slider-btn slider-btn-left" onClick={goLeft}>
          <ArrowIcon className="arrow arrow-left" />
        </button>
      ) : (
        ""
      )}

      {position !== (elements.length - 1) * -100 ? (
        <button className="slider-btn slider-btn-right" onClick={goRight}>
          <ArrowIcon className="arrow" />
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Slider;
