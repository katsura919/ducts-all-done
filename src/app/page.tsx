import { Phone, ArrowRight } from "lucide-react";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import AboutSection from "@/components/sections/AboutSection";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import Reviews from "@/components/sections/Reviews";
import ServiceArea from "@/components/sections/ServiceArea";
import FAQ from "@/components/sections/FAQ";
import ContactForm from "@/components/sections/ContactForm";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

function MidFunnelCTA({ heading, sub }: { heading: string; sub: string }) {
  return (
    <div className="bg-[#EBF8FF] py-10 px-6 text-center border-y border-[#2EA3F2]/12">
      <p className="text-[15px] font-semibold text-[#152F45] mb-1">{heading}</p>
      <p className="text-[14px] text-gray-500 mb-5">{sub}</p>
      <div className="flex flex-wrap justify-center gap-3">
        <a
          href="tel:8139232906"
          className="inline-flex items-center gap-2 bg-[#152F45] hover:bg-[#1e3f5a] text-white font-heading font-bold text-[15px] px-6 py-2.5 rounded-[8px] transition-colors"
        >
          <Phone size={15} />
          813-923-2906
        </a>
        <a
          href="#quote"
          className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-orange-600 text-white font-heading font-bold text-[15px] px-6 py-2.5 rounded-[8px] transition-colors"
        >
          Get Free Quote
          <ArrowRight size={15} />
        </a>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <TrustBar />
        <AboutSection />
        <Services />
        <HowItWorks />
        <MidFunnelCTA
          heading="Ready to breathe cleaner air?"
          sub="Schedule your service today — same-day appointments often available."
        />
        <Reviews />
        <MidFunnelCTA
          heading="Join 1,000+ happy Tampa Bay homeowners."
          sub="Get your free estimate in minutes. No pressure, no obligation."
        />
        <ServiceArea />
        <FAQ />
        <MidFunnelCTA
          heading="Still have questions? We're a real local team."
          sub="Call us directly or fill out the form — we respond fast."
        />
        <ContactForm />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
