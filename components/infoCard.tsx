import { lato } from "@/app/layout";
import { cn } from "@/lib/utils";
import { InfoCardProps } from "@/types";
import Image from "next/image";
import React from "react";

export default function InfoCard({
  className,
  titleCN,
  title,
  description,
  descriptionCN,
  hasHeader = false,
  headerImage,
}: InfoCardProps) {
  return (
    <div className={cn("py-8", className)}>
      {hasHeader && headerImage ? (
        <Image src={headerImage} alt="divider" className="w-[208px] h-[6px]" />
      ) : null}
      <p
        className={cn(
          "text-[28px] font-semibold text-customDark",
          titleCN,
          `${hasHeader && "mt-8"}`
        )}
      >
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
