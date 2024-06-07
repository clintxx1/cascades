import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/toaster";
import { josefinSans } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Cascades School",
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
