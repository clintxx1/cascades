import { Separator } from "@/components/ui/separator";
import { BranchCardProps } from "@/types";
import { LazyImage } from "@/components/ui/lazy-image";
import React from "react";

export function BranchCard({
  image,
  name,
  branch,
  address,
  email,
  contactNumber,
}: BranchCardProps) {
  return (
    <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col items-center justify-start lg:gap-10 md:gap-10 sm:gap-10 py-2">
      <LazyImage
        src={image}
        alt={"image1"}
        width={200}
        height={200}
        className="object-contain"
      />
      <div className="flex lg:flex-row flex-col lg:gap-0 gap-5">
        <div className="min-w-[280px]">
          <p className="font-semibold lg:text-center md:text-start sm:text-left text-center">
            {name}
          </p>
          <p className="text-base lg:text-center md:text-left sm:text-left text-center">
            {branch}
          </p>
          {email && (
            <p className="text-base lg:text-center md:text-left sm:text-left text-center">
              Email: {email}
            </p>
          )}
          {contactNumber && (
            <p className="text-base lg:text-center md:text-left sm:text-left text-center">
              Contact Number:
              <a href="tel:{contactNumber}">{contactNumber}</a>
            </p>
          )}
        </div>
        <div>
          <p className="font-semibold lg:pl-10 lg:text-center md:text-left sm:text-left text-center">
            {address}
          </p>
        </div>
      </div>
      <Separator className="sm:hidden block" />
    </div>
  );
}
