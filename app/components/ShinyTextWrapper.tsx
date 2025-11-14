'use client';
import dynamic from 'next/dynamic';
import React, { CSSProperties } from 'react';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText = dynamic(() => import('./ShinyText/ShinyText'), {
  ssr: false,
});

const ShinyTextWrapper: React.FC<ShinyTextProps> = (props) => {
  return <ShinyText {...props} />;
};

export default ShinyTextWrapper;
