import { lato } from "@/app/layout";
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
          `text-[20px] leading-[36px] text-darkLiver font-semibold w-[470px] px-4`,
          labelCN
        )}
        dangerouslySetInnerHTML={createMarkup(label)}
      ></div>
      <div
        className={cn(
          `${lato.className} text-[20px] leading-[36px] text-darkLiver w-full px-4`,
          valueCN
        )}
        dangerouslySetInnerHTML={createMarkup(value)}
      ></div>
    </div>
  );
}
