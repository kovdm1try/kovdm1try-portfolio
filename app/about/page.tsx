'use client';

import AboutInfo from '@/components/sections/AboutInfo';
import Hero from '@/components/sections/Hero/Hero';

import { useScrollSnap } from '@/hooks/useScrollSnap';

const AboutPage = () => {
  const containerRef = useScrollSnap();

  return (
    <div ref={containerRef} className="h-screen overflow-hidden">
      <div className="h-screen overflow-y-auto">
        <Hero />
      </div>
      <div className="h-screen overflow-y-auto">
        <AboutInfo />
      </div>
    </div>
  );
};

export default AboutPage;
