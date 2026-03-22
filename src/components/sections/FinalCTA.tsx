import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, ChevronRight, Calendar } from "lucide-react";
import { div } from "motion/react-client";

export default function FinalCTA() {
  return (
    <footer className="bg-[#152F45] text-white">
      {/* ── Top Contact Bar Removed ── */}

      {/* ── Main Footer Content ── */}
      <div className="max-w-[1200px] mx-auto px-6 pb-16 pt-16">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 border-none">
          
          {/* Left Side: Brand Info */}
          <div className="w-full lg:max-w-[400px]">
            <div className="mb-6 w-full max-w-[240px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/asset/logo.png" alt="Ducts All Done Logo" className="w-full h-auto object-contain" />
            </div>
            <p className="text-[14px] text-blue-100/70 leading-[1.8] mb-8 font-medium">
              Clear communication successful cleaning service relationship. Make sure you can easily service is easy exceptional service every time changes.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 hover:bg-white hover:border-white hover:text-[#152F45] flex items-center justify-center transition-all group">
                  <Icon size={16} className="text-white group-hover:text-[#152F45]" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Services & Quick Links */}
          <div className="flex flex-col sm:flex-row gap-12 lg:gap-24">
            {/* Column 2: Services */}
            <div>
              <h4 className="text-[20px] font-bold text-white mb-8">Services</h4>
              <ul className="space-y-4 text-[15px] font-medium text-[#2EA3F2]">
                {[
                  "Air Duct Cleaning",
                  "Dryer Vent Cleaning",
                  "Chimney Sweep",
                  "Attic Insulation",
                  "Duct Sanitizing",
                  "UV Light Installation",
                ].map((item) => (
                  <li key={item}>
                    <a href="#services" className="flex items-center gap-2.5 text-white transition-colors group">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* ── Footer Bottom ── */}
      <div className="border-t border-white/10 py-7 px-6 bg-[#132A3E]">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[15px] text-white font-medium">
          <p>Copyright@ {new Date().getFullYear()} Ducts All Done. All Rights Reserved.</p>
          <div className="flex gap-4 items-center">
            <a href="#privacy" className="hover:text-[#2EA3F2] transition-colors">Setting &amp; Privacy</a>
            <span className="text-white/30 hidden sm:block">/</span>
            <a href="#faq" className="hover:text-[#2EA3F2] transition-colors">FAQ</a>
            <span className="text-white/30 hidden sm:block">/</span>
            <a href="#support" className="hover:text-[#2EA3F2] transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
