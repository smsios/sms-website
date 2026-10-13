import { useOutletContext } from "react-router-dom";
import PageMeta from "../components/PageMeta.jsx";
import { ConsultationCta, SectionHeading } from "../components/SiteElements.jsx";
import { trainingTopics } from "../data/content.js";

export default function TrainingPage() {
  const { onEnquire } = useOutletContext();
  return <>
    <PageMeta title="Management System & Improvement Training" description="SMS delivers management-system awareness, internal-auditor and management-area training including 5S, Kaizen, Six Sigma, Kanban and TPM." path="/training" />
    <section className="page-intro"><div className="container"><p className="eyebrow">Training</p><h1>Capability that stays with your team.</h1><p className="page-intro-copy">SMS provides training that helps people understand the requirement, carry out their responsibilities and maintain useful evidence in day-to-day work.</p></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Training support" title="Focused sessions for implementation and improvement." /><div className="training-grid">{trainingTopics.map((topic, index) => <article key={topic.title}><span>{String(index + 1).padStart(2, "0")}</span><h2>{topic.title}</h2><p>{topic.text}</p></article>)}</div></div></section>
    <section className="section section-tint"><div className="container two-column"><div><SectionHeading eyebrow="Built for application" title="Relevant to the system and the people using it." /></div><div><p>Training can support management-system implementation, documentation, internal auditing and certification preparation. Management-area workshops are also available for teams building stronger workplace organisation and continual-improvement practices.</p><p>On completion of the training, SMS provides a certificate to participants.</p></div></div></section>
    <ConsultationCta onEnquire={onEnquire} title="Plan a training programme for your team." />
  </>;
}
