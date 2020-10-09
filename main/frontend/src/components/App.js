import React from "react";
import { render } from "react-dom";

import "./App.css";

import Showcase from "./layout/common/Showcase";
import EmailCapture from "./layout/EmailCapture";
import Header from "./layout/Header";
import HeroSection from "./layout/HeroSection";
import Lorem from "./layout/Lorem";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Showcase />
      <EmailCapture />
      <Lorem />
    </>
  );
}

export default App;

const container = document.getElementById("app");
render(<App />, container);
