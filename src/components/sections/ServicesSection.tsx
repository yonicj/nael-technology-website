"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SERVICES_DATA, ServiceItem } from "@/data/site-data";
import { IconResolver } from "@/components/common/IconResolver";
import { DetailModal } from "@/components/ui/DetailModal";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Tabs } from "@/components/ui/Tabs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Container } from "@/components/ui/Container";

// Mapping from homepage service IDs to service slugs
const SERVICE_SLUG_MAP: Record<string, string> = {
  "cctv-surveillance": "cctv",
  "access-control-biometrics": "access-control",
  "fire-alarm-safety": "fire-alarm",
  "data-center-infrastructure": "data-center",
  "structured-cabling": "structured-cabling",
  "wireless-networking": "wireless-network",
  "video-conferencing": "video-conference",
  "telephony-call-center": "call-center",
  "healthcare-nurse-call-service": "nurse-call",
};

export const ServicesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalItem, setActiveModalItem] = useState<ServiceItem | null>(null);

  const categories = [
    "All",
    "Security & Safety",
    "Network Infrastructure",
    "Communication & Collaboration",
    "Healthcare Technology",
  ];

  const filteredServices = SERVICES_DATA.filter((item) =>
    selectedCategory === "All" ? true : item.category === selectedCategory
  );

  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-950/90 relative overflow-hidden border-t border-slate-200 dark:border-slate-900 transition-colors">
      <Container size="xl" className="relative z-10 space-y-12">
        {/* Header */}
        <SectionHeader
          badge="Engineering Services"
          badgeVariant="primary"
          title="Core Engineering & Installation"
          titleAccent="Services"
          description="Consolidated across four major technology disciplines: physical security, network infrastructure, unified communications, and healthcare technology."
          align="center"
        />

        {/* Category Tabs Filter */}
        <div className="flex justify-center">
          <Tabs
            tabs={categories}
            activeTab={selectedCategory}
            onChange={(cat) => setSelectedCategory(cat)}
            className="max-w-4xl"
          />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const slug = SERVICE_SLUG_MAP[service.id] || "cctv";
            return (
              <Card
                key={service.id}
                variant="interactive"
                className="flex flex-col justify-between overflow-hidden"
              >
                {/* Service Preview Image */}
                {service.image && (
                  <div className="relative aspect-video w-full overflow-hidden border-b border-slate-200 dark:border-slate-800">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 dark:from-slate-900 via-transparent to-transparent opacity-80" />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600/15 border border-blue-500/25 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-inner group-hover:scale-110 transition-transform duration-300">
                      <IconResolver name={service.iconName} className="w-6 h-6" />
                    </div>
                    <Badge variant="primary" size="sm">
                      {service.category}
                    </Badge>
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.excerpt}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-3">
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="flex items-center justify-between gap-2 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <button
                    type="button"
                    onClick={() => setActiveModalItem(service)}
                    className="text-xs text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
                  >
                    Quick Specs
                  </button>

                  <Link
                    href={`/services/${slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    <span>Full Service Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Explore Hub Callout */}
        <div className="text-center pt-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-850 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all shadow-md"
          >
            <span>View All Detailed Engineering Service Pages</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
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
          itemsListTitle="Key Features & Capabilities"
          itemsList={activeModalItem.features}
          tags={activeModalItem.tags}
          iconName={activeModalItem.iconName}
          itemType="service"
          image={activeModalItem.image}
        />
      )}
    </section>
  );
};
