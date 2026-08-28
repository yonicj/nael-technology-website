"use client";

import React from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant =
  | "primary"
  | "cyan"
  | "emerald"
  | "amber"
  | "rose"
  | "slate";

export type BadgeSize = "sm" | "md";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  withPulse?: boolean;
  leftIcon?: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, { container: string; pulse: string }> = {
  primary: {
    container: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    pulse: "bg-blue-500 dark:bg-blue-400",
  },
  cyan: {
    container: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-500/20",
    pulse: "bg-cyan-500 dark:bg-cyan-400",
  },
  emerald: {
    container: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
    pulse: "bg-emerald-500 dark:bg-emerald-400",
  },
  amber: {
    container: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
    pulse: "bg-amber-500 dark:bg-amber-400",
  },
  rose: {
    container: "bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-500/20",
    pulse: "bg-rose-500 dark:bg-rose-400",
  },
  slate: {
    container: "bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700/60",
    pulse: "bg-slate-500 dark:bg-slate-400",
  },
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "text-[11px] px-2.5 py-0.5 rounded-full gap-1.5 font-medium tracking-wide",
  md: "text-xs px-3 py-1 rounded-full gap-2 font-semibold tracking-wider uppercase",
};

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "primary",
  size = "md",
  withPulse = false,
  leftIcon,
  children,
  ...props
}) => {
  const styles = variantStyles[variant];

  return (
    <span
      className={cn(
        "inline-flex items-center border select-none transition-colors",
        styles.container,
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {withPulse && (
        <span className="relative flex h-2 w-2">
          <span
            className={cn(
              "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
              styles.pulse
            )}
          />
          <span className={cn("relative inline-flex rounded-full h-2 w-2", styles.pulse)} />
        </span>
      )}
      {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
      <span>{children}</span>
    </span>
  );
};
