'use client';

import { MdWorkOutline } from 'react-icons/md';

import AboutInfo from '@/components/sections/AboutInfo';
import Hero from '@/components/sections/Hero/Hero';
import OutroSection from '@/components/sections/OutroSection';

import { useTranslation } from '@/hooks/useTranslation';

const sectionClass = 'h-screen overflow-y-auto [scroll-snap-align:start] [scroll-snap-stop:always]';

const AboutPage = () => {
  const t = useTranslation();

  return (
    <div className="h-screen overflow-y-scroll [scroll-snap-type:y_mandatory] [scroll-behavior:smooth]">
      <div className={sectionClass}>
        <Hero />
      </div>
      <div className={sectionClass}>
        <AboutInfo />
      </div>
      <div className={sectionClass}>
        <OutroSection
          title={t.aboutOutro.title}
          accent={t.aboutOutro.accent}
          subtitle={t.aboutOutro.subtitle}
          primaryLabel={t.aboutOutro.primaryLabel}
          primaryHref="/projects"
          primaryIcon={<MdWorkOutline size={18} />}
          secondaryLabel={t.aboutOutro.secondaryLabel}
          secondaryHref="/contacts"
        />
      </div>
    </div>
  );
};

export default AboutPage;
