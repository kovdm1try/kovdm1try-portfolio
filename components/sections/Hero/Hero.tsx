import * as motion from 'motion/react-client';
import { Variants } from 'motion/react';
import Image from 'next/image';

import MagneticBackground from '@/components/sections/Hero/MagneticBackground';

const ImageVariants: Variants = {
  hide: {
    opacity: 0,
    scale: 0.8
  },
  show: {
    opacity: 1,
    scale: 1
  }
};

const TextVariants: Variants = {
  hide: {
    opacity: 0,
    y: 50
  },
  show: {
    opacity: 1,
    y: 0
  }
};

const Hero = () => {
  return (
    <motion.div
      initial="hide"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full min-h-screen flex flex-col items-center justify-center relative"
    >
      <MagneticBackground />
      <motion.div
        variants={ImageVariants}
        transition={{ type: 'spring', stiffness: 200, damping: 30 }}
        className="z-1 flex items-center justify-center w-[270px] h-[270px] p-[3px] md:w-[412px] md:h-[412px] md:p-[6px] bg-[conic-gradient(from_45deg,color-mix(in_srgb,var(--color-chart-1)_90%,white),var(--color-chart-2),var(--color-chart-3),var(--color-chart-2),var(--color-chart-3),color-mix(in_srgb,var(--color-chart-1)_90%,white))] [box-shadow:0_0_20px_color-mix(in_srgb,var(--color-chart-1)_50%,transparent),0_0_40px_color-mix(in_srgb,var(--color-chart-2)_50%,transparent),0_0_60px_color-mix(in_srgb,var(--color-chart-3)_50%,transparent)] rounded-[50%]"
      >
        <div className="w-full h-full rounded-[50%] overflow-hidden border-solid">
          <Image src={'/avatar.jpg'} alt="avatar" width={400} height={400} />
        </div>
      </motion.div>
      <motion.div
        variants={TextVariants}
        transition={{ type: 'spring', stiffness: 200, damping: 30 }}
        className="relative z-1 font-bold text-[46px] md:text-[60px] w-full text-center bg-[radial-gradient(var(--color-chart-2)_10%,var(--color-chart-1),var(--color-chart-3))] bg-clip-text text-transparent leading-tight mt-1"
      >
        Ковтунов Дмитрий
      </motion.div>
      <motion.div
        transition={{ type: 'spring', stiffness: 200, damping: 30, delay: 0.07 }}
        variants={TextVariants}
        className="relative z-1 font-semibold text-muted-foreground text-[16px] md:text-[20px]"
      >
        Frontend-разработчик
      </motion.div>
    </motion.div>
  );
};

export default Hero;
