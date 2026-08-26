"use client";

import React from "react";
import { PROJECTS_DATA } from "@/data/site-data";
import { CheckCircle2, Award, ArrowUpRight } from "lucide-react";

export const ProjectsSection: React.FC = () => {
  const handleConsultClick = () => {
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="py-24 bg-slate-900/50 relative overflow-hidden border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            Projects & Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Enterprise Track Record & Deployments
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Proven execution across high-security banking institutions, healthcare facilities, commercial office towers, and mission-critical server environments in Ethiopia.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {PROJECTS_DATA.map((project, idx) => (
            <div
              key={project.id}
              className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl shadow-black/20"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                    {project.clientSector}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {project.scope}
                </p>

                <div className="space-y-2.5 mb-6">
                  {project.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800 flex flex-wrap gap-2">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Project Callout Card */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-950/80 via-slate-900 to-slate-900 border border-blue-500/30 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Planning an Enterprise Installation?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Our certified systems engineers provide site surveys, architectural blueprints, bill of quantities (BOQ), and compliance documentation for commercial tenders and RFPs.
              </p>
            </div>

            <div className="pt-6">
              <button
                onClick={handleConsultClick}
                className="w-full py-3 px-5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Request Project Site Survey</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
