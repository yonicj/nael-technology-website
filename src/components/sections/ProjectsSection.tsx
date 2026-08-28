"use client";

import React from "react";
import { PROJECTS_DATA } from "@/data/site-data";
import { CheckCircle2, ArrowRight, Building } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Container } from "@/components/ui/Container";

export const ProjectsSection: React.FC = () => {
  const handleContactScroll = () => {
    const element = document.getElementById("contact");
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
    <section id="projects" className="py-24 bg-white dark:bg-slate-950/80 relative overflow-hidden border-t border-slate-200 dark:border-slate-900 transition-colors">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <Container size="xl" className="relative z-10 space-y-12">
        <SectionHeader
          badge="Deployment Portfolio"
          badgeVariant="primary"
          title="Engineered Project Deployments"
          titleAccent="& Infrastructure Scopes"
          description="Demonstrating proven technical execution across banking, commercial towers, healthcare facilities, and high-density data centers across Ethiopia."
          align="center"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((project) => (
            <Card key={project.id} variant="default" className="flex flex-col justify-between">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="primary" size="sm">
                    {project.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    <Building className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>{project.clientSector}</span>
                  </div>
                </div>

                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription>{project.scope}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                  Engineering Scope Highlights:
                </span>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 2).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-400 border border-slate-200 dark:border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" size="sm" onClick={handleContactScroll} rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                  Inquire Scope
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Project Consultation Banner */}
        <div className="p-8 rounded-3xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-sm">
          <div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
              Have an upcoming infrastructure or security tender?
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Our Addis Ababa engineering desk provides site surveys, technical BOQ preparation, and compliance audits.
            </p>
          </div>
          <Button variant="primary" size="md" onClick={handleContactScroll} rightIcon={<ArrowRight className="w-4 h-4" />}>
            Request Tender Proposal
          </Button>
        </div>
      </Container>
    </section>
  );
};
