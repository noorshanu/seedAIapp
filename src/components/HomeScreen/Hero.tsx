/* eslint-disable @next/next/no-img-element */
import React from 'react'

function Hero() {
  return (
    <div className="h-auto py-10 sm:py-0 sm:min-h-screen  flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 relative">
      <img src="images/hero.png" alt=""  className=' absolute top-0 right-0 left-0 sm:left-[400px] bottom-0 h-auto sm:h-[700px]'/>
      <img src="images/herobl.png" alt="" className='absolute left-0 bottom-0 z-50 sm:block hidden'/>
    <div className="max-w-4xl mx-auto ">
      {/* Top label */}
      <div className="mb-8">
        <span className="bg-gray-800/60 text-gray-200 px-6 py-2 rounded-full text-sm font-eculid">
          One Stop Destination for AI Agents
        </span>
      </div>

      {/* Main heading */}
      <h1 className="text-4xl sm:text-7xl lg:text-7xl font-bold text-white mb-6">
        Transforming{' '}
        <span className="text-[#874DFF]">Web3</span> with{' '}
        <span className="text-[#874DFF]">Intelligent AI</span> Agents
      </h1>

      {/* Subheading */}
      <div className="space-y-2 mb-12">
        <p className="text-gray-300 text-lg sm:text-xl font-eculid">
          Seed AI is your gateway to smarter, secure, and self-driven decentralized solutions.
        </p>
        <p className="text-gray-300 text-lg sm:text-xl font-eculid">
          Discover, launch, and harness the power of AI agents in one unified platform.
        </p>
      </div>

      {/* CTA Button */}
      <button className="group font-eculid border bg-gray-800/60 hover:bg-gray-800/80 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 flex items-center gap-2 mx-auto">
        EXPLORE MARKETPLACE
        <svg 
          className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </button>
    </div>
  </div>
  )
}

export default Hero
