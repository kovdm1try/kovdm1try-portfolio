'use client';

import { FC, ReactNode } from 'react';

import * as motion from 'motion/react-client';

import Buttons from './Buttons';

interface Tech {
  name: string;
  icon: ReactNode;
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
  variant: 'light' | 'dark';
}

const TextPart: FC<TextPartProps> = ({
  stack,
  link,
  repo,
  name,
  goal,
  description,
  projectNumber,
  projectsCount,
  variant
}) => {
  const isLight = variant === 'light';

  return (
    <div className="w-full md:w-[40%] md:h-full flex flex-col justify-center px-6 py-8 md:py-0 order-1 md:order-none">
      <div className="font-jetbrains uppercase font-[300] text-primary mb-3 text-[11px] md:text-[13px]">
        — PROJECT / {String(projectNumber).padStart(2, '0')} - {String(projectsCount).padStart(2, '0')}
      </div>
      <div
        className={`text-[38px] md:text-[55px] font-[800] leading-tight ${isLight ? 'text-white' : 'text-gray-900'}`}
      >
        {name}
      </div>
      <div className={`text-[15px] md:text-[18px] mt-1 ${isLight ? 'text-white/60' : 'text-muted-foreground'}`}>
        {goal}
      </div>
      <div className={`text-[14px] md:text-[16px] mt-5 md:mt-8 ${isLight ? 'text-white/80' : 'text-gray-900'}`}>
        {description}
      </div>
      <div className="flex flex-wrap gap-2 mt-5 md:mt-8">
        {stack.map(({ name: skill, icon }) => (
          <motion.div
            key={`${name}-${skill}`}
            className="h-[30px] md:h-[34px] w-fit rounded-[20px] flex border-1 items-center gap-1.5 px-3 cursor-default"
            style={{
              background: isLight ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.5)',
              borderColor: isLight ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)',
              boxShadow: isLight ? '0 1px 3px rgba(255,255,255,0.08)' : '0 1px 3px rgba(0,0,0,0.1)'
            }}
            whileHover={{
              scale: 1.06,
              boxShadow: isLight ? '0 4px 12px rgba(255,255,255,0.2)' : '0 4px 12px rgba(0,0,0,0.18)'
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {icon}
            <span className={`font-[600] text-[12px] md:text-[14px] ${isLight ? 'text-white' : ''}`}>{skill}</span>
          </motion.div>
        ))}
      </div>
      <Buttons link={link} repo={repo} className="hidden md:flex mt-8" />
    </div>
  );
};

export default TextPart;
