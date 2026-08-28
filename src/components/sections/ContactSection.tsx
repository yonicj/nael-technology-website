"use client";

import React, { useState } from "react";
import { SITE_METADATA } from "@/data/site-data";
import {
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  ExternalLink,
  ShoppingBag,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Container } from "@/components/ui/Container";

export const ContactSection: React.FC = () => {
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

  const serviceOptions = [
    { value: "cctv-surveillance", label: "CCTV & Video Surveillance" },
    { value: "fire-alarm", label: "Fire Alarm & Safety Detection" },
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
    if (!formData.message.trim()) errors.message = "Project requirements or message is required.";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden border-t border-slate-200 dark:border-slate-900 transition-colors">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <Container size="xl" className="relative z-10 space-y-16">
        <SectionHeader
          badge="Get in Touch"
          badgeVariant="primary"
          title="Connect with Our Addis Ababa"
          titleAccent="Technical Engineering Desk"
          description="Request a turnkey project consultation, schedule an on-site facility survey, or inquire about enterprise hardware pricing and specifications."
          align="center"
        />

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Information & Location Map */}
          <div className="lg:col-span-5 space-y-6">
            <Card variant="glass" className="space-y-6 p-6 sm:p-8">
              <div>
                <Badge variant="cyan" size="sm" className="mb-2">
                  Headquarters
                </Badge>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                  Nael Technology Solutions
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Awash Building 1st Floor, Addis Ababa, Ethiopia
                </p>
              </div>

              {/* Verified Direct Channels */}
              <div className="space-y-4 border-t border-slate-200 dark:border-slate-800/80 pt-4">
                {/* Phones */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                    Direct Phone Support Lines:
                  </span>
                  {SITE_METADATA.contact.phones.map((phone, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                        <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                        <a
                          href={`tel:${phone.number.replace(/\s+/g, "")}`}
                          className="font-medium text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {phone.number}
                        </a>
                      </div>
                      <span className="text-[11px] text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50">
                        {phone.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Email */}
                <div className="space-y-1.5 pt-2 border-t border-slate-200 dark:border-slate-800/80">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                    Official Email:
                  </span>
                  <div className="flex items-center gap-2 text-xs">
                    <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <a
                      href={`mailto:${SITE_METADATA.contact.email}`}
                      className="text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                    >
                      {SITE_METADATA.contact.email}
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="space-y-1.5 pt-2 border-t border-slate-200 dark:border-slate-800/80">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                    Office Working Hours:
                  </span>
                  <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>{SITE_METADATA.contact.workingHours}</span>
                  </div>
                </div>

                {/* Jiji Official Store Callout */}
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-2 pt-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-400">
                    <ShoppingBag className="w-4 h-4" />
                    <span>Looking to buy hardware directly?</span>
                  </div>
                  <p className="text-[11px] text-slate-700 dark:text-slate-300">
                    View verified stock of CCTV cameras, PABX units, biometric access readers, and fire alarms on Jiji.
                  </p>
                  <a
                    href={SITE_METADATA.jijiShopUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 transition-colors"
                  >
                    <span>Visit Official Jiji Store</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </Card>

            {/* Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 h-56 relative shadow-lg">
              <iframe
                src={SITE_METADATA.contact.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nael Technology Solutions Addis Ababa Office Location Map"
                className="grayscale contrast-125 dark:opacity-90 opacity-95"
              />
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Quote Form */}
          <div className="lg:col-span-7">
            <Card variant="glass" className="p-6 sm:p-10">
              <CardHeader className="p-0 pb-6 space-y-2">
                <Badge variant="primary" size="sm">
                  Inquiry Form
                </Badge>
                <CardTitle className="text-2xl sm:text-3xl">
                  Request a Free Technical Proposal
                </CardTitle>
                <CardDescription>
                  Provide your site details below and an engineer will get back to you within 24 hours.
                </CardDescription>
              </CardHeader>

              {submitSuccess ? (
                <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-500/30 text-center space-y-4 animate-in zoom-in-95 duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">Inquiry Received Successfully</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to Nael Technology Solutions. Our technical team at Awash Building
                    has received your message and will review your specifications shortly.
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
                      id="name"
                      label="Full Name"
                      required={true}
                      error={formErrors.name}
                    >
                      <Input
                        id="name"
                        placeholder="e.g. Abebe Kebede"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        hasError={!!formErrors.name}
                      />
                    </FormField>

                    <FormField
                      id="email"
                      label="Email Address"
                      required={true}
                      error={formErrors.email}
                    >
                      <Input
                        id="email"
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
                      id="phone"
                      label="Phone Number"
                      optionalLabel="Optional"
                    >
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+251 9..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </FormField>

                    <FormField
                      id="company"
                      label="Organization / Building"
                      optionalLabel="Optional"
                    >
                      <Input
                        id="company"
                        placeholder="e.g. Commercial Bank / Office Tower"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </FormField>
                  </div>

                  <FormField
                    id="service"
                    label="Primary Engineering Domain"
                    optionalLabel="Optional"
                  >
                    <Select
                      id="service"
                      placeholder="Select primary domain of interest..."
                      options={serviceOptions}
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    />
                  </FormField>

                  <FormField
                    id="message"
                    label="Project Scope & Requirements"
                    required={true}
                    error={formErrors.message}
                    helperText="Include facility type, estimated scale, or requested timeline"
                  >
                    <Textarea
                      id="message"
                      placeholder="Describe your site requirements (e.g. Need 4K IP CCTV surveillance and biometric access for a 5-story office in Bole)..."
                      rows={4}
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
                      className="w-full sm:w-auto"
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
  );
};
