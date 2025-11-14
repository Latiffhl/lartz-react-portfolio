'use client';

import dynamic from 'next/dynamic';

const BlurText = dynamic(() => import('./BlurText/BlurText'), { ssr: false });

interface BlurTextWrapperProps {
  text: string;
  delay: number;

  animateBy: 'words' | 'letters';
  direction: 'top' | 'bottom';
  className: string;
}

export default function BlurTextWrapper(props: BlurTextWrapperProps) {
  return <BlurText {...props} />;
}
