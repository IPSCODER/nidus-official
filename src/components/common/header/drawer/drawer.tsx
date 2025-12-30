"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import LinkDawer from "./LinkDrawer";

function Drawer() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <nav className="lg:hidden ml-auto">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button
            className="lg:hidden relative z-50 cursor-pointer flex flex-col gap-1 w-6 h-6"
            onClick={handleOpen}
          >
            <span className="w-full h-1 bg-black transition-all duration-300" />
            <span className="w-full h-1 bg-black transition-all duration-300" />
            <span className="w-full h-1 bg-black transition-all duration-300" />
          </button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle></SheetTitle>
          </SheetHeader>
          <LinkDawer onLinkClick={handleClose} />
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export default Drawer;
