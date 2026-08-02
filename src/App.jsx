import React, { useEffect, useState } from "react";
import {  Github, Linkedin, Send, Facebook, Mail, Phone,  ArrowUpRight, Menu, X,  MapPin, } from "lucide-react";
import logo from './Images/icon.jpg'

const NAV = [
  { id: "home", label: "./home" },
  { id: "about", label: "./about" },
  { id: "skills", label: "./skills" },
  { id: "portfolio", label: "./work" },
  { id: "contact", label: "./contact" },
];

// Experience / time calculations
const dob = new Date('2007-07-01'); // dob
const codingStartDate = new Date('2022-01-01'); // date of start coding
const workStartDate = new Date('2026-05-19'); // date of start working

const today = new Date();

// age calculator
let age = today.getFullYear() - dob.getFullYear();
const mAge = today.getMonth() - dob.getMonth();
if (mAge < 0 || (mAge === 0 && today.getDate() < dob.getDate())) {
  age--;
}

// coding experience
let yearsCoding = today.getFullYear() - codingStartDate.getFullYear();
const mCoding = today.getMonth() - codingStartDate.getMonth();
if (mCoding < 0 || (mCoding === 0 && today.getDate() < codingStartDate.getDate())) {
  yearsCoding--;
}

// work experience
let totalWorkMonths = (today.getFullYear() - workStartDate.getFullYear()) * 12 + (today.getMonth() - workStartDate.getMonth());
if (today.getDate() < workStartDate.getDate()) {
  totalWorkMonths--;
}
totalWorkMonths += 24;

const workYearsCalc = Math.floor(totalWorkMonths / 12);
const workMonthsCalc = totalWorkMonths % 12;
const workExpText = `${workYearsCalc}.${workMonthsCalc}+`;

const STATS = [
  { value: `${yearsCoding}+`, label: "Years Coding" },
  { value: `${age}`, label: "Years Old" },
  { value: workExpText, label: "Work Experiences" },
  { value: "∞", label: "Eager To Learn" },
];

const EDUCATION = [
  {
    period: "2024 — Present",
    role: "BELTEI International University",
    desc: "Studying Software Engineering, building a foundation across both technical and security concepts.",
  },
];

const WORK = [
  {
    period: "2026 — Persent",
    role: "Tracking officer",
    desc: "Tracking Vehicel at Vireak Buntham Express",
  },
  {
    period: "2024 — 2026",
    role: "Page Administrator",
    desc: "Managing social content strategy, audience engagement, ad campaigns and account security.",
  },
  {
    period: "2023 — 2024",
    role: "Teaching Assistant",
    desc: "Supported lead instructors with lesson prep, student assessment and small group discussions.",
  },
];

const SKILLS = [
  { name: "HTML5", status: "stable", desc: "Semantic markup, structure and accessibility best practices." },
  { name: "CSS3", status: "stable", desc: "Animation, Flexbox, Grid, responsive and custom styling." },
  { name: "JavaScript", status: "learning", desc: "DOM manipulation, events and interactive features." },
  { name: "Networking & Security", status: "stable", desc: "Cybersecurity fundamentals, protocols and infrastructure." },
  { name: "C++", status: "stable", desc: "OOP, memory management and efficient system applications." },
  { name: "Python", status: "learning", desc: "Scripting, automation and data-processing fundamentals." },
  { name: "C#", status: "learning", desc: "Object-oriented programming, .NET ecosystem and application development." },
  { name: "SQL", status: "learning", desc: "Relational database querying, data manipulation and schema design." },
  { name: "DBMS", status: "learning", desc: "Database management systems, indexing, transactions and optimization." },
  { name: "Git & GitHub", status: "stable", desc: "Version control, Pages deployment and open-source flow." },
  { name: "React.js", status: "learning", desc: "Component design, hooks and building toward full-stack." },
];

const PROJECTS = [
  {
    title: "Creator Profile — About Me",
    stack: "HTML · CSS",
    desc: "A clean, link-in-bio style profile page for a Gaming & Tech content creator.",
    href: "https://veasna18.github.io/FollowMe/",
    cta: "Visit site",
  },
  {
    title: "Do You Love Me?",
    stack: "HTML · CSS · Fun",
    desc: "A playful interactive page with cute animations and a teasing yes/no question.",
    href: "https://veasna18.github.io/mylove/",
    cta: "Visit site",
  },
  {
    title: "YouTube Downloader",
    stack: "Web App",
    desc: "A practical web app exploring download workflows and client-side app structure.",
    href: "https://github.com/Veasna18/YouTube-Downloader",
    cta: "View code",
  },
  {
    title: "ParkingLot System",
    stack: "C++ · School Project",
    desc: "A console app managing a parking lot, built to practice OOP for university coursework.",
    href: "https://github.com/Veasna18/ParkingLot",
    cta: "View code",
  },
  {
    title: "Nike E-commerce Clone",
    stack: "React JS · Tailwind CSS",
    desc: "A responsive e-commerce web application replicating Nike's online store, featuring product filtering, cart management, and modern UI design.",
    href: "https://github.com/Veasna18/nike-clone",
    cta: "View code",
  }
];

const SOCIALS = [
  { icon: Github, label: "Veasna18", href: "https://github.com/Veasna18" },
  { icon: Linkedin, label: "Om Veasna", href: "https://www.linkedin.com/in/om-veasna-32b223390/" },
  { icon: Send, label: "@VeasNa178", href: "https://t.me/VeasNa178" },
  { icon: Facebook, label: "Om Veasna", href: "https://www.facebook.com/profile.php?id=61581495545562" },
];

function useTypedLines(lines, speed = 26, startDelay = 300) {
  const [out, setOut] = useState(lines.map(() => ""));
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let lineIdx = 0;
    let charIdx = 0;
    const buf = lines.map(() => "");

    const timer = setTimeout(function step() {
      if (cancelled) return;
      if (lineIdx >= lines.length) {
        setDone(true);
        return;
      }
      const current = lines[lineIdx];
      charIdx += 1;
      buf[lineIdx] = current.slice(0, charIdx);
      setOut([...buf]);
      if (charIdx >= current.length) {
        lineIdx += 1;
        charIdx = 0;
        setTimeout(step, 220);
      } else {
        setTimeout(step, speed);
      }
    }, startDelay);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  return { out, done };
}

export default function Portfolio() {
  const [navOpen, setNavOpen] = useState(false);
  const heroLines = [
    "$ whoami",
    "Om Veasna — Web Developer & SE student",
    "$ status --check",
    "Available for freelance • Open to work",
  ];
  const { out, done } = useTypedLines(heroLines, 24, 400);

  const scrollTo = (id) => {
    setNavOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="ov-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700;800&family=Inter:wght@400;500;600;700;800&display=swap');

        .ov-root {
          --bg: #0b0f17;
          --panel: #111826;
          --panel-2: #0e1420;
          --border: #232c3d;
          --text: #edeff3;
          --dim: #8a93a6;
          --accent: #e8a33d;
          --accent-2: #4fd1c5;
          --radius: 10px;
          background: var(--bg);
          color: var(--text);
          font-family: 'Inter', system-ui, sans-serif;
          min-height: 100vh;
          width: 100%;
          line-height: 1.5;
        }
        .ov-root * { box-sizing: border-box; }
        .mono { font-family: 'JetBrains Mono', ui-monospace, monospace; }

        .ov-bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px);
          background-size: 42px 42px;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%);
          pointer-events: none;
        }

        .ov-nav {
          position: sticky; top: 0; z-index: 40;
          backdrop-filter: blur(10px);
          background: rgba(11,15,23,0.82);
          border-bottom: 1px solid var(--border);
        }
        .ov-nav-inner {
          max-width: 1120px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          padding: 14px 24px;
        }
        .ov-logo { font-weight: 700; font-size: 15px; letter-spacing: 0.02em; }
        .ov-logo .path { color: var(--accent-2); }
        .ov-navlinks { display: flex; gap: 4px; align-items: center; }
        .ov-navlink {
          background: none; border: none; cursor: pointer;
          color: var(--dim); font-size: 13.5px; padding: 8px 12px;
          border-radius: 6px; transition: color .15s ease, background .15s ease;
        }
        .ov-navlink:hover { color: var(--text); background: rgba(255,255,255,0.04); }
        .ov-menu-btn { display: none; background: none; border: 1px solid var(--border); border-radius: 8px; padding: 8px; color: var(--text); cursor: pointer; }
        .ov-mobile-menu { display: none; flex-direction: column; border-top: 1px solid var(--border); padding: 8px 24px 16px; gap: 2px; }

        section { scroll-margin-top: 70px; }
        .ov-wrap { max-width: 1120px; margin: 0 auto; padding: 0 24px; position: relative; }

        .ov-hero { padding: 88px 0 96px; position: relative; overflow: hidden; }
        .ov-hero-grid { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 56px; align-items: center; position: relative; z-index: 1; }
        .ov-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          border: 1px solid var(--border); border-radius: 999px;
          padding: 6px 12px; font-size: 12px; color: var(--accent-2);
          margin-bottom: 22px;
        }
        .ov-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent-2); box-shadow: 0 0 8px var(--accent-2); }
        .ov-h1 { font-size: 48px; font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin: 0 0 18px; }
        .ov-h1 .accent { color: var(--accent); }
        .ov-lead { color: var(--dim); font-size: 16.5px; max-width: 460px; margin-bottom: 34px; }
        .ov-cta-row { display: flex; gap: 12px; flex-wrap: wrap; }
        .ov-btn {
          font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 500;
          padding: 12px 20px; border-radius: 8px; text-decoration: none;
          display: inline-flex; align-items: center; gap: 8px; cursor: pointer;
          transition: transform .15s ease, background .15s ease, border-color .15s ease;
          border: 1px solid transparent;
        }
        .ov-btn:hover { transform: translateY(-1px); }
        .ov-btn.primary { background: var(--accent); color: #12100a; }
        .ov-btn.primary:hover { background: #f0ae4f; }
        .ov-btn.ghost { border-color: var(--border); color: var(--text); background: transparent; }
        .ov-btn.ghost:hover { border-color: var(--accent-2); color: var(--accent-2); }

        .ov-term {
          background: var(--panel); border: 1px solid var(--border); border-radius: 12px;
          overflow: hidden; box-shadow: 0 24px 60px -20px rgba(0,0,0,0.6);
        }
        .ov-term-bar { display: flex; align-items: center; gap: 8px; padding: 12px 14px; border-bottom: 1px solid var(--border); background: var(--panel-2); }
        .ov-term-dot { width: 10px; height: 10px; border-radius: 50%; }
        .ov-term-title { margin-left: 8px; font-size: 12px; color: var(--dim); font-family: 'JetBrains Mono', monospace; }
        .ov-term-body { padding: 22px 20px 26px; font-family: 'JetBrains Mono', monospace; font-size: 13.5px; min-height: 190px; }
        .ov-term-line { margin: 0 0 10px; white-space: pre-wrap; word-break: break-word; }
        .ov-term-line.cmd { color: var(--accent-2); }
        .ov-term-line.out { color: var(--text); padding-left: 0; }
        .ov-cursor { display: inline-block; width: 7px; height: 15px; background: var(--accent-2); margin-left: 2px; vertical-align: -2px; animation: blink 1s steps(1) infinite; }
        @keyframes blink { 50% { opacity: 0; } }
        .ov-term-photo { display: flex; align-items: center; gap: 12px; margin-top: 18px; padding-top: 18px; border-top: 1px dashed var(--border); }
        .ov-avatar { width: 48px; height: 48px; border-radius: 8px; object-fit: cover; border: 1px solid var(--border); }
        .ov-badges { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 8px; }
        .ov-badge { font-size: 11px; color: var(--dim); border: 1px solid var(--border); border-radius: 999px; padding: 3px 9px; }

        .ov-sec-label { font-family: 'JetBrains Mono', monospace; font-size: 12.5px; color: var(--accent-2); margin-bottom: 10px; letter-spacing: 0.03em; }
        .ov-h2 { font-size: 30px; font-weight: 800; letter-spacing: -0.01em; margin: 0 0 40px; }

        .ov-about { padding: 90px 0; border-top: 1px solid var(--border); }
        .ov-about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
        .ov-bio { color: var(--dim); font-size: 15.5px; margin-bottom: 28px; }
        .ov-bio strong { color: var(--text); }
        .ov-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
        .ov-stat { background: var(--panel); border: 1px solid var(--border); border-radius: 10px; padding: 16px 14px; text-align: left; }
        .ov-stat-val { font-family: 'JetBrains Mono', monospace; font-size: 22px; font-weight: 700; color: var(--accent); }
        .ov-stat-label { font-size: 11.5px; color: var(--dim); margin-top: 4px; }

        .ov-tl-group { margin-bottom: 34px; }
        .ov-tl-group:last-child { margin-bottom: 0; }
        .ov-tl-heading { display: flex; align-items: center; gap: 8px; font-family: 'JetBrains Mono', monospace; font-size: 12.5px; color: var(--text); font-weight: 700; margin-bottom: 18px; text-transform: uppercase; letter-spacing: 0.04em; }
        .ov-tl-heading::before { content: ''; width: 8px; height: 8px; border-radius: 2px; background: var(--accent); }
        .ov-tl-group.work .ov-tl-heading::before { background: var(--accent-2); }
        .ov-timeline { position: relative; padding-left: 26px; }
        .ov-timeline::before { content: ''; position: absolute; left: 5px; top: 6px; bottom: 6px; width: 1px; background: var(--border); }
        .ov-tl-item { position: relative; padding-bottom: 24px; }
        .ov-tl-item:last-child { padding-bottom: 0; }
        .ov-tl-dot { position: absolute; left: -26px; top: 4px; width: 11px; height: 11px; border-radius: 50%; background: var(--bg); border: 2px solid var(--accent-2); }
        .ov-tl-group.education .ov-tl-dot { border-color: var(--accent); }
        .ov-tl-period { font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--accent-2); margin-bottom: 4px; }
        .ov-tl-group.education .ov-tl-period { color: var(--accent); }
        .ov-tl-role { font-weight: 700; font-size: 15.5px; margin-bottom: 4px; }
        .ov-tl-desc { color: var(--dim); font-size: 14px; }

        .ov-skills { padding: 90px 0; border-top: 1px solid var(--border); }
        .ov-skill-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
        .ov-skill-card { background: var(--panel); border: 1px solid var(--border); border-radius: 10px; padding: 18px; transition: border-color .15s ease, transform .15s ease; }
        .ov-skill-card:hover { border-color: var(--accent-2); transform: translateY(-2px); }
        .ov-skill-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; }
        .ov-skill-name { font-weight: 700; font-size: 14.5px; }
        .ov-skill-status { font-family: 'JetBrains Mono', monospace; font-size: 10px; padding: 2px 7px; border-radius: 999px; }
        .ov-skill-status.stable { color: var(--accent-2); border: 1px solid rgba(79,209,197,0.4); }
        .ov-skill-status.learning { color: var(--accent); border: 1px solid rgba(232,163,61,0.4); }
        .ov-skill-desc { color: var(--dim); font-size: 12.5px; line-height: 1.5; }

        .ov-portfolio { padding: 90px 0; border-top: 1px solid var(--border); }
        .ov-proj-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .ov-proj-card { background: var(--panel); border: 1px solid var(--border); border-radius: 12px; padding: 22px; display: flex; flex-direction: column; gap: 10px; transition: border-color .15s ease, transform .15s ease; }
        .ov-proj-card:hover { border-color: var(--accent); transform: translateY(-2px); }
        .ov-proj-stack { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--dim); }
        .ov-proj-title { font-size: 17px; font-weight: 700; }
        .ov-proj-desc { color: var(--dim); font-size: 13.5px; flex: 1; }
        .ov-proj-link { font-family: 'JetBrains Mono', monospace; font-size: 12.5px; color: var(--accent-2); text-decoration: none; display: inline-flex; align-items: center; gap: 4px; margin-top: 4px; }
        .ov-proj-link:hover { color: var(--accent); }

        .ov-contact { padding: 90px 0 60px; border-top: 1px solid var(--border); }
        .ov-contact-panel { background: var(--panel); border: 1px solid var(--border); border-radius: 14px; padding: 42px; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 40px; }
        .ov-contact-h { font-size: 24px; font-weight: 800; margin: 0 0 12px; }
        .ov-contact-p { color: var(--dim); font-size: 14.5px; margin-bottom: 22px; max-width: 380px; }
        .ov-contact-links { display: flex; flex-direction: column; gap: 10px; }
        .ov-clink { display: flex; align-items: center; gap: 10px; color: var(--text); text-decoration: none; font-size: 14px; }
        .ov-clink svg { color: var(--accent-2); flex-shrink: 0; }
        .ov-clink:hover { color: var(--accent-2); }
        .ov-socials { display: flex; flex-direction: column; gap: 10px; align-self: start; }
        .ov-social { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 12px 14px; border: 1px solid var(--border); border-radius: 8px; text-decoration: none; color: var(--text); font-size: 13.5px; transition: border-color .15s ease; }
        .ov-social:hover { border-color: var(--accent); color: var(--accent); }
        .ov-social-left { display: flex; align-items: center; gap: 10px; }

        .ov-footer { padding: 26px 24px 40px; text-align: center; color: var(--dim); font-size: 12.5px; font-family: 'JetBrains Mono', monospace; }
        .ov-footer-loc { display: inline-flex; align-items: center; gap: 6px; margin-top: 6px; }

        @media (max-width: 860px) {
          .ov-hero-grid, .ov-about-grid, .ov-proj-grid, .ov-contact-panel { grid-template-columns: 1fr; }
          .ov-skill-grid { grid-template-columns: repeat(2, 1fr); }
          .ov-stats { grid-template-columns: repeat(2, 1fr); }
          .ov-navlinks { display: none; }
          .ov-menu-btn { display: inline-flex; }
          .ov-mobile-menu.open { display: flex; }
          .ov-h1 { font-size: 34px; }
          .ov-contact-panel { padding: 26px; }
        }

        button:focus-visible, a:focus-visible {
          outline: 2px solid var(--accent-2);
          outline-offset: 2px;
        }
        @media (prefers-reduced-motion: reduce) {
          .ov-cursor { animation: none; }
          .ov-btn, .ov-skill-card, .ov-proj-card { transition: none; }
        }
      `}</style>

      <nav className="ov-nav">
        <div className="ov-nav-inner">
          <div className="ov-logo mono">
            Veasna<span className="path">@</span>dev<span className="path">:~$</span>
          </div>
          <div className="ov-navlinks mono">
            {NAV.map((n) => (
              <button key={n.id} className="ov-navlink" onClick={() => scrollTo(n.id)}>
                {n.label}
              </button>
            ))}
          </div>
          <button className="ov-menu-btn" onClick={() => setNavOpen((v) => !v)} aria-label="Toggle menu">
            {navOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        <div className={`ov-mobile-menu mono ${navOpen ? "open" : ""}`}>
          {NAV.map((n) => (
            <button key={n.id} className="ov-navlink" style={{ textAlign: "left" }} onClick={() => scrollTo(n.id)}>
              {n.label}
            </button>
          ))}
        </div>
      </nav>

      <section id="home" className="ov-hero">
        <div className="ov-bg-grid" />
        <div className="ov-wrap">
          <div className="ov-hero-grid">
            <div>
              <div className="ov-eyebrow mono">
                <span className="ov-dot" />
                Available for freelance
              </div>
              <h1 className="ov-h1">
                Hi, I'm <span className="accent">Om Veasna</span>
              </h1>
              <p className="ov-lead">
                Web Developer &amp; Software Engineering student at BELTEI International University.
                Building clean, fast and beautiful websites.
              </p>
              <div className="ov-cta-row">
                <button className="ov-btn primary" onClick={() => scrollTo("portfolio")}>
                  View my work <ArrowUpRight size={16} />
                </button>
                <button className="ov-btn ghost" onClick={() => scrollTo("contact")}>
                  Let's talk
                </button>
              </div>
            </div>

            <div className="ov-term">
              <div className="ov-term-bar">
                <span className="ov-term-dot" style={{ background: "#ef5350" }} />
                <span className="ov-term-dot" style={{ background: "#ffb74d" }} />
                <span className="ov-term-dot" style={{ background: "#66bb6a" }} />
                <span className="ov-term-title">Veasna — zsh</span>
              </div>
              <div className="ov-term-body">
                {heroLines.map((line, i) => {
                  const isCmd = line.startsWith("$");
                  const shown = out[i] || "";
                  const isTypingThisLine = shown.length > 0 && shown.length < line.length;
                  return (
                    <p key={i} className={`ov-term-line ${isCmd ? "cmd" : "out"}`}>
                      {shown}
                      {!done && isTypingThisLine && <span className="ov-cursor" />}
                    </p>
                  );
                })}
                {done && <span className="ov-cursor" />}
                <div className="ov-term-photo">
                  <img className="ov-avatar" src={logo} alt="Om Veasna" />
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700 }}>Om Veasna</div>
                    <div className="ov-badges">
                      <span className="ov-badge">Fullstack Developer</span>
                      <span className="ov-badge">Open to work </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
              
      {/* Abou me Pages */}
      <section id="about" className="ov-about">
        <div className="ov-wrap">
          <div className="ov-sec-label mono">01 · about</div>
          <h2 className="ov-h2">About Me</h2>
          <div className="ov-about-grid">
            <div>
              <p className="ov-bio">
                I'm <strong>Om Veasna</strong>, a <b>{age}</b> year old passionate web developer and <strong>Networking &amp;
                Cybersecurity student.</strong> I started building websites back in 2022, while still in high school.
              </p>
              <p className="ov-bio">
                I love creating clean, user-friendly web experiences, and I'm currently sharpening my{" "}
                <strong>JavaScript</strong> and <strong>React.js</strong> skills on the way to becoming a
                full-stack developer.
              </p>
              {/* staters */}
              <div className="ov-stats">
                {STATS.map((s) => (
                  <div className="ov-stat" key={s.label}>
                    <div className="ov-stat-val mono">{s.value}</div>
                    <div className="ov-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="ov-tl-group education">
                <div className="ov-tl-heading">Education</div>
                <div className="ov-timeline">
                  {EDUCATION.map((t) => (
                    <div className="ov-tl-item" key={t.role}>
                      <span className="ov-tl-dot" />
                      <div className="ov-tl-period mono">{t.period}</div>
                      <div className="ov-tl-role">{t.role}</div>
                      <div className="ov-tl-desc">{t.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ov-tl-group work">
                <div className="ov-tl-heading">Work Experience</div>
                <div className="ov-timeline">
                  {WORK.map((t) => (
                    <div className="ov-tl-item" key={t.role}>
                      <span className="ov-tl-dot" />
                      <div className="ov-tl-period mono">{t.period}</div>
                      <div className="ov-tl-role">{t.role}</div>
                      <div className="ov-tl-desc">{t.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="ov-skills">
        <div className="ov-wrap">
          <div className="ov-sec-label mono">02 · skills</div>
          <h2 className="ov-h2">My Skills</h2>
          <div className="ov-skill-grid">
            {SKILLS.map((s) => (
              <div className="ov-skill-card" key={s.name}>
                <div className="ov-skill-top">
                  <span className="ov-skill-name">{s.name}</span>
                  <span className={`ov-skill-status mono ${s.status}`}>{s.status}</span>
                </div>
                <p className="ov-skill-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="ov-portfolio">
        <div className="ov-wrap">
          <div className="ov-sec-label mono">03 · portfolio</div>
          <h2 className="ov-h2">Selected Work</h2>
          <div className="ov-proj-grid">
            {PROJECTS.map((p) => (
              <div className="ov-proj-card" key={p.title}>
                <span className="ov-proj-stack mono">{p.stack}</span>
                <span className="ov-proj-title">{p.title}</span>
                <p className="ov-proj-desc">{p.desc}</p>
                <a className="ov-proj-link mono" href={p.href} target="_blank" rel="noreferrer">
                  {p.cta} <ArrowUpRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="ov-contact">
        <div className="ov-wrap">
          <div className="ov-sec-label mono">04 · contact</div>
          <h2 className="ov-h2">Let's Work Together </h2>
          <div className="ov-contact-panel">
            <div>
              <h3 className="ov-contact-h">Get in touch</h3>
              <p className="ov-contact-p">
                I'm open to freelance projects, collaborations, or just a friendly chat about web
                development. Need a landing page, portfolio site or an HTML/CSS build? Reach out.
              </p>
              <div className="ov-contact-links mono">
                <a className="ov-clink" href="mailto:omveasna17@gmail.com">
                  <Mail size={16} /> omveasna17@gmail.com
                </a>
                <a className="ov-clink" href="tel:+85599311622">
                  <Phone size={16} /> +855 99 311 622
                </a>
                <a className="ov-clink" href="tel:+855976531300">
                  <Phone size={16} /> +855 97 653 1300
                </a>
              </div>
            </div>
            <div className="ov-socials">
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                return (
                  <a className="ov-social" href={s.href} target="_blank" rel="noreferrer" key={s.label}>
                    <span className="ov-social-left">
                      <Icon size={16} /> {s.label}
                    </span>
                    <ArrowUpRight size={13} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <footer className="ov-footer">
        © 2026 Om Veasna — built with React
        <br />
        <div className="ov-footer-loc">
          <MapPin size={12} /> Phnom Penh, Cambodia 🇰🇭
        </div>
      </footer>
    </div>
  );
}