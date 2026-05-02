import { FC } from 'react';

import Image from 'next/image';

import MagneticBackground from '@/components/sections/Hero/MagneticBackground';

interface HeroProps {
  imagePath: string;
  fullname: string;
  jobName: string;
}

const Hero: FC<HeroProps> = ({ imagePath, fullname, jobName }) => {
  return (
    <div className="relative flex flex-col items-center justify-center bg-white w-full min-h-screen gap-1 box-border border-primary border-4 ">
      <MagneticBackground className="absolute top-[4px] bottom-[4px] left-[4px] right-[4px] z-0" />
      <div className="relative min-w-[220px] w-[35%] aspect-square rounded-full overflow-hidden border-primary border-8 z-5">
        <Image src={imagePath} alt="avatar" fill className="w-[100%] object-cover" />
      </div>
      <div className="inline-block w-fit h-fit bg-white pt-0.5 pb-0.5 pl-2 pr-2 text-[36px] text-primary font-bold z-5 text-center">
        {fullname}
      </div>
      <div className="inline-block w-fit h-fit pt-0.5 pb-0.5 pl-2 pr-2 text-[20px] bg-white text-black z-5">
        {jobName}
      </div>
    </div>
  );
};

export default Hero;
