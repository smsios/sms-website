import PageMeta from "../components/PageMeta.jsx";
import { PageIntro } from "../components/SiteElements.jsx";

export default function TermsPage() {
  return <><PageMeta title="Terms & Disclaimer" description="Terms and disclaimer for System Management Services." path="/terms" /><PageIntro eyebrow="Legal" title="Terms & disclaimer" description="Information on this website is provided as a general introduction to SMS services." /><section className="section"><div className="container legal-copy"><h2>General information</h2><p>Certification, product and country-specific requirements depend on the applicable standard, product, market and certification or regulatory authority. SMS will assess the relevant scope before confirming a consulting approach.</p><h2>Enquiries</h2><p>Sending an enquiry does not create a consulting engagement. A scope, timing and commercial arrangement are confirmed separately with SMS.</p></div></section></>;
}
