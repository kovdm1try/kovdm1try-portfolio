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
}

const ViewComponent: FC<ViewComponentProps> = ({ images, status, link }) => {
  const [index, setIndex] = useState(0);

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
      <div className="relative w-4/5">
        <div className="flex flex-col h-fit border-1 rounded-[12px] overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.15)] border-[rgb(220,220,220)]">
          <div className="h-[30px] w-full bg-[#F1F3F8] flex items-center px-3 gap-1.5 border-b border-b-[#BBB] shrink-0">
            <div className="h-[12px] w-[12px] bg-red-500 rounded-full" />
            <div className="h-[12px] w-[12px] bg-yellow-400 rounded-full" />
            <div className="h-[12px] w-[12px] bg-green-500 rounded-full" />
            <div className="flex-1 bg-white rounded-[6px] h-[18px] ml-2 px-2 overflow-hidden text-muted-foreground flex items-center gap-1.5 text-[13px] min-w-0">
              <LuLink size={13} />
              <span className="truncate">{link}</span>
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
        <div className="absolute h-fit w-fit px-4 py-2 bg-white bottom-[10px] -left-[20px] flex rounded-[10px] shadow-[0_0_15px_rgba(0,0,0,0.2)] items-center gap-2">
          <div className="relative h-[8px] w-[8px]">
            <motion.div
              className={clsx('absolute inset-0 rounded-full', status === 'live' ? 'bg-green-500' : 'bg-red-500')}
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: [1, 2.8], opacity: [0.5, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, ease: 'easeOut', repeatDelay: 0.5 }}
            />
            <div
              className={clsx('relative rounded-full h-full w-full', status === 'live' ? 'bg-green-500' : 'bg-red-500')}
            />
          </div>
          <span className="text-muted-foreground text-[11px] md:text-[13px]">{status}</span>
        </div>
      </div>
    </div>
  );
};

export default ViewComponent;
