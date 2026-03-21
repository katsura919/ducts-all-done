"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Facebook,
  Linkedin,
  Mail,
  Menu,
  MapPin,
  Phone,
  Twitter,
  X,
} from "lucide-react";

export default function HeroHeader() {
  const menuItems = [
    "Home",
    "About Us",
    "Services",
    "Service Areas",
    "Reviews",
    "Contact",
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header id="hero-header" className="absolute top-0 left-0 right-0 z-50">
      <div className="hidden w-full md:block">
        <div className="rounded-b-[26px] bg-blue-500 text-white shadow-xl shadow-[#0b1f3a]/30">
          <div className="flex items-center gap-4 px-4 py-3 md:px-8 md:py-2">
            <div className="hidden min-w-0 flex-1 items-center justify-center gap-6 md:flex lg:gap-10">
              <a
                href="tel:8139232906"
                className="flex items-center gap-2 border-r border-white/25 pr-6 lg:pr-10"
              >
                <Phone className="h-4 w-4 text-primary-foreground" />
                <span className="text-[13px] font-semibold tracking-wide text-primary-foreground">
                  We Are Open!
                </span>
              </a>
              <a
                href="tel:8139232906"
                className="flex items-center gap-2 border-r border-white/25 pr-6 lg:pr-10"
              >
                <Phone className="h-4 w-4 text-primary-foreground" />
                <span className="text-[13px] font-semibold tracking-wide text-primary-foreground">
                  (813) 923-2906
                </span>
              </a>
              <a
                href="mailto:helpcleaning@gmail.com"
                className="flex items-center gap-2 border-r border-white/25 pr-6 lg:pr-10"
              >
                <Mail className="h-4 w-4 text-primary-foreground" />
                <span className="text-[13px] font-semibold tracking-wide text-primary-foreground">
                  office@ductsalldone.com
                </span>
              </a>
              <a href="#contact" className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary-foreground" />
                <span className="text-[13px] font-semibold tracking-wide text-primary-foreground">
                  13542 N Florida Ave. #211B Tampa, FL 33613
                </span>
              </a>
            </div>

            <div className="hidden items-center gap-2 md:flex">
              {[Facebook, Twitter, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-label="social link"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-white/90 transition-colors hover:bg-white hover:text-[#0d7ed9]"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-2 flex w-[96%] items-center justify-between gap-3 rounded-bl-[22px] rounded-br-[22px] bg-white px-4 py-3 text-[#152f45] shadow-lg shadow-[#0b1f3a]/20 md:mt-0 md:w-[90%] md:px-8 md:py-4 lg:w-[84%]">
        <a href="#" className="shrink-0">
          <Image
            src="/asset/logo.png"
            alt="Ducts All Done"
            width={180}
            height={52}
            className="h-[34px] w-auto object-contain md:h-[44px]"
            priority
          />
        </a>

        <nav className="hidden items-center justify-start gap-x-6 md:flex lg:gap-8">
          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-primary inline-flex items-center gap-1 text-[13px] font-semibold uppercase tracking-wide transition-colors hover:text-[#0d7ed9]"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <a
            href="#quote"
            className="inline-flex items-center justify-center rounded-xl bg-[#f4d34f] px-3 py-2 text-[11px] font-bold uppercase tracking-[0.09em] text-[#152f45] transition-colors hover:bg-[#efc932] sm:px-4 sm:text-[12px] md:px-6 md:py-3"
          >
            Get a Quote
          </a>

          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#dce6ef] text-[#152f45] transition-colors hover:bg-[#f4f7fa] md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[60] bg-black/45 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <aside
        className={`fixed left-0 top-0 z-[70] h-dvh w-[82%] max-w-[320px] bg-white p-5 shadow-2xl transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="mb-6 flex items-center justify-between">
          <Image
            src="/asset/logo.webp"
            alt="Ducts All Done"
            width={150}
            height={42}
            className="h-[32px] w-auto object-contain"
          />
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setIsMobileMenuOpen(false)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#dce6ef] text-[#152f45]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-1">
          {menuItems.map((item) => (
            <a
              key={`mobile-${item}`}
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-[13px] font-semibold uppercase tracking-wide text-[#152f45] transition-colors hover:bg-[#f4f7fa] hover:text-[#0d7ed9]"
            >
              {item}
            </a>
          ))}
        </nav>
      </aside>
    </header>
  );
}
