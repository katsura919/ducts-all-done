import Image from "next/image";

const steps = [
  {
    num: "1",
    title: "Call or Book Online",
    desc: "Call 813-923-2906 or drop your number in the header. We confirm same-day or next-day.",
  },
  {
    num: "2",
    title: "Tech Arrives On Time",
    desc: "Our certified tech arrives in a fully equipped van, ready to inspect and clean your system.",
  },
  {
    num: "3",
    title: "Breathe Cleaner Air",
    desc: "Job done right the first time, backed by our 100% satisfaction guarantee.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: steps */}
          <div>
            <div className="inline-block bg-blue-50 text-blue-700 text-[12px] font-bold tracking-[1.2px] uppercase px-3 py-1 rounded mb-3">
              Simple Process
            </div>
            <h2 className="font-heading font-bold text-[#152F45] mb-3">How It Works</h2>
            <p className="text-[16px] text-gray-500 mb-10">
              Booking is easy. We handle the rest — fast, clean, and professional every time.
            </p>

            <div className="flex flex-col gap-0">
              {steps.map((step, i) => (
                <div key={step.num} className="flex gap-5">
                  {/* Number + connector */}
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-[#152F45] text-white font-heading font-extrabold text-[22px] flex items-center justify-center flex-shrink-0">
                      {step.num}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px flex-1 bg-gray-200 my-2 min-h-[32px]" />
                    )}
                  </div>
                  {/* Text */}
                  <div className="pb-8">
                    <h3 className="font-heading font-bold text-[18px] text-[#152F45] mb-1.5">{step.title}</h3>
                    <p className="text-[14px] text-gray-500 leading-[1.6]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80"
              alt="HVAC technician inspecting air ducts"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#152F45]/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl px-5 py-4">
              <div className="text-[13px] font-semibold text-[#152F45] mb-0.5">Certified &amp; Background-Checked</div>
              <div className="text-[12px] text-gray-500">Every technician is IICRC certified and background-screened before entering your home.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
