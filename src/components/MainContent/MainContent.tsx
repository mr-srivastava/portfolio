"use client";
import React from "react";
import HeroCard from "../HeroCard/HeroCard";

// Dummy dashboard component with content
const MainContent = () => {
  return (
    <div className='w-full bg-neutral-900 p-32 flex justify-center'>
      <HeroCard />
    </div>
  );
};

export default MainContent;
