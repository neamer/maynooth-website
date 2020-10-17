import React from 'react';

import './CategoryHero.css';

function CategoryHero(props) {
  return (
    <div className="category-hero-wrapper">
      <h1 className="category-hero-heading">{props.Category}</h1>
    </div>
  )
}

export default CategoryHero
