"use client";

import React from "react";
import { SITE_METADATA, NAV_ITEMS, SERVICES_DATA } from "@/data/site-data";
import { ArrowUp, Phone, Mail, MapPin, Clock, ExternalLink, ShoppingBag } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Container } from "@/components/ui/Container";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href === "#home" ? "/" : `/${targetId}`;
      }
    }
  };

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 text-slate-600 dark:text-slate-400 relative pt-16 pb-12 overflow-hidden transition-colors">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-600/5 dark:bg-blue-900/10 blur-3xl pointer-events-none rounded-full" />

      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Column 1: Company Profile */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo size="md" />

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              Ethiopia&apos;s trusted technology systems integrator specializing in CCTV video
              surveillance, certified fire alarms, biometric access control, data centers, structured cabling, and
              unified enterprise communications.
            </p>

            {/* Jiji Store Link */}
            <div className="pt-1">
              <a
                href={SITE_METADATA.jijiShopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30 text-xs font-semibold transition-all group"
              >
                <ShoppingBag className="w-4 h-4 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform" />
                <span>Visit Nael Official Store on Jiji</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-600/80 dark:text-amber-400/80" />
              </a>
            </div>

            <div className="pt-2 text-xs text-slate-500 space-y-1">
              <p className="flex items-center gap-1.5 text-slate-700 dark:text-slate-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                <span>Certified Engineering & Safety Compliance</span>
              </p>
              <p>Awash Building 1st Floor, Addis Ababa, Ethiopia</p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Engineering Services */}
          <div>
            <h3 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Core Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_DATA.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, "#services")}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-1"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div>
            <h3 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Direct Contact
            </h3>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span>{SITE_METADATA.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <a href="tel:+251911438942" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  +251 911 438 942
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <a
                  href={`mailto:${SITE_METADATA.contact.email}`}
                  className="hover:text-slate-900 dark:hover:text-white transition-colors break-all"
                >
                  {SITE_METADATA.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <span>{SITE_METADATA.contact.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Back-to-Top button */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {SITE_METADATA.name}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 shadow-sm transition-all group cursor-pointer w-full sm:w-auto min-h-[40px]"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-blue-600 dark:text-blue-400" />
          </button>
        </div>
      </Container>
    </footer>
  );
};
