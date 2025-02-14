import React, { useState, useEffect } from "react";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { FaJsSquare } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
const Skills = () => {
  const [hoveredBox, setHoveredBox] = useState(null);

  const handleMouseEnter = (title) => {
    setHoveredBox(title);
  };

  const handleMouseLeave = () => {
    setHoveredBox(null);
  };
  useEffect(() => {
    AOS.init(
      {
        duration: 2000,
      },
      []
    );
  });
  return (
    <div>
      <div className="resumedetails right flex-1 rounded-lg p-5 text-white">
        <h1 className="text-xl flex gap-2 md:text-2xl lg:text-3xl font-bold text-green-500 mb-4 text-center">
          <span className="text-white">My</span>
          Skills
        </h1>
        <p className="text-white">
          To ensure that both the left section (containing the "Why Hire Me?"
          text and buttons) and the right section containing the Experience or
          Education
        </p>

        <div
          className="flex flex-wrap justify-between gap-4 pt-5"
          data-aos="fade-down"
        >
          <div
            className="experience bg-slate-800 rounded-lg p-6 relative flex items-center justify-center"
            onMouseEnter={() => handleMouseEnter("HTML")}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredBox === "HTML" && (
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-lg text-sm min-w-[80px] w-max text-center">
                HTML5
              </div>
            )}
            <FaHtml5 className="text-6xl xl:text-8xl " />
          </div>

          <div
            className="experience bg-slate-800 rounded-lg p-6 relative flex items-center justify-center"
            onMouseEnter={() => handleMouseEnter("css3")}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredBox === "css3" && (
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-lg text-sm min-w-[80px] w-max text-center">
                CSS3
              </div>
            )}
            <IoLogoCss3 className="text-6xl xl:text-8xl" />
          </div>

          <div
            className="experience bg-slate-800 rounded-lg p-6 relative flex items-center justify-center"
            onMouseEnter={() => handleMouseEnter("vite")}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredBox === "vite" && (
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-lg text-sm min-w-[80px] w-max text-center">
                Vite
              </div>
            )}
            <SiVite className="text-6xl xl:text-8xl" />
          </div>

          <div
            className="experience bg-slate-800 rounded-lg p-6 relative flex items-center justify-center"
            onMouseEnter={() => handleMouseEnter("Tailwind css")}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredBox === "Tailwind css" && (
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-lg text-sm min-w-[80px] w-max text-center">
                Tailwind CSS
              </div>
            )}
            <SiTailwindcss className="text-6xl xl:text-8xl" />
          </div>
        </div>

        <div
          className="flex flex-wrap justify-between gap-4 pt-5"
          data-aos="fade-up"
        >
          <div
            className="experience bg-slate-800 rounded-lg p-6 relative flex items-center justify-center"
            onMouseEnter={() => handleMouseEnter("js")}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredBox === "js" && (
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-lg text-sm min-w-[80px] w-max text-center">
                JavaScript
              </div>
            )}
            <FaJsSquare className="text-6xl xl:text-8xl" />
          </div>

          <div
            className="experience bg-slate-800 rounded-lg p-6 relative flex items-center justify-center"
            onMouseEnter={() => handleMouseEnter("React")}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredBox === "React" && (
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-lg text-sm min-w-[80px] w-max text-center">
                React
              </div>
            )}
            <FaReact className="text-6xl xl:text-8xl" />
          </div>

          <div
            className="experience bg-slate-800 rounded-lg p-6 relative flex items-center justify-center"
            onMouseEnter={() => handleMouseEnter("Node.js")}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredBox === "Node.js" && (
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-lg text-sm min-w-[80px] w-max text-center">
                Node.js
              </div>
            )}
            <IoLogoNodejs className="text-6xl xl:text-8xl" />
          </div>

          <div
            className="experience bg-slate-800 rounded-lg p-6 relative flex items-center justify-center"
            onMouseEnter={() => handleMouseEnter("Mongo db")}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredBox === "Mongo db" && (
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-lg text-sm min-w-[80px] w-max text-center">
                MongoDB
              </div>
            )}
            <SiMongodb className="text-6xl xl:text-8xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
