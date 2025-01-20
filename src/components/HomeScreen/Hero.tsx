/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

function Hero() {
  return (
    <div className="h-auto py-10 sm:py-0   flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 relative">
      <img
        src="images/hero.png"
        alt=""
        className=" absolute top-0 right-0 left-0 sm:left-[400px] bottom-0 h-auto sm:h-[700px]"
      />
      <img
        src="images/herobl.png"
        alt=""
        className="absolute left-0 bottom-0 z-50 sm:block hidden"
      />
      <div className="max-w-4xl mx-auto ">
        {/* Top label */}

        {/* Main heading */}
        <h1 className="text-4xl sm:text-8xl  font-bold text-white mt-20 mb-6">
          <span className="text-[#874DFF]">AI Agent</span> App Store
        </h1>

        {/* Subheading */}
        <div className="space-y-2 mb-[8rem]">
          <p className="text-gray-300 text-lg sm:text-xl font-eculid">
            Deploy AI Agents on Mode via partner applications.
          </p>
        </div>

        {/* CTA Button */}
        <div className=" grid sm:flex grid-cols-2 sm:flex-row justify-center gap-4 my-8 relative z-50">
          <Link href="/" className="group font-eculid border headerm hover:bg-gray-800/80 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 flex items-center gap-2 mx-auto">
            AI LIBRARY
          </Link>
          <Link href="/" className="group font-bold font-eculid border bg-gray-800/60 hover:bg-gray-800/80 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 flex items-center gap-2 mx-auto">
       AGENTIC STAKING 
          </Link>
          <Link href="/" className="group font-eculid border bg-gray-800/60 hover:bg-gray-800/80 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 flex items-center gap-2 mx-auto">
            IOA LAUNCHPAD
          </Link>
          <button className="group font-eculid border bg-gray-800/60 hover:bg-gray-800/80 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 flex items-center gap-2 mx-auto">
            SEED VERSE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
