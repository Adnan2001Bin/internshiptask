import React from 'react';

interface CardItem {
    index: string;
    text: string;
}

const cardItems: CardItem[] = [
    {
        index: '01',
        text: 'How to Protect Your Identity While Traveling',
    },
    {
        index: '02',
        text: 'How to Protect Your Identity While Traveling',
    },
    {
        index: '03',
        text: 'How to Protect Your Identity While Traveling',
    },
    {
        index: '04',
        text: 'How to Protect Your Identity While Traveling',
    },
    {
        index: '05',
        text: 'How to Protect Your Identity While Traveling',
    },
    {
        index: '06',
        text: 'How to Protect Your Identity While Traveling',
    },
];

const Featured = () => {
    return (
        <div className="bg-black text-white py-16 flex justify-center items-center">
            <div className="w-full max-w-4xl px-4">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Rethink Sans, sans-serif' }}>
                        Featured Insights
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400" style={{ fontFamily: 'Rethink Sans, sans-serif' }}>
                        Lorem ipsum dolor sit amet consectetur. Eget at at nunc lorem.
                    </p>
                </div>

                <div className="space-y-4">
                    {cardItems.slice(0, 5).map((item) => (
                        <div
                            key={item.index}
                            className="flex items-center justify-between bg-gray-900 bg-opacity-50 rounded-lg p-4 hover:bg-opacity-70 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4">
                                <span className="text-blue-500 text-lg font-semibold" style={{ fontFamily: 'Rethink Sans, sans-serif' }}>
                                    {item.index}
                                </span>
                                <p className="text-lg md:text-xl" style={{ fontFamily: 'Rethink Sans, sans-serif' }}>
                                    {item.text}
                                </p>
                            </div>
                            <a href="#" className="text-gray-400 hover:text-white flex items-center gap-2" style={{ fontFamily: 'Rethink Sans, sans-serif' }}>
                                <span className="text-xl">↗</span>
                            </a>
                        </div>
                    ))}
                </div>


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

export default Featured;