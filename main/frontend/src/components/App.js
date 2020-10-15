import React from "react";
import { render } from "react-dom";

import "./App.css";

import LandingPage from './layout/landingPage';

function App() {
  return (
    <>
      <LandingPage />
    </>
  );
}

export default App;

const container = document.getElementById("app");
render(<App />, container);
