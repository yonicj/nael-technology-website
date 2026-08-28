"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", hasError = false, leftIcon, rightIcon, disabled, ...props }, ref) => {
    return (
      <div className="relative flex items-center w-full">
        {leftIcon && (
          <div className="absolute left-3.5 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
            {leftIcon}
          </div>
        )}

        <input
          type={type}
          ref={ref}
          disabled={disabled}
          className={cn(
            "w-full h-11 px-4 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 bg-white dark:bg-slate-900/80 rounded-xl border transition-all duration-200",
            "focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500",
            "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-100 dark:disabled:bg-slate-950",
            leftIcon && "pl-10",
            rightIcon && "pr-10",
            hasError
              ? "border-red-500/70 focus:border-red-500 focus:ring-red-500/25 bg-red-50/50 dark:bg-red-950/10"
              : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700",
            className
          )}
          {...props}
        />

        {rightIcon && (
          <div className="absolute right-3.5 flex items-center text-slate-400 dark:text-slate-500">
            {rightIcon}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
