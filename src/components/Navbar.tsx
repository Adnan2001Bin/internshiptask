"use client";
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { logo } from '@/utils/Images';
interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled to true if the user has scrolled more than 50px
      setIsScrolled(window.scrollY > 50);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-3 sm:top-5 inset-x-0 mx-auto z-50 w-[90%] max-w-4xl sm:max-w-5xl ${className}`}>
      <div
        className={`flex items-center justify-between border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 transition-all duration-300 ${
          isScrolled ? 'bg-black/80 backdrop-blur-md' : ''
        }`}
      >
        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="Logo" width={40} height={40} className="h-6 sm:h-8 w-auto" />
        </Link>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 text-white text-sm lg:text-base">
          <Link href="/work" className="hover:text-blue-400 transition-colors">
            Work
          </Link>
          <Link href="/about" className="hover:text-blue-400 transition-colors">
            About
          </Link>
          <Link href="/blog" className="hover:text-blue-400 transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-blue-400 transition-colors">
            Contact
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden mt-2 border border-white/20 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 w-[90%] max-w-4xl sm:max-w-5xl mx-auto transition-all duration-300 ${
            isScrolled ? 'bg-black/80 backdrop-blur-md' : ''
          }`}
        >
          <div className="flex flex-col gap-3 sm:gap-4 text-white text-sm sm:text-base">
            <Link href="/work" onClick={toggleMenu} className="hover:text-blue-400 transition-colors">
              Work
            </Link>
            <Link href="/about" onClick={toggleMenu} className="hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link href="/blog" onClick={toggleMenu} className="hover:text-blue-400 transition-colors">
              Blog
            </Link>
            <Link href="/contact" onClick={toggleMenu} className="hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;