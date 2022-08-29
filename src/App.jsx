// import { useState } from "react";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import About from "./components/about/About";
import "./App.scss";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Skills />

      <div id="experience" className="experience">
        <div className="title">Education</div>
        <div className="content">
          <div>
            {/* <img src="Assets/icons/ScoalaInformaladeIT.jpg" alt="" /> */}
            <div>
              Scoala Informala IT Frontend Developer, Computer Software
              EngineeringFrontend Developer, Computer Software Engineering May
              2022 - Aug 2022May 2022 - Aug 2022 The course includes the
              following chapters: - GIT and Visual Studio Code; - HTML and CSS;
              - Responsive design; - Javascript; - AJAX and Promises; - OOP; -
              ES6; - BOM; - React; - A final project containing all the
              technologies learned.
            </div>
          </div>
          <div>
            {/* <img src="Assets/icons/Apollonia.png" alt="" /> */}
            <div>
              Universitatea „Apollonia” din Iași Bachelor's degree, Medicinal
              and Pharmaceutical ChemistryBachelor's degree, Medicinal and
              Pharmaceutical Chemistry 2015 - 20182015 - 2018 Grade: 9.10
            </div>
          </div>
        </div>
      </div>

      <div id="portofolio" className="portofolio">
        <div className="title">Portofolio</div>
        <div className="content">dasdasdasdas</div>
      </div>

      <div className="recommendations">
        <div className="title">Recommendations</div>
        <div className="content">
          <div>
            <div>
              Mugurel is a fast learner. Being motivated and confident, in a
              suitable environment he can reach exceptional abilities both when
              it comes to programming and soft skills. He demonstrated in his
              personal projects qualities both related to the design and the
              clean code he wrote. I believe that if he is given the chance and
              the necessary resources, he can create great things and has a
              bright future in IT.
            </div>
            <div>
              Madalina-Eleonora Gheorghe, Frontend Developer in Deloitte Digital
              (June 18, 2022)
            </div>
          </div>
        </div>
      </div>

      <div id="contact" className="contact">
        <div className="title">Contact</div>
        <div className="content">
          <a href="mailto: mugurel.maftei95@gmail.com">Send Email</a>
          <a
            href="https://www.linkedin.com/in/maftei-mugurel-a53b891a8/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a href="https://github.com/MafteiMugurel" target="_blank">
            {" "}
            GitHub{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
