import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';
import React from 'react';
import Image from 'next/image';
import { Project } from './types';
import { COMPANY_LOGOS } from './projectsData';

interface ProjectCardProps {
  project: Project;
}

const PROJECT_TYPE_LABELS = {
  personal: 'Personal Project',
  job: 'Work Project',
} as const;

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isJobProject = project.type === 'job';
  const companyLogoUrl = isJobProject ? COMPANY_LOGOS[project.companyId] : null;

  return (
    <a
      href={project.link}
      target='_blank'
      rel='noopener noreferrer'
      className='h-[400px] relative flex items-center justify-center'
      aria-label={`View ${project.title} project`}
    >
      <DirectionAwareHover
        imageUrl={project.imageUrl}
        imageClassName={
          project.imagePosition ?
            `object-[${project.imagePosition}]`
          : undefined
        }
      >
        <p className='font-bold text-xl'>{project.title}</p>
        <p className='font-normal text-sm mb-2'>{project.description}</p>
        <span className='inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-full bg-accent text-accent-foreground'>
          {isJobProject && companyLogoUrl && (
            <div className='w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0'>
              <Image
                src={companyLogoUrl}
                alt={`${project.companyId} logo`}
                width={16}
                height={16}
              />
            </div>
          )}
          {PROJECT_TYPE_LABELS[project.type]}
        </span>
      </DirectionAwareHover>
    </a>
  );
};
