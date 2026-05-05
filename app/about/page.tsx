'use client';

import AboutInfo from '@/components/sections/AboutInfo';
import Hero from '@/components/sections/Hero/Hero';

const sectionClass = 'md:h-screen md:overflow-y-auto md:[scroll-snap-align:start] md:[scroll-snap-stop:always]';

const AboutPage = () => (
  <div className="md:h-screen md:overflow-y-scroll md:[scroll-snap-type:y_mandatory] md:[scroll-behavior:smooth]">
    <div className={sectionClass}>
      <Hero />
    </div>
    <div className={sectionClass}>
      <AboutInfo />
    </div>
  </div>
);

export default AboutPage;
