"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, hasError = false, disabled, rows = 4, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        disabled={disabled}
        rows={rows}
        className={cn(
          "w-full p-4 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 bg-white dark:bg-slate-900/80 rounded-xl border transition-all duration-200 resize-y",
          "focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-100 dark:disabled:bg-slate-950",
          hasError
            ? "border-red-500/70 focus:border-red-500 focus:ring-red-500/25 bg-red-50/50 dark:bg-red-950/10"
            : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700",
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";
