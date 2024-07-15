import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

const navItems = ["Home", "Projects", "About me", "Contact me"];

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant={"ghost"} size={"icon"} className='md:hidden'>
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader aria-description='Navbar'>
          <SheetTitle hidden>Navbar</SheetTitle>
          <div
            className='flex flex-col items-start'
            onClick={(e) => {
              const target = e.target as HTMLElement;
              if (target.tagName === "BUTTON") return setOpen(false);
            }}
          >
            {navItems.map((item, index) => (
              <Button key={index} variant={"link"}>
                {item}
              </Button>
            ))}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
