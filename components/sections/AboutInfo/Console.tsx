'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { FaMinus } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { MdArrowBackIos, MdCloseFullscreen, MdKeyboardArrowUp, MdOutlineOpenInFull } from 'react-icons/md';

import * as motion from 'motion/react-client';
import { Variants } from 'motion/react';

import { useTypewriter } from '@/hooks/useTypewriter';

const info = {
  name: 'Ковтунов Дмитрий',
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

const fullinfo = {
  name: 'Ковтунов Дмитрий Алексеевич',
  role: 'Frontend Developer',
  location: 'Vladivostok, Russia',
  studying: 'Applied Math & CS @ FEFU, 2022 — present',
  passion: ['Frontend Development', 'Interactive UI', 'Web Animations'],

  experience: [
    {
      company: 'АТБ — Азиатско-Тихоокеанский Банк',
      role: 'Frontend Developer',
      period: 'Dec 2025 — Mar 2026',
      stack: ['TypeScript', 'React', 'MobX', 'TanStack Query', 'TanStack Virtual', 'Webpack 5', 'SCSS', 'Jest']
    }
  ],
  stack: {
    core: ['TypeScript', 'JavaScript', 'React', 'Next.js'],
    state: ['MobX', 'RTK Query'],
    ui: ['Tailwind CSS', 'MUI', 'SASS', 'Emotion', 'CSS3'],
    animation: ['Framer Motion'],
    routing: ['React Router v6'],
    build: ['Vite', 'Webpack', 'Babel', 'SWC', 'PostCSS'],
    testing: ['Jest'],
    backend: ['Express.js', 'Python', 'Flask'],
    tools: ['Git', 'Docker', 'Axios', 'Day.js', 'ESLint', 'Prettier']
  },
  achievements: [
    'ICPC Far Eastern Russia 2023 — 2nd place',
    'ICPC Far Eastern Russia 2024 — 10th place',
    'ICPC Far Eastern Russia 2025 — 3rd place',
    'ICPC Northern Eurasia Finals 2023, 2025 — Honorable Mention',
    'Hackathon ДВФУ 2025 — 1st place',
    'Code Work Challenge 2025'
  ],
  available: true
};

interface JsonObject {
  [key: string]: JsonValue;
}
type JsonArray = Array<JsonValue>;
type JsonValue = string | number | boolean | JsonObject | JsonArray;

const toJsonString = (data: JsonValue, indent = 0, multilineKeys: string[] = [], multiline = false): string => {
  const pad = '  '.repeat(indent);
  const inner = '  '.repeat(indent + 1);
  if (typeof data !== 'object') return typeof data === 'string' ? `"${data}"` : String(data);
  if (Array.isArray(data)) {
    if (multiline)
      return `[\n${data.map((v) => `${inner}${toJsonString(v, indent + 1, multilineKeys)}`).join(',\n')}\n${pad}]`;
    return `[${data.map((v) => toJsonString(v, indent + 1, multilineKeys)).join(', ')}]`;
  }
  const entries = Object.entries(data);
  return `{\n${entries.map(([k, v], i) => `${inner}"${k}": ${toJsonString(v, indent + 1, multilineKeys, multilineKeys.includes(k))}${i !== entries.length - 1 ? ',' : ''}`).join('\n')}\n${pad}}`;
};

const highlightJson = (text: string): ReactNode[] => {
  const result: ReactNode[] = [];
  const tokenRegex = /"(?:[^"\\]|\\.)*"|true|false|null|-?\d+(?:\.\d+)?/g;
  let lastIndex = 0;
  let i = 0;

  const push = (content: string, cls: string) =>
    result.push(
      <span key={`word-content-${i++}`} className={cls}>
        {content}
      </span>
    );

  let match: RegExpExecArray | null;
  while ((match = tokenRegex.exec(text)) !== null) {
    if (match.index > lastIndex) push(text.slice(lastIndex, match.index), 'text-[#D4D4D4]');

    const token = match[0];
    const isKey =
      token.startsWith('"') &&
      text
        .slice(match.index + token.length)
        .trimStart()
        .startsWith(':');

    if (isKey) push(token, 'text-[#9CDCFE]');
    else if (token.startsWith('"')) push(token, 'text-[#CE9178]');
    else if (token === 'true' || token === 'false' || token === 'null') push(token, 'text-[#569CD6]');
    else push(token, 'text-[#B5CEA8]');

    lastIndex = match.index + token.length;
  }

  if (lastIndex < text.length)
    result.push(
      <span key={i++} className="text-[#D4D4D4]">
        {text.slice(lastIndex)}
      </span>
    );

  return result;
};

const ConsoleVariantsDiv: Variants = {
  open: { width: '50%' },
  close: { width: '0%' },
  fullscreen: { width: '80%' },
  mobile: { width: '100%' }
};

const ConsoleVariants: Variants = {
  fullscreen: {
    height: '90vh',
    borderTopRightRadius: '1rem',
    borderBottomRightRadius: '1rem',
    width: '95%',
    marginRight: '1.5rem'
  },
  open: {
    height: 'auto',
    minHeight: '200px',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    width: '96%',
    marginRight: 0
  },
  mobileOpen: {
    height: 'auto',
    borderTopRightRadius: '1rem',
    borderBottomRightRadius: '1rem',
    width: '100%',
    marginRight: 0
  },
  close: {
    height: 0,
    borderTopRightRadius: '1rem',
    borderBottomRightRadius: '1rem',
    width: '100%',
    marginRight: 0
  }
};

const DesktopReturnButtonVariants: Variants = {
  hidden: { maxWidth: 0, opacity: 0 },
  shown: { maxWidth: 30, opacity: 1 }
};

const MobileRestoreButtonVariants: Variants = {
  hidden: { height: 0, opacity: 0 },
  shown: { height: 40, opacity: 1 }
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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const update = () => setIsMobile(mq.matches);
    mq.addEventListener('change', update);
    update();
    return () => mq.removeEventListener('change', update);
  }, []);

  const consoleRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = consoleRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const jsonString = toJsonString(consoleFullScreen ? fullinfo : info, 0, ['achievements']);
  const { displayed, done } = useTypewriter(jsonString, inView, 4, 16);

  return (
    <>
      <motion.button
        className="hidden md:flex cursor-pointer w-[30px] self-center items-center justify-center pl-1.5"
        onClick={() => setConsoleOpen(true)}
        initial={false}
        variants={DesktopReturnButtonVariants}
        animate={consoleOpen ? 'hidden' : 'shown'}
        transition={{ type: 'spring', stiffness: 280, damping: 32 }}
      >
        <MdArrowBackIos className="text-[30px] text-card-foreground" />
      </motion.button>
      <motion.div
        className="flex flex-col overflow-hidden md:self-center md:items-end items-stretch"
        initial={false}
        variants={ConsoleVariantsDiv}
        animate={isMobile ? 'mobile' : getConsoleVariant(consoleOpen, consoleFullScreen)}
        transition={{ type: 'spring', stiffness: 280, damping: 32 }}
      >
        <motion.button
          className="flex md:hidden w-full items-center justify-center cursor-pointer overflow-hidden"
          onClick={() => setConsoleOpen(true)}
          initial={false}
          variants={MobileRestoreButtonVariants}
          animate={consoleOpen ? 'hidden' : 'shown'}
          transition={{ type: 'spring', stiffness: 280, damping: 32 }}
        >
          <MdKeyboardArrowUp className="text-[30px] text-card-foreground" />
        </motion.button>
        <motion.div
          className="bg-primary overflow-hidden rounded-tl-2xl rounded-bl-2xl flex justify-end"
          variants={ConsoleVariants}
          initial={false}
          animate={
            !consoleOpen && isMobile ? 'close' : isMobile ? 'mobileOpen' : consoleFullScreen ? 'fullscreen' : 'open'
          }
          transition={{ type: 'spring', stiffness: 220, damping: 28 }}
        >
          <div
            ref={consoleRef}
            className="w-[99.3%] p-7 pt-0 bg-[rgb(30,30,30)] rounded-tl-2xl rounded-bl-2xl rounded-tr-2xl rounded-br-2xl md:rounded-tr-none md:rounded-br-none flex flex-col"
          >
            <div className="h-[80px] w-full flex items-center justify-start gap-2">
              <div className="h-4 aspect-square rounded-[50%] bg-red-500 flex items-center justify-center">
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
              <div className="h-4 aspect-square rounded-[50%] bg-yellow-400 flex items-center justify-center">
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
              <div
                className={`h-4 aspect-square rounded-[50%] flex items-center justify-center ${isMobile ? 'bg-gray-400' : 'bg-green-500'}`}
              >
                <div
                  className={`h-full w-full flex items-center justify-center transition-colors duration-200 ${isMobile ? 'cursor-not-allowed text-gray-500' : 'cursor-pointer text-green-500 hover:text-green-900'}`}
                  onClick={isMobile ? undefined : () => setConsoleFullScreen((prevState) => !prevState)}
                >
                  {consoleFullScreen ? (
                    <MdCloseFullscreen className="text-[10px]" />
                  ) : (
                    <MdOutlineOpenInFull className="text-[10px]" />
                  )}
                </div>
              </div>
              <div className="text-muted-foreground ml-2">{consoleFullScreen ? 'full-info.json' : 'info.json'}</div>
            </div>
            <div className="flex-1 flex items-start justify-start overflow-y-auto">
              <pre className="text-sm">
                {highlightJson(displayed)}
                {!done && <span className="text-white">|</span>}
              </pre>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Console;
