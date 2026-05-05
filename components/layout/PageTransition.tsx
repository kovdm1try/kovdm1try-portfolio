'use client';

import { FC, ReactNode, useEffect, useRef, useState } from 'react';

import { stagger, useAnimate } from 'motion/react';
import { usePathname, useRouter } from 'next/navigation';

import { useTransitionStore } from '@/store/transitionStore';

const STRIPS = 4;
const SESSION_KEY = 'hasVisited';

const PageTransition: FC<{ children: ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [scope, animate] = useAnimate();
  const [showOverlay, setShowOverlay] = useState(true);
  const isFirstVisit = useRef(true);
  const isManualNav = useRef(false);

  const { setReady, pendingHref, clearPending } = useTransitionStore();

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) {
      isFirstVisit.current = false;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShowOverlay(false);
    }
  }, []);

  // реагируем на navigateTo
  useEffect(() => {
    if (!pendingHref) return;

    const run = async () => {
      isManualNav.current = true;
      clearPending();
      await animate(
        '.strip',
        { y: ['100%', '0%'] },
        { duration: 0.4, ease: [0.76, 0, 0.24, 1], delay: stagger(0.06, { from: 'last' }) }
      );
      router.push(pendingHref);
    };
    run();
  }, [pendingHref]);

  // реагируем на смену pathname
  useEffect(() => {
    setReady(false);

    const run = async () => {
      if (!isManualNav.current) {
        await animate(
          '.strip',
          { y: ['100%', '0%'] },
          { duration: 0.4, ease: [0.76, 0, 0.24, 1], delay: stagger(0.06, { from: 'last' }) }
        );
      }

      isManualNav.current = false;

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

      setTimeout(() => setReady(true), 450);
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
