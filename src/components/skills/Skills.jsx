import Skill from "./skill/skill";
import "./Skills.scss";

const Skills = () => {
  const skillsList = [
    { name: "HTML5", imgSrc: "HTML5", level: 60 },
    { name: "CSS3", imgSrc: "CSS3", level: 60 },
    { name: "JavaScript", imgSrc: "Javascript", level: 25 },
    { name: "Git", imgSrc: "Git", level: 30 },
    { name: "Postman", imgSrc: "Postman", level: 5 },
    { name: "React-js", imgSrc: "React-js", level: 30 },
    { name: "Sass", imgSrc: "Sass", level: 50 },
    { name: "VSCode", imgSrc: "VSCode", level: 40 },
    { name: "DOMElements", imgSrc: "DOMElements", level: 20 },
  ];
  return (
    <div id="technologies" className="skills app-style">
      <div className="title">Known Technologies</div>

      <div className="skills-content">
        {skillsList.map((skill) => {
          return <Skill skillInfo={skill} key={skill.name} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
