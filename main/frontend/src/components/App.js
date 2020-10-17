import React from "react";
import { render } from "react-dom";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import LandingPage from "./layout/landingPage";
import SearchResults from "./layout/searchResults";
import CategoryPage from './layout/categoryPage';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/search" exact component={SearchResults} />
          <Route path="/shopbyroom/:category" exact component={CategoryPage} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

const container = document.getElementById("app");
render(<App />, container);
