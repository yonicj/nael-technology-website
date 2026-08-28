"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { DETAILED_PRODUCTS_DATA } from "@/data/products-data";
import { SITE_METADATA } from "@/data/site-data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Tabs } from "@/components/ui/Tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ImageContainer } from "@/components/ui/ImageContainer";
import { IconResolver } from "@/components/common/IconResolver";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  ShoppingBag,
  PhoneCall,
  ShieldCheck,
  Truck,
  Wrench,
  Sparkles,
} from "lucide-react";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Products");

  // Extract unique categories
  const categories = useMemo(() => {
    const rawCategories = Array.from(new Set(DETAILED_PRODUCTS_DATA.map((p) => p.category)));
    return ["All Products", ...rawCategories];
  }, []);

  // Filter products
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All Products") {
      return DETAILED_PRODUCTS_DATA;
    }
    return DETAILED_PRODUCTS_DATA.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

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
              <span className="text-slate-900 dark:text-white font-semibold">Products Catalog</span>
            </nav>
          </Container>
        </div>

        {/* Products Hub Hero */}
        <section className="py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-amber-500/10 dark:bg-amber-600/10 blur-[140px] rounded-full pointer-events-none" />

          <Container size="xl" className="relative z-10 space-y-6 text-center max-w-4xl mx-auto">
            <Badge variant="amber" size="md" withPulse={true}>
              Hardware & Systems Catalog
            </Badge>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] transition-colors">
              Enterprise Systems &{" "}
              <span className="text-gradient-accent">Hardware Equipment</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-3xl mx-auto transition-colors px-2 sm:px-0">
              Commercial-grade physical security, certified fire safety, optical networking, IP telephony,
              and healthcare communication hardware available with professional turnkey installation across Ethiopia.
            </p>
          </Container>
        </section>

        {/* Official Jiji Store Banner */}
        <section className="pb-12">
          <Container size="xl">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-500/15 via-amber-500/5 to-transparent border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/25">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Official Nael Technology Store on Jiji
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    Check stock availability, verified items, and nationwide delivery across Ethiopia.
                  </p>
                </div>
              </div>

              <a
                href={SITE_METADATA.jijiShopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-amber-500/20 transition-all flex-shrink-0 min-h-[44px]"
              >
                <span>Visit Official Jiji Store</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </Container>
        </section>

        {/* Products Grid Section */}
        <section className="pb-24">
          <Container size="xl" className="space-y-12">
            {/* Category Filter Tabs */}
            <div className="flex justify-center">
              <Tabs
                tabs={categories}
                activeTab={selectedCategory}
                onChange={(cat) => setSelectedCategory(cat)}
                className="max-w-4xl"
              />
            </div>

            {/* Products Cards Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Card
                  key={product.slug}
                  variant="interactive"
                  className="flex flex-col justify-between overflow-hidden"
                >
                  {/* Product Preview Image */}
                  <div className="relative aspect-video w-full overflow-hidden border-b border-slate-200 dark:border-slate-800">
                    <ImageContainer
                      src={product.image}
                      alt={product.title}
                      aspectRatio="video"
                      withOverlay={true}
                      category={product.category}
                    />
                  </div>

                  <CardHeader className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-xl bg-blue-600/15 border border-blue-500/25 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-inner">
                        <IconResolver name={product.iconName} className="w-4 h-4" />
                      </div>
                      <Badge variant="primary" size="sm">
                        {product.category}
                      </Badge>
                    </div>

                    <CardTitle className="text-lg">{product.title}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {product.excerpt}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    <div className="space-y-1.5 border-t border-slate-100 dark:border-slate-800/80 pt-3">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                        Confirmed Features:
                      </span>
                      <ul className="space-y-1">
                        {product.confirmedFeatures.slice(0, 3).map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>

                  <CardFooter className="pt-4 flex flex-col gap-2 border-t border-slate-100 dark:border-slate-800/80">
                    <Link
                      href={`/products/${product.slug}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-600/20 hover:shadow-blue-600/30 transition-all group min-h-[40px]"
                    >
                      <span>View Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>

                    <a
                      href={SITE_METADATA.jijiShopUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30 text-xs font-semibold transition-all min-h-[36px]"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Check on Jiji</span>
                      <ExternalLink className="w-3 h-3 opacity-70" />
                    </a>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Hardware & Engineering Guarantees */}
        <section className="py-20 bg-white dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800/80 relative">
          <Container size="xl" className="space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <Badge variant="emerald" size="md">
                Equipment Assurances
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Enterprise Hardware & Installation Quality
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                All hardware sourced and supplied by Nael Technology Solutions is tested, genuine, and eligible for full professional installation and maintenance warranties.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/25 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Genuine Manufacturer Hardware</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  We supply only authentic, certified equipment meeting international standards for security, electrical safety, and durability.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-600/15 border border-amber-500/25 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Turnkey Field Installation</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Our certified field engineering teams provide full on-site mounting, structured cabling, configuration, and staff training.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600/15 border border-emerald-500/25 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Truck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Nationwide Ethiopian Dispatch</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Hardware supply, site surveys, and installation services available across Addis Ababa and all regional states in Ethiopia.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Technical Consultation Callout */}
        <section className="border-t border-slate-200 dark:border-slate-900 bg-white/60 dark:bg-slate-950/60 py-20 relative">
          <Container size="xl">
            <div className="p-6 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-100 via-blue-50/50 to-slate-100 dark:from-slate-900 dark:via-blue-950/30 dark:to-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
              <div className="space-y-3 max-w-2xl">
                <Badge variant="cyan" size="md">
                  BOQ Preparation & Procurement
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Need an Equipment Bill of Quantities (BOQ)?
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                  Our technical engineering desk assists corporate procurement officers and project consultants with itemized equipment schedules, compatibility audits, and formal tenders.
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
                  Request Equipment Quote
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
