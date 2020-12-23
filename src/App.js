import React from "react";
import "./App.css";
import About from "./components/About";
import Jumbo from "./components/Jumbo";
import Nav from "./components/Nav"

function App() {
  return (
    <div>
      
      <main className="bg-light">
      {/* <Nav></Nav> */}
        <Jumbo></Jumbo>
        <About></About>
      </main>
    </div>
  );
}

export default App;
