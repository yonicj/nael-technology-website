"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SITE_METADATA } from "@/data/site-data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Building2,
  ExternalLink,
  ShoppingBag,
  ArrowRight,
  Headphones,
  FileSpreadsheet,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const serviceOptions = [
    { value: "cctv-surveillance", label: "CCTV & Video Surveillance Systems" },
    { value: "fire-alarm", label: "Fire Alarm & Detection Systems" },
    { value: "access-control", label: "Biometric Access Control & Attendance" },
    { value: "structured-cabling", label: "Structured Cabling & Fiber Optics" },
    { value: "data-center", label: "Data Center Infrastructure & Power" },
    { value: "wireless-networking", label: "Enterprise Wi-Fi & Switching" },
    { value: "video-conferencing", label: "Audio & Video Conferencing" },
    { value: "telephony-pabx", label: "IP-PABX & Call Center Solutions" },
    { value: "nurse-call", label: "Hospital Nurse Call Systems" },
    { value: "general-inquiry", label: "General Project Consultation / BOQ" },
  ];

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Full name is required.";
    if (!formData.email.trim()) {
      errors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      errors.message = "Project requirements or message is required.";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Please provide at least 10 characters describing your project.";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate submission processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    }, 1200);
  };

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
              <span className="text-slate-900 dark:text-white font-semibold">Contact Us</span>
            </nav>
          </Container>
        </div>

        {/* Contact Hero */}
        <section className="py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-blue-600/15 blur-[140px] rounded-full pointer-events-none" />

          <Container size="xl" className="relative z-10 space-y-6 text-center max-w-4xl mx-auto">
            <Badge variant="cyan" size="md" withPulse={true}>
              Addis Ababa Engineering Desk
            </Badge>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] transition-colors">
              Get in Touch &{" "}
              <span className="text-gradient-accent">Technical Proposals</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-3xl mx-auto transition-colors px-2 sm:px-0">
              Request a comprehensive turnkey project consultation, schedule an on-site facility survey,
              or inquire about enterprise hardware pricing and architectural single-line diagrams.
            </p>
          </Container>
        </section>

        {/* Quick Contact Cards */}
        <section className="pb-16">
          <Container size="xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Phone Card */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/15 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Phone Support</h3>
                <div className="space-y-1 text-xs">
                  {SITE_METADATA.contact.phones.map((p, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <a
                        href={`tel:${p.number.replace(/\s+/g, "")}`}
                        className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                      >
                        {p.number}
                      </a>
                      <span className="text-[10px] text-slate-500">{p.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Email Card */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-600/15 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Official Email</h3>
                <div className="text-xs">
                  <a
                    href={`mailto:${SITE_METADATA.contact.email}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium break-all"
                  >
                    {SITE_METADATA.contact.email}
                  </a>
                  <p className="text-[11px] text-slate-500 mt-1">Direct engineering inbox</p>
                </div>
              </div>

              {/* Office Location Card */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-600/15 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Headquarters</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {SITE_METADATA.contact.address}
                </p>
              </div>

              {/* Working Hours Card */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Operating Hours</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {SITE_METADATA.contact.workingHours}
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Main Form & Location Map Section */}
        <section className="pb-24">
          <Container size="xl">
            <div className="grid lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Interactive Map & Verified Marketplace */}
              <div className="lg:col-span-5 space-y-6">
                <Card variant="glass" className="space-y-6 p-6 sm:p-8">
                  <div>
                    <Badge variant="cyan" size="sm" className="mb-2">
                      Office Location
                    </Badge>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                      Awash Building, Addis Ababa
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      Our engineering and technical operations center is located in Addis Ababa, Ethiopia.
                    </p>
                  </div>

                  {/* Embedded Google Map */}
                  <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 h-64 relative shadow-md">
                    <iframe
                      src={SITE_METADATA.contact.mapEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Nael Technology Solutions Location Map"
                      className="grayscale contrast-125 dark:opacity-90 opacity-95"
                    />
                  </div>

                  {/* Official Jiji Store Callout */}
                  <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-400">
                      <ShoppingBag className="w-4 h-4" />
                      <span>Official Hardware Store on Jiji</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Check live inventory, verified stock, and commercial pricing for CCTV cameras, biometric readers,
                      fire detectors, and PABX equipment on our verified Ethiopian shop.
                    </p>
                    <a
                      href={SITE_METADATA.jijiShopUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 transition-colors pt-1"
                    >
                      <span>Visit Official Jiji Store</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </Card>
              </div>

              {/* Right Column: Interactive Proposal Request Form */}
              <div className="lg:col-span-7">
                <Card variant="glass" className="p-6 sm:p-10">
                  <CardHeader className="p-0 pb-6 space-y-2">
                    <Badge variant="primary" size="sm">
                      Technical Inquiries
                    </Badge>
                    <CardTitle className="text-2xl sm:text-3xl">
                      Request a Technical Proposal or Site Survey
                    </CardTitle>
                    <CardDescription>
                      Fill out your facility requirements below. Our technical desk will review your scope and provide a formal proposal.
                    </CardDescription>
                  </CardHeader>

                  {submitError && (
                    <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/50 flex items-start gap-3 text-red-700 dark:text-red-300 text-xs">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  {submitSuccess ? (
                    <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-500/30 text-center space-y-4 animate-in zoom-in-95 duration-300">
                      <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">Proposal Request Received</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                        Thank you for contacting Nael Technology Solutions. Our engineering team at Awash Building
                        has received your submission and will review your technical requirements promptly.
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSubmitSuccess(false)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <FormField
                          id="contact-name"
                          label="Full Name"
                          required={true}
                          error={formErrors.name}
                        >
                          <Input
                            id="contact-name"
                            placeholder="e.g. Abebe Kebede"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            hasError={!!formErrors.name}
                          />
                        </FormField>

                        <FormField
                          id="contact-email"
                          label="Email Address"
                          required={true}
                          error={formErrors.email}
                        >
                          <Input
                            id="contact-email"
                            type="email"
                            placeholder="name@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            hasError={!!formErrors.email}
                          />
                        </FormField>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <FormField
                          id="contact-phone"
                          label="Phone Number"
                          optionalLabel="Optional"
                        >
                          <Input
                            id="contact-phone"
                            type="tel"
                            placeholder="+251 9..."
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </FormField>

                        <FormField
                          id="contact-company"
                          label="Organization / Building"
                          optionalLabel="Optional"
                        >
                          <Input
                            id="contact-company"
                            placeholder="e.g. Commercial Bank / Office Tower"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          />
                        </FormField>
                      </div>

                      <FormField
                        id="contact-service"
                        label="Primary Engineering Domain"
                        optionalLabel="Optional"
                      >
                        <Select
                          id="contact-service"
                          placeholder="Select primary domain of interest..."
                          options={serviceOptions}
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        />
                      </FormField>

                      <FormField
                        id="contact-message"
                        label="Project Scope & Technical Specifications"
                        required={true}
                        error={formErrors.message}
                        helperText="Include facility type, estimated scale, or requested timeline"
                      >
                        <Textarea
                          id="contact-message"
                          placeholder="Describe your site requirements (e.g. Need 4K IP CCTV surveillance, fire alarm detection, and biometric access for a 6-story building in Addis Ababa)..."
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          hasError={!!formErrors.message}
                        />
                      </FormField>

                      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <span className="text-xs text-slate-500 flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                          <span>Confidential engineering consultation</span>
                        </span>

                        <Button
                          type="submit"
                          variant="primary"
                          size="lg"
                          isLoading={isSubmitting}
                          rightIcon={<Send className="w-4 h-4" />}
                          className="w-full sm:w-auto min-h-[48px]"
                        >
                          Submit Proposal Request
                        </Button>
                      </div>
                    </form>
                  )}
                </Card>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
