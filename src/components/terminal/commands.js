import CVFile from "../../assets/CV.pdf";

const L = (text, type = "out") => ({ type, text });
const link = (text, href) => ({ type: "link", text, href });

const goTo = (id) => () =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const files = {
  "about.txt": "about",
  "skills.cfg": "skills",
  "experience.log": "experience",
  "projects/": "projects",
  "education.md": "education",
  "certs.pem": "certs",
  "contact.sh": "contact",
  "cv.pdf": "cv",
};

const commands = {
  help: {
    desc: "list available commands",
    run: () => [
      L("Available commands:", "accent"),
      ...Object.entries(commands)
        .filter(([, c]) => !c.hidden)
        .map(([name, c]) => L(`  ${name.padEnd(11)} ${c.desc}`)),
      L("Tip: ↑/↓ = history · Tab = autocomplete · ` = console", "muted"),
    ],
  },
  whoami: {
    desc: "who is behind this terminal",
    run: () => [
      L("Vasilica-Mugurel Maftei", "ok"),
      L("IT Support Engineer · Bucharest, RO"),
      L("L1 support → L2/L3 → DevOps"),
    ],
  },
  neofetch: {
    desc: "system info, portfolio edition",
    run: () => [
      L("   ┌──────┐    mugurel@portfolio", "ok"),
      L("   │ >_   │    ─────────────────"),
      L("   │      │    Role:     IT Support Engineer (L1)"),
      L("   └──┬───┘    Location: Bucharest, Romania"),
      L("    ──┴──      Study:    CS for Business Mgmt @ URA"),
      L("               Certs:    Cisco Networking, Cybersecurity"),
      L("               Shell:    PowerShell"),
      L("               Langs:    Java, C#, C++, TypeScript"),
      L("               Target:   DevOps Engineer"),
    ],
  },
  about: {
    desc: "short bio",
    run: () => ({
      lines: [
        L("IT professional & CS student with hands-on L1 support,"),
        L("networking and incident management experience. Building"),
        L("toward DevOps: automate, secure, optimize infrastructure."),
      ],
      action: goTo("about"),
    }),
  },
  skills: {
    desc: "tech stack",
    run: () => ({
      lines: [
        L("[infra]    IT infrastructure, Zoho, RDP, Hyper-V, hardware"),
        L("[network]  TCP/IP, DNS, DHCP, routing, network security"),
        L("[code]     PowerShell, Java, C#, C++, JS/TS, Git"),
        L("[method]   Agile, Scrum, Kanban, client-server"),
      ],
      action: goTo("skills"),
    }),
  },
  experience: {
    desc: "work history",
    run: () => ({
      lines: [
        L("2026-05..06  Network & Cybersecurity Intern · Cisco NetAcad / URA"),
        L("2024-03..11  IT Technician (L1) · ACROM (McDonald's infra)"),
      ],
      action: goTo("experience"),
    }),
  },
  projects: {
    desc: "things I've built",
    run: () => ({
      lines: [
        L("Car-Service-Registry   Java"),
        L("Financial-Registry     C#"),
        L("Healthy-Pet            TypeScript"),
        L("CPP-Practice           C++"),
        link("→ github.com/MafteiMugurel", "https://github.com/MafteiMugurel"),
      ],
      action: goTo("projects"),
    }),
  },
  education: {
    desc: "degrees & training",
    run: () => ({
      lines: [
        L("2024–2027  BSc CS for Business Mgmt · Univ. Româno-Americană"),
        L("2022       Frontend Development · Școala Informală de IT"),
        L("2015–2018  BSc Dental Technology · Univ. Apollonia (9.10)"),
      ],
      action: goTo("education"),
    }),
  },
  certs: {
    desc: "certifications",
    run: () => [
      L("✓ Networking Basics — Cisco Networking Academy (2026)", "ok"),
      L("✓ Introduction to Cybersecurity — Cisco NetAcad (2026)", "ok"),
      L("✓ Agile Fundamentals: Scrum & Kanban — Udemy (2022)", "ok"),
    ],
  },
  contact: {
    desc: "how to reach me",
    run: () => ({
      lines: [
        link("email     mugurel.maftei95@gmail.com", "mailto:mugurel.maftei95@gmail.com"),
        link("linkedin  in/maftei-mugurel", "https://www.linkedin.com/in/maftei-mugurel-a53b891a8/"),
        link("github    MafteiMugurel", "https://github.com/MafteiMugurel"),
      ],
      action: goTo("contact"),
    }),
  },
  cv: {
    desc: "open my CV (PDF)",
    run: () => ({
      lines: [L("Opening cv.pdf …", "ok")],
      action: () => window.open(CVFile, "_blank", "noopener"),
    }),
  },
  ping: {
    desc: "ping <host>  (try: ping devops)",
    run: (args) => {
      const host = args[0] || "devops";
      if (!/devops/i.test(host)) {
        return [
          L(`PING ${host}: 56 data bytes`),
          L("Request timeout. Hint: my next hop is 'devops'.", "muted"),
        ];
      }
      return [
        L(`PING ${host}.next (10.0.20.27): 56 data bytes`),
        L("64 bytes: icmp_seq=0 ttl=64 stage=L1-support       time=2024", "ok"),
        L("64 bytes: icmp_seq=1 ttl=64 stage=cisco-certified  time=2026", "ok"),
        L("64 bytes: icmp_seq=2 ttl=64 stage=L2/L3-support    time=next", "ok"),
        L("--- devops ping statistics: 0% packet loss, motivation 100% ---"),
      ];
    },
  },
  ls: {
    desc: "list files",
    run: () => [L(Object.keys(files).join("  "))],
  },
  cat: {
    desc: "cat <file>",
    run: (args) => {
      const target = files[args[0]];
      if (!target) return [L(`cat: ${args[0] || ""}: No such file. Try 'ls'.`, "err")];
      return commands[target].run([]);
    },
  },
  theme: {
    desc: "toggle light / dark",
    run: (_, ctx) => {
      const next = ctx.isDark ? "light" : "dark";
      ctx.setTheme(next);
      return [L(`Theme switched to ${next}.`, "ok")];
    },
  },
  date: {
    desc: "current date",
    run: () => [L(new Date().toString())],
  },
  history: {
    desc: "command history",
    run: (_, ctx) =>
      ctx.history.length
        ? ctx.history.map((h, i) => L(`  ${String(i + 1).padStart(3)}  ${h}`))
        : [L("(empty)", "muted")],
  },
  sudo: {
    desc: "sudo hire-me",
    run: (args) => {
      if (args.join(" ") !== "hire-me") {
        return [L("usage: sudo hire-me", "muted")];
      }
      return {
        lines: [
          L("[sudo] password for recruiter: ********"),
          L("Access granted ✓ Redirecting to contact form…", "ok"),
        ],
        action: goTo("contact"),
      };
    },
  },
  clear: { desc: "clear the screen", run: () => ({ clear: true }) },
  echo: { hidden: true, run: (args) => [L(args.join(" "))] },
  exit: {
    desc: "close the console",
    run: (_, ctx) =>
      ctx.canClose
        ? { lines: [L("logout")], close: true }
        : [L("This terminal stays open. Try the ` console instead :)", "muted")],
  },
  rm: {
    hidden: true,
    run: () => [L("rm: permission denied. Nice try though.", "err")],
  },
};

export const commandNames = Object.keys(commands).filter(
  (n) => !commands[n].hidden
);

export const runCommand = (input, ctx) => {
  const [name, ...args] = input.trim().split(/\s+/);
  const cmd = commands[name.toLowerCase()];
  if (!cmd) {
    return {
      lines: [L(`command not found: ${name}. Type 'help'.`, "err")],
    };
  }
  const result = cmd.run(args, ctx);
  return Array.isArray(result) ? { lines: result } : { lines: [], ...result };
};

export const completions = (partial) => {
  const [name, ...rest] = partial.split(" ");
  if (rest.length === 0) return commandNames.filter((n) => n.startsWith(name));
  if (name === "cat")
    return Object.keys(files)
      .filter((f) => f.startsWith(rest[0] || ""))
      .map((f) => `cat ${f}`);
  return [];
};
