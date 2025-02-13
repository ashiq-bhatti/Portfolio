import React, { useEffect } from "react";
import { HiMiniCodeBracket } from "react-icons/hi2";
import { MdAddAPhoto } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";
import AOS from 'aos'
import 'aos/dist/aos.css'
const Services = () => {
  useEffect(()=>{
    AOS.init({
      duration: 2000,
    })
  },[])
  return (
    <>
      <div className="bg-slate-900">
        <div className=" w-[90%] md:w-[84%] mx-auto bg-slate-900  flex-1   text-white">
          <h1 className="text-xl  md:text-2xl lg:text-3xl  flex gap-1 justify-center  font-bold text-green-500 mb-4 text-center">
            <span className="text-white pr-3 ">My</span>
            Services
          </h1>

          <div className="flex flex-col md:flex-row gap-4 pt-5"  data-aos='fade-up' >
            <div className="experience bg-slate-800 rounded-lg p-4 flex-1">
              <HiMiniCodeBracket className="text-4xl " />
              <h1 className="text-xl flex gap-2 md:text-xl    py-4 font-semibold">
                MERN Stack Developer
              </h1>

              <p>
                Building full-stack web applications with MongoDB, Express,
                React, and Node.js.
              </p>
            </div>

            <div className="experience bg-slate-800 rounded-lg p-4 flex-1">
              <HiMiniCodeBracket className="text-4xl " />
              <h1 className="text-xl flex gap-2 md:text-xl    py-4 font-semibold">
              Frontend Developer              </h1>

              <p>
              Crafting responsive and interactive web experiences.
              </p>
            </div>
            <div className="experience bg-slate-800 rounded-lg p-4 flex-1">
              <HiMiniCodeBracket className="text-4xl " />
              <h1 className="text-xl flex gap-2 md:text-xl    py-4 font-semibold">
                Backend Developer
              </h1>

              <p>
                Building secure and scalable server-side applications for
                seamless functionality.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 pt-5" data-aos='fade-up'>
            <div className="experience bg-slate-800 rounded-lg p-4 flex-1">
              <MdAddAPhoto className="text-4xl " />
              <h1 className="text-xl flex gap-2 md:text-xl    py-4 font-semibold">
                Photoshop Expert
              </h1>

              <p>
                Creating stunning graphics and visual content with precision.
              </p>
            </div>

            <div className="experience bg-slate-800 rounded-lg p-4 flex-1">
              <IoIosColorPalette className="text-4xl " />
              <h1 className="text-xl flex gap-2 md:text-xl    py-4 font-semibold">
                Graphic Designer
              </h1>

              <p>Creating eye-catching visuals and brand identities.</p>
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
