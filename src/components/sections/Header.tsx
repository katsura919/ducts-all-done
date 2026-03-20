"use client";

import { useState } from "react";
import { Phone, MessageSquare, X } from "lucide-react";

function fmtPhone(raw: string) {
  const v = raw.replace(/\D/g, "").slice(0, 10);
  if (v.length >= 7) return `(${v.slice(0, 3)}) ${v.slice(3, 6)}-${v.slice(6)}`;
  if (v.length >= 4) return `(${v.slice(0, 3)}) ${v.slice(3)}`;
  return v;
}

export default function Header() {
  const [phone, setPhone] = useState("");
  const [captured, setCaptured] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [cbPhone, setCbPhone] = useState("");
  const [cbName, setCbName] = useState("");

  function submitCapture() {
    if (phone.replace(/\D/g, "").length < 10) return;
    setCaptured(true);
  }

  function submitCallback() {
    setPanelOpen(false);
    setCbPhone("");
    setCbName("");
  }

  return (
    <>
      {/* Layer 1: Status micro-bar */}
      <div className="fixed top-0 left-0 right-0 z-[1002] h-[30px] bg-[#071529] hidden md:flex items-center justify-center gap-5 text-[11.5px] text-white/50 border-b border-white/5">
        <div className="flex items-center gap-1.5 whitespace-nowrap">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <strong className="text-white/80 font-semibold">Open Now</strong>
          <span>· Mon–Thu &amp; Sun 6AM–9PM</span>
        </div>
        <div className="w-px h-3 bg-white/10" />
        <div>⭐ <strong className="text-white/80">5.0</strong> · 114 Google Reviews</div>
        <div className="w-px h-3 bg-white/10" />
        <div>📍 Serving Tampa Bay &amp; 4 Counties</div>
        <div className="w-px h-3 bg-white/10" />
        <div>🏅 IICRC &amp; EPA Certified</div>
      </div>

      {/* Layer 2: Main nav */}
      <header className="fixed top-0 md:top-[30px] left-0 right-0 z-[1001] bg-[#0B1F3A] flex items-center justify-between px-4 md:px-6 h-[58px] shadow-[0_2px_16px_rgba(0,0,0,0.28)] gap-4">
        {/* Logo */}
        <div className="font-heading font-extrabold text-xl text-white whitespace-nowrap flex-shrink-0 leading-none">
          Ducts <span className="text-[#2EA3F2]">All Done</span>
          <small className="block text-[10px] font-normal text-white/35 tracking-widest uppercase mt-0.5">
            Tampa Bay, FL
          </small>
        </div>

        {/* Phone capture — desktop only */}
        {!captured ? (
          <div className="hidden md:flex flex-1 max-w-[410px] items-center bg-white/7 border border-white/13 rounded-lg overflow-hidden">
            <input
              type="tel"
              placeholder="📞 Your phone number — get a free quote"
              maxLength={14}
              value={phone}
              onChange={(e) => setPhone(fmtPhone(e.target.value))}
              onKeyDown={(e) => e.key === "Enter" && submitCapture()}
              className="flex-1 min-w-0 bg-transparent border-none outline-none px-3 h-[38px] text-white text-[13px] placeholder:text-white/36"
            />
            <div className="w-px h-[18px] bg-white/13" />
            <button
              onClick={submitCapture}
              className="bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold text-[13.5px] px-4 h-[38px] whitespace-nowrap transition-colors cursor-pointer"
            >
              Get Free Quote
            </button>
          </div>
        ) : (
          <div className="hidden md:flex flex-1 max-w-[410px] items-center gap-1.5 bg-green-900/20 border border-green-400/30 rounded-lg px-4 h-[38px] text-[13px] font-semibold text-green-400">
            ✓ Got it! We&apos;ll call you within 15 minutes.
          </div>
        )}

        {/* Right actions */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => setPanelOpen(!panelOpen)}
            className="hidden md:inline-flex items-center gap-1.5 border border-white/22 text-white/82 text-[13px] font-medium px-3 py-1.5 rounded-md bg-transparent hover:border-white/50 hover:text-white hover:bg-white/6 transition-all cursor-pointer"
          >
            <MessageSquare size={13} />
            Text Me Back
          </button>
          <a
            href="tel:8139232906"
            className="inline-flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold text-base px-4 py-2 rounded-md transition-all hover:scale-[1.02]"
          >
            <Phone size={15} />
            <span className="hidden sm:inline">813-923-2906</span>
            <span className="sm:hidden">Call Now</span>
          </a>
        </div>
      </header>

      {/* Layer 3: Offer strip */}
      <div className="fixed top-[58px] md:top-[88px] left-0 right-0 z-[1000] h-[34px] bg-gradient-to-r from-[#132e5e] via-[#0d2248] to-[#132e5e] border-b border-[#2EA3F2]/18 hidden md:flex items-center justify-center gap-6">
        <div className="flex items-center gap-1.5 text-[12px] text-white/72 whitespace-nowrap">
          <span className="bg-orange-500 text-white font-heading font-bold text-[10px] tracking-wide uppercase px-1.5 py-0.5 rounded-[3px]">Free</span>
          Inspection with every service
        </div>
        <span className="text-white/15 text-lg">|</span>
        <div className="flex items-center gap-1.5 text-[12px] text-white/72 whitespace-nowrap">
          <span className="bg-green-700 text-white font-heading font-bold text-[10px] tracking-wide uppercase px-1.5 py-0.5 rounded-[3px]">Same-Day</span>
          Appointments available
        </div>
        <span className="text-white/15 text-lg">|</span>
        <div className="flex items-center gap-1.5 text-[12px] text-white/72 whitespace-nowrap">
          <span className="bg-blue-700 text-white font-heading font-bold text-[10px] tracking-wide uppercase px-1.5 py-0.5 rounded-[3px]">100%</span>
          Satisfaction guaranteed
        </div>
        <span className="text-white/15 text-lg hidden lg:block">|</span>
        <div className="hidden lg:flex items-center gap-1.5 text-[12px] text-white/72 whitespace-nowrap">
          💳 Financing available
        </div>
      </div>

      {/* Callback dropdown panel */}
      {panelOpen && (
        <div className="fixed top-[122px] right-6 z-[2000] bg-white border border-gray-200 rounded-xl p-6 w-[290px] shadow-[0_16px_48px_rgba(11,31,58,0.22)] animate-in slide-in-from-top-2 duration-150">
          <button
            onClick={() => setPanelOpen(false)}
            className="absolute top-3 right-3.5 bg-none border-none text-lg text-gray-400 hover:text-[#0B1F3A] cursor-pointer"
          >
            <X size={18} />
          </button>
          <h4 className="font-heading font-extrabold text-xl text-[#0B1F3A] mb-1">We&apos;ll Text You Back</h4>
          <p className="text-[12px] text-gray-500 mb-4 leading-[1.45]">
            Enter your number and we&apos;ll reach out within 15 minutes to confirm your appointment.
          </p>
          <input
            type="tel"
            placeholder="(813) 555-0000"
            maxLength={14}
            value={cbPhone}
            onChange={(e) => setCbPhone(fmtPhone(e.target.value))}
            className="w-full px-3 py-2.5 border-[1.5px] border-gray-200 focus:border-blue-600 rounded-lg text-[14px] text-[#0B1F3A] outline-none mb-2.5 transition-colors"
          />
          <input
            type="text"
            placeholder="Your first name"
            value={cbName}
            onChange={(e) => setCbName(e.target.value)}
            className="w-full px-3 py-2.5 border-[1.5px] border-gray-200 focus:border-blue-600 rounded-lg text-[14px] text-[#0B1F3A] outline-none mb-2.5 transition-colors"
          />
          <button
            onClick={submitCallback}
            className="w-full py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold text-base rounded-lg transition-colors cursor-pointer"
          >
            Send My Number →
          </button>
          <div className="flex items-center gap-1.5 mt-3.5 pt-3 border-t border-gray-200 text-[11.5px] text-gray-500">
            <span className="text-yellow-400 text-[11px]">★★★★★</span>
            <span>114 five-star Google reviews</span>
          </div>
        </div>
      )}
    </>
  );
}
