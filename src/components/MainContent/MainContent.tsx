"use client";
import React from "react";
import {
  FooterSection,
  HeroSection,
  Overview,
  SkillGrid,
  WorkExSection
} from "../sections";

import { IHeroContent } from "../sections/Hero/types";

const HeroSectionContent: IHeroContent = {
  preface: "Hello there,my name is",
  content: "Aadarsh Srivastava",
  followup: "I do all things web!",
  src: "https://ik.imagekit.io/9omfkfrhk/images/profile.jpg?updatedAt=1725622416485"
};

const OverviewContent: IOverView = {
  yoe: "04",
  description: `Hey, I'm Aadarsh Srivastava. I started as a software engineer back in 2020, working with PwC India.
  I'm currently working at Zolo as Senior Software Engineer. Before that, I was a Full Stack Developer at PwC India for Concourse. I'm originally from Ranchi, India and now living in Bangalore, India.
  I love to explore web and software development. When I'm not working, I am mostly watching YouTube.`
};

// Dummy dashboard component with content
const MainContent = () => {
  return (
    <>
      <HeroSection heroContent={HeroSectionContent} />
      <Overview {...OverviewContent} />
      <WorkExSection />
      <SkillGrid />
      <FooterSection />
    </>
  );
};

export default MainContent;
