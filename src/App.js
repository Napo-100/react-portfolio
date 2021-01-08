import React , { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
// import Resume from "./components/pages/Resume";
import Footer from "./components/Footer";

function App() {
  const [currentPage, handlePageChange] = useState("Home")

  const renderPage = () => {
    switch (currentPage) {
      
      case 'About Me' : return <About/>  
      case 'Projects' : return <Projects/>  
      case 'Contact' : return <Contact/> 
      default : return <Home/>
    }
  }
  return (
    <Router>
      <div>
        <Nav handlePageChange={handlePageChange} />
        <div>
        {
          
          renderPage()
          
        }
      </div>

        {/* <Switch>
          <Route exact path="/aboutme">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
