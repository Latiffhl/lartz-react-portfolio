'use client';

import dynamic from 'next/dynamic';
// Sesuaikan path import komponen PillNav
const PillNav = dynamic(() => import('./PillNav/PillNav'), { ssr: false });

interface PillNavWrapperProps {
  logo: string;
  logoAlt: string;
  items: { label: string; href: string }[];
  activeHref: string;
  className: string;
  ease: string;
  baseColor: string;
  pillColor: string;
  hoveredPillTextColor: string;
  pillTextColor: string;
}

export default function PillNavWrapper(props: PillNavWrapperProps) {
  return <PillNav {...props} />;
}
