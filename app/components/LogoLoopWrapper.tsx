'use client';

import dynamic from 'next/dynamic';
const LogoLoop = dynamic(() => import('./LogoLoop/LogoLoop'), { ssr: false });

interface LogoLoopWrapperProps {
  logos: { node: React.ReactNode; title: string; href: string }[];
  speed: number;
  direction: 'left' | 'right';
  logoHeight: number;
  gap: number;
  pauseOnHover: boolean;
  scaleOnHover: boolean;
  fadeOut: boolean;
  fadeOutColor: string;
  ariaLabel: string;
}

export default function LogoLoopWrapper(props: LogoLoopWrapperProps) {
  return <LogoLoop {...props} />;
}
