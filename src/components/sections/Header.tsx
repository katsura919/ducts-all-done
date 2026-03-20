"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
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
    <header className="px-3 pt-3 md:px-6 md:pt-4">
      <nav className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-3 rounded-2xl bg-white px-4 py-3 shadow-lg shadow-[#0b1f3a]/20 md:rounded-full md:px-6 md:py-3.5">
        <a href="#" className="shrink-0">
          <Image
            src="/asset/logo.webp"
            alt="Ducts All Done"
            width={160}
            height={44}
            className="h-[40px] w-auto object-contain"
            priority
          />
        </a>

        <div className="hidden items-center gap-7 md:flex lg:gap-8">
          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-[13px] font-semibold uppercase tracking-wide text-[#152f45] transition-colors hover:text-[#0d7ed9]"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href="#quote"
            className="inline-flex items-center justify-center rounded-xl bg-[#f4d34f] px-3 py-2 text-[11px] font-bold uppercase tracking-[0.09em] text-[#152f45] transition-colors hover:bg-[#efc932] sm:px-4 sm:text-[12px] md:px-5 md:py-2.5"
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
      </nav>

      <div
        className={`fixed inset-0 z-[80] bg-black/45 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <aside
        className={`fixed left-0 top-0 z-[90] h-dvh w-[82%] max-w-[320px] bg-white p-5 shadow-2xl transition-transform duration-300 md:hidden ${
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
