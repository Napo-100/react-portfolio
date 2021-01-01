import React from "react";
import profileImage from "../../assets/photos/goku400x400.jpg";
import backgroundImage from "../../assets/photos/IMG_4317.JPG";

function About() {
  return (
    <main className="bg-gray-800 min-h-screen">
     
      <div className="container mx-auto aboslute lg:ml-5 lg:pt-5">
        <section className="bg-blue-200 lg:flex p-10">
          <img
            src={profileImage}
            className="w-32 h-32 lg:w-64 lg:h-64 mr-8"
            alt="Me!"
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="text-6xl mb-20 ">
              <span className="text-black text-6xl"> Let's work </span>
              <span className="text-indigo-700 text-6xl"> together </span>
              <span className="text-black text-6xl">  and </span>
              <span className="text-indigo-700 text-6xl"> create</span>
              <span className="text-black text-6xl"> something </span>
              <span className="text-indigo-700 text-6xl"> amazing.</span>
            </h1>
            <p>"Creativity isn't my fuel, it's my engine"</p>
          </div>
        </section>
      </div>
      <div className="p-5 lg:pt-30 lg:mr-3 container mx-auto relative">
        <section className="bg-blue-200 lg:flex p-10">
          <div className="text-lg flex flex-col justify-center">
            <h1 className="text-7xl text-indigo-700">
              <span className="text-black text-6xl"> Full </span>
              Stack <br></br>
              <span className="text-black text-7xl ml-20"> Web </span>
              Developer
              <span className="text-black text-7xl ml-20"> Icons go here </span>
            </h1>
            <p></p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default About;
