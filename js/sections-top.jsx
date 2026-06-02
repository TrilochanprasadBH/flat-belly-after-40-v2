/* sections-top.jsx — Header, Hero, Assurance strip, Pain point */
const { useState, useEffect, useRef } = React;

function Header({ t }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className={"header" + (scrolled ? " scrolled" : "")}>
      <div className="wrap header-in">
        <a href="#top" aria-label="Flat Belly After 40 home"><Logo size={30} /></a>
        <nav className="nav">
          <a href="#how">How it works</a>
          <a href="#why">Why over 40</a>
          <a href="#trust">Trust</a>
          <a href="#offer">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="header-cta">
          <a href="#offer" className="btn btn-ghost btn-sm">Sign in</a>
          <a href="#offer" className="btn btn-primary btn-sm">{t.cta} <Icon.arrow /></a>
        </div>
        <button
          className={"hamburger" + (menuOpen ? " open" : "")}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav">
            <a href="#how" onClick={closeMenu}>How it works</a>
            <a href="#why" onClick={closeMenu}>Why over 40</a>
            <a href="#trust" onClick={closeMenu}>Trust</a>
            <a href="#offer" onClick={closeMenu}>Pricing</a>
            <a href="#faq" onClick={closeMenu}>FAQ</a>
          </nav>
          <div className="mobile-cta">
            <a href="#offer" className="btn btn-ghost btn-sm" onClick={closeMenu}>Sign in</a>
            <a href="#offer" className="btn btn-primary" onClick={closeMenu}>{t.cta} <Icon.arrow /></a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ t }) {
  const mode = t.heroLayout; // "bloom" | "photo" | "centered"

  const eyebrow = (
    <span className="hero-badge"><span className="dot"></span> For women 40+ · perimenopause &amp; menopause</span>
  );
  const headline = (
    <h1 className="display hero-h1">A flatter belly, <em>the kind way</em>.</h1>
  );
  const lead = (
    <p className="lead">
      Flat Belly After 40 is a daily plan built for how your body actually changes after 40. Tell us about you,
      get a <strong style={{ color: "var(--ink)" }}>short set of simple daily tasks</strong>, and watch them adapt as you do.
      No crash diets. No calorie math. No shame.
    </p>
  );
  const actions = (
    <div className="hero-actions">
      <a href="#offer" className="btn btn-primary btn-lg">{t.cta} <Icon.arrow /></a>
      <a href="#how" className="btn btn-ghost btn-lg">See how it works</a>
    </div>
  );
  const proof = (
    <div className="hero-proof">
      <div className="stars">★★★★★</div>
      <p className="pt"><strong>Free for your first 7 days.</strong> Designed by registered dietitians, grounded in published research.</p>
    </div>
  );

  // The living bloom stage — product mechanic + metaphor, no stock photo
  const bloomStage = (
    <div className="hero-stage">
      <svg className="rings" viewBox="0 0 200 200" fill="none" aria-hidden="true">
        <circle cx="100" cy="100" r="94" stroke="var(--line)" strokeWidth="1" />
        <circle cx="100" cy="100" r="72" stroke="var(--line)" strokeWidth="1" strokeDasharray="2 6" />
        <circle cx="100" cy="100" r="50" stroke="var(--line)" strokeWidth="1" />
      </svg>
      <BigBloom />
      <div className="stage-card tasks">
        <div className="task-top">
          <span className="task-day">Today · Tuesday</span>
          <span className="task-progress">2 / 3</span>
        </div>
        <ul className="task-list">
          <li className="done"><span className="tcheck"><Icon.check /></span> Walk after lunch</li>
          <li className="done"><span className="tcheck"><Icon.check /></span> Protein at breakfast</li>
          <li><span className="tcheck empty"></span> Evening stretch</li>
        </ul>
      </div>
      <div className="stage-chip">
        <span className="adapt-label">Day 24 · adapting</span>
        <div className="adapt-bars"><span style={{height:"38%"}}></span><span style={{height:"52%"}}></span><span style={{height:"46%"}}></span><span style={{height:"68%"}}></span><span style={{height:"82%"}}></span><span style={{height:"100%"}}></span></div>
      </div>
    </div>
  );

  const photoVisual = (
    <div className="hero-visual">
      <div className="hero-photo">
        <Photo tag="Hero photo" label="A confident woman in her 50s, mid-movement — strong, at ease" />
      </div>
      <div className="hero-card task">
        <div className="task-top">
          <span className="task-day">Today's plan · Tuesday</span>
          <span className="task-check"><Icon.check /></span>
        </div>
        <div className="task-title">3 simple tasks today</div>
        <div className="task-sub">A short walk, protein at breakfast, an evening stretch.</div>
      </div>
      <div className="hero-card adapt">
        <div className="adapt-label">Your plan adapts</div>
        <div className="adapt-bars"><span style={{height:"40%"}}></span><span style={{height:"55%"}}></span><span style={{height:"48%"}}></span><span style={{height:"70%"}}></span><span style={{height:"82%"}}></span><span style={{height:"100%"}}></span></div>
      </div>
    </div>
  );

  if (mode === "centered") {
    return (
      <section className="hero hero-centered section" id="top">
        <div className="wrap">
          {eyebrow}
          {headline}
          {lead}
          {actions}
          <p className="cta-note" style={{ justifyContent: "center" }}><Icon.check /> Free for 7 days · designed by registered dietitians</p>
          <div className="hero-stage hero-stage-wide">
            <svg className="rings" viewBox="0 0 200 200" fill="none" aria-hidden="true">
              <circle cx="100" cy="100" r="94" stroke="var(--line)" strokeWidth="1" />
              <circle cx="100" cy="100" r="72" stroke="var(--line)" strokeWidth="1" strokeDasharray="2 6" />
            </svg>
            <BigBloom />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={"hero section" + (mode === "photo" ? " hero-photo-mode" : " hero-bloom-mode")} id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          {eyebrow}{headline}{lead}{actions}{proof}
        </div>
        {mode === "photo" ? photoVisual : bloomStage}
      </div>
    </section>
  );
}

function Assure() {
  const items = [
    { i: "leaf",  t: "Built only for 40+ bodies" },
    { i: "cert",  t: "Dietitian-designed plans" },
    { i: "book",  t: "Grounded in published research" },
    { i: "shield",t: "7-day free trial · cancel anytime" },
  ];
  return (
    <section className="assure">
      <div className="wrap assure-in">
        {items.map((x, n) => (
          <div className="assure-item" key={n}>{Icon[x.i]({ width: 20, height: 20 })} {x.t}</div>
        ))}
      </div>
    </section>
  );
}

function Pain() {
  const rows = [
    { i: "pulse", h: "Metabolism shifts", p: "Resting energy use falls and muscle is harder to keep — the same eating that once worked now doesn't." },
    { i: "spark", h: "Hormones change the rules", p: "Estrogen's decline moves where the body stores fat and how it handles carbohydrates and recovery." },
    { i: "moon",  h: "Sleep gets lighter", p: "Night waking and hot flushes erode the rest that regulates hunger, mood, and willpower the next day." },
    { i: "heart", h: "Stress lands differently", p: "Cortisol and a busy decade of life make rigid, all-or-nothing plans collapse fast." },
  ];
  return (
    <section className="pain section" id="why">
      <div className="wrap pain-grid">
        <div>
          <span className="eyebrow">The real problem</span>
          <h2 className="title" style={{ margin: "22px 0 26px" }}>The plan failed you. <em>Not the other way around.</em></h2>
          <p className="pain-lead">
            Most diet apps are built for a 25-year-old body and quietly assume yours works the same way.
            It doesn't — and it was never supposed to. <strong>After 40, four things shift at once:</strong>
          </p>
          <p className="pain-quote">So you tried harder, ate less, and blamed yourself. The math was just written for someone else.</p>
        </div>
        <div className="pain-list">
          {rows.map((r, n) => (
            <div className="pain-row" key={n}>
              <div className="pi">{Icon[r.i]({ width: 22, height: 22 })}</div>
              <div>
                <h4>{r.h}</h4>
                <p>{r.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Header, Hero, Assure, Pain });
