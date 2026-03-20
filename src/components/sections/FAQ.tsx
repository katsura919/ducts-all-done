"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "How often should I have my air ducts cleaned?",
    a: "The EPA recommends air duct cleaning every 3–5 years for average homes. However, if you have pets, allergies, recent construction, or a dusty environment, annual cleaning may be beneficial. We'll inspect your system and give you an honest recommendation.",
  },
  {
    q: "How long does a duct cleaning appointment take?",
    a: "Most residential air duct cleanings take 2–4 hours depending on the size of your home and the number of vents. We'll give you a time estimate when you book.",
  },
  {
    q: "Is duct cleaning safe for my family and pets?",
    a: "Yes, completely safe. We use EPA-approved cleaning agents and our team is trained to protect your home and family. You can stay in the house during the cleaning.",
  },
  {
    q: "Do you offer same-day service?",
    a: "Yes! Same-day and next-day appointments are often available. Call us at 813-923-2906 and we'll do our best to fit you into our schedule.",
  },
  {
    q: "How much does air duct cleaning cost?",
    a: "Pricing depends on the size of your home and number of vents. We offer free estimates — just call or fill out the form below. Transparent, upfront pricing with no hidden fees.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Ducts All Done is fully licensed (License #7196244), insured, IICRC certified, and EPA certified. Our technicians are background-checked and trained to the highest industry standards.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-16 px-6">
      <div className="max-w-[900px] mx-auto">
        <div className="inline-block bg-blue-50 text-blue-700 text-[12px] font-bold tracking-[1.2px] uppercase px-3 py-1 rounded mb-3">
          Common Questions
        </div>
        <h2 className="font-heading font-bold text-[#0B1F3A] mb-3">Frequently Asked Questions</h2>
        <p className="text-[16px] text-gray-500 max-w-[560px] mb-10">
          Everything you need to know before booking.
        </p>

        <div className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-[10px] overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-5 py-4.5 font-semibold text-[15px] text-[#0B1F3A] flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={cn(
                    "text-blue-600 flex-shrink-0 transition-transform duration-200",
                    openIndex === i && "rotate-180"
                  )}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 text-[14px] text-gray-500 leading-[1.7] border-t border-gray-200 pt-3.5">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
