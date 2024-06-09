"use client";

import Navbar from "@/components/navbar";
import "./globals.css";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-screen overflow-auto relative">
      <Navbar />
      {children}
    </div>
  );
}
