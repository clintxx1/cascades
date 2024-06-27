import { lato } from "@/lib/fonts";
import { Loader } from "lucide-react";
import React, { Suspense } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${lato.className} min-h-screen max-w-[1300px] lg:px-[50px] md:px-[50px] px-6 mx-auto py-8 text-darkLiver`}
    >
      <Suspense
        fallback={
          <div className="w-full h-full flex flex-col items-center justify-center text-crystalBlue text-3xl font-semibold gap-5">
            Loading Cascades Portal
            <Loader className="animate-spin h-12 w-12" />
          </div>
        }
      >
        {children}
      </Suspense>
    </div>
  );
}
