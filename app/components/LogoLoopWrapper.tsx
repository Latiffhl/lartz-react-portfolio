'use client';

import dynamic from 'next/dynamic';
import React from 'react'; // Diperlukan untuk React.ReactNode

// 👇 1. EKSPOR INTERFACE ITEM DENGAN PROPERTI WAJIB
export interface LogoItemProp {
  node: React.ReactNode;
  title: string; // Wajib
  href: string; // Wajib
}

// 👇 2. EKSPOR INTERFACE PROPS WRAPPER
export interface LogoLoopWrapperProps {
  logos: LogoItemProp[]; // Gunakan interface yang diekspor
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

const LogoLoop = dynamic(() => import('./LogoLoop/LogoLoop'), { ssr: false });

export default function LogoLoopWrapper(props: LogoLoopWrapperProps) {
  return <LogoLoop {...props} />;
}
