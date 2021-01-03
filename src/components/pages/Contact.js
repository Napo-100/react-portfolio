import React from "react";
import { AiOutlineMail } from "react-icons/ai";

function Contact() {
  return (
    <main className="bg-gray-800 min-h-screen p-12 border-t-2 border-blue-400">
      {/* <h2 className="flex justify-center text-white text-5xl sm:text-7xl mb-8">
        Get in touch
      </h2> */}
      <div className="container mx-auto aboslute">
        <section className="bg-black lg:flex p-10 pb-20">
          <div className="text-lg flex flex-col justify-center">
            <h2 className="text-6xl mb-20 ">
              <span className="text-blue-700"> Let's work </span>
              <span className="text-white"> together </span>
              <span className="text-blue-700"> and </span>
              <span className="text-white"> create</span>
              <span className="text-blue-700"> something </span>
              <span className="text-white"> amazing.</span>
            </h2>
            <a
              href="mailto:michaeljnapolitano@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="text-white hover:text-blue-600 flex w-full h-28 z-10 top-0">
                <div className="text-7xl text-blue-600 pr-7">
                  <AiOutlineMail />
                </div>

                <div className="text-6xl pr-7">
                  Michaeljnapolitano@gmail.com
                </div>
              </div>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Contact;
