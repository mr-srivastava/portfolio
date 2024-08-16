"use client";
import React from "react";
import HeroCard from "../HeroCard/HeroCard";
import FeaturesSectionDemo2 from "../blocks/hover-grid";
import { HeroSection } from "../HeroSection/HeroSection";

// Dummy dashboard component with content
const MainContent = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSectionDemo2 />

      <div className="w-full bg-neutral-900 p-32 flex justify-center">
        <HeroCard />
      </div>
    </>
  );
};

export default MainContent;
