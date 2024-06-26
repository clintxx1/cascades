import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Our Framework | Cascades.ph",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={
        "min-h-screen max-w-[1300px] lg:px-[50px] md:px-[50px] px-6 mx-auto py-8"
      }
    >
      {children}
    </div>
  );
}
