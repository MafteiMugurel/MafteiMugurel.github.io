import { useContext, useEffect, useRef, useState } from "react";
import PORTRAIT from "../../assets/portrait.webp";
import { ThemeContext, themes } from "../../context/ThemeContext";
import "./AsciiPortrait.scss";

const RAMP = ".,:;-~=+*ox#%&@"; // sparse → dense, used for opaque pixels only
const NOISE = "01<>/\\{}[]#$%&*+=?";
const CHAR_W = 0.6; // JetBrains Mono advance width in em

const reduced = () =>
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Converts the portrait into ASCII art sized to its box, "decrypts" it into place
// when it scrolls into view, and reveals the real photo on hover / toggle.
const AsciiPortrait = () => {
  const boxRef = useRef(null);
  const preRef = useRef(null);
  const imgRef = useRef(null);
  const gridRef = useRef([]);
  const decodedRef = useRef(false);
  const [fontSize, setFontSize] = useState(6);
  const [mode, setMode] = useState("ascii");
  const { theme } = useContext(ThemeContext);
  const isDark = theme === themes.dark;

  useEffect(() => {
    let cancelled = false;
    let raf = 0;
    let fallback = 0;

    const build = () => {
      const img = imgRef.current;
      const box = boxRef.current;
      if (!img || !box || !box.clientWidth) return;
      const W = box.clientWidth;
      const cols = Math.max(56, Math.min(110, Math.round(W / 3.4)));
      const rows = Math.round(cols * (img.naturalHeight / img.naturalWidth) * CHAR_W);

      const c = document.createElement("canvas");
      c.width = cols;
      c.height = rows;
      const ctx = c.getContext("2d", { willReadFrequently: true });
      ctx.drawImage(img, 0, 0, cols, rows);
      const { data } = ctx.getImageData(0, 0, cols, rows);

      // Luminance of opaque pixels, then histogram equalisation so that both
      // the bright face and the dark jacket keep visible detail.
      const lum = new Float32Array(cols * rows);
      const opaque = [];
      for (let i = 0; i < cols * rows; i++) {
        if (data[i * 4 + 3] < 110) {
          lum[i] = -1;
          continue;
        }
        lum[i] =
          (0.299 * data[i * 4] + 0.587 * data[i * 4 + 1] + 0.114 * data[i * 4 + 2]) /
          255;
      }
      // Local contrast (unsharp mask): exaggerate each cell against its
      // neighbourhood so eyes, beard and jacket seams stand out.
      const R = 3;
      const sharp = new Float32Array(cols * rows);
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const i = y * cols + x;
          if (lum[i] < 0) {
            sharp[i] = -1;
            continue;
          }
          let sum = 0;
          let n = 0;
          for (let dy = -R; dy <= R; dy++) {
            for (let dx = -R; dx <= R; dx++) {
              const yy = y + dy;
              const xx = x + dx;
              if (yy < 0 || yy >= rows || xx < 0 || xx >= cols) continue;
              const v = lum[yy * cols + xx];
              if (v < 0) continue;
              sum += v;
              n++;
            }
          }
          sharp[i] = lum[i] + 1.6 * (lum[i] - sum / n);
          opaque.push(sharp[i]);
        }
      }
      lum.set(sharp);
      opaque.sort((a, b) => a - b);
      const rank = (l) => {
        let lo = 0;
        let hi = opaque.length;
        while (lo < hi) {
          const mid = (lo + hi) >> 1;
          if (opaque[mid] < l) lo = mid + 1;
          else hi = mid;
        }
        return opaque.length > 1 ? lo / (opaque.length - 1) : 0.5;
      };
      const grid = [];
      for (let y = 0; y < rows; y++) {
        let row = "";
        for (let x = 0; x < cols; x++) {
          const l = lum[y * cols + x];
          if (l < 0) {
            row += " ";
            continue;
          }
          let n = rank(l);
          if (!isDark) n = 1 - n; // dark ink on light paper
          row += RAMP[Math.min(RAMP.length - 1, Math.floor(n * RAMP.length))];
        }
        grid.push(row);
      }
      gridRef.current = grid;
      setFontSize(W / (cols * CHAR_W));
      if (decodedRef.current || reduced()) {
        decodedRef.current = true;
        if (preRef.current) preRef.current.textContent = grid.join("\n");
      } else if (preRef.current) {
        preRef.current.textContent = "";
      }
    };

    const decode = () => {
      if (decodedRef.current) return;
      decodedRef.current = true;
      const grid = gridRef.current;
      const thresholds = grid.map((row) => Array.from(row, () => Math.random()));
      const duration = 1600;
      let start = null;
      // Safety net: always land on the finished portrait, even if frames get throttled.
      fallback = setTimeout(() => {
        cancelAnimationFrame(raf);
        if (preRef.current) preRef.current.textContent = gridRef.current.join("\n");
      }, duration + 600);
      const frame = (now) => {
        if (cancelled) return;
        if (start === null) start = now;
        const p = Math.min(1, (now - start) / duration);
        const g = gridRef.current;
        let out = "";
        for (let y = 0; y < g.length; y++) {
          const row = g[y];
          const thr = thresholds[y] || [];
          for (let x = 0; x < row.length; x++) {
            const ch = row[x];
            out +=
              ch === " " || p >= (thr[x] ?? 0)
                ? ch
                : NOISE[(Math.random() * NOISE.length) | 0];
          }
          out += "\n";
        }
        if (preRef.current) preRef.current.textContent = out;
        if (p < 1) raf = requestAnimationFrame(frame);
      };
      raf = requestAnimationFrame(frame);
    };

    const img = new Image();
    img.onload = () => {
      if (cancelled) return;
      imgRef.current = img;
      build();
    };
    img.src = PORTRAIT;

    const ro = new ResizeObserver(() => build());
    ro.observe(boxRef.current);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && gridRef.current.length) {
          decode();
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    // start observing once the grid exists
    const waitForGrid = setInterval(() => {
      if (gridRef.current.length) {
        clearInterval(waitForGrid);
        io.observe(boxRef.current);
      }
    }, 100);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      clearTimeout(fallback);
      clearInterval(waitForGrid);
      ro.disconnect();
      io.disconnect();
    };
  }, [isDark]);

  return (
    <div className={`portrait is-${mode}`}>
      <div className="portrait-bar mono">
        <span className="portrait-file">portrait.webp</span>
        <div className="portrait-toggle" role="group" aria-label="Portrait render mode">
          <button
            className={mode === "ascii" ? "is-active" : ""}
            onClick={() => setMode("ascii")}
            aria-pressed={mode === "ascii"}
          >
            ascii
          </button>
          <button
            className={mode === "photo" ? "is-active" : ""}
            onClick={() => setMode("photo")}
            aria-pressed={mode === "photo"}
          >
            photo
          </button>
        </div>
      </div>
      <div
        className="portrait-box"
        ref={boxRef}
        onClick={() => setMode((m) => (m === "ascii" ? "photo" : "ascii"))}
        title="Click to switch ascii / photo"
      >
        <pre
          ref={preRef}
          className="portrait-ascii"
          style={{ fontSize: `${fontSize}px` }}
          aria-hidden="true"
        />
        <img className="portrait-photo" src={PORTRAIT} alt="Mugurel Maftei" />
        <span className="portrait-scan" aria-hidden="true" />
      </div>
      <div className="portrait-hint mono">
        {mode === "ascii" ? "hover or tap to decrypt" : "rendered: original"}
      </div>
    </div>
  );
};

export default AsciiPortrait;
