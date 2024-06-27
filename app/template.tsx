"use client";

import Navbar from "@/components/navbar";
import "./globals.css";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const showNavBar = path === "/admin";
  return (
    <div className="w-full h-screen overflow-auto relative">
      {!showNavBar && <Navbar />}
      {children}
    </div>
  );
}
