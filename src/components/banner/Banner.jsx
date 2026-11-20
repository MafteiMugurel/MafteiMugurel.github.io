import CVFile from "../../assets/CV.pdf";
import Icon from "../icons/Icon";
import NetworkCanvas from "../network/NetworkCanvas";
import Terminal from "../terminal/Terminal";
import Typewriter from "../typewriter/Typewriter";
import "./Banner.scss";

const intro = [
  { cmd: "whoami", out: ["mugurel.maftei — IT Support Engineer"], ok: true },
  {
    cmd: "systemctl status career",
    out: [
      "● career.service — L1 → L2/L3 → DevOps",
      "  Active: active (running) since 2024",
      "  Focus: networking · security · automation",
    ],
    ok: true,
  },
  {
    cmd: "ping -c 1 devops.next",
    out: ["64 bytes from devops.next: motivation=100% time=now"],
    ok: true,
  },
];

const roles = [
  "IT Support Engineer",
  "Networking & Security",
  "PowerShell & automation",
  "Future DevOps Engineer",
];

const Banner = () => {
  return (
    <section id="top" className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <NetworkCanvas />
      <div className="container hero-inner">
        <div className="hero-text">
          <div className="hero-status mono">
            <span className="hero-status-dot" />
            Open to L2/L3 Support &amp; DevOps roles
          </div>
          <h1>
            Vasilica-Mugurel{" "}
            <span className="glitch" data-text="Maftei">
              Maftei
            </span>
          </h1>
          <p className="hero-role mono">
            <span className="hero-role-prefix">&gt;</span>{" "}
            <Typewriter words={roles} />
          </p>
          <p className="hero-lead">
            I keep systems, networks and people running. With hands-on L1
            support experience, Cisco training in networking and security, and
            a programming background, I'm building toward a DevOps role:
            automating, securing and optimizing infrastructure.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              <Icon name="send" /> Get in touch
            </a>
            <a
              className="btn btn-ghost"
              href={CVFile}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="download" /> Download CV
            </a>
          </div>
          <div className="hero-meta mono">
            <span>
              <Icon name="mapPin" size={15} /> Bucharest, RO
            </span>
            <a
              href="https://github.com/MafteiMugurel"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="github" size={15} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/maftei-mugurel-a53b891a8/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="linkedin" size={15} /> LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-terminal">
          <Terminal intro={intro} title="mugurel@infra: ~ (interactive)" />
          <div className="hero-terminal-hint mono">
            ↑ it's real: try <code>help</code>, <code>neofetch</code> or{" "}
            <code>sudo hire-me</code>
          </div>
        </div>
      </div>
      <a href="#about" className="hero-scroll mono" aria-label="Scroll to about">
        scroll
        <span />
      </a>
    </section>
  );
};

export default Banner;
