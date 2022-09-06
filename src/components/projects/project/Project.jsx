import { useEffect, useState } from "react";
import "./Project.scss";

const Project = ({ projectInfo }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    setImageUrl(
      `url('https://raw.githubusercontent.com/${projectInfo.full_name}/main/demo.png')`
    );
  }, []);

  return (
    <div className="project">
      <div
        className="project-image"
        style={{
          backgroundImage: imageUrl,
        }}
      ></div>
      <div className="project-name">{projectInfo.name}</div>
      {/* <div className="project-technologies">nume limbaje</div> */}
      <a href={projectInfo.html_url} className="app-button" target="_blank">
        View project
      </a>
    </div>
  );
};

export default Project;
