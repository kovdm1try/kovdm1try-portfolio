'use client';

import { JSX } from 'react';

import { useGLTF } from '@react-three/drei';

export function Model(props: Omit<JSX.IntrinsicElements['primitive'], 'object'>) {
  const { scene } = useGLTF('/models/laptop.glb');

  // @ts-ignore
  // eslint-disable-next-line react/no-unknown-property
  return <primitive object={scene} {...props} />;
}

useGLTF.preload('/models/laptop.glb');
