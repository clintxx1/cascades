import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/toaster";

export const josefinSans = localFont({
  src: [
    {
      path: "../font/JosefinSans-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
    {
      path: "../font/JosefinSans-VariableFont_wght.ttf",
      style: "normal",
    },
  ],
  variable: "--font-josefin",
});

export const lato = localFont({
  src: "../font/Lato-Regular.ttf",
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Cascades International",
  description: "cascades.ph",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SpeedInsights />
      <body className={josefinSans.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
