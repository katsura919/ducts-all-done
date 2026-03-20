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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {counties.map((county) => (
            <div key={county.name} className="bg-white/6 border border-white/10 rounded-[10px] p-4">
              <div className="flex items-center gap-1.5 mb-3">
                <MapPin size={13} className="text-[#2EA3F2]" />
                <h4 className="font-heading font-bold text-[15px] text-[#2EA3F2] uppercase tracking-[0.5px]">
                  {county.name}
                </h4>
              </div>
              <ul className="space-y-0.5">
                {county.cities.map((city) => (
                  <li key={city} className="text-[13px] text-white/70 before:content-['→_'] before:text-[#2EA3F2] before:text-[11px]">
                    {city}
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
