import React from "react";

const About = () => {
  return (
    <>
      <div className="resumedetails right flex-1 rounded-lg  p-5 text-white">
      <h1 className="text-xl flex gap-2 md:text-2xl lg:text-3xl font-bold text-green-500 mb-4 text-center">
          <span className="text-white">About</span>
          Me
        </h1>
        <p className="text-white">
          To ensure that both the left section (containing the "Why Hire Me?"
          text and buttons) and the right section containing the Experience or
          Education
        </p>
        <div className="pt-5">
          <div className="w-full flex flex-col md:flex-row justify-between gap-4 p-2">
            <p className="flex items-center gap-3 pb-2 min-w-[150px]">
              <span className="   text-green-500 rounded-full">
                Name
              </span>
              Ashiq Hussain
            </p>
            <p className="flex items-center gap-3 pb-2 min-w-[150px]">
              <span className="   text-green-500 rounded-full">
                Gender
              </span>
              Male
            </p>
            <p className="flex items-center gap-3 pb-2 min-w-[150px]">
              <span className="   text-green-500 rounded-full">
                Age
              </span>
              28 Y
            </p>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between gap-4 p-2">
            <p className="flex items-center gap-3 pb-2 min-w-[150px]">
              <span className="   text-green-500 rounded-full">
                Status
              </span>
              Single
            </p>
            <p className="flex items-center gap-3 pb-2 min-w-[150px]">
              <span className="   text-green-500 rounded-full">
                City
              </span>
              Lahore
            </p>
            <p className="flex items-center gap-3 pb-2 min-w-[150px]">
              <span className="   text-green-500 rounded-full">
                Nationality
              </span>
              Pakistan
            </p>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between gap-4 p-2">
            <p className="flex items-center gap-3 pb-2 min-w-[150px]">
              <span className="   text-green-500 rounded-full">
                Experience
              </span>
              8 Months
            </p>
            <p className="flex items-center gap-3 pb-2 min-w-[150px]">
              <span className="   text-green-500 rounded-full">
                Available
              </span>
              Full Time
            </p>
            <p className="flex items-center gap-3 pb-2 min-w-[150px]">
              <span className="   text-green-500 rounded-full">
                Freelance
              </span>
              Available
            </p>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between gap-4 p-2">
            <p className="flex items-center gap-3 pb-2 min-w-[150px]">
              <span className="   text-green-500 rounded-full">
                Phone
              </span>
              +92 3029047292
            </p>
            <p className="flex items-center gap-3 pb-2 min-w-[150px]">
              <span className="   text-green-500 rounded-full">
                Email
              </span>
              ashiqbhatti217@gmail.com
            </p>
            <p className="flex items-center gap-3 pb-2 min-w-[150px]">
              <span className="   text-green-500 rounded-full">
                Language
              </span>
              Urdu, English
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;