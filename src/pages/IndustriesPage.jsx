import { useOutletContext } from "react-router-dom";
import PageMeta from "../components/PageMeta.jsx";
import { ConsultationCta, SectionHeading } from "../components/SiteElements.jsx";
import { industries } from "../data/content.js";

export default function IndustriesPage() {
  const { onEnquire } = useOutletContext();
  return <>
    <PageMeta title="Industries We Serve" description="SMS provides ISO certification and compliance consulting for manufacturing, food, pharmaceuticals, healthcare, textile, engineering, automotive, IT and more." path="/industries" />
    <section className="page-intro"><div className="container"><p className="eyebrow">Industries</p><h1>Consulting shaped around the realities of your sector.</h1><p className="page-intro-copy">Requirements differ by product, process, customer and market. SMS adapts certification, audit and compliance support to the organisation in front of us.</p></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Sectors supported" title="Experience across industry and service organisations." /><div className="industries-grid">{industries.map((industry, index) => <article key={industry}><span>{String(index + 1).padStart(2, "0")}</span><h2>{industry}</h2></article>)}</div></div></section>
    <section className="section section-tint"><div className="container narrow-copy"><SectionHeading eyebrow="A practical approach" title="The same framework, tailored to your work." /><p>Whether the focus is a management system, product conformity, food safety, customer audit or sustainability requirement, SMS starts with your operational context and creates a clear plan for implementation and evidence.</p></div></section>
    <ConsultationCta onEnquire={onEnquire} />
  </>;
}
