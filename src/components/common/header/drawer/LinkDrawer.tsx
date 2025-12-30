import { MenuItems } from "@/utils/constant/menuItems";
import Link from "next/link";
import React from "react";
import LinkAccordion from "./LinkAccordion";

interface LinkDrawerProps {
  onLinkClick: () => void;
}

const LinkDawer: React.FC<LinkDrawerProps> = ({ onLinkClick }) => {
  return (
    <ul className="w-full overflow-auto pb-4">
      {MenuItems.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <li className="w-full">
              {item.href ? (
                <Link
                  href={item.href}
                  onClick={onLinkClick}
                  className="px-5 pv-1 border-b-2 w-full flex min-h-[40px] text-sm items-center"
                >
                  {item.title}
                </Link>
              ) : (
                <LinkAccordion
                  title={item.title}
                  subLinks={item.subLinks}
                  onClose={onLinkClick}
                />
              )}
            </li>
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default LinkDawer;
