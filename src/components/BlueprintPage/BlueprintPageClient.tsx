'use client';

import React, { Suspense } from 'react';
import Hero from '@/components/BlueprintPage/sections/Hero';
import Projects from '@/components/BlueprintPage/sections/Projects';
import TechStack from '@/components/BlueprintPage/sections/TechStack';
import Contact from '@/components/BlueprintPage/sections/Contact';
import GridBackground from '@/components/BlueprintPage/components/GridBackground';
import DebugPanel from '@/components/BlueprintPage/components/DebugPanel';
import SectionWrapper from '@/components/BlueprintPage/components/SectionWrapper';
import { PageLoadingSpinner } from '@/components/ui/loading-spinner';
import type { BlueprintPageData } from '@/app/blueprint/types';

interface BlueprintPageClientProps {
  pageData: BlueprintPageData;
  dataSource: 'sanity';
  validationErrors: string[];
  validationWarnings: string[];
  rawData: any;
}

const BlueprintPageClient: React.FC<BlueprintPageClientProps> = ({
  pageData,
  dataSource,
  validationErrors,
  validationWarnings,
  rawData,
}) => {
  return (
    <Suspense fallback={<PageLoadingSpinner />}>
      <div className='min-h-screen bg-background text-foreground relative'>
        <GridBackground />

        <SectionWrapper sectionName='Hero'>
          <Hero data={pageData.hero} />
        </SectionWrapper>

        <SectionWrapper sectionName='Projects'>
          <Projects projects={pageData.projects} />
        </SectionWrapper>

        <SectionWrapper sectionName='Tech Stack'>
          <TechStack
            skills={pageData.techStack.skills}
            devEnvironment={pageData.techStack.devEnvironment}
          />
        </SectionWrapper>

        <SectionWrapper sectionName='Contact'>
          <Contact data={pageData.contact} />
        </SectionWrapper>

        {/* Debug Panel - only shows in development */}
        <DebugPanel
          dataSource={dataSource}
          validationErrors={validationErrors}
          validationWarnings={validationWarnings}
          rawData={rawData}
        />
      </div>
    </Suspense>
  );
};

export default BlueprintPageClient;
