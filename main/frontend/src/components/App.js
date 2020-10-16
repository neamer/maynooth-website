import React from "react";
import { render } from "react-dom";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import LandingPage from "./layout/landingPage";
import SearchResults from "./layout/searchResults";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/search" exact component={SearchResults} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

const container = document.getElementById("app");
render(<App />, container);
