"use client";

import React, { useState } from "react";
import { SOLUTIONS_DATA, SolutionItem } from "@/data/site-data";
import { IconResolver } from "@/components/common/IconResolver";
import { DetailModal } from "@/components/ui/DetailModal";
import { ArrowRight, Building2, CheckCircle2 } from "lucide-react";

export const SolutionsSection: React.FC = () => {
  const [activeModalItem, setActiveModalItem] = useState<SolutionItem | null>(null);

  return (
    <section id="solutions" className="py-24 bg-slate-900/40 relative overflow-hidden border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            Turnkey Solutions
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Industry-Packaged Systems Integration
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Tailored, multi-disciplinary technology packages purpose-built for financial institutions, hospitals, enterprise headquarters, and industrial campuses.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOLUTIONS_DATA.map((solution) => (
            <div
              key={solution.id}
              className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl shadow-black/20"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-600/15 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <IconResolver name={solution.iconName} className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] font-semibold text-cyan-400 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60">
                    {solution.category}
                  </span>
                </div>

                <div className="text-xs font-medium text-slate-400 mb-2 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>{solution.industry}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {solution.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {solution.excerpt}
                </p>

                <div className="space-y-2 mb-6">
                  {solution.deliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800">
                <button
                  onClick={() => setActiveModalItem(solution)}
                  className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-cyan-600 text-slate-200 hover:text-white text-xs font-semibold transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>Explore Solution Architecture</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal View */}
      {activeModalItem && (
        <DetailModal
          isOpen={!!activeModalItem}
          onClose={() => setActiveModalItem(null)}
          title={activeModalItem.title}
          category={activeModalItem.category}
          description={activeModalItem.description}
          itemsListTitle="Core System Deliverables"
          itemsList={activeModalItem.deliverables}
          tags={activeModalItem.tags}
          iconName={activeModalItem.iconName}
          itemType="solution"
        />
      )}
    </section>
  );
};
