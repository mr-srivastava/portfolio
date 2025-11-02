import React from 'react';
import { ProjectCard } from './ProjectCard';
import { projectsData } from './projectsData';

export default function Projects() {
  return (
    <div
      id='projects'
      className='w-full p-10 lg:p-24 flex flex-col items-center justify-center'
    >
      <div
        className='font-display text-center drop-shadow-sm text-blue-500 w-fit tracking-[-2px] text-6xl font-bold mb-10'
        style={{ filter: 'blur(0px)', opacity: 1, transform: 'none' }}
      >
        <div
          className='lg:mb-1 pb-8 md:pb-0'
          style={{
            paddingRight: '8px',
            display: 'inline-block',
          }}
        >
          Projects
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl'>
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
