import type { Metadata } from "next";
import { Fira_Mono, Geist, Lora } from "next/font/google";
import "./globals.css";
import { FontProvider } from "@/context/font-context";

// Sans-serif font with CSS variable
const geistSans = Geist({
  variable: "--font-sans",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  style: ["normal"],
});

// Serif font with CSS variable
const crimsonSerif = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

// Monospace font with CSS variable
const JetBrainMono = Fira_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "GlyphSwitch",
  description:
    "A lightweight, flexible font toggle for seamless typography control—designed to enhance UI readability and user experience across web projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${crimsonSerif.variable} ${JetBrainMono.variable} antialiased`}
      >
        <FontProvider>{children}</FontProvider>
      </body>
    </html>
  );
}
