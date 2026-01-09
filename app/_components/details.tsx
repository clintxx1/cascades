import { lato } from "@/lib/fonts";
import { createSanitizedMarkup } from "@/lib/sanitize";
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
  return (
    <div
      className={cn(
        "flex items-start justify-between lg:w-[520px] w-full py-2",
        mainCN
      )}
    >
      <div
        className={cn(
          `lg:text-[20px] text-base lg:leading-[36px] leading-8 text-darkLiver font-semibold lg:w-[470px] w-full lg:px-4`,
          labelCN
        )}
        dangerouslySetInnerHTML={createSanitizedMarkup(label)}
      ></div>
      <div
        className={cn(
          `${lato.className} lg:text-[20px] text-base lg:leading-[36px] leading-8 text-darkLiver w-full lg:px-4`,
          valueCN
        )}
        dangerouslySetInnerHTML={createSanitizedMarkup(value)}
      ></div>
    </div>
  );
}
