"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "subtle"
  | "destructive";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asChild?: boolean;
  href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-600/35 border border-blue-500/30",
  secondary:
    "bg-slate-100 hover:bg-slate-200 active:bg-slate-300 dark:bg-slate-900/90 dark:hover:bg-slate-800 dark:active:bg-slate-950 text-slate-800 dark:text-slate-100 border border-slate-300/80 dark:border-slate-700/80 shadow-sm backdrop-blur-sm",
  outline:
    "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800/60 active:bg-slate-200 dark:active:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-slate-700/80 hover:border-slate-400 dark:hover:border-slate-500",
  ghost:
    "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800/60 active:bg-slate-200 dark:active:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-transparent",
  subtle:
    "bg-blue-500/10 hover:bg-blue-500/20 active:bg-blue-500/25 text-blue-600 dark:text-blue-400 border border-blue-500/20 hover:border-blue-500/30",
  destructive:
    "bg-red-600 hover:bg-red-500 active:bg-red-700 text-white shadow-lg shadow-red-600/25 border border-red-500/30",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-xs rounded-lg gap-1.5 font-medium",
  md: "h-11 px-5 text-sm rounded-xl gap-2 font-semibold",
  lg: "h-13 px-7 text-base rounded-xl gap-2.5 font-semibold",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      href,
      onClick,
      ...props
    },
    ref
  ) => {
    const baseClasses = cn(
      "inline-flex items-center justify-center transition-all duration-200 select-none cursor-pointer group",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-slate-950",
      "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.98]",
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (href) {
      return (
        <a
          href={href}
          className={baseClasses}
          onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
          role="button"
        >
          {isLoading && <Loader2 className="w-4 h-4 animate-spin text-current" />}
          {!isLoading && leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
          <span>{children}</span>
          {!isLoading && rightIcon && (
            <span className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
              {rightIcon}
            </span>
          )}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={baseClasses}
        onClick={onClick}
        {...props}
      >
        {isLoading && <Loader2 className="w-4 h-4 animate-spin text-current" />}
        {!isLoading && leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {!isLoading && rightIcon && (
          <span className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
