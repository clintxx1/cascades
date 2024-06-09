import React from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";
import LinkDropdown from "./linkDropdown";

export default function MobileNavbar({
  open,
  setIsOpen,
}: {
  open: boolean;
  setIsOpen: any;
}) {
  const pathname = usePathname();
  return (
    <Sheet open={open} onOpenChange={(e) => setIsOpen(e)}>
      <SheetContent className="w-full !m-0 !max-w-full min-h-screen bg-blueSapphire">
        {/* <div className="grid gap-4 py-4"> */}
        <div className="grid grid-cols-1 md:lg:text-[28px] text-[24px] text-[20px] h-max">
          <LinkDropdown
            dropdownData={[
              {
                label: "About",
                value: "about",
                description: [
                  {
                    label: "Approach",
                    page: "/approach",
                  },
                  {
                    label: "Philosophy",
                    page: "/philosophy",
                  },
                  {
                    label: "Founder's Note",
                    page: "/founders-note",
                  },
                  {
                    label: "Community",
                    page: "/community",
                  },
                ],
              },
            ]}
          />
          <LinkDropdown
            dropdownData={[
              {
                label: "Programs",
                value: "programs",
                description: [
                  {
                    label: "Primary Program",
                    page: "/primary-program",
                  },
                  {
                    label: "Special Programs",
                    page: "/special-programs",
                  },
                ],
              },
            ]}
          />
          <Link
            href="/features"
            className={`${pathname === "/features" && "text-white"} py-8`}
          >
            <span>Features</span>
          </Link>
          <Separator />
          <Link
            href="/branches"
            className={`${pathname === "/branches" && "text-white"} py-8`}
          >
            <span>Branches</span>
          </Link>
          <Separator />
          <LinkDropdown
            dropdownData={[
              {
                label: "Admissions",
                value: "admissions",
                description: [
                  {
                    label: "Enrollment Process",
                    page: "/enrollment",
                  },
                  {
                    label: "Scholarships",
                    page: "/scholarship",
                  },
                  {
                    label: "Tuition Fee",
                    page: "/tuition-fee",
                  },
                ],
              },
            ]}
          />
          <Link
            href="/contact"
            className={`${pathname === "/contact" && "text-white"} py-8`}
          >
            <span>Contact</span>
          </Link>
          <Separator />
          <LinkDropdown
            dropdownData={[
              {
                label: "More",
                value: "more",
                description: [
                  {
                    label: "Calendar",
                    page: "/calendar",
                  },
                  {
                    label: "FAQs",
                    page: "/faqs",
                  },
                  {
                    label: "Careers",
                    page: "/cascade-careers",
                  },
                ],
              },
            ]}
            hasSeparator={false}
          />
        </div>
        {/* </div> */}
      </SheetContent>
    </Sheet>
  );
}
