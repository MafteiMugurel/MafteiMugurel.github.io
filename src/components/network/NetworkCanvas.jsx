import { useEffect, useRef } from "react";
import "./NetworkCanvas.scss";

const hexToRgb = (hex) => {
  const h = hex.replace("#", "").trim();
  const n = parseInt(h.length === 3 ? h.replace(/./g, "$&$&") : h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255].join(",");
};

const readColors = () => {
  const s = getComputedStyle(document.documentElement);
  return {
    a: hexToRgb(s.getPropertyValue("--accent") || "#3ddc97"),
    b: hexToRgb(s.getPropertyValue("--accent-2") || "#4cc9f0"),
  };
};

// Animated network topology: drifting nodes, links between neighbours,
// and data packets hopping along the links. Reacts to the mouse.
const NetworkCanvas = () => {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let linkDist = 140;
    let nodes = [];
    let packets = [];
    let colors = readColors();
    let raf = 0;
    let visible = true;
    let lastSpawn = 0;
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      linkDist = w < 600 ? 105 : 140;
      const count = Math.max(22, Math.min(85, Math.round((w * h) / 15000)));
      nodes = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        server: i % 9 === 0,
      }));
      packets = [];
    };

    const neighbours = (n) =>
      nodes.filter(
        (m) => m !== n && Math.hypot(m.x - n.x, m.y - n.y) < linkDist
      );

    const draw = (time) => {
      ctx.clearRect(0, 0, w, h);

      if (!reduced) {
        for (const n of nodes) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;
        }
      }

      // links
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < linkDist) {
            ctx.strokeStyle = `rgba(${colors.a},${(1 - d / linkDist) * 0.22})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        // links to the mouse
        const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (dm < 170) {
          ctx.strokeStyle = `rgba(${colors.b},${(1 - dm / 170) * 0.5})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      // nodes
      for (const n of nodes) {
        if (n.server) {
          ctx.fillStyle = `rgba(${colors.b},0.85)`;
          ctx.fillRect(n.x - 3, n.y - 3, 6, 6);
        } else {
          ctx.fillStyle = `rgba(${colors.a},0.7)`;
          ctx.beginPath();
          ctx.arc(n.x, n.y, 1.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (reduced) return;

      // packets
      if (time - lastSpawn > 260 && packets.length < 18) {
        lastSpawn = time;
        const from = nodes[Math.floor(Math.random() * nodes.length)];
        const options = neighbours(from);
        if (options.length) {
          packets.push({
            from,
            to: options[Math.floor(Math.random() * options.length)],
            t: 0,
            speed: 0.012 + Math.random() * 0.012,
          });
        }
      }
      packets = packets.filter((p) => p.t <= 1);
      for (const p of packets) {
        p.t += p.speed;
        const x = p.from.x + (p.to.x - p.from.x) * p.t;
        const y = p.from.y + (p.to.y - p.from.y) * p.t;
        ctx.fillStyle = `rgba(${colors.a},0.95)`;
        ctx.shadowColor = `rgba(${colors.a},0.9)`;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(x, y, 2.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    };

    const loop = (time) => {
      if (visible && !document.hidden) draw(time);
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const ro = new ResizeObserver(() => {
      resize();
      if (reduced) draw(0);
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(canvas);

    const mo = new MutationObserver(() => {
      colors = readColors();
      if (reduced) draw(0);
    });
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    resize();
    if (reduced) draw(0);
    else raf = requestAnimationFrame(loop);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      mo.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} className="network-canvas" aria-hidden="true" />;
};

export default NetworkCanvas;
