'use client';

import { FaReact } from 'react-icons/fa';
import { SiFramer, SiNextdotjs, SiTailwindcss, SiThreedotjs, SiTypescript } from 'react-icons/si';

import ProjectInfo from '@/components/sections/ProjectInfo';
import PerspectiveGrid from '@/components/ui/PerspectiveGrid';

import { useTranslation } from '@/hooks/useTranslation';

const stack = [
  { name: 'Next.js', icon: <SiNextdotjs size={20} color="#000000" /> },
  { name: 'React', icon: <FaReact size={20} color="#61DAFB" /> },
  { name: 'TypeScript', icon: <SiTypescript size={20} color="#3178C6" /> },
  { name: 'Tailwind', icon: <SiTailwindcss size={20} color="#06B6D4" /> },
  { name: 'Motion', icon: <SiFramer size={20} color="#0055FF" /> },
  { name: 'Three.js', icon: <SiThreedotjs size={20} color="#000000" /> },
  { name: 'Zustand', icon: <span style={{ fontSize: 18, fontWeight: 700, color: '#ff6b35' }}>🐻</span> }
];

const PortfolioSection = () => {
  const t = useTranslation();

  return (
    <div className="w-full min-h-screen relative md:overflow-hidden">
      <PerspectiveGrid />
      <ProjectInfo
        textSide={'left'}
        stack={stack}
        link={'https://kovdm1try-portfolio.vercel.app/'}
        repo={'https://github.com/kovdm1try/kovdm1try-portfolio'}
        name={'kovdm1try-portfolio'}
        goal={t.portfolio.goal}
        description={t.portfolio.description}
        projectNumber={1}
        projectsCount={2}
        status={'live'}
        images={[
          '/kovdm1try-portfolio/main.png',
          '/kovdm1try-portfolio/info.png',
          '/kovdm1try-portfolio/contacts.png',
          '/kovdm1try-portfolio/projects.png'
        ]}
      />
    </div>
  );
};

export default PortfolioSection;
