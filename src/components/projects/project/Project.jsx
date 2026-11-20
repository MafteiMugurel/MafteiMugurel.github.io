import Icon from "../../icons/Icon";
import "./Project.scss";

// GitHub's linguist colours
const languageColors = {
  Java: "#b07219",
  "C#": "#178600",
  TypeScript: "#3178c6",
  "C++": "#f34b7d",
};

const Project = ({ projectInfo }) => {
  return (
    <a
      className="project card"
      href={`https://github.com/MafteiMugurel/${projectInfo.name}`}
      target="_blank"
      rel="noreferrer"
    >
      <div className="project-top">
        <Icon name="book" className="project-repo-icon" />
        <Icon name="arrowUpRight" className="project-arrow" />
      </div>
      <h3 className="project-name mono">{projectInfo.name}</h3>
      <p className="project-description">{projectInfo.description}</p>
      <div className="project-language mono">
        <span
          className="project-language-dot"
          style={{ backgroundColor: languageColors[projectInfo.language] }}
        />
        {projectInfo.language}
      </div>
    </a>
  );
};

export default Project;
