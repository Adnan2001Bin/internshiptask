import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { workImg1, workImg2, workImg3, workImg4, workImg5 } from '@/utils/Images';

interface CardItem {
    src: StaticImageData;
    alt: string;
    heading: string;
    p: string;
}

const cardItems: CardItem[] = [
    {
        src: workImg1,
        alt: 'workImg1',
        heading: 'Alcohol Tracker',
        p: 'All-In-One (AIO) Service',
    },
    {
        src: workImg2,
        alt: 'workImg2',
        heading: 'Rely',
        p: 'All-In-One (AIO) Service',
    },
    {
        src: workImg3,
        alt: 'workImg3',
        heading: 'Alcohol Tracker',
        p: 'All-In-One (AIO) Service',
    },
    {
        src: workImg4,
        alt: 'workImg4',
        heading: 'Finance Website',
        p: 'All-In-One (AIO) Service',
    },
    {
        src: workImg5,
        alt: 'workImg5',
        heading: 'Alcohol Tracker',
        p: 'All-In-One (AIO) Service',
    },
];

const RecentWork: React.FC = () => {
    return (
        <div className="bg-gray-950 text-white py-16 flex justify-center items-center">
            <div className="w-full max-w-7xl px-4">
                {/* Header Section */}
                <div className="text-center mb-12">

                    <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Rethink Sans, sans-serif' }}>
                        Our Most Recent Works
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400" style={{ fontFamily: 'Rethink Sans, sans-serif' }}>
                        Lorem ipsum dolor sit amet consectetur. Eget at at nunc lorem.
                    </p>
                </div>


                <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 shad">
                        {cardItems.slice(0, 2).map((item) => (
                            <div key={item.alt} className="bg-black rounded-lg overflow-hidden"
                                style={{
                                    boxShadow: `1px 0 5px gray`
                                }}>
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    layout="responsive"
                                    width={500}
                                    height={300}
                                    className="w-full h-auto"
                                />
                                <div className="p-4 flex justify-between items-center">
                                    <div>
                                        <h3 className="text-lg md:text-xl font-semibold" style={{ fontFamily: 'Rethink Sans, sans-serif' }}>
                                            {item.heading}
                                        </h3>
                                        <p className="text-gray-400 text-sm md:text-base" style={{ fontFamily: 'Rethink Sans, sans-serif' }}>
                                            {item.p}
                                        </p>
                                    </div>
                                    <button className="text-gray-400 bg-gray-800 hover:text-white flex items-center gap-2 border-1 border-gray-600 px-4 py-2 rounded-3xl" style={{ fontFamily: 'Rethink Sans, sans-serif' }}>
                                        Open <span className="text-lg">↗</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {cardItems.slice(2, 5).map((item) => (
                            <div key={item.alt} className="bg-black rounded-lg overflow-hidden"
                                style={{
                                    boxShadow: `1px 0 5px gray`
                                }}>
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    layout="responsive"
                                    width={350}
                                    height={250}
                                    className="w-full h-auto"
                                />
                                <div className="p-4 flex justify-between items-center">
                                    <div>
                                        <h3 className="text-lg md:text-xl font-semibold" style={{ fontFamily: 'Rethink Sans, sans-serif' }}>
                                            {item.heading}
                                        </h3>
                                        <p className="text-gray-400 text-sm md:text-base" style={{ fontFamily: 'Rethink Sans, sans-serif' }}>
                                            {item.p}
                                        </p>
                                    </div>
                                    <button className="text-gray-400 bg-gray-800 hover:text-white flex items-center gap-2 border-1 border-gray-600 px-4 py-2 rounded-3xl" style={{ fontFamily: 'Rethink Sans, sans-serif' }}>
                                        Open <span className="text-lg">↗</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* View More Button */}
                <div className="mt-12 flex justify-center">
                    <a
                        href="#"
                        className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-all"
                        style={{ fontFamily: 'Rethink Sans, sans-serif' }}
                    >
                        View More <span className="text-xl">↗</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default RecentWork;