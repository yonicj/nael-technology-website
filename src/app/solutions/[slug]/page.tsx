import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { DETAILED_SOLUTIONS_DATA } from "@/data/solutions-data";
import { DETAILED_SERVICES_DATA } from "@/data/services-data";
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
  AlertCircle,
  Building2,
  PhoneCall,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  Award,
} from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 1. Generate Static Params for all Solutions
export async function generateStaticParams() {
  return DETAILED_SOLUTIONS_DATA.map((solution) => ({
    slug: solution.slug,
  }));
}

// 2. Generate Dynamic Metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = DETAILED_SOLUTIONS_DATA.find((s) => s.slug === slug);

  if (!solution) {
    return {
      title: "Solution Not Found | Nael Technology Solutions",
    };
  }

  return {
    title: `${solution.title} | Nael Technology Solutions`,
    description: solution.tagline,
    openGraph: {
      title: `${solution.title} — Turnkey Solution`,
      description: solution.tagline,
      type: "website",
      images: [
        {
          url: solution.image,
          width: 1200,
          height: 630,
          alt: solution.title,
        },
      ],
    },
  };
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = DETAILED_SOLUTIONS_DATA.find((s) => s.slug === slug);

  if (!solution) {
    notFound();
  }

  // Cross-reference related services
  const relatedServicesList = DETAILED_SERVICES_DATA.filter((srv) =>
    solution.relatedServices.includes(srv.slug)
  );

  // Cross-reference related solutions
  const relatedSolutionsList = DETAILED_SOLUTIONS_DATA.filter(
    (sol) => sol.slug !== solution.slug && solution.relatedSolutions.includes(sol.slug)
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
              <Link href="/solutions" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Solutions
              </Link>
              <span>/</span>
              <span className="text-slate-900 dark:text-white font-semibold line-clamp-1">
                {solution.title}
              </span>
            </nav>
          </Container>
        </div>

        {/* 1. HERO SECTION */}
        <section className="py-14 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-blue-600/15 blur-[140px] rounded-full pointer-events-none" />

          <Container size="xl" className="relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2.5">
                  <Badge variant="cyan" size="md" withPulse={true}>
                    {solution.badge}
                  </Badge>
                  <Badge variant="primary" size="md">
                    {solution.category}
                  </Badge>
                </div>

                <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider">
                  <Building2 className="w-4 h-4 flex-shrink-0" />
                  <span>Target Vertical: {solution.industry}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] transition-colors">
                  {solution.title}
                </h1>

                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed transition-colors">
                  {solution.tagline}
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
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

              {/* Right Hero Image Frame */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl bg-white/60 dark:bg-slate-900/60 p-2">
                  <ImageContainer
                    src={solution.image}
                    alt={solution.title}
                    aspectRatio="video"
                    withOverlay={true}
                    category={solution.category}
                  />
                  <div className="p-4 bg-white/90 dark:bg-slate-950/80 backdrop-blur rounded-2xl mt-2 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                        <IconResolver name={solution.iconName} className="w-4 h-4" />
                      </div>
                      <div className="text-xs font-semibold text-slate-900 dark:text-white">
                        {solution.title}
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/30 px-2 py-0.5 rounded font-semibold flex-shrink-0">
                      Turnkey Certified
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 2. OVERVIEW & ARCHITECTURAL BLUEPRINT */}
        <section className="py-16 bg-white dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800/80 relative">
          <Container size="xl">
            <div className="max-w-4xl space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
                <Layers className="w-4 h-4" />
                <span>Architectural Overview</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                Engineered for High-Reliability Operations
              </h2>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                {solution.overview}
              </p>
            </div>
          </Container>
        </section>

        {/* 3. PROBLEM IT SOLVES */}
        <section className="py-16 bg-slate-50 dark:bg-slate-950 relative">
          <Container size="xl">
            <div className="grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5 space-y-4">
                <Badge variant="rose" size="md">
                  Operational Vulnerabilities
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {solution.problemItSolves.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {solution.problemItSolves.description}
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                    Critical Challenges Addressed:
                  </span>
                  <ul className="space-y-3.5">
                    {solution.problemItSolves.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                        <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 4. TURNKEY ENGINEERING LIFECYCLE (4-STEP PROCESS) */}
        <section className="py-20 bg-white dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800/80 relative">
          <Container size="xl" className="space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <Badge variant="cyan" size="md">
                Turnkey Engineering Methodology
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {solution.whatNaelProvides.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-light">
                {solution.whatNaelProvides.description}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {solution.whatNaelProvides.steps.map((step) => (
                <div
                  key={step.number}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-4 relative group hover:border-blue-500/50 transition-colors"
                >
                  <div className="space-y-3">
                    <span className="text-3xl font-black text-blue-600/30 dark:text-blue-500/20 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {step.number}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="pt-2">
                    <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider font-semibold">
                      Phase {step.number}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 5. CORE SUB-SYSTEMS & DELIVERABLES */}
        <section className="py-20 bg-slate-50 dark:bg-slate-950 relative">
          <Container size="xl" className="space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <Badge variant="primary" size="md">
                Sub-Systems Architecture
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Integrated Equipment & Deliverables
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-light">
                Every turnkey package is delivered with hardware, cabling, power conditioning, and software unified under one specification.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {solution.components.map((comp, idx) => (
                <Card key={idx} variant="default" className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-600/15 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <CardTitle className="text-base">{comp.title}</CardTitle>
                  </div>

                  <CardDescription className="text-xs leading-relaxed">
                    {comp.description}
                  </CardDescription>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                    {comp.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* 6. TARGET INDUSTRY DEPLOYMENTS */}
        <section className="py-20 bg-white dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800/80 relative">
          <Container size="xl" className="space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <Badge variant="slate" size="md">
                Sector Applications
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Designed for Key Ethiopian Facilities
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-light">
                Tailored architectural profiles engineered to satisfy the operational demands of distinct enterprise sectors.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {solution.applications.map((app, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600/15 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <IconResolver name={app.icon} className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {app.facility}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {app.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 7. STANDARDS & COMPLIANCE */}
        <section className="py-16 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 relative">
          <Container size="xl">
            <div className="p-6 sm:p-10 rounded-3xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="space-y-3 max-w-2xl">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-wider">
                  <Award className="w-4 h-4" />
                  <span>Quality Assurance & Regulatory Alignment</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  Engineering Standards Compliance
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  All installation materials, low-voltage cabling, power components, and software protocols strictly adhere to international codes and Ethiopian regulatory standards.
                </p>
              </div>

              <div className="w-full md:w-auto flex-shrink-0">
                <ul className="space-y-2">
                  {solution.standards.map((std, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                      <span>{std}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* 8. RELATED SERVICES & SOLUTIONS */}
        <section className="py-20 bg-white dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800/80 relative">
          <Container size="xl" className="space-y-12">
            {/* Related Services */}
            {relatedServicesList.length > 0 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    Associated Engineering Services
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
                        <span>Explore Service Details</span>
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
                    Complementary Turnkey Solutions
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

        {/* 9. FINAL CTA */}
        <section className="py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 relative transition-colors">
          <Container size="xl">
            <div className="p-6 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-50 via-slate-100 to-blue-50 dark:from-blue-950/40 dark:via-slate-900 dark:to-blue-950/40 border border-blue-200 dark:border-blue-800/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
              <div className="space-y-3 max-w-2xl">
                <Badge variant="emerald" size="md">
                  Turnkey Engineering Consultation
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Ready to Deploy {solution.title}?
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                  Speak directly with our technical systems engineering desk in Addis Ababa (Awash Building) for comprehensive site surveys,
                  custom architectural blueprints, and transparent Bill of Quantities (BOQ).
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
