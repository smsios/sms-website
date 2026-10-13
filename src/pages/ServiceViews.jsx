import { Link, Navigate, useOutletContext, useParams } from "react-router-dom";
import PageMeta from "../components/PageMeta.jsx";
import { ConsultationCta, SectionHeading } from "../components/SiteElements.jsx";
import { certificationSectors, certificationStandardDescriptions, services, trainingTopics } from "../data/content.js";

export function CertificationDirectory() {
  const { onEnquire } = useOutletContext();
  return <><PageMeta title="Certification Consultancy by Sector" description="Browse SMS certification consultancy support for agriculture and food, healthcare, manufacturing, automotive, IT and sustainability sectors." path="/services/certification" />
    <section className="service-subhero certification-subhero"><div className="container"><p className="eyebrow">Certification</p><h1>Start with your sector.</h1><p>Requirements make more sense in context. Choose the sector closest to your organisation to see the standards and SMS support relevant to that environment.</p></div></section>
    <section className="section"><div className="container"><div className="sector-card-grid">{certificationSectors.map((sector) => <Link to={`/services/certification/${sector.slug}`} className="sector-card" key={sector.slug}><span>{sector.number}</span><h2>{sector.title}</h2><p>{sector.summary}</p><div>{sector.standards.slice(0, 4).map((standard) => <small key={standard}>{standard}</small>)}</div><strong>View standards & support <b>→</b></strong></Link>)}</div></div></section>
    <ConsultationCta onEnquire={onEnquire} title="Not sure which sector to choose? We can help." />
  </>;
}

export function CertificationSectorDetail() {
  const { sectorSlug } = useParams();
  const { onEnquire } = useOutletContext();
  const sector = certificationSectors.find((item) => item.slug === sectorSlug);
  if (!sector) return <Navigate to="/services/certification" replace />;
  const path = `/services/certification/${sector.slug}`;
  const schema = { "@context": "https://schema.org", "@type": "Service", name: `${sector.title} certification consultancy`, description: sector.summary, provider: { "@type": "ProfessionalService", name: "System Management Services", url: "https://www.isosmservices.in" }, areaServed: ["India", "Overseas"] };
  return <><PageMeta title={`${sector.title} Certification Consultancy`} description={`${sector.summary} Explore supported standards and consulting services from SMS.`} path={path} jsonLd={schema} />
    <section className="sector-detail-hero"><div className="container"><Link className="back-link" to="/services/certification">← All certification sectors</Link><p className="eyebrow">Sector {sector.number}</p><h1>{sector.title}</h1><p>{sector.summary}</p></div></section>
    <section className="section"><div className="container detail-layout"><div><p className="detail-label">Overview</p><h2>Certification support designed around your operation.</h2><p className="detail-intro">{sector.intro}</p><h3>Standards and programmes</h3><div className="standard-detail-list">{sector.standards.map((standard) => <details className="standard-detail" key={standard}><summary><span>{standard}</span><span className="standard-detail-toggle" aria-hidden="true" /></summary><p>{certificationStandardDescriptions[standard]}</p></details>)}</div></div><aside><p className="detail-label">How SMS helps</p><ul>{sector.support.map((item) => <li key={item}>{item}</li>)}</ul><button type="button" className="button" onClick={onEnquire}>Discuss this requirement <span>→</span></button></aside></div></section>
    <section className="section related-sectors"><div className="container"><SectionHeading eyebrow="Related sectors" title="Explore another requirement." /><div className="related-links">{certificationSectors.filter((item) => item.slug !== sector.slug).slice(0, 3).map((item) => <Link to={`/services/certification/${item.slug}`} key={item.slug}><span>{item.number}</span><strong>{item.title}</strong><b>→</b></Link>)}</div></div></section>
  </>;
}

export function ConsultancyPage() {
  const { onEnquire } = useOutletContext();
  return <><PageMeta title="ISO & Compliance Consultancy" description="SMS provides practical consulting for management systems, product and market compliance, ESG and customer or supplier audits." path="/services/consultancy" />
    <section className="service-subhero consultancy-subhero"><div className="container"><p className="eyebrow">Consultancy</p><h1>Systems that fit your business, not the other way around.</h1><p>SMS brings structure to complex requirements, then helps your people put the right controls, documents and records into daily practice.</p></div></section>
    <section className="section"><div className="container consultancy-list">{services.map((group) => <article key={group.number}><header><span>{group.number}</span><div><h2>{group.title}</h2><p>{group.intro}</p></div></header><div>{group.items.map((item) => <section key={item.title}><h3>{item.title}</h3><p>{item.copy}</p><small>{item.standards}</small></section>)}</div></article>)}</div></section>
    <ConsultationCta onEnquire={onEnquire} title="Bring us the problem. We’ll help structure the work." />
  </>;
}

export function TrainingServicePage() {
  const { onEnquire } = useOutletContext();
  return <><PageMeta title="Management System & Improvement Training" description="SMS provides awareness, internal-auditor and management-area training for implementation, compliance and continual improvement." path="/services/training" />
    <section className="service-subhero training-subhero"><div className="container"><p className="eyebrow">Training</p><h1>Give your team the confidence to run the system well.</h1><p>Training is designed to make requirements understandable, responsibilities clear and audit evidence a natural part of everyday work.</p></div></section>
    <section className="section"><div className="container"><div className="training-service-grid">{trainingTopics.map((topic, index) => <article key={topic.title}><span>0{index + 1}</span><h2>{topic.title}</h2><p>{topic.text}</p></article>)}</div></div></section>
    <section className="section training-note"><div className="container two-column-strong"><div><p className="eyebrow">Relevant training</p><h2>Made for the people who will use the system.</h2></div><div><p>SMS provides management-system related awareness training and internal-auditor training for effective implementation, documentation and certification readiness. Management-area programmes cover Six Sigma, Kaizen, Kanban, 5S, TPM, KRA, benchmarking and Poka-Yoke.</p><p>A certificate is provided to participants on completion of training.</p></div></div></section>
    <ConsultationCta onEnquire={onEnquire} title="Plan a useful training programme for your team." />
  </>;
}
