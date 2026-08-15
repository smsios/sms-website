import { useEffect } from "react";

const SITE_NAME = "System Management Services";
const SITE_URL = "https://www.isosmservices.in";
const SITE_IMAGE = `${SITE_URL}/assets/brand/sms-logo-full.png`;
const DEFAULT_KEYWORDS =
  "ISO certification consultant Ahmedabad, ISO consultant India, ISO 9001 consultant, ISO 14001 consultant, ISO 45001 consultant, FSSC 22000 consultant, BRCGS consultant, IATF 16949 consultant, NABL consultant, CE Marking consultant, EcoVadis consultant, ESG consultant India";
const GEO = {
  region: "IN-GJ",
  place: "Ahmedabad, Gujarat, India",
  position: "23.0225;72.5714",
  icbm: "23.0225, 72.5714",
};

function setMeta(name, content, attr = "name") {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setJsonLd(id, data) {
  let el = document.head.querySelector(`script#${id}`);
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export default function PageMeta({ title, description, path = "/", keywords = DEFAULT_KEYWORDS, jsonLd = null }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    const url = `${SITE_URL}${path}`;

    document.title = fullTitle;
    setMeta("description", description);
    setMeta("keywords", keywords);
    setMeta("author", SITE_NAME);
    setMeta("robots", path === "/404" ? "noindex, follow" : "index, follow, max-image-preview:large");
    setMeta("geo.region", GEO.region);
    setMeta("geo.placename", GEO.place);
    setMeta("geo.position", GEO.position);
    setMeta("ICBM", GEO.icbm);
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:url", url, "property");
    setMeta("og:image", SITE_IMAGE, "property");
    setMeta("og:image:alt", "System Management Services logo", "property");
    setMeta("og:site_name", SITE_NAME, "property");
    setMeta("og:locale", "en_IN", "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", SITE_IMAGE);
    setMeta("twitter:image:alt", "System Management Services logo");
    setLink("canonical", url);

    // Keep a lightweight WebPage entity on every route; feature pages add their own richer schema below.
    setJsonLd("sms-webpage-schema", {
      "@context": "https://schema.org",
      "@type": path === "/404" ? "WebPage" : "WebPage",
      "@id": url,
      url,
      name: fullTitle,
      description,
      inLanguage: "en-IN",
      isPartOf: { "@id": SITE_URL },
    });
    setJsonLd("sms-local-business-schema", {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: "SMS",
      url: SITE_URL,
      image: SITE_IMAGE,
      logo: SITE_IMAGE,
      description,
      telephone: "+91-95584-70900",
      email: "avinash.smservices@gmail.com",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "A-101, Suryam Elegance, Nr. Madhav Farm, S.P Ring Road, Vastral",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        postalCode: "382418",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 23.0225,
        longitude: 72.5714,
      },
      areaServed: ["Ahmedabad", "Gujarat", "India", "Overseas"],
      serviceType: [
        "ISO certification consulting",
        "Product certification consulting",
        "ESG and sustainability consulting",
        "Customer and third-party audit compliance",
      ],
      sameAs: [SITE_URL],
    });
    const pageSchema = document.head.querySelector("script#sms-page-schema");
    if (jsonLd) setJsonLd("sms-page-schema", jsonLd);
    else if (pageSchema) pageSchema.remove();
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [title, description, path, keywords, jsonLd]);

  return null;
}
