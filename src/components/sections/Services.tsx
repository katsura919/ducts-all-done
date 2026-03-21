"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Compare } from "@/components/ui/compare";
import { X } from "lucide-react";

// Generic dirty duct image for "before" comparison
const DIRTY_DUCT_IMG = "https://images.unsplash.com/photo-1628191010210-a59de33e5941?w=800&q=80";

const services = [
  {
    num: "01",
    title: "Air Duct Cleaning",
    desc: "Remove dust, allergens, mold, and debris from your entire duct system for healthier indoor air.",
    photo: "/asset/services/air-duct-cleaning/after.png",
    alt: "Technician cleaning air ducts",
    beforeImage: "/asset/services/air-duct-cleaning/before.jpeg",
    afterImage: "/asset/services/air-duct-cleaning/after.png",
  },
  {
    num: "02",
    title: "Dryer Vent Cleaning",
    desc: "Prevent dryer fires and improve efficiency. Lint buildup is a leading cause of home fires.",
    photo: "/asset/services/dryer-vent/after.jpg",
    alt: "Dryer vent cleaning service",
    beforeImage: "/asset/services/dryer-vent/before.png",
    afterImage: "/asset/services/dryer-vent/after.jpg",
  },
  {
    num: "03",
    title: "Chimney Sweep",
    desc: "Professional chimney cleaning, inspection, and repair to keep your fireplace safe and functional.",
    photo: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    alt: "Chimney sweep and inspection",
    beforeImage: DIRTY_DUCT_IMG,
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    num: "04",
    title: "Attic Insulation",
    desc: "Lower energy bills and improve comfort with proper attic insulation installation and replacement.",
    photo: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    alt: "Attic insulation installation",
    beforeImage: DIRTY_DUCT_IMG,
    afterImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    num: "05",
    title: "Duct Sanitizing",
    desc: "EPA-approved treatments to kill bacteria, mold spores, and allergens inside your duct system.",
    photo: "https://images.unsplash.com/photo-1567173875861-c63f1f7dcb70?w=600&q=80",
    alt: "Duct sanitizing treatment",
    beforeImage: DIRTY_DUCT_IMG,
    afterImage: "https://images.unsplash.com/photo-1567173875861-c63f1f7dcb70?w=800&q=80",
  },
  {
    num: "06",
    title: "UV Light Installation",
    desc: "UV germicidal lights installed in your HVAC system continuously neutralize airborne pathogens.",
    photo: "https://images.unsplash.com/photo-1606929464555-c54e4bbfb12e?w=600&q=80",
    alt: "UV light HVAC installation",
    beforeImage: DIRTY_DUCT_IMG,
    afterImage: "https://images.unsplash.com/photo-1606929464555-c54e4bbfb12e?w=800&q=80",
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedService]);

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
              onClick={() => setSelectedService(s)}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-[0_12px_40px_rgba(21,47,69,0.12)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            >
              {/* Card top: number + title + desc */}
              <div className="p-6 flex-1 relative">
                <div className="font-heading font-extrabold text-[2.5rem] text-primary opacity-40 leading-none mb-2 group-hover:opacity-70 transition-opacity">
                  {s.num}
                </div>
                <h3 className="font-heading font-bold text-[19px] text-[#152F45] mb-2 group-hover:text-[#2EA3F2] transition-colors">
                  {s.title}
                </h3>
                <p className="text-[14px] text-gray-500 leading-[1.65]">{s.desc}</p>
                
                <div className="mt-5 text-[12px] font-bold text-[#F97316] uppercase tracking-wider flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  View Before & After <span className="text-[16px] leading-none mb-0.5">→</span>
                </div>
              </div>

              {/* Photo at card bottom with overlapping CTA */}
              <div className="relative h-[180px]">
                <Image
                  src={s.photo}
                  alt={s.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gradient overlay for CTA readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#152F45]/85 via-[#152F45]/30 to-transparent pointer-events-none" />
                {/* CTA button — sits over the photo gradient */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div
                    className="block text-center bg-blue-500 hover:bg-[#efc932] text-white font-heading font-bold text-[14px] py-2.5 rounded-[8px] transition-colors shadow-[0_4px_16px_rgba(249,115,22,0.45)]"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevents opening the modal when clicking the quote button explicitly
                      window.location.href = "#quote";
                    }}
                  >
                    Request a Quote
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compare Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#0b1f3a]/80 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div>
                  <h3 className="font-heading font-bold text-[24px] text-[#152F45]">
                    {selectedService.title} Comparison
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Drag the slider to see the difference before and after our service.
                  </p>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Compare Component Area */}
              <div className="p-6 bg-gray-50 flex items-center justify-center w-full min-h-[400px] md:min-h-[500px]">
                <Compare
                  firstImage={selectedService.beforeImage}
                  secondImage={selectedService.afterImage}
                  firstImageClassName="object-cover object-center"
                  secondImageClassname="object-cover object-center"
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl shadow-lg border border-gray-200"
                  slideMode="hover"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
