import React from "react";
import { NavLink } from "react-router-dom";
import { CgSun } from "react-icons/cg";

function Navbar() {
  return (
    <div className="flex justify-around items-center bg-[#1E293C] p-4">
      <div className="flex justify-center gap-3 items-center">
        <img src="/logo.png" className="w-9" alt="" />
        <img src="/name.png" className="w-45 h-8" alt="" />
      </div>
      <ul className="flex justify-around items-center text-white gap-9">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-gray-300 cursor-pointer pb-1 ${
              isActive ? "text-white border-b-2 border-white" : "text-gray-300"
            }`
          }
        >
          HOME
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `hover:text-gray-300 cursor-pointer pb-1 ${
              isActive ? "text-white border-b-2 border-white" : "text-gray-300"
            }`
          }
        >
          ABOUT
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            `hover:text-gray-300 cursor-pointer pb-1 ${
              isActive ? "text-white border-b-2 border-white" : "text-gray-300"
            }`
          }
        >
          SKILLS
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `hover:text-gray-300 cursor-pointer pb-1 ${
              isActive ? "text-white border-b-2 border-white" : "text-gray-300"
            }`
          }
        >
          SERVICES
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            `hover:text-gray-300 cursor-pointer pb-1 ${
              isActive ? "text-white border-b-2 border-white" : "text-gray-300"
            }`
          }
        >
          PORTFOLIO
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `hover:text-gray-300 cursor-pointer pb-1 ${
              isActive ? "text-white border-b-2 border-white" : "text-gray-300"
            }`
          }
        >
          CONTACT
        </NavLink>
      </ul>
      <div className="flex justify-center items-center gap-4 text-white">
        <CgSun className="text-2xl text-white/70 font-bold" />
        <div className="py-1 px-3 font-semibold hover:bg-[#43D090]/80 cursor-pointer rounded bg-[#24ce81]">
          <span>Let's Talk</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
