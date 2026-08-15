const WHATSAPP_NUMBER = "919558470900";

// Keep the message assembly in one place so every enquiry reaches the same WhatsApp thread.
export function sendLeadToWhatsApp(form, source) {
  const data = new FormData(form);
  const labels = {
    name: "Name",
    phone: "Phone",
    email: "Email",
    company: "Company and address",
    service: "Service",
    product: "Product details",
    employees: "Total employees",
    comments: "Requirement",
  };

  const details = Object.entries(labels)
    .map(([field, label]) => {
      const value = data.get(field)?.toString().trim();
      return value ? `*${label}:* ${value}` : null;
    })
    .filter(Boolean);

  const message = [
    "Hello SMS, I would like to discuss a certification requirement.",
    "",
    ...details,
    "",
    `*Enquiry source:* ${source}`,
    `*Page:* ${window.location.pathname}`,
  ].join("\n");

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const whatsappWindow = window.open(url, "_blank", "noopener,noreferrer");

  // Some mobile browsers block a new tab; navigating is a reliable fallback.
  if (!whatsappWindow) window.location.assign(url);
}
