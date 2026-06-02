/* sections-mid.jsx — How it works, Trust, Offer */

function HowItWorks() {
  const steps = [
    { ico: "user", n: "i", h: "Tell us about you", p: "A few honest questions — your stage of menopause, energy, sleep, what's worked and what hasn't, and what 'feeling good' means to you.", tag: "Takes about 4 minutes" },
    { ico: "task", n: "ii", h: "Get your daily tasks", p: "Each morning, a short set of simple actions chosen for your body and your day. Doable in minutes — not a 90-minute regimen or a forbidden-foods list.", tag: "A few small things. That's it." },
    { ico: "refresh", n: "iii", h: "Follow it — we adapt", p: "As you check tasks off (or skip them), the plan learns your real life and adjusts. Progress compounds quietly, at a pace your body can hold.", tag: "Gets more yours over time" },
  ];
  return (
    <section className="how section" id="how">
      <div className="wrap">
        <div className="how-head">
          <span className="eyebrow center" style={{ justifyContent: "center" }}>How it works</span>
          <h2 className="title" style={{ marginTop: 20 }}>Small enough to actually do. <em>Built to add up.</em></h2>
          <p className="lead">Three steps, then it runs in the background of your life — adapting instead of demanding.</p>
        </div>
        <div className="steps">
          {steps.map((s, i) => (
            <div className="step reveal" key={i} style={{ transitionDelay: (i * 0.08) + "s" }}>
              <div className="step-n"><span className="ring">{s.n}</span></div>
              <div className="step-ico">{Icon[s.ico]({ width: 26, height: 26 })}</div>
              <h3>{s.h}</h3>
              <p>{s.p}</p>
              <div className="step-tag">{Icon.check({ width: 14, height: 14 })} {s.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const quotes = [
    { q: "For the first time, a plan didn't ask me to white-knuckle my way through. A short list each day I could actually keep.", who: "Member, founding cohort", role: "53, perimenopause", av: "—" },
    { q: "It finally accounted for the nights I barely sleep. The next day's tasks got gentler instead of guiltier.", who: "Member, founding cohort", role: "48, UK", av: "—" },
    { q: "No before-and-after nonsense. Just steady energy and clothes that fit better. I trust it because it's honest.", who: "Member, founding cohort", role: "57, post-menopause", av: "—" },
  ];
  const credos = [
    { i: "cert", h: "Designed by registered dietitians", p: "Every plan framework is built and reviewed by RDs who specialize in midlife and hormonal health — not generated and forgotten." },
    { i: "book", h: "Grounded in published research", p: "Recommendations draw on peer-reviewed science on menopause, metabolism, muscle, and sleep — not trends or crash protocols." },
    { i: "shield", h: "Honest by design", p: "No fabricated reviews, no fake counts, no body-shaming. We'd rather earn your trust slowly than buy it with hype." },
  ];
  return (
    <section className="trust section" id="trust">
      <div className="wrap">
        <div style={{ maxWidth: 680 }}>
          <span className="eyebrow">Why women trust us</span>
          <h2 className="title" style={{ margin: "20px 0 14px" }}>Credibility you can <em>check</em>.</h2>
          <p className="lead">We're an early-stage company building in the open with a founding cohort of members. Here's the honest version.</p>
        </div>

        <div className="trust-grid">
          {quotes.map((c, i) => (
            <div className="tcard reveal" key={i} style={{ transitionDelay: (i * 0.07) + "s" }}>
              <span className="placeholder-tag">Illustrative · founding member</span>
              <div className="stars">★★★★★</div>
              <blockquote>"{c.q}"</blockquote>
              <div className="who">
                <span className="av">{c.av}</span>
                <span><b>{c.who}</b><span>{c.role}</span></span>
              </div>
            </div>
          ))}
        </div>

        <div className="credos">
          {credos.map((c, i) => (
            <div className="credo reveal" key={i} style={{ transitionDelay: (i * 0.07) + "s" }}>
              <div className="ci">{Icon[c.i]({ width: 24, height: 24 })}</div>
              <div>
                <h4>{c.h}</h4>
                <p>{c.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Offer({ t }) {
  const gets = [
    { h: "A short set of tasks each day", p: "Chosen for your stage, energy, and schedule — never a generic checklist." },
    { h: "A plan that adapts weekly", p: "It learns from what you do and how you feel, and recalibrates around real life." },
    { h: "Nutrition built for 40+, not 25", p: "Protein, muscle, blood sugar and sleep — framed for a changing body, not a shrinking one." },
    { h: "Gentle movement, your level", p: "Short, joint-kind sessions that protect strength and bone — no punishing workouts." },
    { h: "Progress you can feel", p: "Energy, sleep, and strength signals — not just a number on a scale." },
    { h: "Dietitian-designed guidance", p: "Frameworks built and reviewed by registered dietitians, grounded in research." },
  ];
  return (
    <section className="offer section" id="offer">
      <div className="wrap offer-grid">
        <div>
          <span className="eyebrow">What you get</span>
          <h2 className="title" style={{ margin: "20px 0 28px" }}>Everything in one calm daily plan.</h2>
          <div className="gets">
            {gets.map((g, i) => (
              <div className="get-row" key={i}>
                <span className="gi">{Icon.check({ width: 14, height: 14 })}</span>
                <div><h4>{g.h}</h4><p>{g.p}</p></div>
              </div>
            ))}
          </div>
        </div>

        <div className="price-card">
          <span className="price-flag">Founding member offer</span>
          <div className="price-trial">7 days free</div>
          <p className="price-then">then <b>$19/month</b> · or <b>$129/year</b> · cancel anytime, no questions</p>
          <a href="https://tally.so/r/xXvzV9" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">{t.cta} <Icon.arrow /></a>
          <ul className="price-mini">
            <li>{Icon.check({ width: 16, height: 16 })} No card charged during your trial</li>
            <li>{Icon.check({ width: 16, height: 16 })} Full access to your daily plan from day one</li>
            <li>{Icon.check({ width: 16, height: 16 })} Locked founding price for as long as you stay</li>
          </ul>
          <div className="price-guarantee">
            <span className="gshield">{Icon.shield({ width: 40, height: 40 })}</span>
            <p><b>30-day money-back guarantee.</b> Give it a real month. If it isn't right for you, email us for a full refund.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { HowItWorks, Trust, Offer });
