import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import "../../App.css";
import "../../index.css";
import resume from "../../assets/files/Michael Napolitano-dev-resume.pdf";

function Nav() {
  return (
    <nav className="bg-black flex items-center justify-between flex-wrap p-6 w-full h-36 z-10 top-0">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img
          className="lg:block h-20 w-auto App-logo"
          src={logo}
          alt="react logo"
        />
        <Link
          className="text-white  px-3 py-2 rounded-md text-xl font-medium"
          to="/"
        >
          <h5 className="text-4xl text-white flex justify-center">
            Michael Napolitano
          </h5>
        </Link>
      </div>
      {/* Burger collapse for smaller screen sizes */}
      <div className="block lg:hidden">
        <button
          id="nav-toggle"
          className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0"
        id="nav-content"
      >
        <ul className="list-reset lg:flex justify-end flex-1 items-center">
          <Link
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md xl:text-2xl lg:text-lg font-medium ring-2 mr-4 focus:bg-blue-500 focus:text-white"
            to="/aboutme"
          >
            About Me
          </Link>
          <Link
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md xl:text-2xl lg:text-lg font-medium ring-2 mr-4 focus:bg-blue-500 focus:text-white"
            to="/projects"
          >
            Projects
          </Link>
          <Link
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md xl:text-2xl lg:text-lg font-medium ring-2 mr-4 focus:bg-blue-500 focus:text-white"
            to="/contact"
          >
            Contact
          </Link>
          <a
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md xl:text-2xl lg:text-lg font-medium ring-2 focus:bg-blue-500 focus:text-white"
            href={resume}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
