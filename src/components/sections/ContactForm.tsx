"use client";

import { useState } from "react";
import { Phone, CheckCircle } from "lucide-react";

const trustPoints = [
  "No obligation, no pressure",
  "Same-day service often available",
  "IICRC & EPA certified technicians",
  "100% satisfaction guarantee",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="bg-[#152F45] py-24 px-6 relative overflow-hidden" id="quote">

      <div className="max-w-[1100px] mx-auto grid md:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-center relative z-10">

        {/* ── LEFT: Trust copy ── */}
        <div className="md:py-4">
          <div className="inline-block bg-[#2EA3F2]/10 text-[#2EA3F2] text-[12px] font-bold tracking-[1.2px] uppercase px-4 py-1.5 rounded-lg mb-5 border border-[#2EA3F2]/20">
            Free Estimate
          </div>
          <h2 className="font-heading font-extrabold text-[38px] md:text-[46px] text-white leading-[1.1] mb-5">
            Get Your Free Estimate
          </h2>
          <p className="text-[17px] text-blue-100/70 mb-8 leading-[1.7] font-medium max-w-[440px]">
            Most homeowners get a quote response within 2 hours. Same-day
            service is often available — just let us know your schedule.
          </p>

          {/* Star rating */}
          <div className="flex items-center gap-3 mb-10">
            <div className="text-yellow-400 text-[18px] flex gap-0.5 tracking-widest">★★★★★</div>
            <span className="text-[15.5px] font-bold text-white">5.0</span>
            <span className="text-[14.5px] font-medium text-blue-100/60">· 114 Google Reviews</span>
          </div>

          {/* Phone CTA - Glassmorphism */}
          <a
            href="tel:8139232906"
            className="flex items-center gap-4.5 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-md rounded-2xl px-6 py-4.5 mb-10 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1 group w-fit cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-[#152F45] border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-[#2EA3F2] group-hover:border-transparent transition-all duration-300 shadow-inner">
              <Phone size={20} className="text-[#2EA3F2] group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <div className="text-[11.5px] font-semibold text-white/50 uppercase tracking-widest mb-0.5">Call us directly</div>
              <div className="font-heading font-extrabold text-[22px] text-white leading-tight">813-923-2906</div>
            </div>
          </a>

          {/* Trust bullets */}
          <ul className="space-y-4">
            {trustPoints.map((p) => (
              <li key={p} className="flex items-start gap-3.5 text-[15px] text-blue-100/80 font-medium">
                <CheckCircle size={20} className="text-[#2EA3F2] flex-shrink-0 mt-0.5" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* ── RIGHT: Form ── */}
        <div className="bg-white rounded-[24px] p-8 md:p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] border border-white/10 relative z-10 xl:ml-6">
          {submitted ? (
            <div className="text-center py-12 px-4">
              <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} className="stroke-[2.5px]" />
              </div>
              <h3 className="font-heading font-extrabold text-[28px] text-[#152F45] mb-3">
                Request Received!
              </h3>
              <p className="text-[16px] text-gray-500 font-medium leading-[1.6]">
                We&apos;ll get back to you within a few hours. Same-day service often available.
              </p>
            </div>
          ) : (
            <>
              <h3 className="font-heading font-extrabold text-[26px] text-[#152F45] mb-2 leading-tight">
                Tell Us About Your Home
              </h3>
              <p className="text-[15px] text-gray-500 mb-8 font-medium">
                Fill this out and we&apos;ll send you a free, no-pressure estimate.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12.5px] font-bold text-[#152F45] tracking-wide uppercase">First Name</label>
                    <input type="text" placeholder="John" required className="w-full px-4 py-3.5 border border-gray-200 focus:border-[#2EA3F2] focus:ring-4 focus:ring-[#2EA3F2]/10 rounded-xl text-[15px] text-[#152F45] outline-none bg-[#F8FAFC] focus:bg-white transition-all shadow-sm placeholder:text-gray-400 font-medium" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12.5px] font-bold text-[#152F45] tracking-wide uppercase">Last Name</label>
                    <input type="text" placeholder="Smith" required className="w-full px-4 py-3.5 border border-gray-200 focus:border-[#2EA3F2] focus:ring-4 focus:ring-[#2EA3F2]/10 rounded-xl text-[15px] text-[#152F45] outline-none bg-[#F8FAFC] focus:bg-white transition-all shadow-sm placeholder:text-gray-400 font-medium" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12.5px] font-bold text-[#152F45] tracking-wide uppercase">Email</label>
                    <input type="email" placeholder="john@email.com" required className="w-full px-4 py-3.5 border border-gray-200 focus:border-[#2EA3F2] focus:ring-4 focus:ring-[#2EA3F2]/10 rounded-xl text-[15px] text-[#152F45] outline-none bg-[#F8FAFC] focus:bg-white transition-all shadow-sm placeholder:text-gray-400 font-medium" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12.5px] font-bold text-[#152F45] tracking-wide uppercase">Phone</label>
                    <input type="tel" placeholder="(813) 555-0000" required className="w-full px-4 py-3.5 border border-gray-200 focus:border-[#2EA3F2] focus:ring-4 focus:ring-[#2EA3F2]/10 rounded-xl text-[15px] text-[#152F45] outline-none bg-[#F8FAFC] focus:bg-white transition-all shadow-sm placeholder:text-gray-400 font-medium" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[12.5px] font-bold text-[#152F45] tracking-wide uppercase">Service Needed</label>
                  <select required className="w-full px-4 py-3.5 border border-gray-200 focus:border-[#2EA3F2] focus:ring-4 focus:ring-[#2EA3F2]/10 rounded-xl text-[15px] text-[#152F45] outline-none bg-[#F8FAFC] focus:bg-white transition-all shadow-sm font-medium appearance-none cursor-pointer">
                    <option value="">Select a service...</option>
                    <option>Air Duct Cleaning</option>
                    <option>Dryer Vent Cleaning</option>
                    <option>Chimney Sweep</option>
                    <option>Attic Insulation</option>
                    <option>Duct Sanitizing</option>
                    <option>UV Light Installation</option>
                    <option>Other / Not Sure</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[12.5px] font-bold text-[#152F45] tracking-wide uppercase">Message <span className="text-gray-400 font-medium normal-case">(optional)</span></label>
                  <textarea placeholder="Tell us about your home, any concerns, or preferred dates..." rows={3} className="w-full px-4 py-3.5 border border-gray-200 focus:border-[#2EA3F2] focus:ring-4 focus:ring-[#2EA3F2]/10 rounded-xl text-[15px] text-[#152F45] outline-none bg-[#F8FAFC] focus:bg-white transition-all resize-y min-h-[90px] shadow-sm placeholder:text-gray-400 font-medium" />
                </div>

                <button
                  type="submit"
                  className="w-full py-4.5 bg-[#F97316] hover:bg-[#EA580C] text-white font-heading font-extrabold text-[17px] rounded-xl transition-all duration-300 shadow-[0_8px_30px_rgba(249,115,22,0.25)] hover:shadow-[0_12px_40px_rgba(249,115,22,0.4)] hover:-translate-y-0.5 mt-4 cursor-pointer"
                >
                  Submit
                </button>

                <p className="text-[13px] font-medium text-gray-400 text-center mt-3">
                  No spam. We&apos;ll only contact you about your request.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
