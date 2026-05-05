'use client';

import { FC } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { SiGithub } from 'react-icons/si';

import * as motion from 'motion/react-client';
import clsx from 'clsx';

interface ButtonsProps {
  link: string;
  repo: string;
  className?: string;
}

const Buttons: FC<ButtonsProps> = ({ link, repo, className }) => (
  <div className={clsx('flex gap-3', className)}>
    <motion.a
      href={link}
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2.5 px-5 py-3 rounded-[24px] bg-primary text-white font-[500] text-[14px] md:text-[15px] w-full md:w-auto"
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
      className="flex items-center justify-center gap-2.5 px-5 py-3 rounded-[24px] bg-white text-gray-900 font-[500] text-[14px] md:text-[15px] border border-[rgba(0,0,0,0.08)] w-full md:w-auto"
      style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}
      whileHover={{ y: -2, boxShadow: '0 6px 16px rgba(0,0,0,0.14)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <SiGithub size={16} />
      Репозиторий
    </motion.a>
  </div>
);

export default Buttons;
