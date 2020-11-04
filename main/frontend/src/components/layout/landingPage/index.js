import React, { useState, useEffect } from "react";

import Header from "../common/header";
import ShoppingBasket from "../shoppingBasket";
import HeroSection from "./heroSection";
import Showcase from "../common/Showcase";
import EmailCapture from "../landingPage/emailCapture";
import SocialsSection from "./socialsSection";
import SecondSection from "../common/SecondSection";
import About from "./about";
import Footer from "../common/footer";

function LandingPage() {
  const [basketIsOpen, setBasketIsOpen] = useState(false);

  useEffect(() => {
    document.title = `Maynooth Furniture - Home`;
  }, []);

  return (
    <>
      {basketIsOpen ? <ShoppingBasket onClick={setBasketIsOpen} /> : ""}
      <Header onClick={setBasketIsOpen} />
      <HeroSection />
      <Showcase Background heading="New in store" />
      <EmailCapture />
      <SocialsSection />
      <SecondSection>
        <Showcase Light heading="Clearance deals" />
        <About />
        <Footer />
      </SecondSection>
    </>
  );
}

export default LandingPage;
