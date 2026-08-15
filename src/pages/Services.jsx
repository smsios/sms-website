import { useOutletContext } from "react-router-dom";
import PageMeta from "../components/PageMeta.jsx";
import CertifyingBodies from "../components/CertifyingBodies.jsx";
import CtaBanner from "../components/CtaBanner.jsx";
import EditorialHero from "../components/EditorialHero.jsx";
import Process from "../components/Process.jsx";
import Services from "../components/Services.jsx";
import { stats } from "../data/content.js";

export default function ServicesPage() {
  const { onEnquire } = useOutletContext();
  return (
    <>
      <PageMeta
        title="ISO Certification Services in Ahmedabad, Gujarat"
        description="ISO certification services in Ahmedabad and Gujarat: ISO 9001, ISO 14001, ISO 45001, ISO 22000, ISO 27001, FSSC 22000, IATF 16949, CE Marking and audit support."
        path="/services"
      />

      <EditorialHero
        eyebrow="ISO certification services / Ahmedabad"
        title="Your certification path,"
        accent="made practical."
        description="Choose a standard below. SMS supports Ahmedabad and Gujarat businesses from gap assessment and documentation to training, internal audit and certification-body coordination."
        image="/assets/team/team-photo-3.jpeg"
        imageAlt="SMS consultant"
        label="Standards Portfolio"
        meta={stats}
      />

      <Services />
      <Process />
      <CertifyingBodies />
      <CtaBanner
        eyebrow="Not Sure Which Standard You Need?"
        heading="Send us your scope. We'll map the right certification path."
        onEnquire={onEnquire}
      />
    </>
  );
}
