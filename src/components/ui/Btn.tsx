"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "outline" | "dark";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

export const Btn: React.FC<ButtonProps> = ({
  href,
  onClick,
  children,
  className,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
}) => {
  const baseClasses = cn(
    "relative inline-flex items-center justify-center gap-2 font-semibold tracking-wide overflow-hidden rounded-full transition-all duration-300 ease-in-out group",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black",
    {
      "text-sm px-5 py-2": size === "sm",
      "text-base px-7 py-2.5": size === "md",
      "text-lg px-9 py-3": size === "lg",

      // solid black like screenshot
      "bg-black text-white hover:bg-neutral-900":
        variant === "primary",
      "border border-black text-black hover:bg-black hover:text-white":
        variant === "outline",
      "bg-neutral-900 text-white hover:bg-black":
        variant === "dark",

      "opacity-50 cursor-not-allowed": disabled,
    },
    className
  );

  const ButtonInner = (
    <>
      {/* sheen animation kept as‑is */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out rounded-full" />
      <span className="relative z-10 flex items-center gap-2">
        <span>{children}</span>
        {/* arrow icon */}
        <span className="inline-flex items-center justify-center">
          <svg
            className="w-4 h-4 translate-x-0 group-hover:translate-x-0.5 transition-transform duration-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M13 6l6 6-6 6" />
          </svg>
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        className={baseClasses}
      >
        {ButtonInner}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={baseClasses}
    >
      {ButtonInner}
    </button>
  );
};
