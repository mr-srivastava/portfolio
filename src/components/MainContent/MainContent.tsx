"use client";
import React from "react";

import HoverGrid from "../Hovergrid/Hovergrid";
import WorkEx from "../WorkEx/WorkEx";
import { Navbar } from "../NavBar/Navbar";
import { HeroSection, Overview } from "../sections";
import { IHeroContent } from "../sections/Hero/types";

const HeroSectionContent: IHeroContent = {
  preface: "Hello there,my name is",
  content: "Aadarsh Srivastava",
  followup: "I do all things web!",
  src: "/profile.jpg"
};

const OverviewContent: IOverView = {
  yoe: "04",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expeditasaepe, dolor recusandae rerum laborum incidunt perferendis dolorum dolorem id libero possimus nesciunt inventore nihil veritatis dolores fugit reprehenderit iste nulla! Doloribus suscipit quidem non aperiamatque cum vitae fuga quasi sunt ullam, libero sit, ducimus laudantiumab similique error modi qui quam magni nesciunt obcaecati maioresquae. Hic modi deleniti rem totam beatae."
};

// Dummy dashboard component with content
const MainContent = () => {
  return (
    <>
      <HeroSection heroContent={HeroSectionContent} />
      {/* <Overview {...OverviewContent} /> */}
      {/* <WorkEx /> */}
      {/* <HoverGrid /> */}
      {/* <Navbar className='sticky bottom-0 right-0' /> */}
    </>
  );
};

export default MainContent;
