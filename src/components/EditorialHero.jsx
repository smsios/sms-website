import { motion } from "framer-motion";

export default function EditorialHero({
  eyebrow,
  title,
  accent,
  description,
  image,
  imageAlt = "",
  label = "SMS Journal",
  meta = [],
}) {
  return (
    <section className="editorial-hero relative overflow-hidden pt-28 pb-14 md:pt-36 md:pb-20">
      <div className="container-page relative">
        <div className="editorial-rule mb-5" />
        <div className="grid gap-6 lg:grid-cols-[0.94fr_1.06fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="editorial-title-block lg:order-2"
          >
            <span className="editorial-kicker">{eyebrow}</span>
            <h1 className="editorial-headline mt-5">
              {title} {accent && <span>{accent}</span>}
            </h1>
            {description && <p className="editorial-dek mt-6">{description}</p>}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -48, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="editorial-image-wrap lg:order-1"
          >
            <img src={image} alt={imageAlt} />
            <div className="editorial-vertical-label">{label}</div>
          </motion.div>
        </div>

        {meta.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
            className="editorial-meta-strip mt-6"
          >
            {meta.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
