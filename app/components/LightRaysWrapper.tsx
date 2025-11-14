// components/LightRaysWrapper.tsx
'use client'; // Opsional: Tanda ini memastikan wrapper ini juga klien, tetapi next/dynamic lebih kuat.
import dynamic from 'next/dynamic';
import React from 'react';

// Import types dari file LightRays untuk properti yang diteruskan
import type { RaysOrigin } from './LightRays/LightRays';

// Definisikan props yang sama seperti LightRaysProps
interface LightRaysWrapperProps {
  raysOrigin?: RaysOrigin;
  raysColor?: string;
  raysSpeed?: number;
  lightSpread?: number;
  rayLength?: number;
  pulsating?: boolean;
  fadeDistance?: number;
  saturation?: number;
  followMouse?: boolean;
  mouseInfluence?: number;
  noiseAmount?: number;
  distortion?: number;
  className?: string;
}

// Gunakan next/dynamic untuk mengimpor komponen LightRays
// Opsi ssr: false SANGAT PENTING karena LightRays menggunakan WebGL (ogl)
// dan API browser yang tidak tersedia di server.
const LightRays = dynamic(() => import('./LightRays/LightRays'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-transparent" />, // Placeholder saat loading
});

const LightRaysWrapper: React.FC<LightRaysWrapperProps> = (props) => {
  return <LightRays {...props} />;
};

export default LightRaysWrapper;
