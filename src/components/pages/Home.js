import React from "react";
// import { AiFillGithub } from "react-icons/ai";
// import profileImage from "../../assets/photos/profile.jpg";
// import heroImage from "../../assets/photos/IMG_5703.JPG";

function Home() {
  return (
    <main className="bg-black min-h-screen">
      <div className="container mx-auto  aboslute lg:pt-5 group border-2 border-blue-400">
        <section className="lg:flex p-5 pb-10 justify-center m-20">
          <div className="text-lg flex flex-col relative group grid lg:grid-cols-2 xl:grid-cols-11">
            <h1 className="text-6xl text-blue-400 mb-5 col-span-2">
              <span className="text-6xl font-bold pl-4"> I am </span>{" "}
              <span className="text-black group-hover:text-blue-400 text-6xl font-bold">
                {" "}
                a{" "}
              </span>
            </h1>
            <h1 className="text-6xl text-blue-400 mb-10 xl:col-span-3 lg:col-span-2">
              <span className="text-indigo-600 text-6xl group-hover:text-blue-400 font-bold">
                {" "}
                Passionate
              </span>
              <br></br>
              <span className="text-black text-6xl group-hover:text-indigo-600">
                {" "}
                Worker{" "}
              </span>
            </h1>

            <h1 className="text-6xl text-blue-400 mb-10 xl:col-span-3 lg:col-span-2">
              <span className="text-indigo-600 text-6xl group-hover:text-blue-400 font-bold">
                Creative
              </span>
              <br></br>

              <span className="text-black text-6xl group-hover:text-indigo-600">
                {" "}
                Problem Solver{" "}
              </span>
            </h1>
            <h1 className="text-6xl text-blue-400 mb-10 xl:col-span-3 lg:col-span-2">
              <span className="text-indigo-600 text-6xl group-hover:text-blue-400 font-bold">
                Ambitious
              </span>
              <br></br>
              <span className="text-black group-hover:text-indigo-600 text-6xl">
                {" "}
                Full Stack{" "}
              </span>
              <span className="text-black group-hover:text-indigo-600 text-6xl">
                {" "}
                Web{" "}
              </span>
              <br></br>{" "}
              <span className="text-black group-hover:text-indigo-600 text-6xl">
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
    </main>
  );
}

export default Home;
