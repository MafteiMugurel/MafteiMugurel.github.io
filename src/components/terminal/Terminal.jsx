import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext, themes } from "../../context/ThemeContext";
import { completions, runCommand } from "./commands";
import "./Terminal.scss";

const reducedMotion = () =>
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Flatten the intro script into individual lines.
const flatten = (intro) =>
  intro.flatMap((step) => [
    ...(step.cmd ? [{ type: "cmd", text: step.cmd }] : []),
    ...(step.out || []).map((text, i) => ({
      type: i === 0 && step.ok ? "ok" : "out",
      text,
    })),
  ]);

const Terminal = ({
  intro = [],
  title = "mugurel@infra: ~",
  active = true,
  autoFocus = false,
  onClose,
  className = "",
}) => {
  const [lines, setLines] = useState([]);
  const [ready, setReady] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [histIdx, setHistIdx] = useState(-1);
  const bodyRef = useRef(null);
  const inputRef = useRef(null);
  const { theme, changeTheme } = useContext(ThemeContext);

  // Play the intro: commands are typed character by character, output appears line by line.
  useEffect(() => {
    const script = flatten(intro);
    if (reducedMotion() || script.length === 0) {
      setLines(script);
      setReady(true);
      return undefined;
    }
    const timers = [];
    const done = [];
    let i = 0;

    const next = () => {
      if (i >= script.length) {
        timers.push(setTimeout(() => setReady(true), 250));
        return;
      }
      const line = script[i++];
      if (line.type === "cmd") {
        let k = 0;
        const type = () => {
          k++;
          setLines([...done, { type: "cmd", text: line.text.slice(0, k) }]);
          if (k < line.text.length) timers.push(setTimeout(type, 38));
          else {
            done.push(line);
            timers.push(setTimeout(next, 260));
          }
        };
        type();
      } else {
        done.push(line);
        setLines([...done]);
        timers.push(setTimeout(next, 110));
      }
    };
    timers.push(setTimeout(next, 500));
    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep the newest output in view (scrolls the terminal only, never the page).
  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [lines, ready]);

  useEffect(() => {
    if (active && ready && autoFocus) {
      inputRef.current?.focus({ preventScroll: true });
    }
  }, [active, ready, autoFocus]);

  const submit = () => {
    const raw = input;
    const cmd = raw.trim();
    const echo = { type: "cmd", text: raw };
    setInput("");
    setHistIdx(-1);
    if (!cmd) {
      setLines((l) => [...l, echo]);
      return;
    }
    const nextHistory = [...history, cmd];
    setHistory(nextHistory);
    const res = runCommand(cmd, {
      isDark: theme === themes.dark,
      setTheme: changeTheme,
      history: nextHistory,
      canClose: Boolean(onClose),
    });
    if (res.clear) setLines([]);
    else setLines((l) => [...l, echo, ...res.lines]);
    if (res.action) setTimeout(res.action, 350);
    if (res.close && onClose) setTimeout(onClose, 250);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      submit();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!history.length) return;
      const idx = histIdx === -1 ? history.length - 1 : Math.max(0, histIdx - 1);
      setHistIdx(idx);
      setInput(history[idx]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIdx === -1) return;
      const idx = histIdx + 1;
      if (idx >= history.length) {
        setHistIdx(-1);
        setInput("");
      } else {
        setHistIdx(idx);
        setInput(history[idx]);
      }
    } else if (e.key === "Tab") {
      const options = completions(input);
      if (input && options.length) {
        e.preventDefault();
        if (options.length === 1) setInput(options[0] + " ");
        else setLines((l) => [...l, { type: "cmd", text: input }, { type: "muted", text: options.join("  ") }]);
      }
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setLines([]);
    } else if (e.key === "Escape" && onClose) {
      onClose();
    }
  };

  const focusInput = () => {
    if (window.getSelection && window.getSelection().toString()) return;
    inputRef.current?.focus({ preventScroll: true });
  };

  return (
    <div className={`term ${className}`} onClick={focusInput}>
      <div className="term-bar">
        <span />
        <span />
        <span />
        <div className="term-title mono">{title}</div>
      </div>
      <div className="term-body mono" ref={bodyRef} aria-live="polite">
        {lines.map((line, i) => (
          <div key={i} className={`term-line term-${line.type}`}>
            {line.type === "cmd" ? (
              <>
                <span className="term-prompt">~$</span> {line.text}
              </>
            ) : line.type === "link" ? (
              <a
                href={line.href}
                target={line.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
              >
                {line.text}
              </a>
            ) : (
              line.text
            )}
          </div>
        ))}
        {ready ? (
          <div className="term-input-row">
            <span className="term-prompt">~$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="type 'help' and press Enter"
              aria-label="Terminal command input"
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck="false"
              enterKeyHint="send"
            />
          </div>
        ) : (
          <span className="term-cursor" />
        )}
      </div>
    </div>
  );
};

export default Terminal;
