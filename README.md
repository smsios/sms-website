# System Management Services — Website

Vite + React + Tailwind CSS v4 + Framer Motion + Three.js + Swiper.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## ⚠️ Not yet verified

This project was hand-built in a sandbox with **no network access**, so `npm install`
could not be run and the dev server was never started here. The code follows current
APIs for Tailwind v4, Framer Motion 11, Three.js, and Swiper 11 correctly to the best
of my knowledge, but you should treat the very first `npm run dev` as a checkpoint —
skim the terminal for missing-dependency or version-mismatch errors and let me know
what comes up so I can fix it quickly.

## Connect forms to Google Sheets

Both the Contact page form and the Quick Enquiry modal submit to the URL in:

```bash
VITE_GOOGLE_SHEETS_WEB_APP_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

Create a local `.env` file from `.env.example`, paste your deployed Google Apps
Script web app URL, then rebuild or redeploy the site.

Use this Apps Script in the Google Sheet:

```js
const SHEET_NAME = "Leads";

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  const data = e.parameter;

  sheet.appendRow([
    data.submittedAt || new Date().toISOString(),
    data.source || "",
    data.page || "",
    data.name || "",
    data.phone || "",
    data.email || "",
    data.service || "",
    data.company || "",
    data.product || "",
    data.employees || "",
    data.comments || "",
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

Recommended sheet headers:

```text
Submitted At, Source, Page, Name, Phone, Email, Service, Company, Product, Employees, Comments
```

Deploy the Apps Script as a web app with access set to "Anyone" so the static
website can submit enquiries.

## What's real vs. placeholder

**Real, from your files:**
- All copy (About, Vision/Mission, service categories, 17-step certification
  process, assessment criteria, benefits, strengths, team bios, contact details)
- Brand logo, 3 team/partner photos, 48 client company logos, 22 certifying-body
  accreditation logos — all extracted from the docx/pptx and sorted into
  `public/assets/`

**Still placeholder / needs your input:**
- The "Engagement" image slider (between About and Services) is currently five
  original SVG illustrations in the site's own blueprint style, one per stage
  of the process — I had no source photography to put there. Swap in real
  project or office photos whenever you have them (`src/components/ImageGallery.jsx`);
  the Swiper wiring won't need to change.
- Contact form and enquiry modal are wired for Google Sheets. Add the deployed
  Apps Script URL to `VITE_GOOGLE_SHEETS_WEB_APP_URL` before going live.
- A couple of client-logo and certifying-body-logo files came out slightly
  cropped from the PowerPoint's own layout — worth a quick visual pass once
  you're running it locally.

## Structure

```
src/
  components/     one file per section
  data/
    content.js       all real copy, structured
    assetLists.js     generated arrays of logo file paths
public/
  assets/
    brand/
    team/
    client-logos/
    certifying-body-logos/
```

## Design system

Navy/teal/gold palette, blueprint-grid background motif, and a recurring
"certification stamp" ring motif for numbering and eyebrows — all defined as
CSS custom properties in `src/index.css` under `@theme`. Fonts: Space Grotesk
(display), Inter (body), IBM Plex Mono (data/labels), loaded via Google Fonts
in `index.html`.
