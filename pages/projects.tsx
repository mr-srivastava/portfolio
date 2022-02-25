import ProjectGrid from '@Components/ProjectGrid';
import HomeLayout from '@Layouts/HomeLayout';
import React from 'react';

function Projects() {
  return (
    <HomeLayout centerChildren={false}>
      <h1 className="p-4 text-4xl font-bold">Projects</h1>
      <p>This page lists some of my projects.</p>
      <div className="my-6">
        <ProjectGrid />
      </div>
    </HomeLayout>
  );
}

export default Projects;
