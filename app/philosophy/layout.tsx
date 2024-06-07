import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Our Mission Vision | Cascades.ph",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={"min-h-screen max-w-[1300px] px-[50px] mx-auto"}>
      {children}
    </div>
  );
}
