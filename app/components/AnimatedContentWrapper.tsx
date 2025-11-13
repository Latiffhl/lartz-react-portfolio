'use client';

import dynamic from 'next/dynamic';
const AnimatedContent = dynamic(() => import('./AnimatedContent/AnimatedContent'), { ssr: false });

interface AnimatedContentWrapperProps {
  children: React.ReactNode;
  distance: number;
  direction: 'horizontal' | 'vertical';
  reverse: boolean;
  duration: number;
  ease: string;
  initialOpacity: number;
  animateOpacity: boolean;
  scale: number;
  threshold: number;
  delay: number;
}

export default function AnimatedContentWrapper(props: AnimatedContentWrapperProps) {
  return <AnimatedContent {...props} />;
}
