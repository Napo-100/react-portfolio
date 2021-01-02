import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";

import myStudioPortal from "../../assets/project-images/mystudioportal.png";
import tourVid from "../../assets/project-images/tourvidApp.png";
import travelPic from "../../assets/project-images/travel.jpg";
import passGen from "../../assets/project-images/password-generator.jpg";
import portfolioTemp from "../../assets/project-images/portfolio-temp.png";
import noteTaker from "../../assets/project-images/note-taker.png";

function Projects() {
  const [projectData] = useState([
    {
      name: "My Studio Portal",
      image: myStudioPortal,
      link: "https://pacific-river-56030.herokuapp.com/",
      components: "Node.js, Sequelize, Handlebars.js, Bootstrap",
      github: "https://github.com/jrsparl/UCF-mystudioportal.git",
    },
    {
      name: "Travel App",
      image: travelPic,
      link: "https://napo-100.github.io/Covid-travel-safety-app/",
      components: "Javascript, Bulma, 3rd-party-API",
      github: "https://github.com/Napo-100/Covid-travel-safety-app.git",
    },
    {
      name: "Password Generator",
      image: passGen,
      link: "https://napo-100.github.io/challenge-three-password-generator/",
      components: "Javascript, CSS",
      github: "https://github.com/Napo-100/challenge-three-password-generator",
    },
    {
      name: "Simple Portfolio mock-up",
      image: portfolioTemp,
      link: "https://napo-100.github.io/Michael-HTML-CSS-Portfolio/",
      components: "HTML, CSS",
      github: "https://github.com/Napo-100/Michael-HTML-CSS-Portfolio",
    },
    {
      name: "Note Taker",
      image: noteTaker,
      link: "https://protected-brushlands-16725.herokuapp.com/",
      components: "Javascript, Express.js, CSS",
      github: "https://github.com/Napo-100/Note-Taker",
    },
  ]);

  return (
    <main className="bg-black min-h-screen p-12 border-t-2 border-blue-400">
      <section className="container mx-auto ">
        <h1 className="flex justify-center text-blue-600 font-bold sm:text-5xl md:text-6xl mb-8">
          My Projects
        </h1>
        {/* <h2 className="text-2xl text-blue-400 flex justify-center mb-10">
          Check 'em out!
        </h2> */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 border-2 border-blue-300 p-10">
          {projectData.map((projects) => (
            <div className="hover:bg-blue-900">
              <article className="hover:shadow-xl group">
                <a href={projects.link} target="_blank">
                  <span className="block h-64 relative rounded shadow leading-snug">
                    <img
                      src={projects.image}
                      className="w-full h-full rounded-r absolute"
                    />
                    <span className=" block relative h-full flex justify-start items-end pb-1 pl-1 hover:bg-blue-400 hover:bg-opacity-75">
                      <div className="px-3 py-4 bg-blue-600 bg-opacity-75">
                        <h3 className="text-white  text-lg font-bold">
                          {projects.name}
                        </h3>
                        <p className="text-white ">{projects.components}</p>
                      </div>
                    </span>
                  </span>
                </a>
              </article>
              <a href={projects.github} target="_blank" className="text-4xl">
                <div className="grid text-black grid-cols-8">
                  <AiFillGithub />
                  <p className="text-black text-sm col-span-7">
                    pst...click down here to check out the code for{" "}
                    <span>{projects.name}</span>
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Projects;