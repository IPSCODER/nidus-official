"use client";
import React from "react";
import Link from "next/link";
import classes from "./nav-list.module.css";
import { usePathname } from "next/navigation";
import { SlArrowDown, SlArrowRight } from "react-icons/sl";
interface LinkItem {
  title: string;
  href?: string;
  subLinks?: LinkItem[];
}

const NavLists: React.FC<{ links: LinkItem[]; child: number }> = ({
  links,
  child,
}) => {
  const pathName = usePathname();

  return (
    <React.Fragment>
      {links.map((item, index) => {
        const arrow =
          item?.title === "Parenting Stages" ? (
            <SlArrowDown className="w-3 ml-2 pt-[1%]" />
          ) : (
            <SlArrowRight className="w-3 ml-2 pt-1" />
          );
        return (
          <li key={index} className={classes["parent-list"]}>
            {item.href ? (
              <Link
                href={item.href}
                className={` hover:text-primary capitalize font-kappa font-light ${
                  item.href === pathName ? "text-primary" : "text-black"
                }`}
              >
                {item.title}
              </Link>
            ) : (
              <span
                className={`hover:text-primary capitalize h-full font-kappa font-normal cursor-pointer flex  items-center  ${
                  pathName?.split("/")[child]?.split("-")[0] ===
                  item?.title?.split(" ")[0]?.toLowerCase()
                    ? "text-primary"
                    : "text-black"
                }`}
              >
                {item.title}
                {arrow}
              </span>
            )}
            {item.subLinks && (
              <ul className={classes["child-list"]}>
                <NavLists links={item.subLinks} child={2} />
              </ul>
            )}
          </li>
        );
      })}
    </React.Fragment>
  );
};

export default NavLists;
