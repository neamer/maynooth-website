import React from "react";

import "./CategoryHero.css";

function CategoryHero(props) {
  return (
    <div
      className="category-hero-wrapper"
      style={{ backgroundColor: `#393939` }}
    >
      <h1 className="category-hero-heading">{props.Category}</h1>
    </div>
  );
}

export default CategoryHero;
