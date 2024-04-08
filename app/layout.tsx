import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local"

const inter = Inter({ subsets: ["latin"] });

const josefinSans = localFont({
  src: [
    {
      path: "../font/JosefinSans-Italic-VariableFont_wght.ttf",
      style: "italic"
    },
    {
      path: "../font/JosefinSans-VariableFont_wght.ttf",
      style: "normal"
    },
  ]
})

export const metadata: Metadata = {
  title: "Cascades International School",
  description: "cascades.ph",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={josefinSans.className}>{children}</body>
    </html>
  );
}
