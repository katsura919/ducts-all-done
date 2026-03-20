import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ducts All Done – Duct Cleaning Tampa FL | Trusted by Locals",
  description:
    "Serving the Tampa area with honest, thorough duct cleaning. Great reviews. Certified techs. Get a free estimate and breathe cleaner today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased", inter.variable, montserrat.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
