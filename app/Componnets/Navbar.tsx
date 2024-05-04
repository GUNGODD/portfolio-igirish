"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuLink,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

export const navigationItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "GuestBook",
    href: "/guestbook",
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
  const pathname = usePathname();
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
              {navigationItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <Link href={item} legacyBehavior passHref>
                    <NavigationMenuLink
                      active={pathname === item.href}
                      className={navigationMenuTriggerStyle()}
                    >
                      {" "}
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>{" "}
        </div>

        <div className="flex items-center justify-end md:col-span-3 col-span-6 ">
          <Button className="hidden sm:block">Contact Me</Button>
          <div className=" sm:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
