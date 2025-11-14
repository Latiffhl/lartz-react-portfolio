'use client';
import dynamic from 'next/dynamic';
import React, { CSSProperties, PropsWithChildren } from 'react';

interface ElectricBorderProps {
  color?: string;
  speed?: number;
  chaos?: number;
  thickness?: number;
  className?: string;
  style?: CSSProperties;
}

const ElectricBorder = dynamic(() => import('./ElectricBorder/ElectricBorder'), {
  ssr: false,
  // Placeholder sederhana saat komponen dimuat (opsional)
  loading: () => <div className="w-full h-full bg-transparent" />,
});

const ElectricBorderWrapper: React.FC<PropsWithChildren<ElectricBorderProps>> = (props) => {
  return <ElectricBorder {...props} />;
};

export default ElectricBorderWrapper;
