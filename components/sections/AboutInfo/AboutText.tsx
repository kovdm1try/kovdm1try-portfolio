'use client';

import * as motion from 'motion/react-client';
import { stagger, Variants } from 'motion/react';

import { useTranslation } from '@/hooks/useTranslation';

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { delayChildren: stagger(0.15, { startDelay: 0.1 }) }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 24 } }
};

const AboutText = () => {
  const t = useTranslation();

  return (
    <motion.div
      className="flex-1 flex flex-col items-center justify-center p-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div variants={itemVariants} className="font-bold text-[24px] text-muted-foreground w-full text-left">
        {t.about.sectionLabel}
      </motion.div>
      <motion.div variants={itemVariants} className="font-bold text-[40px] text-primary w-full text-left mb-4">
        {t.about.headline}
      </motion.div>
      <motion.div variants={itemVariants} className="text-[24px] text-gray-700 w-full text-left">
        {t.about.line1}
      </motion.div>
      <motion.div variants={itemVariants} className="text-[24px] text-gray-700 w-full text-left mt-6">
        {t.about.line2}
      </motion.div>
    </motion.div>
  );
};

export default AboutText;
