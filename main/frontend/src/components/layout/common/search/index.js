import React from 'react'

import './index.css';

function Search() {
  return (
    <div className="search-wrapper">
      <input
        type="text"
        className="search-input"
        placeholder="search through our collection"
      />
      <button className="search-btn">SEARCH</button>
    </div>
  )
}

export default Search
