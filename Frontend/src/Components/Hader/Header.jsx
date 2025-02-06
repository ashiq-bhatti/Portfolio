import React, { useState } from "react";
import { Link } from "react-scroll"; 
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-slate-900 py-2 flex justify-between items-center px-4 md:px-10 lg:px28 border-b-2 border-gray-800">
      <Link
        to="hero"
        smooth={true}
        duration={500}
        className="text-2xl text-white hover:text-green-500 transition duration-300 cursor-pointer"
      >
        Ashiq Hussain
      </Link>

      {/* Mobile Menu Icon */}
      <div className="md:hidden text-white cursor-pointer" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-10 font-semibold">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="text-white hover:text-green-500 transition duration-300 cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="Services"
          smooth={true}
          duration={500}
          className="text-white hover:text-green-500 transition duration-300 cursor-pointer"
        >
          Services
        </Link>
        <Link
          to="whyhire"
          smooth={true}
          duration={500}
          className="text-white hover:text-green-500 transition duration-300 cursor-pointer"
        >
          Resume
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="text-white hover:text-green-500 transition duration-300 cursor-pointer"
        >
          Portfolio
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="text-white hover:text-green-500 transition duration-300 cursor-pointer"
        >
          Contact
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-slate-900 py-5 flex flex-col items-center gap-5 md:hidden">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-white hover:text-green-500 transition duration-300 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
          to="Services"
          smooth={true}
          duration={500}
          className="text-white hover:text-green-500 transition duration-300 cursor-pointer"
        >
          Services
        </Link>
          <Link
            to="whyhire"
            smooth={true}
            duration={500}
            className="text-white hover:text-green-500 transition duration-300 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Resume
          </Link>
          <Link
          to="projects"
          smooth={true}
          duration={500}
          className="text-white hover:text-green-500 transition duration-300 cursor-pointer"
        >
          Portfolio
        </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-white hover:text-green-500 transition duration-300 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
