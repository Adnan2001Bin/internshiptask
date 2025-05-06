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

  // Handle mouse drag scrolling
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    setIsDragging(true);
    setStartX(e.pageX - scrollContainer.offsetLeft);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();

    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 1.5; 
    scrollContainer.scrollLeft -= walk;
    setStartX(x);
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
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