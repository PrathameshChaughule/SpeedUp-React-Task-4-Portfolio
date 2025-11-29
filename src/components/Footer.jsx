import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1E293C] text-gray-300 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col justify-center items-center">
        <div className="flex gap-6 text-sm">
          <NavLink to="/" className="hover:text-gray-300 cursor-pointer">
            HOME
          </NavLink>
          <NavLink to="/about" className="hover:text-gray-300 cursor-pointer">
            ABOUT
          </NavLink>
          <NavLink to="/skills" className="hover:text-gray-300 cursor-pointer">
            SKILLS
          </NavLink>
          <NavLink
            to="/services"
            className="hover:text-gray-300 cursor-pointer"
          >
            SERVICES
          </NavLink>
          <NavLink
            to="/portfolio"
            className="hover:text-gray-300 cursor-pointer"
          >
            PORTFOLIO
          </NavLink>
          <NavLink to="/contact" className="hover:text-gray-300 cursor-pointer">
            CONTACT
          </NavLink>
        </div>
      </div>
      <div className="text-center mt-2 text-lg text-gray-500">
        © {new Date().getFullYear()} Pratham — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
