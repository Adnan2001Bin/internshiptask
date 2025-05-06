import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-8 flex justify-center items-center">
            <div className="w-full max-w-7xl px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Left Section: Project Inquiry */}
                    <div className="text-center md:text-left">
                        <p className="text-gray-500 text-sm md:text-lg mb-2">
                            Have a project in mind?
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                            Let’s Talk
                        </h2>
                        <p className="text-lg md:text-xl underline" style={{ fontFamily: 'Rethink Sans, sans-serif' }}>
                            hey@pixll.com
                        </p>
                    </div>

                    {/* Right Section: Social Links and Copyright */}
                    <div className="text-center md:text-right">
                        <div className="mb-4">
                            <a href="#" className="text-gray-400 hover:text-white text-sm md:text-base block" style={{ fontFamily: 'Rethink Sans, sans-serif' }}>LinkedIn</a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm md:text-base block" style={{ fontFamily: 'Rethink Sans, sans-serif' }}>GitHub</a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm md:text-base block" style={{ fontFamily: 'Rethink Sans, sans-serif' }}>Facebook</a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm md:text-base block" style={{ fontFamily: 'Rethink Sans, sans-serif' }}>Instagram</a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm md:text-base block" style={{ fontFamily: 'Rethink Sans, sans-serif' }}>Twitter</a>
                        </div>
                        <div className="text-gray-500 text-xs md:text-sm" style={{ fontFamily: 'Rethink Sans, sans-serif' }}>
                            <a href="#" className="hover:text-gray-400 mr-2">Privacy</a>
                            <a href="#" className="hover:text-gray-400 mr-2">Terms</a>
                            <span>© 2017 - 2025 Pixll</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;