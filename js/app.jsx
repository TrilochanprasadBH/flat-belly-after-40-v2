/* app.jsx — Second Spring landing, tweak wiring + scroll reveal */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "blossom",
  "cta": "Accept the Challenge",
  "heroLayout": "photo"
}/*EDITMODE-END*/;

const THEMES = ["bloom", "blossom", "sunrise"];
const CTAS = ["Start my plan", "Start free for 7 days", "Get my daily tasks", "Take the 4-minute quiz"];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.16, rootMargin: "0px 0px -8% 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", t.theme);
  }, [t.theme]);

  useReveal();

  return (
    <div>
      <Header t={t} />
      <Hero t={t} />
      <Assure />
      <Pain />
      <HowItWorks />
      <Trust />
      <Offer t={t} />
      <FAQ />
      <FinalCTA t={t} />
      <Footer />

      <TweaksPanel>
        <TweakSection label="Theme" />
        <TweakColor
          label="Palette"
          value={
            t.theme === "blossom" ? ["#DD3F7C", "#2B1B25", "#FBF0F3"]
            : t.theme === "sunrise" ? ["#EE7B16", "#2A2012", "#FDF6E7"]
            : ["#1F9D57", "#18271B", "#F3F8EC"]
          }
          options={[
            ["#1F9D57", "#18271B", "#F3F8EC"],
            ["#DD3F7C", "#2B1B25", "#FBF0F3"],
            ["#EE7B16", "#2A2012", "#FDF6E7"],
          ]}
          onChange={(v) => setTweak("theme", v[0] === "#DD3F7C" ? "blossom" : v[0] === "#EE7B16" ? "sunrise" : "bloom")}
        />
        <TweakRadio
          label="Theme name"
          value={t.theme}
          options={THEMES}
          onChange={(v) => setTweak("theme", v)}
        />

        <TweakSection label="Hero style" />
        <TweakRadio
          label="Centerpiece"
          value={t.heroLayout}
          options={["bloom", "photo", "centered"]}
          onChange={(v) => setTweak("heroLayout", v)}
        />

        <TweakSection label="Primary CTA copy" />
        <TweakSelect
          label="Button text"
          value={t.cta}
          options={CTAS}
          onChange={(v) => setTweak("cta", v)}
        />
        <TweakText
          label="Custom CTA"
          value={t.cta}
          onChange={(v) => setTweak("cta", v)}
        />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
