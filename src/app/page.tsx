/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import ComingSoonCards from "@/components/HomeScreen/ComingSoonCards";

import Ecosystem from "@/components/HomeScreen/Ecosystem";

import Hero from "@/components/HomeScreen/Hero";
import Sliderb from "@/components/HomeScreen/Sliderb";
                                                                                                                                                                                                                                                                                                                                                                                                                                          
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <main className=" relative">
        <div className=" relative z-30">
          <img src="images/grid.png" alt="" className=" absolute top-0 " />
          <Navbar />

          <Hero />
          <div className=" max-w-7xl mx-auto">
          <Sliderb/>
          </div>
       
        </div>
     
        <div className="relative">
    
          <Ecosystem />
        </div>

 
        <ComingSoonCards/>
      </main>
      <Footer />
    </div>
  );
}
