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
    <section className="bg-[#F8FAFC] py-20 px-6" id="quote">
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-[1fr_1.3fr] gap-12 items-start">

        {/* ── LEFT: Trust copy ── */}
        <div className="md:pt-4">
          <div className="inline-block bg-blue-50 text-blue-700 text-[12px] font-bold tracking-[1.2px] uppercase px-3 py-1 rounded mb-4">
            Free Estimate
          </div>
          <h2 className="font-heading font-bold text-[#152F45] leading-[1.1] mb-3">
            Get Your Free Estimate
          </h2>
          <p className="text-[16px] text-gray-500 mb-6 leading-[1.7]">
            Most homeowners get a quote response within 2 hours. Same-day
            service is often available — just let us know your schedule.
          </p>

          {/* Star rating */}
          <div className="flex items-center gap-2 mb-6">
            <div className="text-yellow-400 text-lg">★★★★★</div>
            <span className="text-[14px] font-semibold text-[#152F45]">5.0</span>
            <span className="text-[14px] text-gray-500">· 114 Google Reviews</span>
          </div>

          {/* Phone CTA */}
          <a
            href="tel:8139232906"
            className="flex items-center gap-3 bg-[#152F45] hover:bg-[#1e3f5a] text-white px-5 py-4 rounded-xl mb-8 transition-all hover:shadow-lg hover:-translate-y-0.5 group w-fit"
          >
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
              <Phone size={18} className="text-[#2EA3F2]" />
            </div>
            <div>
              <div className="text-[11px] text-white/60 uppercase tracking-wider">Call us directly</div>
              <div className="font-heading font-bold text-[18px] leading-tight">813-923-2906</div>
            </div>
          </a>

          {/* Trust bullets */}
          <ul className="space-y-4">
            {trustPoints.map((p) => (
              <li key={p} className="flex items-start gap-3 text-[14px] text-gray-600 font-medium">
                <CheckCircle size={18} className="text-[#2EA3F2] flex-shrink-0 mt-0.5" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* ── RIGHT: Form ── */}
        <div className="bg-white border border-gray-100 rounded-2xl p-8 md:p-10 shadow-xl">
          {submitted ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="font-heading font-extrabold text-[26px] text-[#152F45] mb-2">
                Request Received!
              </h3>
              <p className="text-[15px] text-gray-500">
                We&apos;ll get back to you within a few hours. Same-day service often available.
              </p>
            </div>
          ) : (
            <>
              <h3 className="font-heading font-bold text-[22px] text-[#152F45] mb-1">
                Tell Us About Your Home
              </h3>
              <p className="text-[14px] text-gray-500 mb-6 font-medium">
                Fill this out and we&apos;ll send you a free, no-pressure estimate.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-semibold text-[#3A4A5C]">First Name</label>
                    <input type="text" placeholder="John" required className="w-full px-3.5 py-2.5 border border-gray-200 focus:border-[#2EA3F2] focus:ring-2 focus:ring-[#2EA3F2]/20 rounded-lg text-[14px] text-[#152F45] outline-none bg-gray-50/50 focus:bg-white transition-all shadow-sm" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-semibold text-[#3A4A5C]">Last Name</label>
                    <input type="text" placeholder="Smith" required className="w-full px-3.5 py-2.5 border border-gray-200 focus:border-[#2EA3F2] focus:ring-2 focus:ring-[#2EA3F2]/20 rounded-lg text-[14px] text-[#152F45] outline-none bg-gray-50/50 focus:bg-white transition-all shadow-sm" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-semibold text-[#3A4A5C]">Email</label>
                    <input type="email" placeholder="john@email.com" required className="w-full px-3.5 py-2.5 border border-gray-200 focus:border-[#2EA3F2] focus:ring-2 focus:ring-[#2EA3F2]/20 rounded-lg text-[14px] text-[#152F45] outline-none bg-gray-50/50 focus:bg-white transition-all shadow-sm" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-semibold text-[#3A4A5C]">Phone</label>
                    <input type="tel" placeholder="(813) 555-0000" required className="w-full px-3.5 py-2.5 border border-gray-200 focus:border-[#2EA3F2] focus:ring-2 focus:ring-[#2EA3F2]/20 rounded-lg text-[14px] text-[#152F45] outline-none bg-gray-50/50 focus:bg-white transition-all shadow-sm" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-semibold text-[#3A4A5C]">Service Needed</label>
                  <select required className="w-full px-3.5 py-2.5 border border-gray-200 focus:border-[#2EA3F2] focus:ring-2 focus:ring-[#2EA3F2]/20 rounded-lg text-[14px] text-[#152F45] outline-none bg-gray-50/50 focus:bg-white transition-all shadow-sm">
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
                  <label className="text-[13px] font-semibold text-[#3A4A5C]">Message <span className="text-gray-400 font-normal">(optional)</span></label>
                  <textarea placeholder="Tell us about your home, any concerns, or preferred dates..." rows={3} className="w-full px-3.5 py-2.5 border border-gray-200 focus:border-[#2EA3F2] focus:ring-2 focus:ring-[#2EA3F2]/20 rounded-lg text-[14px] text-[#152F45] outline-none bg-gray-50/50 focus:bg-white transition-all resize-y min-h-[80px] shadow-sm" />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold text-[17px] rounded-xl transition-all hover:shadow-lg hover:-translate-y-0.5 mt-2 cursor-pointer"
                >
                  Submit
                </button>

                <p className="text-[12px] text-gray-400 text-center mt-1">
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
