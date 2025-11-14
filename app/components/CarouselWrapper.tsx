'use client';
import React, { useRef, useState, useEffect, JSX } from 'react';
import Carousel, { CarouselProps } from './Carousel/Carousel';
import { ChevronLeft, ChevronRight } from 'lucide-react'; //

export interface CarouselRef {
  nextSlide: () => void;
  prevSlide: () => void;
}
// --------------------------------------------------------

type WrapperProps = Omit<CarouselProps, 'baseWidth' | 'items'>;

const CarouselWrapper: React.FC<WrapperProps> = ({ autoplay = false, autoplayDelay = 3000, pauseOnHover = false, loop = false, round = false }): JSX.Element => {
  const carouselWrapperRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<CarouselRef>(null);
  const [carouselWidth, setCarouselWidth] = useState<number>(300);

  const measureWidth = (): void => {
    if (carouselWrapperRef.current) {
      setCarouselWidth(carouselWrapperRef.current.clientWidth);
    }
  };

  useEffect(() => {
    measureWidth();
    window.addEventListener('resize', measureWidth);
    return () => {
      window.removeEventListener('resize', measureWidth);
    };
  }, []);

  // --- HANDLER BARU UNTUK TOMBOL ---
  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.nextSlide();
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prevSlide();
    }
  };
  // ------------------------------------

  const ButtonStyle = 'absolute top-1/2 transform -translate-y-1/2 p-2 text-white bg-black/50 hover:bg-black/80 transition-colors duration-300 z-30 cursor-pointer rounded-sm disabled:opacity-30 disabled:cursor-not-allowed';

  return (
    <div ref={carouselWrapperRef} className="mt-12 w-full" style={{ position: 'relative' }}>
      {/* 1. Komponen Carousel - Meneruskan ref */}
      <Carousel
        ref={carouselRef} // 👈 Meneruskan ref di sini
        baseWidth={carouselWidth}
        autoplay={autoplay}
        autoplayDelay={autoplayDelay}
        pauseOnHover={pauseOnHover}
        loop={loop}
        round={round}
      />

      {/* 2. Tombol Navigasi Kiri */}
      <button onClick={handlePrev} className={`${ButtonStyle} left-2`} aria-label="Previous slide">
        <ChevronLeft size={24} />
      </button>

      {/* 3. Tombol Navigasi Kanan */}
      <button onClick={handleNext} className={`${ButtonStyle} right-2`} aria-label="Next slide">
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default CarouselWrapper;
