'use client';

import { FaReact } from 'react-icons/fa';
import { SiMui, SiRedux, SiSass, SiTypescript, SiVite } from 'react-icons/si';

import ProjectInfo from '@/components/sections/ProjectInfo';
import CubesBG from '@/components/ui/CubesBG';

import { useTranslation } from '@/hooks/useTranslation';

const stack = [
  { name: 'React', icon: <FaReact size={20} color="#61DAFB" /> },
  { name: 'TypeScript', icon: <SiTypescript size={20} color="#3178C6" /> },
  { name: 'Redux', icon: <SiRedux size={20} color="#9B6FD4" /> },
  { name: 'MUI', icon: <SiMui size={20} color="#007FFF" /> },
  { name: 'SCSS', icon: <SiSass size={20} color="#CC6699" /> },
  { name: 'Vite', icon: <SiVite size={20} color="#646CFF" /> }
];

const SquareHelper = () => {
  const t = useTranslation();

  return (
    <div className="w-full min-h-screen relative md:overflow-hidden">
      <CubesBG />
      <ProjectInfo
        textSide={'right'}
        variant={'light'}
        imageTheme={'dark'}
        stack={stack}
        link={'https://kovdm1try.github.io/square1-helper/#/about'}
        repo={'https://github.com/kovdm1try/square1-helper'}
        name={'Square-1 Helper'}
        goal={t.squareHelper.goal}
        description={t.squareHelper.description}
        projectNumber={2}
        projectsCount={2}
        status={'live'}
        images={[
          '/square1-helper/about.png',
          '/square1-helper/algorithms.png',
          '/square1-helper/eo.png',
          '/square1-helper/timer.png'
        ]}
      />
    </div>
  );
};

export default SquareHelper;
