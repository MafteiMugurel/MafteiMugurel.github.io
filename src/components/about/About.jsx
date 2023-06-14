import CVFile from "../../assets/CV.pdf";
import "./About.scss";

const About = () => {
  return (
    <div id="about" className="about app-style">
      <div className="title">About Me</div>
      <div className="about-description">
        <div className="about-description-text">
          I am a Frontend Developer with 1 year experience working on personal
          projects with React, JavaScript, HTML and CSS. I have a proactive
          attitude, being a problem-solver and having an impressive
          self-motivation to learn and evolve in this field. My perseverance is
          always present to help me going through complicate situations.
        </div>
        <div className="about-description-buttons">
          <a className="app-button" href="#contact">
            Contact Me
          </a>
          <a className="app-button" href={CVFile} target="_blank">
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
