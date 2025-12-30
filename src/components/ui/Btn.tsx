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
    "relative inline-flex items-center justify-center font-semibold tracking-wide overflow-hidden rounded-md transition-all duration-300 ease-in-out group",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#ff8c00]",
    {
      "text-sm px-4 py-1.5": size === "sm",
      "text-base px-6 py-2": size === "md",
      "text-lg px-8 py-2.5": size === "lg",

      // 🔸 Brand color palette — orange + black theme
      "bg-gradient-to-br from-[#ff8c00] to-[#ffb390] text-white shadow-[0_4px_20px_rgba(255,140,0,0.35)] hover:shadow-[0_6px_25px_rgba(255,140,0,0.5)] hover:scale-[1.03]":
        variant === "primary",
      "border border-[#ff8c00] text-[#ff8c00] hover:bg-[#ff8c00]/10":
        variant === "outline",
      "bg-black text-white hover:bg-neutral-900":
        variant === "dark",

      "opacity-50 cursor-not-allowed": disabled,
    },
    className
  );

  const ButtonInner = (
    <>
      {/* Subtle orange sheen animation */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out rounded-md" />
      <span className="relative z-10">{children}</span>
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
