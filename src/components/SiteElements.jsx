import { Link } from "react-router-dom";

export function PageIntro({ eyebrow, title, description, children }) {
  return <section className="page-intro"><div className="container"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="page-intro-copy">{description}</p>{children}</div></section>;
}

export function SectionHeading({ eyebrow, title, copy }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

export function ConsultationCta({ onEnquire, title = "Discuss your requirement with SMS." }) {
  return <section className="consultation-cta"><div className="container cta-inner"><div><p className="eyebrow">Start with a clear brief</p><h2>{title}</h2></div><div className="cta-actions"><button type="button" className="button button-light" onClick={onEnquire}>Request consultation</button><Link className="text-link" to="/contact">Contact details <span>→</span></Link></div></div></section>;
}

export function CheckList({ items }) {
  return <ul className="check-list">{items.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul>;
}
