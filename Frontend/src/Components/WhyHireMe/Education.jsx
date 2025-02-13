import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Education = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    });
  },[])
  return (
    <div>
      <div className="resumedetails right flex-1 rounded-lg p-5 text-white">
      <h1 className="text-xl flex gap-2 md:text-2xl lg:text-3xl font-bold text-green-500 mb-4 text-center">
          <span className="text-white">My</span>
          Education
        </h1>
        <p className="text-white">
          To ensure that both the left section (containing the "Why Hire Me?"
          text and buttons) and the right section containing the Experience or
          Education
        </p>

        <div className="flex flex-col md:flex-row gap-4 pt-5" >
          <div className="experience bg-slate-800 rounded-lg p-4 flex-1" data-aos='fade-right'>
            <p className="text-green-500">2020 - 2024</p>
            <h1 className="text-lg font-semibold">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              BS Computer Science
            </h1>
            <p className="flex items-center gap-2 pb-2">
              <span className="inline-block w-2 h-2 bg-green-600 rounded-full"></span>
              University Of Sargodah
            </p>
            <p>
            Bachelor's degree in Computer Science with a strong foundation in programming and software development.
            </p>
          </div>

          <div className="experience bg-slate-800 rounded-lg p-4 flex-1" data-aos='fade-left'>
            <p className="text-green-500">2018 - 2020</p>
            <h1 className="text-lg font-semibold">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              ICS
            </h1>
            <p className="flex items-center gap-2 pb-2">
              <span className="inline-block w-2 h-2 bg-green-600 rounded-full"></span>
              Al-Falah Collage
            </p>
            <p>
            Intermediate in Computer Science (ICS) with a focus on programming and IT fundamentals.
            </p>
          </div>
        </div>

         {/* <div className="flex flex-col md:flex-row gap-4 pt-5">
          <div className="experience bg-slate-800 rounded-lg p-4 flex-1">
            <p className="text-green-500">2016 - 2018</p>
            <h1 className="text-lg font-semibold">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              Matric In Science
            </h1>
            <p className="flex items-center gap-2 pb-2">
              <span className="inline-block w-2 h-2 bg-green-600 rounded-full"></span>
              School No 1
            </p>
            <p>
              To ensure that both the left section containing the "Why Hire Me?"
              text and buttons
            </p>
          </div>
        </div>  */}
      </div>
    </div>
  );
};

export default Education;