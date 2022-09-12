import { useEffect, useState } from "react";
import "./Project.scss";

const Project = ({ projectInfo }) => {
  const [imageUrl, setImageUrl] = useState("");
  // TODO
  // const [languagesData, setLanguagesData] = useState({
  //   HTML: 59254,
  //   CSS: 15451,
  // });

  useEffect(() => {
    setImageUrl(
      `url('https://raw.githubusercontent.com/${projectInfo.full_name}/main/demo.png')`
    );
    // TODO
    // fetch(projectInfo.languages_url)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((languages) => {
    //     setLanguagesData(languages);
    //     console.log(languagesData);
    //   });
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
      <a href={projectInfo.html_url} className="app-button" target="_blank">
        View project
      </a>
    </div>
  );
};

export default Project;
