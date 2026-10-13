import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import PageMeta from "../components/PageMeta.jsx";
import { ConsultationCta, PageIntro } from "../components/SiteElements.jsx";

const questions = [
  ["How does SMS begin a certification project?", "SMS begins by understanding the intended scope, applicable requirement, operations and current readiness. The next steps are planned around the gaps and the people responsible for each process."],
  ["Can SMS support implementation as well as certification readiness?", "Yes. Support can include system design, documentation, implementation guidance, awareness training, internal auditing, corrective-action support and preparation for certification assessment."],
  ["Which industries can SMS support?", "SMS works across manufacturing and service sectors including chemicals, food, pharmaceuticals, healthcare, textile, packaging, engineering, automotive, construction, IT and more."],
  ["Can SMS help with customer or supplier audits?", "Yes. SMS can support documentation, questionnaires, records, audit preparation, audit-day support and corrective actions for customer, supplier and third-party audits."],
];

export default function FAQ() {
  const { onEnquire } = useOutletContext();
  const [open, setOpen] = useState(0);
  return <><PageMeta title="Frequently Asked Questions" description="Answers to common questions about SMS certification, compliance, training and audit support." path="/faq" /><PageIntro eyebrow="Frequently asked questions" title="A few useful starting points." description="For an answer tailored to your organisation, speak directly with the SMS team." /><section className="section"><div className="container faq-list">{questions.map(([question, answer], index) => <article key={question}><button type="button" onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}><span>{question}</span><b>{open === index ? "−" : "+"}</b></button>{open === index && <p>{answer}</p>}</article>)}</div></section><ConsultationCta onEnquire={onEnquire} /></>;
}
