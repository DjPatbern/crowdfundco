"use client";
import React from "react";
import { Hero } from "./fragments/Hero";
import Partners from "./fragments/Partners";
import WhatWeOffer from "./fragments/WhatWeOffer";
import InvestSection from "./fragments/InvestSection";
import BuildSection from "./fragments/BuildSection";
import Footer  from "../commons/Footer";
import Faqs from "./fragments/Faqs";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Partners />
      <WhatWeOffer />
      <InvestSection />
      <BuildSection />
      <Faqs />
      <Footer/>
    </div>
  );
};

export default LandingPage;
