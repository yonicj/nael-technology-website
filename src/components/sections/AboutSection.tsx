"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ABOUT_DATA, SITE_METADATA } from "@/data/site-data";
import { IconResolver } from "@/components/common/IconResolver";
import { ArrowRight, CheckCircle2, MapPin, ShieldCheck, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";

export const AboutSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleContactScroll = () => {
    setModalOpen(false);
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
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden border-t border-slate-200 dark:border-slate-900 transition-colors">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Image with Floating Experience Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl shadow-blue-500/10 group aspect-[4/3] sm:aspect-square lg:aspect-[4/5]">
              <Image
                src="/images/about-engineers.jpg"
                alt="Nael Technology Solutions Certified Systems Engineers inspecting network infrastructure"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent dark:from-slate-950 dark:via-slate-950/30 dark:to-transparent" />

              {/* Verified Location Stamp */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-950/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200 shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>Addis Ababa, Ethiopia</span>
              </div>

              {/* Bottom In-image Description */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 dark:bg-slate-950/90 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 shadow-lg">
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1">
                  <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Certified Field Engineers</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  Turnkey installation, Fluke testing, and 24/7 preventative maintenance across Ethiopia.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Company Overview & 3 Core Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <Badge variant="primary" size="md">
                About Nael Technology Solutions
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] transition-colors">
                Ethiopia&apos;s Dedicated <span className="text-gradient-accent">Systems Integrator</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed transition-colors">
                {ABOUT_DATA.description}
              </p>
            </div>

            {/* Strategic Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {ABOUT_DATA.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-blue-500/30 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all space-y-2.5 shadow-sm"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-600/15 border border-blue-500/25 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <IconResolver name={pillar.icon} className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">{pillar.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-2">
              <Button
                variant="primary"
                size="md"
                onClick={() => setModalOpen(true)}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto min-h-[44px]"
              >
                About Nael
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={handleContactScroll}
                className="w-full sm:w-auto min-h-[44px]"
              >
                Schedule Site Survey
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* About Detail Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/60 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalOpen(false);
          }}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[92vh] sm:max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-r from-slate-50 via-white to-blue-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/50 border-b border-slate-200 dark:border-slate-800 relative flex-shrink-0">
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-3 right-3 sm:top-5 sm:right-5 p-2 sm:p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer min-w-[36px] min-h-[36px] flex items-center justify-center"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <Badge variant="cyan" size="sm" className="mb-2">
                Company Profile
              </Badge>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight pr-8">
                {SITE_METADATA.name}
              </h3>
            </div>

            {/* Body */}
            <div className="p-4 sm:p-6 md:p-8 space-y-5 sm:space-y-6 overflow-y-auto flex-1">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                  Company Overview
                </h4>
                <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {ABOUT_DATA.description}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    Our Vision
                  </h4>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">{ABOUT_DATA.vision}</p>
                </div>
                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    Our Mission
                  </h4>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">{ABOUT_DATA.mission}</p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-3">
                  Core Strategic Pillars
                </h4>
                <div className="space-y-2.5">
                  {ABOUT_DATA.pillars.map((pillar, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 dark:text-white block font-semibold">{pillar.title}</strong>
                        <span className="text-slate-600 dark:text-slate-400">{pillar.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
              <span className="text-xs text-slate-500 text-center sm:text-left">Awash Building, Addis Ababa</span>
              <Button variant="primary" size="sm" onClick={handleContactScroll} className="w-full sm:w-auto">
                Contact Technical Desk
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
