"use client";

import React from "react";
import Link from "next/link";
import { ABOUT_DATA, WHY_NAEL_DATA, SITE_METADATA } from "@/data/site-data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ImageContainer } from "@/components/ui/ImageContainer";
import { IconResolver } from "@/components/common/IconResolver";
import {
  ArrowRight,
  ShieldCheck,
  Target,
  Compass,
  Building2,
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  Award,
  CheckCircle2,
} from "lucide-react";

export default function AboutPage() {
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
              <span className="text-slate-900 dark:text-white font-semibold">About Us</span>
            </nav>
          </Container>
        </div>

        {/* 1. HERO & COMPANY OVERVIEW */}
        <section className="py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-blue-600/15 blur-[140px] rounded-full pointer-events-none" />

          <Container size="xl" className="relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Title & Overview */}
              <div className="lg:col-span-7 space-y-6">
                <Badge variant="cyan" size="md" withPulse={true}>
                  Ethiopian Systems Integrator
                </Badge>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] transition-colors">
                  {ABOUT_DATA.heading}
                </h1>

                <h2 className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400">
                  {ABOUT_DATA.subtitle}
                </h2>

                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed transition-colors">
                  {ABOUT_DATA.description}
                </p>

                {/* Company Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800/80">
                  {ABOUT_DATA.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm text-center sm:text-left"
                    >
                      <div className="text-xl sm:text-2xl font-extrabold text-blue-600 dark:text-blue-400 font-mono">
                        {stat.value}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-1 leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Verified Office Location & Imagery */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl bg-white/60 dark:bg-slate-900/60 p-2 space-y-3">
                  <ImageContainer
                    src="/images/about-engineers.jpg"
                    alt="Nael Technology Solutions Engineering Team"
                    aspectRatio="video"
                    withOverlay={true}
                    category="Engineering Operations"
                  />

                  <div className="p-4 bg-white/90 dark:bg-slate-950/80 backdrop-blur rounded-2xl border border-slate-200 dark:border-slate-800/80 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
                      <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <span>Physical Office & Engineering Desk</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span>{SITE_METADATA.contact.address}</span>
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span>{SITE_METADATA.contact.workingHours}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 2. MISSION & VISION SECTION */}
        <section className="py-16 bg-white dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800/80 relative">
          <Container size="xl">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission Card */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-50/80 via-white to-slate-50 dark:from-blue-950/30 dark:via-slate-900 dark:to-slate-900 border border-blue-200/80 dark:border-blue-800/40 shadow-md space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/25">
                  <Target className="w-6 h-6" />
                </div>
                <Badge variant="primary" size="md">
                  Our Mission
                </Badge>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Protecting Lives & Critical Assets
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                  {ABOUT_DATA.mission}
                </p>
              </div>

              {/* Vision Card */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-cyan-50/80 via-white to-slate-50 dark:from-cyan-950/30 dark:via-slate-900 dark:to-slate-900 border border-cyan-200/80 dark:border-cyan-800/40 shadow-md space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-600 text-white flex items-center justify-center shadow-lg shadow-cyan-600/25">
                  <Compass className="w-6 h-6" />
                </div>
                <Badge variant="cyan" size="md">
                  Our Vision
                </Badge>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Renowned for Dependability & Excellence
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                  {ABOUT_DATA.vision}
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* 3. STRATEGIC PILLARS */}
        <section className="py-20 bg-slate-50 dark:bg-slate-950 relative">
          <Container size="xl" className="space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <Badge variant="primary" size="md">
                Guiding Principles
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Our Strategic Execution Pillars
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-light">
                The core engineering values that shape every project and long-term client partnership.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ABOUT_DATA.pillars.map((pillar, idx) => (
                <Card key={idx} variant="interactive" className="p-6 sm:p-8 space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/15 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <IconResolver name={pillar.icon} className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg">{pillar.title}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm leading-relaxed">
                    {pillar.description}
                  </CardDescription>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* 4. WHY NAEL TECHNOLOGY SOLUTIONS */}
        <section className="py-20 bg-white dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800/80 relative">
          <Container size="xl" className="space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <Badge variant="emerald" size="md">
                The Nael Difference
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Why Ethiopian Organizations Trust Nael
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-light">
                Delivering complete lifecycle accountability from initial architectural design to 24/7 SLA maintenance.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {WHY_NAEL_DATA.map((item) => (
                <div
                  key={item.id}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/25 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <IconResolver name={item.iconName} className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 5. CONTACT & ENGAGEMENT CALLOUT */}
        <section className="py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 relative transition-colors">
          <Container size="xl">
            <div className="p-6 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-50 via-slate-100 to-blue-50 dark:from-blue-950/40 dark:via-slate-900 dark:to-blue-950/40 border border-blue-200 dark:border-blue-800/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
              <div className="space-y-3 max-w-2xl">
                <Badge variant="cyan" size="md">
                  Addis Ababa Engineering Desk
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Partner with Nael Technology Solutions
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                  Speak directly with our technical team at Awash Building in Addis Ababa for site surveys,
                  tender preparation, and standards-compliant technology infrastructure.
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
                  Contact Our Engineering Team
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
