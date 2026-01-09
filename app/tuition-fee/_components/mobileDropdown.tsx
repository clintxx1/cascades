import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { createSanitizedMarkup } from "@/lib/sanitize";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types";
import { ChevronDown } from "lucide-react";
import React from "react";

export default function MobileDropdown({
  dropdownData = [],
}: {
  dropdownData: {
    value: string;
    label: string;
    description: NavItem[];
  }[];
}) {
  return (
    <Accordion type="single" collapsible>
      {dropdownData.map((item, index) => (
        <AccordionItem value={item.value} key={item.value}>
          <AccordionTrigger
            className={`flex items-center text-start font-normal lg:text-lg text-base data-[state=open]:no-underline hover:font-normal`}
          >
            <div
              dangerouslySetInnerHTML={createSanitizedMarkup(item.label)}
            ></div>
            <ChevronDown className="h-6 w-6 shrink-0 transition-transform duration-200" />
          </AccordionTrigger>
          <AccordionContent className="space-y-4">
            {item.description.length ? (
              <>
                {item.description.map((val) => (
                  <div
                    className={cn(
                      "lg:text-base text-sm border rounded-lg p-3",
                      val.className
                    )}
                    key={val.page}
                    dangerouslySetInnerHTML={createSanitizedMarkup(val.label)}
                  ></div>
                ))}
              </>
            ) : null}
          </AccordionContent>
          {dropdownData.length !== index + 1 && <Separator />}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
