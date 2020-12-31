import React from "react";
import { Link } from "react-router-dom";
import myStudioPortal from "../../assets/project-images/mystudioportal.png";
import tourVid from "../../assets/project-images/tourvidApp.png";

function Projects() {
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
          <article>
            <a
              href="https://pacific-river-56030.herokuapp.com/"
              target="_blank"
            >
              <span>
                <img src={myStudioPortal} />
                <span>
                  <h3>My Studio Portal</h3>
                </span>
              </span>
            </a>
          </article>
          <article>
            <a
              href="https://napo-100.github.io/Covid-travel-safety-app/"
              target="_blank"
            >
              <span>
                <img src={tourVid} />
                <span>
                  <h3>Travel Information App</h3>
                </span>
              </span>
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Projects;
