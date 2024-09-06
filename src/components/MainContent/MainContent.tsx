"use client";
import React from "react";
import {
  FooterSection,
  HeroSection,
  Overview,
  SkillGrid,
  WorkExSection,
} from "../sections";
import { IHeroContent } from "../sections/Hero/types";

const HeroSectionContent: IHeroContent = {
  preface: "Hello there,my name is",
  content: "Aadarsh Srivastava",
  followup: "I do all things web!",
  src: "images/profile.jpg",
};

const OverviewContent: IOverView = {
  yoe: "04",
  description:
    "Aadarsh is a seasoned full-stack developer with 4 years of experience crafting innovative web applications. Proficient in JavaScript, TypeScript, React, Next.js, Node.js, and more, he's a quick learner and team player. His passion for creating exceptional digital experiences makes him a valuable asset to any team.",
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
