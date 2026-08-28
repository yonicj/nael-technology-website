"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  hasError?: boolean;
  placeholder?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options, hasError = false, placeholder, disabled, ...props }, ref) => {
    return (
      <div className="relative flex items-center w-full">
        <select
          ref={ref}
          disabled={disabled}
          className={cn(
            "w-full h-11 pl-4 pr-10 text-sm text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-900/80 rounded-xl border appearance-none transition-all duration-200 cursor-pointer",
            "focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500",
            "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-100 dark:disabled:bg-slate-950",
            hasError
              ? "border-red-500/70 focus:border-red-500 focus:ring-red-500/25 bg-red-50/50 dark:bg-red-950/10"
              : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700",
            className
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled className="bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500">
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option
              key={opt.value}
              value={opt.value}
              disabled={opt.disabled}
              className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 py-2"
            >
              {opt.label}
            </option>
          ))}
        </select>

        <div className="absolute right-3.5 flex items-center pointer-events-none text-slate-400 dark:text-slate-400">
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    );
  }
);

Select.displayName = "Select";
