import { lato } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { DetailsProps } from "@/types";
import React from "react";

export function Details({
  mainCN,
  labelCN,
  valueCN,
  label,
  value,
  onClick,
  ...props
}: DetailsProps) {
  const createMarkup = (htmlContent: string) => {
    return { __html: htmlContent };
  };
  return (
    <div
      className={cn("flex items-start justify-between w-[520px] py-2", mainCN)}
    >
      <div
        className={cn(
          `lg:text-[20px] lg:leading-[36px] leading-8 text-darkLiver font-semibold w-[470px] px-4`,
          labelCN
        )}
        dangerouslySetInnerHTML={createMarkup(label)}
      ></div>
      <div
        className={cn(
          `${lato.className} lg:text-[20px] lg:leading-[36px] leading-8 text-darkLiver w-full px-4`,
          valueCN
        )}
        dangerouslySetInnerHTML={createMarkup(value)}
      ></div>
    </div>
  );
}
