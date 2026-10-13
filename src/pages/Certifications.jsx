import { useOutletContext } from "react-router-dom";
import PageMeta from "../components/PageMeta.jsx";
import { ConsultationCta, SectionHeading } from "../components/SiteElements.jsx";
import { certificationGroups, processSteps } from "../data/content.js";

export default function Certifications() {
  const { onEnquire } = useOutletContext();
  return <>
    <PageMeta title="Certification Consultancy Directory" description="SMS supports consulting across ISO standards, food safety, ESG, sustainability, product compliance, textile and organic certification requirements." path="/certifications" />
    <section className="page-intro"><div className="container"><p className="eyebrow">Certification directory</p><h1>Find the requirement that fits your organisation.</h1><p className="page-intro-copy">SMS provides consultancy across management-system, product, sustainability and market-compliance requirements. The right route depends on your products, industry, customers and intended market.</p></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Areas of support" title="Certification and compliance programmes." /><div className="certification-grid">{certificationGroups.map((group) => <article key={group.title}><h2>{group.title}</h2><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></div></section>
    <section className="section section-tint"><div className="container"><SectionHeading eyebrow="The consulting process" title="How SMS supports certification readiness." /><div className="process-grid compact-process">{processSteps.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <ConsultationCta onEnquire={onEnquire} title="Tell us the standard, your industry and target date." />
  </>;
}
