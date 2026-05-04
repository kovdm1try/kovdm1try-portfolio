'use client';

import { FC, ReactNode } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { SiGithub } from 'react-icons/si';

import * as motion from 'motion/react-client';

interface Tech {
  name: string;
  icon: ReactNode;
}

interface ProjectInfoProps {
  textSide: 'left' | 'right';
  stack: Tech[];
  images: string[];
  link: string;
  repo: string;
  name: string;
  goal: string;
  description: string;
  projectNumber: number;
  projectsCount: number;
  status: 'active' | 'inactive';
}

interface TextPartProps {
  stack: Tech[];
  link: string;
  repo: string;
  name: string;
  goal: string;
  description: string;
  projectNumber: number;
  projectsCount: number;
}

const TextPart: FC<TextPartProps> = ({ stack, link, repo, name, goal, description, projectNumber, projectsCount }) => (
  <div className="h-full w-full md:w-[40%] flex flex-col justify-center pl-6 pr-6 order-1 md:order-none">
    <div className="uppercase font-[300] text-primary mb-3">
      <span>
        — PROJECT / {String(projectNumber).padStart(2, '0')} - {String(projectsCount).padStart(2, '0')}
      </span>
    </div>
    <div className="text-[55px] font-[800] text-gray-900">{name}</div>
    <div className="text-muted-foreground text-[18px]">{goal}</div>
    <div className="text-gray-900 text-[16px] mt-8">{description}</div>
    <div className="flex flex-wrap gap-2 mt-8">
      {stack.map(({ name: skill, icon }) => (
        <motion.div
          key={`${name}-${skill}`}
          className="h-[34px] w-fit p-[3px] rounded-[20px] flex border-1 border-[rgba(0,0,0,0.2)] bg-white items-center justify-center gap-1.5 pl-3 pr-3 cursor-default"
          style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}
          whileHover={{ scale: 1.06, boxShadow: '0 4px 12px rgba(0,0,0,0.18)' }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {icon}
          <div className="font-[600] text-[14px]">{skill}</div>
        </motion.div>
      ))}
    </div>
    <div className="flex gap-3 mt-8">
      <motion.a
        href={link}
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-primary text-white font-[500] text-[15px]"
        style={{ boxShadow: '0 1px 3px rgba(59,91,219,0.2)' }}
        whileHover={{ y: -2, boxShadow: '0 6px 16px rgba(59,91,219,0.4)' }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <FiExternalLink size={16} />
        Открыть сайт
      </motion.a>
      <motion.a
        href={repo}
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-white text-gray-900 font-[500] text-[15px] border border-[rgba(0,0,0,0.08)]"
        style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}
        whileHover={{ y: -2, boxShadow: '0 6px 16px rgba(0,0,0,0.14)' }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <SiGithub size={16} />
        Репозиторий
      </motion.a>
    </div>
  </div>
);

interface ViewComponentProps {
  images: string[];
  status: 'active' | 'inactive';
  link: string;
}

const ViewComponent: FC<ViewComponentProps> = ({ images, status, link }) => (
  <div className="flex-1 order-2 md:order-none" />
);

const ProjectInfo: FC<ProjectInfoProps> = ({
  textSide,
  stack,
  images,
  link,
  repo,
  name,
  goal,
  description,
  projectNumber,
  projectsCount,
  status
}) => {
  const textPart = (
    <TextPart
      stack={stack}
      link={link}
      repo={repo}
      name={name}
      goal={goal}
      description={description}
      projectNumber={projectNumber}
      projectsCount={projectsCount}
    />
  );

  const secondPart = <ViewComponent images={images} status={status} link={link} />;

  return (
    <div className="absolute inset-0 flex flex-col md:flex-row">
      {textSide === 'left' ? (
        <>
          {textPart}
          {secondPart}
        </>
      ) : (
        <>
          {secondPart}
          {textPart}
        </>
      )}
    </div>
  );
};

export default ProjectInfo;
