import React, { useState, useEffect } from "react";

import "./index.css";

function Search() {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    if (window.innerWidth >= 1463) {
      setLeft((document.body.clientWidth - 1366) / 2);
    } else if (window.innerWidth >= 750) {
      setLeft(40);
    } else {
      setLeft(10);
    }
  }, []);

  window.addEventListener("resize", () => {
    console.log(window.innerWidth);
    if (window.innerWidth >= 1463) {
      setLeft((document.body.clientWidth - 1366) / 2);
    } else if (window.innerWidth >= 750) {
      setLeft(40);
    } else {
      setLeft(5);
    }
  });

  return (
    <div className="home-search-wrapper" style={{ left: left + "px" }}>
      <input
        type="text"
        className="home-search-input"
        placeholder="home-search through our collection"
      />
      <button className="home-search-btn">SEARCH</button>
    </div>
  );
}

export default Search;
