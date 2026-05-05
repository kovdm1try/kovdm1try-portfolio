'use client';

import { MdWorkOutline } from 'react-icons/md';

import AboutInfo from '@/components/sections/AboutInfo';
import Hero from '@/components/sections/Hero/Hero';
import OutroSection from '@/components/sections/OutroSection';

const sectionClass = 'md:h-screen md:overflow-y-auto md:[scroll-snap-align:start] md:[scroll-snap-stop:always]';

const AboutPage = () => (
  <div className="md:h-screen md:overflow-y-scroll md:[scroll-snap-type:y_mandatory] md:[scroll-behavior:smooth]">
    <div className={sectionClass}>
      <Hero />
    </div>
    <div className={sectionClass}>
      <AboutInfo />
    </div>
    <div className={sectionClass}>
      <OutroSection
        title="Смотри"
        accent="проекты."
        subtitle="Интерфейсы, которые я спроектировал и собрал самостоятельно."
        primaryLabel="Проекты"
        primaryHref="/projects"
        primaryIcon={<MdWorkOutline size={18} />}
        secondaryLabel="Связаться"
        secondaryHref="/contacts"
      />
    </div>
  </div>
);

export default AboutPage;
