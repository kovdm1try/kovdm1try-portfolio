'use client';

import { FC, ReactNode, useEffect } from 'react';

import { stagger, useAnimate } from 'motion/react';

import { useTransitionReady } from '@/components/layout/TransitionContext';

const ContactButtons: FC<{ children: ReactNode[] }> = ({ children }) => {
  const { isReady } = useTransitionReady();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!isReady) return;
    animate(
      '.button-item',
      { opacity: 1, y: 0 },
      { type: 'spring', stiffness: 200, damping: 28, delay: stagger(0.08) }
    );
  }, [isReady]);

  return (
    <div ref={scope} className="w-full h-fit mt-10 flex flex-col gap-6 max-[996px]:items-center">
      {children.map((child, i) => (
        <div key={i} className="button-item w-fit sm:w-fit" style={{ opacity: 0, transform: 'translateY(40px)' }}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default ContactButtons;
