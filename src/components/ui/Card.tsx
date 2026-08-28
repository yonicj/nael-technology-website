"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "interactive" | "featured" | "subtle";
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const variantStyles = {
      default: "bg-white dark:bg-slate-900/90 border-slate-200/90 dark:border-slate-800/80 shadow-sm dark:shadow-lg dark:shadow-black/20",
      glass: "bg-white/80 dark:bg-slate-900/75 backdrop-blur-md border-slate-200/80 dark:border-white/10 shadow-md shadow-slate-200/50 dark:shadow-xl dark:shadow-black/30",
      interactive:
        "bg-white/90 dark:bg-slate-900/85 backdrop-blur-md border-slate-200/80 dark:border-slate-800/80 hover:border-blue-500/40 hover:bg-white dark:hover:bg-slate-900/95 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300",
      featured:
        "bg-gradient-to-b from-blue-50/70 via-white to-white dark:from-blue-950/40 dark:via-slate-900/95 dark:to-slate-900 border-blue-200 dark:border-blue-500/30 shadow-xl shadow-blue-600/5 dark:shadow-2xl dark:shadow-blue-600/10",
      subtle: "bg-slate-100/70 dark:bg-slate-950/60 border-slate-200/60 dark:border-slate-800/50",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl border flex flex-col justify-between overflow-hidden transition-colors duration-200",
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pb-3 space-y-2", className)} {...props}>
      {children}
    </div>
  )
);
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug transition-colors", className)}
    {...props}
  >
    {children}
  </h3>
));
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-slate-600 dark:text-slate-400 leading-relaxed transition-colors", className)}
    {...props}
  >
    {children}
  </p>
));
CardDescription.displayName = "CardDescription";

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0 flex-1", className)} {...props}>
      {children}
    </div>
  )
);
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "p-6 pt-3 border-t border-slate-100 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-950/40 flex items-center justify-between gap-3 transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
CardFooter.displayName = "CardFooter";
