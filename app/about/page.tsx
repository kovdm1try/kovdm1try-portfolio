import { MdWorkOutline } from 'react-icons/md';

import AboutInfo from '@/components/sections/AboutInfo';
import Hero from '@/components/sections/Hero/Hero';
import OutroSection from '@/components/sections/OutroSection';

const sectionClass = 'h-screen overflow-y-auto [scroll-snap-align:start] [scroll-snap-stop:always]';

const AboutPage = () => (
  <div className="h-screen overflow-y-scroll [scroll-snap-type:y_mandatory] [scroll-behavior:smooth]">
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
