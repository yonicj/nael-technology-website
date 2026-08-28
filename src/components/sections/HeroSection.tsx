"use client";

import React from "react";
import Image from "next/image";
import { ABOUT_DATA } from "@/data/site-data";
import { ArrowRight, PhoneCall, ShieldCheck, Network, Lock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";

export const HeroSection: React.FC = () => {
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
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors"
    >
      {/* Background Hero Image with Dual Gradient Scrim */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-infrastructure.jpg"
          alt="High-tech enterprise technology infrastructure and optical fiber network"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-15 dark:opacity-25 scale-105 animate-in fade-in duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/80 to-slate-50/90 dark:from-slate-950 dark:via-slate-950/80 dark:to-slate-950/90" />
        <div className="absolute inset-0 bg-radial-gradient opacity-60" />
      </div>

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none z-0" />

      <Container size="xl" className="relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center justify-center">
            <Badge variant="cyan" size="md" withPulse={true}>
              Enterprise Technology Systems Integrator • Ethiopia
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] transition-colors">
            Building Smarter, Safer &{" "}
            <span className="text-gradient-accent">Connected Environments</span>
          </h1>

          {/* Supporting Infrastructure Message */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-light max-w-3xl mx-auto leading-relaxed transition-colors">
            Delivering high-availability <strong className="text-slate-900 dark:text-white font-semibold">network infrastructure</strong>,
            certified <strong className="text-slate-900 dark:text-white font-semibold">fire & physical security</strong>,
            mission-critical <strong className="text-slate-900 dark:text-white font-semibold">data centers</strong>, and
            unified <strong className="text-slate-900 dark:text-white font-semibold">enterprise communications</strong> across Ethiopia.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleScrollTo("solutions")}
              rightIcon={<ArrowRight className="w-5 h-5" />}
              className="w-full sm:w-auto shadow-xl shadow-blue-600/30"
            >
              Explore Solutions
            </Button>

            <Button
              variant="secondary"
              size="lg"
              onClick={() => handleScrollTo("contact")}
              leftIcon={<PhoneCall className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
              className="w-full sm:w-auto"
            >
              Talk to an Expert
            </Button>
          </div>

          {/* Trust Highlights Badges */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-600 dark:text-slate-400 font-medium">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Certified Safety Compliance</span>
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-sm">
              <Network className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Fluke Certified Cabling</span>
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-sm">
              <Lock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Turnkey Systems Integration</span>
            </span>
          </div>

          {/* Key Metric Stats Grid */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border-t border-slate-200 dark:border-slate-900/80 mt-10">
            {ABOUT_DATA.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/60 shadow-sm backdrop-blur-sm text-center"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
