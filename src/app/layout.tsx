import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Analytics from "./analytics/analytics";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Denise B Photography",
    template: " %s | Denise B Photography",
  },
  keywords: [
    "Fotograaf",
    "Denise",
    "Biegelaar",
    "DBphotography",
    "Photography",
    "Familie",
    "lifestyle",
    "DB",
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
