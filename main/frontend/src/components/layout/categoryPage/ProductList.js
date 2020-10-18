import React from 'react'

import Search from '../common/search'

import './ProductList.css';

function ProductList() {
  return (
    <div className="content-wrapper product-list-wrapper">
      <div className="filter-grid">
        <Search />
        <div className="filter-reorder">newest</div>
      </div>
      <div className="results-wrapper">
        <div className="results-grid">
          <div className="result-product-wrapper product-left"></div>
          <div className="result-product-wrapper product-middle"></div>
          <div className="result-product-wrapper product-right"></div>

          <div className="result-product-wrapper product-left"></div>
          <div className="result-product-wrapper product-middle"></div>
          <div className="result-product-wrapper product-right"></div>

          <div className="result-product-wrapper product-left"></div>
          <div className="result-product-wrapper product-middle"></div>
          <div className="result-product-wrapper product-right"></div>

          <div className="result-product-wrapper product-left"></div>
          <div className="result-product-wrapper product-middle"></div>
          <div className="result-product-wrapper product-right"></div>
        </div>
      </div>
    </div>
  )
}

export default ProductList
