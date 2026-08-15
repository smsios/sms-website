const GOOGLE_SHEETS_ENDPOINT = import.meta.env.VITE_GOOGLE_SHEETS_WEB_APP_URL;

export function isGoogleSheetsConfigured() {
  return Boolean(GOOGLE_SHEETS_ENDPOINT);
}

// Basic client-side validation so bad input doesn't silently hit the sheet.
export function validateLeadForm(form) {
  const errors = {};
  const data = new FormData(form);

  const name = (data.get("name") || "").toString().trim();
  const phone = (data.get("phone") || "").toString().trim();
  const email = (data.get("email") || "").toString().trim();

  if (!name) errors.name = "Name is required.";

  if (!phone) {
    errors.phone = "Phone number is required.";
  } else if (!/^[+\d][\d\s\-()]{6,}$/.test(phone)) {
    errors.phone = "Enter a valid phone number.";
  }

  // Email is optional on the modal form but must be valid if provided/required.
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address.";
  } else if (data.has("email") && !email && form.email?.required) {
    errors.email = "Email is required.";
  }

  return errors;
}

export async function submitLeadToGoogleSheets(form, source) {
  if (!GOOGLE_SHEETS_ENDPOINT) {
    throw new Error("Google Sheets endpoint is not configured.");
  }

  const data = new FormData(form);
  data.append("source", source);
  data.append("page", window.location.pathname);
  data.append("submittedAt", new Date().toISOString());

  let response;
  try {
    // Deliberately NOT using mode: "no-cors" — that made every request an
    // opaque response, so we could never tell success from failure and the
    // UI always said "sent" even when doPost() rejected the lead.
    // Apps Script web apps deployed with "Anyone" access send back
    // Access-Control-Allow-Origin, so a normal (cors) fetch works and lets
    // us read the real ok/message payload from doPost().
    response = await fetch(GOOGLE_SHEETS_ENDPOINT, {
      method: "POST",
      body: data,
    });
  } catch {
    throw new Error("Network error — could not reach the server.");
  }

  let result;
  try {
    result = await response.json();
  } catch {
    // If Apps Script ever returns something unreadable (rare, e.g. a
    // redirect we can't follow into JSON), don't silently claim success —
    // surface it so the UI can show an honest "unknown" state.
    throw new Error("Server response could not be read. Please try again.");
  }

  if (!result.ok) {
    throw new Error(result.message || "Submission failed.");
  }

  return result;
}