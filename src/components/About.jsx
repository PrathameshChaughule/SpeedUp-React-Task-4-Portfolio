import React from "react";
import Navbar from "./Navbar";
import { aboutData } from "../data/data";
import Footer from "./Footer";

function About() {
  return (
    <div className="w-[99vw] bg-[#0f1b2d]">
      <Navbar />
      <div className="w-[90vw] m-auto">
        <div className="w-full h-[90vh] bg-[#0f1b2d] flex items-center justify-center px-10">
          <div className="max-w-6xl w-full flex justify-between items-center">
            <div className="bg-[#162334] w-[300px] h-[350px] rounded-xl flex flex-col items-center justify-center text-white">
              <h1 className="text-8xl font-bold text-pink-500">
                {aboutData.experienceYears}
              </h1>
              <p className="text-gray-300 mt-5 text-xl">
                {aboutData.experienceText}
              </p>
            </div>

            <div className="text-white w-[60%]">
              <h3 className="text-lg text-gray-300">
                {aboutData.sectionTitle}
              </h3>

              <h2 className="text-3xl font-bold text-pink-500 mb-4">
                {aboutData.sectionHighlight}
              </h2>

              <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-[600px]">
                {aboutData.sectionDescription}
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#162334] p-5 rounded-xl">
                  <h3 className="text-lg font-semibold mb-2">Skills</h3>
                  <p className="text-gray-300 text-sm">
                    HTML, CSS, JavaScript, React, Tailwind CSS, UI/UX Thinking
                  </p>
                </div>

                <div className="bg-[#162334] p-5 rounded-xl">
                  <h3 className="text-lg font-semibold mb-2">What I Do</h3>
                  <p className="text-gray-300 text-sm">
                    I build modern, responsive websites and create clean user
                    interface designs focused on simplicity and performance.
                  </p>
                </div>

                <div className="bg-[#162334] p-5 rounded-xl">
                  <h3 className="text-lg font-semibold mb-2">Strengths</h3>
                  <p className="text-gray-300 text-sm">
                    Fast learner, creative mindset, attention to detail, and
                    strong problem-solving skills.
                  </p>
                </div>

                <div className="bg-[#162334] p-5 rounded-xl">
                  <h3 className="text-lg font-semibold mb-2">Interests</h3>
                  <p className="text-gray-300 text-sm">
                    UI design, futuristic websites, animations, and exploring
                    new tools that enhance workflow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
