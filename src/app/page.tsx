"use client"

import { useState, useEffect } from "react";
import Footer from "@/components/Footer.tsx";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LatestArticles from "@/components/LatestArticles";
import WhyEasybank from "@/components/WhyEasybank";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  const [sidebarOpened, setSidebarOpened] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpened(prev => !prev)
  }

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setSidebarOpened(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-full flex flex-col">
      <Header toggleSidebar={handleSidebarToggle} sidebarOpened={sidebarOpened} />
      <div className="w-full relative">
        <Sidebar isOpen={sidebarOpened} />
        <div className={`relative z-30 ${sidebarOpened ? "pointer-events-none" : "pointer-events-auto"}`}>
          <Hero />
          <WhyEasybank />
          <LatestArticles />
          <Footer />
        </div>
      </div>
    </div>
  );
}
