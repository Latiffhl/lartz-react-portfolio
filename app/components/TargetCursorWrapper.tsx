'use client';

import dynamic from 'next/dynamic';

// Import komponen TargetCursor secara dinamis di sini
const TargetCursor = dynamic(() => import('./TargetCursor/TargetCursor'), { ssr: false });

// Komponen wrapper ini menerima props yang dibutuhkan oleh TargetCursor
interface TargetCursorWrapperProps {
  spinDuration: number;
  hideDefaultCursor: boolean;
}

export default function TargetCursorWrapper({ spinDuration, hideDefaultCursor }: TargetCursorWrapperProps) {
  return <TargetCursor spinDuration={spinDuration} hideDefaultCursor={hideDefaultCursor} />;
}
