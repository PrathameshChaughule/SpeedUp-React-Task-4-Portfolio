import React from "react";
import Navbar from "./Navbar";
import { projectsData } from "../data/data";
import Footer from "./Footer";

function Portfolio() {
  return (
    <div>
      <div className="w-[99vw] bg-[#0f1b2d]">
        <Navbar />
        <div className="w-[90vw] m-auto">
          <section className="py-20 flex items-center justify-center mt-[-20px]">
            <div className="max-w-7xl w-full">
              <h3 className="text-gray-300 text-lg">Explore my work</h3>
              <h2 className="text-3xl font-bold text-pink-500 mb-10">
                RECENT WORK
              </h2>

              <div className="flex flex-wrap justify-center gap-10">
                {projectsData.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#162334] w-[350px] p-4 rounded-xl text-white"
                  >
                    <div className="w-full h-[200px] overflow-hidden cursor-pointer rounded-lg mb-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-110 transition-all duration-400"
                      />
                    </div>

                    <h3 className="text-lg font-semibold mb-3">{item.title}</h3>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-md bg-[#1b2f44] text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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

export default Portfolio;
