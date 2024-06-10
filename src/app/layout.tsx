import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Analytics from "./analytics/analytics";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Hoofddorp Familie & Lifestyle Fotograaf | Denise B Photography",
    template: "%s | Denise B Photography",
  },
  openGraph: {
    title: "Hoofddorp Familie & Lifestyle Fotograaf | Denise B Photography",
    description:
      "Echte momenten, vastgelegd met liefde. Ervaar ongedwongen fotografie voor gezinnen en lifestyle. Laat je verrassen door prachtige foto's die jouw verhaal vertellen.",
    images: [
      {
        url: "/images/denise.webp",
        width: 750,
        height: 1124,
        alt: "Denise Biegelaar fotograaf uit Hoofddorp",
      },
    ],
    siteName: "https://www.denisebphotography.nl",
  },
  creator: "Dean Donovan | info@deanstavenuiter.nl",
  description:
    "Echte momenten, vastgelegd met liefde. Ervaar ongedwongen fotografie voor gezinnen en lifestyle. Laat je verrassen door prachtige foto's die jouw verhaal vertellen.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        {children}
        <Suspense>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
