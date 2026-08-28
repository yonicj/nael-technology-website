"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, CheckCircle, ArrowRight } from "lucide-react";
import { IconResolver } from "@/components/common/IconResolver";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category: string;
  description: string;
  itemsListTitle?: string;
  itemsList: string[];
  tags: string[];
  iconName?: string;
  itemType?: "service" | "solution" | "product";
  image?: string;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  isOpen,
  onClose,
  title,
  category,
  description,
  itemsListTitle = "Key Features & Specifications",
  itemsList,
  tags,
  iconName = "ShieldCheck",
  itemType = "service",
  image,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleRequestQuote = () => {
    onClose();
    setTimeout(() => {
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-md transition-all duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl shadow-blue-500/10 max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Optional Image Header */}
        {image && (
          <div className="relative aspect-[21/9] w-full overflow-hidden border-b border-slate-200 dark:border-slate-800 flex-shrink-0">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 672px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-slate-900 via-transparent to-transparent" />
          </div>
        )}

        {/* Modal Header */}
        <div className="p-6 md:p-8 bg-gradient-to-r from-slate-50 via-white to-blue-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/40 border-b border-slate-200 dark:border-slate-800 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-10 p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/25 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <IconResolver name={iconName} className="w-5 h-5" />
            </div>
            <Badge variant="primary" size="sm">
              {category}
            </Badge>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            {title}
          </h3>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-6 overflow-y-auto">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Overview
            </h4>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base">{description}</p>
          </div>

          {itemsList && itemsList.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                {itemsListTitle}
              </h4>
              <ul className="grid sm:grid-cols-1 gap-2.5">
                {itemsList.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800/80 text-sm text-slate-800 dark:text-slate-200"
                  >
                    <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {tags && tags.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Capabilities & Standards
              </h4>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                  <Badge key={idx} variant="slate" size="sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-slate-50 dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600 dark:text-slate-400 text-center sm:text-left">
            Ready to deploy this {itemType}? Contact our Addis Ababa technical engineering desk.
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
              className="w-1/2 sm:w-auto"
            >
              Close
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={handleRequestQuote}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="w-1/2 sm:w-auto"
            >
              Inquire Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
