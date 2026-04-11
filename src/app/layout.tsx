import type { Metadata } from "next";
import { Noto_Serif, Manrope, Inter } from "next/font/google";
import "./globals.css";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  weight: ["400", "700"],
  style: ["normal", "italic"]
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "600", "800"]
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "600"]
});

export const metadata: Metadata = {
  title: "THE PRIVATE CONCIERGE | Home",
  description: "A private, discreet concierge for families who value dignity and deep emotional connection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&" rel="stylesheet" />
      </head>
      <body
        className={`${notoSerif.variable} ${manrope.variable} ${inter.variable} min-h-screen flex flex-col bg-surface text-on-surface selection:bg-primary selection:text-on-primary overflow-x-hidden`}
      >
        <TopNavBar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
