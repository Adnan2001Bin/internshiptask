"use client";
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { image1, image2, image3 } from '@/utils/Images';

interface CardItem {
  src: StaticImageData;
  alt: string;
}

const cardItems: CardItem[] = [
  { src: image1, alt: 'Phone App' },
  { src: image2, alt: 'Blade Tech' },
  { src: image3, alt: 'Analytics Dashboard' },
  { src: image3, alt: 'Project Dashboard' },
  { src: image2, alt: 'Tech Interface' },
];

const CardSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const lastScrollX = useRef(0);
  const rafId = useRef<number | null>(null);

  // Handle middle card scaling
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const cards = scrollContainer.querySelectorAll('.card-item');
      const containerWidth = scrollContainer.offsetWidth;
      const scrollLeft = scrollContainer.scrollLeft;

      cards.forEach((card) => {
        const cardElement = card as HTMLElement;
        const cardLeft = cardElement.offsetLeft;
        const cardWidth = cardElement.offsetWidth;
        const cardCenter = cardLeft + cardWidth / 2 - scrollLeft;
        const distanceFromCenter = Math.abs(cardCenter - containerWidth / 2);

        if (distanceFromCenter < cardWidth / 2) {
          cardElement.style.transform = 'scale(1.1)';
          cardElement.style.zIndex = '10';
        } else {
          cardElement.style.transform = 'scale(1)';
          cardElement.style.zIndex = '1';
        }
      });
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call to set the middle card

    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  // Add inertia effect for smoother scrolling
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const applyInertia = () => {
      if (Math.abs(velocity) > 0.1) {
        scrollContainer.scrollLeft += velocity;
        setVelocity(velocity * 0.95); // Decelerate
        rafId.current = requestAnimationFrame(applyInertia);
      } else {
        setVelocity(0);
      }
    };

    if (!isDragging && velocity !== 0) {
      rafId.current = requestAnimationFrame(applyInertia);
    }

    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [isDragging, velocity]);

  // Handle mouse drag scrolling
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    setIsDragging(true);
    setStartX(e.pageX);
    lastScrollX.current = scrollContainer.scrollLeft;

    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();

    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const x = e.pageX;
    const deltaX = x - startX;
    const sensitivity = 0.8; // Reduced sensitivity for smoother dragging
    const newScrollLeft = lastScrollX.current - deltaX * sensitivity;

    scrollContainer.scrollLeft = newScrollLeft;

    // Calculate velocity for inertia
    setVelocity(deltaX * 0.1);
  };

  const handleMouseUpOrLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      lastScrollX.current = scrollContainerRef.current?.scrollLeft || 0;
    }
  };

  return (
    <section className="py-5 bg-black text-white">
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 px-4 py-4 select-none"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          scrollBehavior: 'smooth',
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {cardItems.map((item, index) => (
          <div
            key={index}
            className="card-item flex-shrink-0 snap-center bg-gray-800 rounded-lg overflow-hidden w-64 sm:w-80 md:w-96 transition-transform duration-500 ease-out"
          >
            <div className="relative w-full h-48 sm:h-56 md:h-64">
              <Image
                src={item.src}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default CardSection;