import { useEffect, useState } from "react";
import "./Footer.scss";

const fmt = (s) =>
  [Math.floor(s / 3600), Math.floor((s % 3600) / 60), s % 60]
    .map((n) => String(n).padStart(2, "0"))
    .join(":");

const Footer = () => {
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const t = setInterval(
      () => setUptime(Math.floor((Date.now() - start) / 1000)),
      1000
    );
    return () => clearInterval(t);
  }, []);

  return (
    <footer className="footer">
      <div className="container footer-inner mono">
        <span>© {new Date().getFullYear()} Vasilica-Mugurel Maftei</span>
        <span className="footer-status">
          <span className="footer-dot" /> all systems operational · session
          uptime {fmt(uptime)}
        </span>
        <span className="footer-tip">
          press <kbd>`</kbd> for the console
        </span>
      </div>
    </footer>
  );
};

export default Footer;
