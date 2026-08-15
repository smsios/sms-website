import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { validateLeadForm } from "../utils/googleSheets.js";
import { sendLeadToWhatsApp } from "../utils/whatsapp.js";

export default function EnquiryModal({ open, onClose }) {
  const [status, setStatus] = useState("idle");
  const [fieldErrors, setFieldErrors] = useState({});
  const closeRef = useRef(null);

  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Reset transient state whenever the modal is reopened.
  useEffect(() => {
    if (open) {
      setStatus("idle");
      setFieldErrors({});
    }
  }, [open]);

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
    sendLeadToWhatsApp(form, "Quick enquiry modal");
    form.reset();
    setStatus("opened");
    setTimeout(() => {
      onClose();
      setStatus("idle");
    }, 1400);
  }

  function buttonLabel() {
    switch (status) {
      case "submitting":
        return "Sending...";
      case "opened":
        return "WhatsApp opened";
      case "invalid":
        return "Please fix the highlighted fields.";
      default:
        return "Continue to WhatsApp";
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="enquiry-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-navy-950/55 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="card-panel relative w-full max-w-md rounded-md bg-white p-7"
          >
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label="Close enquiry form"
              className="absolute right-4 top-4 rounded-md p-1 text-slate-400 hover:text-navy-950 focus-ring"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>

            <span className="stamp mb-4 w-fit px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-navy-800">
              Quick Enquiry
            </span>
            <h2 id="enquiry-title" className="mb-2 font-display text-xl font-semibold text-navy-950">
              Tell us what you're certifying
            </h2>
            <p className="mb-6 text-sm text-slate-600">
              A managing partner will get back to you, usually within one business day.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
              <p className="rounded-md border border-navy-800/12 bg-blue-50 px-3.5 py-2.5 text-xs leading-5 text-slate-600">
                Your details will open in WhatsApp so you can send the enquiry directly to SMS.
              </p>
              {["Name", "Phone", "Email"].map((label) => {
                const name = label.toLowerCase();
                const error = fieldErrors[name];
                return (
                  <div key={label}>
                    <input
                      required
                      type={label === "Email" ? "email" : label === "Phone" ? "tel" : "text"}
                      name={name}
                      placeholder={label}
                      aria-invalid={Boolean(error)}
                      className={`w-full rounded-md border bg-white px-3.5 py-2.5 text-sm text-navy-950 placeholder:text-slate-400 focus-ring ${
                        error ? "border-red-400" : "border-navy-800/12"
                      }`}
                    />
                    {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
                  </div>
                );
              })}
              <textarea
                name="comments"
                rows={3}
                placeholder="Which standard / certification?"
                className="w-full rounded-md border border-navy-800/12 bg-white px-3.5 py-2.5 text-sm text-navy-950 placeholder:text-slate-400 focus-ring"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full rounded-md bg-navy-800 px-6 py-3 font-semibold text-white transition hover:bg-navy-700 focus-ring"
              >
                {buttonLabel()}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
