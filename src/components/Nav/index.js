import React from "react";
// import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import "../../App.css";
import "../../index.css";
import resume from "../../assets/files/Michael Napolitano-dev-resume.pdf";


function Nav(props) {
  const tabs =  ['About Me', 'Projects', 'Contact'];
  return (
    <nav className="bg-black flex justify-center lg:justify-between flex-wrap p-3 md:p-6 w-full h-36">
      <div className="flex items-center text-white mr-0">
        <img
          className="invisible md:visible lg:block lg:h-20 md:h-10 h-0 w-auto App-logo"
          src={logo}
          alt="react logo"
        />
        <a href='#'
        onClick={() => props.handlePageChange("#")}>
          <h1 className="text-4xl flex justify-center px-2">
            Michael Napolitano
          </h1>
        </a>
      </div>
      
      <div
        className="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block pt-4 sm:pt-6 lg:pt-0"
        id="nav-content"
      >
        <ul className="list-reset flex justify-center lg:justify-end flex-1 items-center text-xs xl:text-2xl sm:text-lg sm:font-medium">
          {tabs.map(tab => (
          <a key={tab}
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md  ring-2 mr-4 focus:bg-blue-500 focus:text-white"
            href={'#' + tab}
            onClick={() => props.handlePageChange(tab)}
          >
            {tab}
          </a>

          ))}
          
          <a
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md ring-2 focus:bg-blue-500 focus:text-white"
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
