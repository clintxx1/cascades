import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={"min-h-screen max-w-[1300px] px-[50px] mx-auto text-darkLiver"}
    >
      {children}
    </div>
  );
}
