import React from "react";

import Header from '../common/header';
import HeroSection from './heroSection';
import Showcase from '../common/Showcase';
import EmailCapture from '../landingPage/emailCapture';
import SocialsSection from './socialsSection';
import SecondSection from '../common/SecondSection'
import About from './about';
import Footer from '../common/footer';

function LandingPage() {
  return (
    <>
      <Header />
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