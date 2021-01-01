import React from "react";
import profileImage from "../../assets/photos/goku400x400.jpg";
import backgroundImage from "../../assets/photos/IMG_4317.JPG";

function About() {
  return (
    <main className="bg-gray-800 min-h-screen border-t-2 border-blue-300">
      <div className="container mx-auto aboslute lg:ml-5 lg:pt-5">
        <section className="bg-black lg:flex p-10">
          <img
            src={profileImage}
            className="w-32 h-32 lg:w-64 lg:h-64 mr-8"
            alt="Me!"
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="text-6xl mb-20 ">
              <span className="text-blue-800 text-6xl"> Let's work </span>
              <span className="text-white text-6xl"> together </span>
              <span className="text-blue-800 text-6xl"> and </span>
              <span className="text-white text-6xl"> create</span>
              <span className="text-blue-800 text-6xl"> something </span>
              <span className="text-white text-6xl"> amazing.</span>
            </h1>
            <p className="text-white">
              "Creativity isn't my fuel, it's my engine"
            </p>
          </div>
        </section>
      </div>
      <div className="p-5 lg:pt-30 lg:mr-3 container mx-auto relative">
        <section className="bg-black lg:flex p-10 pt-5">
          <div className="text-lg flex flex-col justify-center ">
            <h1 className="text-7xl text-gray-300 pb-5">My Toolbox</h1>
            <h1 className="text-6xl text-blue-400 border-t-2 border-blue-800 p-3">
              <span className="text-7xl hover:text-blue-700"> React </span>
              <span className="text-5xl hover:text-indigo-900"> MongoDb </span>
              <span className="text-7xl hover:text-blue-700"> MySQL </span>
              <span className="text-6xl hover:text-indigo-900">
                {" "}
                TailwindCSS{" "}
              </span>
              <span className="text-5xl hover:text-blue-700">
                {" "}
              Mongoose{" "}
              </span>
              <span className="text-8xl ml-10 hover:text-blue-700">
                Javascript
              </span>
              <span className="text-6xl ml-10 hover:text-indigo-900">
                Handlebars
              </span>
              <span className="text-7xl ml-10 hover:text-blue-700">
                Sequelize
              </span>
              

              <span className="text-7xl ml-20"> Iconssssssssssssssssssssssssssssss </span>
            </h1>
            <p></p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default About;
