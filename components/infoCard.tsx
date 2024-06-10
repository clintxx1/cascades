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
          className="lg:w-[208px] w-full object-contain h-[6px]"
        />
      ) : null}
      <p
        className={cn(
          "lg:text-[28px] text-[24px] font-semibold text-darkLiver lg:text-start text-center",
          titleCN,
          `${hasHeader && "mt-8"}`
        )}
      >
        {title}
      </p>
      {isDropdown && dropdownData.length ? (
        <Accordion
          type="single"
          collapsible
          className="lg:w-[500px] w-full lg:block grid gap-0 place-items-center"
        >
          {dropdownData.map((item) => (
            <AccordionItem value={item.value} key={item.value}>
              <AccordionTrigger
                className={`${lato.className} font-normal lg:text-[20px] text-base text-darkLiver`}
              >
                {item.label}
              </AccordionTrigger>
              <AccordionContent>
                <div
                  className={cn(
                    `${lato.className} text-lg text-darkLiver lg:w-[500px] w-full border p-5 lg:text-start text-justify`,
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
            `${lato.className} lg:text-[20px] lg:leading-[36px] leading-8 text-darkLiver lg:w-[500px] w-full lg:px-0 px-4 lg:text-start text-justify`,
            descriptionCN
          )}
          dangerouslySetInnerHTML={createMarkup(description)}
        ></div>
      )}
    </div>
  );
}
