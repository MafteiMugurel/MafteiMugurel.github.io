import Icon from "../icons/Icon";
import "./Certifications.scss";

const certifications = [
  {
    name: "Networking Basics",
    issuer: "Cisco Networking Academy",
    date: "Jun 2026",
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "Jun 2026",
  },
  {
    name: "Agile Fundamentals: Scrum & Kanban",
    issuer: "Udemy",
    date: "Oct 2022",
  },
];

const Certifications = () => {
  return (
    <div className="certs">
      <h3 className="certs-title mono">
        <span>$</span> ls ./certifications
      </h3>
      <div className="certs-list">
        {certifications.map((cert) => (
          <div className="certs-item card" key={cert.name}>
            <div className="certs-icon">
              <Icon name="award" />
            </div>
            <div>
              <div className="certs-name">{cert.name}</div>
              <div className="certs-meta mono">
                {cert.issuer} · {cert.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
