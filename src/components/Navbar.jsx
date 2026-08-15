import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar({ onEnquire }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navClass = ({ isActive }) =>
    `px-3 py-2 text-sm font-semibold transition ${
      isActive ? "bg-[var(--editorial-ink)] text-[var(--editorial-cream)]" : "text-[var(--editorial-muted)] hover:bg-black/5 hover:text-[var(--editorial-ink)]"
    }`;

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled || open ? "border-b border-black/15 bg-[var(--editorial-cream)]/92 shadow-sm backdrop-blur-xl" : "bg-[var(--editorial-cream)]/72 backdrop-blur-md"
      }`}
    >
      <div className="container-page flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3 rounded-md focus-ring" onClick={() => setOpen(false)}>
          <img src="/assets/brand/sms-logo-mark.png" alt="System Management Services logo" className="h-10 w-auto" />
          <span className="hidden leading-none sm:flex sm:flex-col">
            <span className="font-display text-sm font-semibold text-[var(--editorial-ink)]">System Management Services</span>
            <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--editorial-red)]">
              Your Needs, Our Services
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 border border-black/15 bg-white/45 p-1 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"} className={navClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={onEnquire}
            className="hidden bg-[var(--editorial-ink)] px-4 py-2.5 text-sm font-semibold text-[var(--editorial-cream)] shadow-sm transition hover:-translate-y-0.5 hover:bg-[var(--editorial-red)] focus-ring sm:inline-flex"
          >
            Enquire Now
          </button>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex min-h-11 min-w-11 items-center justify-center border border-black/15 bg-white/70 p-2 text-[var(--editorial-ink)] focus-ring md:hidden"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-black/15 bg-[var(--editorial-cream)] md:hidden"
          >
            <div className="container-page flex flex-col gap-2 py-4">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setOpen(false)}
                  className={navClass}
                >
                  {link.label}
                </NavLink>
              ))}
              <button
                onClick={() => {
                  setOpen(false);
                  onEnquire();
                }}
                className="mt-2 w-full bg-[var(--editorial-ink)] px-4 py-3 text-sm font-semibold text-[var(--editorial-cream)]"
              >
                Enquire Now
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
