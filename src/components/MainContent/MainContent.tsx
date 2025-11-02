import React from 'react';
import {
  FooterSection,
  HeroSection,
  Overview,
  Projects,
  SkillGrid,
  WorkExSection,
} from '../sections';

import { heroSectionQuery, overviewQuery } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import Navbar from '../NavBar/Navbar';

const MainContent = async () => {
  const hero = await client.fetch(heroSectionQuery);
  const overview = await client.fetch(overviewQuery);

  return (
    <>
      <Navbar />
      <HeroSection heroContent={hero} />
      <Overview {...overview} />
      <Projects />
      <WorkExSection />
      <SkillGrid />
      <FooterSection />
    </>
  );
};

export default MainContent;
