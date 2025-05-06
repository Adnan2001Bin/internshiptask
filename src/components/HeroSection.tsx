import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { fixMyPhone, verdant, duet, apex, lindholms } from '@/utils/Images';

const HeroSection = () => {
  const logos = [
    { src: fixMyPhone, alt: 'Fix My Phone', href: '/fixMyPhone' },
    { src: verdant, alt: 'Verdant', href: '/verdant' },
    { src: duet, alt: 'Duet', href: '/duet' },
    { src: apex, alt: 'Apex', href: '/apex' },
    { src: lindholms, alt: 'Lindholms', href: '/lindholms' },
  ];

  return (
    <section className="relative min-h-screen bg-[url('https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_1280.jpg')] bg-cover bg-center bg-no-repeat text-white flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8">
        <div className="w-full flex justify-center">
          <div className="w-full sm:w-[70%] md:w-[50%] lg:w-[50%]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight tracking-tight">
              We Shape Your Ideas Into Awesome Digital Experience
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-light mb-6 sm:mb-8 md:mb-10 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet consectetur. Eget at at nunc lorem.
            </p>
          </div>
        </div>

        <Link href="/book-call">
          <button className=" border-2 border-blue-500 text-white bg-blue-500 px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full hover:bg-blue-300 hover:text-white transition-colors text-xs sm:text-sm md:text-base">
            Book a call with us
          </button>
        </Link>

        {/* Logos Section */}
        <div className="flex justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 mt-8 sm:mt-10 md:mt-12 flex-wrap">
          {logos.map((logo, index) => (
            <Link key={index} href={logo.href}>
              <div className="h-6 sm:h-8 md:h-10 lg:h-12 flex items-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={80}
                  height={40}
                  className="h-full w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;