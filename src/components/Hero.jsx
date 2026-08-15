import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { company, heroProof, servicePillars, stats } from "../data/content.js";

const floatingCards = [
  { label: "ISO Consulting", value: "QMS / EMS / OHSMS", pos: "top-3 left-2 md:left-8", delay: "0s" },
  { label: "Food Safety", value: "FSSC / BRCGS / HACCP", pos: "top-28 right-0", delay: "0.8s" },
  { label: "ESG Ready", value: "EcoVadis / GHG / ISCC", pos: "bottom-20 left-0", delay: "1.4s" },
  { label: "Audit Support", value: "NCR / CAPA / Records", pos: "bottom-4 right-8", delay: "2s" },
];

export default function Hero({ onEnquire }) {
  return (
    <section className="relative overflow-hidden brand-grid pt-28 pb-14 md:pt-36 md:pb-20">
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white to-transparent" />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="stamp px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-navy-800">
            ISO & product certification consultants
          </div>

          <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.04] text-navy-950 sm:text-5xl lg:text-6xl">
            We make your business <span className="text-gradient-teal">audit-ready</span>, market-ready and growth-ready.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
            {company.name} provides ISO, product, ESG, sustainability and customer-audit consulting across India and overseas with 16+ years of implementation experience and 500+ satisfied clients.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={onEnquire}
              className="rounded-md bg-navy-800 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/15 transition hover:-translate-y-0.5 hover:bg-navy-700 focus-ring"
            >
              Get Free Consultation
            </button>
            <Link
              to="/services"
              className="rounded-md border border-navy-800/15 bg-white px-6 py-3.5 text-sm font-semibold text-navy-900 transition hover:-translate-y-0.5 hover:border-teal-500/50 hover:text-navy-700 focus-ring"
            >
              Explore Services
            </Link>
          </div>

          <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="card-panel rounded-md p-4">
                <dt className="text-[11px] uppercase tracking-wide text-slate-500">{s.label}</dt>
                <dd className="mt-1 font-mono text-2xl font-semibold text-navy-800">{s.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative mx-auto h-[420px] w-full max-w-[560px] sm:h-[520px]"
        >
          <div className="brand-ring absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-2xl shadow-blue-900/10 sm:h-80 sm:w-80">
            <div className="absolute inset-6 rounded-full border border-navy-800/10 bg-gradient-to-br from-white via-blue-50 to-green-50" />
            <div className="absolute inset-12 rounded-full border border-dashed border-teal-500/30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <img src="/assets/brand/sms-logo-mark.png" alt="" className="h-20 w-auto sm:h-24" />
              <p className="mt-4 font-display text-lg font-semibold text-navy-950">Center of Compliance</p>
              <p className="mt-1 max-w-44 text-xs leading-5 text-slate-500">Consulting, training, audit and certification support.</p>
            </div>
          </div>

          {floatingCards.map((card) => (
            <div
              key={card.label}
              className={`float-card pulse-line absolute ${card.pos} w-44 rounded-md border border-navy-800/10 bg-white/92 p-4 shadow-xl shadow-blue-900/10 backdrop-blur`}
              style={{ animationDelay: card.delay }}
            >
              <p className="font-display text-sm font-semibold text-navy-950">{card.label}</p>
              <p className="mt-1 text-xs text-slate-500">{card.value}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative mt-10 overflow-hidden border-y border-navy-800/10 bg-white/70 py-3">
        <div className="marquee gap-3">
          {[...heroProof, ...heroProof].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="rounded-full border border-navy-800/10 bg-white px-4 py-2 font-mono text-xs text-navy-800 shadow-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
