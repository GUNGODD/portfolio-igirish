"use client";

import {
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";

export const navigationItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "GuestBook",
    href: "/guestBook",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "About",
    href: "/about",
  },
];

export const Navbar = () => {
  return (
    <>
      <div className=" max-w-7xl mx-auto  px-4  md:px-8  py-5 grid grid-cols-12 ">
        <div className=" col-span-6 flex md:col-span-3 ">
          <Link href="/">
            <h1 className=" text-3xl font-semibold">
              Aditya <span className="text-blue-500">Singh</span>
            </h1>
          </Link>
        </div>

        <div className="hidden sm:flex  justify-center  items-center col-span-6">
          <NavigationMenu>
            <NavigationMenuList>
              {navigationItems.map((items, index) => (
                <NavigationMenuItem key={index}>
                  <Link href={items} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {" "}
                      {items.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>{" "}
        </div>
      </div>
    </>
  );
};

export default Navbar;
