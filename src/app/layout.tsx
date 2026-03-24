import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CandleGuy — Hand-Poured Soy Candles",
    template: "%s | CandleGuy",
  },
  description:
    "Hand-poured soy candles crafted with natural ingredients and premium fragrance oils. Shop individual candles, bundles, and gift sets.",
  keywords: ["candles", "soy candles", "hand-poured candles", "candle gift", "aromatherapy candles"],
  openGraph: {
    title: "CandleGuy — Hand-Poured Soy Candles",
    description: "Natural soy candles crafted with premium fragrance oils.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} scroll-smooth`}>
      <body className="flex min-h-screen flex-col bg-[#fdf8f2] text-stone-900 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CartDrawer />
      </body>
    </html>
  );
}
