import React, { useState } from "react";
import StickmanEquationEvasion from "../assets/Stickman.png";
import Portfolio from "../assets/Portfolio.png";
import Embedded from "../assets/Embedded.png"
import LoaderPage from "./LoaderPage";
import Footer from "./Footer";

function Projects() {
  const projects = [
    //An array handling my projects
    {
      id: 1,
      src: StickmanEquationEvasion,
      href1: "https://github.com/WilliamThompa/Stickman-Equation-Evasion",
      href2: "https://github.com/WilliamThompa/Stickman-Equation-Evasion",
      button1: "Repo",
      button2: "",
      alt: "Stickamn Logo",
    },
    {
      id: 2,
      src: Portfolio,
      href1: "https://github.com/WilliamThompa/WilliamThompsonPortfolio",
      href2: "https://github.com/WilliamThompa/WilliamThompsonPortfolio",
      button1: "Repo",
      button2: "",
      alt: "Logo for Portfolio",
    },
    {
      id: 3,
      src: Embedded,
      href1: "https://github.com/WilliamThompa/Illicit-Content-Switcher",
      href2: "https://github.com/WilliamThompa/Illicit-Content-Switcher",
      button1: "Repo",
      button2: "",
      alt: "Logo for commerce website",
    },
    
  ];

  return (
    <div>
      <LoaderPage />
      <div
        name="projects"
        className="bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950 w-full text-white md:h-screen"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            
          <div className='pb-4 mt-20 md:mt-32'>
            <p className='text-5xl font-bold inline border-b-4 border-yellow-400 text-yellow-400 '>Projects.</p>
          </div>

          <p className="py-5 text-xl">Check out my work below</p>

          <div className="grid place-items-center place-content-center sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {projects.map(
              (
                { id, src, href1, href2, button1, button2, alt } //This uses the array previously mentioned and feeds it into specfic parts
              ) => (
                <div
                  key={id}
                  className=" shadow-yellow-400 shadow-lg rounded-lg"
                >
                  <img
                    src={src}
                    alt={alt}
                    className="rounded-md duration-200 hover:scale-105"
                    loading="eager"
                  />
                  <div className="flex items-center justify-center">
                    <button className="w-1/2 px-6 py-3 m-4 duration-300 hover:scale-125 hover:text-yellow-400">
                      <a href={href1} target="_blank" rel="noreferrer">
                        {button1}
                      </a>
                    </button>
                    <button className="w-1/2 px-6 py-3 m-4 duration-300 hover:scale-125 hover:text-yellow-400">
                      <a href={href2} target="_blank" rel="noreferrer">
                        {button2}
                      </a>
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
