import React from "react";
import NavLists from "./NavList";
import { MenuItems } from "@/utils/constant/menuItems";
import { Btn } from "@/components/ui/Btn";

const NavMenu: React.FC = () => {
  return (
    <>
      <nav className="lg:flex  ml-5 hidden h-full">
        <ul className="lg:flex md:gap-1 lg:gap-2 w-full h-full relative lg:items-center">
          <NavLists links={MenuItems} child={1} />
        </ul>
      </nav>
        <Btn href="/contact-us" className="ml-auto lg:!flex !hidden" >
          Lets Talk
        </Btn>
    </>
  );
};

export default NavMenu;
