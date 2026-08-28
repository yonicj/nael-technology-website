import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { DETAILED_SERVICES_DATA } from "@/data/services-data";
import { SOLUTIONS_DATA } from "@/data/site-data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { IconResolver } from "@/components/common/IconResolver";
import {
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Container } from "@/components/ui/Container";
import { ImageContainer } from "@/components/ui/ImageContainer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return DETAILED_SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = DETAILED_SERVICES_DATA.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Nael Technology Solutions Addis Ababa`,
    description: service.tagline,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = DETAILED_SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Resolve related services and solutions
  const relatedServicesList = DETAILED_SERVICES_DATA.filter((s) =>
    service.relatedServices.includes(s.slug)
  );

  const relatedSolutionsList = SOLUTIONS_DATA.filter((sol) =>
    service.relatedSolutions.includes(sol.id)
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white transition-colors">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        {/* 1. BREADCRUMBS */}
        <div className="border-b border-slate-200 dark:border-slate-900 bg-white/60 dark:bg-slate-950/60 py-3">
          <Container size="xl">
            <nav className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
              <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" />
              <Link href="/services" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                Services
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" />
              <span className="text-blue-600 dark:text-blue-400 font-semibold truncate max-w-[200px] sm:max-w-none">
                {service.title}
              </span>
            </nav>
          </Container>
        </div>

        {/* 2. HERO SECTION */}
        <section className="py-14 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[300px] bg-blue-600/15 blur-[150px] rounded-full pointer-events-none" />

          <Container size="xl" className="relative z-10 space-y-12">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              {/* Left Hero Copy */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="primary" size="md">
                    {service.category}
                  </Badge>
                  <Badge variant="cyan" size="sm">
                    {service.badge}
                  </Badge>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] transition-colors">
                  {service.title}
                </h1>

                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed transition-colors">
                  {service.tagline}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Button
                    href="/#contact"
                    variant="primary"
                    size="lg"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Request Technical Proposal
                  </Button>
                  <Button
                    href="tel:+251911438942"
                    variant="secondary"
                    size="lg"
                    leftIcon={<PhoneCall className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                  >
                    +251 911 438 942
                  </Button>
                </div>
              </div>

              {/* Right Hero Image Frame */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl bg-white/60 dark:bg-slate-900/60 p-2">
                  <ImageContainer
                    src={service.image}
                    alt={service.title}
                    aspectRatio="video"
                    withOverlay={true}
                    category={service.category}
                  />
                  <div className="p-4 bg-white/90 dark:bg-slate-950/80 backdrop-blur rounded-2xl mt-2 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                        <IconResolver name={service.iconName} className="w-4 h-4" />
                      </div>
                      <div className="text-xs font-semibold text-slate-900 dark:text-white">
                        {service.title}
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/30 px-2 py-0.5 rounded font-semibold">
                      Certified Delivery
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 3. OVERVIEW SECTION */}
        <section className="py-16 bg-white dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-900 relative transition-colors">
          <Container size="xl">
            <div className="max-w-4xl mx-auto space-y-6">
              <SectionHeader
                badge="Service Overview"
                badgeVariant="cyan"
                title="What Nael Delivers:"
                titleAccent="End-to-End Engineering"
                description={service.overview}
                align="left"
              />
            </div>
          </Container>
        </section>

        {/* 4. PROBLEM IT SOLVES */}
        <section className="py-16 bg-slate-100/50 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-900 transition-colors">
          <Container size="xl" className="space-y-8">
            <SectionHeader
              badge="Operational Value"
              badgeVariant="primary"
              title="Challenges We Solve:"
              titleAccent="Protecting Your Enterprise"
              description={service.problemItSolves.description}
              align="center"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.problemItSolves.points.map((point, idx) => (
                <Card key={idx} variant="glass" className="p-6 space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center font-mono text-xs font-bold">
                    0{idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    {point}
                  </p>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* 5. WHAT NAEL PROVIDES (TURNKEY LIFECYCLE) */}
        <section className="py-20 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 relative transition-colors">
          <Container size="xl" className="space-y-12">
            <SectionHeader
              badge="Turnkey Lifecycle"
              badgeVariant="emerald"
              title="Our Engineering Process:"
              titleAccent="From Survey to Handover"
              description={service.whatNaelProvides.description}
              align="center"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.whatNaelProvides.steps.map((step) => (
                <Card key={step.number} variant="interactive" className="p-6 space-y-4 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                      PHASE {step.number}
                    </div>
                    <CardTitle className="text-base sm:text-lg">{step.title}</CardTitle>
                    <CardDescription className="text-xs leading-relaxed pt-1">
                      {step.description}
                    </CardDescription>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* 6. CAPABILITIES */}
        <section className="py-20 bg-slate-100/60 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-900 transition-colors">
          <Container size="xl" className="space-y-12">
            <SectionHeader
              badge="Technical Specifications"
              badgeVariant="primary"
              title="Engineered Capabilities"
              titleAccent="& Standards"
              description="Our deployments combine certified hardware, structural safety compliance, and robust system configurations."
              align="center"
            />

            <div className="grid md:grid-cols-2 gap-6">
              {service.capabilities.map((cap, idx) => (
                <Card key={idx} variant="glass" className="p-6 space-y-4">
                  <div className="space-y-2">
                    <CardTitle className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span>{cap.title}</span>
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm leading-relaxed">
                      {cap.description}
                    </CardDescription>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                    {cap.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/50 text-blue-700 dark:text-blue-300 font-medium"
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

        {/* 7. APPLICATIONS */}
        <section className="py-20 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 transition-colors">
          <Container size="xl" className="space-y-12">
            <SectionHeader
              badge="Facility Environments"
              badgeVariant="cyan"
              title="Typical Applications &"
              titleAccent="Deployments"
              description="Where we engineer and integrate these systems across Ethiopian commercial and public infrastructure."
              align="center"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.applications.map((app, idx) => (
                <Card key={idx} variant="glass" className="p-6 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/25 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <IconResolver name={app.icon} className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-base">{app.facility}</CardTitle>
                  <CardDescription className="text-xs leading-relaxed">
                    {app.description}
                  </CardDescription>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* 8. RELATED SERVICES & RELATED SOLUTIONS */}
        <section className="py-20 bg-slate-100/80 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-900 transition-colors">
          <Container size="xl" className="space-y-16">
            {/* Related Services */}
            {relatedServicesList.length > 0 && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    Related Engineering Services
                  </h3>
                  <Link
                    href="/services"
                    className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors inline-flex items-center gap-1"
                  >
                    <span>View All Services</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
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
                        <span>Learn More</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Related Solutions */}
            {relatedSolutionsList.length > 0 && (
              <div className="space-y-8 pt-8 border-t border-slate-200 dark:border-slate-800/80">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  Related Turnkey Solutions
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  {relatedSolutionsList.map((sol) => (
                    <Card key={sol.id} variant="glass" className="p-6 space-y-3">
                      <div className="flex items-center justify-between">
                        <Badge variant="cyan" size="sm">
                          {sol.category}
                        </Badge>
                        <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{sol.industry}</span>
                      </div>
                      <CardTitle className="text-lg">{sol.title}</CardTitle>
                      <CardDescription className="text-xs leading-relaxed">
                        {sol.description}
                      </CardDescription>
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
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-50 via-slate-100 to-blue-50 dark:from-blue-950/40 dark:via-slate-900 dark:to-blue-950/40 border border-blue-200 dark:border-blue-800/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
              <div className="space-y-3 max-w-2xl">
                <Badge variant="emerald" size="md">
                  Turnkey Engineering Consultation
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Ready to Deploy {service.title}?
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                  Speak directly with our technical team in Addis Ababa (Awash Building) for site surveys,
                  custom architectural planning, and transparent project estimates.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
                <Button
                  href="/#contact"
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Request Technical Proposal
                </Button>
                <Button
                  href="tel:+251911438942"
                  variant="secondary"
                  size="lg"
                  leftIcon={<PhoneCall className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
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
