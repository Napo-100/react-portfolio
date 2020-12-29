import React from "react";
import logo from "../../logo.svg";
import "../../App.css";
import "../../index.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark black-background mb-3">
      <img
        src={logo}
        className="App-logo"
        style={{ width: "4%", height: "4%" }}
        alt="logo"
      />
      <a className="navbar-brand" href="/">
        <h4>
        Michael Napolitano
          </h4>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav"></div>
      </div>
      <a className="nav-link text-light" href="">
        <h5>About Me</h5>
      </a>
      <a className="nav-link text-light" href="">
      <h5>Projecs</h5>
      </a>
      <a className="nav-link text-light" href="">
      <h5>Contact</h5>
      </a>
      <a class="nav-link text-light" href="">
      <h5>Resume</h5>
      </a>
    </nav>
  );
}

export default Nav;
