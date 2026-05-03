'use client';

import { useEffect, useRef } from 'react';

export const useScrollSnap = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);
  const touchStartY = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const getSections = () => Array.from(container.children) as HTMLElement[];

    const getCurrentIndex = (sections: HTMLElement[]) =>
      sections.findIndex((s) => s.getBoundingClientRect().top >= -(s.clientHeight / 2));

    const navigateTo = (sections: HTMLElement[], nextIndex: number, currentIndex: number) => {
      if (nextIndex === currentIndex) return;
      isScrolling.current = true;
      container.scrollTo({ top: sections[nextIndex].offsetTop, behavior: 'smooth' });
      setTimeout(() => {
        isScrolling.current = false;
      }, 800);
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isScrolling.current) return;

      const sections = getSections();
      const currentIndex = getCurrentIndex(sections);
      const currentSection = sections[currentIndex];

      const atBottom = currentSection.scrollTop + currentSection.clientHeight >= currentSection.scrollHeight - 1;
      const atTop = currentSection.scrollTop <= 0;

      if (e.deltaY > 0 && !atBottom) {
        currentSection.scrollTop += e.deltaY;
        return;
      }

      if (e.deltaY < 0 && !atTop) {
        currentSection.scrollTop += e.deltaY;
        return;
      }

      const nextIndex = e.deltaY > 0 ? Math.min(currentIndex + 1, sections.length - 1) : Math.max(currentIndex - 1, 0);

      navigateTo(sections, nextIndex, currentIndex);
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling.current) return;

      const deltaY = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(deltaY) < 100) return;

      const sections = getSections();
      const currentIndex = getCurrentIndex(sections);
      const currentSection = sections[currentIndex];

      const atBottom = currentSection.scrollTop + currentSection.clientHeight >= currentSection.scrollHeight - 1;
      const atTop = currentSection.scrollTop <= 0;

      if (deltaY > 0 && !atBottom) return;
      if (deltaY < 0 && !atTop) return;

      const nextIndex = deltaY > 0 ? Math.min(currentIndex + 1, sections.length - 1) : Math.max(currentIndex - 1, 0);

      navigateTo(sections, nextIndex, currentIndex);
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return containerRef;
};
