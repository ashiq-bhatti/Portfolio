import React from "react";

const Experience = () => {
  return (
    <div>
      <div className="resumedetails right flex-1 rounded-lg  text-white">
        <h1 className="text-xl  md:text-2xl lg:text-3xl flex gap-2 font-bold text-green-500 mb-4 text-center">
          <span className="text-white">My</span>
          Experience
        </h1>
        <p className="text-white">
          Engineered scalable full-stack applications with modern frameworks,
          reducing deployment time  while enhancing user retention.
        </p>

        <div className="flex flex-col md:flex-row gap-4 pt-5">
          <div className="experience bg-slate-800 rounded-lg p-4 flex-1">
            <p className="text-green-500">2024 - Present</p>
            <h1 className="text-lg font-semibold">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              Mern Stack Developer
            </h1>
            <p className="flex items-center gap-2 pb-2">
              <span className="inline-block w-2 h-2 bg-green-600 rounded-full"></span>
              MicroStar X
            </p>
            <p>
              Possess 8 months of professional experience in MERN stack
              development, delivering end-to-end solutions for dynamic,
              high-performance web applications.
            </p>
          </div>

          {/* Card 2 */}
          <div className="experience bg-slate-800 rounded-lg p-4 flex-1">
            <p className="text-green-500">2024 - Present</p>
            <h1 className="text-lg font-semibold">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              Internship
            </h1>
            <p className="flex items-center gap-2 pb-2">
              <span className="inline-block w-2 h-2 bg-green-600 rounded-full"></span>
              IIFA Tech
            </p>
            <p>
              Completed a 3-month internship at IIFA Tech, specializing in
              full-stack development using the MERN stack to build scalable,
              dynamic web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
