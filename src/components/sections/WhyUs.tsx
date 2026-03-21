import Image from "next/image";
import { Award, ThumbsUp, Home, Zap, CreditCard, Search } from "lucide-react";

export default function WhyUs() {
  return (
    <section id="about" className="bg-[#F8FAFC] py-24 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-[640px] mx-auto mb-16">
          <div className="inline-block bg-blue-50 text-blue-700 text-[12px] font-bold tracking-[1.2px] uppercase px-4 py-1.5 rounded-lg mb-5 border border-blue-100">
            Why Choose Us
          </div>
          <h2 className="font-heading font-extrabold text-[36px] md:text-[46px] text-[#152F45] leading-[1.1] mb-6">
            The Ducts All Done Difference
          </h2>
          <p className="text-[17px] text-gray-500 leading-relaxed font-medium">
            We&apos;re not a franchise. We&apos;re a local Tampa Bay team that cares deeply about your home, your family, and your air quality.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:auto-rows-[minmax(180px,auto)]">
          
          {/* Item 1: Featured Image */}
          <div className="md:col-span-2 lg:row-span-2 relative min-h-[400px] md:min-h-full rounded-[24px] overflow-hidden shadow-sm group border border-gray-200/50">
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
              alt="Ducts All Done professional team"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/90 via-[#0B1F3A]/20 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-white/20 transform transition-transform group-hover:-translate-y-1">
                <div className="text-[#F97316] text-[15px] mb-2 flex gap-0.5 tracking-widest">★★★★★</div>
                <div className="text-[14.5px] font-bold text-[#152F45] leading-snug mb-1.5">&quot;Truly a local team that cares about your family.&quot;</div>
                <div className="text-[12.5px] font-semibold text-gray-500 uppercase tracking-widest">— Tampa Bay homeowner</div>
              </div>
            </div>
          </div>

          {/* Cards 1-4 */}
          <ReasonCard 
            icon={ThumbsUp} 
            title="100% Satisfaction Guarantee" 
            desc="We guarantee our air duct and dryer vent cleaning work. Not happy? We make it right." 
          />
          <ReasonCard 
            icon={Zap} 
            title="Fast, Friendly Service" 
            desc="Same-day appointments available. We respect your time and keep your home incredibly clean." 
          />
          <ReasonCard 
            icon={Home} 
            title="Residential & Commercial" 
            desc="Expertise handling all models on residential and commercial properties deeply across Tampa Bay." 
          />
          <ReasonCard 
            icon={CreditCard} 
            title="Financing Available" 
            desc="Flexible financing options so you can radically improve your air quality without breaking the budget." 
          />

          {/* Wide Dark Card: Certifications */}
          <div className="md:col-span-2 bg-[#152F45] rounded-[24px] p-8 md:p-10 flex flex-col justify-center relative overflow-hidden group hover:shadow-[0_10px_40px_rgba(21,47,69,0.3)] transition-all duration-300 hover:-translate-y-1 border border-[#1e3f5a]">
            {/* Background glowing orb */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2EA3F2] rounded-full blur-[90px] opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 md:gap-7 relative z-10 w-full text-center sm:text-left">
              <div className="w-16 h-16 rounded-2xl bg-white/10 text-[#2EA3F2] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-[#2EA3F2] group-hover:text-white transition-all duration-300 border border-white/5 shadow-inner">
                <Award size={28} className="stroke-[2.5px]" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-[22px] text-white mb-2.5 leading-tight">IICRC &amp; EPA Certified</h3>
                <p className="text-[14.5px] text-blue-100/70 leading-relaxed mb-5 max-w-[340px] mx-auto sm:mx-0">
                  Industry-leading certifications proving our commitment to safety, compliance, and unmatched quality.
                </p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2.5 text-[12px] font-bold tracking-widest uppercase">
                  <span className="bg-[#0b1f3a]/80 text-[#2EA3F2] px-3.5 py-2 rounded-lg border border-[#2EA3F2]/20">Lic #7196244</span>
                  <span className="bg-[#0b1f3a]/80 text-[#2EA3F2] px-3.5 py-2 rounded-lg border border-[#2EA3F2]/20">EPA #P5455385...</span>
                </div>
              </div>
            </div>
          </div>

          {/* Wide Light Card: Free Inspection */}
          <div className="md:col-span-2 bg-gradient-to-br from-white to-[#F8FAFC] border border-[#2EA3F2]/20 rounded-[24px] p-8 md:p-10 flex flex-col sm:flex-row items-center sm:items-start gap-5 md:gap-7 group hover:shadow-[0_10px_40px_rgba(46,163,242,0.1)] hover:border-[#2EA3F2]/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden relative text-center sm:text-left">
            {/* Background subtle icon */}
            <div className="absolute -right-6 -bottom-6 opacity-[0.03] text-[#2EA3F2] group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700 pointer-events-none">
              <Search size={220} />
            </div>

            <div className="w-16 h-16 rounded-2xl bg-[#EBF8FF] text-[#2EA3F2] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-[#2EA3F2] group-hover:text-white transition-all duration-300 relative z-10 border border-[#2EA3F2]/10 shadow-sm">
              <Search size={28} className="stroke-[2.5px]" />
            </div>
            <div className="relative z-10">
              <h3 className="font-heading font-bold text-[22px] text-[#152F45] mb-2.5 leading-tight">Free Inspection Included</h3>
              <p className="text-[14.5px] text-gray-500 leading-relaxed max-w-[380px] font-medium mx-auto sm:mx-0">
                Get a completely free inspection with every service purchased. We show you exactly what we find with advanced cameras absolutely no hidden surprises.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ReasonCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="bg-white rounded-[24px] p-7 md:p-8 flex flex-col justify-between shadow-sm border border-gray-100/80 hover:shadow-[0_10px_40px_rgba(46,163,242,0.12)] hover:border-[#2EA3F2]/30 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
      <div className="w-14 h-14 rounded-[14px] bg-[#F8FAFC] text-[#2EA3F2] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#2EA3F2] group-hover:text-white transition-all duration-300 border border-gray-100 group-hover:border-[#2EA3F2]/10 shadow-sm">
        <Icon size={24} className="stroke-[2px]" />
      </div>
      <div className="relative z-10">
        <h3 className="font-bold text-[17px] text-[#152F45] mb-2.5 leading-tight">{title}</h3>
        <p className="text-[14px] text-gray-500 leading-relaxed font-medium">{desc}</p>
      </div>
    </div>
  );
}
