"use client";

import Navbar from "@/components/navbar";
import "./globals.css";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
