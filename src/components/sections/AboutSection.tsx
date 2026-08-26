"use client";

import React from "react";
import { ABOUT_DATA } from "@/data/site-data";
import { IconResolver } from "@/components/common/IconResolver";
import { Target, Compass, Award } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900/50 relative overflow-hidden border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            About Us
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {ABOUT_DATA.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            {ABOUT_DATA.description}
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl relative overflow-hidden group hover:border-blue-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span>Our Vision</span>
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {ABOUT_DATA.vision}
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl relative overflow-hidden group hover:border-blue-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span>Our Mission</span>
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {ABOUT_DATA.mission}
            </p>
          </div>
        </div>

        {/* 3 Core Value Pillars */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Our Core Strategic Pillars
            </h3>
            <p className="text-sm text-slate-400 mt-2">
              Principles guiding every engineering and systems integration project
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {ABOUT_DATA.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:bg-slate-900 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <IconResolver name={pillar.icon} className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">{pillar.title}</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Commitment Banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-slate-900 border border-blue-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-600/30">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Standards-Compliant Systems Integration
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                All CCTV, fire alarm, fiber optic, and data center installations conform to strict Ethiopian safety and international engineering benchmarks.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="whitespace-nowrap px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors"
          >
            Work With Us
          </a>
        </div>
      </div>
    </section>
  );
};
