"use client";
import React from "react";
import { Header } from "../commons/Header";
import { Hero } from "./fragments/Hero";
import Partners from "./fragments/Partners";
import WhatWeOffer from "./fragments/WhatWeOffer";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Partners />
      <WhatWeOffer />
    </div>
  );
};

export default LandingPage;
