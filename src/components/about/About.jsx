import Section from "../section/Section";
import AsciiPortrait from "../portrait/AsciiPortrait";
import "./About.scss";

const facts = [
  { key: "location", value: "Bucharest, Romania" },
  { key: "role", value: "IT Support (L1)" },
  { key: "studying", value: "CS for Business Mgmt @ URA" },
  { key: "certs", value: "Cisco Networking + Cybersecurity" },
  { key: "next", value: "L2/L3 Support → DevOps" },
];

const About = () => {
  return (
    <Section id="about" path="about" title="About me">
      <div className="about">
        <div className="about-photo">
          <AsciiPortrait />
        </div>
        <div className="about-text">
          <p>
            I'm an IT professional and Computer Science student with hands-on
            experience in <strong>L1 Technical Support</strong>,{" "}
            <strong>networking</strong> and <strong>incident management</strong>.
            At ACROM I supported the POS systems, payment terminals and network
            infrastructure across multiple McDonald's locations, on site and
            remotely.
          </p>
          <p>
            My programming background in Java, C#, C++ and TypeScript, plus
            recent Cisco certifications in networking and cybersecurity, are
            the base for my next step: moving through L2/L3 support toward a{" "}
            <strong>DevOps Engineering</strong> role, using scripting and
            troubleshooting to automate, secure and optimize infrastructure.
          </p>
          <div className="about-facts card mono">
            <div className="about-facts-head">
              <span>$</span> cat /etc/mugurel.conf
            </div>
            {facts.map((fact) => (
              <div className="about-facts-row" key={fact.key}>
                <span className="about-facts-key">{fact.key}</span>
                <span className="about-facts-eq">=</span>
                <span>{fact.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
