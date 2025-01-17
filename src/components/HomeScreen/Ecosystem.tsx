/* eslint-disable @next/next/no-img-element */
import React from "react";

function Ecosystem() {
  return (
    <section className=" text-white py-16 my-2 sm:my-10 relative max-w-7xl mx-auto  ">
      <img src="images/eco.png" alt="" className="absolute top-[-100px] right-[0px] overflow-hidden  " />
    
      <div className="container mx-auto px-4 z-10">
        {/* Section Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
          Our Ecosystem
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="">
            <div className="box2 rounded-lg border border-purple-600 p-6 shadow-lg hover:scale-105 transform transition duration-300">
              <div className="flex flex-col sm:flex-row gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-purple-400 mb-4">
                    AI Marketplace
                  </h3>
                  <p className="text-lg text-gray-300">
                    Discover pre-vetted, reliable AI agents to automate and
                    optimize your processes.
                  </p>
                </div>
                <div>
                  <img src="images/web.svg" alt="" className="h-[150px] w-auto sm:h-auto mx-auto" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="box2 rounded-lg border border-purple-600 p-6 shadow-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">IAO Pad</h3>
            <p className="text-lg text-gray-300">
              Launch your AI agents with ease and connect with a thriving Web3
              community.
            </p>
          </div>

          {/* Card 3 */}
          <div className="box2 rounded-lg border border-purple-600 p-6 shadow-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">
              Agent SeedVerse
            </h3>
            <p className="text-lg text-gray-300">
              Explore a curated library where AI agents interact and collaborate
              for enhanced autonomy.
            </p>
          </div>

          {/* Card 4 */}
          <div className="">
            <div className="bg-gradient-to-br from-purple-500/10 to-black/30 rounded-lg border border-purple-600 p-6 shadow-lg hover:scale-105 transform transition duration-300">
              <div className="flex flex-col sm:flex-row gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-purple-400 mb-4">
                    Developer SDK
                  </h3>
                  <p className="text-lg text-gray-300">
                    Access tools, SDKs, and APIs to simplify the creation and
                    deployment of AI agents.
                  </p>
                </div>
                <div>
                  <img src="images/chakra.svg" alt="" className=" mx-auto h-[150px] w-auto sm:h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ecosystem;
