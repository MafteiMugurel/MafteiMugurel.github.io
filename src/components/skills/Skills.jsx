import Section from "../section/Section";
import Icon from "../icons/Icon";
import "./Skills.scss";

const skillGroups = [
  {
    name: "Infrastructure & Operations",
    icon: "server",
    skills: [
      "IT Infrastructure",
      "L1 Technical Support",
      "Ticketing (Zoho)",
      "RDP",
      "Hyper-V",
      "Hardware Troubleshooting",
    ],
  },
  {
    name: "Networking & Security",
    icon: "shield",
    skills: [
      "TCP/IP",
      "DNS",
      "DHCP",
      "Routing",
      "Network Security",
      "Threat Detection",
      "Cisco Packet Tracer",
    ],
  },
  {
    name: "Programming & Automation",
    icon: "terminal",
    skills: [
      "PowerShell",
      "Java",
      "C#",
      "C++",
      "JavaScript / TypeScript",
      "OOP",
      "Git / GitHub",
    ],
  },
  {
    name: "Methodologies",
    icon: "gitBranch",
    skills: ["Agile", "Scrum", "Kanban", "Client-Server Architecture"],
  },
];

const Skills = () => {
  return (
    <Section id="skills" path="skills" title="Skills & tooling" alt>
      <div className="skills">
        {skillGroups.map((group) => (
          <div className="skills-group card" key={group.name}>
            <div className="skills-group-head">
              <div className="skills-group-icon">
                <Icon name={group.icon} />
              </div>
              <h3>{group.name}</h3>
            </div>
            <div className="skills-group-list">
              {group.skills.map((skill) => (
                <span className="chip" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
