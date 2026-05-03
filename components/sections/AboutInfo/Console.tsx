'use client';

import { useState } from 'react';
import { FaMinus } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { MdCloseFullscreen, MdOutlineOpenInFull } from 'react-icons/md';
import { MdArrowBackIos } from 'react-icons/md';

import * as motion from 'motion/react-client';
import { Variants } from 'motion/react';

import JsonViewer from '@/components/ui/JsonViewer';

const info = {
  name: 'Ковтунов Дмитрий Алексеевич',
  role: 'Frontend Developer',
  location: 'Vladivostok, Russia',
  studying: 'Applied Math & CS @ FEFU',
  passion: ['Frontend Development', 'Interactive UI', 'Web Animations'],
  stack: {
    core: ['TypeScript', 'JavaScript', 'React', 'Next.js'],
    state: ['MobX', 'RTK Query'],
    ui: ['Tailwind CSS', 'MUI', 'SASS', 'Emotion', 'CSS3']
  },
  achievements: [
    'ICPC Far Eastern Russia 2023 — 2nd place',
    'ICPC Far Eastern Russia 2024 — 10th place',
    'ICPC Far Eastern Russia 2025 — 3rd place',
    'ICPC Northern Eurasia Finals 2023, 2025 — Honorable Mention'
  ],

  available: true
};

const ConsoleVariantsDiv: Variants = {
  open: {
    width: '50%',
    justifyContent: 'flex-end'
  },
  close: {
    width: '0%',
    justifyContent: 'flex-end'
  },
  fullscreen: {
    width: '100%',
    justifyContent: 'center'
  }
};

const ConsoleVariants: Variants = {
  fullscreen: {
    height: '95%',
    borderTopRightRadius: '1rem',
    borderBottomRightRadius: '1rem',
    width: '80%'
  },
  collapsed: {
    height: '60%',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    width: '96%'
  }
};

const ReturnButtonVariants: Variants = {
  hidden: {
    maxWidth: 0,
    opacity: 0
  },
  shown: {
    maxWidth: 30,
    opacity: 1
  }
};

const Console = () => {
  const [consoleOpen, setConsoleOpen] = useState<boolean>(true);
  const [consoleFullScreen, setConsoleFullScreen] = useState<boolean>(false);

  const getConsoleVariant = (consoleOpen: boolean, consoleFullscreen: boolean): string => {
    if (consoleOpen && consoleFullscreen) return 'fullscreen';
    if (consoleOpen && !consoleFullscreen) return 'open';
    if (!consoleOpen && consoleFullscreen) return 'close';
    return 'close';
  };

  return (
    <>
      <motion.button
        className="cursor-pointer w-[30px] flex-1 items-center justify-center pl-1.5"
        onClick={() => setConsoleOpen(true)}
        initial={false}
        variants={ReturnButtonVariants}
        animate={consoleOpen ? 'hidden' : 'shown'}
      >
        <MdArrowBackIos className="text-[30px] text-card-foreground" />
      </motion.button>
      <motion.div
        className="flex items-center justify-end"
        initial={false}
        variants={ConsoleVariantsDiv}
        animate={getConsoleVariant(consoleOpen, consoleFullScreen)}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.4 }}
      >
        <motion.div
          className="bg-primary overflow-hidden rounded-tl-2xl rounded-bl-2xl flex justify-end"
          variants={ConsoleVariants}
          initial={false}
          animate={consoleFullScreen ? 'fullscreen' : 'collapsed'}
        >
          <div className="h-full w-[99.3%] p-7 pt-0 bg-[rgb(30,30,30)] rounded-tl-2xl rounded-bl-2xl flex flex-col overflow-hidden">
            <div className="h-[80px] w-full flex items-center justify-start gap-2">
              <div className="h-4 aspect-square rounded-full bg-red-500 flex items-center justify-center">
                <div
                  className="h-full w-full flex items-center justify-center cursor-pointer text-red-500 hover:text-red-900 transition-colors duration-200"
                  onClick={() => {
                    setConsoleOpen(false);
                    setConsoleFullScreen(false);
                  }}
                >
                  <FaXmark className="text-[14px]" />
                </div>
              </div>
              <div className="h-4 aspect-square rounded-full bg-yellow-400 flex items-center justify-center">
                <div
                  className="h-full w-full flex items-center justify-center cursor-pointer text-yellow-400 hover:text-yellow-900 transition-colors duration-200"
                  onClick={() => {
                    setConsoleOpen(false);
                    setConsoleFullScreen(false);
                  }}
                >
                  <FaMinus className="text-[10px]" />
                </div>
              </div>
              <div className="h-4 aspect-square rounded-full bg-green-500 flex items-center justify-center">
                <div
                  className="h-full w-full flex items-center justify-center cursor-pointer text-green-500 hover:text-green-900 transition-colors duration-200"
                  onClick={() => setConsoleFullScreen((prevState) => !prevState)}
                >
                  {consoleFullScreen ? (
                    <MdCloseFullscreen className="text-[10px]" />
                  ) : (
                    <MdOutlineOpenInFull className="text-[10px]" />
                  )}
                </div>
              </div>
              <div className="text-muted-foreground ml-2">info.json</div>
            </div>
            <div className="flex-1 flex items-start justify-start overflow-y-auto">
              <pre className="text-sm">
                <JsonViewer data={info} multilineKeys={['achievements']} />
              </pre>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Console;
