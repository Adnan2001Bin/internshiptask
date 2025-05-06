"use client";
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../../public/Group 1.png';

const Navbar = ({ className }: { className?: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-5 inset-x-0 mx-auto z-50 w-[90%] max-w-5xl ${className}`}>
      <div className="flex items-center justify-between bg-black/50 backdrop-blur-md border border-white/20 rounded-full px-6 py-3">
        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="Logo" width={40} height={40} className="h-8 w-auto" />
        </Link>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex items-center gap-6 text-white">
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
              className="w-6 h-6"
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
        <div className="md:hidden mt-2 bg-black/80 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4">
          <div className="flex flex-col gap-4 text-white">
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