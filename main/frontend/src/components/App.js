import React from "react";
import { render } from "react-dom";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import LandingPage from "./layout/landingPage";
import SearchResults from "./layout/searchResults";
import CategoryPage from "./layout/categoryPage";
import ProductDetail from "./layout/productDetail";

import ScrollToTop from "./layout/common/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/search" exact component={SearchResults} />
          <Route path="/shopbyroom/:category" exact component={CategoryPage} />
          <Route path="/product/:productName" exact component={ProductDetail} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

const container = document.getElementById("app");
render(<App />, container);
