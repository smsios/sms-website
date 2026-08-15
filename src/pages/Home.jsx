import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Link, useOutletContext } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import CtaBanner from "../components/CtaBanner.jsx";
import PageMeta from "../components/PageMeta.jsx";
import { clientLogos } from "../data/assetLists.js";
import { stats } from "../data/content.js";

const storyRows = [
  {
    number: "01",
    eyebrow: "Management systems",
    title: "An ISO system that belongs in the business, not in a forgotten folder.",
    copy: "SMS helps Ahmedabad and Gujarat businesses turn ISO 9001, ISO 14001, ISO 45001, ISO 22000 and ISO 27001 into clear routines. We map the work already happening, tighten the gaps and build evidence your team can maintain with confidence.",
    standards: ["ISO 9001", "ISO 14001", "ISO 45001", "ISO 27001"],
    image: "/assets/team/team-photo-3.jpeg",
    alt: "SMS consultant reviewing management system documentation",
    link: "/services/management-system-certification",
  },
  {
    number: "02",
    eyebrow: "Food, product & export compliance",
    title: "Requirements made readable—for customers, regulators and export markets.",
    copy: "Food, packaging, engineering and export-led teams come to us when the route to market feels crowded. From HACCP and FSSC 22000 to CE Marking, HALAL, KOSHER and country-specific approvals, we bring the moving pieces into one workable plan.",
    standards: ["FSSC 22000", "HACCP", "CE Marking", "HALAL / KOSHER"],
    image: "/assets/team/team-photo-1.png",
    alt: "Food quality professional checking production documentation",
    link: "/services/food-and-packaging-safety",
  },
  {
    number: "03",
    eyebrow: "Audit, training & improvement",
    title: "Make audit day feel like a normal, well-run day.",
    copy: "Audit readiness is built long before the auditor arrives. We prepare process owners, records and corrective actions together—so your certification audit feels calm, factual and connected to the way the business actually runs.",
    standards: ["Internal Audit", "Supplier Audit", "5S & Kaizen", "EcoVadis"],
    image: "/assets/team/team-photo-2.jpeg",
    alt: "SMS implementation team at work",
    link: "/services",
  },
];

const heroSlides = [
  {
    image: "/assets/team/team-photo-1.png",
    alt: "SMS consultant reviewing an ISO certification project",
    label: "ISO systems / Ahmedabad",
  },
  {
    image: "/assets/team/team-photo-2.jpeg",
    alt: "SMS consulting team preparing audit evidence",
    label: "Audit readiness / Gujarat",
  },
  {
    image: "/assets/team/team-photo-3.jpeg",
    alt: "SMS lead auditor guiding a certification team",
    label: "Lead auditor support / India",
  },
  {
    image: "/assets/team/team-photo-11.png",
    alt: "SMS team supporting implementation and training",
    label: "Implementation / overseas",
  },
];

const reveal = (direction = "right") => ({
  initial: { opacity: 0, x: direction === "left" ? -52 : 52, y: 12 },
  whileInView: { opacity: 1, x: 0, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
});

export default function Home() {
  const { onEnquire } = useOutletContext();
  const heroRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [activeSlide, setActiveSlide] = useState(0);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroPhotoY = useTransform(scrollYProgress, [0, 1], [0, 54]);
  const orbitTurn = useTransform(scrollYProgress, [0, 1], [0, 16]);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % heroSlides.length), 5200);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  const slide = heroSlides[activeSlide];

  return (
    <div className="one-theme-page">
      <PageMeta
        title="ISO Certification Consultant in Ahmedabad, Gujarat"
        description="System Management Services is an ISO certification consultant in Ahmedabad, Gujarat for ISO 9001, ISO 14001, ISO 45001, ISO 22000, ISO 27001, FSSC 22000, CE Marking, training and audit support."
        keywords="ISO certification consultant Ahmedabad, ISO consultant Gujarat, ISO 9001 consultant Ahmedabad, ISO 14001 consultant Gujarat, ISO 45001 certification Ahmedabad, ISO certification services Gujarat"
        path="/"
      />

      <section ref={heroRef} className="theme-hero">
        <motion.div
          className="theme-decor decor-orbit"
          aria-hidden="true"
          style={reduceMotion ? undefined : { rotate: orbitTurn }}
        />
        <div className="theme-decor decor-check" aria-hidden="true">✓</div>
        <div className="theme-decor decor-spark" aria-hidden="true">✦</div>
        <div className="container-page theme-hero-grid">
          <motion.figure
            {...reveal("left")}
            className="theme-photo hero-photo home-photo-frame"
            style={reduceMotion ? undefined : { y: heroPhotoY }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={slide.image}
                src={slide.image}
                alt={slide.alt}
                initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </AnimatePresence>
            <figcaption>{slide.label}</figcaption>
            <div className="hero-slider-controls" aria-label="Hero image slides">
              {heroSlides.map((item, index) => (
                <button
                  type="button"
                  key={item.image}
                  aria-label={`Show slide ${index + 1}`}
                  aria-pressed={index === activeSlide}
                  onClick={() => setActiveSlide(index)}
                  className={index === activeSlide ? "is-active" : ""}
                />
              ))}
            </div>
          </motion.figure>
          <motion.div {...reveal("right")} className="theme-hero-copy">
            <p className="hand-label">ISO certification consultants / Ahmedabad</p>
            <h1>Make compliance feel <em>clear, calm and real.</em></h1>
            <p className="lead-copy">SMS is an ISO certification consultancy for businesses in Ahmedabad and across Gujarat. We turn demanding standards into practical systems, useful records and teams that are ready to answer with confidence.</p>
            <div className="theme-actions">
              <button onClick={onEnquire} className="theme-button">Plan your certification <span>→</span></button>
              <Link to="/services" className="theme-text-link">Explore the standards <span>↗</span></Link>
            </div>
            <div className="hero-marker"><span>16+</span> years turning standards into working systems</div>
          </motion.div>
        </div>
        <motion.a
          href="#approach"
          className="scroll-cue"
          animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <span>Scroll for the approach</span><i aria-hidden="true">↓</i>
        </motion.a>
      </section>

      <section id="approach" className="theme-section intro-section">
        <div className="container-page split-intro">
          <motion.div {...reveal("left")} className="intro-photo-wrap">
            <img src="/assets/team/team-photo-11.png" alt="SMS team supporting ISO certification projects" className="theme-photo intro-photo home-photo-frame" />
          </motion.div>
          <motion.div {...reveal("right")}>
            <p className="hand-label">Built around real operations</p>
            <h2>Good compliance is quiet: people know what to do and where the proof lives.</h2>
            <p>Every project starts on the floor, not with a template. We listen to the people doing the work, understand the risks and customer promises, then shape a management system around the operation you already have.</p>
            <p>That approach is why manufacturers, food businesses, packaging teams, healthcare providers, engineers and service companies choose SMS for ISO certification consulting in Ahmedabad and Gujarat.</p>
          </motion.div>
        </div>
      </section>

      <section className="theme-section services-story-section" id="services">
        <div className="container-page">
          <motion.div {...reveal("right")} className="section-intro">
            <p className="hand-label">Where we make the difference</p>
            <h2>One considered route from requirement to repeatable work.</h2>
          </motion.div>
          <div className="story-stack">
            {storyRows.map((story, index) => (
              <article className={`story-row ${index % 2 ? "story-row-reverse" : ""}`} key={story.number}>
                <motion.figure {...reveal("left")} className="theme-photo story-photo home-photo-frame">
                  <img src={story.image} alt={story.alt} loading="lazy" />
                  <figcaption>{story.number} / SMS advisory</figcaption>
                </motion.figure>
                <motion.div {...reveal("right")} className="story-copy">
                  <p className="hand-label">{story.eyebrow}</p>
                  <h3>{story.title}</h3>
                  <p>{story.copy}</p>
                  <div className="standard-line">{story.standards.map((standard) => <span key={standard}>{standard}</span>)}</div>
                  <Link className="theme-text-link" to={story.link}>Explore this service <span>↗</span></Link>
                </motion.div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="theme-section method-section">
        <div className="container-page">
          <motion.div {...reveal("left")} className="method-head">
            <p className="hand-label">How the work moves</p>
            <h2>Read it. Shape it. Prove it.</h2>
            <p>Three purposeful stages that keep the project human and the audit evidence strong.</p>
          </motion.div>
          <div className="method-list">
            {["Read the work", "Shape the system", "Prove the practice"].map((step, index) => (
              <motion.div key={step} {...reveal(index % 2 ? "right" : "left")} className="method-item">
                <span>0{index + 1}</span><h3>{step}</h3>
                <p>{index === 0 ? "We understand the standard, your scope, the work in motion and the evidence already available." : index === 1 ? "We create only what is useful, train the owners and make the system easy to follow in daily work." : "We test the system, close the important gaps and prepare your team for an assured certification audit."}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="theme-section proof-section">
        <div className="container-page proof-layout">
          <motion.div {...reveal("left")}>
            <p className="hand-label">Trusted by teams who do the work</p>
            <h2>Experience that turns pressure into a plan.</h2>
          </motion.div>
          <motion.div {...reveal("right")} className="proof-stats">
            {stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
          </motion.div>
        </div>
        <div className="container-page logo-tape" aria-label="Client logos">
          {clientLogos.slice(0, 12).map((logo) => <img key={logo} src={logo} alt="Client logo" loading="lazy" />)}
        </div>
      </section>

      <CtaBanner
        eyebrow="Start with a clear conversation"
        heading="Tell us the standard, industry and target date."
        subheading="SMS will help you choose the right certification path for your Ahmedabad or Gujarat business."
        onEnquire={onEnquire}
      />
    </div>
  );
}
