import Skill from "./skill/skill";
import "./Skills.scss";

const Skills = () => {
  const skillsList = [
    { name: "HTML5", imgSrc: "HTML5", level: 75 },
    { name: "CSS3", imgSrc: "CSS3", level: 75 },
    { name: "JavaScript", imgSrc: "Javascript", level: 35 },
    { name: "Git", imgSrc: "Git", level: 45 },
    { name: "Postman", imgSrc: "Postman", level: 10 },
    { name: "React-js", imgSrc: "React-js", level: 35 },
    { name: "Sass", imgSrc: "Sass", level: 75 },
    { name: "VSCode", imgSrc: "VSCode", level: 70 },
    { name: "DOMElements", imgSrc: "DOMElements", level: 30 },
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
