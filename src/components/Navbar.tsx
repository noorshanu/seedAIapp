/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

const Navbar: React.FC = () => {
  // Add state for mobile menu
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="text-white px-4 py-5 relative z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/ " className="text-2xl font-bold flex items-center">
            <img src="images/logo.png" alt="" className="h-[30px]" />
          </a>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="/ecosystem" className="hover:text-gray-300 text-xl font-eculid">
            ECOSYSTEM
          </a>
          <a href="/how-it-works" className="hover:text-gray-300 text-xl font-eculid" >
            HOW IT WORKS
          </a>
          <a href="/community" className="hover:text-gray-300 text-xl font-eculid">
            COMMUNITY
          </a>
          <a href="#" className="hover:text-gray-300 text-xl font-eculid">
            WHITEPAPER
          </a>
          <a href="#" className="hover:text-gray-300 text-xl font-eculid">
            EXPLORE
          </a>
          <div>
            <a
              href="#"
              className="text-lg font-eculid font-medium bg-gradient-to-r from-purple-500 to-orange-400 text-white px-5 py-3 rounded-full shadow hover:opacity-90 transition duration-300"
            >
              CONTACT US
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } absolute top-[80px] left-0 right-0 flex-col bg-black bg-opacity-90 py-4 md:hidden z-50`}
        >
          <a href="/ecosystem" className="hover:text-gray-300 text-xl font-eculid px-4 py-2">
            ECOSYSTEM
          </a>
          <a href="/how-it-works" className="hover:text-gray-300 text-xl font-eculid px-4 py-2">
            HOW IT WORKS
          </a>
          <a href="/community" className="hover:text-gray-300 text-xl font-eculid px-4 py-2">
            COMMUNITY
          </a>
          <a href="#" className="hover:text-gray-300 text-xl font-eculid px-4 py-2">
            WHITEPAPER
          </a>
          <a href="#" className="hover:text-gray-300 text-xl font-eculid px-4 py-2">
            EXPLORE
          </a>
          <div className="px-4 py-2">
            <a
              href="#"
              className="block text-lg font-eculid font-medium bg-gradient-to-r from-purple-500 to-orange-400 text-white px-5 py-3 rounded-full shadow hover:opacity-90 transition duration-300 text-center"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;