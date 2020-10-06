import React, { useState } from "react";

import "./ProductHighlightDesktop.css";

function ProductHighlightDesktop() {
  const [position, setPosition] = useState(0);

  const elements = [
    {
      price: "123",
      name: "Blue Sofa",
      shortDesc: "Medium sized comfortable Blue Sofa",
    },
    {
      price: "321",
      name: "Blue Sofa",
      shortDesc: "Medium sized comfortable Blue Sofa",
    },
    {
      price: "546",
      name: "Blue Sofa",
      shortDesc: "Medium sized comfortable Blue Sofa",
    },
    {
      price: "458",
      name: "Blue Sofa",
      shortDesc: "Medium sized comfortable Blue Sofa",
    },
    {
      price: "083",
      name: "Blue Sofa",
      shortDesc: "Medium sized comfortable Blue Sofa",
    },
  ];

  const goLeft = () => {
    setPosition(position + 292);
  };

  const goRight = () => {
    setPosition(position - 292);
  };

  return (
    <div>
      <h1 className="highlight-heading">New In Store</h1>
      <div className="highlight-container">
        {elements.map((item, index) => {
          return (
            <div
              key={index}
              className="highlight-slider-element"
              style={{
                transform: `translate(${position}px)`,
              }}
            >
              <h3 className="highlight-price">{item.price}</h3>
              <div>
                <h3 className="highlight-name">{item.name}</h3>
                <h5 className="highlight-desc">{item.shortDesc}</h5>
              </div>
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

        {position !== (elements.length - 1) * -292 ? (
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
