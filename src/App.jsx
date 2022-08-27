import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <head>
        <title>Portofolio-Mugurel-Dev</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="style.css" />
        <script type="text/javascript" src="scripts.js"></script>
      </head>
      <body>
        <div class="nav-bar">
          <a href="#">MafteiMugurel</a>
          <div class="nav-bar-list">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#portofolio">Portofolio</a>
            <a href="#contact">Contact</a>
            <a href="./Assets/CV.pdf" target="_blank">
              Resume
            </a>
          </div>
        </div>

        <div class="banner">
          <div class="banner-left">
            <div>Hello</div>
            <div>I'm Mugurel</div>
            <button>Here Me</button>
          </div>
          <div class="banner-right">
            <img src="Assets/image-me.jpg" alt="" />
          </div>
        </div>
        <div id="about" class="about">
          <div class="about-title">About Me</div>
          <div class="about-description">
            <div class="about-description-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived
            </div>
            <div class="about-description-buttons">
              <a href="#contact">Contact Me</a>
              <a href="./Assets/CV.pdf" target="_blank">
                Download CV
              </a>
            </div>
          </div>
        </div>

        <div id="experience" class="experience">
          <div class="title">Known Technologies</div>
          <div class="content">
            <div class="skill">
              <img src="Assets/icons/HTML5.png" alt="HTML5" />
              <div class="progress-bar">
                <span class="progress-bar-fill" style="width: 70%"></span>
              </div>
            </div>
            <div class="skill">
              <img src="Assets/icons/CSS3.png" alt="" />
              <div class="progress-bar">
                <span class="progress-bar-fill" style="width: 70%"></span>
              </div>
            </div>
            <div class="skill">
              <img src="Assets/icons/Sass.png" alt="" />
              <div class="progress-bar">
                <span class="progress-bar-fill" style="width: 70%"></span>
              </div>
            </div>
            <div class="skill">
              <img src="Assets/icons/Javascript.png" alt="" />
              <div class="progress-bar">
                <span class="progress-bar-fill" style="width: 70%"></span>
              </div>
            </div>
            <div class="skill">
              <img src="Assets/icons/DOMElements.png" alt="" />
              <div class="progress-bar">
                <span class="progress-bar-fill" style="width: 70%"></span>
              </div>
            </div>
            <div class="skill">
              <img src="Assets/icons/Reactjs.png" alt="" />
              <div class="progress-bar">
                <span class="progress-bar-fill" style="width: 70%"></span>
              </div>
            </div>
            <div class="skill">
              <img src="Assets/icons/Git.png" alt="" />
              <div class="progress-bar">
                <span class="progress-bar-fill" style="width: 70%"></span>
              </div>
            </div>
            <div class="skill">
              <img src="Assets/icons/VSCode.png" alt="" />
              <div class="progress-bar">
                <span class="progress-bar-fill" style="width: 70%"></span>
              </div>
            </div>
            <div class="skill">
              <img src="Assets/icons/Postman.png" alt="" />
              <div class="progress-bar">
                <span class="progress-bar-fill" style="width: 70%"></span>
              </div>
            </div>
          </div>
          <div class="title">Education</div>
          <div class="content">
            <div>
              <img src="Assets/icons/ScoalaInformaladeIT.jpg" alt="" />
              <div>
                Scoala Informala IT Frontend Developer, Computer Software
                EngineeringFrontend Developer, Computer Software Engineering May
                2022 - Aug 2022May 2022 - Aug 2022 The course includes the
                following chapters: - GIT & Visual Studio Code; - HTML & CSS; -
                Responsive design; - Javascript; - AJAX and Promises; - OOP; -
                ES6; - BOM; - React; - A final project containing all the
                technologies learned.
              </div>
            </div>
            <div>
              <img src="Assets/icons/Apollonia.png" alt="" />
              <div>
                Universitatea „Apollonia” din Iași Bachelor's degree, Medicinal
                and Pharmaceutical ChemistryBachelor's degree, Medicinal and
                Pharmaceutical Chemistry 2015 - 20182015 - 2018 Grade: 9.10
              </div>
            </div>
          </div>
        </div>

        <div id="portofolio" class="portofolio">
          <div class="title">Portofolio</div>
          <div class="content">dasdasdasdas</div>
        </div>

        <div class="recommendations">
          <div class="title">Recommendations</div>
          <div class="content">
            <div>
              <div>
                Mugurel is a fast learner. Being motivated and confident, in a
                suitable environment he can reach exceptional abilities both
                when it comes to programming and soft skills. He demonstrated in
                his personal projects qualities both related to the design and
                the clean code he wrote. I believe that if he is given the
                chance and the necessary resources, he can create great things
                and has a bright future in IT.
              </div>
              <div>
                Madalina-Eleonora Gheorghe, Frontend Developer in Deloitte
                Digital (June 18, 2022)
              </div>
            </div>
          </div>
        </div>

        <div id="contact" class="contact">
          <div class="title">Contact</div>
          <div class="content">
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
      </body>
    </div>
  );
}

export default App;
