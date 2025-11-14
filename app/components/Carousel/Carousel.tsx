'use client';
import { useEffect, useState, useRef, useImperativeHandle, forwardRef } from 'react'; // Import forwardRef dan useImperativeHandle
import { motion, PanInfo, useMotionValue, useTransform } from 'motion/react';
import React, { JSX } from 'react';

// --- DEFINISI BARU UNTUK REF ---
// Tipe ini harus cocok dengan yang didefinisikan di CarouselWrapper
export interface CarouselRef {
  nextSlide: () => void;
  prevSlide: () => void;
}
// ------------------------------

export interface CarouselItem {
  id: number;
  imagePath: string;
}

export interface CarouselProps {
  items?: CarouselItem[];
  baseWidth?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
}

const IMAGE_ITEMS: CarouselItem[] = [
  { id: 1, imagePath: '/assets/images/portfolio/business/1.jpg' },
  { id: 2, imagePath: '/assets/images/portfolio/business/2.jpg' },
  { id: 3, imagePath: '/assets/images/portfolio/business/3.jpg' },
  { id: 4, imagePath: '/assets/images/portfolio/business/4.jpg' },
  { id: 5, imagePath: '/assets/images/portfolio/business/5.jpg' },
  { id: 6, imagePath: '/assets/images/portfolio/business/6.jpg' },
  { id: 7, imagePath: '/assets/images/portfolio/business/7.jpg' },
  { id: 8, imagePath: '/assets/images/portfolio/business/8.jpg' },
  { id: 9, imagePath: '/assets/images/portfolio/business/9.jpg' },
  { id: 10, imagePath: '/assets/images/portfolio/business/10.jpg' },
  { id: 11, imagePath: '/assets/images/portfolio/business/11.jpg' },
  { id: 12, imagePath: '/assets/images/portfolio/business/12.jpg' },
];

const DEFAULT_ITEMS: CarouselItem[] = IMAGE_ITEMS;

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 };

// Ganti export default function Carousel dengan export default forwardRef
const Carousel = forwardRef<CarouselRef, CarouselProps>(({ items = DEFAULT_ITEMS, baseWidth = 300, autoplay = false, autoplayDelay = 3000, pauseOnHover = false, loop = false, round = false }, ref): JSX.Element => {
  // Terima ref sebagai argumen kedua

  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const itemHeight = itemWidth * (9 / 16);
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isResetting, setIsResetting] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // --- FUNGSI NAVIGASI MANUAL BARU ---
  const nextSlide = () => {
    if (loop && currentIndex === items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
    }
  };

  const prevSlide = () => {
    if (loop && currentIndex === 0) {
      // Langsung pindah ke item terakhir (duplikat), lalu reset ke item asli terakhir di onAnimationComplete
      setCurrentIndex(carouselItems.length - 1);
      // NOTE: Pada loop, ini mungkin perlu penyesuaian yang lebih halus agar transisi tampak mundur dari item 0 ke item terakhir
    } else {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };
  // ------------------------------------

  // --- EXPOSE FUNGSI KE REF (WAJIB UNTUK WRAPPER) ---
  useImperativeHandle(ref, () => ({
    nextSlide,
    prevSlide,
  }));
  // --------------------------------------------------

  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === items.length - 1 && loop) {
            return prev + 1;
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [autoplay, autoplayDelay, isHovered, loop, items.length, carouselItems.length, pauseOnHover]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      // Reset dari item duplikat kembali ke item asli pertama (index 0)
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    // Pindah ke kanan (index bertambah)
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      nextSlide();
      // Pindah ke kiri (index berkurang)
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      prevSlide();
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (carouselItems.length - 1),
          right: 0,
        },
      };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden p-4 ${round ? 'rounded-full border border-white' : 'rounded-[24px] border border-[#222]'}`}
      style={{
        width: `${baseWidth}px`,
        height: `${itemHeight + containerPadding * 2}px`,
      }}
    >
      <motion.div
        className="flex h-full"
        drag="x"
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          x,
        }}
        onDragEnd={handleDragEnd}
        // Hapus transisi di animate agar animasi dikontrol oleh motion/react
        animate={{ x: -(currentIndex * trackItemOffset) }}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => {
          const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
          const outputRange = [90, 0, -90];
          const rotateY = useTransform(x, range, outputRange, { clamp: false });

          return (
            <motion.div
              key={index}
              className={`relative shrink-0 overflow-hidden cursor-grab active:cursor-grabbing rounded-[12px] bg-[#222]`}
              style={{
                width: itemWidth,
                height: itemHeight,
                rotateY: rotateY,
              }}
            >
              <img
                src={item.imagePath}
                alt={`Project ${item.id}`} // Alt text menggunakan ID
                className="w-full h-full object-cover"
              />
            </motion.div>
          );
        })}
      </motion.div>

      <div className={`flex w-full justify-center ${round ? 'absolute z-20 bottom-12 left-1/2 -translate-x-1/2' : ''}`}>
        <div className="mt-4 flex w-[150px] justify-between px-8">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${currentIndex % items.length === index ? (round ? 'bg-white' : 'bg-[#333333]') : round ? 'bg-[#555]' : 'bg-[rgba(51,51,51,0.4)]'}`}
              animate={{
                scale: currentIndex % items.length === index ? 1.2 : 1,
              }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

export default Carousel;
