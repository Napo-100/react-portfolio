import React from "react";
import { AiFillGithub } from "react-icons/ai";
import profileImage from "../../assets/photos/profile.jpg";
// import heroImage from "../../assets/photos/IMG_5703.JPG";

function Home() {
  return (
    <main className="bg-black min-h-screen">
      <div className="container mx-auto  aboslute lg:pt-5 group border-2 border-blue-300">
        <a href="https://github.com/Napo-100" target="_blank">
          <section className="lg:flex p-5 pb-10 justify-center m-20">
            <div className="text-lg flex flex-col relative group grid lg:grid-cols-2 xl:grid-cols-11">
              <h1 className="text-6xl text-blue-300 mb-5 col-span-2">
                <span className="text-6xl font-bold text-blue-300"> I am </span>{" "}
                <span className="text-black group-hover:text-blue-300 text-6xl font-bold">
                  {" "}
                  a{" "}
                </span>
                <span className="text-black text-6xl group-hover:text-indigo-700 "></span>
              </h1>
              <h1 className="text-6xl text-blue-300 mb-10 xl:col-span-3 lg:col-span-2">
                <span className="text-indigo-700 text-6xl group-hover:text-blue-300 font-bold">
                  {" "}
                  Passionate
                </span>
                <br></br>
                <span className="text-black text-6xl group-hover:text-indigo-700">
                  {" "}
                  Worker{" "}
                </span>
                <br></br>{" "}
                <span className="text-indigo-700 text-6xl grid-cols"> </span>
              </h1>

              <h1 className="text-6xl text-blue-300 mb-10 xl:col-span-3 lg:col-span-2">
                <span className="text-indigo-700 text-6xl group-hover:text-blue-300 font-bold">
                  Creative
                </span>
                <br></br>
                <span className="text-indigo-700 text-6xl"> </span>
                <span className="text-black text-6xl group-hover:text-indigo-700">
                  {" "}
                  Problem Solver{" "}
                </span>
                <br></br> <span className="text-indigo-700 text-6xl "> </span>
              </h1>
              <h1 className="text-6xl text-blue-300 mb-10 xl:col-span-3 lg:col-span-2">
                <span className="text-indigo-700 text-6xl group-hover:text-blue-300 font-bold">
                  Ambitious
                </span>
                <br></br>
                <span className="text-black group-hover:text-indigo-700 text-6xl">
                  {" "}
                  Full Stack{" "}
                </span>
                <span className="text-black group-hover:text-indigo-700 text-6xl">
                  {" "}
                  Web{" "}
                </span>
                <br></br>{" "}
                <span className="text-black group-hover:text-indigo-700 text-6xl">
                  {" "}
                  Developer{" "}
                </span>
              </h1>
            </div>
            <span className="inline text-black text-6xl group-hover:text-blue-300">
              <p className="">
                <AiFillGithub />
              </p>
              <p className="group-hover:text-blue-500">
                <AiFillGithub />
              </p>
              <p className="group-hover:text-blue-700">
                <AiFillGithub />
              </p>
              <p className="group-hover:text-indigo-700">
                <AiFillGithub />
              </p>
            </span>
          </section>
        </a>
      </div>
    </main>
  );
}

export default Home;
