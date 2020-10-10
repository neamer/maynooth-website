import React from "react";
import { render } from "react-dom";

import "./App.css";
import About from "./layout/common/About";
import SecondSection from "./layout/common/SecondSection";

import Showcase from "./layout/common/Showcase";

import EmailCapture from "./layout/EmailCapture";
import Header from "./layout/Header";
import HeroSection from "./layout/HeroSection";

import Lorem from "./layout/Lorem";
import SocialsSection from "./layout/SocialsSection";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Showcase Background heading="New in store" />
      <EmailCapture />
      <SocialsSection />
      <SecondSection >
        <Showcase Light heading="Clearance deals" />
        <About />
        <Lorem />
      </SecondSection>
    </>
  );
}

export default App;

const container = document.getElementById("app");
render(<App />, container);
