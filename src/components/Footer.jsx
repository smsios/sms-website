import { Link } from "react-router-dom";
import { company } from "../data/content.js";

const columns = [
  {
    heading: "Company",
    links: [
      { to: "/", label: "Home" },
      { to: "/about", label: "About" },
      { to: "/services", label: "Services" },
      { to: "/blog", label: "Blog" },
      { to: "/faq", label: "FAQ" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Popular Standards",
    links: [
      { to: "/services/management-system-certification/iso-9001", label: "ISO 9001" },
      { to: "/services/management-system-certification/iso-14001", label: "ISO 14001" },
      { to: "/services/management-system-certification/iso-45001", label: "ISO 45001" },
      { to: "/services/food-and-packaging-safety/fssc-22000", label: "FSSC 22000" },
      { to: "/services/automotive-aerospace-and-labs/iatf-16949", label: "IATF 16949" },
      { to: "/services/product-and-country-specific/ce-mark", label: "CE Marking" },
    ],
  },
  {
    heading: "Compliance",
    links: [
      { to: "/services", label: "Customer Audit" },
      { to: "/services", label: "Supplier Audit" },
      { to: "/services", label: "SMETA / SEDEX" },
      { to: "/services", label: "EcoVadis" },
      { to: "/services", label: "GHG / Carbon Footprint" },
      { to: "/services", label: "HALAL / KOSHER" },
    ],
  },
];

// TODO: replace these placeholder URLs with your real social profiles.
const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/yourhandle",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17.3" cy="6.7" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919558470900",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3.5a8.5 8.5 0 0 0-7.35 12.76L3.5 20.5l4.36-1.15A8.5 8.5 0 1 0 12 3.5Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M8.6 8.9c.15-.5.5-.5.8-.5h.5c.2 0 .4.05.55.4l.6 1.4c.1.25.05.45-.1.6l-.4.45c-.15.15-.1.4 0 .6.4.7 1.2 1.5 1.9 1.9.2.1.45.15.6 0l.45-.4c.15-.15.35-.2.6-.1l1.4.6c.35.15.4.35.4.55v.5c0 .3 0 .65-.5.8-1 .3-2.3-.2-3.6-1.2-1.5-1.1-2.6-2.6-3-3.9-.2-.65-.2-1.35.35-1.7Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/yourpage",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M14 9.5V8c0-.6.4-1 1-1h1.5V4h-2C12 4 11 5.6 11 7.5v2H9V13h2v7h3v-7h2.2l.3-3.5H14Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/yourcompany",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7.5 10v6.5M7.5 7.5v.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path
          d="M11 16.5V13c0-1.4 1-2.3 2.2-2.3 1.2 0 1.8.8 1.8 2.3v3.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path d="M11 10.2V16.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
   <footer className="site-footer bg-[var(--editorial-ink)] py-10 text-[var(--editorial-cream)]">
  <div className="container-page">
    {/* Use a single column on mobile, switch to grid on md+ */}
    <div className="flex flex-col gap-8 md:grid md:grid-cols-[1.2fr_1.8fr] md:gap-10">
      <div>
        <Link to="/" className="flex w-fit items-center gap-3 focus-ring">
          <img src="/assets/brand/sms-logo-mark.png" alt="" className="h-11 w-auto bg-white p-1" />
          <span>
            <span className="block font-display text-base font-semibold">System Management Services</span>
            <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.2em] text-white/55">
              {company.tagline}
            </span>
          </span>
        </Link>
        <p className="mt-5 max-w-sm text-sm leading-6 text-white/62">{company.address}</p>
        <div className="mt-5 space-y-1 text-sm">
          <a href="tel:+919558470900" className="block font-semibold text-white">
            +91 95584 70900
          </a>
          <a href={`mailto:${company.email}`} className="block text-white/70">
            {company.email}
          </a>
        </div>
        {/* Social links wrap on mobile */}
       <div className="mt-5 flex flex-wrap gap-3">
  {socialLinks.map((social) => (
    <a
      key={social.label}
      href={social.href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={social.label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-white/40 hover:text-white focus-ring"
    >
      {social.icon}
    </a>
  ))}
</div>

      </div>

      <div className="grid gap-7 sm:grid-cols-3 sm:gap-6 md:gap-8">
        {columns.map((column) => (
          <div key={column.heading} className="min-w-0">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/70 sm:text-xs sm:tracking-[0.2em]">
              {column.heading}
            </h3>
            <ul className="mt-3 space-y-1.5 sm:mt-4 sm:space-y-2">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-[13px] leading-snug text-white/62 transition hover:text-white sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* Footer bottom: stack on mobile */}
    <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
      <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
        <span>{company.website}</span>
        <span className="hidden text-white/25 sm:inline">|</span>
       <span>
  Made by{" "}
  <a
    href="https://bytebly.in"
    target="_blank"
    rel="noreferrer noopener"
    className="text-white/70 underline underline-offset-2 transition hover:text-white"
  >
    bytebly.in
  </a>
</span>

      </div>
    </div>
  </div>
</footer>
  );
}
