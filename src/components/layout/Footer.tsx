"use client";

import React from "react";
import { SITE_METADATA, NAV_ITEMS, SERVICES_DATA } from "@/data/site-data";
import { Shield, ArrowUp, Phone, Mail, MapPin, Clock } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 relative pt-16 pb-12 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-900/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Column 1: Company Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight block">
                  {SITE_METADATA.name}
                </span>
                <span className="text-[11px] uppercase font-semibold text-blue-400 tracking-wider block">
                  Technology Systems Integrator
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Ethiopia&apos;s trusted technology systems integrator specializing in CCTV video
              surveillance, fire alarm engineering, biometric access control, data centers, and
              unified enterprise communications.
            </p>

            <div className="pt-2 text-xs text-slate-500 space-y-1">
              <p>Certified Engineering & Safety Compliance</p>
              <p>Addis Ababa, Ethiopia</p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="hover:text-blue-400 transition-colors inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Engineering Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Core Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_DATA.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, "#services")}
                    className="hover:text-blue-400 transition-colors line-clamp-1"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Direct Contact
            </h3>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>{SITE_METADATA.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="tel:+251911438942" className="hover:text-white transition-colors">
                  +251 911 438 942
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href={`mailto:${SITE_METADATA.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_METADATA.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>{SITE_METADATA.contact.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Back-to-Top button */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {SITE_METADATA.name}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all group"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-blue-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
