import "../../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dante | Denise B Photography",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
