/* brand.jsx — Second Spring logo system + shared icons */

/* ---- Logo mark: a radial double-bloom (the "second" spring drawn in) ---- */
function LogoMark({ size = 30 }) {
  const outer = [], inner = [];
  for (let i = 0; i < 8; i++) {
    outer.push(<path key={"o" + i} d="M20 3.5C22.7 9 22.7 14 20 18.5C17.3 14 17.3 9 20 3.5Z" fill="var(--primary)" transform={`rotate(${i * 45} 20 20)`} />);
  }
  for (let i = 0; i < 8; i++) {
    inner.push(<path key={"i" + i} d="M20 9C21.7 12 21.7 15 20 17.8C18.3 15 18.3 12 20 9Z" fill="var(--accent)" transform={`rotate(${i * 45 + 22.5} 20 20)`} />);
  }
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      {outer}{inner}
      <circle cx="20" cy="20" r="3.6" fill="var(--gold)" />
      <circle cx="20" cy="20" r="1.4" fill="var(--surface)" />
    </svg>
  );
}

/* ---- Big animated bloom for the hero ---- */
function BigBloom() {
  const outer = [], inner = [];
  for (let i = 0; i < 8; i++) {
    outer.push(<path key={"o" + i} className="bp bp-out" d="M20 2.5C23 8.5 23 14 20 19C17 14 17 8.5 20 2.5Z" fill="var(--primary)" transform={`rotate(${i * 45} 20 20)`} />);
  }
  for (let i = 0; i < 8; i++) {
    inner.push(<path key={"i" + i} className="bp bp-in" d="M20 8C22 11.5 22 14.8 20 18C18 14.8 18 11.5 20 8Z" fill="var(--accent)" transform={`rotate(${i * 45 + 22.5} 20 20)`} />);
  }
  return (
    <svg className="bigbloom" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <g className="bloom-spin">{outer}{inner}</g>
      <circle className="bloom-core" cx="20" cy="20" r="3.8" fill="var(--gold)" />
      <circle className="bloom-core" cx="20" cy="20" r="1.5" fill="var(--surface)" />
    </svg>
  );
}

function Logo({ size = 30, light = false }) {
  return (
    <span className="logo">
      <img
        src="images/flat40logo.png"
        alt="Flat Belly After 40"
        className="logo-img"
      />
    </span>
  );
}

/* ---- Inline icon set (stroke = currentColor) ---- */
const Icon = {
  arrow: (p) => (<svg className="arrow" width="17" height="17" viewBox="0 0 24 24" fill="none" {...p}><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  check: (p) => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" {...p}><path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  plus: (p) => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" {...p}><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>),
  leaf: (p) => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><path d="M5 19c0-8 6-13 14-13 0 8-5 14-13 14-1 0-1-1-1-1Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><path d="M8 16c3-4 6-6 9-7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>),
  heart: (p) => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><path d="M12 20S4 14.5 4 9a4.2 4.2 0 0 1 8-1.6A4.2 4.2 0 0 1 20 9c0 5.5-8 11-8 11Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>),
  spark: (p) => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><path d="M12 3l1.8 5.4L19 10l-5.2 1.6L12 17l-1.8-5.4L5 10l5.2-1.6L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>),
  moon: (p) => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>),
  pulse: (p) => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><path d="M3 12h4l2.5-6 4 13 2.5-7H21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  scale: (p) => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><path d="M12 4v16M7 8l-3 6a3 3 0 0 0 6 0L7 8Zm10 0l-3 6a3 3 0 0 0 6 0l-3-6Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 6h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>),
  user: (p) => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><circle cx="12" cy="8.5" r="3.6" stroke="currentColor" strokeWidth="1.7"/><path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>),
  task: (p) => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.7"/><path d="M8.5 12l2.4 2.4L16 9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  refresh: (p) => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><path d="M4 12a8 8 0 0 1 13.5-5.8L20 8M20 4v4h-4M20 12a8 8 0 0 1-13.5 5.8L4 16M4 20v-4h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  shield: (p) => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><path d="M12 3l7 2.5v5.5c0 5-3.4 8-7 10-3.6-2-7-5-7-10V5.5L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/><path d="M9 12l2 2 4-4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  book: (p) => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><path d="M4 5.5C4 4.7 4.7 4 5.5 4H11v15H5.5A1.5 1.5 0 0 0 4 20.5V5.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/><path d="M20 5.5C20 4.7 19.3 4 18.5 4H13v15h5.5a1.5 1.5 0 0 1 1.5 1.5V5.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>),
  clock: (p) => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.7"/><path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  cert: (p) => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><circle cx="12" cy="10" r="6" stroke="currentColor" strokeWidth="1.7"/><path d="M9 15.5L8 21l4-2 4 2-1-5.5" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><path d="M9.5 10l1.7 1.7L15 8.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>),
};

function Photo({ tag = "Photo", label, ratio, src }) {
  const imgSrc = src || (tag === "Hero photo" ? "images/flat-belly-hero.png" : null);
  if (imgSrc) {
    return (
      <img
        src={imgSrc}
        alt={label || tag}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          borderRadius: "inherit",
          ...(ratio ? { aspectRatio: ratio } : {})
        }}
      />
    );
  }
  return (
    <div className="ph" style={ratio ? { aspectRatio: ratio } : undefined}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.4"/><circle cx="8.5" cy="10" r="1.8" stroke="currentColor" strokeWidth="1.4"/><path d="M4 17l4.5-4 3 2.5 3.5-3 5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
      {label && <div style={{ maxWidth: "22ch", lineHeight: 1.4 }}>{label}</div>}
      <div className="ph-tag">{tag}</div>
    </div>
  );
}

Object.assign(window, { Logo, LogoMark, BigBloom, Icon, Photo });
