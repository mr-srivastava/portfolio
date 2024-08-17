"use client";
import React from "react";

import { HeroSection } from "../HeroSection/HeroSection";
import HoverGrid from "../Hovergrid/Hovergrid";
import AboutMe from "../AboutMe/AboutMe";
import WorkEx from "../WorkEx/WorkEx";

// Dummy dashboard component with content
const MainContent = () => {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <WorkEx />
      <HoverGrid />
    </>
  );
};

export default MainContent;
