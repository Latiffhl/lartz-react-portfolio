'use client';

import dynamic from 'next/dynamic';
const DecayCard = dynamic(() => import('./DecayCard/DecayCard'), { ssr: false });

interface DecayCardWrapperProps {
  children: React.ReactNode;
  width: number;
  height: number;
  image: string;
}

export default function DecayCardWrapper(props: DecayCardWrapperProps) {
  return <DecayCard {...props} />;
}
