import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NORTHMARK | E-commerce Marketing Agency',
  description:
    'NORTHMARK helps growing e-commerce brands turn more website visitors into customers through design, strategy, content, and AI-powered optimization.',
}

const services = [
  { title: 'Conversion-focused design', copy: 'Give shoppers what they need to buy with clearer product pages, stronger landing pages, and a smoother mobile experience.' },
  { title: 'Strategic marketing', copy: 'Find where customers drop off, sharpen your offer, and prioritize the changes most worth testing.' },
  { title: 'Creative content', copy: 'Show your products in use through short-form video concepts, ad creative, and product storytelling.' },
  { title: 'AI-powered optimization', copy: 'Use AI to review customer feedback, organize research, and develop test ideas you can validate with real shopper behavior.' },
]

const steps = [
  { title: 'Find the friction', copy: 'Review your storefront, offer, and available analytics to see where shoppers hesitate.' },
  { title: 'Make the change', copy: 'Start with one high-priority improvement and build the design, copy, or creative it needs.' },
  { title: 'Measure and refine', copy: 'Agree on what to track, review the results once there’s enough data, and decide what to test next.' },
]

export default function Home() {
  const email = process.env.NORTHMARK_EMAIL?.trim()
  const contactLink = email
    ? `mailto:${email}?subject=NORTHMARK%20project%20inquiry`
    : null

  return (
    <div className="gm" id="top">
      <a className="skip" href="#main">Skip to content</a>
      <header className="header wrap">
        <a className="brand" href="#top"><span className="mark" aria-hidden="true">↗</span>NORTHMARK</a>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#approach">Approach</a>
        </nav>
        <a className="button button-outline" href="#contact">Let’s talk <span aria-hidden="true">↗</span></a>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="glow" aria-hidden="true"><span /></div>
          <div className="ai-visual" aria-hidden="true">
            <span className="ai-core" />
            <span className="ai-orbit ai-orbit-one" />
            <span className="ai-orbit ai-orbit-two" />
            <span className="ai-orbit ai-orbit-three" />
            <span className="ai-node ai-node-one" />
            <span className="ai-node ai-node-two" />
            <span className="ai-node ai-node-three" />
            <span className="ai-node ai-node-four" />
            <span className="ai-caption">For brands ready to grow.</span>
          </div>
          <div className="wrap hero-inner">
            <p className="eyebrow">E-commerce growth agency</p>
            <h1 id="hero-title">Growth is<br />no <em>accident.</em></h1>
            <p className="intro">We help growing e-commerce brands turn more website <span className="intro-highlight">visitors into</span> customers through conversion-focused design, strategic <span className="intro-highlight">marketing</span>, creative content, and AI-powered optimization.</p>
            <div className="actions">
              <a className="button button-lime" href="#contact">Talk about your store <span aria-hidden="true">↗</span></a>
              <a className="secondary" href="#services">Explore services <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </section>

        <section className="section wrap" id="services" aria-labelledby="services-title">
          <p className="eyebrow">Services</p>
          <h2 id="services-title">From first click to checkout.</h2>
          <div className="services">
            {services.map((service) => (
              <article className="card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section approach" id="approach" aria-labelledby="approach-title">
          <div className="wrap">
            <p className="eyebrow">Our approach</p>
            <h2 id="approach-title">Start with what’s holding sales back.</h2>
            <ol className="steps">
              {steps.map((step, index) => (
                <li key={step.title}>
                  <span className="step-number" aria-hidden="true">0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section wrap" id="contact" aria-labelledby="contact-title">
          <div className="contact">
            <h2 id="contact-title">What would you like to improve about your store?</h2>
            {contactLink ? (
              <>
                <p>Send us your store URL and tell us where you’d like help.</p>
                <a className="button button-lime" href={contactLink}>Email NORTHMARK <span aria-hidden="true">↗</span></a>
              </>
            ) : <p>Project inquiries will open soon.</p>}
          </div>
        </section>
      </main>

      <footer className="footer wrap">
        <a className="brand" href="#top"><span className="mark" aria-hidden="true">↗</span>NORTHMARK</a>
        <a className="secondary" href="#top">Back to top <span aria-hidden="true">↑</span></a>
      </footer>
      <style>{styles}</style>
    </div>
  )
}

const styles = `
  body { margin: 0; background: #0b0d0a; }
  .gm {
    --lime: #c4fa56;
    --muted: #bdc3b7;
    --line: #30352a;
    background: #0b0d0a;
    color: #f7f9f2;
    min-height: 100vh;
    font: 400 16px/1.55 Inter, Geist, system-ui, sans-serif;
  }
  .gm *, .gm *::before, .gm *::after { box-sizing: border-box; }
  .gm a { color: inherit; text-decoration: none; }
  .gm a:focus-visible { outline: 2px solid var(--lime); outline-offset: 5px; }
  .gm .skip { position: absolute; z-index: 3; top: 12px; left: 12px; padding: 10px; background: #10130d; transform: translateY(-160%); }
  .gm .skip:focus { transform: none; }
  .gm .wrap { width: min(1180px, calc(100% - 80px)); margin-inline: auto; }
  .gm .header, .gm .footer { display: flex; align-items: center; justify-content: space-between; gap: 24px; padding-block: 22px; }
  .gm .brand { display: inline-flex; align-items: center; gap: 10px; font-size: 21px; font-weight: 750; letter-spacing: -.05em; }
  .gm .mark { display: grid; place-items: center; width: 32px; height: 32px; border-radius: 9px; background: var(--lime); color: #111509; font-weight: 800; }
  .gm nav, .gm .actions { display: flex; align-items: center; flex-wrap: wrap; gap: 24px; }
  .gm nav a, .gm .secondary { color: var(--muted); font-size: 14px; font-weight: 600; }
  .gm nav a:hover, .gm .secondary:hover { color: var(--lime); }
  .gm .button { display: inline-flex; align-items: center; justify-content: center; gap: 12px; padding: 12px 18px; border: 1px solid transparent; border-radius: 10px; font-size: 14px; font-weight: 750; }
  .gm .button-outline { border-color: #596745; }
  .gm .button-outline:hover { border-color: var(--lime); }
  .gm .button-lime { background: var(--lime); color: #101506; box-shadow: 0 8px 35px #a5fb2922; }
  .gm .button-lime:hover { background: #dbff92; }
  .gm .hero { position: relative; isolation: isolate; overflow: hidden; margin-inline: clamp(12px, 2.5vw, 40px); min-height: 610px; border: 1px solid #373f29; border-radius: 26px; background: #10140d; }
  .gm .glow { position: absolute; z-index: -1; inset: 0; overflow: hidden; background: radial-gradient(ellipse at 90% 50%, #293e16, transparent 61%); }
  .gm .glow span {
    position: absolute;
    width: 76%; height: 125%; right: -22%; top: -18%;
    border-radius: 48%;
    transform: rotate(-35deg);
    background: conic-gradient(from 140deg, #0c1007 0%, #c4fa56 17%, #314f13 33%, #080d05 47%, #93e52f 69%, #e0ff9c 76%, #2f4517 86%, #0c1007 100%);
    box-shadow: 0 0 100px #92ec3770;
    filter: blur(22px);
  }
  .gm .glow::after { content: ""; position: absolute; inset: 0; background: linear-gradient(90deg, #10140d 5%, #10140d 29%, #10140de8 43%, transparent 87%); }
  .gm .ai-visual { position: absolute; z-index: 0; top: 50%; right: 5%; width: min(43vw, 500px); aspect-ratio: 1; transform: translateY(-50%); pointer-events: none; }
  .gm .ai-core { position: absolute; top: 50%; left: 50%; width: 25%; aspect-ratio: 1; border-radius: 50%; transform: translate(-50%, -50%); background: radial-gradient(circle at 35% 30%, #f0ffca 0 5%, #c4fa56 18%, #88bd31 43%, #c4fa5633 70%, transparent 74%); box-shadow: 0 0 34px #c4fa5680, 0 0 110px #c4fa5645; animation: core-breathe 4s ease-in-out infinite; }
  .gm .ai-core::after { content: ""; position: absolute; inset: 23%; border: 1px solid #efffc877; border-radius: 50%; box-shadow: inset 0 0 16px #e4ff8d80; }
  .gm .ai-orbit { position: absolute; inset: 13%; border: 1px solid #d7ff8b55; border-radius: 50%; transform: rotate(-32deg) scaleY(.56); box-shadow: 0 0 18px #c4fa561c; }
  .gm .ai-orbit-one { animation: orbit-drift 26s linear infinite; }
  .gm .ai-orbit-two { inset: 2% 24%; transform: rotate(48deg) scaleY(.68); border-color: #c4fa5638; animation: orbit-drift-reverse 34s linear infinite; }
  .gm .ai-orbit-three { inset: 22% -4%; transform: rotate(-62deg) scaleY(.62); border-style: dashed; border-color: #edffc544; animation: orbit-drift 42s linear infinite; }
  .gm .ai-node { position: absolute; width: 9px; aspect-ratio: 1; border-radius: 50%; background: #e9ffae; box-shadow: 0 0 16px 4px #c4fa5680; animation: node-float 3.6s ease-in-out infinite; }
  .gm .ai-node-one { top: 19%; left: 28%; }
  .gm .ai-node-two { top: 31%; right: 15%; animation-delay: -1.2s; }
  .gm .ai-node-three { bottom: 18%; left: 35%; width: 6px; animation-delay: -2.1s; }
  .gm .ai-node-four { right: 26%; bottom: 25%; width: 5px; animation-delay: -.6s; }
  .gm .ai-caption { position: absolute; right: 8%; bottom: 14%; padding: 8px 12px; border: 1px solid #e3ffad4d; border-radius: 999px; background: #10140d9c; color: #e5f8c0; font-size: 10px; font-weight: 650; letter-spacing: .13em; text-transform: uppercase; backdrop-filter: blur(8px); }
  @keyframes orbit-drift { to { transform: rotate(328deg) scaleY(.56); } }
  @keyframes orbit-drift-reverse { to { transform: rotate(-312deg) scaleY(.68); } }
  @keyframes core-breathe { 50% { transform: translate(-50%, -50%) scale(1.12); filter: brightness(1.18); } }
  @keyframes node-float { 50% { translate: 0 -8px; opacity: .62; } }
  .gm .hero-inner { position: relative; z-index: 1; padding-block: clamp(80px, 9vw, 138px); }
  .gm .eyebrow { margin: 0 0 16px; color: var(--lime); text-transform: uppercase; letter-spacing: .15em; font-size: 12px; font-weight: 700; }
  .gm h1, .gm h2, .gm h3, .gm p { margin-top: 0; }
  .gm h1 { margin-bottom: 26px; font-size: clamp(56px, 9.3vw, 140px); line-height: .91; font-weight: 680; letter-spacing: -.085em; }
  .gm h1 em { color: var(--lime); font-weight: 550; }
  .gm .intro { max-width: 500px; margin-bottom: 28px; color: #e0e5d9; font-size: clamp(16px, 1.8vw, 19px); }
  .gm .intro-highlight { padding-inline: .16em; border-radius: .15em; background: var(--lime); color: #0b0d0a; box-decoration-break: clone; -webkit-box-decoration-break: clone; }
  .gm .section { padding-block: clamp(58px, 8vw, 112px); scroll-margin-top: 12px; }
  .gm h2 { max-width: 790px; margin-bottom: 32px; font-size: clamp(34px, 5.3vw, 70px); font-weight: 650; line-height: 1.03; letter-spacing: -.065em; }
  .gm h3 { margin-bottom: 10px; font-size: 22px; line-height: 1.17; letter-spacing: -.035em; }
  .gm .services { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
  .gm .card { position: relative; isolation: isolate; overflow: hidden; min-height: 220px; padding: clamp(24px, 3vw, 38px); border: 1px solid #263654; border-radius: 18px; background: radial-gradient(ellipse at 100% 0%, #18315a88, transparent 48%), linear-gradient(145deg, #111a2b, #0d121d 76%); box-shadow: inset 0 1px #d8e8ff0a, 0 14px 36px #03091522; animation: service-card-enter .72s cubic-bezier(.2,.7,.25,1) both; transition: transform .35s ease, border-color .35s ease, box-shadow .35s ease, background-color .35s ease; }
  .gm .card::before { content: ""; position: absolute; z-index: -1; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, #82b7ff, #c4fa56, transparent); opacity: .72; }
  .gm .card::after { content: ""; position: absolute; z-index: -1; right: -70px; bottom: -100px; width: 220px; aspect-ratio: 1; border-radius: 50%; background: #2d6cbd20; filter: blur(26px); transition: transform .5s ease, opacity .5s ease; opacity: .45; }
  .gm .card:nth-child(2) { animation-delay: .1s; }
  .gm .card:nth-child(3) { animation-delay: .2s; }
  .gm .card:nth-child(4) { animation-delay: .3s; }
  .gm .card:hover { transform: translateY(-7px); border-color: #557db8; box-shadow: inset 0 1px #d8e8ff15, 0 24px 54px #02091570, 0 0 0 1px #5b8fd31a; }
  .gm .card:hover::after { transform: scale(1.35) translate(-12px, -8px); opacity: .9; }
  .gm .card h3 { position: relative; max-width: 90%; color: #f1f5ff; transition: color .3s ease; }
  .gm .card:hover h3 { color: #cfe2ff; }
  .gm .card p, .gm .steps p, .gm .contact p { color: #b6c4d9; margin-bottom: 0; max-width: 48ch; }
  @keyframes service-card-enter { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
  .gm .approach { border-block: 1px solid var(--line); background: #11140e; }
  .gm .steps { margin: 0; padding: 0; list-style: none; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 28px; }
  .gm .steps li { border-top: 1px solid var(--line); padding-top: 18px; }
  .gm .step-number { display: block; margin-bottom: 14px; color: var(--lime); font: 600 13px/1.5 monospace; }
  .gm .contact { padding: clamp(28px, 6vw, 72px); border: 1px solid #414c30; border-radius: 22px; background: radial-gradient(ellipse at top right, #273919, #151a12 65%); }
  .gm .contact h2 { margin-bottom: 18px; }
  .gm .contact .button { margin-top: 24px; }
  .gm .footer { border-top: 1px solid var(--line); }
  @media (max-width: 640px) {
    .gm .wrap { width: calc(100% - 36px); }
    .gm .header { flex-wrap: wrap; gap: 14px; }
    .gm .header nav { order: 3; width: 100%; }
    .gm .hero { min-height: 0; border-radius: 18px; }
    .gm .hero-inner { padding-block: 68px; }
    .gm .glow span { width: 98%; right: -64%; opacity: .65; }
    .gm .glow::after { background: linear-gradient(90deg, #10140d 3%, #10140df0 35%, #10140d55 100%); }
    .gm .ai-visual { width: min(70vw, 340px); right: -10%; top: 58%; opacity: .56; }
    .gm .ai-caption { right: 17%; bottom: 9%; }
    .gm .services, .gm .steps { grid-template-columns: 1fr; }
    .gm .actions { gap: 16px 20px; }
    .gm .footer { flex-wrap: wrap; }
  }
  @media (prefers-reduced-motion: reduce) {
    .gm .ai-core, .gm .ai-orbit, .gm .ai-node, .gm .card { animation: none; transition: none; }
  }
`
