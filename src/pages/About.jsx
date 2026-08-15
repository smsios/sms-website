import { useOutletContext } from "react-router-dom";
import PageMeta from "../components/PageMeta.jsx";
import About from "../components/About.jsx";
import Team from "../components/Team.jsx";
import Industries from "../components/Industries.jsx";
import CtaBanner from "../components/CtaBanner.jsx";
import EditorialHero from "../components/EditorialHero.jsx";

export default function AboutPage() {
  const { onEnquire } = useOutletContext();
  return (
    <>
      <PageMeta
        title="About Us"
        description="Meet System Management Services: a field-led consultancy for practical certification implementation, training and audit readiness."
        path="/about"
      />

      <EditorialHero
        eyebrow="About Us"
        title="Built by lead auditors,"
        accent="not generalists."
        description="A field-led consultancy shaped by implementation, training, evidence, records and the pressure of real certification audits."
        image="/assets/team/team-photo-2.jpeg"
        imageAlt="SMS lead auditor"
        label="The People Issue"
      />

      <About />
      <Team />
      <Industries />
      <CtaBanner
        eyebrow="Work With Us"
        heading="Talk to the people who'll actually run your audit"
        onEnquire={onEnquire}
      />
    </>
  );
}
