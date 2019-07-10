import React, { Component } from "react";
// import PartOne from "./components/PartOne";
// import Navbar from "./components/Navbar";
import "./App.css";
import Particles from "react-particles-js";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import Skill from "./components/Skill";

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <div className="main">
          <scroll>
            <section className="sec1">
              <div className="h4class">
                <div className="typewriter">
                  <p>
                    Hello,I'm <span className="dot">.</span>
                    <span className="ptag">Pradnya Sonawane</span>...↓
                  </p>
                </div>
              </div>
              <br />
            </section>

            <section className="sec2">
              <ul className="unorderli">
                About Me
                <br />
                <li className="listitem00">
                  I am Self taught Web developer mainly focus on Front-end,
                  learning back-end as well.
                </li>
                <li>What I do =</li>
                <br />
                <li className="listitem1">
                  Build beautiful websites and applications
                </li>
                <br />
                <li className="listitem2">
                  Aiming to code clean and create responsive websites
                </li>
                <br />
                <li className="listitem3">Main focus on Javascript,React Js</li>
                <br />
                <li className="listitem4">
                  And a problem-solving oriented approach
                </li>
                <br />
                <li className="listitem3">
                  Always seek for improvement in code by following DRY method
                </li>
              </ul>
            </section>
            <section className="sec3">
              SKILLS
              <Skill />
            </section>
            <section className="sec4">
              PROJECTS
              <Carousel />
            </section>
            <section className="sec5">
              <Contact />
            </section>
            <footer>
              Created by Pradnya Sonawane
              <span className="spanFooter"> ©2019</span>.
            </footer>
          </scroll>
        </div>
      </>
    );
  }
}

export default App;
