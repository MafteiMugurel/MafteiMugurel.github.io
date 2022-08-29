import "./Skills.scss";
import HTML5 from "../../assets/icons/HTML5.png";
import CSS3 from "../../assets/icons/CSS3.png";
import JAVASCRIPT from "../../assets/icons/Javascript.png";
import DOM_ELEMENTS from "../../assets/icons/DOMElements.png";
import REACT_JS from "../../assets/icons/React-js.png";
import GIT from "../../assets/icons/Git.png";
import VS_CODE from "../../assets/icons/VSCode.png";
import SASS from "../../assets/icons/Sass.png";
import POSTMAN from "../../assets/icons/Postman.png";

const Skills = () => {
  return (
    <div id="experience" className="experience">
      <div className="title">Known Technologies</div>
      <div className="content">
        <div className="skill">
          <img src={HTML5} alt="HTML5" />
          <div className="progress-bar">
            <span className="progress-bar-fill"></span>
          </div>
        </div>
        <div className="skill">
          <img src={CSS3} alt="CSS3" />
          <div className="progress-bar">
            <span className="progress-bar-fill"></span>
          </div>
        </div>
        <div className="skill">
          <img src={SASS} alt="Sass" />
          <div className="progress-bar">
            <span className="progress-bar-fill"></span>
          </div>
        </div>
        <div className="skill">
          <img src={JAVASCRIPT} alt="Javascript" />
          <div className="progress-bar">
            <span className="progress-bar-fill"></span>
          </div>
        </div>
        <div className="skill">
          <img src={DOM_ELEMENTS} alt="DOMElements" />
          <div className="progress-bar">
            <span className="progress-bar-fill"></span>
          </div>
        </div>
        <div className="skill">
          <img src={REACT_JS} alt="React-js" />
          <div className="progress-bar">
            <span className="progress-bar-fill"></span>
          </div>
        </div>
        <div className="skill">
          <img src={GIT} alt="Git" />
          <div className="progress-bar">
            <span className="progress-bar-fill"></span>
          </div>
        </div>
        <div className="skill">
          <img src={VS_CODE} alt="VSCode" />
          <div className="progress-bar">
            <span className="progress-bar-fill"></span>
          </div>
        </div>
        <div className="skill">
          <img src={POSTMAN} alt="Postman" />
          <div className="progress-bar">
            <span className="progress-bar-fill"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
