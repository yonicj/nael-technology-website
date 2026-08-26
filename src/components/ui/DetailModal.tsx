"use client";

import React, { useEffect } from "react";
import { X, CheckCircle, ArrowRight } from "lucide-react";
import { IconResolver } from "@/components/common/IconResolver";

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl shadow-blue-500/10 max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="p-6 md:p-8 bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950/40 border-b border-slate-800">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <IconResolver name={iconName} className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {category}
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            {title}
          </h3>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-6 overflow-y-auto">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Overview
            </h4>
            <p className="text-slate-300 leading-relaxed text-base">{description}</p>
          </div>

          {itemsList && itemsList.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                {itemsListTitle}
              </h4>
              <ul className="grid sm:grid-cols-1 gap-2.5">
                {itemsList.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-800 text-sm text-slate-200"
                  >
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {tags && tags.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Capabilities & Standards
              </h4>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-slate-950/80 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 text-center sm:text-left">
            Ready to deploy this {itemType}? Contact our Addis Ababa technical engineering desk.
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 rounded-xl border border-slate-700 text-slate-300 text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              Close
            </button>
            <button
              onClick={handleRequestQuote}
              className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Inquire Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
