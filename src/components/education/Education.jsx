import SCOALA_INFORMALA_DE_IT from "../../assets/icons/ScoalaInformaladeIT.jpg";
import APOLLONIA from "../../assets/icons/Apollonia.png";
import Section from "../section/Section";
import Certifications from "../certifications/Certifications";
import "./Education.scss";

const schools = [
  {
    name: "Universitatea Româno-Americană din București",
    initials: "URA",
    type: "Bachelor's degree · in progress",
    field: "Computer Science for Business Management",
    period: "Oct 2024 – Aug 2027",
    note: "OOP (C++, C#), relational databases (SQL), web technologies, IT management.",
    current: true,
  },
  {
    name: "Școala Informală de IT",
    logo: SCOALA_INFORMALA_DE_IT,
    type: "Professional training",
    field: "Frontend Development",
    period: "May 2022 – Sep 2022",
    note: "Web architecture, client-server model, TCP/IP, DNS, HTTP/HTTPS and API integrations.",
  },
  {
    name: "Universitatea „Apollonia” din Iași",
    logo: APOLLONIA,
    type: "Bachelor's degree",
    field: "Dental Technology",
    period: "2015 – 2018",
    note: "Graduated with a grade of 9.10/10.",
  },
];

const Education = () => {
  return (
    <Section id="education" path="education" title="Education & certifications">
      <div className="education">
        {schools.map((school) => (
          <div className="education-card card" key={school.name}>
            <div className="education-head">
              {school.logo ? (
                <img src={school.logo} alt="" />
              ) : (
                <div className="education-badge mono">{school.initials}</div>
              )}
              <span className="education-period mono">
                {school.current && <span className="education-live" />}
                {school.period}
              </span>
            </div>
            <div className="education-type mono">{school.type}</div>
            <h3>{school.field}</h3>
            <div className="education-school">{school.name}</div>
            <p>{school.note}</p>
          </div>
        ))}
      </div>
      <Certifications />
    </Section>
  );
};

export default Education;
