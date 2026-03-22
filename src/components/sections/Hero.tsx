"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import Header from "@/components/sections/Header";
import HeroHeader from "./hero-header";

function Bubble({
  size,
  top,
  left,
  opacity,
}: {
  size: number;
  top: string;
  left: string;
  opacity: number;
}) {
  return (
    <div
      className="absolute rounded-full border border-white/20 bg-white/5 backdrop-blur-[1px]"
      style={{ width: size, height: size, top, left, opacity }}
    />
  );
}

export default function Hero() {
  const [showStickyHeader, setShowStickyHeader] = useState(false);

  useEffect(() => {
    const updateHeaderState = () => {
      const heroHeader = document.getElementById("hero-header");

      if (!heroHeader) {
        setShowStickyHeader(window.scrollY > 120);
        return;
      }

      const { bottom } = heroHeader.getBoundingClientRect();
      setShowStickyHeader(bottom <= 0);
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });
    window.addEventListener("resize", updateHeaderState);

    return () => {
      window.removeEventListener("scroll", updateHeaderState);
      window.removeEventListener("resize", updateHeaderState);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#0b1f3a]">
      <HeroHeader />
      <Header />
      {/* Right-side background image */}
      <div className="absolute right-0 top-0 w-[55%] h-full hidden md:block">
        <Image
          src="/asset/hero-image.jpg"
          alt="Duct cleaning technician at work"
          fill
          className="object-cover object-center"
          priority
          sizes="55vw"
        />
        {/* Fade from left so it blends into the blue */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f3a] via-[#0b1f3a]/55 to-transparent" />
        {/* Subtle bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0b1f3a]/60 to-transparent z-10" />

        {/* Foreground overlay image */}
        <Image
          src="/asset/hero-image-tech.png"
          alt="Duct cleaning technician overlay"
          fill
          className="object-contain object-bottom z-20 origin-bottom md:scale-[0.85] md:translate-x-[20%] lg:scale-[0.75] lg:translate-x-[15%] xl:scale-[0.7] xl:translate-x-0"
          priority
          sizes="(max-width: 1024px) 80vw, 60vw"
        />
      </div>

      {/* Blue gradient covering the left half */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f3a] via-[#0b1f3a]/90 to-transparent" />

      {/* Decorative bubbles */}
      <Bubble size={160} top="12%" left="1%" opacity={0.35} />
      <Bubble size={80} top="28%" left="9%" opacity={0.3} />
      <Bubble size={50} top="18%" left="18%" opacity={0.2} />
      <Bubble size={110} top="58%" left="3%" opacity={0.25} />
      <Bubble size={200} top="68%" left="-6%" opacity={0.15} />
      <Bubble size={45} top="45%" left="22%" opacity={0.18} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-52 pb-48">
        <div className="max-w-xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-blue-300 text-base">✦</span>
            <span className="text-blue-200 text-[13px] font-bold uppercase tracking-[2px]">
              Expert Air Duct Cleaning in Tampa
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading font-extrabold text-white text-[52px] md:text-[62px] leading-[1.05] mb-6">
            Clean Ducts.
            <br />
            <span className="text-[#2EA3F2]">Breathe Easy,</span>
            <br />
            Every Time.
          </h1>

          {/* Sub */}
          <p className="text-blue-100/75 text-[17px] leading-relaxed mb-10 max-w-[440px]">
            Tampa Bay&apos;s most trusted air duct cleaning service. We remove
            years of built-up dust, mold, and allergens so your family breathes
            clean, healthy air every single day.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="#quote"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold text-[13px] uppercase tracking-wider px-7 py-3.5 rounded-full transition-colors shadow-lg shadow-blue-900/40"
            >
              Get Free Quote <ArrowRight size={15} />
            </a>
            <a
              href="tel:8139232906"
              className="inline-flex items-center gap-3 text-white font-bold text-[16px] hover:text-blue-300 transition-colors"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white/30 bg-white/10">
                <Phone size={16} />
              </span>
              (813) 923-2906
            </a>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-4 mt-10 pt-8 border-t border-white/10">
            <div className="flex -space-x-2">
              {["JS", "MT", "SO", "KL"].map((init) => (
                <div
                  key={init}
                  className="w-9 h-9 rounded-full bg-[#152F45] border-2 border-[#0b1f3a] flex items-center justify-center text-[10px] font-bold text-white"
                >
                  {init}
                </div>
              ))}
            </div>
            <div>
              <div className="text-yellow-400 text-sm leading-none">★★★★★</div>
              <p className="text-blue-200/70 text-[12px] mt-0.5">
                <strong className="text-white">114+ homeowners</strong> give us
                5 stars
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Premium Wave Overlay */}
      <div className="absolute bottom-[-1px] left-0 right-0 z-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto min-h-[60px] md:min-h-[120px] block"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(255, 255, 255, 0.4)"
            d="M0,64L48,58.7C96,53,192,43,288,53.3C384,64,480,96,576,101.3C672,107,768,85,864,80C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
          <path
            fill="#ffffff"
            d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,58.7C672,43,768,21,864,26.7C960,32,1056,64,1152,69.3C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>

    </section>
  );
}
