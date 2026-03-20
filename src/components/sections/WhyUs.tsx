import Image from "next/image";
import { Award, ThumbsUp, Home, Zap, CreditCard, Search } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "IICRC & EPA Certified",
    desc: "Industry-leading certifications. License #7196244, EPA Cert #P5455385CC00BC501.",
  },
  {
    icon: ThumbsUp,
    title: "100% Satisfaction Guarantee",
    desc: "We guarantee our air duct and dryer vent cleaning work. Not happy? We make it right.",
  },
  {
    icon: Home,
    title: "Residential & Commercial",
    desc: "All makes and models on both residential and commercial properties throughout Tampa Bay.",
  },
  {
    icon: Zap,
    title: "Fast, Friendly Service",
    desc: "Same-day appointments available. We respect your time and keep your home clean.",
  },
  {
    icon: CreditCard,
    title: "Financing Available",
    desc: "Flexible financing options so you can improve your air quality without breaking the budget.",
  },
  {
    icon: Search,
    title: "Free Inspection Included",
    desc: "Get a free inspection with every service purchased. We show you what we find — no surprises.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-[900px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: reasons grid */}
          <div>
            <div className="inline-block bg-blue-50 text-blue-700 text-[12px] font-bold tracking-[1.2px] uppercase px-3 py-1 rounded mb-3">
              Why Choose Us
            </div>
            <h2 className="font-heading font-bold text-[#0B1F3A] mb-3">
              The Ducts All Done Difference
            </h2>
            <p className="text-[16px] text-gray-500 mb-8">
              We&apos;re not a franchise. We&apos;re a local Tampa Bay team that cares about your home and your air quality.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {reasons.map((r) => (
                <div key={r.title} className="flex gap-4 items-start bg-white border border-gray-200 rounded-[10px] p-5">
                  <div className="w-11 h-11 rounded-[10px] bg-green-50 flex items-center justify-center text-green-700 flex-shrink-0">
                    <r.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[15px] text-[#0B1F3A] mb-1">{r.title}</h3>
                    <p className="text-[13px] text-gray-500 leading-[1.5]">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Cert badges */}
            <div className="flex flex-wrap gap-3 mt-6">
              <div className="flex items-center gap-2.5 bg-[#0B1F3A] text-white rounded-[10px] px-4 py-3 text-[13px]">
                <div>
                  <strong className="font-heading font-bold text-[15px] text-[#2EA3F2] block">IICRC Certified</strong>
                  <span className="text-[11px] text-white/60">License #: 7196244</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5 bg-[#0B1F3A] text-white rounded-[10px] px-4 py-3 text-[13px]">
                <div>
                  <strong className="font-heading font-bold text-[15px] text-[#2EA3F2] block">EPA Certified</strong>
                  <span className="text-[11px] text-white/60">Cert #: P5455385CC00BC501</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: image */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
              alt="Ducts All Done professional team"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl px-5 py-4">
                <div className="text-yellow-400 text-sm mb-1">★★★★★</div>
                <div className="text-[13px] font-semibold text-[#0B1F3A]">&quot;Truly a local team that cares about your family.&quot;</div>
                <div className="text-[12px] text-gray-500 mt-0.5">— Tampa Bay homeowner</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
