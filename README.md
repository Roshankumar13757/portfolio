<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>README — Roshan Kumar Portfolio</title>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&family=DM+Sans:ital,wght@0,300;0,400;1,300&display=swap" rel="stylesheet"/>
<style>
  :root {
    --bg: #0a0a0f;
    --surface: #111118;
    --card: #16161f;
    --border: #23232f;
    --accent: #e8ff47;
    --accent2: #47ffe8;
    --text: #e8e8f0;
    --muted: #6b6b80;
    --red: #ff4757;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'DM Sans', sans-serif;
    font-weight: 300;
    line-height: 1.7;
    overflow-x: hidden;
  }

  /* Grain overlay */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 9999;
    opacity: 0.35;
  }

  /* Grid lines bg */
  .page-bg {
    position: fixed;
    inset: 0;
    background-image:
      linear-gradient(rgba(232,255,71,0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(232,255,71,0.025) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
    z-index: 0;
  }

  .container {
    max-width: 860px;
    margin: 0 auto;
    padding: 0 2rem 6rem;
    position: relative;
    z-index: 1;
  }

  /* ── HERO ── */
  .hero {
    padding: 6rem 0 4rem;
    border-bottom: 1px solid var(--border);
  }

  .tag {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'DM Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--accent);
    border: 1px solid rgba(232,255,71,0.3);
    padding: 0.3rem 0.75rem;
    border-radius: 2px;
    margin-bottom: 2rem;
  }

  .tag::before {
    content: '▶';
    font-size: 0.6rem;
  }

  .hero-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(3.5rem, 8vw, 6rem);
    font-weight: 800;
    line-height: 0.95;
    letter-spacing: -0.03em;
    margin-bottom: 1.5rem;
  }

  .hero-title .line1 { display: block; color: var(--text); }
  .hero-title .line2 {
    display: block;
    color: transparent;
    -webkit-text-stroke: 1px rgba(232,255,71,0.6);
  }
  .hero-title .line3 { display: block; color: var(--accent); }

  .hero-sub {
    font-size: 1.05rem;
    color: var(--muted);
    max-width: 520px;
    margin-bottom: 2.5rem;
    font-weight: 300;
  }

  .hero-links {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    align-items: center;
  }

  .btn {
    font-family: 'DM Mono', monospace;
    font-size: 0.8rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-decoration: none;
    padding: 0.7rem 1.5rem;
    border-radius: 2px;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
  }

  .btn-primary {
    background: var(--accent);
    color: #0a0a0f;
    font-weight: 500;
  }
  .btn-primary:hover { background: #fff; transform: translateY(-2px); }

  .btn-ghost {
    background: transparent;
    color: var(--text);
    border: 1px solid var(--border);
  }
  .btn-ghost:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-2px); }

  /* ── DEMO CARD ── */
  .demo-card {
    margin: 3rem 0;
    border: 1px solid var(--border);
    border-radius: 4px;
    overflow: hidden;
    background: var(--card);
    position: relative;
  }

  .demo-card-bar {
    background: var(--surface);
    border-bottom: 1px solid var(--border);
    padding: 0.75rem 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .dot { width: 10px; height: 10px; border-radius: 50%; }
  .dot-r { background: #ff4757; }
  .dot-y { background: var(--accent); }
  .dot-g { background: var(--accent2); }

  .demo-url {
    flex: 1;
    text-align: center;
    font-family: 'DM Mono', monospace;
    font-size: 0.75rem;
    color: var(--muted);
  }

  .demo-img-wrap {
    position: relative;
    aspect-ratio: 16/8;
    overflow: hidden;
  }

  .demo-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    filter: saturate(0.85);
  }

  .demo-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(10,10,15,0.7) 0%, transparent 60%);
  }

  /* ── SECTION ── */
  .section {
    padding: 3rem 0;
    border-bottom: 1px solid var(--border);
  }

  .section-label {
    font-family: 'DM Mono', monospace;
    font-size: 0.68rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .section-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--border);
    max-width: 80px;
  }

  h2 {
    font-family: 'Syne', sans-serif;
    font-size: 1.9rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 1.25rem;
  }

  p { color: rgba(232,232,240,0.75); margin-bottom: 1rem; }

  /* ── STRUCTURE TREE ── */
  .tree-wrap {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 4px;
    overflow: hidden;
    margin-top: 1.5rem;
  }

  .tree-header {
    background: var(--surface);
    border-bottom: 1px solid var(--border);
    padding: 0.6rem 1rem;
    font-family: 'DM Mono', monospace;
    font-size: 0.72rem;
    color: var(--muted);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .tree-header span { color: var(--accent2); }

  pre {
    font-family: 'DM Mono', monospace;
    font-size: 0.78rem;
    line-height: 1.8;
    color: rgba(232,232,240,0.65);
    padding: 1.5rem;
    overflow-x: auto;
    tab-size: 2;
  }

  pre .dir { color: var(--accent2); }
  pre .file { color: rgba(232,232,240,0.5); }
  pre .accent { color: var(--accent); }

  /* ── SECTIONS LIST ── */
  .sections-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
    border-radius: 4px;
    overflow: hidden;
    margin-top: 1.5rem;
  }

  .section-item {
    background: var(--card);
    padding: 1.25rem 1.5rem;
    transition: background 0.2s;
  }

  .section-item:hover { background: #1a1a24; }

  .section-icon {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  .section-name {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 0.95rem;
    margin-bottom: 0.3rem;
    color: var(--text);
  }

  .section-desc {
    font-size: 0.8rem;
    color: var(--muted);
    line-height: 1.4;
  }

  /* ── TECH STACK ── */
  .tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    margin-top: 1.5rem;
  }

  .tech-chip {
    font-family: 'DM Mono', monospace;
    font-size: 0.75rem;
    padding: 0.4rem 0.9rem;
    border-radius: 2px;
    border: 1px solid var(--border);
    color: var(--text);
    background: var(--card);
    transition: all 0.2s;
  }

  .tech-chip:hover { border-color: var(--accent); color: var(--accent); }
  .tech-chip.featured { border-color: rgba(71,255,232,0.4); color: var(--accent2); }

  /* ── INSTALL STEPS ── */
  .steps { margin-top: 1.5rem; display: flex; flex-direction: column; gap: 1rem; }

  .step {
    display: grid;
    grid-template-columns: 2.5rem 1fr;
    gap: 1rem;
    align-items: start;
  }

  .step-num {
    font-family: 'Syne', sans-serif;
    font-size: 0.7rem;
    font-weight: 800;
    color: var(--accent);
    background: rgba(232,255,71,0.08);
    border: 1px solid rgba(232,255,71,0.2);
    border-radius: 2px;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 0.1rem;
  }

  .step-body h4 {
    font-family: 'Syne', sans-serif;
    font-size: 0.9rem;
    font-weight: 700;
    margin-bottom: 0.4rem;
    color: var(--text);
  }

  .step-body p { font-size: 0.85rem; margin-bottom: 0.5rem; color: var(--muted); }

  code {
    font-family: 'DM Mono', monospace;
    font-size: 0.82rem;
    background: var(--card);
    border: 1px solid var(--border);
    padding: 0.15rem 0.45rem;
    border-radius: 2px;
    color: var(--accent2);
  }

  .code-block {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 0.75rem 1rem;
    margin-top: 0.5rem;
    font-family: 'DM Mono', monospace;
    font-size: 0.8rem;
    color: var(--accent);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .code-block::before {
    content: '$';
    color: var(--muted);
  }

  /* ── FOOTER ── */
  .footer {
    padding: 3rem 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: gap;
    gap: 1rem;
  }

  .footer-name {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 1.1rem;
    color: var(--text);
  }

  .footer-name span { color: var(--accent); }

  .footer-note {
    font-family: 'DM Mono', monospace;
    font-size: 0.72rem;
    color: var(--muted);
    letter-spacing: 0.05em;
  }

  /* ── DIVIDER ── */
  .divider-line {
    height: 1px;
    background: linear-gradient(90deg, var(--accent), transparent);
    margin-bottom: 0.25rem;
    opacity: 0.4;
  }

  /* Animations */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .hero-title, .hero-sub, .hero-links, .tag {
    animation: fadeUp 0.7s ease backwards;
  }
  .tag { animation-delay: 0s; }
  .hero-title { animation-delay: 0.1s; }
  .hero-sub { animation-delay: 0.2s; }
  .hero-links { animation-delay: 0.3s; }

  /* Scrollbar */
  ::-webkit-scrollbar { width: 4px; height: 4px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }

  @media (max-width: 600px) {
    .footer { flex-direction: column; align-items: flex-start; }
  }
</style>
</head>
<body>

<div class="page-bg"></div>

<div class="container">

  <!-- HERO -->
  <header class="hero">
    <div class="tag">Portfolio · README · v1.0</div>

    <h1 class="hero-title">
      <span class="line1">Portfolio</span>
      <span class="line2">Website</span>
      <span class="line3">Roshan Kumar</span>
    </h1>

    <p class="hero-sub">
      A fast, modern portfolio built with <strong style="color:var(--text)">React</strong> and <strong style="color:var(--text)">Vite</strong> — showcasing skills, experience, education, projects, and contact details.
    </p>

    <div class="hero-links">
      <a href="https://portfolio-kappa-eight-yfap0qwdpp.vercel.app/" class="btn btn-primary" target="_blank">↗ Live Demo</a>
      <a href="https://github.com/Roshankumar13757/portfolio" class="btn btn-ghost" target="_blank">⌥ GitHub Repo</a>
    </div>
  </header>

  <!-- DEMO SCREENSHOT -->
  <div class="demo-card">
    <div class="demo-card-bar">
      <div class="dot dot-r"></div>
      <div class="dot dot-y"></div>
      <div class="dot dot-g"></div>
      <span class="demo-url">codervai.vercel.app</span>
    </div>
    <div class="demo-img-wrap">
      <img src="https://postimg.cc/R6Z5CMzm" alt="Portfolio Preview" />
      <div class="demo-overlay"></div>
    </div>
  </div>

  <!-- ABOUT -->
  <section class="section">
    <div class="section-label">01 — About</div>
    <h2>What is this?</h2>
    <p>
      Welcome to <strong style="color:var(--text)">Roshan Kumar's</strong> portfolio website — a personal space that brings together everything: technical skills, professional experience, academic background, and a curated set of projects. Built with performance and aesthetics in mind.
    </p>
    <p>
      The site leverages <strong style="color:var(--text)">React + Vite</strong> for a blazing-fast experience, <strong style="color:var(--text)">Tailwind CSS</strong> for utility-first styling, and <strong style="color:var(--text)">Framer Motion</strong> for fluid animations throughout.
    </p>
  </section>

  <!-- SECTIONS -->
  <section class="section">
    <div class="section-label">02 — Sections</div>
    <h2>What's inside</h2>

    <div class="sections-grid">
      <div class="section-item">
        <div class="section-icon">⌂</div>
        <div class="section-name">Home</div>
        <div class="section-desc">Introduction and brief overview of who Roshan is.</div>
      </div>
      <div class="section-item">
        <div class="section-icon">⚡</div>
        <div class="section-name">Skills</div>
        <div class="section-desc">A detailed breakdown of technical and soft skills.</div>
      </div>
      <div class="section-item">
        <div class="section-icon">◈</div>
        <div class="section-name">Experience</div>
        <div class="section-desc">Professional journey, roles, and contributions.</div>
      </div>
      <div class="section-item">
        <div class="section-icon">◎</div>
        <div class="section-name">Education</div>
        <div class="section-desc">Academic background, degrees, and certifications.</div>
      </div>
      <div class="section-item">
        <div class="section-icon">▣</div>
        <div class="section-name">Projects</div>
        <div class="section-desc">Showcase of real-world projects built and shipped.</div>
      </div>
      <div class="section-item">
        <div class="section-icon">✦</div>
        <div class="section-name">Contact</div>
        <div class="section-desc">All the ways to get in touch directly.</div>
      </div>
    </div>
  </section>

  <!-- TECH STACK -->
  <section class="section">
    <div class="section-label">03 — Stack</div>
    <h2>Technologies used</h2>
    <p>Carefully selected tools that balance developer experience with production quality.</p>

    <div class="tech-list">
      <span class="tech-chip featured">React.js</span>
      <span class="tech-chip featured">Vite</span>
      <span class="tech-chip">Tailwind CSS</span>
      <span class="tech-chip">Framer Motion</span>
      <span class="tech-chip">React Icons</span>
      <span class="tech-chip">JavaScript (ES6+)</span>
      <span class="tech-chip">PostCSS</span>
      <span class="tech-chip">ESLint</span>
      <span class="tech-chip">Vercel</span>
    </div>
  </section>

  <!-- PROJECT STRUCTURE -->
  <section class="section">
    <div class="section-label">04 — Structure</div>
    <h2>Project layout</h2>

    <div class="tree-wrap">
      <div class="tree-header">
        📁 <span>portfolio/</span> — directory tree
      </div>
      <pre>
<span class="dir">portfolio/</span>
├── <span class="dir">public/</span>
├── <span class="dir">src/</span>
│   ├── <span class="dir">assets/</span>            <span class="file">← css + images</span>
│   ├── <span class="dir">components/</span>
│   │   ├── <span class="dir">ui/</span>
│   │   │   ├── <span class="dir">Reusable Components/</span>
│   │   │   │   ├── <span class="file">badge.jsx</span>
│   │   │   │   ├── <span class="file">button.jsx</span>
│   │   │   │   ├── <span class="file">card.jsx</span>
│   │   │   │   ├── <span class="file">flip-words.jsx</span>
│   │   │   │   ├── <span class="file">icon-cloud.jsx</span>
│   │   │   │   └── <span class="file">tooltip.jsx</span>
│   │   │   └── <span class="dir">Main Components/</span>
│   │   │       ├── <span class="accent">Header.jsx</span>
│   │   │       ├── <span class="accent">Hero.jsx</span>
│   │   │       ├── <span class="accent">Projects.jsx</span>
│   │   │       ├── <span class="accent">Skills.jsx</span>
│   │   │       └── <span class="accent">Contact.jsx</span>
│   ├── <span class="dir">pages/</span>             <span class="file">← route-level pages</span>
│   ├── <span class="file">App.jsx</span>
│   └── <span class="file">main.jsx</span>
├── <span class="file">index.html</span>
├── <span class="file">tailwind.config.js</span>
├── <span class="file">vite.config.js</span>
└── <span class="file">package.json</span>
      </pre>
    </div>
  </section>

  <!-- INSTALLATION -->
  <section class="section">
    <div class="section-label">05 — Setup</div>
    <h2>Getting started</h2>
    <p>Run this project locally in four steps. You'll need <strong style="color:var(--text)">Git</strong> and <strong style="color:var(--text)">Node.js</strong> installed.</p>

    <div class="steps">
      <div class="step">
        <div class="step-num">01</div>
        <div class="step-body">
          <h4>Fork &amp; Clone the repository</h4>
          <p>Fork on GitHub, then clone to your machine:</p>
          <div class="code-block">git clone https://github.com/Roshankumar13757/portfolio.git</div>
        </div>
      </div>

      <div class="step">
        <div class="step-num">02</div>
        <div class="step-body">
          <h4>Navigate to the project</h4>
          <p>Move into the cloned folder:</p>
          <div class="code-block">cd portfolio</div>
        </div>
      </div>

      <div class="step">
        <div class="step-num">03</div>
        <div class="step-body">
          <h4>Install dependencies</h4>
          <p>Pull in all required packages:</p>
          <div class="code-block">npm install</div>
        </div>
      </div>

      <div class="step">
        <div class="step-num">04</div>
        <div class="step-body">
          <h4>Start the dev server</h4>
          <p>Fire it up and open <code>localhost:5173</code> in your browser:</p>
          <div class="code-block">npm run dev</div>
        </div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div>
      <div class="divider-line"></div>
      <div class="footer-name">Roshan <span>Kumar</span></div>
      <div class="footer-note">Built with React · Vite · Tailwind · Framer Motion</div>
    </div>
    <div class="footer-note" style="text-align:right">
      Deployed on Vercel<br/>
      <a href="https://portfolio-kappa-eight-yfap0qwdpp.vercel.app/" style="color:var(--accent);text-decoration:none;font-family:'DM Mono',monospace;font-size:0.72rem;">↗ portfolio.vercel.app/</a>
    </div>
  </footer>

</div>

</body>
</html>