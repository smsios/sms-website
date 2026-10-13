import { useEffect, useState } from "react";
import { validateLeadForm } from "../utils/googleSheets.js";
import { sendLeadToWhatsApp } from "../utils/whatsapp.js";

export default function EnquiryModal({ open, onClose }) {
  const [errors, setErrors] = useState({});
  useEffect(() => {
    const onKeyDown = (event) => event.key === "Escape" && onClose();
    if (open) document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);
  if (!open) return null;
  function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const nextErrors = validateLeadForm(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    sendLeadToWhatsApp(form, "Website consultation request");
    onClose();
  }
  return <div className="modal-backdrop" role="presentation" onMouseDown={onClose}><section className="enquiry-modal" role="dialog" aria-modal="true" aria-labelledby="enquiry-title" onMouseDown={(event) => event.stopPropagation()}><button className="modal-close" type="button" aria-label="Close enquiry form" onClick={onClose}>×</button><p className="eyebrow">Consultation request</p><h2 id="enquiry-title">Tell us what you need.</h2><p className="modal-copy">Your message will open in WhatsApp and go directly to the SMS team.</p><form className="simple-form" onSubmit={submit} noValidate><label>Name<input name="name" required autoComplete="name" />{errors.name && <small>{errors.name}</small>}</label><label>Phone<input name="phone" required type="tel" autoComplete="tel" />{errors.phone && <small>{errors.phone}</small>}</label><label>Email <span>(optional)</span><input name="email" type="email" autoComplete="email" />{errors.email && <small>{errors.email}</small>}</label><label>Requirement<textarea name="comments" rows="3" placeholder="Standard, industry or audit requirement" /></label><button className="button" type="submit">Continue to WhatsApp</button></form></section></div>;
}
