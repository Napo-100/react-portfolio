import React from "react";
import profileImage from "../../assets/photos/profile.jpg";
import heroImage from "../../assets/photos/IMG_5703.JPG";

function Home() {
  return (
    <main>
      <img
        src={heroImage}
        alt="Grand Canyon"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pf-64 px-8">
        <h1 className="text-6xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block text-yellow-800 xl:inline">Creative</span>
          <span className="block xl:inline text-indigo-700">
            {" "}
            Team Oriented{" "}
          </span>
          <span className="block xl:inline"> Problem Solver</span>
        </h1>
      </section>
    </main>
  );
}

export default Home;
