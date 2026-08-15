import { motion } from "framer-motion";
import { about, vision } from "../data/content.js";

export default function About() {
  return (
    <section id="about" className="mag-section relative overflow-hidden py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="lg:sticky lg:top-28 lg:h-fit"
        >
          <span className="mag-kicker">
            {about.eyebrow}
          </span>
          <h2 className="mag-title mt-5">
            {about.heading}
          </h2>
          <p className="mag-copy mt-6">
            Built for companies that need certification to be practical on the floor and credible in front of customers, regulators and certifying bodies.
          </p>
        </motion.div>

        <div className="space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="mag-card p-6 sm:p-8"
          >
            <div className="mag-copy space-y-5 text-[15px]">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 md:items-stretch">
            <motion.article
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55 }}
              className="mag-card-dark flex h-full flex-col p-6"
            >
              <h3 className="font-display text-2xl font-semibold text-white">Vision</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-white/75">{vision.vision}</p>
            </motion.article>
            <motion.article
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="flex h-full flex-col border border-black/20 bg-[var(--editorial-red)] p-6 text-white"
            >
              <h3 className="font-display text-2xl font-semibold text-white">Mission</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-white/78">{vision.mission}</p>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}
