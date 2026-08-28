"use client";

import React from "react";
import { INDUSTRIES_DATA } from "@/data/site-data";
import { IconResolver } from "@/components/common/IconResolver";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Container } from "@/components/ui/Container";

export const IndustriesSection: React.FC = () => {
  return (
    <section id="industries" className="py-24 bg-white dark:bg-slate-950/80 relative overflow-hidden border-t border-slate-200 dark:border-slate-900 transition-colors">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <SectionHeader
          badge="Sectors Served"
          badgeVariant="slate"
          title="Tailored for Confirmed"
          titleAccent="Industry Verticals"
          description="Engineered specifically to satisfy strict regulatory, security, and uptime mandates across Ethiopian commercial, financial, and institutional environments."
          align="center"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES_DATA.map((industry) => (
            <Card key={industry.id} variant="default" className="p-2">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-11 h-11 rounded-xl bg-blue-600/15 border border-blue-500/25 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <IconResolver name={industry.iconName} className="w-5 h-5" />
                  </div>
                  <Badge variant="primary" size="sm">
                    Ethiopia
                  </Badge>
                </div>
                <CardTitle className="text-lg">{industry.name}</CardTitle>
                <CardDescription>{industry.description}</CardDescription>
              </CardHeader>

              <CardContent className="pt-2">
                <div className="space-y-1.5 border-t border-slate-100 dark:border-slate-800/80 pt-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                    Deployed Technologies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {industry.keySolutions.map((sol, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50"
                      >
                        {sol}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
