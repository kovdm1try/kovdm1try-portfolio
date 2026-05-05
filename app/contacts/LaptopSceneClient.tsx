'use client';

import { useEffect, useState } from 'react';

import dynamic from 'next/dynamic';

const LaptopSceneInner = dynamic(() => import('./LaptopScene'), {
  ssr: false,
  loading: () => null
});

export default function LaptopScene() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 997px)');
    const update = () => setIsDesktop(mq.matches);
    mq.addEventListener('change', update);
    update();
    return () => mq.removeEventListener('change', update);
  }, []);

  if (!isDesktop) return null;
  return <LaptopSceneInner />;
}
