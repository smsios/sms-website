import Contact from "../components/Contact.jsx";
import EditorialHero from "../components/EditorialHero.jsx";
import PageMeta from "../components/PageMeta.jsx";
import { company } from "../data/content.js";

export default function ContactPage() {
  return (
    <>
      <PageMeta
        title="Contact Us"
        description={`Get in touch with System Management Services. ${company.address}`}
        path="/contact"
      />

      <EditorialHero
        eyebrow="Contact"
        title="Bring us your"
        accent="audit brief."
        description="Tell us the standard, your industry, the target date and the evidence gap. SMS will help convert the pressure into a practical roadmap."
        image="/assets/team/team-photo-2.jpeg"
        imageAlt="SMS partner"
        label="The Enquiry Desk"
        meta={[
          { value: "+91", label: "India" },
          { value: "Ahmedabad", label: "Office" },
          { value: "500+", label: "Clients" },
          { value: "16+", label: "Years" },
        ]}
      />

      <Contact />

      <section className="mag-section pb-16 md:pb-32">
        <div className="container-page">
          <div className="mag-card overflow-hidden p-2 sm:p-3">
            <iframe
              title="SMS office location"
              src="https://www.google.com/maps?q=Suryam+Elegance+Vastral+Ahmedabad&output=embed"
              width="100%"
              height="280"
              className="w-full grayscale sm:h-[390px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}