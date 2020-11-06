import React, { useState, useEffect } from "react";

import ArrowIcon from "../common/img/arrowDark.svg";
import ArrowIconLight from "../common/img/arrowLight.svg";
import "./SimilarItems.css";

function SimilarItems(props) {
  const [position, setPosition] = useState(0);

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

  const goLeft = () => {
    setPosition((currPosition) => currPosition - 1);
  };

  const goRight = () => {
    setPosition((currPosition) => currPosition + 1);
  };

  return (
    <div className="similar-items-wrapper">
      <div className="similar-items-container">
        {elements.map((item, index) => {
          return (
            <div
              key={index}
              className="similar-items-slider-element"
              style={{
                transform: `translate(${position * -292}px)`,
              }}
            >
              <div
                className="similar-items-pic-div"
                style={{ backgroundImage: `url(${item.src})` }}
              >
                <h3 className="similar-items-price">{item.price}</h3>
              </div>
              <h3 className="similar-items-name">{item.name}</h3>
            </div>
          );
        })}
        {position !== 0 ? (
          <button
            className="similar-items-btn similar-items-btn-left"
            onClick={goLeft}
          >
            <ArrowIcon className="arrow arrow-left" />
          </button>
        ) : (
          ""
        )}

        {position + 1 !== elements.length ? (
          <button
            className="similar-items-btn similar-items-btn-right"
            onClick={goRight}
          >
            <ArrowIcon className="arrow" />
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default SimilarItems;
