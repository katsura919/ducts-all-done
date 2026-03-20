"use client";

import Image from "next/image";
import { Phone } from "lucide-react";



const Button = ({ children, className = "", variant = "primary" }: any) => {
  const baseStyle =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium transition-colors";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-white text-blue-500 hover:bg-gray-50",
    outline: "border-2 border-blue-500 text-blue-500 hover:bg-blue-50",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`}
    >
      {children}
      <div className=" text-white rounded-full p-1 ml-2">
        <Phone className="w-4 h-4" />
      </div>
    </button>
  );
};

export default function Header() {
  return (
    <div className="pt-6 px-6 max-w-7xl mx-auto absolute top-0 left-0 right-0 z-50">
      <nav className="flex items-center justify-between bg-white rounded-full px-4 py-3 shadow-sm">
        <a href="#" className="flex-shrink-0">
          <Image
            src="/asset/logo.webp"
            alt="Ducts All Done"
            width={160}
            height={44}
            className="h-[40px] w-auto object-contain"
            priority
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-slate-900 font-medium hover:text-blue-500"
          >
            Home
          </a>
          <a
            href="#"
            className="text-slate-600 font-medium hover:text-blue-500"
          >
            Services
          </a>
          <a
            href="#"
            className="text-slate-600 font-medium hover:text-blue-500"
          >
            About
          </a>
          <a
            href="#"
            className="text-slate-600 font-medium hover:text-blue-500"
          >
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4 pr-1">
          <Button className="py-2 px-6 text-sm">813-923-2906</Button>
        </div>
      </nav>
    </div>
  );
}
