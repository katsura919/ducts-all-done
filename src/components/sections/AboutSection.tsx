import Image from "next/image";
import { CheckCircle, ArrowRight } from "lucide-react";

const bullets = [
  "IICRC & EPA certified technicians on every job",
  "Free inspection included with every service",
  "Same-day and next-day scheduling available",
  "100% satisfaction guarantee — we make it right",
  "Transparent pricing, no hidden fees ever",
];

export default function AboutSection() {
  return (
    <section className="bg-[#152F45] py-20 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#2EA3F2]/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">

        {/* LEFT: text */}
        <div>
          <div className="inline-flex items-center gap-2 bg-[#2EA3F2]/15 border border-[#2EA3F2]/25 rounded-full px-3.5 py-1 text-[12px] font-bold text-[#2EA3F2] uppercase tracking-[1px] mb-5">
            Our Mission
          </div>
          <h2 className="font-heading font-bold text-white leading-[1.1] mb-5">
            We Don&apos;t Just Clean Ducts.
            <br />
            <span className="text-[#2EA3F2]">We Protect Your Family&apos;s Air.</span>
          </h2>
          <p className="text-[16px] text-white/65 mb-8 leading-[1.75]">
            We&apos;re a local Tampa Bay team — not a franchise, not a call center.
            When you call, you talk to someone who knows your neighborhood and cares
            about your home. Every job is backed by our certifications, our guarantee,
            and our 5-star reputation.
          </p>

          <ul className="space-y-3.5 mb-9">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-[15px] text-white/80">
                <CheckCircle size={18} className="text-[#2EA3F2] flex-shrink-0 mt-0.5" />
                {b}
              </li>
            ))}
          </ul>

          <a
            href="#quote"
            className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-orange-600 text-white font-heading font-bold text-[17px] px-7 py-3.5 rounded-[10px] shadow-[0_4px_20px_rgba(249,115,22,0.35)] hover:-translate-y-0.5 transition-all"
          >
            Get Your Free Estimate
            <ArrowRight size={16} />
          </a>
        </div>

        {/* RIGHT: photo + social proof */}
        <div className="relative">
          <div className="relative h-[460px] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700&q=85"
              alt="Ducts All Done certified technician inspecting HVAC system"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 550px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#152F45]/60 to-transparent" />
          </div>

          {/* Social proof pill — bottom right */}
          <div className="absolute bottom-5 right-5 bg-white rounded-xl px-4 py-3 shadow-xl flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#2EA3F2] border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">JS</div>
              <div className="w-8 h-8 rounded-full bg-[#152F45] border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">MT</div>
              <div className="w-8 h-8 rounded-full bg-[#F97316] border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">SO</div>
            </div>
            <div>
              <div className="font-heading font-bold text-[14px] text-[#152F45] leading-tight">1,000+ Customers</div>
              <div className="flex items-center gap-1">
                <span className="text-yellow-400 text-[12px]">★★★★★</span>
                <span className="text-[11px] text-gray-500 font-medium">5.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Angled bottom edge into white Services section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-white"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
      />
    </section>
  );
}
