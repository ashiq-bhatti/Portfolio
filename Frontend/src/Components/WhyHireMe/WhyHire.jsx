import React, { useState } from "react";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import About from "./About";
const WhyHire = () => {
  const [activeSection, setActiveSection] = useState("experience");

  return (
    <div className="bg-slate-900 py-10">
      <div className="bg-slate-900 w-[90%] md:w-[84%] mx-auto flex flex-col lg:flex-row  gap-8">
        {/* Left Section - 50% width */}
        <div className="left text-white flex-1 w-full lg:1/3">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
            Why Hire Me?
          </h1>
          <p className="my-4">
            Skilled MERN Stack Developer with real-world experience, delivering
            scalable and efficient web solutions.
          </p>
          <div className="flex flex-col gap-5">
            <button
              className={`resumebtn rounded-lg p-2 px-20 transition duration-300 ${
                activeSection === "experience"
                  ? "border-2 border-green-500 text-white"
                  : "bg-slate-800 text-gray-300"
              }`}
              onClick={() => setActiveSection("experience")}
            >
              Experience
            </button>

            <button
              className={`resumebtn rounded-lg p-2 px-20 transition duration-300 ${
                activeSection === "education"
                  ? "border-2 border-green-500 text-white"
                  : "bg-slate-800 text-gray-300"
              }`}
              onClick={() => setActiveSection("education")}
            >
              Education
            </button>
            <button
              className={`resumebtn rounded-lg p-2 px-20 transition duration-300 ${
                activeSection === "skills"
                  ? "border-2 border-green-500 text-white"
                  : "bg-slate-800 text-gray-300"
              }`}
              onClick={() => setActiveSection("skills")}
            >
              Skills
            </button>
            <button
              className={`resumebtn rounded-lg p-2 px-20 transition duration-300 ${
                activeSection === "about me"
                  ? "border-2 border-green-500 text-white"
                  : "bg-slate-800 text-gray-300"
              }`}
              onClick={() => setActiveSection("about me")}
            >
              About Me
            </button>
          </div>
        </div>

        <div className="right w-[90%] md:w-[84%] mx-auto">
          {activeSection === "experience" && <Experience />}
          {activeSection === "education" && <Education />}
          {activeSection === "skills" && <Skills />}
          {activeSection === "about me" && <About />}

        </div>
      </div>
    </div>
  );
};

export default WhyHire;
