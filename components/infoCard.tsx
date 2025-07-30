import { lato } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { InfoCardProps } from "@/types";
import { LazyImage } from "@/components/ui/lazy-image";
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
  hasSubtitle = false,
  subtitle = "",
}: InfoCardProps) {
  const createMarkup = (htmlContent: string) => {
    return { __html: htmlContent };
  };
  return (
    <div className={cn("py-8 text-darkLiver", className)}>
      {hasHeader && headerImage ? (
        <LazyImage
          src={headerImage}
          alt="divider"
          width={208}
          height={6}
          className="lg:w-[208px] w-full object-contain h-[6px]"
        />
      ) : null}
      <div
        className={cn(
          "lg:text-[28px] text-[24px] font-semibold  lg:text-start text-center",
          titleCN,
          `${hasHeader && "mt-8"}`
        )}
        dangerouslySetInnerHTML={createMarkup(title)}
      ></div>
      {hasSubtitle && (
        <p className="text-xs pl-6 pb-2 lg:text-start text-center">
          {subtitle}
        </p>
      )}
      {isDropdown && dropdownData.length ? (
        <Accordion
          type="single"
          collapsible
          className="lg:w-[500px] w-full lg:block grid gap-0 place-items-center"
        >
          {dropdownData.map((item) => (
            <AccordionItem value={item.value} key={item.value}>
              <AccordionTrigger
                className={`${lato.className} font-normal lg:text-[20px] text-base `}
              >
                <div dangerouslySetInnerHTML={createMarkup(item.label)}></div>
              </AccordionTrigger>
              <AccordionContent>
                <div
                  className={cn(
                    `${lato.className} text-lg  lg:w-[500px] w-full border p-5 lg:text-start text-justify`,
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
            `${lato.className} lg:text-[20px] lg:leading-[36px] leading-8  lg:w-[500px] w-full lg:px-0 px-4 lg:text-start text-justify`,
            descriptionCN
          )}
          dangerouslySetInnerHTML={createMarkup(description)}
        ></div>
      )}
    </div>
  );
}
