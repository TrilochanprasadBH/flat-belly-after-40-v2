/* sections-bottom.jsx — FAQ, Final CTA, Footer */

function FAQ() {
  const faqs = [
    { q: "Is this safe during perimenopause and menopause?", a: "Yes — that's exactly who Flat Belly After 40 is built for. Tasks are gentle, gradual, and designed around the realities of changing hormones, sleep, and energy. We don't recommend extreme restriction or punishing exercise. Flat Belly After 40 supports a healthy lifestyle and isn't a substitute for medical care; if you have a health condition or take medication, check with your doctor before starting." },
    { q: "Will I actually lose weight — and how fast?", a: "We won't promise a number or a timeline, because honest health doesn't work that way and anyone who guarantees \"X pounds in Y days\" is selling you something. What we focus on is sustainable change you can feel: steadier energy, better sleep, more strength, and a body composition that trends in a healthier direction at a pace it can hold." },
    { q: "How much time does it take each day?", a: "Most daily tasks take just a few minutes each — a short walk, a simple swap, a small habit. The whole point is that the set fits a full life. It's a handful of doable things a day, not a second job or a 90-minute regimen." },
    { q: "Is this just another restrictive diet?", a: "No. There are no banned foods, no calorie-counting obsession, and no shame. Flat Belly After 40 works by small, adaptive daily actions grounded in nutrition and movement science for 40+ bodies — building habits that last instead of a crash that rebounds." },
    { q: "Who designs the plans?", a: "Plan frameworks are designed and reviewed by registered dietitians who focus on midlife and hormonal health, and they're grounded in published, peer-reviewed research. Your specific daily tasks are tailored to the information you share and adapt as you go." },    { q: "What if it's not right for me?", a: "Your first 7 days are free and you can cancel anytime — no card is charged during the trial. After that, you're covered by a 30-day money-back guarantee. Give it a real month, and if it isn't for you, email us for a full refund." },
  ];
  const [open, setOpen] = useState(0);
  const refs = useRef([]);
  return (
    <section className="faq section" id="faq">
      <div className="wrap faq-grid">
        <div>
          <span className="eyebrow">Good questions</span>
          <h2 className="title" style={{ marginTop: 20 }}>Honest answers, <em>no fine-print tricks.</em></h2>
          <p className="lead" style={{ marginTop: 16 }}>The things women ask us most — answered plainly.</p>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div className={"faq-item" + (isOpen ? " open" : "")} key={i}>
                <button className="faq-q" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
                  {f.q}
                  <span className="qmark">{Icon.plus({ width: 14, height: 14 })}</span>
                </button>
                <div className="faq-a" style={{ maxHeight: isOpen ? (refs.current[i] ? refs.current[i].scrollHeight + 8 : 600) : 0 }}>
                  <div className="faq-a-in" ref={el => refs.current[i] = el}>{f.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ t }) {
  return (
    <section className="final section">
      <div className="wrap final-in">
        <span className="eyebrow center" style={{ justifyContent: "center", color: "color-mix(in oklab, var(--primary) 70%, #fff)" }}>Your flatter belly starts small</span>
        <h2 style={{ marginTop: 20 }}>It's not too late. <em>It's exactly the right time.</em></h2>
        <p>Start with a few small tasks tomorrow morning. Let the plan meet the body you have now — and adapt as it changes.</p>
        <a href="#" className="btn btn-primary btn-lg">{t.cta} <Icon.arrow /></a>
        <div className="final-guarantee">{Icon.shield({ width: 18, height: 18 })} 7 days free · then $19/mo · 30-day money-back guarantee</div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <Logo size={30} light />
            <p className="footer-tag">A daily plan for women over 40, built for how a 40+ body actually changes.</p>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <h5>Product</h5>
              <a href="#how">How it works</a>
              <a href="#why">Why over 40</a>
              <a href="#offer">Pricing</a>
              <a href="#faq">FAQ</a>
            </div>
            <div className="footer-col">
              <h5>Company</h5>
              <a href="#">About</a>
              <a href="#">Our dietitians</a>
              <a href="#">Research</a>
              <a href="#">Contact</a>
            </div>
            <div className="footer-col">
              <h5>Legal</h5>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Refund policy</a>
              <a href="#">Medical disclaimer</a>
            </div>
          </div>
        </div>
        <div className="footer-legal">
          <p><b style={{color:"#C8BBA4"}}>Not medical advice.</b> Flat Belly After 40 supports a healthy lifestyle and is not a substitute for professional medical care, diagnosis, or treatment. Always consult your physician before beginning any nutrition or exercise program, particularly if you have a medical condition or take medication.</p>
          <p>Individual results vary and are not guaranteed. We do not promise specific weight-loss amounts or timelines. Testimonials marked "illustrative" are placeholders representing the experiences we design for and are not real customer statements; any real testimonials will be clearly identified as such.</p>
          <div className="footer-bottom">
            <span>© 2026 Flat Belly After 40, Inc. · US · UK · EU</span>
            <span>Made with care for women over 40.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { FAQ, FinalCTA, Footer });
