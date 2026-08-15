import { motion } from "framer-motion";
import { Link, Navigate, useOutletContext, useParams } from "react-router-dom";
import CtaBanner from "../components/CtaBanner.jsx";
import PageMeta from "../components/PageMeta.jsx";
import { getServiceCategory } from "../data/serviceDirectory.js";

export default function ServiceCategory() {
  const { categorySlug } = useParams();
  const { onEnquire } = useOutletContext();
  const category = getServiceCategory(categorySlug);

  if (!category) return <Navigate to="/services" replace />;

  return (
    <>
      <PageMeta
        title={`${category.title} Services`}
        description={category.profile.intro}
        path={`/services/${category.slug}`}
      />

      <section className="service-category-hero pt-32 pb-16 md:pt-44 md:pb-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
            <Link to="/services" className="service-back">← All service categories</Link>
            <p className="service-eyebrow mt-8">{category.profile.eyebrow} / {category.index}</p>
            <h1 className="category-page-title mt-4">{category.profile.title}</h1>
            <p className="category-page-copy mt-6">{category.profile.intro}</p>
          </motion.div>
          <motion.aside initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .65, delay: .1 }} className="category-page-summary">
            <span>Service family</span>
            <strong>{category.title}</strong>
            <p>{category.services.length} individual services, each with its own focused certification or capability path.</p>
          </motion.aside>
        </div>
      </section>

      <section className="category-service-list py-16 md:py-24">
        <div className="container-page">
          <div className="section-heading-row">
            <div>
              <p className="service-eyebrow">Choose a focused path</p>
              <h2 className="section-heading mt-3">Services in this category.</h2>
            </div>
            <p className="section-heading-note">Open a service to see its purpose, where it fits and a tailored set of suggested next services.</p>
          </div>
          <div className="category-service-grid mt-10">
            {category.services.map((service, index) => (
              <motion.article
                key={service.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: .42, delay: (index % 3) * .05 }}
                className="category-service-card"
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <Link to={`/services/${category.slug}/${service.slug}`}>Explore {service.name} <i>→</i></Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="category-switcher pb-16 md:pb-24">
        <div className="container-page">
          <p className="service-eyebrow">Another direction</p>
          <div className="category-switcher-links mt-5">
            <Link to="/services">Browse every service category <span>→</span></Link>
          </div>
        </div>
      </section>
      <CtaBanner onEnquire={onEnquire} />
    </>
  );
}
