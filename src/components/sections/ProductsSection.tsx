"use client";

import React, { useState } from "react";
import { PRODUCTS_DATA, ProductItem } from "@/data/site-data";
import { IconResolver } from "@/components/common/IconResolver";
import { DetailModal } from "@/components/ui/DetailModal";
import { ArrowRight } from "lucide-react";

export const ProductsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalItem, setActiveModalItem] = useState<ProductItem | null>(null);

  const categories = [
    "All",
    "Security Equipment",
    "Access Hardware",
    "Fire Safety Hardware",
    "Conferencing Equipment",
    "Telephony Hardware",
    "Networking Equipment",
  ];

  const filteredProducts = PRODUCTS_DATA.filter((item) =>
    selectedCategory === "All" ? true : item.category === selectedCategory
  );

  return (
    <section id="products" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            Hardware Catalog
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Commercial Equipment & Hardware
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Direct supply and certified installation of commercial surveillance cameras, biometric terminals, fire alarm panels, server racks, and enterprise IP-PABX units.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800/80 hover:border-blue-500/40 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between group shadow-lg shadow-black/20"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <IconResolver name={product.iconName} className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700/60">
                    {product.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {product.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  {product.excerpt}
                </p>

                <div className="space-y-1.5 mb-6">
                  {product.specs.slice(0, 3).map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      <span className="line-clamp-1">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <button
                  onClick={() => setActiveModalItem(product)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white text-xs font-semibold transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>Technical Specs</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Dialog */}
      {activeModalItem && (
        <DetailModal
          isOpen={!!activeModalItem}
          onClose={() => setActiveModalItem(null)}
          title={activeModalItem.title}
          category={activeModalItem.category}
          description={activeModalItem.description}
          itemsListTitle="Technical Specifications"
          itemsList={activeModalItem.specs}
          tags={activeModalItem.tags}
          iconName={activeModalItem.iconName}
          itemType="product"
        />
      )}
    </section>
  );
};
