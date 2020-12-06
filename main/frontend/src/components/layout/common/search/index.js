import React, { useState, useEffect } from "react";

import "./index.css";

function Search(props) {
  const [input, setInput] = useState("");

  useEffect(() => {
    setInput(props.input);
  }, [props.input]);

  return (
    <div className="search-wrapper">
      <input
        type="text"
        className={
          props.Light ? "search-input search-input-light" : "search-input"
        }
        value={input}
        placeholder="search through our collection"
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className={props.Light ? "search-btn search-btn-light" : "search-btn"}
        onClick={() => props.onClick(input)}
      >
        SEARCH
      </button>
    </div>
  );
}

export default Search;
