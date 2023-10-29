"use client";
import React from "react";
import { Header, Footer } from "../commons/Header";
import { Hero } from "./fragments/Hero";
import Partners from "./fragments/Partners";
import WhatWeOffer from "./fragments/WhatWeOffer";
import InvestSection from "./fragments/InvestSection";
import BuildSection from "./fragments/BuildSection";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Partners />
      <WhatWeOffer />
      <InvestSection />
      <BuildSection />
      <Footer/>
    </div>
  );
};

export default LandingPage;
