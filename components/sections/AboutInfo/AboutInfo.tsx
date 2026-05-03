import Console from '@/components/sections/AboutInfo/Console';

const AboutInfo = () => {
  return (
    <div className="w-full min-h-screen h-fit flex flex-col md:flex-row relative">
      <div className="flex-1 bg-red-500">info</div>
      <Console />
    </div>
  );
};

export default AboutInfo;
