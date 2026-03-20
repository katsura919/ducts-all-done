import { Phone, ArrowRight, Mail, MapPin, Clock } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-gradient-to-br from-blue-700 via-[#1565C0] to-[#0B1F3A] py-20 px-6 text-center">
      <h2 className="font-heading font-extrabold text-white mb-3">
        Ready to Breathe Better?
      </h2>
      <p className="text-[17px] text-white/75 mb-9 max-w-[520px] mx-auto leading-[1.65]">
        Tampa&apos;s trusted duct cleaning team is ready to help. Call now for same-day service or get your free estimate.
      </p>

      <div className="flex justify-center flex-wrap gap-4 mb-9">
        <a
          href="tel:8139232906"
          className="inline-flex items-center gap-2 bg-white text-[#0B1F3A] font-heading font-bold text-[18px] px-7 py-3.5 rounded-[10px] shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 transition-all"
        >
          <Phone size={18} />
          Call 813-923-2906
        </a>
        <a
          href="#quote"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold text-[18px] px-7 py-3.5 rounded-[10px] shadow-[0_4px_20px_rgba(249,115,22,0.35)] hover:-translate-y-0.5 transition-all"
        >
          Get a Free Quote
          <ArrowRight size={18} />
        </a>
      </div>

      <div className="flex flex-wrap justify-center gap-6 text-[14px] text-white/70">
        <a href="mailto:office@ductsalldone.com" className="flex items-center gap-2 hover:text-white transition-colors">
          <Mail size={15} />
          office@ductsalldone.com
        </a>
        <span className="flex items-center gap-2">
          <MapPin size={15} />
          13542 N Florida Ave, Tampa FL 33613
        </span>
        <span className="flex items-center gap-2">
          <Clock size={15} />
          Mon–Thu &amp; Sun: 6AM–9PM &nbsp;|&nbsp; Fri: 6AM–5PM
        </span>
      </div>
    </section>
  );
}
