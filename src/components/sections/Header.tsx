"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, X, Menu } from "lucide-react";
import StickyBannerDemo
 from "../sticky-banner-demo";
import { div } from "motion/react-m";
const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Reviews", href: "#reviews" },
  { label: "Service Areas", href: "#service-area" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#quote" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 md:top-[28px] left-0 right-0 z-[1001] bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm h-[64px] flex items-center px-5 md:px-8 gap-6">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <Image
            src="/asset/logo.webp"
            alt="Ducts All Done"
            width={160}
            height={44}
            className="h-[40px] w-auto object-contain"
            priority
          />
        </a>

        {/* Nav links — desktop */}
        <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#152F45]/70 hover:text-[#152F45] text-[13.5px] font-medium px-3.5 py-2 rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA pill — desktop */}
        <a
          href="tel:8139232906"
          className="hidden md:flex flex-shrink-0 items-center gap-0 bg-[#152F45] hover:bg-[#1e3f5a] text-white font-heading font-bold text-[13.5px] rounded-full pl-5 pr-1 py-1 transition-all hover:shadow-md group"
        >
          <span className="pr-3">Get Free Quote</span>
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 group-hover:bg-orange-600 transition-colors flex-shrink-0">
            <Phone size={14} />
          </span>
        </a>

        {/* Mobile: call + hamburger */}
        <div className="flex items-center gap-2 ml-auto lg:hidden">
          <a
            href="tel:8139232906"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-orange-500 hover:bg-orange-600 text-white transition-colors"
          >
            <Phone size={15} />
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 text-[#152F45] hover:bg-gray-50 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div className="fixed top-[64px] md:top-[92px] left-0 right-0 z-[999] bg-white border-t border-gray-100 shadow-lg lg:hidden">
          <nav className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[#152F45]/80 hover:text-[#152F45] hover:bg-gray-50 text-[14px] font-medium px-6 py-3.5 border-b border-gray-100 last:border-0 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="px-6 py-4">
              <a
                href="tel:8139232906"
                className="flex items-center justify-center gap-2 bg-[#152F45] hover:bg-[#1e3f5a] text-white font-heading font-bold text-[14px] px-5 py-3 rounded-full transition-colors"
              >
                <Phone size={15} />
                Call 813-923-2906
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
