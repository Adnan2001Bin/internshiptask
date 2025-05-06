import React from 'react';
import Image from 'next/image';
import { image1, image2, image3 } from '@/utils/Images';

const cardItems = [
  {
    src: image1,
    alt: 'Phone App',
  },
  {
    src: image2,
    alt: 'Blade Tech',
  },
  {
    src: image3,
    alt: 'Analytics Dashboard',
  },
];

const Card = () => {
  return (
    <section className="py-5 bg-gray-900 text-white">
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4">
        {cardItems.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden w-full max-w-xs md:max-w-sm"
          >
            <div className="relative w-full h-48 md:h-64">
              <Image
                src={item.src}
                alt={item.alt}
                layout="fill"

              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;