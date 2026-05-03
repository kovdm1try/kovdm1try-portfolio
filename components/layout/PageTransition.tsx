'use client';

import { FC, ReactNode, useEffect, useRef, useState } from 'react';

import { stagger, useAnimate } from 'motion/react';
import { usePathname } from 'next/navigation';

import { useTransitionReady } from './TransitionContext';

const STRIPS = 4;
const SESSION_KEY = 'hasVisited';

const PageTransition: FC<{ children: ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const [scope, animate] = useAnimate();
  const [showOverlay, setShowOverlay] = useState(true);
  const isFirstVisit = useRef(true);
  const { setIsReady } = useTransitionReady();

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) {
      isFirstVisit.current = false;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShowOverlay(false);
    }
  }, []);

  useEffect(() => {
    setIsReady(false);

    const run = async () => {
      await animate(
        '.strip',
        { y: ['100%', '0%'] },
        { duration: 0.4, ease: [0.76, 0, 0.24, 1], delay: stagger(0.06, { from: 'last' }) }
      );

      if (isFirstVisit.current) {
        sessionStorage.setItem(SESSION_KEY, 'true');
        isFirstVisit.current = false;
        setShowOverlay(false);
      }

      const outAnim = animate(
        '.strip',
        { y: '-100%' },
        { duration: 0.4, ease: [0.76, 0, 0.24, 1], delay: stagger(0.06, { from: 'last' }) }
      );

      setTimeout(() => setIsReady(true), 450);
      await outAnim;
    };
    run();
  }, [pathname]);

  return (
    <>
      {children}
      {showOverlay && <div className="fixed inset-0 z-40 bg-background pointer-events-none" />}
      <div ref={scope} className="fixed inset-0 z-50 pointer-events-none flex">
        {Array.from({ length: STRIPS }).map((_, i) => (
          <div
            key={`strip-${i}`}
            className="strip h-full flex-1 bg-primary"
            style={{ transform: 'translateY(100%)' }}
          />
        ))}
      </div>
    </>
  );
};

export default PageTransition;
