import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { fixMyPhone, verdant, duet, apex, lindholms } from '@/utils/Images';



const HeroSection = () => {

  const logos = [
    { src: fixMyPhone, alt: "Fix My Phone", href: "/fixMyPhone" },
    { src: verdant, alt: "Verdant", href: "/verdant" },
    { src: duet, alt: "Duet", href: "/duet" },
    { src: apex, alt: "Apex", href: "/apex" },
    { src: lindholms, alt: "Lindholms", href: "/lindholms" },
  ];

  return (
    <section className="relative min-h-screen bg-[url('https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_1280.jpg')] bg-cover bg-center bg-no-repeat text-white flex items-center justify-center ">
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight tracking-tight">
          We Shape Your Ideas Into
          <span className="text-blue-400 block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Awesome Digital Experience</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg font-light mb-8 sm:mb-10 md:mb-12 max-w-md sm:max-w-lg md:max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Eget at at nunc lorem.
        </p>
        <Link href="/book-call">
          <button className="bg-transparent border-2 border-blue-500 text-blue-500 px-6 py-2 sm:px-8 sm:py-3 rounded-full hover:bg-blue-500 hover:text-white transition-colors text-sm sm:text-base">
            Book a call with us
          </button>
        </Link>

        {/* Logos Section */}
        <div className="flex justify-center gap-4 sm:gap-6 md:gap-18 mt-10 sm:mt-12 md:mt-16 flex-wrap">
          {logos.map((logo, index) => (
            <Link key={index} href={logo.href}>
              <div className="h-8 sm:h-10 md:h-12 flex items-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={50}
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