import ScrollButton from '@/components/ui/ScrollButton';

import IntroBg from '@/app/projects/IntroBg';
import Portfolio from '@/app/projects/projectsSections/Portfolio';

const ProjectsPage = () => {
  return (
    <div>
      <div className="w-full min-h-screen flex flex-col relative items-center justify-between box-border p-2.5">
        <IntroBg />
        <div className="h-10" />
        <div className="z-1">
          <div className="text-muted-foreground w-full text-center text-sm min-[800px]:text-base">{`// PORTFOLIO · 2025 — ${new Date().getFullYear()}`}</div>
          <div className="w-full text-center leading-none mb-3">
            <span className="font-[800] text-[52px] min-[800px]:text-[110px] text-gray-900">Мои</span>{' '}
            <span className="font-[800] text-[52px] min-[800px]:text-[110px] text-primary">проекты</span>
          </div>
          <div className="w-full text-center text-[16px] min-[800px]:text-[24px] text-muted-foreground">
            Подборка интерфейсов, которые я спроектировал и собрал
          </div>
          <div className="w-full text-center text-[16px] min-[800px]:text-[24px] text-muted-foreground">
            У каждой секции — свой характер, как и у проекта внутри.
          </div>
          <div className="text-gray-900 mt-6 min-[800px]:mt-10 w-full text-center text-sm min-[800px]:text-base">
            <span className="text-muted-foreground">Проектов:</span> 02
          </div>
        </div>
        <div className="flex h-[100px] min-[800px]:h-[130px] w-full items-center justify-center">
          <ScrollButton />
        </div>
      </div>
      <Portfolio />
    </div>
  );
};

export default ProjectsPage;
