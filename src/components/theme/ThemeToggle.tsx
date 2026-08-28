"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Laptop } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ThemeToggleProps {
  variant?: "icon" | "segmented" | "dropdown";
  size?: "sm" | "md";
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  variant = "icon",
  size = "md",
  className,
  showLabel = false,
}) => {
  const { theme, resolvedTheme, setTheme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Placeholder while mounting to avoid hydration mismatch
  if (!mounted) {
    if (variant === "segmented") {
      return (
        <div
          className={cn(
            "flex items-center gap-1 p-1 rounded-xl bg-slate-200/80 dark:bg-slate-900/80 border border-slate-300/80 dark:border-slate-800",
            className
          )}
        >
          <div className="w-8 h-8 rounded-lg bg-transparent" />
          <div className="w-8 h-8 rounded-lg bg-transparent" />
          <div className="w-8 h-8 rounded-lg bg-transparent" />
        </div>
      );
    }
    return (
      <button
        aria-label="Toggle theme"
        disabled
        className={cn(
          "relative p-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-slate-400 opacity-50 cursor-pointer",
          size === "sm" ? "w-8 h-8 p-1.5" : "w-10 h-10 p-2.5",
          className
        )}
      >
        <span className="w-4 h-4 block" />
      </button>
    );
  }

  // 1. Segmented Control Mode (Light / Dark / System)
  if (variant === "segmented") {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-1 p-1 rounded-2xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-inner",
          className
        )}
        role="group"
        aria-label="Theme selection"
      >
        <button
          type="button"
          onClick={() => setTheme("light")}
          className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer select-none",
            theme === "light"
              ? "bg-white text-blue-600 shadow-sm border border-slate-200/80 font-bold"
              : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800"
          )}
          aria-pressed={theme === "light"}
          title="Light Mode"
        >
          <Sun className="w-3.5 h-3.5" />
          <span>Light</span>
        </button>

        <button
          type="button"
          onClick={() => setTheme("dark")}
          className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer select-none",
            theme === "dark"
              ? "bg-slate-800 text-white shadow-sm border border-slate-700 font-bold"
              : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800"
          )}
          aria-pressed={theme === "dark"}
          title="Dark Mode"
        >
          <Moon className="w-3.5 h-3.5" />
          <span>Dark</span>
        </button>

        <button
          type="button"
          onClick={() => setTheme("system")}
          className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer select-none",
            theme === "system"
              ? "bg-blue-600 text-white shadow-sm font-bold"
              : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800"
          )}
          aria-pressed={theme === "system"}
          title="System Preference"
        >
          <Laptop className="w-3.5 h-3.5" />
          <span>System</span>
        </button>
      </div>
    );
  }

  // 2. Icon Toggle Button Mode (Fast single-click toggle)
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "relative flex items-center justify-center rounded-xl transition-all duration-300 cursor-pointer select-none group",
        "bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-900/90 dark:hover:bg-slate-800",
        "border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 dark:hover:border-blue-500/40",
        "text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400",
        "shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
        size === "sm" ? "h-9 w-9 p-2" : "h-10 w-10 p-2.5",
        showLabel && "w-auto px-3.5 gap-2",
        className
      )}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {/* Sun icon for light mode transition */}
        <Sun
          className={cn(
            "w-4 h-4 absolute transition-all duration-300 transform",
            isDark
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100 text-amber-500"
          )}
        />
        {/* Moon icon for dark mode transition */}
        <Moon
          className={cn(
            "w-4 h-4 absolute transition-all duration-300 transform",
            isDark
              ? "rotate-0 scale-100 opacity-100 text-blue-400"
              : "-rotate-90 scale-0 opacity-0"
          )}
        />
      </div>

      {showLabel && (
        <span className="text-xs font-semibold tracking-wide">
          {isDark ? "Dark Mode" : "Light Mode"}
        </span>
      )}
    </button>
  );
};
