import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { DETAILED_PRODUCTS_DATA } from "@/data/products-data";
import { DETAILED_SERVICES_DATA } from "@/data/services-data";
import { DETAILED_SOLUTIONS_DATA } from "@/data/solutions-data";
import { SITE_METADATA } from "@/data/site-data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
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
  Cpu,
  Layers,
  Wrench,
  Building2,
  Sparkles,
} from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 1. Generate Static Params for all Products
export async function generateStaticParams() {
  return DETAILED_PRODUCTS_DATA.map((product) => ({
    slug: product.slug,
  }));
}

// 2. Generate Dynamic Metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = DETAILED_PRODUCTS_DATA.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found | Nael Technology Solutions",
    };
  }

  return {
    title: `${product.title} | Nael Technology Solutions`,
    description: product.excerpt,
    openGraph: {
      title: `${product.title} — Hardware & Systems`,
      description: product.excerpt,
      type: "website",
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = DETAILED_PRODUCTS_DATA.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Cross-reference related services
  const relatedServicesList = DETAILED_SERVICES_DATA.filter((srv) =>
    product.relatedServices.includes(srv.slug)
  );

  // Cross-reference related solutions
  const relatedSolutionsList = DETAILED_SOLUTIONS_DATA.filter((sol) =>
    product.relatedSolutions.includes(sol.slug)
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Breadcrumb Bar */}
        <div className="border-b border-slate-200 dark:border-slate-800/80 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md">
          <Container size="xl" className="py-3">
            <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
              <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/products" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Products
              </Link>
              <span>/</span>
              <span className="text-slate-900 dark:text-white font-semibold line-clamp-1">
                {product.title}
              </span>
            </nav>
          </Container>
        </div>

        {/* 1. HERO & PRODUCT OVERVIEW */}
        <section className="py-14 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />

          <Container size="xl" className="relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Product Imagery & Gallery */}
              <div className="lg:col-span-6 space-y-4">
                <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl bg-white/60 dark:bg-slate-900/60 p-2">
                  <ImageContainer
                    src={product.image}
                    alt={product.title}
                    aspectRatio="video"
                    withOverlay={true}
                    category={product.category}
                  />
                  <div className="p-4 bg-white/90 dark:bg-slate-950/80 backdrop-blur rounded-2xl mt-2 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                        <IconResolver name={product.iconName} className="w-4 h-4" />
                      </div>
                      <div className="text-xs font-semibold text-slate-900 dark:text-white">
                        {product.title}
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/30 px-2 py-0.5 rounded font-semibold flex-shrink-0">
                      Genuine Hardware
                    </span>
                  </div>
                </div>

                {/* Secondary Gallery Images */}
                {product.gallery.length > 1 && (
                  <div className="grid grid-cols-2 gap-3">
                    {product.gallery.map((img, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm"
                      >
                        <ImageContainer
                          src={img}
                          alt={`${product.title} Gallery View ${idx + 1}`}
                          aspectRatio="video"
                          withOverlay={false}
                          category={product.category}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Specifications & Purchasing Links */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex flex-wrap items-center gap-2.5">
                  <Badge variant="amber" size="md" withPulse={true}>
                    {product.badge}
                  </Badge>
                  <Badge variant="primary" size="md">
                    {product.category}
                  </Badge>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] transition-colors">
                  {product.title}
                </h1>

                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed transition-colors">
                  {product.description}
                </p>

                {/* Official Jiji Card Banner */}
                <div className="p-5 rounded-2xl bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/30 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                      <ShoppingBag className="w-4 h-4" />
                      <span>Official Jiji Marketplace Store</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">Verified Seller</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    View commercial pricing, live stock availability, and place orders directly through our verified Ethiopian Jiji shop.
                  </p>
                  <a
                    href={product.jijiShopUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-amber-500/20"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Check Price & Availability on Jiji</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-2">
                  <Button
                    href="/#contact"
                    variant="primary"
                    size="lg"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                    className="w-full sm:w-auto min-h-[48px]"
                  >
                    Request Technical Proposal
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
            </div>
          </Container>
        </section>

        {/* 2. CONFIRMED FEATURES & SPECS */}
        <section className="py-16 bg-white dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800/80 relative">
          <Container size="xl">
            <div className="grid lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Confirmed Features */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-2">
                  <Badge variant="cyan" size="md">
                    Technical Specifications
                  </Badge>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                    Confirmed Features & Capabilities
                  </h2>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                  {product.overview}
                </p>

                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                    Core Functionalities:
                  </span>
                  <ul className="space-y-2.5">
                    {product.confirmedFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Technical Specification Table */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-2">
                  <Badge variant="slate" size="md">
                    Hardware Parameters
                  </Badge>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                    Standard Specifications
                  </h2>
                </div>

                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm bg-slate-50 dark:bg-slate-900">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <tbody>
                      {product.specs.map((item, idx) => (
                        <tr
                          key={idx}
                          className="border-b border-slate-200/80 dark:border-slate-800/80 last:border-0 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors"
                        >
                          <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900 dark:text-white w-1/3 bg-slate-100/60 dark:bg-slate-800/40">
                            {item.label}
                          </td>
                          <td className="py-3.5 px-4 sm:px-6 text-slate-600 dark:text-slate-300 font-mono text-xs">
                            {item.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/40 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    <strong>Installation Guarantee:</strong> All hardware purchased through Nael Technology Solutions can be bundled with certified turnkey field installation, testing, and annual maintenance contracts (AMC).
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 3. FACILITY DEPLOYMENTS */}
        <section className="py-16 bg-slate-50 dark:bg-slate-950 relative">
          <Container size="xl" className="space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <Badge variant="primary" size="md">
                Sector Applications
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Recommended Facility Deployments
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {product.deploymentUseCases.map((useCase, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-600/15 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {useCase.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 4. RELATED SERVICES & SOLUTIONS */}
        <section className="py-20 bg-white dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800/80 relative">
          <Container size="xl" className="space-y-12">
            {/* Related Services */}
            {relatedServicesList.length > 0 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    Associated Installation Services
                  </h3>
                  <Link
                    href="/services"
                    className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                  >
                    <span>View All Services</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedServicesList.map((rel) => (
                    <Card key={rel.slug} variant="interactive" className="p-6 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                            <IconResolver name={rel.iconName} className="w-4 h-4" />
                          </div>
                          <Badge variant="primary" size="sm">
                            {rel.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-base">{rel.title}</CardTitle>
                        <CardDescription className="text-xs line-clamp-2">
                          {rel.tagline}
                        </CardDescription>
                      </div>

                      <Link
                        href={`/services/${rel.slug}`}
                        className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                      >
                        <span>Explore Installation Service</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Related Solutions */}
            {relatedSolutionsList.length > 0 && (
              <div className="space-y-6 pt-8 border-t border-slate-200 dark:border-slate-800/80">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    Integrated Turnkey Solutions
                  </h3>
                  <Link
                    href="/solutions"
                    className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                  >
                    <span>View All Solutions</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedSolutionsList.map((sol) => (
                    <Card key={sol.slug} variant="interactive" className="p-6 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="w-8 h-8 rounded-lg bg-cyan-600/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                            <IconResolver name={sol.iconName} className="w-4 h-4" />
                          </div>
                          <Badge variant="cyan" size="sm">
                            {sol.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-base">{sol.title}</CardTitle>
                        <CardDescription className="text-xs line-clamp-2">
                          {sol.tagline}
                        </CardDescription>
                      </div>

                      <Link
                        href={`/solutions/${sol.slug}`}
                        className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                      >
                        <span>Explore Solution Blueprint</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </Container>
        </section>

        {/* 5. FINAL CTA */}
        <section className="py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 relative transition-colors">
          <Container size="xl">
            <div className="p-6 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-50 via-slate-100 to-blue-50 dark:from-blue-950/40 dark:via-slate-900 dark:to-blue-950/40 border border-blue-200 dark:border-blue-800/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
              <div className="space-y-3 max-w-2xl">
                <Badge variant="emerald" size="md">
                  Procurement & Installation Desk
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Inquire About {product.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                  Connect with our Addis Ababa office (Awash Building) for quantity discounts, architectural cabling specifications, and certified deployment across Ethiopia.
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
                  Request Technical Proposal
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
