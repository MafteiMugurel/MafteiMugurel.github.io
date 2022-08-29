// import { useState } from "react";
import "./App.scss";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />

      <div id="about" className="about">
        <div className="about-title">About Me</div>
        <div className="about-description">
          <div className="about-description-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived
          </div>
          <div className="about-description-buttons">
            <a href="#contact">Contact Me</a>
            <a href="./Assets/CV.pdf" target="_blank">
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div id="experience" className="experience">
        <div className="title">Known Technologies</div>
        <div className="content">
          <div className="skill">
            {/* <img src="Assets/icons/HTML5.png" alt="HTML5" /> */}
            <div className="progress-bar">
              <span className="progress-bar-fill"></span>
            </div>
          </div>
          <div className="skill">
            {/* <img src="Assets/icons/CSS3.png" alt="" /> */}
            <div className="progress-bar">
              <span className="progress-bar-fill"></span>
            </div>
          </div>
          <div className="skill">
            {/* <img src="Assets/icons/Sass.png" alt="" /> */}
            <div className="progress-bar">
              <span className="progress-bar-fill"></span>
            </div>
          </div>
          <div className="skill">
            {/* <img src="Assets/icons/Javascript.png" alt="" /> */}
            <div className="progress-bar">
              <span className="progress-bar-fill"></span>
            </div>
          </div>
          <div className="skill">
            {/* <img src="Assets/icons/DOMElements.png" alt="" /> */}
            <div className="progress-bar">
              <span className="progress-bar-fill"></span>
            </div>
          </div>
          <div className="skill">
            {/* <img src="Assets/icons/Reactjs.png" alt="" /> */}
            <div className="progress-bar">
              <span className="progress-bar-fill"></span>
            </div>
          </div>
          <div className="skill">
            {/* <img src="Assets/icons/Git.png" alt="" /> */}
            <div className="progress-bar">
              <span className="progress-bar-fill"></span>
            </div>
          </div>
          <div className="skill">
            {/* <img src="Assets/icons/VSCode.png" alt="" /> */}
            <div className="progress-bar">
              <span className="progress-bar-fill"></span>
            </div>
          </div>
          <div className="skill">
            {/* <img src="Assets/icons/Postman.png" alt="" /> */}
            <div className="progress-bar">
              <span className="progress-bar-fill"></span>
            </div>
          </div>
        </div>
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
