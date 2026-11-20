import { useEffect, useState } from "react";
import Terminal from "../terminal/Terminal";
import "./Console.scss";

const isTypingTarget = (el) =>
  el &&
  (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable);

// Quake-style drop-down console: press ` (or tap the >_ button) anywhere.
const Console = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.key === "`" || e.key === "~") && !isTypingTarget(e.target)) {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div
        className={`console${open ? " console-open" : ""}`}
        aria-hidden={!open}
        inert={open ? undefined : ""}
      >
        <Terminal
          title="console — press ` or Esc to close"
          intro={[
            {
              out: [
                "mugurel-portfolio console v2026.11",
                "Type 'help' to list commands, 'exit' to close.",
              ],
              ok: true,
            },
          ]}
          active={open}
          autoFocus
          onClose={() => setOpen(false)}
        />
      </div>
      {open && <div className="console-backdrop" onClick={() => setOpen(false)} />}
      <button
        className={`console-fab mono${open ? " console-fab-open" : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close console" : "Open console"}
        title="Console ( ` )"
      >
        {open ? "×" : ">_"}
      </button>
    </>
  );
};

export default Console;
