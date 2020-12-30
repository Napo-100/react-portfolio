import React from "react";
import profileImage from "../../assets/photos/profile.jpg";

function About() {
  return (
    <section id="about" className="">
      <div className="container ml-0">
        <div class="row align-items-start">
          <div className="col-lg-3">
            <img
              src={profileImage}
              className="img-fluid"
              alt="profile picture"
            />
          </div>
          <div className="col-lg-9 text-light">
            <h2>About Me</h2>
            <p>I need help</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
