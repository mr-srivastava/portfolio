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
import { Navbar } from "../NavBar/Navbar";

const HeroSectionContent: IHeroContent = {
  preface: "Hello there,my name is",
  content: "Aadarsh Srivastava",
  followup: "I do all things web!",
  src: "images/profile.jpg",
};

const OverviewContent: IOverView = {
  yoe: "04",
  description: `Hey, I'm Aadarsh Srivastava. I started as a software engineer back in 2020, working with PwC India.
  I'm currently working at Zolo as Senior Software Engineer. Before that, I was a Full Stack Developer at PwC India for Concourse. I'm originally from Ranchi, India and now living in Bangalore, India.
  I love to explore web and software development. When I'm not working, I am mostly watching YouTube.`,
};

// Main content component with floating navbar
const MainContent = () => {
  return (
    <div className="relative">
      <div className="w-full">
        <section id="home" className="w-full flex justify-center">
          <div className="w-full flex justify-center">
            <HeroSection heroContent={HeroSectionContent} />
          </div>
        </section>
        <section id="overview" className="w-full flex justify-center">
          <div className="max-w-7xl w-full flex justify-center">
            <Overview {...OverviewContent} />
          </div>
        </section>
        <section id="experience" className="w-full flex justify-center">
          <div className="max-w-7xl w-full flex justify-center">
            <WorkExSection />
          </div>
        </section>
        <section id="skills" className="w-full flex justify-center">
          <div className="max-w-7xl w-full flex justify-center">
            <SkillGrid />
          </div>
        </section>
      </div>
      <section id="footer" className="w-full">
        <FooterSection />
      </section>
      <div className="fixed top-0 right-0 h-screen z-50">
        <Navbar className="h-full" />
      </div>
    </div>
  );
};

export default MainContent;
