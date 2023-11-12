import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prijzen | Denise B Photography",
  description:
    "DB Photography - Denise Biegelaar is een familie & lifestyle fotograaf uit Hoofddorp, die echte momenten op een ongedwongen en liefdevolle manier vastlegt",
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
    <html lang="nl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
