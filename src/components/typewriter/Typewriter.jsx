import { useEffect, useState } from "react";
import "./Typewriter.scss";

const reduced = () =>
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Types each word, pauses, deletes it, moves on to the next.
const Typewriter = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(reduced() ? words[0] : "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced()) return undefined;
    const word = words[index % words.length];
    let delay = deleting ? 35 : 75;
    if (!deleting && text === word) delay = 1800;
    if (deleting && text === "") delay = 300;

    const t = setTimeout(() => {
      if (!deleting) {
        if (text === word) setDeleting(true);
        else setText(word.slice(0, text.length + 1));
      } else if (text === "") {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else {
        setText(word.slice(0, text.length - 1));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return (
    <span className="typewriter">
      <span className="typewriter-sr">{words.join(", ")}</span>
      <span aria-hidden="true">{text}</span>
      <span className="typewriter-caret" aria-hidden="true" />
    </span>
  );
};

export default Typewriter;
