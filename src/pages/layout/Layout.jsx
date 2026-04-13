import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Topbar from "../../components/Topbar";
import Navbar from "../../components/Navbar";
import { EnquiryModal } from "../../components/Model";
import "../../style/index.css";

export default function Layout() {
  const [solid, setSolid] = useState(false);
  const [modal, setModal] = useState(false);
  useEffect(() => {
    const h = () => setSolid(window.scrollY > 60);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <>
      <Topbar />
      <Navbar solid={solid} onQuote={() => setModal(true)} />
      <Outlet />
      <Footer />
      <EnquiryModal open={modal} onClose={() => setModal(false)} />
    </>
  );
}
