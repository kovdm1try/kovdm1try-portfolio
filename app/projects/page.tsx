'use client';

import { useRef } from 'react';
import { SiGithub } from 'react-icons/si';

import OutroSection from '@/components/sections/OutroSection';
import ScrollButton from '@/components/ui/ScrollButton';

import IntroBg from '@/app/projects/IntroBg';
import Portfolio from '@/app/projects/projectsSections/Portfolio';
import SquareHelper from '@/app/projects/projectsSections/SquareHelper';

const sectionClass = 'md:h-screen md:overflow-y-auto md:[scroll-snap-align:start] md:[scroll-snap-stop:always]';

const ProjectsPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollToNext = () => containerRef.current?.scrollBy({ top: window.innerHeight, behavior: 'smooth' });

  return (
    <div
      ref={containerRef}
      className="md:h-screen md:overflow-y-scroll md:[scroll-snap-type:y_mandatory] md:[scroll-behavior:smooth]"
    >
      <div className={sectionClass}>
        <div className="w-full min-h-screen flex flex-col relative items-center justify-between box-border p-2.5">
          <IntroBg />
          <div className="h-10" />
          <div className="z-1">
            <div className="font-jetbrains text-muted-foreground w-full text-center text-sm min-[800px]:text-base">{`// PORTFOLIO · 2025 — ${new Date().getFullYear()}`}</div>
            <div className="w-full text-center leading-none mb-3 [word-spacing:0.35em] min-[800px]:[word-spacing:0.6em]">
              <span className="font-[800] text-[52px] min-[800px]:text-[110px] text-gray-900">Мои</span>{' '}
              <span className="font-[800] text-[52px] min-[800px]:text-[110px] text-primary">проекты</span>
            </div>
            <div className="w-full text-center text-[16px] min-[800px]:text-[24px] text-muted-foreground">
              Подборка интерфейсов, которые я спроектировал и собрал
            </div>
            <div className="w-full text-center text-[16px] min-[800px]:text-[24px] text-muted-foreground">
              У каждой секции — свой характер, как и у проекта внутри.
            </div>
            <div className="font-jetbrains text-gray-900 mt-6 min-[800px]:mt-10 w-full text-center text-sm min-[800px]:text-base">
              <span className="text-muted-foreground">Проектов:</span> 02
            </div>
          </div>
          <div className="flex h-[100px] min-[800px]:h-[130px] w-full items-center justify-center">
            <ScrollButton onClick={scrollToNext} />
          </div>
        </div>
      </div>
      <div className={sectionClass}>
        <Portfolio />
      </div>
      <div className={sectionClass}>
        <SquareHelper />
      </div>
      <div className={sectionClass}>
        <OutroSection
          title="Это"
          accent="не всё."
          subtitle="Свежие репозитории и эксперименты — на GitHub."
          primaryLabel="Открыть GitHub"
          primaryHref="https://github.com/kovdm1try"
          primaryIcon={<SiGithub size={16} />}
          secondaryLabel="Связаться"
          secondaryHref="/contacts"
          externalPrimary
        />
      </div>
    </div>
  );
};

export default ProjectsPage;
