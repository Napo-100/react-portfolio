import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white flex items-center lg:justify-end justify-center p-6 w-full h-28 z-10 top-0">
      <a
        href="https://www.linkedin.com/in/michael-napolitano-0a5b1094/"
        target="_blank" rel="noreferrer"
      >
        <div className="text-6xl hover:text-blue-400 pr-7">
          <AiFillLinkedin />
        </div>
      </a>
      <a href="https://github.com/Napo-100" target="_blank" rel="noreferrer">
        <div className="text-6xl hover:text-black pr-7">
          <AiFillGithub />
        </div>
      </a>
      <a href="mailto:michaeljnapolitano@gmail.com" target="_blank" rel="noreferrer">
        <div className="text-6xl hover:text-blue-800 pr-7">
          <AiOutlineMail />
        </div>
      </a>
    </footer>
  );
}

export default Footer;
