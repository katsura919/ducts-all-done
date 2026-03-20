import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-[#EBF8FF] pt-[58px] md:pt-[122px] overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 py-16 md:py-24 grid md:grid-cols-[1fr_400px] gap-10 md:gap-16 items-center">

        {/* ── LEFT: Copy ── */}
        <div className="order-2 md:order-1">
          {/* Tag */}
          <div className="inline-flex items-center gap-2.5 mb-5">
            <div className="w-8 h-8 rounded-full bg-[#152F45] flex items-center justify-center flex-shrink-0">
              <span className="text-[#2EA3F2] text-sm font-bold">✦</span>
            </div>
            <span className="text-[13px] font-bold text-[#152F45] uppercase tracking-[1.5px]">
              Tampa Bay&apos;s Trusted Duct Cleaners
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-[#152F45] leading-[1.05] mb-5">
            We Clean.<br />
            <span className="text-[#2EA3F2]">You Breathe Easy.</span>
          </h1>

          <p className="text-[17px] text-[#3A4A5C] max-w-[500px] mb-8 leading-[1.7]">
            Discover Tampa Bay&apos;s highest-rated air duct cleaning service. We remove years
            of built-up dust, mold, and allergens so your family breathes clean, healthy
            air every single day.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href="#quote"
              className="inline-flex items-center gap-2 bg-[#152F45] hover:bg-[#1e3f5a] text-white font-heading font-bold text-[16px] px-7 py-3.5 rounded-[10px] transition-colors"
            >
              Get a Free Quote
              <ArrowRight size={16} />
            </a>
            <a
              href="tel:8139232906"
              className="inline-flex items-center gap-2 border-2 border-[#152F45]/30 hover:border-[#152F45] text-[#152F45] hover:bg-[#152F45] hover:text-white font-heading font-bold text-[16px] px-7 py-3.5 rounded-[10px] transition-all"
            >
              <Phone size={16} strokeWidth={2.5} />
              813-923-2906
            </a>
          </div>

          {/* Social proof row */}
          <div className="flex items-center gap-4 pt-7 border-t border-[#2EA3F2]/20">
            <div className="flex -space-x-2">
              {["JS", "MT", "SO", "KL"].map((init) => (
                <div
                  key={init}
                  className="w-9 h-9 rounded-full bg-[#152F45] border-2 border-white flex items-center justify-center text-[11px] font-bold text-white"
                >
                  {init}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-yellow-400 text-sm leading-none">★★★★★</div>
              <p className="text-[13px] text-gray-500 mt-0.5">
                <strong className="text-[#152F45]">114+ homeowners</strong> give us 5 stars
              </p>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Photo + badges ── */}
        <div className="order-1 md:order-2 relative mt-4 md:mt-0">
          {/* Main photo */}
          <div className="relative h-[420px] md:h-[500px] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(21,47,69,0.18)]">
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
              alt="Ducts All Done certified technician at work"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>

          {/* Top-right badge: 100% Guarantee */}
          <div className="absolute -top-4 -right-2 md:-right-4 bg-[#152F45] text-white rounded-2xl px-5 py-4 shadow-xl text-center z-10">
            <div className="text-[#2EA3F2] font-heading font-extrabold text-[26px] leading-none">100%</div>
            <div className="text-[10px] font-semibold uppercase tracking-wide mt-1 text-white/80">Satisfaction</div>
            <div className="text-[10px] font-semibold uppercase tracking-wide text-white/80">Guaranteed</div>
          </div>

          {/* Bottom-left floating card: same-day */}
          <div className="absolute -bottom-4 -left-2 md:-left-4 bg-white border border-gray-100 rounded-xl shadow-lg px-4 py-3 flex items-center gap-3 z-10">
            <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
              <span className="text-green-600 font-bold">✓</span>
            </div>
            <div>
              <div className="text-[12px] font-bold text-[#152F45]">Same-Day Available</div>
              <div className="text-[11px] text-gray-400">Call before noon</div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom padding so floating badges don't clip */}
      <div className="h-6" />
    </section>
  );
}
