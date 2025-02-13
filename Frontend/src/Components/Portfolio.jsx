import { FaGithub } from "react-icons/fa6";
import { project } from "../Routes/StaticApi";
import { RiDragMoveLine } from "react-icons/ri";
import { useRef } from "react";
import Slider from "react-slick";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Portfolio = () => {
  const sliderRef = useRef(null);

  const sliderSetting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-slate-900 ">
      <div className="w-[90%] md:w-[84%] mx-auto">
        <h1 className="text-xl  md:text-2xl lg:text-3xl   flex gap-1 justify-center font-bold text-green-500  text-center">
          <span className="text-white pr-3">Latest</span> Projects
        </h1>
        <Slider ref={sliderRef} {...sliderSetting} className="">
          {project.map((project) => (
            <div key={project._id} className=" ">
              <div className=" rounded-lg  flex flex-col-reverse lg:flex-row justify-center  lg:w-full items-center my-10  ">
                <div className="p-8 w-full lg:w-1/2 ">
                  <h1 className="text-white text-2xl md:text-4xl font-bold">
                    {project._id}
                  </h1>
                  <h2 className=" text-white text-xl md:text-2xl font-bold py-3">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 text-sm md:text-base">
                    {project.description}
                  </p>
                  <p className="text-green-500 py-2 text-sm md:text-base">
                    {project.skillUsed}
                  </p>
                  <hr className="my-3 border-gray-600" />

                  <div className="flex gap-4">
                    <a
                      href={project.Livelink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform transform hover:scale-110"
                    >
                      <RiDragMoveLine className="w-6 md:w-8 h-6 md:h-8 text-green-500 hover:text-white transition duration-300" />
                    </a>
                    <a
                      href={project.gitHub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform transform hover:scale-110"
                    >
                      <FaGithub className="w-6 md:w-8 h-6 md:h-8 text-green-500 hover:text-white transition duration-300" />
                    </a>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt="Project"
                    className="w-full h-[400px] md:h-[500px] lg:h-[600px] "
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex justify-end gap-3 ">
          <button
            className="text-green-500 rounded-md border-2 border-green-500 text-3xl md:text-4xl"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <GrFormPrevious />
          </button>
          <button
            className="text-green-500 rounded-md border-2 border-green-500 text-3xl md:text-4xl"
            onClick={() => sliderRef.current.slickNext()}
          >
            <MdNavigateNext />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
