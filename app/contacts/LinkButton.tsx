'use client';

import { FC, ReactNode, useState } from 'react';

import * as motion from 'motion/react-client';
import clsx from 'clsx';
import Link from 'next/link';

interface LinkButtonProps {
  href: string;
  text: string;
  icon: ReactNode;
  bgColor: string;
}

const LinkButton: FC<LinkButtonProps> = ({ href, text, icon, bgColor }) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <motion.div
      className="w-[350px] h-[70px]"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 200, damping: 30 }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      <Link
        href={href}
        className={clsx('w-full h-full rounded-[35px] flex items-center justify-center', `bg-${bgColor}`)}
      >
        <motion.div
          animate={hover ? { rotate: [0, -10, 10, -8, 8, -3, 3, 0] } : { rotate: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className={clsx(
            'h-[50px] w-[50px] rounded-[50%] m-[10px] bg-white flex items-center justify-center text-[35px]',
            `text-${bgColor}`
          )}
        >
          {icon}
        </motion.div>
        <div className="text-white font-semibold text-[24px] flex-1 ">{text}</div>
      </Link>
    </motion.div>
  );
};

export default LinkButton;
