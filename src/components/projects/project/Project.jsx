import { useEffect, useState } from "react";
import "./Project.scss";

const Project = ({ projectInfo }) => {
  const [imageUrl, setImageUrl] = useState("");
  // TODO
  // const [languagesData, setLanguagesData] = useState({
  //   HTML: 59254,
  //   CSS: 15451,
  // });

  const checkImageURL = (url) => {
    return fetch(url, { method: "HEAD" }).then((res) => {
      return res;
    });
  };

  useEffect(() => {
    // setImageUrl(
    //   `url('https://raw.githubusercontent.com/${projectInfo.full_name}/main/demo.png')`
    // );

    const main = checkImageURL(
      `https://raw.githubusercontent.com/${projectInfo.full_name}/main/demo.png`
    );
    const master = checkImageURL(
      `https://raw.githubusercontent.com/${projectInfo.full_name}/master/demo.png`
    );

    Promise.all([main, master])
      .then((results) => {
        const filteredResult = results.find((item) => item.ok);
        filteredResult
          ? setImageUrl(`url(${filteredResult.url})`)
          : setImageUrl(`url(${IMAGE_NOT_FOUND})`);
        // TODO
        console.clear();
      })
      .catch((err) => setImageUrl(`url(${IMAGE_NOT_FOUND})`));
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
