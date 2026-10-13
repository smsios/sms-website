import { Link } from "react-router-dom";
import { company } from "../data/content.js";

const encodedSiteUrl = encodeURIComponent("https://www.isosmservices.in");
const footerSocialLinks = [
  {
    label: "Chat with SMS on WhatsApp",
    href: "https://wa.me/919558470900",
    icon: <path d="M12 3.5a8.5 8.5 0 0 0-7.35 12.76L3.5 20.5l4.36-1.15A8.5 8.5 0 1 0 12 3.5Zm0 1.7a6.8 6.8 0 0 1 0 13.6c-1.1 0-2.16-.27-3.1-.78l-.52-.28-2.33.62.62-2.27-.3-.53A6.8 6.8 0 0 1 12 5.2Zm-2.5 2.7c-.22 0-.56.08-.85.4-.3.33-1.12 1.1-1.12 2.67s1.14 3.1 1.3 3.3c.16.2 2.2 3.5 5.42 4.77 2.68 1.06 3.23.85 3.81.8.58-.06 1.88-.77 2.15-1.51.27-.74.27-1.38.19-1.51-.08-.14-.3-.22-.63-.39-.33-.16-1.95-.96-2.25-1.07-.3-.11-.52-.16-.74.17-.22.33-.85 1.07-1.04 1.29-.19.22-.38.25-.71.08-.33-.16-1.4-.52-2.66-1.65-.98-.87-1.64-1.95-1.83-2.28-.19-.33-.02-.51.14-.67.14-.14.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.16-.73-1.79-1-2.45-.26-.63-.53-.55-.73-.56H9.5Z" />,
  },
  {
    label: "Share SMS on Facebook",
    href: `https://www.facebook.com/sharer/sharer.php?u=${encodedSiteUrl}`,
    icon: <path d="M13.4 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.6V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.2V13H10v8h3.4Z" />,
  },
  {
    label: "Share SMS on LinkedIn",
    href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedSiteUrl}`,
    icon: <><path d="M5 8.6a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4ZM3.6 10h2.8v10H3.6zM10 10H7.3v10h2.8v-5.2c0-1.37.26-2.7 1.96-2.7 1.68 0 1.7 1.58 1.7 2.79V20h2.8v-5.77c0-2.84-.61-5.02-3.93-5.02-1.6 0-2.67.88-3.1 1.72H10z" /></>,
  },
];

export default function Footer() {
  return <footer className="site-footer"><div className="container footer-main"><div className="footer-brand"><img src="/assets/brand/sms-logo-footer.png" alt="System Management Services" /><p>{company.tagline}</p><span>{company.address}</span><nav className="footer-socials" aria-label="Social media links">{footerSocialLinks.map((social) => <a key={social.label} href={social.href} aria-label={social.label} title={social.label} target="_blank" rel="noreferrer noopener"><svg viewBox="0 0 24 24" aria-hidden="true">{social.icon}</svg></a>)}</nav></div><div><h2>Navigate</h2><Link to="/">Home</Link><Link to="/about">About SMS</Link><Link to="/services">Services</Link><Link to="/events">Gallery</Link><Link to="/contact">Contact</Link></div><div><h2>Services</h2><Link to="/services/certification">Certification</Link><Link to="/services/consultancy">Consultancy</Link><Link to="/services/training">Training</Link></div><div><h2>Contact SMS</h2><a href="tel:+919558470900">+91 95584 70900</a><a href="tel:+919725058971">+91 97250 58971</a><a href="mailto:avinash.smservices@gmail.com">avinash.smservices@gmail.com</a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} System Management Services</span><span>Ahmedabad · Gujarat · India</span></div></footer>;
}
