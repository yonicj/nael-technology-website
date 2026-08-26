"use client";

import React, { useState } from "react";
import { SERVICES_DATA, ServiceItem } from "@/data/site-data";
import { IconResolver } from "@/components/common/IconResolver";
import { DetailModal } from "@/components/ui/DetailModal";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const ServicesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalItem, setActiveModalItem] = useState<ServiceItem | null>(null);

  const categories = ["All", "Physical Security", "Safety Engineering", "Network Infrastructure", "Communications"];

  const filteredServices = SERVICES_DATA.filter((item) =>
    selectedCategory === "All" ? true : item.category === selectedCategory
  );

  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Core Engineering & Installation Services
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            From certified fire alarms and 4K surveillance to high-speed optical fiber and data center infrastructure, we engineer reliable technology foundations across Ethiopia.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800/80 hover:border-blue-500/40 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between group shadow-lg shadow-black/20"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <IconResolver name={service.iconName} className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700/60">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  {service.excerpt}
                </p>

                <div className="space-y-1.5 mb-6">
                  {service.features.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <button
                  onClick={() => setActiveModalItem(service)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-blue-600 text-slate-300 hover:text-white text-xs font-semibold transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>Explore Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reusable Modal for Service Deep Dive */}
      {activeModalItem && (
        <DetailModal
          isOpen={!!activeModalItem}
          onClose={() => setActiveModalItem(null)}
          title={activeModalItem.title}
          category={activeModalItem.category}
          description={activeModalItem.description}
          itemsListTitle="Included Engineering Deliverables"
          itemsList={activeModalItem.features}
          tags={activeModalItem.tags}
          iconName={activeModalItem.iconName}
          itemType="service"
        />
      )}
    </section>
  );
};
