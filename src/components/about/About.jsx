import CVFile from "../../assets/CV.pdf";
import "./About.scss";

const About = () => {
  return (
    <div id="about" className="about app-style">
      <div className="title">About Me</div>
      <div className="about-description">
        <div className="about-description-text">
          I am Mugurel and I gathered my passions in Web Development. I'm a
          Bucharest-based future software engineer who wants to join the
          Frontend field. Currently learning HTML, CSS, JavaScript and React to
          start my career in IT. I am creative and my analytical thinking is
          helping me to find solutions, continuously learning how to increase my
          skills both technical and soft.
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
