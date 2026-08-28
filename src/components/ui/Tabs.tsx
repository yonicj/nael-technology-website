"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface TabItem {
  id: string;
  label: string;
  count?: number;
  icon?: React.ReactNode;
}

export interface TabsProps {
  tabs: TabItem[] | string[];
  activeTab: string;
  onChange: (tabId: string) => void;
  className?: string;
  size?: "sm" | "md";
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChange,
  className,
  size = "md",
}) => {
  const normalizedTabs: TabItem[] = tabs.map((tab) =>
    typeof tab === "string" ? { id: tab, label: tab } : tab
  );

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 backdrop-blur-md shadow-inner transition-colors",
        className
      )}
      role="tablist"
    >
      {normalizedTabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={cn(
              "flex items-center gap-2 rounded-xl font-medium transition-all duration-200 cursor-pointer select-none",
              size === "sm" ? "px-3.5 py-1.5 text-xs" : "px-4 py-2 text-sm",
              isActive
                ? "bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/25 border border-blue-500/30"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-white dark:hover:bg-slate-800/60 border border-transparent"
            )}
          >
            {tab.icon && <span className="flex-shrink-0">{tab.icon}</span>}
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <span
                className={cn(
                  "text-[10px] px-1.5 py-0.5 rounded-md font-mono",
                  isActive
                    ? "bg-blue-700 text-blue-100"
                    : "bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-400"
                )}
              >
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
