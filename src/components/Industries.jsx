import { motion } from "framer-motion";
import { about, assessmentProcess } from "../data/content.js";

export default function Industries() {
  return (
    <section className="border-y border-black/15 bg-[var(--editorial-cream)] py-24 md:py-32">
      <div className="container-page grid gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mag-kicker">Industry experience</span>
          <h2 className="mt-5 mb-8 font-display text-4xl font-semibold leading-tight text-[var(--editorial-ink)] sm:text-5xl">
            Sectors we support
          </h2>
          <ul className="space-y-3.5">
            {about.industries.map((s) => (
              <li key={s} className="flex items-start gap-3 border-b border-black/10 pb-3 text-[15px] text-[var(--editorial-muted)]">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[var(--editorial-red)]" />
                {s}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="mag-kicker">Assessment Criteria</span>
          <h2 className="mt-5 mb-8 font-display text-4xl font-semibold leading-tight text-[var(--editorial-ink)] sm:text-5xl">
            How we assess readiness
          </h2>
          <ul className="space-y-3.5">
            {assessmentProcess.map((s) => (
              <li key={s} className="flex items-start gap-3 border-b border-black/10 pb-3 text-[15px] text-[var(--editorial-muted)]">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[var(--editorial-ink)]" />
                {s}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
