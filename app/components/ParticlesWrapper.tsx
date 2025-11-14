// components/ParticlesWrapper.tsx
'use client';
import dynamic from 'next/dynamic';
import React from 'react';

// Import type props dari komponen Particles
import type { ParticlesProps } from './Particles/Particles'; // Pastikan path ini benar

// Definisikan props yang sama untuk wrapper
interface ParticlesWrapperProps {
  particleCount?: number;
  particleSpread?: number;
  speed?: number;
  particleColors?: string[];
  moveParticlesOnHover?: boolean;
  particleHoverFactor?: number;
  alphaParticles?: boolean;
  particleBaseSize?: number;
  sizeRandomness?: number;
  cameraDistance?: number;
  disableRotation?: boolean;
  className?: string;
}

const Particles = dynamic(() => import('./Particles/Particles'), {
  ssr: false,

  loading: () => <div className="w-full h-full bg-transparent" />,
});

const ParticlesWrapper: React.FC<ParticlesWrapperProps> = (props) => {
  return <Particles {...props} />;
};

export default ParticlesWrapper;
