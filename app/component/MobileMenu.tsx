import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { navigationItems } from "./Navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
export const MobileMenu = () => {
  const location = usePathname();
  const [SidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setSidebarOpen(false);
  }, [location]);
  return (
    <>
      <Sheet open={SidebarOpen} onOpenChange={(state) => setSidebarOpen(state)}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="h-4 w-4 " />
          </Button>
        </SheetTrigger>

        <SheetContent>
          <div className="mt-5 flex px-2 space-y-1 flex-col">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  location === item.href
                    ? "bg-muted"
                    : "hover:bg-muted hover:bg-opacity-75",
                  "group flex items-center font-semibold",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <SheetFooter className="mt-5">
            <SheetClose asChild>
              <Button type="submit">Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileMenu;