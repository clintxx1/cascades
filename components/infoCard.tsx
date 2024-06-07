import { lato } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { InfoCardProps } from "@/types";
import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function InfoCard({
  className,
  titleCN,
  title,
  description,
  descriptionCN,
  hasHeader = false,
  headerImage,
  isDropdown = false,
  dropdownData = [],
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
      {isDropdown && dropdownData.length ? (
        <Accordion type="single" collapsible className="w-[500px]">
          {dropdownData.map((item) => (
            <AccordionItem value={item.value} key={item.value}>
              <AccordionTrigger
                className={`${lato.className} font-normal text-[20px] text-darkLiver`}
              >
                {item.label}
              </AccordionTrigger>
              <AccordionContent>
                <div
                  className={cn(
                    `${lato.className} text-lg text-darkLiver w-[500px] border p-5`,
                    descriptionCN
                  )}
                  dangerouslySetInnerHTML={createMarkup(item.description)}
                ></div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <div
          className={cn(
            `${lato.className} text-[20px] leading-[36px] text-darkLiver w-[500px]`,
            descriptionCN
          )}
          dangerouslySetInnerHTML={createMarkup(description)}
        ></div>
      )}
    </div>
  );
}
