
import React from "react";
import HeroSection from "../../Components/HeroSection";
import Services from "../../Components/Services";
import WhyHire from "../../Components/WhyHireMe/WhyHire";
import Contact from "../Contact/index"; 
import Portfolio from "../../Components/Portfolio";
const Home = () => {
  return (
    <div>
      <div id="hero">
        <HeroSection />
      </div>
      <div id="Services">
        <Services />
      </div>
      <div id="whyhire">
        <WhyHire />
      </div>
      <div id="projects">
        <Portfolio />
        
      </div>
      <div id="contact">
        <Contact />
        
      </div>
    </div>
  );
};

export default Home;
