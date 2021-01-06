import React from "react";
import { AiOutlineMail } from "react-icons/ai";

function Contact() {
  return (
    <main className="bg-gray-800 min-h-screen p-2 sm:p-4 lg:p-6 border-t-2 border-blue-400">
      {/* <h2 className="flex justify-center text-white text-5xl sm:text-7xl mb-8">
        Get in touch
      </h2> */}
      <div className="container mx-auto aboslute">
        <section className="bg-black lg:flex p-5 sm:p-10 pb-5 sm:pb-20">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl sm:text-6xl mb-5 sm:mb-20 ">
              <span className="text-blue-700"> Let's work </span>
              <span className="text-white"> together </span>
              <span className="text-blue-700"> and </span>
              <span className="text-white"> create</span>
              <span className="text-blue-700"> something </span>
              <span className="text-white"> amazing.</span>
            </h2>
            <div className="text-white flex w-full h-28 z-10 top-0">
                <a
                  href="mailto:michaeljnapolitano@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
              <div className="text-3xl md:text-5xl lg:text-7xl text-blue-600 pr-1 sm:pr-7">
                  <AiOutlineMail />
              </div>
                </a>
              <div className="text-sm md:text-3xl lg:text-5xl lg:pr-7">
                <a
                  href="mailto:michaeljnapolitano@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600"
                >
                  Michaeljnapolitano@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Contact;
