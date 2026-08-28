"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";

export interface FormFieldProps {
  id?: string;
  label?: string;
  required?: boolean;
  optionalLabel?: string;
  error?: string;
  helperText?: string;
  className?: string;
  children: React.ReactNode;
}

export const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  required = false,
  optionalLabel,
  error,
  helperText,
  className,
  children,
}) => {
  return (
    <div className={cn("space-y-2 w-full", className)}>
      {label && (
        <div className="flex items-center justify-between">
          <label
            htmlFor={id}
            className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1 transition-colors"
          >
            <span>{label}</span>
            {required && <span className="text-blue-600 dark:text-blue-400 font-bold">*</span>}
          </label>
          {optionalLabel && (
            <span className="text-[11px] text-slate-400 dark:text-slate-500">{optionalLabel}</span>
          )}
        </div>
      )}

      <div>{children}</div>

      {error && (
        <p className="text-xs text-red-600 dark:text-red-400 flex items-center gap-1.5 pt-0.5 animate-in fade-in-50 duration-200">
          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
          <span>{error}</span>
        </p>
      )}

      {!error && helperText && (
        <p className="text-xs text-slate-500 dark:text-slate-500 pt-0.5">{helperText}</p>
      )}
    </div>
  );
};
