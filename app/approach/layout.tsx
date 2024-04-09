import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={"h-screen sm:px-0 md:px-20 lg:px-64 flex"}>{children}</div>
  );
}
