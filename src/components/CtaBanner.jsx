import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CtaBanner({
  eyebrow = "Get Started",
  heading = "Ready to start your certification journey?",
  subheading = "Talk to a lead auditor directly — no call center, no sales script.",
  ctaLabel = "Contact Us",
  onEnquire,
}) {
  return (
    <section className="theme-cta-section">
      <div className="container-page relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="hand-label">{eyebrow}</span>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-6xl">{heading}</h2>
          <p className="mx-auto mt-5 max-w-2xl">{subheading}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="theme-button"
            >
              {ctaLabel}
            </Link>
            {onEnquire && (
              <button
                onClick={onEnquire}
                className="theme-outline-button"
              >
                Quick Enquiry
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
