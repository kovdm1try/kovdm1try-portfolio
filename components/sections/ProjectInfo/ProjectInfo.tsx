'use client';

import { FC, ReactNode, useEffect, useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { LuLink } from 'react-icons/lu';
import { SiGithub } from 'react-icons/si';

import * as motion from 'motion/react-client';
import clsx from 'clsx';
import { AnimatePresence } from 'motion/react';

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
  status: 'live' | 'offline';
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

const Buttons: FC<{ link: string; repo: string; className?: string }> = ({ link, repo, className }) => (
  <div className={clsx('flex gap-3', className)}>
    <motion.a
      href={link}
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2.5 px-5 py-3 rounded-full bg-primary text-white font-[500] text-[14px] md:text-[15px] w-full md:w-auto"
      style={{ boxShadow: '0 1px 3px rgba(59,91,219,0.2)' }}
      whileHover={{ y: -2, boxShadow: '0 6px 16px rgba(59,91,219,0.4)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <FiExternalLink size={14} className="shrink-0" />
      Открыть сайт
    </motion.a>
    <motion.a
      href={repo}
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2.5 px-5 py-3 rounded-full bg-white text-gray-900 font-[500] text-[14px] md:text-[15px] border border-[rgba(0,0,0,0.08)] w-full md:w-auto"
      style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}
      whileHover={{ y: -2, boxShadow: '0 6px 16px rgba(0,0,0,0.14)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <SiGithub size={16} />
      Репозиторий
    </motion.a>
  </div>
);

const TextPart: FC<TextPartProps> = ({ stack, link, repo, name, goal, description, projectNumber, projectsCount }) => (
  <div className="w-full md:w-[40%] md:h-full flex flex-col justify-center px-6 py-8 md:py-0 order-1 md:order-none">
    <div className="uppercase font-[300] text-primary mb-3 text-[11px] md:text-[13px]">
      <span>
        — PROJECT / {String(projectNumber).padStart(2, '0')} - {String(projectsCount).padStart(2, '0')}
      </span>
    </div>
    <div className="text-[38px] md:text-[55px] font-[800] text-gray-900 leading-tight">{name}</div>
    <div className="text-muted-foreground text-[15px] md:text-[18px] mt-1">{goal}</div>
    <div className="text-gray-900 text-[14px] md:text-[16px] mt-5 md:mt-8">{description}</div>
    <div className="flex flex-wrap gap-2 mt-5 md:mt-8">
      {stack.map(({ name: skill, icon }) => (
        <motion.div
          key={`${name}-${skill}`}
          className="h-[30px] md:h-[34px] w-fit rounded-[20px] flex border-1 border-[rgba(0,0,0,0.2)] bg-white items-center justify-center gap-1.5 px-3 cursor-default"
          style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}
          whileHover={{ scale: 1.06, boxShadow: '0 4px 12px rgba(0,0,0,0.18)' }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {icon}
          <div className="font-[600] text-[12px] md:text-[14px]">{skill}</div>
        </motion.div>
      ))}
    </div>
    <Buttons link={link} repo={repo} className="hidden md:flex mt-8" />
  </div>
);

interface ViewComponentProps {
  images: string[];
  status: 'live' | 'offline';
  link: string;
}

const ViewComponent: FC<ViewComponentProps> = ({ images, status, link }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 3500);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className="flex-1 order-2 md:order-none flex flex-col items-center justify-center p-1.5 pb-8 md:pb-1.5">
      <div className="relative w-4/5">
        <div className="flex flex-col h-fit border-1 rounded-[12px] overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.15)] border-[rgb(220,220,220)]">
          <div className="h-[30px] w-full bg-[#F1F3F8] flex items-center px-3 gap-1.5 border-b border-b-[#BBB] shrink-0">
            <div className="h-[12px] w-[12px] bg-red-500 rounded-full" />
            <div className="h-[12px] w-[12px] bg-yellow-400 rounded-full" />
            <div className="h-[12px] w-[12px] bg-green-500 rounded-full" />
            <div className="flex-1 bg-white rounded-[6px] h-[18px] ml-2 px-2 overflow-hidden text-muted-foreground flex items-center gap-1.5 text-[13px] min-w-0">
              <LuLink size={13} />
              <span className="truncate">{link}</span>
            </div>
          </div>
          <div className="w-full aspect-[16/9] relative overflow-hidden bg-muted">
            <AnimatePresence initial={false} mode="sync">
              <motion.img
                key={`link-image-${index}`}
                src={images[index]}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-100%' }}
                transition={{ duration: 1.1, ease: 'easeInOut' }}
              />
            </AnimatePresence>
          </div>
        </div>
        <div className="absolute h-fit w-fit pl-4 pr-4 pt-2 pb-2 bg-white bottom-[10px] -left-[20px] flex rounded-[10px] shadow-[0_0_15px_rgba(0,0,0,0.2)] items-center justify-center gap-2">
          <div className="relative h-[8px] w-[8px]">
            <motion.div
              className={clsx('absolute inset-0 rounded-[4px]', status === 'live' ? 'bg-green-500' : 'bg-red-500')}
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: [1, 2.8], opacity: [0.5, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, ease: 'easeOut', repeatDelay: 0.5 }}
            />
            <div
              className={clsx(
                'relative rounded-[4px] h-full w-full',
                status === 'live' ? 'bg-green-500' : 'bg-red-500'
              )}
            />
          </div>
          <span className="text-muted-foreground text-[11px] md:text-[13px]">{status}</span>
        </div>
      </div>
    </div>
  );
};

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

  const mobileButtons = (
    <Buttons link={link} repo={repo} className="flex md:hidden order-3 w-4/5 pb-10 flex-col self-center" />
  );

  return (
    <div className="absolute inset-0 flex flex-col md:flex-row overflow-y-auto md:overflow-hidden">
      {textSide === 'left' ? (
        <>
          {textPart}
          {secondPart}
          {mobileButtons}
        </>
      ) : (
        <>
          {secondPart}
          {textPart}
          {mobileButtons}
        </>
      )}
    </div>
  );
};

export default ProjectInfo;
