import React, { useState, useEffect } from "react";

import ArrowIcon from "../common/img/arrowDark.svg";

import "./ProductPictures.css";

function ProductPictures(props) {
  const [position, setPosition] = useState(0);
  const [responsive, setResponsive] = useState(false);

  const goLeft = () => {
    setPosition(position + 100);
  };

  const goRight = () => {
    setPosition(position - 100);
  };

  useEffect(() => {
    if (document.body.clientWidth <= 750) {
      setResponsive(true);
    }
  }, []);

  return (
    <div className="detail-pictures-wrapper">
      <div className="detail-main-pictures-wrapper">
        {props.Pictures.map((item, index) => {
          return (
            <div
              key={index}
              className="detail-pictures-slider"
              style={{
                transform: `translate(${position}%)`,
                backgroundImage: `url(${item})`,
              }}
            ></div>
          );
        })}
        {position !== 0 ? (
          <button
            className="pictures-slider-btn pictures-slider-btn-left"
            onClick={goLeft}
          >
            <ArrowIcon className="pictures-arrow arrow-left" />
          </button>
        ) : (
          ""
        )}

        {position !== (props.Pictures.length - 1) * -100 ? (
          <button
            className="pictures-slider-btn pictures-slider-btn-right"
            onClick={goRight}
          >
            <ArrowIcon className="pictures-arrow" />
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="detail-bottom-pictures-wrapper">
        {props.Pictures.map((item, index) => {
          return (
            <div
              key={index}
              className={
                position === index * -100
                  ? "detail-bottom-picture detail-bottom-picture-active"
                  : "detail-bottom-picture"
              }
              style={{
                backgroundImage: `url(${item})`,
              }}
              onClick={() => setPosition(index * -100)}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductPictures;
