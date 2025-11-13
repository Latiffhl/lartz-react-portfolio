'use client';

import dynamic from 'next/dynamic';
// Sesuaikan path import jika Squares/Squares.tsx ada di dalam folder ./components/Squares
const Squares = dynamic(() => import('./Squares/Squares'), { ssr: false });

interface SquaresWrapperProps {
  speed: number;
  squareSize: number;
  direction: 'up' | 'down' | 'left' | 'right' | 'diagonal';
  borderColor: string;
  hoverFillColor: string;
}

export default function SquaresWrapper(props: SquaresWrapperProps) {
  return <Squares {...props} />;
}
