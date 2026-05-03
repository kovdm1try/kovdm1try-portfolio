import AboutText from '@/components/sections/AboutInfo/AboutText';
import Console from '@/components/sections/AboutInfo/Console';

const AboutInfo = () => {
  return (
    <div className="w-full min-h-screen h-fit flex flex-col md:flex-row relative">
      <AboutText />
      <Console />
    </div>
  );
};

export default AboutInfo;
