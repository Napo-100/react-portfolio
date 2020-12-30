import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./components/pages/About";
import Jumbo from "./components/Jumbo";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div id="wrapper" className="bg-dark">
        <Nav />

        <Switch>
          <Route exact path="/aboutme">
            <About />
          </Route>
          <Route exact path="/projects">
            <h1>Projects</h1>
          </Route>
          <Route exact path="/contact">
            <h1>Contact</h1>
          </Route>
          <Route exact path="/resume">
            <h1>Users</h1>
          </Route>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
