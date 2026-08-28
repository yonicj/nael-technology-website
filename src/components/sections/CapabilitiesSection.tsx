"use client";

import React from "react";
import { CAPABILITIES_DATA } from "@/data/site-data";
import { IconResolver } from "@/components/common/IconResolver";
import { ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Container } from "@/components/ui/Container";

export const CapabilitiesSection: React.FC = () => {
  const handleScrollTo = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="capabilities" className="py-24 bg-white dark:bg-slate-950/80 relative overflow-hidden border-t border-slate-200 dark:border-slate-900 transition-colors">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <SectionHeader
          badge="Core Capabilities"
          badgeVariant="primary"
          title="Engineered Infrastructure"
          titleAccent="& Technology Solutions"
          description="Six integrated domains covering physical protection, data cabling, mission-critical power, and enterprise communications."
          align="center"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES_DATA.map((cap) => (
            <Card
              key={cap.id}
              variant="interactive"
              className="cursor-pointer"
              onClick={() => handleScrollTo("services")}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/15 border border-blue-500/25 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <IconResolver name={cap.iconName} className="w-6 h-6" />
                  </div>
                  <Badge variant="slate" size="sm">
                    Verified
                  </Badge>
                </div>
                <CardTitle>{cap.title}</CardTitle>
                <CardDescription>{cap.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cap.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">Explore Domain</span>
                <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
