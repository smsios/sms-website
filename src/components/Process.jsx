import { motion } from "framer-motion";
import { assessmentProcess, certificationSteps } from "../data/content.js";

export default function Process() {
  return (
    <section id="process" className="bg-[var(--editorial-ink)] py-20 text-[var(--editorial-cream)] md:py-28">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <span className="mag-kicker text-[var(--editorial-cream)]">Certification Roadmap</span>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-6xl">
            Six practical steps to build an audit-ready system
          </h2>
          <p className="mt-4 text-white/65">
            Every step is designed to make the system usable inside your departments and defensible during Stage 1 and Stage 2 audits.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <ol className="grid gap-3 sm:grid-cols-2">
            {certificationSteps.slice(0, 6).map((step, index) => (
              <motion.li
                key={step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: (index % 6) * 0.04 }}
                className="border border-white/15 bg-white/7 p-4 transition hover:-translate-y-1 hover:bg-white/10"
              >
                <span className="font-mono text-xs text-gold-400">{String(index + 1).padStart(2, "0")}</span>
                <p className="mt-2 text-sm leading-6 text-white/78">{step}</p>
              </motion.li>
            ))}
          </ol>

          <motion.aside
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="h-fit bg-[var(--editorial-cream)] p-6 text-[var(--editorial-ink)]"
          >
            <h3 className="font-display text-3xl font-semibold">Assessment Style</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              SMS uses a fact-finding approach that checks documents, records, people, infrastructure and legal requirements before the certification body arrives.
            </p>
            <ul className="mt-5 space-y-3">
              {assessmentProcess.slice(0, 6).map((item) => (
                <li key={item} className="flex gap-3 text-sm text-slate-700">
                  <span className="mt-2 h-2 w-2 shrink-0 bg-[var(--editorial-red)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
