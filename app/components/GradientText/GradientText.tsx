'use client';
import React, { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

export default function GradientText({ children, className = '', colors = ['#ffaa40', '#9c40ff', '#ffaa40'], animationSpeed = 8, showBorder = false }: GradientTextProps) {
  // PERBAIKAN: Gunakan properti 'animation' penuh, bukan hanya 'animationDuration'.
  // Ini akan menimpa animasi statis dari Tailwind dan menggunakan kecepatan dinamis.
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    // MENGGUNAKAN NAMA KEYFRAMES 'gradient' dari tailwind.config.js
    animation: `gradient ${animationSpeed}s linear infinite`,
  };

  return (
    <div className={`relative flex max-w-fit flex-row items-center justify-center rounded-[1.25rem] font-medium backdrop-blur transition-shadow duration-500 overflow-hidden cursor-pointer ${className}`}>
      {showBorder && (
        <div
          // HAPUS kelas 'animate-gradient' karena properti 'animation' sudah disuntikkan via 'style'
          className="absolute inset-0 bg-cover z-0 pointer-events-none"
          style={{
            ...gradientStyle,
            backgroundSize: '300% 100%',
          }}
        >
          <div
            className="absolute inset-0 bg-black rounded-[1.25rem] z-[-1]"
            style={{
              width: 'calc(100% - 2px)',
              height: 'calc(100% - 2px)',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          ></div>
        </div>
      )}
      <div
        // HAPUS kelas 'animate-gradient' dari sini juga.
        className="inline-block relative z-2 text-transparent bg-cover"
        style={{
          ...gradientStyle,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          backgroundSize: '300% 100%',
        }}
      >
        {children}
      </div>
    </div>
  );
}
