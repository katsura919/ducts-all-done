import Image from "next/image";
import { MapPin } from "lucide-react";

const counties = [
  {
    name: "Hillsborough",
    cities: ["Tampa", "Brandon", "Riverview", "Lutz", "Plant City", "Apollo Beach", "Sun City Center"],
  },
  {
    name: "Pasco",
    cities: ["Wesley Chapel", "Land O' Lakes", "New Port Richey", "Zephyrhills", "Odessa", "Trinity", "Hudson"],
  },
  {
    name: "Pinellas",
    cities: ["Clearwater", "Largo", "Dunedin", "Tarpon Springs", "Safety Harbor", "Seminole", "St. Pete Beach"],
  },
  {
    name: "Manatee",
    cities: ["Bradenton", "Palmetto", "Ellenton", "Anna Maria", "Cortez", "Bradenton Beach"],
  },
];

export default function ServiceArea() {
  return (
    <section id="service-area" className="relative bg-[#0B1F3A] py-16 px-6 overflow-hidden">
      {/* Background aerial image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80"
          alt="Tampa Bay area aerial view"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-[#0B1F3A]/80" />
      </div>

      <div className="relative z-10 max-w-[900px] mx-auto">
        <div className="inline-block bg-[#2EA3F2]/15 text-[#2EA3F2] text-[12px] font-bold tracking-[1.2px] uppercase px-3 py-1 rounded mb-3">
          Service Area
        </div>
        <h2 className="font-heading font-bold text-white mb-3">
          Serving 4 Counties Across Tampa Bay
        </h2>
        <p className="text-[16px] text-white/60 max-w-[560px] mb-10">
          If you&apos;re in the Greater Tampa Bay area, we&apos;ve got you covered.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {counties.map((county) => (
            <div 
              key={county.name} 
              className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={16} className="text-[#2EA3F2]" />
                <h4 className="font-heading font-bold text-[15px] text-[#2EA3F2] uppercase tracking-[0.5px]">
                  {county.name}
                </h4>
              </div>
              <ul className="space-y-2.5 mt-2">
                {county.cities.map((city) => (
                  <li key={city} className="flex items-start justify-start gap-2.5 group -ml-1 pl-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2EA3F2]/40 mt-[7px] flex-shrink-0 group-hover:bg-[#2EA3F2] transition-colors" />
                    <span className="text-[14px] text-white/70 font-medium group-hover:text-white transition-colors leading-[1.4]">{city}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-[14px] text-white/50">
          Not sure if we serve your area?{" "}
          <a href="tel:8139232906" className="text-[#2EA3F2] hover:text-white transition-colors font-semibold">
            Call 813-923-2906
          </a>{" "}
          and we&apos;ll confirm right away.
        </p>
      </div>
    </section>
  );
}
