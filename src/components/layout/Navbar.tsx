"use client";

import React, { useState, useEffect } from "react";
import { NAV_ITEMS, SITE_METADATA } from "@/data/site-data";
import { Menu, X, Phone, ArrowRight, ExternalLink, ShoppingBag } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setMobileMenuOpen(false);
      const targetId = href.substring(1);
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
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-md shadow-slate-200/40 dark:shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="focus:outline-none"
            aria-label="Nael Technology Solutions Homepage"
          >
            <BrandLogo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/60 p-1.5 rounded-full border border-slate-200/80 dark:border-slate-800/60 backdrop-blur-md">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/20 font-semibold"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800/60"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden xl:flex items-center gap-3">
            {/* Shop on Jiji Button */}
            <a
              href={SITE_METADATA.jijiShopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30 text-xs font-semibold transition-all shadow-sm group"
            >
              <ShoppingBag className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
              <span>Shop on Jiji</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>

            {/* Direct Phone Support */}
            <a
              href="tel:+251911438942"
              className="flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors px-2 py-1"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>+251 911 438 942</span>
            </a>

            {/* Dark/Light Mode Switcher */}
            <ThemeToggle size="sm" />

            {/* Primary Action */}
            <Button
              href="#contact"
              onClick={(e) => handleNavClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, "#contact")}
              size="sm"
              variant="primary"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile & Tablet Right Controls: ThemeToggle + Quote CTA + Hamburger */}
          <div className="flex items-center gap-2 xl:hidden">
            <ThemeToggle size="sm" />

            <Button
              href="#contact"
              onClick={(e) => handleNavClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, "#contact")}
              size="sm"
              variant="primary"
              className="hidden sm:inline-flex text-xs px-3 py-1.5"
            >
              Get a Quote
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu with Full Viewport & Scroll Safety */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/95 dark:bg-slate-950/95 border-b border-slate-200 dark:border-slate-800 backdrop-blur-xl px-4 pt-3 pb-6 max-h-[calc(100vh-70px)] overflow-y-auto animate-in slide-in-from-top-4 duration-200 shadow-2xl">
          <div className="flex flex-col gap-1 mb-4">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors min-h-[44px] flex items-center ${
                    isActive
                      ? "bg-blue-50 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30 font-semibold"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
            {/* Theme Selector in Mobile */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Display Theme
              </span>
              <ThemeToggle variant="segmented" />
            </div>

            {/* Shop on Jiji mobile button */}
            <a
              href={SITE_METADATA.jijiShopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-sm font-semibold min-h-[44px]"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Shop Hardware on Jiji</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="tel:+251911438942"
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm font-medium text-slate-800 dark:text-slate-200 min-h-[44px]"
            >
              <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Call +251 911 438 942</span>
            </a>

            <Button
              href="#contact"
              onClick={(e) => handleNavClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, "#contact")}
              size="md"
              variant="primary"
              className="w-full min-h-[44px]"
            >
              Request Free Proposal
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
