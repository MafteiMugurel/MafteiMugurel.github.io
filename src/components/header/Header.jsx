import { useEffect, useState } from "react";
import CVFile from "../../assets/CV.pdf";
import Toggle from "./toggle/Toggle";
import Icon from "../icons/Icon";
import "./Header.scss";

const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#education", label: "education" },
  { href: "#contact", label: "contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " nav-scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-logo mono" onClick={() => setOpen(false)}>
          <span className="nav-logo-prompt">&gt;_</span> mugurel
          <span className="nav-logo-cursor" />
        </a>

        <nav className={`nav-links${open ? " nav-links-open" : ""}`}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mono"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={CVFile}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost nav-cv"
          >
            <Icon name="download" /> CV
          </a>
        </nav>

        <div className="nav-actions">
          <Toggle />
          <button
            className="nav-burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? "close" : "menu"} size={22} />
          </button>
        </div>
      </div>
      <div
        className="nav-progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
    </header>
  );
};

export default Header;
