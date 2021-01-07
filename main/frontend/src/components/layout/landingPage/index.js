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

import LoadProductGroup from "../common/LoadProductGroup";

function LandingPage() {
  const [basketIsOpen, setBasketIsOpen] = useState(false);
  const [newInStore, setNewInStore] = useState(null);
  const [clearanceDeals, setClearanceDeals] = useState(null);

  useEffect(() => {
    document.title = `Maynooth Furniture - Home`;

    LoadProductGroup("new-in-store", setNewInStore);
    LoadProductGroup("clearance-deals", setClearanceDeals);
  }, []);

  return (
    <>
      {basketIsOpen ? <ShoppingBasket onClick={setBasketIsOpen} /> : ""}
      <Header onClick={setBasketIsOpen} />
      <HeroSection />
      <Showcase Background heading="New in store" products={newInStore} />
      <EmailCapture />
      <SocialsSection />
      <SecondSection>
        <Showcase Light heading="Clearance deals" products={clearanceDeals} />
        <About />
        <Footer />
      </SecondSection>
    </>
  );
}

export default LandingPage;
