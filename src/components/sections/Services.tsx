import Image from "next/image";

const services = [
  {
    num: "01",
    title: "Air Duct Cleaning",
    desc: "Remove dust, allergens, mold, and debris from your entire duct system for healthier indoor air.",
    photo: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
    alt: "Technician cleaning air ducts",
  },
  {
    num: "02",
    title: "Dryer Vent Cleaning",
    desc: "Prevent dryer fires and improve efficiency. Lint buildup is a leading cause of home fires.",
    photo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    alt: "Dryer vent cleaning service",
  },
  {
    num: "03",
    title: "Chimney Sweep",
    desc: "Professional chimney cleaning, inspection, and repair to keep your fireplace safe and functional.",
    photo: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    alt: "Chimney sweep and inspection",
  },
  {
    num: "04",
    title: "Attic Insulation",
    desc: "Lower energy bills and improve comfort with proper attic insulation installation and replacement.",
    photo: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    alt: "Attic insulation installation",
  },
  {
    num: "05",
    title: "Duct Sanitizing",
    desc: "EPA-approved treatments to kill bacteria, mold spores, and allergens inside your duct system.",
    photo: "https://images.unsplash.com/photo-1567173875861-c63f1f7dcb70?w=600&q=80",
    alt: "Duct sanitizing treatment",
  },
  {
    num: "06",
    title: "UV Light Installation",
    desc: "UV germicidal lights installed in your HVAC system continuously neutralize airborne pathogens.",
    photo: "https://images.unsplash.com/photo-1606929464555-c54e4bbfb12e?w=600&q=80",
    alt: "UV light HVAC installation",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white pt-8 pb-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        {/* Centered header */}
        <div className="text-center mb-14">
          <div className="inline-block bg-[#EBF8FF] text-[#2EA3F2] text-[12px] font-bold tracking-[1.2px] uppercase px-3.5 py-1 rounded-full mb-4">
            Our Services
          </div>
          <h2 className="font-heading font-bold text-[#152F45] mb-4">
            Everything Your Home&apos;s Air System Needs
          </h2>
          <p className="text-[16px] text-gray-500 max-w-[520px] mx-auto leading-[1.65]">
            Residential &amp; commercial. All makes and models. Tampa Bay&apos;s most trusted team
            — backed by IICRC &amp; EPA certifications.
          </p>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.num}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-[0_12px_40px_rgba(21,47,69,0.12)] hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Card top: number + title + desc */}
              <div className="p-6 flex-1">
                <div className="font-heading font-extrabold text-[2.5rem] text-[#2EA3F2] opacity-40 leading-none mb-2 group-hover:opacity-70 transition-opacity">
                  {s.num}
                </div>
                <h3 className="font-heading font-bold text-[19px] text-[#152F45] mb-2">
                  {s.title}
                </h3>
                <p className="text-[14px] text-gray-500 leading-[1.65]">{s.desc}</p>
              </div>

              {/* Photo at card bottom with overlapping CTA */}
              <div className="relative h-[180px]">
                <Image
                  src={s.photo}
                  alt={s.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gradient overlay for CTA readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#152F45]/85 via-[#152F45]/30 to-transparent" />
                {/* CTA button — sits over the photo gradient */}
                <div className="absolute bottom-4 left-4 right-4">
                  <a
                    href="#quote"
                    className="block text-center bg-[#F97316] hover:bg-orange-600 text-white font-heading font-bold text-[14px] py-2.5 rounded-[8px] transition-colors shadow-[0_4px_16px_rgba(249,115,22,0.45)]"
                  >
                    Request a Quote
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
