import React from "react";
import { Link } from "react-router-dom";
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
      <Link className="navbar-brand" to="/">
        <h4>
        Michael Napolitano
          </h4>
      </Link>
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
      <Link className="nav-link text-light" to="/aboutme">
        <h5>About Me</h5>
      </Link>
      <Link className="nav-link text-light" to="/projects">
      <h5>Projects</h5>
      </Link>
      <Link className="nav-link text-light" to="/contact">
      <h5>Contact</h5>
      </Link>
      <Link class="nav-link text-light" to="/resume">
      <h5>Resume</h5>
      </Link>
    </nav>
  );
}

export default Nav;
