import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const services = [
  ["/services/certification", "Certification", "Browse standards by sector"],
  ["/services/consultancy", "Consultancy", "Implementation, documentation & audits"],
  ["/services/training", "Training", "Awareness, audit & improvement training"],
];

export default function Navbar({ onEnquire }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8);
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    const closeOnEscape = (event) => event.key === "Escape" && setServicesOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  function closeMenus() { setMobileOpen(false); setServicesOpen(false); }
  return <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
    <div className="container header-inner">
      <Link className="brand" to="/" onClick={closeMenus} aria-label="System Management Services home"><img src="/assets/brand/sms-logo-footer.png" alt="System Management Services" /></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <NavLink to="/" end>Home</NavLink><NavLink to="/about">About</NavLink>
        <div className="nav-dropdown" onMouseLeave={() => setServicesOpen(false)}>
          <div className="service-nav-link"><NavLink to="/services" onClick={() => setServicesOpen(false)}>Services</NavLink><button type="button" aria-label="Open services menu" aria-expanded={servicesOpen} onClick={() => setServicesOpen((value) => !value)}>⌄</button></div>
          {servicesOpen && <div className="dropdown-panel">{services.map(([to, title, copy], index) => <Link key={to} to={to} onClick={() => setServicesOpen(false)}><span>0{index + 1}</span><div><strong>{title}</strong><small>{copy}</small></div><b>→</b></Link>)}</div>}
        </div>
        <NavLink to="/events">Gallery</NavLink><NavLink to="/contact">Contact</NavLink>
      </nav>
      <div className="header-actions"><button type="button" className="button button-small header-cta" onClick={onEnquire}>Talk to an expert</button><button type="button" className="menu-button" aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen} onClick={() => setMobileOpen((value) => !value)}><span /><span /><span /></button></div>
    </div>
    {mobileOpen && <nav className="mobile-nav" aria-label="Mobile navigation"><div className="container"><NavLink to="/" end onClick={closeMenus}>Home</NavLink><NavLink to="/about" onClick={closeMenus}>About</NavLink><NavLink to="/services" onClick={closeMenus}>Services</NavLink><div className="mobile-service-links">{services.map(([to, title]) => <Link key={to} to={to} onClick={closeMenus}>{title}</Link>)}</div><NavLink to="/events" onClick={closeMenus}>Gallery</NavLink><NavLink to="/contact" onClick={closeMenus}>Contact</NavLink><button type="button" className="button" onClick={() => { closeMenus(); onEnquire(); }}>Talk to an expert</button></div></nav>}
  </header>;
}
