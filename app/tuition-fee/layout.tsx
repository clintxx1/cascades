import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={
        "min-h-screen max-w-[1300px] lg:px-[50px] md:px-[50px] px-6 mx-auto text-darkLiver"
      }
    >
      {children}
    </div>
  );
}
