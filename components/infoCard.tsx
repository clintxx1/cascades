import { lato } from "@/app/layout";
import { cn } from "@/lib/utils";
import { InfoCardProps } from "@/types";
import React from "react";

export default function InfoCard({
  titleCN,
  title,
  description,
  descriptionCN,
}: InfoCardProps) {
  return (
    <div className="py-8">
      <p className={cn("text-[28px] font-semibold text-customDark", titleCN)}>
        {title}
      </p>
      <p
        className={cn(
          `${lato.className} text-[20px] leading-[36px] text-customDark w-[500px]`,
          descriptionCN
        )}
      >
        {description}
      </p>
    </div>
  );
}
