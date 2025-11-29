import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="w-[99vw] h-[100vh] bg-[#0f1b2d]">
      <Navbar />
      <div className="w-[90vw] m-auto">
        <Hero />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
