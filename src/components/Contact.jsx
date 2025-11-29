import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  return (
    <div>
      <div className="w-[99vw] bg-[#0f1b2d]">
        <Navbar />
        <div className="w-[90vw] m-auto">
          <section
            id="contact"
            className="w-full h-[90vh] px-20 py-24 bg-[#0d1b2a] text-white"
          >
            <div className="flex gap-10">
              <div className="w-1/2 pl-5 space-y-6">
                <h2 className="text-lg text-gray-300">Get in Touch</h2>

                <h1 className="text-4xl font-bold mb-10 tracking-wider text-pink-400">
                  CONTACT ME
                </h1>
                <h3 className="text-2xl font-semibold text-white">
                  Let's Talk
                </h3>

                <p className="text-gray-300 w-130 leading-relaxed">
                  Feel free to reach out for collaborations, freelance projects,
                  or any creative ideas you’d like to bring to life. I’m always
                  open to meaningful conversations and new opportunities. Your
                  message is important, and I’ll get back to you as soon as
                  possible.
                </p>

                <div className="space-y-3 text-gray-300">
                  <p>
                    <span className="font-semibold text-white">Email:</span>{" "}
                    Pratham@gmail.com
                  </p>
                  <p>
                    <span className="font-semibold text-white">Location:</span>{" "}
                    Pune, India
                  </p>
                </div>
              </div>

              <div className="w-1/2 bg-[#1b263b] p-8 rounded-xl shadow-md shadow-black/40">
                <form className="space-y-5">
                  <div>
                    <label className="block mb-1 text-gray-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 bg-[#0d1b2a] rounded-lg outline-none border border-gray-700 text-white"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-gray-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full p-3 bg-[#0d1b2a] rounded-lg outline-none border border-gray-700 text-white"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-gray-300">Message</label>
                    <textarea
                      rows="5"
                      className="w-full p-3 bg-[#0d1b2a] rounded-lg outline-none border border-gray-700 text-white"
                      placeholder="Write your message..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-3 bg-pink-500 hover:bg-pink-600 cursor-pointer rounded-lg text-white font-semibold tracking-wide"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
