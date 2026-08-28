"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SOLUTIONS_DATA, SolutionItem } from "@/data/site-data";
import { IconResolver } from "@/components/common/IconResolver";
import { DetailModal } from "@/components/ui/DetailModal";
import { ArrowRight, CheckCircle2, Building2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Container } from "@/components/ui/Container";

export const SolutionsSection: React.FC = () => {
  const [activeModalItem, setActiveModalItem] = useState<SolutionItem | null>(null);

  return (
    <section id="solutions" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden border-t border-slate-200 dark:border-slate-900 transition-colors">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <SectionHeader
          badge="Turnkey Solutions"
          badgeVariant="cyan"
          title="Engineered Turnkey Solutions"
          titleAccent="by Vertical"
          description="Pre-architected, integrated systems combining cabling, security hardware, power conditioning, and management consoles for Ethiopian enterprises."
          align="center"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUTIONS_DATA.map((solution) => (
            <Card
              key={solution.id}
              variant="interactive"
              className="cursor-pointer"
              onClick={() => setActiveModalItem(solution)}
            >
              {/* Optional Preview Image if available */}
              {solution.image && (
                <div className="relative aspect-video w-full overflow-hidden border-b border-slate-200 dark:border-slate-800">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 dark:from-slate-900 via-transparent to-transparent opacity-80" />
                </div>
              )}

              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/25 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <IconResolver name={solution.iconName} className="w-5 h-5" />
                  </div>
                  <Badge variant="slate" size="sm">
                    {solution.category}
                  </Badge>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider mb-1">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>{solution.industry}</span>
                </div>

                <CardTitle className="text-lg">{solution.title}</CardTitle>
                <CardDescription>{solution.excerpt}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                  Key Deliverables:
                </span>
                <ul className="space-y-1.5">
                  {solution.deliverables.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold">View Architecture</span>
                <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform" />
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
          category={activeModalItem.industry}
          description={activeModalItem.description}
          itemsListTitle="Turnkey Scope of Deliverables"
          itemsList={activeModalItem.deliverables}
          tags={activeModalItem.tags}
          iconName={activeModalItem.iconName}
          itemType="solution"
          image={activeModalItem.image}
        />
      )}
    </section>
  );
};
