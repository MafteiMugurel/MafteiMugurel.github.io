import SCOALA_INFORMALA_DE_IT from "../../assets/icons/ScoalaInformaladeIT.jpg";
import APOLLONIA from "../../assets/icons/Apollonia.png";
import "./Education.scss";

const Education = () => {
  return (
    <div className="education app-style">
      <div className="title">Education</div>
      <div className="education-content">
        <div className="education-content-school">
          <img src={SCOALA_INFORMALA_DE_IT} alt="ScoalaInformaladeIT" />
          <div className="education-content-school-text">
            <div>Scoala Informala de IT</div>
            <div>Professional training course</div>
            <div>Frontend Development</div>
            <div>May 2022 - Sep 2022</div>
          </div>
        </div>
        <div className="education-content-school">
          <img src={APOLLONIA} alt="Apollonia" />
          <div className="education-content-school-text">
            <div>Universitatea „Apollonia”</div>
            <div>Bachelor's degree</div>
            <div>Dental Technique</div>
            <div>2015 - 2018</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
