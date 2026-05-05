'use client';

import { useRef } from 'react';

import * as motion from 'motion/react-client';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';

const COLORS = ['#FA5252', '#FEBC2E', '#3B5BDB', '#28C840', '#845EF7', '#4DABF7', '#FF922B'];

const CUBES = [
  { position: [-5, 3, -3], scale: 0.5, axis: [1, 0.5, 0.3] },
  { position: [5, 2.5, -2], scale: 0.4, axis: [0.3, 1, 0.5] },
  { position: [-4.5, -2, -4], scale: 0.6, axis: [0.5, 0.3, 1] },
  { position: [4.5, -2.5, -3], scale: 0.45, axis: [1, 1, 0.2] },
  { position: [-3, 4, -5], scale: 0.35, axis: [0.2, 0.8, 1] },
  { position: [3.5, -4, -4], scale: 0.55, axis: [0.7, 0.3, 0.8] },
  { position: [0, 4.5, -6], scale: 0.4, axis: [1, 0.2, 0.6] },
  { position: [-5.5, 0, -5], scale: 0.5, axis: [0.4, 1, 0.4] },
  { position: [5.5, 0.5, -4], scale: 0.38, axis: [0.6, 0.6, 1] }
];

interface CubeProps {
  position: number[];
  scale: number;
  color: string;
  axis: number[];
  speed: number;
}

const Cube = ({ position, scale, color, axis, speed }: CubeProps) => {
  const ref = useRef<THREE.Mesh>(null);
  const axisVec = new THREE.Vector3(...axis).normalize();

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotateOnAxis(axisVec, delta * speed);
  });

  return (
    // eslint-disable-next-line react/no-unknown-property
    <mesh ref={ref} position={position as [number, number, number]} scale={scale}>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <boxGeometry args={[1, 1, 1]} />
      {/* eslint-disable-next-line react/no-unknown-property */}
      <meshStandardMaterial color={color} roughness={0.6} metalness={0.5} />
    </mesh>
  );
};

const CubesBG = () => (
  <>
    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#1A275CFF_50%,#0F142FFF)]" />
    <motion.div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: [
          'linear-gradient(to right, rgba(99,102,241,0.08) 1px, transparent 1px)',
          'linear-gradient(to bottom, rgba(99,102,241,0.08) 1px, transparent 1px)'
        ].join(', '),
        // eslint-disable-next-line no-inline-styles/no-inline-styles
        backgroundSize: '25px 25px'
      }}
    />
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        {/* eslint-disable-next-line react/no-unknown-property */}
        <ambientLight intensity={0.6} />
        {/* eslint-disable-next-line react/no-unknown-property */}
        <directionalLight position={[5, 5, 5]} intensity={1} />
        {CUBES.map((cube, i) => (
          <Cube
            key={i}
            position={cube.position}
            scale={cube.scale}
            color={COLORS[i % COLORS.length]}
            axis={cube.axis}
            speed={0.3 + (i % 4) * 0.15}
          />
        ))}
      </Canvas>
    </div>
  </>
);

export default CubesBG;
