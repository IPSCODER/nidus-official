import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavMenu from "./nav/nav";
import Drawer from "./drawer/drawer";

const Header = () => {
  return (
    <header
      className={`fixed top-6 left-1/2 -translate-x-1/2  w-full z-50  mx-auto px-4`}
    >
<div className=" rounded-md w-full px-4 bg-accent/90 h-16 backdrop-blur-lg bg-white/10 flex items-center justify-start lg:justify-between px-4 transition-all duration-300 z-50 mx-auto" >
<Link href="/" className="relative z-50">
        <Image src='/nidus-black.png' width={100} height={100} className="w-28" alt="Logo" priority />
      </Link>
      <NavMenu />
      
      <Drawer />
</div>
    </header>
  );
};

export default Header;
