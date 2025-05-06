import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { serviceBg, serviceIcon1, serviceIcon2, serviceIcon3, serviceIcon4 } from '@/utils/Images';

interface CardItem {
    src: StaticImageData;
    alt: string;
    heading: string;
    p: string;
}

const cardItems: CardItem[] = [
    {
        src: serviceIcon1,
        alt: 'serviceIcon1',
        heading: 'All-In-One (AIO) Service',
        p: 'Our AIO solution tailors to your unique vision, crafting a website that truly reflects...',
    },
    {
        src: serviceIcon2,
        alt: 'serviceIcon2',
        heading: 'Project-Based Development',
        p: 'Ideal for agencies with ready designs, our service focuses on bringing...',
    },
    {
        src: serviceIcon3,
        alt: 'serviceIcon3',
        heading: 'Scalable Dev Partnership',
        p: 'Our partnership is designed for businesses needing consistent development support...',
    },
    {
        src: serviceIcon4,
        alt: 'serviceIcon4',
        heading: 'End-to-End Consulting',
        p: 'Our partnership is designed for businesses needing consistent development support...',
    },
];

const ServiceSection = () => {
    const cardColors = [
        'bg-gradient-to-br from-teal-500/50 to-teal-700/50',
        'bg-gradient-to-br from-purple-500/50 to-purple-700/50',
        'bg-gradient-to-br from-indigo-500/50 to-indigo-700/50',
        'bg-gradient-to-br from-blue-500/50 to-blue-700/50',
    ];

    const cardStyles = [
        {
            transform: 'translate(0px, 0px)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 0px 0px rgba(0, 0, 0, 0.1)',
            zIndex: 20,
        },
        {
            transform: 'translate(0px, 50px)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1)',
            zIndex: 30,
        },
        {
            transform: 'translate(0px, 30px)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1)',
            zIndex: 40,
        },
        {
            transform: 'translate(0px, 0px)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 6px 12px rgba(0, 0, 0, 0.1)',
            zIndex: 50,
        },
    ];

    return (
        <div className="relative min-h-screen flex justify-center items-center text-white py-10 px-5">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={serviceBg}
                    alt="Service Background"
                    layout="fill"
                    objectFit="cover"
                    className="z-0"
                />
                <div className="absolute inset-0 bg-black/60 z-10" />
            </div>

            <div className="relative z-20 w-full max-w-[80%]">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center mb-10 sm:mb-12 md:mb-16 px-4">
                    <span className="text-gray-400">We are a full-service studio creating transformative</span>{' '}
                    digital experiences and solutions,{' '}
                    <span className="text-gray-600">specializing in websites and web applications.</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative">
                    {cardItems.map((item, index) => (
                        <div
                            key={item.alt}
                            className={`bg-gray-800 ${cardColors[index]} bg-opacity-50 rounded-lg p-6 flex flex-col items-start gap-4 transition-all duration-300 sm:w-[300px] w-full`}
                            style={{
                                transform: cardStyles[index].transform,
                                boxShadow: cardStyles[index].boxShadow,
                                zIndex: cardStyles[index].zIndex,
                                position: 'relative',
                            }}
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={40}
                                height={40}
                                className="text-teal-400"
                            />
                            <div className='flex justify-between w-60'>
                            <h3 className="text-lg sm:text-xl font-semibold text-white">{item.heading}</h3>
                            <span className="text-teal-400 text-3xl">↗</span>
                            </div>

                            <p className="text-gray-400 text-sm sm:text-base">{item.p}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;