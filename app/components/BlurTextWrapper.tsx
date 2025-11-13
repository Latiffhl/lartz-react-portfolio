// app/components/BlurTextWrapper.tsx

'use client';

import dynamic from 'next/dynamic';
// Sesuaikan path import komponen BlurText jika diperlukan
const BlurText = dynamic(() => import('./BlurText/BlurText'), { ssr: false });

interface BlurTextWrapperProps {
  text: string;
  delay: number;
  // KOREKSI DI SINI: Ganti 'chars' menjadi 'letters'
  animateBy: 'words' | 'letters';
  direction: 'top' | 'bottom';
  className: string;
}

export default function BlurTextWrapper(props: BlurTextWrapperProps) {
  // Baris ini sekarang akan aman karena props sudah cocok
  return <BlurText {...props} />;
}
