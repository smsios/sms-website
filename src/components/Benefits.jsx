import { motion } from "framer-motion";
import { benefits, testimonials } from "../data/content.js";

export default function Benefits() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <span className="stamp px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-navy-800">
              Business Impact
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-navy-950 sm:text-4xl">
              Certification should improve the business, not just decorate it
            </h2>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
                className="rounded-md border border-navy-800/10 bg-white p-4 shadow-sm"
              >
                <span className="font-mono text-xs text-gold-500">{String(index + 1).padStart(2, "0")}</span>
                <p className="mt-2 text-sm leading-6 text-slate-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.5 }}
              className="rounded-md bg-gradient-to-br from-navy-800 to-navy-950 p-6 text-white"
            >
              <p className="text-sm leading-6 text-white/78">"{item.quote}"</p>
              <p className="mt-5 font-display text-sm font-semibold text-teal-300">{item.name}</p>
              <p className="mt-1 text-xs text-white/50">{item.service}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
