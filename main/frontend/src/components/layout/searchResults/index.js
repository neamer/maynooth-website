import React, { useEffect } from "react";

import axios from "axios";

import { useParams } from "react-router-dom";

function SearchResults() {
  const params = useParams();

  useEffect(() => {
    // fetch the product information

    let searchInput = params.input.replace(/-/g, " ");

    document.title = `${searchInput} - Maynooth Furniture`;

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        searchInput,
      },
    };

    axios
      .get("/api/products/search/", config)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data, err.response.status);
      });
  }, [params]);

  return (
    <div>
      <h1>SearchResults</h1>
    </div>
  );
}

export default SearchResults;
