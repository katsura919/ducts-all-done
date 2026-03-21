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
    <section id="how-it-works" className="bg-primary py-16 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: steps */}
          <div>
            <div className="inline-block bg-blue-400/10 text-blue-300 text-[12px] font-bold tracking-[1.2px] uppercase px-3 py-1 rounded mb-3 border border-blue-400/20">
              Simple Process
            </div>
            <h2 className="font-heading font-bold text-white mb-3">How It Works</h2>
            <p className="text-[16px] text-blue-100/80 mb-10">
              Booking is easy. We handle the rest fast, clean, and professional every time.
            </p>

            <div className="flex flex-col gap-0">
              {steps.map((step, i) => (
                <div key={step.num} className="flex gap-5">
                  {/* Number + connector */}
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-blue-500 text-primary font-heading font-extrabold text-[22px] flex items-center justify-center flex-shrink-0 shadow-lg">
                      {step.num}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px flex-1 bg-white/15 my-2 min-h-[32px]" />
                    )}
                  </div>
                  {/* Text */}
                  <div className="pb-8">
                    <h3 className="font-heading font-bold text-[18px] text-white mb-1.5">{step.title}</h3>
                    <p className="text-[14px] text-blue-100/70 leading-[1.6]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/asset/how-it-works.png"
              alt="HVAC technician inspecting air ducts"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-xl px-5 py-4 border border-white/20">
              <div className="text-[13px] font-semibold text-white mb-0.5">Certified &amp; Background-Checked</div>
              <div className="text-[12px] text-blue-100/70">Every technician is IICRC certified and background-screened before entering your home.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
