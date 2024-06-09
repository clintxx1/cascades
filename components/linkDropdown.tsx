import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { NavItem } from "@/types";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";

export default function LinkDropdown({
  dropdownData = [],
  hasSeparator = true,
}: {
  dropdownData: {
    value: string;
    label: string;
    description: NavItem[];
  }[];
  hasSeparator?: boolean;
}) {
  const pathname = usePathname();

  return (
    <Accordion type="single" collapsible>
      {dropdownData.map((item) => (
        <AccordionItem value={item.value} key={item.value}>
          <AccordionTrigger
            className={`flex justify-start gap-5 items-center font-normal md:lg:text-[28px] text-[24px] text-[20px] data-[state=open]:no-underline hover:font-normal`}
          >
            {item.label}
            <ChevronDown className="h-6 w-6 shrink-0 transition-transform duration-200" />
          </AccordionTrigger>
          <AccordionContent className="space-y-4">
            {item.description.length ? (
              <>
                {item.description.map((val) => (
                  <div className="flex flex-1 text-xl pl-14" key={val.page}>
                    <Link
                      href={val.page}
                      className={`${pathname === val.page && "text-white"}`}
                    >
                      {val.label}
                    </Link>
                  </div>
                ))}
              </>
            ) : null}
          </AccordionContent>
        </AccordionItem>
      ))}
      {hasSeparator && <Separator />}
    </Accordion>
  );
}
