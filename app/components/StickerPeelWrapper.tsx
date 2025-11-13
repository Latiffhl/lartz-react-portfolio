'use client';

import dynamic from 'next/dynamic';
// Sesuaikan path import jika StickerPeel/StickerPeel.tsx ada di dalam folder ./components/StickerPeel
const StickerPeel = dynamic(() => import('./StickerPeel/StickerPeel'), { ssr: false });

interface StickerPeelWrapperProps {
  imageSrc: string;
  width: number;
  initialPosition: { x: number; y: number };
  className?: string;
}

export default function StickerPeelWrapper(props: StickerPeelWrapperProps) {
  return <StickerPeel {...props} />;
}
