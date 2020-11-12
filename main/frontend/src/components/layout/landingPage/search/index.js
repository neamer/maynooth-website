import React, { useState, useEffect } from "react";

import "./index.css";

function Search(props) {
  const [left, setLeft] = useState(0);
  const [input, setInput] = useState(null);

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
        placeholder="Search through our collection"
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="home-search-btn" onClick={() => props.onClick(input)}>
        SEARCH
      </button>
    </div>
  );
}

export default Search;
