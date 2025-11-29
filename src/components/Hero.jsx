import React from "react";

function Hero() {
  return (
    <section className="h-[77vh] flex items-center justify-center px-10">
      <div className="w-full max-w-6xl flex gap-30 justify-between items-center">
        <div className="text-white">
          <p className="text-sm text-gray-300 mb-2">WELCOME TO MY WORLD</p>

          <h1 className="text-5xl font-bold mb-2">
            Hi, I am <span className="text-pink-500">Pratham.C</span>
          </h1>

          <h2 className="text-2xl font-semibold mb-4">
            CREATIVE <span className="text-green-400">Web Developer</span>
          </h2>

          <p className="text-gray-300 w-160 text-[18px] text-justify leading-relaxed mb-6">
            I have been addicted to Advanced Design and Coding. I have hands-on
            experience efficiently using Photoshop, Illustrator, HTML, CSS,
            JavaScript, jQuery, and Bootstrap. I’m experienced and qualified in
            Website Design. I always work with the requirements in order to
            arrive as close as we can to the expectations.
          </p>

          <button className="bg-green-500 font-semibold cursor-pointer hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm">
            Download CV
          </button>
        </div>

        <div className="w-fit h-fit bg-[#1b2b40] rounded-xl flex items-center justify-center">
          <img
            src="./profile.jpg"
            alt="profile"
            className="w-[700px] h-[500px] object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
