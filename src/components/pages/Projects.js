import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";

import myStudioPortal from "../../assets/project-images/mystudioportal.png";
import creativeSquare from "../../assets/project-images/creative-square.png";
import travelPic from "../../assets/project-images/travel.jpg";
import passGen from "../../assets/project-images/password-generator.jpg";
import portfolioTemp from "../../assets/project-images/portfolio-temp.png";
import noteTaker from "../../assets/project-images/note-taker.png";

function Projects() {
  const [projectData] = useState([
    {
      name: "Creative Square",
      image: creativeSquare,
      link: "https://creative-square.herokuapp.com/",
      components: "MERN stack GraphQL, TaildwindCSS",
      github: "https://github.com/Napo-100/creative-square",
    },
    {
      name: "My Studio Portal",
      image: myStudioPortal,
      link:
        "https://drive.google.com/file/d/10eCX8sYhjsEuwyvgbSre8sPNIxRyDOp4/view",
      components: "Node.js, Express.js, Sequelize, Handlebars.js, Bootstrap",
      github: "https://github.com/jrsparl/UCF-mystudioportal/tree/develop",
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
    <main className="bg-black min-h-screen p-3 md:p-12 border-t-2 border-blue-400">
      <section className="container mx-auto ">
        <h2 className="flex justify-center text-blue-500 text-5xl sm:text-6xl mb-8">
          My Projects
        </h2>
        {/* <h2 className="text-2xl text-blue-400 flex justify-center mb-10">
          Check 'em out!
        </h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 lg:gap-8 border-2 border-blue-300 p-2 md:p-6 lg:p-8">
          {projectData.map((project) => (
            <div key={project.name} className="hover:bg-indigo-500">
              <article className="hover:shadow-xl group">
                <a href={project.link} target="_blank" rel="noreferrer">
                  <span className="block h-64 relative rounded shadow leading-snug">
                    <img
                      src={project.image}
                      className="w-full h-full rounded absolute"
                      alt="project"
                    />
                    <span className=" block relative h-full flex justify-start items-end pb-1 pl-1 hover:bg-blue-400 hover:bg-opacity-75">
                      <div className="px-3 py-4 bg-blue-600 bg-opacity-75">
                        <h3 className="text-white  text-lg font-bold">
                          {project.name}
                        </h3>
                        <p className="text-white ">{project.components}</p>
                      </div>
                    </span>
                  </span>
                </a>
              </article>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-4xl"
              >
                <div className="grid text-black grid-cols-8  hover:bg-blue-500">
                  <AiFillGithub />
                  <p className="text-black text-sm col-span-7">
                    pst...click down here to check out the code for{" "}
                    <span>{project.name}</span>
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
