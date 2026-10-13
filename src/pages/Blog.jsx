import PageMeta from "../components/PageMeta.jsx";
import { PageIntro } from "../components/SiteElements.jsx";

const resources = [
  ["Management systems", "Preparing your organisation for an ISO certification project", "A practical checklist of the questions to settle before beginning documentation and implementation."],
  ["Audit readiness", "What teams should prepare before an internal audit", "Focus on records, process ownership, corrective action and evidence that reflects the work being done."],
  ["Compliance", "Choosing the right product or market-compliance route", "Consider product category, intended country, customer expectations and applicable technical requirements."],
];

export default function Blog() {
  return <><PageMeta title="Resources" description="Practical SMS resources on certification, audits and compliance." path="/blog" /><PageIntro eyebrow="Resources" title="Practical guidance for certification and compliance." description="Simple reference material for teams preparing for a management-system, product-compliance or audit requirement." /><section className="section"><div className="container resource-list">{resources.map(([tag, title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><p className="eyebrow">{tag}</p><h2>{title}</h2><p>{text}</p></div></article>)}</div></section></>;
}
