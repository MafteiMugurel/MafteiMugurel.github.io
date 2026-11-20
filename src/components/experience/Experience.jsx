import Section from "../section/Section";
import "./Experience.scss";

const jobs = [
  {
    role: "Network & Cybersecurity Intern",
    company: "Universitatea Româno-Americană · Cisco Networking Academy",
    period: "May 2026 – Jun 2026",
    points: [
      "Built a foundation in networking and security through hands-on simulations in Cisco Packet Tracer.",
      "Configured basic networks, assigned IP addresses and set up routing protocols.",
      "Analyzed infrastructure vulnerabilities and threat detection mechanisms, and implemented basic network defense strategies.",
    ],
    tags: ["Cisco Packet Tracer", "Routing", "Network Security"],
  },
  {
    role: "IT Technician (L1 Support)",
    company: "ACROM · McDonald's Infrastructure · Bucharest",
    period: "Mar 2024 – Nov 2024",
    points: [
      "Provided L1 technical support for hardware, software and network infrastructure across multiple McDonald's locations.",
      "Troubleshot and maintained high-availability POS systems, network printers and payment terminals, on site and remotely via RDP.",
      "Logged and managed incidents in Zoho, resolved Tier 1 access and system issues, and escalated complex network problems to L2/L3 teams.",
      "Helped deploy software updates, POS configurations and security patches across the network.",
    ],
    tags: ["POS Systems", "RDP", "Zoho", "Incident Management"],
  },
];

const Experience = () => {
  return (
    <Section id="experience" path="experience" title="Experience">
      <div className="timeline">
        {jobs.map((job) => (
          <div className="timeline-item" key={job.role}>
            <div className="timeline-dot" />
            <div className="timeline-card card">
              <div className="timeline-head">
                <h3>{job.role}</h3>
                <span className="timeline-period mono">{job.period}</span>
              </div>
              <div className="timeline-company">{job.company}</div>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="timeline-tags">
                {job.tags.map((tag) => (
                  <span className="chip" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
