'use client';

import * as motion from 'motion/react-client';

const IntroBg = () => {
  return (
    <>
      <div className="absolute inset-0 -z-5">
        <div
          className="-z-3 w-full h-full"
          style={{
            backgroundImage: [
              'linear-gradient(to right, rgba(99,102,241,0.12) 1px, transparent 1px)',
              'linear-gradient(to bottom, rgba(99,102,241,0.12) 1px, transparent 1px)',
              'linear-gradient(to right, rgba(99,102,241,0.05) 1px, transparent 1px)',
              'linear-gradient(to bottom, rgba(99,102,241,0.05) 1px, transparent 1px)'
            ].join(', '),
            // eslint-disable-next-line no-inline-styles/no-inline-styles
            backgroundSize: '80px 80px, 80px 80px, 16px 16px, 16px 16px'
          }}
        />
      </div>
      <div className="absolute inset-0 -z-1 bg-[radial-gradient(transparent_65%,white_85%)]" />
      <motion.div
        className="text-[12px] md:text-[18px] absolute -z-2 w-fit h-fit bg-white p-2 pl-3 pr-3 flex flex-col items-center justify-center rounded-[10px] border-1 border-[rgba(0,0,0,0.08)] top-[7%] right-[20%] rotate-4"
        animate={{
          y: [6, -6, 6],
          x: [-2, 3, -2],
          boxShadow: [
            '2px -6px 18px rgba(0,0,0,0.11)',
            '-3px 6px 8px rgba(0,0,0,0.03)',
            '2px -6px 18px rgba(0,0,0,0.11)'
          ]
        }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="text-blue-600/40 [word-spacing:3px]">$ npm run build</div>
        <div className="text-gray-400/40 mt-[2px] [word-spacing:3px]">{'> compiled successfully'}</div>
        <div className="text-gray-400/40 mt-[2px] [word-spacing:3px]">{'> ready in 1.1s'}</div>
      </motion.div>
      <motion.div
        className="max-[550px]:hidden text-[11px] md:text-[16px] absolute -z-2 w-fit h-fit bg-white p-2 pl-3 pr-3 flex flex-col justify-center rounded-[10px] border-1 border-[rgba(0,0,0,0.08)] top-[12%] left-[17%] -rotate-2"
        animate={{
          y: [-3, 5, -3],
          x: [3, -4, 3],
          boxShadow: [
            '-3px 3px 8px rgba(0,0,0,0.03)',
            '4px -5px 16px rgba(0,0,0,0.11)',
            '-3px 3px 8px rgba(0,0,0,0.03)'
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="text-gray-300/40 w-full text-left">{'/* styles.css */'}</div>
        <div className="mt-[2px] w-full text-left">
          <span className="text-sky-500/40">{'.card '}</span>
          <span className="text-slate-400/40">{'{'}</span>
        </div>
        <div className="mt-[2px] w-full text-left pl-4">
          <span className="text-amber-600/40">{'border-radius'}</span>
          <span className="text-slate-400/40">{': '}</span>
          <span className="text-violet-500/40">{'12px'}</span>
          <span className="text-slate-400/40">{';'}</span>
        </div>
        <div className="mt-[2px] w-full text-left pl-4">
          <span className="text-amber-600/40">{'box-shadow'}</span>
          <span className="text-slate-400/40">{': '}</span>
          <span className="text-violet-500/40">{'0 4px 24px'}</span>
          <span className="text-slate-400/40">{';'}</span>
        </div>
        <div className="mt-[2px] w-full text-left">
          <span className="text-slate-400/40">{'}'}</span>
        </div>
      </motion.div>
      <motion.div
        className="max-[550px]:hidden text-[11px] md:text-[16px] absolute -z-2 w-fit h-fit bg-white p-2 pl-3 pr-3 flex flex-col justify-center rounded-[10px] border-1 border-[rgba(0,0,0,0.08)] bottom-[12%] right-[8%] rotate-3"
        animate={{
          y: [2, -2, 2],
          x: [-2, 2, -2],
          boxShadow: [
            '2px -2px 16px rgba(0,0,0,0.11)',
            '-2px 2px 8px rgba(0,0,0,0.03)',
            '2px -2px 16px rgba(0,0,0,0.11)'
          ]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="text-gray-300/40 w-full text-left">{'// package.json'}</div>
        <div className="mt-[2px] w-full text-left">
          <span className="text-slate-400/40">{'{'}</span>
        </div>
        <div className="mt-[2px] w-full text-left pl-4">
          <span className="text-sky-500/40">{'"name"'}</span>
          <span className="text-slate-400/40">{': '}</span>
          <span className="text-amber-600/40">{'"portfolio"'}</span>
          <span className="text-slate-400/40">{','}</span>
        </div>
        <div className="mt-[2px] w-full text-left pl-4">
          <span className="text-sky-500/40">{'"version"'}</span>
          <span className="text-slate-400/40">{': '}</span>
          <span className="text-amber-600/40">{'"0.5.1"'}</span>
          <span className="text-slate-400/40">{','}</span>
        </div>
        <div className="mt-[2px] w-full text-left pl-4">
          <span className="text-sky-500/40">{'"dependencies"'}</span>
          <span className="text-slate-400/40">{': { ... }'}</span>
        </div>
        <div className="mt-[2px] w-full text-left">
          <span className="text-slate-400/40">{'}'}</span>
        </div>
      </motion.div>
      <motion.div
        className="text-[14px] md:text-[22px] absolute -z-2 w-fit h-fit bg-white p-2 pl-3 pr-3 flex flex-col items-center justify-center rounded-[10px] border-1 border-[rgba(0,0,0,0.08)] bottom-[15%] left-[8%] -rotate-6"
        animate={{
          y: [2, -4, 2],
          x: [5, -5, 5],
          boxShadow: [
            '-5px -2px 18px rgba(0,0,0,0.11)',
            '5px 4px 8px rgba(0,0,0,0.03)',
            '-5px -2px 18px rgba(0,0,0,0.11)'
          ]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="text-gray-300/40 w-full text-left">{'// Portfolio.tsx'}</div>
        <div className="mt-[2px] w-full text-left">
          <span className="text-violet-500/40">const </span>
          <span className="text-amber-600/40">Portfolio </span>
          <span className="text-slate-400/40">= () </span>
          <span className="text-violet-500/40">{'=> '}</span>
          <span className="text-slate-400/40">{'{'}</span>
        </div>
        <div className="mt-[2px] w-full text-left pl-6">
          <span className="text-violet-500/40">return </span>
          <span className="text-slate-400/40">{'(<'}</span>
          <span className="text-sky-500/40">div</span>
          <span className="text-slate-400/40">{'>'}</span>
          <span className="text-slate-500/40">...</span>
          <span className="text-slate-400/40">{'</'}</span>
          <span className="text-sky-500/40">div</span>
          <span className="text-slate-400/40">{'>)'}</span>
        </div>
        <div className="mt-[2px] w-full text-left">
          <span className="text-slate-400/40">{'};'}</span>
        </div>
        <div className="mt-[2px] w-full text-left">
          <span className="text-violet-500/40">export </span>
          <span className="text-violet-500/40">default </span>
          <span className="text-amber-600/40">Portfolio</span>
          <span className="text-slate-400/40">;</span>
        </div>
      </motion.div>
    </>
  );
};

export default IntroBg;
