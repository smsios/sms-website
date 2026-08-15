import { motion } from "framer-motion";
import { useState } from "react";
import { contact, serviceCategories } from "../data/content.js";
import { validateLeadForm } from "../utils/googleSheets.js";
import { sendLeadToWhatsApp } from "../utils/whatsapp.js";

const popularServices = serviceCategories.flatMap((cat) => cat.items).slice(0, 18);

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [fieldErrors, setFieldErrors] = useState({});

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;

    const errors = validateLeadForm(form);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setStatus("invalid");
      return;
    }
    setFieldErrors({});

    setStatus("submitting");
    sendLeadToWhatsApp(form, "Contact page form");
    form.reset();
    setStatus("opened");
  }

  function buttonLabel() {
    switch (status) {
      case "submitting":
        return "Sending...";
      case "opened":
        return "WhatsApp opened — tap Send to complete your enquiry.";
      case "invalid":
        return "Please fix the highlighted fields.";
      default:
        return "Send enquiry on WhatsApp";
    }
  }

  return (
    <section id="contact" className="mag-section relative overflow-hidden py-14 md:py-28">
      <div className="container-page grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="order-2 lg:order-1"
        >
          <span className="mag-kicker">Contact</span>
          <h2 className="mag-title mt-5 text-2xl leading-tight sm:text-3xl md:text-4xl">
            Tell us your standard, industry and audit deadline
          </h2>
          <p className="mag-copy mt-5 max-w-md text-sm sm:mt-6 sm:text-base">{contact.address}</p>

          <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
            {contact.partners.map((person) => (
              <article key={person.name} className="mag-card flex gap-3 p-3.5 sm:gap-4 sm:p-4">
                <img
                  src={person.photo}
                  alt={person.name}
                  className="h-14 w-14 shrink-0 border border-black/15 object-cover sm:h-16 sm:w-16"
                />
                <div className="min-w-0">
                  <p className="truncate font-display text-base font-semibold text-[var(--editorial-ink)] sm:text-lg">
                    {person.name}
                  </p>
                  <p className="text-xs text-[var(--editorial-muted)]">{person.role}</p>
<a
  href={`tel:${person.phone.replace(/\s/g, "")}`}
  className="mt-1 block text-sm font-semibold text-[var(--editorial-red)]"
>
  {person.phone}
</a>
<a
  href={`mailto:${person.email}`}
  className="truncate text-sm text-[var(--editorial-muted)]"
>
  {person.email}
</a>

                </div>
              </article>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.08 }}
          onSubmit={handleSubmit}
          noValidate
          className="mag-card order-1 p-4 sm:p-7 lg:order-2"
        >
          <p className="mb-5 text-sm leading-6 text-[var(--editorial-muted)]">Complete the form and WhatsApp will open with your enquiry ready to send to the SMS team.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" required error={fieldErrors.name} />
            <Field label="Phone" name="phone" type="tel" required error={fieldErrors.phone} />
            <Field label="Email" name="email" type="email" required error={fieldErrors.email} />
            <div>
              <label htmlFor="service" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[var(--editorial-muted)]">
                Service
              </label>
              <select
                id="service"
                name="service"
                className="w-full border border-black/20 bg-[var(--editorial-cream)] px-3.5 py-3 text-sm text-[var(--editorial-ink)] focus-ring"
              >
                <option>Requirement for certification</option>
                {popularServices.map((service) => (
                  <option key={service}>{service}</option>
                ))}
              </select>
            </div>
            <Field label="Company name & address" name="company" className="sm:col-span-2" />
            <Field label="Product details" name="product" className="sm:col-span-2" />
            <Field label="Total employees" name="employees" type="number" />
            <div className="sm:col-span-2">
              <label htmlFor="comments" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[var(--editorial-muted)]">
                Requirement
              </label>
              <textarea
                id="comments"
                name="comments"
                rows={4}
                className="w-full border border-black/20 bg-[var(--editorial-cream)] px-3.5 py-3 text-sm text-[var(--editorial-ink)] focus-ring"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-5 w-full bg-[var(--editorial-ink)] px-6 py-3.5 text-sm font-semibold text-[var(--editorial-cream)] transition hover:-translate-y-0.5 hover:bg-[var(--editorial-red)] focus-ring"
          >
            {buttonLabel()}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required = false, className = "", error }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[var(--editorial-muted)]">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        aria-invalid={Boolean(error)}
        className={`w-full border bg-[var(--editorial-cream)] px-3.5 py-3 text-sm text-[var(--editorial-ink)] focus-ring ${
          error ? "border-[var(--editorial-red)]" : "border-black/20"
        }`}
      />
      {error && <p className="mt-1 text-xs text-[var(--editorial-red)]">{error}</p>}
    </div>
  );
}
