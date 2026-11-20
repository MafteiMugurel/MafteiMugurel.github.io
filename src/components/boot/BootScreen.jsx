import { useEffect, useState } from "react";
import "./BootScreen.scss";

const LINES = [
  ["    0.000000", "Booting mugurel-portfolio 2026.11 …", ""],
  [" OK ", "Mounted /home/mugurel", "ok"],
  [" OK ", "Started network.service (TCP/IP · DNS · DHCP)", "ok"],
  [" OK ", "Started firewall.service — Cisco Cybersecurity", "ok"],
  [" OK ", "Started powershell-automation.service", "ok"],
  [" OK ", "Reached target l1-support.target", "ok"],
  ["WAIT", "Starting devops.target … (in progress)", "wait"],
  [" OK ", "Started portfolio.service", "ok"],
];

const STEP_MS = 150;

const shouldShow = () => {
  try {
    if (sessionStorage.getItem("booted")) return false;
  } catch (e) {
    // storage blocked – show it, it's short
  }
  if (navigator.webdriver) return false;
  return !(
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
};

// One-time (per session) boot log before the page appears. Any key/click skips.
const BootScreen = () => {
  const [visible, setVisible] = useState(shouldShow);
  const [count, setCount] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (!visible) return undefined;
    try {
      sessionStorage.setItem("booted", "1");
    } catch (e) {
      // ignore
    }
    document.documentElement.style.overflow = "hidden";

    let finished = false;
    const timers = [];
    const finish = () => {
      if (finished) return;
      finished = true;
      setLeaving(true);
      timers.push(
        setTimeout(() => {
          setVisible(false);
          document.documentElement.style.overflow = "";
        }, 450)
      );
    };

    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= LINES.length) {
        clearInterval(interval);
        timers.push(setTimeout(finish, 500));
      }
    }, STEP_MS);

    window.addEventListener("keydown", finish);
    window.addEventListener("pointerdown", finish);
    return () => {
      clearInterval(interval);
      timers.forEach(clearTimeout);
      window.removeEventListener("keydown", finish);
      window.removeEventListener("pointerdown", finish);
      document.documentElement.style.overflow = "";
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className={`boot mono${leaving ? " boot-leaving" : ""}`} aria-hidden="true">
      <div className="boot-inner">
        {LINES.slice(0, count).map(([tag, text, kind]) => (
          <div className="boot-line" key={text}>
            <span className={`boot-tag boot-${kind}`}>[{tag}]</span> {text}
          </div>
        ))}
        <div className="boot-progress">
          <span style={{ width: `${(count / LINES.length) * 100}%` }} />
        </div>
        <div className="boot-skip">press any key to skip</div>
      </div>
    </div>
  );
};

export default BootScreen;
