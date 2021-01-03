import React from "react";
import profileImage from "../../assets/photos/color-profile3.jpeg";
import bwProfileImage from "../../assets/photos/bw-profile.jpeg";
import "../../App.css";
import { DiReact } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { DiSqllite } from "react-icons/di";
import { GiMustache } from "react-icons/gi";
import { SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { GrMysql } from "react-icons/gr";
import { SiTailwindcss } from "react-icons/si";
import { BiCube } from "react-icons/bi";
// import backgroundImage from "../../assets/photos/IMG_4317.JPG";

function About() {
  return (
    <main className="bg-gray-800 min-h-screen border-t-2 border-blue-400">
      <div className="container mx-auto aboslute sm:pt-5">
        <section className="bg-black lg:flex p-10">
          <img
            src={profileImage}
            className="w-32 h-32 lg:w-64 lg:h-64 mr-8 rounded"
            alt="Me!"
          />
          <div className="text-4xl text-white flex flex-col">
            <h1 className="text-6xl mb-20 ">
              <span className="text-blue-700"> I am a software </span>
              <span> engineer </span>
              <span className="text-blue-700"> who believes in the </span>
              <span> balance</span>
              <span className="text-blue-700"> of </span>
              <span> form</span>
              <span className="text-blue-700"> and </span>
              <span> function.</span>
            </h1>
            <p></p>
          </div>
        </section>
      </div>
      <div className="lg:p-5 md:pt-5 lg:pt-30 lg:mr-3 container mx-auto">
        <section className="bg-black lg:flex lg:p-10 lg:pt-5 text-lg flex flex-col lg:justify-center border-t-2 md:border-0 border-blue-800">
          {/* <div className=""> */}
          <h2 className="text-7xl text-gray-300 pb-5">My Toolbox</h2>
          <div className="text-6xl text-blue-400 border-0 md:border-t-2 border-blue-800 p-3 grid lg:grid-cols-6 xl:grid-cols-12">
            {/* <div className="grid lg:grid-cols-6 xl:grid-cols-12"> */}
            {/* <span className="text-7xl text-blue-300"> Node.js </span>
              <span className="text-5xl text-indigo-500"> MongoDb </span>
              <span className="text-7xl text-blue-300"> React </span>
              <span className="text-5xl text-indigo-900"> TailwindCSS </span>
              <span className="text-7xl text-indigo-400"> MySQL </span>
              <span className="text-5xl text-blue-500"> Mongoose </span>
              <span className="text-7xl  text-blue-800"> Javascript </span>
              <span className="text-6xl flex-col text-indigo-700">
                {" "}
                Handlebars{" "}
              </span>
              <span className="text-7xl  text-blue-300"> Sequelize </span> */}

            <span className="text-5xl flex flex-row mt-4 col-span-2 mb-2 text-gray-500">
              <IoLogoNodejs /> Node.js
            </span>
            <span className="text-5xl flex mt-4 col-span-2 text-blue-400">
              <GrMysql /> MySQL
            </span>
            <span className="text-5xl flex mt-4 col-span-3 text-blue-500">
              <SiTailwindcss /> TailwindCSS
            </span>
            <span className="text-5xl flex mt-4 col-span-2 App-link">
              <DiReact /> React
            </span>
            <span className="text-5xl flex mt-4 col-span-2">
              <DiJavascript /> JavaScript
            </span>
            <span className="text-5xl flex mt-4 col-span-3 text-green-400">
              <SiMongodb /> MongoDb
            </span>
            <span className="text-5xl flex mt-4 col-span-3 text-gray-400">
              <GiMustache /> Handlebars
            </span>
            <span className="text-5xl flex mt-4 col-span-2 text-blue-400">
              <DiSqllite /> SQLite
            </span>
            <span className="text-5xl flex mt-4 col-span-2 text-blue-600">
              <BiCube /> Sequelize
            </span>
          </div>
          {/* </div> */}
          <p></p>
          {/* </div> */}
        </section>
      </div>
    </main>
  );
}

export default About;
