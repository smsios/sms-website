import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import EnquiryModal from "./EnquiryModal.jsx";
import QuickActions from "./QuickActions.jsx";

export default function Layout() {
  const [modalOpen, setModalOpen] = useState(false);
  const openEnquiry = () => setModalOpen(true);
  return <div className="site-shell"><Navbar onEnquire={openEnquiry} /><main className="site-main"><Outlet context={{ onEnquire: openEnquiry }} /></main><Footer /><QuickActions /><EnquiryModal open={modalOpen} onClose={() => setModalOpen(false)} /></div>;
}
