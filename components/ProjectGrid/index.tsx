import ProjectCard from '@Components/ProjectCard';
import projectsMetadata from '@Data/projectsMetadata';
import React from 'react';

const ProjectGrid = (props: any) => {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {projectsMetadata.map((project: any, i: number) => (
        <ProjectCard project={project} key={i} />
      ))}
    </div>
  );
};

export default ProjectGrid;
