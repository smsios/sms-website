import { motion } from "framer-motion";

// TODO: replace with your real profile URLs (same links used in Footer —
// consider moving these into data/content.js so both components share one source).
const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/yourhandle",
    color: "#E1306C",
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
    color: "#25D366",
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
    color: "#1877F2",
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
    color: "#0A66C2",
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

export default function SocialFloat() {
  return (
    <>
      <div className="social-rail" aria-label="Social media links">
        {socialLinks.filter((social) => social.label !== "WhatsApp").map((social, index) => (
          <motion.a key={social.label} href={social.href} target="_blank" rel="noreferrer noopener" aria-label={social.label} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 + index * 0.1 }}>
            {social.icon}
          </motion.a>
        ))}
      </div>
      <div className="whatsapp-float-wrap">
      <a
        href="https://wa.me/919558470900"
        target="_blank"
        rel="noreferrer noopener"
        className="whatsapp-float flex items-center justify-center rounded-full text-white shadow-xl transition hover:-translate-y-1"
        aria-label="Chat with SMS on WhatsApp"
      >
        {socialLinks.find((social) => social.label === "WhatsApp").icon}
      </a>
      </div>
    </>
  );
}
