import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Analytics from "./analytics/analytics";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Denise B Photography",

  keywords: [
    "Fotograaf",
    "Denise",
    "Biegelaar",
    "DBphotography",
    "Photography",
    "Familie",
    "lifestyle",
    "DB",
    "Hoofddorp",
    "Nieuw-Vennep",
    "Haarlem",
    "Haarlemmermeer",
    "Amsterdam",
    "Fotograaf Hoofddorp",
    "Fotograaf Haarlem",
    "Fotograaf Amsterdam",
    "Fotograaf Haarlemmermeer",
    "Fotograaf Nieuw-Vennep",
    "Trouwfotograaf Hoofddorp",
    "Trouwfotograaf Haarlem",
    "Trouwfotograaf Amsterdam",
    "Trouwfotograaf Haarlemmermeer",
    "Trouwfotograaf Nieuw-Vennep",
    "Trouw fotograaf Hoofddorp",
    "Trouw fotograaf Haarlem",
    "Trouw fotograaf Amsterdam",
    "Trouw fotograaf Haarlemmermeer",
    "Trouw fotograaf Nieuw-Vennep",
    "Familie fotograaf Hoofddorp",
    "Familie fotograaf Haarlem",
    "Familie fotograaf Amsterdam",
    "Familie fotograaf Haarlemmermeer",
    "Familie fotograaf Nieuw-Vennep",
    "Familiefotograaf Hoofddorp",
    "Familiefotograaf Haarlem",
    "Familiefotograaf Haarlemmermeer",
    "Familiefotograaf Nieuw-Vennep",
    "Geboortefotograaf Hoofddorp",
    "Geboortefotograaf Haarlem",
    "Geboortefotograaf Haarlemmermeer",
    "Geboortefotograaf Nieuw-Vennep",
    "Geboorte fotograaf Hoofddorp",
    "Geboorte fotograaf Haarlem",
    "Geboorte fotograaf Haarlemmermeer",
    "Geboorte fotograaf Nieuw-Vennep",
    "Fotoshoot",
    "Familieshoot",
  ],
  creator: "Dean Donovan | info@deanstavenuiter.nl",
  description:
    "DB Photography is een familie & lifestyle fotograaf, die echte momenten op een ongedwongen en liefdevolle manier vastlegt",
  icons: {
    icon: "https://example.com/favicon.ico",
    apple: "https://example.com/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Suspense>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
