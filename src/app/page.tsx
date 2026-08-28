import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { WhyNaelSection } from "@/components/sections/WhyNaelSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white transition-colors">
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <CapabilitiesSection />
        <AboutSection />
        <ServicesSection />
        <SolutionsSection />
        <IndustriesSection />
        <ProductsSection />
        <ProjectsSection />
        <WhyNaelSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
