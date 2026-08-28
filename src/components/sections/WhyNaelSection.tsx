"use client";

import React from "react";
import { WHY_NAEL_DATA } from "@/data/site-data";
import { IconResolver } from "@/components/common/IconResolver";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Container } from "@/components/ui/Container";

export const WhyNaelSection: React.FC = () => {
  return (
    <section id="why-nael" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden border-t border-slate-200 dark:border-slate-900 transition-colors">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <Container size="xl" className="relative z-10 space-y-12">
        <SectionHeader
          badge="Why Choose Nael"
          badgeVariant="emerald"
          title="Engineering Integrity,"
          titleAccent="Certified Standards"
          description="We blend international safety compliance with rapid local responsiveness to deliver mission-critical infrastructure that Ethiopian enterprises depend on."
          align="center"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_NAEL_DATA.map((item, idx) => (
            <Card key={item.id} variant="glass" className="p-2 flex flex-col justify-between">
              <CardHeader>
                <div className="w-12 h-12 rounded-2xl bg-blue-600/15 border border-blue-500/25 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 shadow-inner">
                  <IconResolver name={item.iconName} className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono text-blue-600 dark:text-blue-400/80 mb-1 font-semibold">
                  0{idx + 1} // CAPABILITY
                </div>
                <CardTitle className="text-lg leading-snug">{item.title}</CardTitle>
                <CardDescription className="text-xs leading-relaxed pt-1">
                  {item.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
