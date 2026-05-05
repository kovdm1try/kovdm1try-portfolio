'use client';

import { MdKeyboardArrowDown } from 'react-icons/md';

import * as motion from 'motion/react-client';

interface ScrollButtonProps {
  onClick?: () => void;
}

const ScrollButton = ({ onClick }: ScrollButtonProps) => (
  <button onClick={onClick} className="flex flex-col w-[70px] h-5/6 items-center justify-between cursor-pointer">
    <span className="text-muted-foreground uppercase h-[28px] md:h-[20px]">Scroll</span>
    <motion.div
      className="w-10 aspect-square bg-white rounded-[20px] shadow"
      animate={{ y: [3, -3, 3] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <MdKeyboardArrowDown fontSize={40} color={'var(--primary)'} />
    </motion.div>
    <div className="h-[20px]" />
  </button>
);

export default ScrollButton;
