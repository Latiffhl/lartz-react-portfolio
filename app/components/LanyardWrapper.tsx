'use client';

import dynamic from 'next/dynamic';
// Sesuaikan path import jika Lanyard/Lanyard.tsx ada di dalam folder ./components/Lanyard
const Lanyard = dynamic(() => import('./Lanyard/Lanyard'), { ssr: false });

interface LanyardWrapperProps {
  position: [number, number, number];
  gravity: [number, number, number];
}

export default function LanyardWrapper(props: LanyardWrapperProps) {
  return <Lanyard {...props} />;
}
