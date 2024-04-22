"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AlignJustify, X } from "lucide-react";
import { Button } from "./ui/button";
import cascadesLogo from "@/public/headerlogo_2x.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types";

const ABOUT_ITEMS: Array<NavItem> = [
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
];

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
  >(({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors mb-1",
              className
            )}
            {...props}
          >
            <div className=" font-semibold text-white hover:text-safetyOrange">
              {title}
            </div>
          </a>
        </NavigationMenuLink>
      </li>
    );
  });
  ListItem.displayName = "ListItem";

  return (
    <header className="m-auto w-[calc(100%_-_16rem)] px-4 lg:px-32">
      <div className="justify-between flex lg:items-center">
        <div className={`flex-shrink-0 py-3 lg:block lg:py-5`}>
          <Link href={"/"}>
            <Image
              src={"https://ik.imagekit.io/cascades/cascades/headerlogo_2x.png"}
              alt="cascades logo"
              className="customImage flex-shrink-0"
              width={345}
              height={89}
            />
          </Link>
        </div>
        <div>
          <div
            className={`mt-8 flex items-center justify-center pb-3 lg:mt-0 lg:block lg:pb-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="customNavbar">
                      About
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-meatBrown">
                      <ul className="grid lg:grid-cols-1 gap-x-1 w-[200px]">
                        {ABOUT_ITEMS.map((item, index) => (
                          <>
                            <ListItem
                              key={index}
                              title={item.label}
                              href={item.page}
                            ></ListItem>
                            {index < ABOUT_ITEMS.length - 1 && (
                              <div className="w-full bg-white h-[2px] p-0 m-0"></div>
                            )}
                          </>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="customNavbar">
                      Programs
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-meatBrown">
                      <ul className="grid lg:grid-cols-1 gap-x-1 w-[200px] relative">
                        <ListItem
                          key={"primaryProgram"}
                          title={"Primary Program"}
                          href={"/primary-program"}
                        ></ListItem>
                        <div className="w-full bg-white h-[2px] p-0 m-0"></div>
                        <ListItem
                          key={"specialPrograms"}
                          title={"Special Programs"}
                          href={"/special-programs"}
                        ></ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/features" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={`${navigationMenuTriggerStyle()} customNavbar`}
                      >
                        Features
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="customNavbar">
                      Admissions
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-meatBrown">
                      <ul className="grid lg:grid-cols-1 gap-x-1 w-[200px]">
                        <ListItem
                          key={"enrollmentProcess"}
                          title={"Enrollment Process"}
                          href={"/enrollment"}
                        ></ListItem>
                        <div className="w-full bg-white h-[2px] p-0 m-0"></div>
                        <ListItem
                          key={"scholarships"}
                          title={"Scholarships"}
                          href={"/scholarship"}
                        ></ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/contact" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={`${navigationMenuTriggerStyle()} customNavbar`}
                      >
                        Contact
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="customNavbar">
                      More
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-meatBrown">
                      <ul className="grid lg:grid-cols-1 gap-x-1 w-[200px]">
                        <ListItem
                          key={"calendar"}
                          title={"Calendar"}
                          href={"/calendar"}
                        ></ListItem>
                        <div className="w-full bg-white h-[2px] p-0 m-0"></div>
                        <ListItem
                          key={"faqs"}
                          title={"FAQs"}
                          href={"/faqs"}
                        ></ListItem>
                        <div className="w-full bg-white h-[2px] p-0 m-0"></div>
                        <ListItem
                          key={"careers"}
                          title={"Careers"}
                          href={"/cascade-careers"}
                        ></ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="lg:hidden">
            <Button onClick={() => setNavbar(!navbar)}>
              {navbar ? <X size={30} /> : <AlignJustify size={30} />}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
