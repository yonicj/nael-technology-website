"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface BrandLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  withTagline?: boolean;
  withShieldGlow?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className,
  size = "md",
  withTagline = true,
  withShieldGlow = true,
  ...props
}) => {
  const sizeMap = {
    sm: { icon: "w-8 h-8", title: "text-base", sub: "text-[9px]" },
    md: { icon: "w-10 h-10", title: "text-lg", sub: "text-[10px]" },
    lg: { icon: "w-12 h-12", title: "text-2xl", sub: "text-xs" },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={cn("flex items-center gap-3 select-none group", className)} {...props}>
      {/* Brand Icon Emblem */}
      <div
        className={cn(
          "rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 flex items-center justify-center text-white border border-blue-400/30 flex-shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-md",
          currentSize.icon,
          withShieldGlow && "shadow-blue-600/30"
        )}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-3/5 h-3/5"
        >
          {/* Shield Outline */}
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          {/* Tech Circuit Node */}
          <circle cx="12" cy="11" r="2" fill="currentColor" />
          <path d="M12 7v2" />
          <path d="M12 13v3" />
          <path d="M8.5 11h1.5" />
          <path d="M14 11h1.5" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div>
        <span
          className={cn(
            "font-extrabold text-slate-900 dark:text-white tracking-tight block leading-tight transition-colors",
            currentSize.title
          )}
        >
          NAEL
        </span>
        {withTagline && (
          <span
            className={cn(
              "uppercase font-bold text-blue-600 dark:text-blue-400 tracking-wider block transition-colors",
              currentSize.sub
            )}
          >
            Technology Solutions
          </span>
        )}
      </div>
    </div>
  );
};
