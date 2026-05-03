'use client';

import { Suspense, useEffect, useRef } from 'react';

import * as THREE from 'three';
import { ContactShadows, Environment } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';

import { Model } from './Laptop';

const mouse = { x: 0, y: 0 };

function AnimatedLaptop() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.x * 0.8, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mouse.y * 0.4, 0.05);
  });

  return (
    <group ref={groupRef}>
      <Model scale={0.55} position={[0, -0.7, 0]} rotation={[Math.PI / 4, 0, 0]} />
    </group>
  );
}

export default function LaptopScene() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
        {/* eslint-disable-next-line react/no-unknown-property */}
        <ambientLight intensity={0.6} />
        {/* eslint-disable-next-line react/no-unknown-property */}
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        {/* eslint-disable-next-line react/no-unknown-property */}
        <directionalLight position={[-5, -2, -3]} intensity={0.3} />
        <Suspense fallback={null}>
          <Environment preset="night" />
          <AnimatedLaptop />
          <ContactShadows position={[0, -2.6, 0]} opacity={0.4} scale={10} blur={2} />
        </Suspense>
      </Canvas>
    </div>
  );
}
