import React from 'react';
import Image from 'next/image';
import Github from '../../assets/github.svg';
import Globe from '../../assets/globe.svg';

const ProjectCard = (props: any) => {
  const { project } = props;
  return (
    <div className="min-w-full max-w-6xl rounded-md border px-3 py-3 text-left shadow-md">
      <h1 className="py-2 text-3xl">{project.title}</h1>
      <div className="text-l py-2">{project.description}</div>
      <div>
        <a className="px-2" href={project.githubUrl}>
          <Image src={Github} className="" />
        </a>
        <a className="px-2" href={project.projectUrl}>
          <Image src={Globe} className="" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
