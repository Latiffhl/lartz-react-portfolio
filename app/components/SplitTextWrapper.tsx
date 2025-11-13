'use client';

import dynamic from 'next/dynamic';
const SplitText = dynamic(() => import('./SplitText/SplitText'), { ssr: false });

interface SplitTextWrapperProps {
  text: string;
  className: string;
  delay: number;
  duration: number;
  ease: string;
  splitType: 'chars' | 'words';
  from: any;
  to: any;
  threshold: number;
  rootMargin: string;
}

export default function SplitTextWrapper(props: SplitTextWrapperProps) {
  return <SplitText {...props} />;
}
