"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { DETAILED_PROJECTS_LIST } from "@/data/projects-data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Tabs } from "@/components/ui/Tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ImageContainer } from "@/components/ui/ImageContainer";
import {
  ArrowRight,
  CheckCircle2,
  Building,
  PhoneCall,
  ShieldCheck,
  Cpu,
  Layers,
  Wrench,
  Sparkles,
} from "lucide-react";

export default function ProjectsPage() {
  const [selectedSector, setSelectedSector] = useState<string>("All Sectors");

  // Extract unique sectors
  const sectors = useMemo(() => {
    const rawSectors = Array.from(new Set(DETAILED_PROJECTS_LIST.map((p) => p.clientSector)));
    return ["All Sectors", ...rawSectors];
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (selectedSector === "All Sectors") {
      return DETAILED_PROJECTS_LIST;
    }
    return DETAILED_PROJECTS_LIST.filter((p) => p.clientSector === selectedSector);
  }, [selectedSector]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Breadcrumb Navigation */}
        <div className="border-b border-slate-200 dark:border-slate-800/80 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md">
          <Container size="xl" className="py-3">
            <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
              <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-slate-900 dark:text-white font-semibold">Projects Portfolio</span>
            </nav>
          </Container>
        </div>

        {/* Projects Hub Hero */}
        <section className="py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-blue-600/15 blur-[140px] rounded-full pointer-events-none" />

          <Container size="xl" className="relative z-10 space-y-6 text-center max-w-4xl mx-auto">
            <Badge variant="primary" size="md" withPulse={true}>
              Delivered Engineering Track Record
            </Badge>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] transition-colors">
              Enterprise Deployments &{" "}
              <span className="text-gradient-accent">Completed Projects</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-3xl mx-auto transition-colors px-2 sm:px-0">
              A track record of turnkey systems engineering delivered across banking headquarters, commercial towers,
              enterprise server rooms, regional hospitals, and corporate conference facilities in Ethiopia.
            </p>
          </Container>
        </section>

        {/* Projects Grid Section */}
        <section className="pb-24">
          <Container size="xl" className="space-y-12">
            {/* Sector Filter Tabs */}
            <div className="flex justify-center">
              <Tabs
                tabs={sectors}
                activeTab={selectedSector}
                onChange={(sec) => setSelectedSector(sec)}
                className="max-w-4xl"
              />
            </div>

            {/* Project Cards Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  variant="interactive"
                  className="flex flex-col justify-between overflow-hidden"
                >
                  {/* Project Image */}
                  <div className="relative aspect-video w-full overflow-hidden border-b border-slate-200 dark:border-slate-800">
                    <ImageContainer
                      src={project.image}
                      alt={project.title}
                      aspectRatio="video"
                      withOverlay={true}
                      category={project.category}
                    />
                  </div>

                  <CardHeader className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="primary" size="sm">
                        {project.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                        <Building className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                        <span>{project.clientSector}</span>
                      </div>
                    </div>

                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription>{project.scope}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="space-y-2 border-t border-slate-100 dark:border-slate-800/80 pt-3">
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
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-400 border border-slate-200 dark:border-slate-700/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>

                  {/* Connected Links: Projects -> Services -> Solutions -> Contact */}
                  <CardFooter className="pt-4 flex flex-col gap-2 border-t border-slate-100 dark:border-slate-800/80">
                    <div className="grid grid-cols-2 gap-2 w-full">
                      <Link
                        href={`/services/${project.relatedServiceSlug}`}
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-blue-600/10 hover:bg-blue-600 text-blue-600 hover:text-white dark:text-blue-400 dark:hover:text-white text-xs font-semibold transition-all group text-center min-h-[38px]"
                      >
                        <span>View Service</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </Link>

                      <Link
                        href={`/solutions/${project.relatedSolutionSlug}`}
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-cyan-600/10 hover:bg-cyan-600 text-cyan-700 hover:text-white dark:text-cyan-400 dark:hover:text-white text-xs font-semibold transition-all group text-center min-h-[38px]"
                      >
                        <span>View Blueprint</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>

                    <Link
                      href="/#contact"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-slate-700 dark:text-slate-300 hover:text-white dark:hover:text-white text-xs font-semibold transition-all group min-h-[36px]"
                    >
                      <span>Inquire Similar Project Scope</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Project Consultation & Tender Banner */}
        <section className="border-t border-slate-200 dark:border-slate-900 bg-white/60 dark:bg-slate-950/60 py-20 relative">
          <Container size="xl">
            <div className="p-6 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-100 via-blue-50/50 to-slate-100 dark:from-slate-900 dark:via-blue-950/30 dark:to-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
              <div className="space-y-3 max-w-2xl">
                <Badge variant="cyan" size="md">
                  Addis Ababa Engineering Desk
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Have an Upcoming Infrastructure or Security Tender?
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                  Our certified field engineers provide complimentary facility surveys, architectural single-line diagrams,
                  and standards-compliant Bill of Quantities (BOQ) for commercial and government tenders across Ethiopia.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto flex-shrink-0">
                <Button
                  href="/#contact"
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto min-h-[48px]"
                >
                  Request Tender Proposal
                </Button>
                <Button
                  href="tel:+251911438942"
                  variant="secondary"
                  size="lg"
                  leftIcon={<PhoneCall className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                  className="w-full sm:w-auto min-h-[48px]"
                >
                  +251 911 438 942
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
