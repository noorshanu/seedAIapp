/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { RiMediumFill } from "react-icons/ri";



const Footer: React.FC = () => {
  return (
    <footer className=" text-white pt-12 pb-4 border-t-[0.2px] border-[#c9c9c943] relative">
      <img src="images/footright.png" alt="" className=" absolute top-0 right-0 h-[350px]"/>
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold mb-4">
              Be part of the next wave of Web3 innovation.
            </h2>
            <p className="text-2xl sm:text-4xl font-bold">
              Stay connected and follow our journey:
            </p>
          </div>
          <div className="mt-6 lg:mt-0">
            <a
              href="#"
              className="bg-gradient-to-r from-purple-500 to-orange-400 text-white px-6 py-3 rounded-full shadow hover:opacity-90 transition duration-300"
            >
              JOIN US NOW
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo */}
          <div>
            <div className="text-2xl font-bold mb-4 flex items-center">
          
              <img src="images/logo.png" alt="" className=" w-[100px]"/>
            </div>
          </div>

          {/* Column Links */}
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300 text-[#C9C9C9] text-sm font-eculid">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300 text-[#C9C9C9] text-sm font-eculid">Ecosystem</a></li>
              <li><a href="#" className="hover:text-gray-300 text-[#C9C9C9] text-sm font-eculid">Why Us?</a></li>
              <li><a href="#" className="hover:text-gray-300 text-[#C9C9C9] text-sm font-eculid">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Ecosystem</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300 text-[#C9C9C9] text-sm font-eculid">AI Marketplace</a></li>
              <li><a href="#" className="hover:text-gray-300 text-[#C9C9C9] text-sm font-eculid">IAO Pad</a></li>
              <li><a href="#" className="hover:text-gray-300 text-[#C9C9C9] text-sm font-eculid">Agent Seedverse</a></li>
              <li><a href="#" className="hover:text-gray-300 text-[#C9C9C9] text-sm font-eculid">Developer SDK</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300 text-[#C9C9C9] text-sm font-eculid">Whitepaper</a></li>
              <li><a href="#" className="hover:text-gray-300 text-[#C9C9C9] text-sm font-eculid">Pitch Deck</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Other Pages</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300 text-[#C9C9C9] text-sm font-eculid">Terms of Use</a></li>
              <li><a href="#" className="hover:text-gray-300 text-[#C9C9C9] text-sm font-eculid">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-300 text-[#C9C9C9] text-sm font-eculid">Accessibility</a></li>
              <li><a href="#" className="hover:text-gray-300 text-[#C9C9C9] text-sm font-eculid">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center border-t border-gray-700 pt-2">
          <p className="text-sm text-[#C9C9C9] mb-2 lg:mb-0 font-eculid">
            © Copyright SEED AI 2024
          </p>
          <div className="flex space-x-6 text-gray-500">
            <a href="#" className="hover:text-white"><FaXTwitter/></a>
            <a href="#" className="hover:text-white"><FaDiscord/></a>
            <a href="#" className="hover:text-white"><FaTelegramPlane/></a>
            <a href="#" className="hover:text-white"><RiMediumFill/></a>
          </div>
        </div>
      </div>
      <img src="images/footleft.png" alt="" className=" absolute bottom-0 left-0 h-[200px]"/>
    </footer>
  );
};

export default Footer;