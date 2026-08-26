"use client";

import React, { useState, useEffect } from "react";
import { HERO_SLIDES, ABOUT_DATA } from "@/data/site-data";
import { ArrowRight, PhoneCall } from "lucide-react";

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(interval);
  }, []);

  const handleCtaClick = (href: string) => {
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-slate-950">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium animate-in fade-in duration-500">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span>{slide.badge}</span>
          </div>

          {/* Dynamic Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] transition-all duration-500">
            {slide.headline}
          </h1>

          {/* Dynamic Subheadline */}
          <p className="text-lg sm:text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed transition-all duration-500">
            {slide.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => handleCtaClick(slide.primaryCta.href)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-xl shadow-blue-600/30 hover:shadow-blue-600/40 transition-all flex items-center justify-center gap-3 group text-base"
            >
              <span>{slide.primaryCta.label}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => handleCtaClick(slide.secondaryCta.href)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white font-semibold transition-all flex items-center justify-center gap-2 text-base backdrop-blur-sm"
            >
              <PhoneCall className="w-4 h-4 text-blue-400" />
              <span>{slide.secondaryCta.label}</span>
            </button>
          </div>

          {/* Slide Navigation Indicators */}
          <div className="flex items-center justify-center gap-2.5 pt-6">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentSlide
                    ? "w-8 h-2 bg-blue-500"
                    : "w-2 h-2 bg-slate-700 hover:bg-slate-600"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Stats Bar */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border-t border-slate-900 mt-8">
            {ABOUT_DATA.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm text-center"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
