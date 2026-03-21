"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  Users,
  Star,
  ThumbsUp,
  ShieldCheck,
  MapPin,
  Wrench,
  Leaf,
  DollarSign,
  Clock,
  CheckCircle2
} from "lucide-react";

const trustValues = [
  { text: "1,000+ Customers Served", icon: Users },
  { text: "5.0★ Google Rating", icon: Star },
  { text: "114+ Five-Star Reviews", icon: ThumbsUp },
  { text: "100% Satisfaction Guarantee", icon: ShieldCheck },
  { text: "Locally Owned in Tampa", icon: MapPin },
  { text: "Advanced Cleaning Tech", icon: Wrench },
  { text: "EPA Certified Methods", icon: Leaf },
  { text: "No Hidden Fees", icon: DollarSign },
  { text: "Fast Availability", icon: Clock },
  { text: "Licensed & Insured", icon: CheckCircle2 },
];

export default function TrustBar() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = container.current?.querySelector(".marquee-track") as HTMLElement;
      if (!track) return;

      // Animate from 0 to -50% to loop the duplicated content smoothly
      gsap.to(track, {
        xPercent: -50,
        repeat: -1,
        duration: 40,
        ease: "none",
      });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="bg-white  shadow-[0_4px_20px_rgba(0,0,0,0.03)] py-4 overflow-hidden"
    >
      <div className="flex w-max marquee-track items-center">
        {[...trustValues, ...trustValues].map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-8 md:gap-12 pr-8 md:pr-12"
            >
              <div className="flex items-center gap-2.5 hover:scale-105 transition-transform cursor-default">
                <Icon className="w-[18px] h-[18px] text-blue-500" strokeWidth={2.5} />
                <span className="font-heading font-extrabold text-[#152F45] text-[13px] md:text-[14px] uppercase tracking-wider">
                  {item.text}
                </span>
              </div>
              {/* Delimiter */}
              <div className="w-1.5 h-1.5 rounded-full bg-blue-100" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
