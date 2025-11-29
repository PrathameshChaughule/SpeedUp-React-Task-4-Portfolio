import React from "react";
import Navbar from "./Navbar";
import { techData } from "../data/data";
import Footer from "./Footer";

function Skills() {
  return (
    <div className="w-[99vw] h-[100vh] bg-[#0f1b2d]">
      <Navbar />
      <div className="w-[90vw] m-auto">
        <section className="w-full h-[77vh] bg-[#0f1b2d] py-20 flex justify-center">
          <div className="max-w-7xl w-full flex justify-between items-center">
            <div className="bg-[#162334] p-6 rounded-xl w-[350px]">
              <div className="grid grid-cols-2 gap-5">
                {techData.leftTech.map((item, i) => (
                  <div
                    key={i}
                    className="bg-[#1b2f44] p-4 rounded-lg flex flex-col items-center"
                  >
                    <img src={item.icon} alt="" className="w-10 h-10 mb-2" />
                    <p className="text-white text-sm">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#162334] w-[400px] p-10 rounded-xl flex flex-col items-center">
              <img
                src={techData.centerImage}
                className="w-80 rounded h-auto mb-6"
              />
              <h2 className="text-white text-xl font-semibold text-center">
                {techData.title}
              </h2>
            </div>

            <div className="bg-[#162334] p-6 rounded-xl w-[350px]">
              <div className="grid grid-cols-2 gap-5">
                {techData.rightTech.map((item, i) => (
                  <div
                    key={i}
                    className="bg-[#1b2f44] p-4 rounded-lg flex flex-col items-center"
                  >
                    <img src={item.icon} alt="" className="w-10 h-10 mb-2" />
                    <p className="text-white text-sm">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Skills;
