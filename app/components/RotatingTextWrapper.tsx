'use client';

import dynamic from 'next/dynamic';
const RotatingText = dynamic(() => import('./RotatingText/RotatingText'), { ssr: false });

interface RotatingTextWrapperProps {
  texts: string[];
  mainClassName: string;
  staggerFrom: 'last';
  initial: any;
  animate: any;
  exit: any;
  staggerDuration: number;
  splitLevelClassName: string;
  transition: any;
  rotationInterval: number;
}

export default function RotatingTextWrapper(props: RotatingTextWrapperProps) {
  return <RotatingText {...props} />;
}
