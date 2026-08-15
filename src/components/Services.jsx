import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { servicePillars } from "../data/content.js";
import { serviceDirectory } from "../data/serviceDirectory.js";

export default function Services() {
  return (
    <section id="services" className="mag-section relative overflow-hidden py-20 md:py-28">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="mag-kicker">
            Center of Excellence
          </span>
          <h2 className="mag-title mt-5">
            One partner for consulting, training and audit compliance
          </h2>
          <p className="mag-copy mx-auto mt-5 max-w-2xl">
            SMS structures every engagement around practical implementation: people trained, records ready, audits coordinated and non-conformities closed.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {servicePillars.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="mag-card group p-6 transition hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center border border-black/20 bg-[var(--editorial-ink)] text-lg font-bold text-[var(--editorial-cream)]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold text-[var(--editorial-ink)] group-hover:text-[var(--editorial-red)]">{pillar.title}</h3>
              <p className="mag-copy mt-3 text-sm">{pillar.text}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {pillar.items.map((item) => (
                  <span key={item} className="border border-black/15 bg-[var(--editorial-cream)] px-3 py-1.5 text-xs font-semibold text-[var(--editorial-ink)]">
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serviceDirectory.map((category, index) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (index % 4) * 0.05 }}
              className="mag-card service-category-card p-5 transition hover:-translate-y-1"
            >
              <span className="service-category-count">{category.index} / {category.services.length} services</span>
              <h3 className="mt-3 font-display text-lg font-semibold text-[var(--editorial-ink)]">{category.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.services.slice(0, 4).map((service) => (
                  <li key={service.name} className="border border-black/10 bg-white/70 px-2.5 py-1 text-[11px] text-[var(--editorial-muted)]">
                    {service.name}
                  </li>
                ))}
              </ul>
              <span className="service-category-link mt-5" aria-hidden="true">
                View all services <span>→</span>
              </span>
              <Link className="service-category-card-hit" to={`/services/${category.slug}`} aria-label={`View all ${category.title} services`} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
