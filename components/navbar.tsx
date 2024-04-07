"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AlignJustify, X } from "lucide-react";
import { Button } from "./ui/button";
import cascadesLogo from "@/public/headerlogo_1x.png"
import "@/app/globals.css"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "./ui/navigation-menu";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  page: string;
}

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
  }
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
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
          </a>
        </NavigationMenuLink>
      </li>
    )
  })
  ListItem.displayName = "ListItem"

  return (
    <header className="m-auto w-[calc(100%_-_16rem)] px-4 md:px-24 font-semibold">
      <div className="justify-between md:flex md:items-center">
        <div>
          <div
            className={`flex items-center justify-between py-3 md:block md:py-5`}
          >
            <Link href={"/"}>
              <Image
                src={cascadesLogo}
                alt="cascades logo"
                className="object-cover dark:invert"
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
            className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${navbar ? "block" : "hidden"
              }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>About</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid lg:grid-cols-1 gap-3 p-1 w-[150px]">
                        {ABOUT_ITEMS.map((item) => (
                          <ListItem
                            key={item.label}
                            title={item.label}
                            href={item.page}
                          ></ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid lg:grid-cols-1 gap-3 p-1 w-[150px]">
                        <ListItem
                          title={"Primary Program"}
                          href={"/primary-program"}
                        ></ListItem>
                        <ListItem
                          title={"Special Programs"}
                          href={"/special-programs"}
                        ></ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/features" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Features
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Admissions</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid lg:grid-cols-1 gap-3 p-1 w-[150px]">
                        <ListItem
                          title={"Enrollment Process"}
                          href={"/enrollment"}
                        ></ListItem>
                        <ListItem
                          title={"Scholarships"}
                          href={"/scholarship"}
                        ></ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/contact" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Contact
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>More</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid lg:grid-cols-1 gap-3 p-1 w-[150px]">
                        <ListItem
                          title={"Calendar"}
                          href={"/calendar"}
                        ></ListItem>
                        <ListItem
                          title={"FAQs"}
                          href={"/faqs"}
                        ></ListItem>
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