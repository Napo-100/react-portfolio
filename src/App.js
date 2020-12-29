import React from "react";
import "./App.css";
import About from "./components/About";
import Jumbo from "./components/Jumbo";
import Nav from "./components/Nav";

function App() {
  return (
    <div  className="bg-dark">
      <Nav />
     <About />
      
    </div>
  );
}

export default App;
