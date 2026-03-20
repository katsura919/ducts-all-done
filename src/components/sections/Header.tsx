"use client";

import Image from "next/image";
import {
  ChevronDown,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Search,
  ShoppingCart,
  Twitter,
} from "lucide-react";

export default function Header() {
  const menuItems = [
    "Home",
    "Services",
    "Portfolio",
    "Pages",
    "News",
    "Contact",
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-[1200px] px-4 pt-3 md:px-6 md:pt-5">
        <div className="rounded-b-[26px] bg-[#0d7ed9] text-white shadow-xl shadow-[#0b1f3a]/30">
          <div className="flex items-center gap-4 px-4 py-3 md:px-8 md:py-4">
            <a href="#" className="mr-2 shrink-0">
              <Image
                src="/asset/logo.webp"
                alt="Ducts All Done"
                width={180}
                height={52}
                className="h-[36px] w-auto object-contain md:h-[44px]"
                priority
              />
            </a>

            <div className="hidden min-w-0 flex-1 items-center justify-center gap-6 md:flex lg:gap-10">
              <a
                href="tel:8139232906"
                className="flex items-center gap-2 border-r border-white/25 pr-6 lg:pr-10"
              >
                <Phone className="h-4 w-4" />
                <span className="text-[13px] font-semibold tracking-wide">
                  (813) 923-2906
                </span>
              </a>
              <a
                href="mailto:helpcleaning@gmail.com"
                className="flex items-center gap-2 border-r border-white/25 pr-6 lg:pr-10"
              >
                <Mail className="h-4 w-4" />
                <span className="text-[13px] font-semibold tracking-wide">
                  helpcleaning@gmail.com
                </span>
              </a>
              <a href="#contact" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="text-[13px] font-semibold tracking-wide">
                  Tampa, Florida
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

          <div className="flex flex-wrap items-center justify-between gap-3 rounded-tl-[28px] rounded-br-[20px] bg-white px-4 py-3 text-[#152f45] md:flex-nowrap md:px-8 md:py-4">
            <nav className="order-2 flex w-full flex-wrap items-center justify-center gap-x-6 gap-y-2 md:order-1 md:w-auto md:justify-start lg:gap-8">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="inline-flex items-center gap-1 text-[13px] font-semibold uppercase tracking-wide transition-colors hover:text-[#0d7ed9]"
                >
                  {item}
                  {item !== "Contact" && (
                    <ChevronDown className="h-3.5 w-3.5" />
                  )}
                </a>
              ))}
            </nav>

            <div className="order-1 flex items-center gap-4 md:order-2">
              <button
                aria-label="Search"
                className="text-[#152f45] transition-colors hover:text-[#0d7ed9]"
              >
                <Search className="h-5 w-5" />
              </button>

              <button
                aria-label="Cart"
                className="relative text-[#152f45] transition-colors hover:text-[#0d7ed9]"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -right-2.5 -top-2.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#f4d34f] px-1 text-[10px] font-bold text-[#152f45]">
                  1
                </span>
              </button>

              <a
                href="#quote"
                className="inline-flex items-center justify-center rounded-xl bg-[#f4d34f] px-4 py-2 text-[12px] font-bold uppercase tracking-[0.09em] text-[#152f45] transition-colors hover:bg-[#efc932] md:px-6 md:py-3"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>

        <div className="mt-2 block rounded-full bg-[#0d7ed9]/95 px-4 py-2 text-center text-[12px] font-semibold text-white md:hidden">
          <a href="tel:8139232906" className="inline-flex items-center gap-1.5">
            <Phone className="h-3.5 w-3.5" />
            (813) 923-2906
          </a>
        </div>
      </div>
    </header>
  );
}
