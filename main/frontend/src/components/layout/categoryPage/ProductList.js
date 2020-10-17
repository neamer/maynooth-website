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

      </div>
    </div>
  )
}

export default ProductList
