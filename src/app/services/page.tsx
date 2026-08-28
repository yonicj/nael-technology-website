"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DETAILED_SERVICES_DATA } from "@/data/services-data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { IconResolver } from "@/components/common/IconResolver";
import { ArrowRight, ChevronRight, CheckCircle2, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Tabs } from "@/components/ui/Tabs";
import { Container } from "@/components/ui/Container";
import { ImageContainer } from "@/components/ui/ImageContainer";

export default function ServicesHubPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Security & Safety",
    "Network & Infrastructure",
    "Communication & Collaboration",
    "Healthcare Technology",
  ];

  const filteredServices = DETAILED_SERVICES_DATA.filter((item) =>
    selectedCategory === "All" ? true : item.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white transition-colors">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        {/* Breadcrumb Bar */}
        <div className="border-b border-slate-200 dark:border-slate-900 bg-white/60 dark:bg-slate-950/60 py-3">
          <Container size="xl">
            <nav className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
              <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" />
              <span className="text-blue-600 dark:text-blue-400 font-semibold">Services</span>
            </nav>
          </Container>
        </div>

        {/* Services Hub Hero */}
        <section className="py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-blue-600/15 blur-[140px] rounded-full pointer-events-none" />

          <Container size="xl" className="relative z-10 space-y-6 text-center max-w-4xl mx-auto">
            <Badge variant="cyan" size="md" withPulse={true}>
              Turnkey Engineering & Systems Integration
            </Badge>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] transition-colors">
              Engineering Smarter, Safer &{" "}
              <span className="text-gradient-accent">Connected Infrastructure</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-3xl mx-auto transition-colors px-2 sm:px-0">
              We design, install, test, and maintain mission-critical physical security, optical fiber networks,
              certified fire alarms, enterprise data centers, and unified communications across Ethiopia.
            </p>
          </Container>
        </section>

        {/* Services Grid Section */}
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

            {/* Services Cards Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredServices.map((service) => (
                <Card
                  key={service.slug}
                  variant="interactive"
                  className="flex flex-col justify-between overflow-hidden"
                >
                  {/* Service Photo with Dark Scrim Frame */}
                  <div className="relative aspect-video w-full overflow-hidden border-b border-slate-200 dark:border-slate-800">
                    <ImageContainer
                      src={service.image}
                      alt={service.title}
                      aspectRatio="video"
                      withOverlay={true}
                      category={service.category}
                    />
                  </div>

                  <CardHeader className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/25 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-inner">
                        <IconResolver name={service.iconName} className="w-5 h-5" />
                      </div>
                      <Badge variant="primary" size="sm">
                        {service.category}
                      </Badge>
                    </div>

                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {service.tagline}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="space-y-2 border-t border-slate-100 dark:border-slate-800/80 pt-3">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                        Core Engineering Capabilities:
                      </span>
                      <ul className="space-y-1.5">
                        {service.capabilities.slice(0, 3).map((cap, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{cap.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>

                  <CardFooter className="pt-4 flex items-center justify-between gap-3">
                    <Link
                      href={`/services/${service.slug}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-600/20 hover:shadow-blue-600/30 transition-all group min-h-[42px]"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Engineering Consultation Callout */}
        <section className="border-t border-slate-200 dark:border-slate-900 bg-white/60 dark:bg-slate-950/60 py-20 relative">
          <Container size="xl">
            <div className="p-6 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-100 via-blue-50/50 to-slate-100 dark:from-slate-900 dark:via-blue-950/30 dark:to-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
              <div className="space-y-3 max-w-2xl">
                <Badge variant="cyan" size="md">
                  Addis Ababa Engineering Desk
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Need a Comprehensive Site Assessment or BOQ?
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                  Our certified field engineers provide complimentary facility surveys, architectural cable routing,
                  and standards-compliant bill of quantities (BOQ) for enterprise facilities across Ethiopia.
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
                  Request Technical Proposal
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
