import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

interface SubLink {
  title: string;
  href?: string;
  subLinks?: SubLink[];
}

interface LinkAccordionProps {
  title: string;
  subLinks?: SubLink[];
  onClose: () => void;
}

const LinkAccordion: React.FC<LinkAccordionProps> = ({
  title,
  subLinks,
  onClose,
}) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1" className="font-normal">
        <AccordionTrigger className="border-b-2 px-5 py-1 min-h-[40px] rounded-none flex items-center no-underline hover:no-underline">
          <p className="text-sm fonr-mono ">{title}</p>
        </AccordionTrigger>
        <AccordionContent>
          <ul>
            {subLinks?.map((subLink, index) => (
              <li key={index} className="w-full">
                {subLink.href ? (
                  <Link
                    href={subLink.href}
                    onClick={onClose}
                    className="border-b-2 text-md px-5 py-1 w-full flex min-h-10 items-center"
                  >
                    {subLink.title}
                  </Link>
                ) : (
                  <LinkAccordion
                    title={subLink.title}
                    subLinks={subLink.subLinks}
                    onClose={onClose}
                  />
                )}
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default LinkAccordion;
