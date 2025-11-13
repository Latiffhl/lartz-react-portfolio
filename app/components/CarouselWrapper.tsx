'use client';
import React, { useRef, useState, useEffect, JSX } from 'react';
import Carousel, { CarouselProps } from './Carousel/Carousel';

// Definisikan props yang diterima oleh CarouselWrapper
// Kita ambil semua props dari CarouselProps kecuali baseWidth
type WrapperProps = Omit<CarouselProps, 'baseWidth' | 'items'>;

const CarouselWrapper: React.FC<WrapperProps> = ({ autoplay = false, autoplayDelay = 3000, pauseOnHover = false, loop = false, round = false }): JSX.Element => {
  const carouselWrapperRef = useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = useState<number>(300);

  const measureWidth = (): void => {
    if (carouselWrapperRef.current) {
      setCarouselWidth(carouselWrapperRef.current.clientWidth);
    }
  };

  useEffect(() => {
    // Logika pengukuran tetap dipertahankan untuk responsivitas
    measureWidth();
    window.addEventListener('resize', measureWidth);
    return () => {
      window.removeEventListener('resize', measureWidth);
    };
  }, []);

  // HAPUS BLOK KODE YANG MENYEBABKAN KETERLAMBATAN (IF loading)

  return (
    <div ref={carouselWrapperRef} className="mt-12 w-full" style={{ position: 'relative' }}>
      <Carousel
        // Tetap gunakan carouselWidth, yang akan diperbarui segera
        baseWidth={carouselWidth}
        autoplay={autoplay}
        autoplayDelay={autoplayDelay}
        pauseOnHover={pauseOnHover}
        loop={loop}
        round={round}
      />
    </div>
  );
};

export default CarouselWrapper;
