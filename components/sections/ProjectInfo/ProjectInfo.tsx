import { FC, ReactNode } from 'react';

import Buttons from './Buttons';
import TextPart from './TextPart';
import ViewComponent from './ViewComponent';

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
  const text = (
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
  const view = <ViewComponent images={images} status={status} link={link} />;
  const mobileButtons = (
    <Buttons link={link} repo={repo} className="flex md:hidden order-3 w-4/5 pb-10 flex-col self-center" />
  );

  return (
    <div className="absolute inset-0 flex flex-col md:flex-row overflow-y-auto md:overflow-hidden">
      {textSide === 'left' ? (
        <>
          {text}
          {view}
        </>
      ) : (
        <>
          {view}
          {text}
        </>
      )}
      {mobileButtons}
    </div>
  );
};

export default ProjectInfo;
