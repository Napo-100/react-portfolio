import React from "react";
import { Link } from "react-router-dom";
// import { AiFillGithub } from "react-icons/ai";
// import profileImage from "../../assets/photos/profile.jpg";
// import heroImage from "../../assets/photos/IMG_5703.JPG";

function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Link to="/aboutme">
        <div className="container mx-auto lg:aboslute lg:pt-5 group border-2 border-blue-400">
          <section className="lg:flex p-5 lg:pb-10 lg:justify-center m-20 md:m-5">
            <div className="text-7xl md:text-6xl md:text-center lg:flex lg:flex-col lg:relative group lg:grid lg:grid-cols-4 xl:grid-cols-12">
              <h1 className="text-blue-400 mb-5 col-span-2">
                <span className=" font-bold lg:pl-4 md:pl-2"> I am </span>{" "}
                <span className="visible md:invisible group-hover:visible text-blue-400 font-bold">
                  {" "}
                  a{" "}
                </span>
              </h1>
              <h1 className="text-blue-400 mb-10 xl:col-span-4 lg:col-span-2 md:col-span-3">
                <span className="text-blue-400 md:text-indigo-600 group-hover:text-blue-400 font-bold">
                  {" "}
                  Passionate
                </span>
                <br></br>
                <span className="visible md:invisible group-hover:visible text-indigo-600 lg:text-5xl">
                  {" "}
                  Worker{" "}
                </span>
              </h1>

              <h1 className="text-blue-400 mb-10 xl:col-span-3 lg:col-span-2">
                <span className="text-blue-400 md:text-indigo-600 group-hover:text-blue-400 font-bold">
                  Creative
                </span>
                <br></br>

                <span className="visible md:invisible group-hover:visible text-indigo-600 lg:text-5xl">
                  {" "}
                  Problem Solver{" "}
                </span>
              </h1>
              <h1 className="text-blue-400 mb-10 xl:col-span-3 lg:col-span-2 md:col-span-3">
                <span className="text-blue-400 md:text-indigo-600 group-hover:text-blue-400 font-bold">
                  Ambitious
                </span>
                <br></br>
                <span className="visible md:invisible group-hover:visible text-indigo-600">
                  {" "}
                  Full Stack{" "}
                </span>
                <span className="visible md:invisible group-hover:visible text-indigo-600">
                  {" "}
                  Web{" "}
                </span>
                <br></br>{" "}
                <span className="visible md:invisible group-hover:visible text-indigo-600">
                  {" "}
                  Developer{" "}
                </span>
              </h1>
            </div>
            {/* <span className="inline text-black text-6xl group-hover:text-blue-400">
            <p className="">
              <AiFillGithub />
            </p>
            <p className="group-hover:text-blue-500">
              <AiFillGithub />
            </p>
            <p className="group-hover:text-blue-700">
              <AiFillGithub />
            </p>
            <p className="group-hover:text-indigo-600">
              <AiFillGithub />
            </p>
          </span> */}
          </section>
        </div>
      </Link>
    </main>
  );
}

export default Home;
