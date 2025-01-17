/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import Aboutus from "@/components/HomeScreen/Aboutus";
import Ecosystem from "@/components/HomeScreen/Ecosystem";
import FAQSection from "@/components/HomeScreen/FAQSection";
import Hero from "@/components/HomeScreen/Hero";
import WhySeedai from "@/components/HomeScreen/WhySeedai";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <main className=" relative">
        <div className=" relative z-30">
          <img src="images/grid.png" alt="" className=" absolute top-0 " />
          <Navbar />

          <Hero />
        </div>
        <Aboutus />
        <div className="relative">
          <img
            src="images/grid2.png"
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <Ecosystem />
        </div>

        <WhySeedai />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
