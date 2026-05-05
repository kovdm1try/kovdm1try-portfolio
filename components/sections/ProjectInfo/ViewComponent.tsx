'use client';

import { FC, useEffect, useState } from 'react';
import { LuLink } from 'react-icons/lu';

import * as motion from 'motion/react-client';
import clsx from 'clsx';
import { AnimatePresence } from 'motion/react';

interface ViewComponentProps {
  images: string[];
  status: 'live' | 'offline';
  link: string;
  imageTheme: 'light' | 'dark';
}

const ViewComponent: FC<ViewComponentProps> = ({ images, status, link, imageTheme }) => {
  const [index, setIndex] = useState(0);
  const isDark = imageTheme === 'dark';

  useEffect(() => {
    if (images.length <= 1) return;
    let id: ReturnType<typeof setInterval>;
    const start = () => {
      clearInterval(id);
      id = setInterval(() => setIndex((i) => (i + 1) % images.length), 3500);
    };
    const onVisibility = () => {
      if (document.visibilityState === 'visible') start();
      else clearInterval(id);
    };
    start();
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      clearInterval(id);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [images.length]);

  return (
    <div className="flex-1 order-2 md:order-none flex flex-col items-center justify-center p-1.5 pb-8 md:pb-1.5">
      <motion.div
        className="relative w-4/5"
        style={{ perspective: '1000px' }}
        initial={{ opacity: 0, rotateX: 10, rotateY: -14, scale: 0.94 }}
        whileInView={{ opacity: 1, rotateX: 0, rotateY: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0 }}
      >
        <div
          className="flex flex-col h-fit border-1 rounded-[12px] overflow-hidden"
          style={{
            borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgb(220,220,220)',
            boxShadow: isDark ? '0 0 15px rgba(0,0,0,0.4)' : '0 0 15px rgba(0,0,0,0.15)'
          }}
        >
          <div
            className="h-[30px] w-full flex items-center px-3 gap-1.5 border-b shrink-0"
            style={{
              background: isDark ? '#2e3457' : '#F1F3F8',
              borderColor: isDark ? 'rgba(255,255,255,0.08)' : '#BBB'
            }}
          >
            <div className="h-[12px] w-[12px] bg-red-500 rounded-[6px]" />
            <div className="h-[12px] w-[12px] bg-yellow-400 rounded-[6px]" />
            <div className="h-[12px] w-[12px] bg-green-500 rounded-[6px]" />
            <div
              className="flex-1 rounded-[6px] h-[18px] ml-2 px-2 overflow-hidden flex items-center gap-1.5 text-[13px] min-w-0"
              style={{
                background: isDark ? '#252b4a' : '#fff',
                color: isDark ? 'rgba(255,255,255,0.4)' : undefined
              }}
            >
              <LuLink size={13} />
              <span className="font-jetbrains truncate">{link}</span>
            </div>
          </div>
          <div className="w-full aspect-[16/9] relative overflow-hidden bg-muted">
            <AnimatePresence initial={false} mode="sync">
              <motion.img
                key={`img-${index}`}
                src={images[index]}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-100%' }}
                transition={{ duration: 1.1, ease: 'easeInOut' }}
              />
            </AnimatePresence>
          </div>
        </div>
        <div
          className="absolute h-fit w-fit px-4 py-2 bottom-[10px] -left-[20px] flex rounded-[10px] items-center gap-2"
          style={{
            background: isDark ? '#2e3457' : '#fff',
            boxShadow: isDark ? '0 0 15px rgba(0,0,0,0.5)' : '0 0 15px rgba(0,0,0,0.2)'
          }}
        >
          <div className="relative h-[8px] w-[8px]">
            <motion.div
              className={clsx('absolute inset-0 rounded-[4px]', status === 'live' ? 'bg-green-500' : 'bg-red-500')}
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: [1, 2.8], opacity: [0.5, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, ease: 'easeOut', repeatDelay: 0.5 }}
            />
            <div
              className={clsx(
                'relative rounded-[4px] h-full w-full',
                status === 'live' ? 'bg-green-500' : 'bg-red-500'
              )}
            />
          </div>
          <span
            className="font-jetbrains text-[11px] md:text-[13px]"
            style={{ color: isDark ? 'rgba(255,255,255,0.5)' : undefined }}
          >
            {status}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default ViewComponent;
