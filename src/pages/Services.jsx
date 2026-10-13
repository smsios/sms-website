import { Link, useOutletContext } from "react-router-dom";
import PageMeta from "../components/PageMeta.jsx";
import { ConsultationCta, SectionHeading } from "../components/SiteElements.jsx";

const pathways = [
  ["01", "Certification", "Find the standards relevant to your industry, then see how SMS can support implementation and readiness.", "/services/certification", "Browse certification sectors"],
  ["02", "Consultancy", "From system implementation and documentation to product compliance and audit support, built around your operating reality.", "/services/consultancy", "Explore consultancy"],
  ["03", "Training", "Build awareness, audit capability and continual-improvement habits across your team.", "/services/training", "Explore training"],
];

export default function ServicesPage() {
  const { onEnquire } = useOutletContext();
  return <><PageMeta title="Certification, Consultancy & Training" description="Explore SMS certification, consultancy and training services for ISO systems, product compliance, ESG and audit readiness." path="/services" />
    <section className="services-hero"><div className="container"><p className="eyebrow">SMS services</p><h1>Clear support for every stage of the requirement.</h1><p>Whether you are pursuing certification, building a working system or developing team capability, choose the path that matches your next step.</p></div></section>
    <section className="section"><div className="container"><div className="pathway-grid">{pathways.map(([number, title, text, to, label]) => <Link className="pathway-card" to={to} key={title}><span>{number}</span><h2>{title}</h2><p>{text}</p><strong>{label} <b>→</b></strong></Link>)}</div></div></section>
    <section className="section service-statement"><div className="container"><SectionHeading eyebrow="One practical approach" title="Understand the work. Build the system. Prove the practice." /><p>SMS helps teams turn requirements into practical routines with clear responsibilities, useful documents and records, confident people and evidence that stands up to review.</p></div></section>
    <ConsultationCta onEnquire={onEnquire} />
  </>;
}
