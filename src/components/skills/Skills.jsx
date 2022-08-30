import HTML5 from "../../assets/icons/HTML5.png";
import CSS3 from "../../assets/icons/CSS3.png";
import JAVASCRIPT from "../../assets/icons/Javascript.png";
import DOM_ELEMENTS from "../../assets/icons/DOMElements.png";
import REACT_JS from "../../assets/icons/React-js.png";
import GIT from "../../assets/icons/Git.png";
import VS_CODE from "../../assets/icons/VSCode.png";
import SASS from "../../assets/icons/Sass.png";
import POSTMAN from "../../assets/icons/Postman.png";
import "./Skills.scss";

const Skills = () => {
  return (
    <div id="technologies" className="skills app-style">
      <div className="title">Known Technologies</div>

      <div className="skills-content">
        <div className="skills-content-skill">
          <img src={HTML5} alt="HTML5" />
          <div className="skills-content-skill-progress-bar">
            <span className="skills-content-skill-progress-bar-fill"></span>
          </div>
        </div>
        <div className="skills-content-skill">
          <img src={CSS3} alt="CSS3" />
          <div className="skills-content-skill-progress-bar">
            <span className="skills-content-skill-progress-bar-fill"></span>
          </div>
        </div>
        <div className="skills-content-skill">
          <img src={SASS} alt="Sass" />
          <div className="skills-content-skill-progress-bar">
            <span className="skills-content-skill-progress-bar-fill"></span>
          </div>
        </div>
        <div className="skills-content-skill">
          <img src={JAVASCRIPT} alt="Javascript" />
          <div className="skills-content-skill-progress-bar">
            <span className="skills-content-skill-progress-bar-fill"></span>
          </div>
        </div>
        <div className="skills-content-skill">
          <img src={DOM_ELEMENTS} alt="DOMElements" />
          <div className="skills-content-skill-progress-bar">
            <span className="skills-content-skill-progress-bar-fill"></span>
          </div>
        </div>
        <div className="skills-content-skill">
          <img src={REACT_JS} alt="React-js" />
          <div className="skills-content-skill-progress-bar">
            <span className="skills-content-skill-progress-bar-fill"></span>
          </div>
        </div>
        <div className="skills-content-skill">
          <img src={GIT} alt="Git" />
          <div className="skills-content-skill-progress-bar">
            <span className="skills-content-skill-progress-bar-fill"></span>
          </div>
        </div>
        <div className="skills-content-skill">
          <img src={VS_CODE} alt="VSCode" />
          <div className="skills-content-skill-progress-bar">
            <span className="skills-content-skill-progress-bar-fill"></span>
          </div>
        </div>
        <div className="skills-content-skill">
          <img src={POSTMAN} alt="Postman" />
          <div className="skills-content-skill-progress-bar">
            <span className="skills-content-skill-progress-bar-fill"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
