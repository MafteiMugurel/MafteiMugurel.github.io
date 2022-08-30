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
            Scoala Informala IT Frontend Developer, Computer Software
            EngineeringFrontend Developer, Computer Software Engineering May
            2022 - Aug 2022May 2022 - Aug 2022 The course includes the following
            chapters: - GIT and Visual Studio Code; - HTML and CSS; - Responsive
            design; - Javascript; - AJAX and Promises; - OOP; - ES6; - BOM; -
            React; - A final project containing all the technologies learned.
          </div>
        </div>
        <div className="education-content-school">
          <img src={APOLLONIA} alt="Apollonia" />
          <div className="education-content-school-text">
            Universitatea „Apollonia” din Iași Bachelor's degree, Medicinal and
            Pharmaceutical ChemistryBachelor's degree, Medicinal and
            Pharmaceutical Chemistry 2015 - 2018 2015 - 2018 Grade: 9.10
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
