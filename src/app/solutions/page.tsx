"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { DETAILED_SOLUTIONS_DATA } from "@/data/solutions-data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Tabs } from "@/components/ui/Tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ImageContainer } from "@/components/ui/ImageContainer";
import { IconResolver } from "@/components/common/IconResolver";
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  PhoneCall,
  ShieldCheck,
  Cpu,
  Layers,
  Wrench,
  Sparkles,
} from "lucide-react";

export default function SolutionsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Solutions");

  // Extract unique categories
  const categories = useMemo(() => {
    const rawCategories = Array.from(new Set(DETAILED_SOLUTIONS_DATA.map((s) => s.category)));
    return ["All Solutions", ...rawCategories];
  }, []);

  // Filter solutions
  const filteredSolutions = useMemo(() => {
    if (selectedCategory === "All Solutions") {
      return DETAILED_SOLUTIONS_DATA;
    }
    return DETAILED_SOLUTIONS_DATA.filter((s) => s.category === selectedCategory);
  }, [selectedCategory]);

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
              <span className="text-slate-900 dark:text-white font-semibold">Turnkey Solutions</span>
            </nav>
          </Container>
        </div>

        {/* Solutions Hub Hero */}
        <section className="py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-blue-600/15 blur-[140px] rounded-full pointer-events-none" />

          <Container size="xl" className="relative z-10 space-y-6 text-center max-w-4xl mx-auto">
            <Badge variant="cyan" size="md" withPulse={true}>
              Architected for Ethiopian Enterprises
            </Badge>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] transition-colors">
              Engineered Turnkey Solutions{" "}
              <span className="text-gradient-accent">by Industry Vertical</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-3xl mx-auto transition-colors px-2 sm:px-0">
              Pre-architected, integrated technology systems combining physical security, low-voltage cabling,
              precision power conditioning, environmental telemetry, and centralized management consoles for
              mission-critical operations across Ethiopia.
            </p>
          </Container>
        </section>

        {/* Solutions Grid Section */}
        <section className="pb-24">
          <Container size="xl" className="space-y-12">
            {/* Category Filter Tabs */}
            <div className="flex justify-center">
              <Tabs
                tabs={categories}
                activeTab={selectedCategory}
                onChange={(cat) => setSelectedCategory(cat)}
                className="max-w-4xl"
              />
            </div>

            {/* Solutions Cards Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredSolutions.map((solution) => (
                <Card
                  key={solution.slug}
                  variant="interactive"
                  className="flex flex-col justify-between overflow-hidden"
                >
                  {/* Solution Preview Photo */}
                  <div className="relative aspect-video w-full overflow-hidden border-b border-slate-200 dark:border-slate-800">
                    <ImageContainer
                      src={solution.image}
                      alt={solution.title}
                      aspectRatio="video"
                      withOverlay={true}
                      category={solution.category}
                    />
                  </div>

                  <CardHeader className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/25 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-inner">
                        <IconResolver name={solution.iconName} className="w-5 h-5" />
                      </div>
                      <Badge variant="primary" size="sm">
                        {solution.category}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider">
                      <Building2 className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="line-clamp-1">{solution.industry}</span>
                    </div>

                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {solution.tagline}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="space-y-2 border-t border-slate-100 dark:border-slate-800/80 pt-3">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                        Core Turnkey Deliverables:
                      </span>
                      <ul className="space-y-1.5">
                        {solution.components.slice(0, 3).map((comp, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{comp.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>

                  <CardFooter className="pt-4 flex items-center justify-between gap-3">
                    <Link
                      href={`/solutions/${solution.slug}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-600/20 hover:shadow-blue-600/30 transition-all group min-h-[42px]"
                    >
                      <span>Explore Solution Blueprint</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Why Turnkey Solutions Value Proposition */}
        <section className="py-20 bg-white dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800/80 relative">
          <Container size="xl" className="space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <Badge variant="emerald" size="md">
                The Nael Turnkey Advantage
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Why Ethiopian Enterprises Choose Integrated Solutions
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                Rather than managing disjointed subcontractors for cabling, cameras, fire alarms, and server power,
                our turnkey engineering model guarantees single-vendor accountability and certified interoperability.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/25 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Single-Vendor Accountability</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  One contracted engineering partner responsible for architecture, installation, commissioning, and warranty support.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-600/15 border border-cyan-500/25 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Guaranteed Interoperability</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Cabling, switches, IP cameras, biometric doors, and fire interlocks are pre-tested to communicate seamlessly.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600/15 border border-emerald-500/25 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Standards Compliance</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Engineered to strict international benchmarks including TIA-942, NFPA 72/2001, IEEE 802.3, and Ethiopian building codes.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-600/15 border border-amber-500/25 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Local Addis Ababa SLA</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Direct local technical support based at Awash Building with on-site dispatch, spare parts, and emergency response.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Engineering Consultation Callout */}
        <section className="border-t border-slate-200 dark:border-slate-900 bg-white/60 dark:bg-slate-950/60 py-20 relative">
          <Container size="xl">
            <div className="p-6 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-100 via-blue-50/50 to-slate-100 dark:from-slate-900 dark:via-blue-950/30 dark:to-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
              <div className="space-y-3 max-w-2xl">
                <Badge variant="cyan" size="md">
                  Turnkey Systems Engineering
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Need a Custom Turnkey Solution Architecture?
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                  Our senior systems engineers provide comprehensive site assessments, single-line schematics,
                  and detailed Bill of Quantities (BOQ) for new construction and facility modernization projects across Ethiopia.
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
                  Request Solution Proposal
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
