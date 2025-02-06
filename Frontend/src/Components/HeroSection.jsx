import React, { useState } from "react";
import HeroImage from "../../assets/images/a.png";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { RiVercelLine } from "react-icons/ri";
import Resume from '../../assets/AshiqHussainCv.pdf'

const HeroSection = () => {
  const [hoverIcon, setHoverIcon] = useState(null);
  const handleMouseEnter = (title) => {
    setHoverIcon(title);
  };
  const handleMouseLeave = () => {
    setHoverIcon(null);
  };
  return (
    <div className="bg-slate-900">
      <div className="heroContainer w-[84%] m-auto flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 py-16 lg:py-32 justify-center items-center">
        <div className="heroLeft text-white text-center lg:text-left">
          <h1 className="text-3xl font-bold">Hi, I'm Ashiq Hussain</h1>
          <h1 className="text-2xl font-semibold py-2">MERN Stack Developer</h1>
          <p className="max-w-md mx-auto lg:mx-0">
            Specializing in building dynamic, responsive, and scalable web
            applications. With expertise in MongoDB, Express.js, React, and
            Node.js, I transform ideas into seamless digital experiences. Let's
            create something amazing together.
          </p>
          <div className="flex items-center justify-center lg:justify-start gap-5 my-6">
            <button className="rounded-3xl text-black bg-green-500 py-1 px-4 hover:bg-green-700 transition duration-300">
              <a href={Resume} download={'Resume'}>Download CV </a>
            </button>
            <div className="relative inline-block">
            <a
              href="https://www.linkedin.com/in/ashiqhussain292/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => handleMouseEnter("linkedIn")}
              onMouseLeave={handleMouseLeave}
            >
              {hoverIcon === "linkedIn" && (
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white text-slate-900  py-1 rounded-lg text-sm min-w-[70px] w-max text-center">
                  Linked In
                </div>
              )}
              <FaLinkedinIn className="w-8 h-8 rounded-full border border-green-500 text-green-500 text-2xl p-1 hover:text-white hover:border-white transition duration-300" />
            </a></div>
            <div className="relative inline-block">

            <a
              href="https://github.com/ashiq-bhatti"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => handleMouseEnter("gitgub")}
              onMouseLeave={handleMouseLeave}
            >{hoverIcon === "gitgub" && (
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white text-slate-900  py-1 rounded-lg text-sm min-w-[70px] w-max text-center">
                GitHub
              </div>
            )}
              <FaGithub className="w-8 h-8 rounded-full border border-green-500 text-green-500 text-2xl p-1 hover:text-white hover:border-white transition duration-300" />
            </a></div>
            <div className="relative inline-block">

            <a
              href="https://vercel.com/ashiq-hussains-projects"
              target="_blank"
              rel="noopener noreferrer" onMouseEnter={() => handleMouseEnter("Vercel")}
              onMouseLeave={handleMouseLeave}
            >{hoverIcon === "Vercel" && (
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white text-slate-900  py-1 rounded-lg text-sm min-w-[70px] w-max text-center">
                Vercel
              </div>
            )}
              <RiVercelLine className="w-8 h-8 rounded-full border border-green-500 text-green-500 text-2xl p-1 hover:text-white hover:border-white transition duration-300" />
            </a>
            </div>
          </div>
        </div>

        <div className="heroRight w-full lg:w-[70%] flex justify-center">
          <div className="rounded-full border-2 border-green-600 overflow-hidden px-7 pt-4 w-64 h-64 lg:w-80 lg:h-80">
            <img
              src={HeroImage}
              alt="Ashiq Hussain"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
