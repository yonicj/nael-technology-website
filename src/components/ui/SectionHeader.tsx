"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Badge, BadgeVariant } from "./Badge";

export interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: BadgeVariant;
  withPulse?: boolean;
  title: string;
  titleAccent?: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeVariant = "primary",
  withPulse = false,
  title,
  titleAccent,
  description,
  align = "center",
  className,
}) => {
  return (
    <div
      className={cn(
        "space-y-4 max-w-3xl mb-12 sm:mb-16",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <div>
          <Badge variant={badgeVariant} withPulse={withPulse}>
            {badge}
          </Badge>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] transition-colors">
        {title}{" "}
        {titleAccent && <span className="text-gradient-accent">{titleAccent}</span>}
      </h2>

      {description && (
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal transition-colors">
          {description}
        </p>
      )}
    </div>
  );
};
