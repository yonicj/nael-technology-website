"use client";

import React, { useState } from "react";
import { SITE_METADATA } from "@/data/site-data";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceInterest: "CCTV & Video Surveillance",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable form submission state
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        serviceInterest: "CCTV & Video Surveillance",
        message: "",
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            Contact & Consultation
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let&apos;s Engineer Your Technology Solution
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Reach out to our technical engineering team in Addis Ababa for project estimates, site surveys, RFP tenders, and systems maintenance.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Interactive Proposal / Quote Form */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800/90 rounded-3xl p-8 sm:p-10 shadow-2xl shadow-black/40">
            <h3 className="text-2xl font-bold text-white mb-2">
              Request a Technical Proposal & Quote
            </h3>
            <p className="text-sm text-slate-400 mb-8">
              Fill in your project requirements below. Our senior engineering team will respond within 24 hours.
            </p>

            {submittedSuccess ? (
              <div className="p-8 rounded-2xl bg-blue-950/40 border border-blue-500/30 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">
                  Inquiry Received Successfully!
                </h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you for contacting Nael Technology Solutions. Our technical team is reviewing your project details and will be in touch shortly.
                </p>
                <button
                  onClick={() => setSubmittedSuccess(false)}
                  className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors mt-2"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Abebe Bikila"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-slate-300 mb-2">
                      Corporate / Personal Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-slate-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+251 91 234 5678"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-slate-300 mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Organization Name"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-slate-300 mb-2">
                    Primary Service / Solution Needed
                  </label>
                  <select
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  >
                    <option value="CCTV & Video Surveillance">CCTV & Video Surveillance Systems</option>
                    <option value="Fire Alarm & Detection">Fire Alarm & Detection Systems</option>
                    <option value="Access Control & Biometrics">Access Control & Biometrics</option>
                    <option value="Structured Cabling & Fiber">Structured Cabling & Fiber Optics</option>
                    <option value="Data Center Infrastructure">Data Center Infrastructure</option>
                    <option value="Audio & Video Conferencing">Audio & Video Conferencing</option>
                    <option value="Telephony & Call Center">IP-PABX & Call Center Systems</option>
                    <option value="Healthcare Nurse Call">Hospital Nurse Call Solution</option>
                    <option value="Complete Enterprise Turnkey">Complete Enterprise Turnkey Solution</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-slate-300 mb-2">
                    Project Scope, Location & Timeline *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details about your facility, number of channels/devices, timeline, or specific compliance requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-xl shadow-blue-600/30 hover:shadow-blue-600/40 transition-all flex items-center justify-center gap-2 text-base disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Technical Request...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Project Request</span>
                    </>
                  )}
                </button>

                {/* Quick Response Notice */}
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 flex items-start gap-3">
                  <Clock className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-200">
                      24-Hour Engineering Response Guarantee:
                    </span>{" "}
                    We review and reply to all technical inquiries within one business day. For urgent emergencies, please call directly.
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Channels & Live Map */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Phone Numbers */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Direct Telephone Channels</span>
              </h4>

              <div className="space-y-2.5">
                {SITE_METADATA.contact.phones.map((p, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between"
                  >
                    <div>
                      <span className="text-xs text-slate-400 block">{p.label}</span>
                      <a
                        href={`tel:${p.number.replace(/\s+/g, "")}`}
                        className="text-sm font-bold text-white hover:text-blue-400 transition-colors"
                      >
                        {p.number}
                      </a>
                    </div>
                    <a
                      href={`tel:${p.number.replace(/\s+/g, "")}`}
                      className="px-3 py-1 rounded-lg bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white text-xs font-semibold transition-colors"
                    >
                      Call
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Email & Office Address */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Official Emails</span>
                  <a
                    href={`mailto:${SITE_METADATA.contact.email}`}
                    className="text-sm font-bold text-white hover:text-blue-400 transition-colors block"
                  >
                    {SITE_METADATA.contact.email}
                  </a>
                  <a
                    href={`mailto:${SITE_METADATA.contact.secondaryEmail}`}
                    className="text-xs text-slate-400 hover:text-slate-300 transition-colors"
                  >
                    {SITE_METADATA.contact.secondaryEmail}
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Office Location</span>
                  <p className="text-sm font-semibold text-slate-200">
                    {SITE_METADATA.contact.address}
                  </p>
                  <span className="text-xs text-slate-400 mt-0.5 block">
                    {SITE_METADATA.contact.workingHours}
                  </span>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="rounded-2xl overflow-hidden border border-slate-800 h-64 bg-slate-900 shadow-xl">
              <iframe
                src={SITE_METADATA.contact.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nael Technology Solutions Addis Ababa Office Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
