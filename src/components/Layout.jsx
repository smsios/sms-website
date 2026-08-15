import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import EnquiryModal from "./EnquiryModal.jsx";
import SocialFloat from "./SocialFloat.jsx";

export default function Layout() {
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div id="top" className="flex min-h-screen flex-col overflow-x-hidden bg-paper-50 text-navy-950">
      <motion.div className="motion-progress" style={{ scaleX: progress }} />
      <Navbar onEnquire={() => setModalOpen(true)} />
      <main className="site-main flex-1">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <Outlet context={{ onEnquire: () => setModalOpen(true) }} />
        </motion.div>
      </main>
      <Footer />
      <EnquiryModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <SocialFloat />
    </div>
  );
}
