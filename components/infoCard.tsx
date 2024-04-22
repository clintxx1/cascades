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
  const createMarkup = (htmlContent: string) => {
    return { __html: htmlContent };
  };
  return (
    <div className={cn("py-8", className)}>
      {hasHeader && headerImage ? (
        <Image
          src={headerImage}
          alt="divider"
          width={208}
          height={6}
          className="w-[208px] h-[6px]"
        />
      ) : null}
      <p
        className={cn(
          "text-[28px] font-semibold text-darkLiver",
          titleCN,
          `${hasHeader && "mt-8"}`
        )}
      >
        {title}
      </p>
      <div
        className={cn(
          `${lato.className} text-[20px] leading-[36px] text-darkLiver w-[500px]`,
          descriptionCN
        )}
        dangerouslySetInnerHTML={createMarkup(description)}
      ></div>
    </div>
  );
}
