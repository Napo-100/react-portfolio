import React, { useState } from "react";

import myStudioPortal from "../../assets/project-images/mystudioportal.png";
import tourVid from "../../assets/project-images/tourvidApp.png";

function Projects() {
  const [projects] = useState([
    {
      name: "My Studio Portal",
      image: myStudioPortal,
      link: "https://pacific-river-56030.herokuapp.com/",
      components: "Node.js, Sequelize, Handlebars.js, Bootstrap",
    },
    {
      name: "Travel App",
      image: tourVid,
      link: "https://napo-100.github.io/Covid-travel-safety-app/",
      components: "Javascript, Bulma, JQuery",
    },
  ]);
  const [projectData, setProject] = useState(projects);

  return (
    <main className="bg-blue-200 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="flex justify-center text-indigo-800 font-extrabold sm:text-5xl md:text-6xl mb-4">
          My Projects
        </h1>
        <h2 className="text-2xl text-gray-900 flex justify-center mb-10">
          Check 'em out!
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData &&
            projectData.map((projects, index) => (
              <article className="hover:shadow-xl group">
                <a href={projects.link} target="_blank">
                  <span className="block h-64 relative rounded shadow leading-snug ">
                    <img
                      src={projects.image}
                      className="w-full h-full rounded-r absolute "
                    />
                    <span className="group block relative h-full flex justify-start items-end pb-1 pl-1 hover:bg-blue-400 hover:bg-opacity-75">
                      <div className="px-3 py-4 bg-blue-600 bg-opacity-75 group-hover:bg-opacity-0">
                        <h3 className="text-white group-hover:text-gray-900 text-lg font-bold">
                          {projects.name}
                        </h3>
                        <p className="text-white group-hover:text-gray-900">
                          {projects.components}
                        </p>
                      </div>
                    </span>
                  </span>
                </a>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}

export default Projects;
