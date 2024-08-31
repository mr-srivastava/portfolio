"use client";
import React from "react";

import { HeroSection } from "../HeroSection/HeroSection";
import HoverGrid from "../Hovergrid/Hovergrid";
import AboutMe from "../AboutMe/AboutMe";
import WorkEx from "../WorkEx/WorkEx";
import { Navbar } from "../NavBar/Navbar";

// Dummy dashboard component with content
const MainContent = () => {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <WorkEx />
      <HoverGrid />
      <Navbar className="sticky bottom-0 right-0" />
    </>
  );
};

export default MainContent;
