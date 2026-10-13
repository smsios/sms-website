import PageMeta from "../components/PageMeta.jsx";
import { PageIntro } from "../components/SiteElements.jsx";

export default function PrivacyPolicyPage() {
  return <><PageMeta title="Privacy Policy" description="Privacy policy for System Management Services." path="/privacy-policy" /><PageIntro eyebrow="Legal" title="Privacy policy" description="SMS respects the privacy of people who contact us through this website." /><section className="section"><div className="container legal-copy"><h2>Information provided in an enquiry</h2><p>When you submit an enquiry, the contact information and requirement you provide are used by System Management Services to respond to that enquiry. The website opens WhatsApp so that you can send the message directly to SMS.</p><h2>Contact</h2><p>For questions about this policy, contact <a href="mailto:avinash.smservices@gmail.com">avinash.smservices@gmail.com</a>.</p></div></section></>;
}
