import React from "react";
import Navbar from "./Navbar";
import { servicesData } from "../data/data";
import Footer from "./Footer";

function Services() {
  return (
    <div>
      <div className="w-[99vw] h-fit bg-[#0f1b2d]">
        <Navbar />
        <div className="w-[90vw] m-auto">
          <section className="w-full h-[90vh] items-center bg-[#0f1b2d] py-20 flex justify-center">
            <div className="max-w-6xl w-full">
              <h3 className="text-gray-300 text-lg">WHAT I PROVIDE</h3>
              <h2 className="text-3xl font-bold text-pink-500 mb-5">
                My Services
              </h2>

              <div className="grid grid-cols-2 gap-8">
                {servicesData.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#162334] p-6 rounded-xl text-white"
                  >
                    <div className="mb-4">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-25 h-25"
                      />
                    </div>

                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Services;
