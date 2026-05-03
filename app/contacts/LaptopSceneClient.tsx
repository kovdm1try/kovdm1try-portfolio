'use client';

import dynamic from 'next/dynamic';

const LaptopScene = dynamic(() => import('./LaptopScene'), {
  ssr: false,
  loading: () => null
});

export default LaptopScene;
