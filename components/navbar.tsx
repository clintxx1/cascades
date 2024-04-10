"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AlignJustify, X } from "lucide-react";
import { Button } from "./ui/button";
import cascadesLogo from "@/public/headerlogo_1x.png";
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
            <div className=" font-semibold text-white hover:text-customOrange">
              {title}
            </div>
          </a>
        </NavigationMenuLink>
      </li>
    );
  });
  ListItem.displayName = "ListItem";

  return (
    <header className="m-auto w-[calc(100%_-_16rem)] px-4 md:px-32">
      <div className="justify-between flex md:items-center">
        <div>
          <div
            className={`flex items-center justify-between py-3 md:block md:py-5`}
          >
            <Link href={"/"}>
              <Image
                src={cascadesLogo}
                alt="cascades logo"
                className="customImage"
              />
            </Link>
            <div className="md:hidden">
              <Button onClick={() => setNavbar(!navbar)}>
                {navbar ? <X size={30} /> : <AlignJustify size={30} />}
              </Button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="customNavbar">
                      About
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-customOrange2">
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
                    <NavigationMenuContent className="bg-customOrange2">
                      <ul className="grid lg:grid-cols-1 gap-x-1 w-[200px] relative">
                        <ListItem
                          title={"Primary Program"}
                          href={"/primary-program"}
                        ></ListItem>
                        <div className="w-full bg-white h-[2px] p-0 m-0"></div>
                        <ListItem
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
                    <NavigationMenuContent className="bg-customOrange2">
                      <ul className="grid lg:grid-cols-1 gap-x-1 w-[200px]">
                        <ListItem
                          title={"Enrollment Process"}
                          href={"/enrollment"}
                        ></ListItem>
                        <div className="w-full bg-white h-[2px] p-0 m-0"></div>
                        <ListItem
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
                    <NavigationMenuContent className="bg-customOrange2">
                      <ul className="grid lg:grid-cols-1 gap-x-1 w-[200px]">
                        <ListItem
                          title={"Calendar"}
                          href={"/calendar"}
                        ></ListItem>
                        <div className="w-full bg-white h-[2px] p-0 m-0"></div>
                        <ListItem title={"FAQs"} href={"/faqs"}></ListItem>
                        <div className="w-full bg-white h-[2px] p-0 m-0"></div>
                        <ListItem
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
        </div>
      </div>
    </header>
  );
}
