import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import CtaBanner from "../components/CtaBanner.jsx";
import EditorialHero from "../components/EditorialHero.jsx";
import PageMeta from "../components/PageMeta.jsx";
import { faqCategories } from "../data/faq.js";

function FaqItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="mag-card overflow-hidden">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left focus-ring"
        aria-expanded={isOpen}
      >
        <span className="font-display text-lg font-semibold leading-snug text-[var(--editorial-ink)]">{q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 font-display text-3xl leading-none text-[var(--editorial-red)]"
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <p className="mag-copy px-5 pb-5 text-sm">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const { onEnquire } = useOutletContext();
  const [openKey, setOpenKey] = useState("Choosing the Right Certification-0");
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap((category) => category.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    }))),
  };

  return (
    <>
      <PageMeta
        title="Frequently Asked Questions"
        description="Detailed answers about ISO certification in Ahmedabad and Gujarat, audit timelines, Stage 1 and Stage 2 audits, required documents, accredited certification bodies, training and compliance support."
        path="/faq"
        keywords="ISO certification FAQ Ahmedabad, ISO audit questions, Stage 1 Stage 2 audit, ISO consultant Gujarat, ISO documents required"
        jsonLd={faqSchema}
      />

      <EditorialHero
        eyebrow="The Help Desk"
        title="Questions we get"
        accent="every week."
        description="Straight answers about standards, timelines, audits, documentation, training and what happens before a certification body arrives."
        image="/assets/team/team-photo-3.jpeg"
        imageAlt="SMS consultant"
        label="FAQ Issue"
        meta={[
          { value: faqCategories.length, label: "Sections" },
          { value: "ISO", label: "Topics" },
          { value: "Audit", label: "Readiness" },
          { value: "Direct", label: "Answers" },
        ]}
      />

      <section className="mag-section pb-24 md:pb-32">
        <div className="container-page grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="border-t border-black/20 pt-5 lg:sticky lg:top-28 lg:h-fit">
            <span className="mag-kicker">Index</span>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-none text-[var(--editorial-ink)]">
              Read this before the audit calendar gets tight.
            </h2>
          </aside>

          <div>
            {faqCategories.map((cat) => (
              <div key={cat.category} className="mb-12 last:mb-0">
                <h2 className="mag-kicker mb-5">{cat.category}</h2>
                <div className="space-y-3">
                  {cat.items.map((item, i) => {
                    const key = `${cat.category}-${i}`;
                    return (
                      <FaqItem
                        key={key}
                        q={item.q}
                        a={item.a}
                        isOpen={openKey === key}
                        onToggle={() => setOpenKey(openKey === key ? null : key)}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Still Have Questions?"
        heading="We'll walk you through it directly."
        onEnquire={onEnquire}
      />
    </>
  );
}
