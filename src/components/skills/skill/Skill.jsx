import { useEffect, useState } from "react";

const Skill = ({ skillInfo }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    import(`../../../assets/icons/${skillInfo.imgSrc}.png`).then((image) => {
      setImageUrl(image.default);
    });
  }, []);
  return (
    <div className="skills-content-skill">
      <img src={imageUrl} />
      <div className="skills-content-skill-progress-bar">
        <span
          className="skills-content-skill-progress-bar-fill"
          style={{
            width: skillInfo.level + "%",
          }}
        ></span>
      </div>
    </div>
  );
};

export default Skill;
