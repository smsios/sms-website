import { motion } from "framer-motion";
import { Link, Navigate, useOutletContext, useParams } from "react-router-dom";
import CtaBanner from "../components/CtaBanner.jsx";
import PageMeta from "../components/PageMeta.jsx";
import { getService, getServiceCategory, serviceDirectory } from "../data/serviceDirectory.js";

export default function ServiceDetail() {
  const { categorySlug, standardSlug } = useParams();
  const { onEnquire } = useOutletContext();
  const category = getServiceCategory(categorySlug);
  const service = getService(categorySlug, standardSlug);

  if (!category || !service) return <Navigate to="/services" replace />;

  const relatedServices = category.services.filter((item) => item.slug !== service.slug).slice(0, 4);
  const nextCategory = serviceDirectory.find((item) => item.slug !== category.slug);
  const pagePath = `/services/${category.slug}/${service.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} consulting`,
    serviceType: service.name,
    areaServed: ["Ahmedabad", "Gujarat", "India"],
    provider: { "@id": "https://www.isosmservices.in/#organization" },
    description: service.description,
  };

  return (
    <>
      <PageMeta
        title={`${service.name} Consulting`}
        description={service.description}
        path={pagePath}
        keywords={`${service.name} consultant Ahmedabad, ${service.name} consulting Gujarat, certification consultant India`}
        jsonLd={schema}
      />

      <div className="individual-service-page" data-layout={service.layout}>
      <section className="individual-service-hero pt-32 pb-16 md:pt-44 md:pb-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <motion.div initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .6 }}>
            <Link to={`/services/${category.slug}`} className="individual-service-back">← {category.title}</Link>
            <p className="individual-service-label mt-8">{category.profile.eyebrow}</p>
            <h1 className="individual-service-title mt-4">{service.title}</h1>
            <p className="individual-service-description mt-6">{service.description}</p>
            <button onClick={onEnquire} className="premium-button mt-8">Discuss {service.name} <span>↗</span></button>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .1 }} className="service-hero-side">
            <figure className="service-hero-visual">
              <img src={service.visual.src} alt={service.visual.alt} />
              <figcaption>Independent certification reference</figcaption>
            </figure>
            <aside className="individual-service-marker">
              <span>The first question</span>
              <strong>{service.name}</strong>
              <div className="individual-service-marker-rule" />
              <p>{service.prompt}</p>
            </aside>
          </motion.div>
        </div>
      </section>

      <section className="service-perspective-section py-16 md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[.84fr_1.16fr] lg:items-start">
          <div>
              <p className="service-eyebrow">Why it matters</p>
            <h2 className="service-perspective-title mt-4">{service.lens}</h2>
          </div>
          <div className="service-perspective-body">
            <p className="service-perspective-copy">{service.practice}</p>
            <p className="service-perspective-support mt-6">{service.perspective}</p>
          </div>
        </div>
      </section>

      <section className="service-journey-section py-16 md:py-24">
        <div className="container-page">
          <div className="service-journey-heading">
            <p className="service-eyebrow">{service.journey.eyebrow}</p>
            <h2>{service.journey.title}</h2>
            <p>{service.journey.intro}</p>
          </div>
          <ol className="service-journey-grid mt-10">
            {service.journey.steps.map(([title, copy], index) => (
              <motion.li
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-45px" }}
                transition={{ duration: .4, delay: index * .05 }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section className="service-outcome-section py-16 md:py-24">
        <div className="container-page">
          <div className="service-outcome-heading">
            <p className="service-eyebrow">{service.name} in action</p>
            <h2>What a working {service.name} programme makes easier.</h2>
          </div>
          <div className="service-outcome-grid mt-10">
            {service.outcomes.map((outcome, index) => (
              <motion.article
                key={outcome}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-45px" }}
                transition={{ duration: .45, delay: index * .08 }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{outcome}</h3>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-suggestions-section py-16 md:py-24">
        <div className="container-page">
          <div className="service-suggestions-heading">
            <div>
                <p className="service-eyebrow">Keep the work connected</p>
                <h2>More from {category.title}.</h2>
              </div>
            <p>Explore related services when your project touches more than one requirement, team or market.</p>
          </div>
          <div className="service-suggestion-grid mt-9">
            {relatedServices.map((item) => (
              <Link key={item.name} to={`/services/${category.slug}/${item.slug}`}>
                <span>{category.profile.eyebrow}</span>
                <strong>{item.name}</strong>
                <i>→</i>
              </Link>
            ))}
          </div>
          {nextCategory && (
            <Link className="next-category-link mt-10" to={`/services/${nextCategory.slug}`}>
              <span>Explore another category</span>
              {nextCategory.title} <i>→</i>
            </Link>
          )}
        </div>
      </section>
      <CtaBanner onEnquire={onEnquire} />
      </div>
    </>
  );
}
