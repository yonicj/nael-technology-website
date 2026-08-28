"use client";

import React, { useState } from "react";
import { PRODUCTS_DATA, ProductItem, SITE_METADATA } from "@/data/site-data";
import { IconResolver } from "@/components/common/IconResolver";
import { DetailModal } from "@/components/ui/DetailModal";
import { ArrowRight, ShoppingBag, ExternalLink, CheckCircle2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Container } from "@/components/ui/Container";

export const ProductsSection: React.FC = () => {
  const [activeModalItem, setActiveModalItem] = useState<ProductItem | null>(null);

  return (
    <section id="products" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden border-t border-slate-200 dark:border-slate-900 transition-colors">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-600/5 blur-[140px] rounded-full pointer-events-none" />

      <Container size="xl" className="relative z-10 space-y-16">
        <SectionHeader
          badge="Hardware & Equipment"
          badgeVariant="amber"
          title="Enterprise Hardware Equipment"
          titleAccent="& Systems"
          description="Enterprise-grade physical security, life safety, networking, and conferencing hardware backed by official warranty and local support in Addis Ababa."
          align="center"
        />

        {/* Featured Jiji Store Banner Callout */}
        <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-slate-100 dark:from-slate-900 dark:via-amber-950/20 dark:to-slate-900 p-8 sm:p-10 shadow-2xl shadow-amber-500/5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <Badge variant="amber" size="md" withPulse={true}>
                Official Hardware Marketplace
              </Badge>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Shop Nael Technology Products on Jiji Ethiopia
              </h3>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-light">
                Browse our verified catalog of CCTV security cameras, biometric access control devices,
                fire alarm equipment, server racks, and PABX telephony units directly on our official Jiji shop.
              </p>
            </div>

            <div className="w-full lg:w-auto flex-shrink-0">
              <a
                href={SITE_METADATA.jijiShopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold shadow-xl shadow-amber-500/25 hover:shadow-amber-500/35 transition-all text-sm sm:text-base group min-h-[48px]"
              >
                <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Shop Products on Jiji</span>
                <ExternalLink className="w-4 h-4 opacity-80 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {PRODUCTS_DATA.map((product) => (
            <Card
              key={product.id}
              variant="interactive"
              className="cursor-pointer"
              onClick={() => setActiveModalItem(product)}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400">
                    <IconResolver name={product.iconName} className="w-5 h-5" />
                  </div>
                  <Badge variant="slate" size="sm">
                    {product.category}
                  </Badge>
                </div>
                <CardTitle className="text-base">{product.title}</CardTitle>
                <CardDescription className="text-xs">{product.excerpt}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                  Specifications:
                </span>
                <ul className="space-y-1">
                  {product.specs.slice(0, 3).map((spec, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400/80 flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{spec}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <span className="text-xs text-amber-600 dark:text-amber-400 font-semibold">View Hardware Specs</span>
                <ArrowRight className="w-4 h-4 text-amber-600 dark:text-amber-400 group-hover:translate-x-1 transition-transform" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>

      {/* Universal Detail Modal */}
      {activeModalItem && (
        <DetailModal
          isOpen={!!activeModalItem}
          onClose={() => setActiveModalItem(null)}
          title={activeModalItem.title}
          category={activeModalItem.category}
          description={activeModalItem.description}
          itemsListTitle="Hardware Specifications & Features"
          itemsList={activeModalItem.specs}
          tags={activeModalItem.tags}
          iconName={activeModalItem.iconName}
          itemType="product"
        />
      )}
    </section>
  );
};
