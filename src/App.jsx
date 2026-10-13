import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import EventsGalleryPage from "./pages/EventsGallery.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import { CertificationDirectory, CertificationSectorDetail, ConsultancyPage, TrainingServicePage } from "./pages/ServiceViews.jsx";

export default function App() {
  return <Routes><Route element={<Layout />}>
    <Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/services" element={<Services />} /><Route path="/services/certification" element={<CertificationDirectory />} /><Route path="/services/certification/:sectorSlug" element={<CertificationSectorDetail />} /><Route path="/services/consultancy" element={<ConsultancyPage />} /><Route path="/services/training" element={<TrainingServicePage />} /><Route path="/events" element={<EventsGalleryPage />} /><Route path="/contact" element={<Contact />} />
    <Route path="/certifications" element={<Navigate to="/services/certification" replace />} /><Route path="/training" element={<Navigate to="/services/training" replace />} /><Route path="/industries" element={<Navigate to="/services/certification" replace />} /><Route path="/blog/*" element={<Navigate to="/" replace />} /><Route path="/faq" element={<Navigate to="/contact" replace />} /><Route path="/privacy-policy" element={<Navigate to="/" replace />} /><Route path="/terms" element={<Navigate to="/" replace />} /><Route path="*" element={<NotFound />} />
  </Route></Routes>;
}
