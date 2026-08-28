"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Button,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Input,
  Textarea,
  Select,
  FormField,
  Tabs,
  SectionHeader,
  Container,
  BrandLogo,
  ImageContainer,
} from "@/components/ui";
import { IconResolver } from "@/components/common/IconResolver";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { useTheme } from "@/components/theme/ThemeProvider";
import {
  Shield,
  ShieldCheck,
  Flame,
  Camera,
  Mail,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Check,
  Send,
  Layers,
  Palette,
  Type,
  Layout,
  Sliders,
  Box,
  Cpu,
  Sun,
  Moon,
} from "lucide-react";

export default function DesignSystemPage() {
  const [activeTab, setActiveTab] = useState("colors");
  const [buttonLoading, setButtonLoading] = useState(false);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formService, setFormService] = useState("");
  const [formError, setFormError] = useState(false);
  const { theme, resolvedTheme } = useTheme();

  const designSections = [
    { id: "colors", label: "Colors & Theming", icon: <Palette className="w-4 h-4" /> },
    { id: "typography", label: "Typography & Headings", icon: <Type className="w-4 h-4" /> },
    { id: "buttons-badges", label: "Buttons & Badges", icon: <Sliders className="w-4 h-4" /> },
    { id: "cards", label: "Cards & Surfaces", icon: <Layers className="w-4 h-4" /> },
    { id: "forms", label: "Form Controls", icon: <Box className="w-4 h-4" /> },
    { id: "layout-spacing", label: "Layout & Spacing", icon: <Layout className="w-4 h-4" /> },
    { id: "media-icons", label: "Icons & Media", icon: <Cpu className="w-4 h-4" /> },
  ];

  const lightPalettes = [
    {
      group: "Light Mode — Surface & Neutral Tokens",
      colors: [
        { name: "Slate 50 (Background)", hex: "#f8fafc", css: "--background", text: "text-slate-900" },
        { name: "Pure White (Subtle)", hex: "#ffffff", css: "--background-subtle", text: "text-slate-900" },
        { name: "Card Surface (White)", hex: "#ffffff", css: "--card", text: "text-slate-900" },
        { name: "Slate 100 (Elevated)", hex: "#f1f5f9", css: "--card-elevated", text: "text-slate-900" },
        { name: "Slate 900 (Foreground)", hex: "#0f172a", css: "--foreground", text: "text-white" },
        { name: "Slate 600 (Muted)", hex: "#475569", css: "--foreground-muted", text: "text-white" },
      ],
    },
    {
      group: "Brand & Accent Colors",
      colors: [
        { name: "Cobalt Blue (Primary)", hex: "#2563eb", css: "--primary", text: "text-white" },
        { name: "Deep Royal Blue", hex: "#1d4ed8", css: "--primary-hover", text: "text-white" },
        { name: "Cyan Accent", hex: "#0891b2", css: "--accent", text: "text-white" },
      ],
    },
  ];

  const darkPalettes = [
    {
      group: "Dark Mode — Surface & Neutral Tokens",
      colors: [
        { name: "Obsidian Base", hex: "#060911", css: "--background", text: "text-white" },
        { name: "Deep Slate", hex: "#090d16", css: "--background-subtle", text: "text-white" },
        { name: "Card Surface", hex: "#0f172a", css: "--card", text: "text-white" },
        { name: "Card Elevated", hex: "#1e293b", css: "--card-elevated", text: "text-white" },
        { name: "Foreground White", hex: "#f8fafc", css: "--foreground", text: "text-slate-900" },
        { name: "Slate 400 (Muted)", hex: "#94a3b8", css: "--foreground-muted", text: "text-slate-900" },
      ],
    },
    {
      group: "Semantic & Safety Status",
      colors: [
        { name: "Security Emerald", hex: "#10b981", css: "--status-success", text: "text-slate-900" },
        { name: "Hazard Amber", hex: "#f59e0b", css: "--status-warning", text: "text-slate-900" },
        { name: "Fire Alarm Crimson", hex: "#ef4444", css: "--status-danger", text: "text-white" },
        { name: "Cyber Info Cyan", hex: "#06b6d4", css: "--status-info", text: "text-slate-900" },
      ],
    },
  ];

  const serviceOptions = [
    { value: "cctv", label: "CCTV Surveillance Systems" },
    { value: "fire-alarm", label: "Certified Fire Alarm & Suppression" },
    { value: "access-control", label: "Biometric Access Control" },
    { value: "data-center", label: "Data Center Infrastructure" },
    { value: "structured-cabling", label: "Fiber Optic & Structured Cabling" },
  ];

  const sampleIcons = [
    "Camera",
    "Flame",
    "Lock",
    "Cable",
    "Server",
    "Wifi",
    "Video",
    "PhoneCall",
    "ShieldCheck",
    "Fingerprint",
    "Cpu",
    "Zap",
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-600 selection:text-white transition-colors duration-200">
      {/* Top Bar Navigation */}
      <div className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <Container size="xl" className="py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="focus:outline-none">
              <BrandLogo size="sm" />
            </Link>
            <div className="h-4 w-px bg-slate-300 dark:bg-slate-800 hidden sm:block" />
            <Badge variant="primary" size="sm">
              Design System v1.1
            </Badge>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle size="sm" />

            <Button href="/" variant="outline" size="sm">
              Back to Live Site
            </Button>
            <Button
              href="#forms"
              variant="primary"
              size="sm"
              onClick={() => setActiveTab("forms")}
            >
              Component Lab
            </Button>
          </div>
        </Container>
      </div>

      {/* Hero Header */}
      <div className="border-b border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-950 relative overflow-hidden py-16 sm:py-20 transition-colors">
        <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[250px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />

        <Container size="xl" className="relative z-10">
          <div className="max-w-3xl space-y-4">
            <Badge variant="cyan" withPulse={true}>
              Enterprise Specification
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight transition-colors">
              Nael Design System
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed transition-colors">
              The foundational UI framework, dual dark/light design tokens, responsive layouts, and reusable components
              engineered for mission-critical technology, physical security, and infrastructure systems in Ethiopia.
            </p>
          </div>
        </Container>
      </div>

      {/* Main Tabs Navigation */}
      <div className="border-b border-slate-200 dark:border-slate-900 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md sticky top-[65px] z-40 py-4 transition-colors">
        <Container size="xl">
          <Tabs
            tabs={designSections}
            activeTab={activeTab}
            onChange={(tabId) => setActiveTab(tabId)}
            className="justify-start sm:justify-center overflow-x-auto"
          />
        </Container>
      </div>

      {/* Showcase Content */}
      <main className="py-16">
        <Container size="xl" className="space-y-20">
          {/* SECTION 1: Colors & Surfaces */}
          {(activeTab === "colors" || activeTab === "all") && (
            <section className="space-y-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <SectionHeader
                  badge="01 / Color Architecture & Theming"
                  title="Dual Semantic Color System"
                  titleAccent="& Tokens"
                  description="Engineered for high-contrast visibility, enterprise calm, and ISO/NFPA safety status clarity in both Light and Dark modes."
                  align="left"
                  className="mb-0 sm:mb-0"
                />

                <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3 self-start sm:self-auto">
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Active Mode: <span className="text-blue-600 dark:text-blue-400 font-bold uppercase">{resolvedTheme}</span>
                  </div>
                  <ThemeToggle variant="segmented" />
                </div>
              </div>

              {/* Light Mode Palettes */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Sun className="w-5 h-5 text-amber-500" />
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Light Mode Tokens (`:root`)</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {lightPalettes[0].colors.map((color) => (
                      <div
                        key={color.name}
                        className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 space-y-3 shadow-sm"
                      >
                        <div
                          className="h-20 w-full rounded-xl flex items-end p-2.5 font-mono text-xs font-bold shadow-inner border border-slate-200/80"
                          style={{ backgroundColor: color.hex }}
                        >
                          <span className={color.text}>{color.hex}</span>
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-900 dark:text-white truncate">{color.name}</div>
                          <div className="text-[11px] font-mono text-slate-500">{color.css}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dark Mode Palettes */}
                <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <Moon className="w-5 h-5 text-blue-400" />
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Dark Mode Tokens (`.dark`)</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {darkPalettes[0].colors.map((color) => (
                      <div
                        key={color.name}
                        className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 space-y-3 shadow-sm"
                      >
                        <div
                          className="h-20 w-full rounded-xl flex items-end p-2.5 font-mono text-xs font-bold shadow-inner border border-slate-800"
                          style={{ backgroundColor: color.hex }}
                        >
                          <span className={color.text}>{color.hex}</span>
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-900 dark:text-white truncate">{color.name}</div>
                          <div className="text-[11px] font-mono text-slate-500">{color.css}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* SECTION 2: Typography & Headings */}
          {(activeTab === "typography" || activeTab === "all") && (
            <section className="space-y-10">
              <SectionHeader
                badge="02 / Typography Hierarchy"
                title="Typography Scale"
                titleAccent="& Weight Matrix"
                description="Using Inter for crisp legibility across high-density technical specs and bold marketing headlines."
                align="left"
              />

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Heading Hierarchy */}
                <Card variant="glass">
                  <CardHeader>
                    <Badge variant="primary" size="sm">
                      Headings Scale
                    </Badge>
                    <CardTitle>Display & Heading Hierarchy</CardTitle>
                    <CardDescription>
                      Standardized scale with tracking-tight and proportional leading.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 pt-4">
                    <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
                      <span className="text-xs font-mono text-blue-600 dark:text-blue-400 block mb-1">
                        Display / Hero (text-5xl / 6xl)
                      </span>
                      <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        Enterprise Infrastructure
                      </div>
                    </div>
                    <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
                      <span className="text-xs font-mono text-blue-600 dark:text-blue-400 block mb-1">
                        H1 / Section Title (text-3xl / 4xl)
                      </span>
                      <div className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        Certified Security Systems
                      </div>
                    </div>
                    <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
                      <span className="text-xs font-mono text-blue-600 dark:text-blue-400 block mb-1">
                        H2 / Subsection Title (text-2xl)
                      </span>
                      <div className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                        Optical Fiber & Data Centers
                      </div>
                    </div>
                    <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
                      <span className="text-xs font-mono text-blue-600 dark:text-blue-400 block mb-1">
                        H3 / Card Header (text-xl)
                      </span>
                      <div className="text-xl font-bold text-slate-900 dark:text-slate-100">
                        Biometric Access Control Units
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-mono text-blue-600 dark:text-blue-400 block mb-1">
                        Eyebrow / Badge (text-xs uppercase)
                      </span>
                      <div className="text-xs uppercase font-semibold text-blue-600 dark:text-blue-400 tracking-widest">
                        MISSION-CRITICAL RELIABILITY
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Body & Technical Copy */}
                <Card variant="glass">
                  <CardHeader>
                    <Badge variant="cyan" size="sm">
                      Body & Technical Copy
                    </Badge>
                    <CardTitle>Body Typography & Specs</CardTitle>
                    <CardDescription>
                      Engineered for high readability across complex technical documentation.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 pt-4">
                    <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
                      <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 block mb-1">
                        Body Large (Lead Paragraph — 18px)
                      </span>
                      <p className="text-lg text-slate-700 dark:text-slate-300 font-light leading-relaxed">
                        Nael Technology Solutions delivers turnkey systems integration for commercial
                        enterprises, banking institutions, and industrial facilities in Ethiopia.
                      </p>
                    </div>
                    <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
                      <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 block mb-1">
                        Body Base (Standard Copy — 16px)
                      </span>
                      <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                        Our certified engineers install multi-zone fire detection panels with NFPA-compliant
                        smoke detectors, thermal heat sensors, and automated clean-agent gas suppression.
                      </p>
                    </div>
                    <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
                      <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 block mb-1">
                        Body Small (Metadata & Specs — 14px)
                      </span>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-normal">
                        Cat6A / Cat7 10Gbps copper cabling certified up to 500MHz with Fluke DSX-8000 test reports.
                      </p>
                    </div>
                    <div>
                      <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 block mb-1">
                        Monospace / Code / Spec (13px)
                      </span>
                      <div className="font-mono text-xs text-blue-600 dark:text-blue-400 bg-slate-100 dark:bg-slate-950 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                        IP: 192.168.10.1 // VLAN 20: SURVEILLANCE // BANDWIDTH: 10 Gbps
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          )}

          {/* SECTION 3: Buttons & Badges */}
          {(activeTab === "buttons-badges" || activeTab === "all") && (
            <section className="space-y-10">
              <SectionHeader
                badge="03 / Interactive Controls"
                title="Buttons & Badges"
                titleAccent="System"
                description="Interactive touchpoints with full keyboard focus rings, hover micro-interactions, and loading states."
                align="left"
              />

              <div className="space-y-8">
                {/* Button Matrix */}
                <Card variant="glass">
                  <CardHeader>
                    <CardTitle>Button Variants & Sizes</CardTitle>
                    <CardDescription>
                      All 6 standard semantic button variants across small, medium, and large heights.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 pt-2">
                    {/* Primary, Secondary, Outline */}
                    <div className="space-y-3">
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block">Core Actions (md size):</span>
                      <div className="flex flex-wrap items-center gap-3">
                        <Button variant="primary" rightIcon={<ArrowRight className="w-4 h-4" />}>
                          Primary Action
                        </Button>
                        <Button variant="secondary" leftIcon={<Shield className="w-4 h-4" />}>
                          Secondary Surface
                        </Button>
                        <Button variant="outline">Outline Border</Button>
                        <Button variant="ghost">Ghost Button</Button>
                        <Button variant="subtle" leftIcon={<Sparkles className="w-4 h-4" />}>
                          Subtle Accent
                        </Button>
                        <Button variant="destructive">Destructive</Button>
                      </div>
                    </div>

                    {/* Size scale */}
                    <div className="space-y-3 pt-2 border-t border-slate-200 dark:border-slate-800">
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block">Size Hierarchy (sm, md, lg):</span>
                      <div className="flex flex-wrap items-center gap-3">
                        <Button variant="primary" size="sm">
                          Small (h-9)
                        </Button>
                        <Button variant="primary" size="md">
                          Medium (h-11)
                        </Button>
                        <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                          Large CTA (h-13)
                        </Button>
                      </div>
                    </div>

                    {/* State: Loading & Disabled */}
                    <div className="space-y-3 pt-2 border-t border-slate-200 dark:border-slate-800">
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block">Interactive States:</span>
                      <div className="flex flex-wrap items-center gap-3">
                        <Button
                          variant="primary"
                          isLoading={buttonLoading}
                          onClick={() => {
                            setButtonLoading(true);
                            setTimeout(() => setButtonLoading(false), 2000);
                          }}
                        >
                          {buttonLoading ? "Processing..." : "Test Loading State"}
                        </Button>
                        <Button variant="secondary" disabled>
                          Disabled State
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Badge Variations */}
                <Card variant="glass">
                  <CardHeader>
                    <CardTitle>Badge & Status Indicator System</CardTitle>
                    <CardDescription>
                      Pill badges for security tags, category chips, and live monitoring indicators.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-2">
                    <div className="space-y-2">
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block">With Animated Pulse Dot:</span>
                      <div className="flex flex-wrap items-center gap-3">
                        <Badge variant="primary" withPulse={true}>
                          System Active
                        </Badge>
                        <Badge variant="cyan" withPulse={true}>
                          High-Speed Fiber
                        </Badge>
                        <Badge variant="emerald" withPulse={true}>
                          Access Granted
                        </Badge>
                        <Badge variant="amber" withPulse={true}>
                          Scheduled Maintenance
                        </Badge>
                        <Badge variant="rose" withPulse={true}>
                          Fire Alert Test
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block">Compact Tags (sm size):</span>
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="slate" size="sm">
                          CCTV 4K
                        </Badge>
                        <Badge variant="slate" size="sm">
                          NFPA 72
                        </Badge>
                        <Badge variant="slate" size="sm">
                          ISO 27001
                        </Badge>
                        <Badge variant="slate" size="sm">
                          TIA-942 Tier III
                        </Badge>
                        <Badge variant="slate" size="sm">
                          VoIP SIP
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          )}

          {/* SECTION 4: Cards & Surfaces */}
          {(activeTab === "cards" || activeTab === "all") && (
            <section className="space-y-10">
              <SectionHeader
                badge="04 / Component Surfaces"
                title="Cards & Elevation"
                titleAccent="Styles"
                description="Modular card containers with adaptive glassmorphism, responsive hover states, and accent highlights in both themes."
                align="left"
              />

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Interactive Card */}
                <Card variant="interactive">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                        <Camera className="w-5 h-5" />
                      </div>
                      <Badge variant="primary" size="sm">
                        Interactive
                      </Badge>
                    </div>
                    <CardTitle>Interactive Hover Card</CardTitle>
                    <CardDescription>
                      Elevates smoothly on hover with a glowing cyan/blue border and subtle shadow lift.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1.5 pt-2">
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                        <span>Smooth 300ms transition</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                        <span>Hover translateY(-4px)</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <span className="text-xs text-slate-500 dark:text-slate-400">CardFooter area</span>
                    <Button variant="ghost" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                      Explore
                    </Button>
                  </CardFooter>
                </Card>

                {/* Featured Card */}
                <Card variant="featured">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-700 dark:text-blue-300">
                        <Flame className="w-5 h-5" />
                      </div>
                      <Badge variant="amber" size="sm">
                        Featured
                      </Badge>
                    </div>
                    <CardTitle>Featured Glow Card</CardTitle>
                    <CardDescription>
                      Deep sapphire gradient background with heightened prominence for key offerings.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 pt-2">
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                        <span>Gradient highlights</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                        <span>Border accent highlight</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <span className="text-xs text-amber-700 dark:text-amber-400 font-semibold">Priority Service</span>
                    <Button variant="primary" size="sm">
                      Get Proposal
                    </Button>
                  </CardFooter>
                </Card>

                {/* Stat Metric Card */}
                <Card variant="glass">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <Badge variant="emerald" size="sm">
                        Metric
                      </Badge>
                    </div>
                    <div className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight pt-2">
                      99.98%
                    </div>
                    <CardTitle className="text-base text-slate-800 dark:text-slate-200">
                      System Reliability Uptime
                    </CardTitle>
                    <CardDescription>
                      Continuous operational verification across Ethiopian banking & datacenter clients.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden mt-2">
                      <div className="bg-emerald-500 h-full w-[99.98%]" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <span className="text-[11px] text-slate-500 font-mono">SLA GUARANTEE</span>
                    <Badge variant="emerald" size="sm">
                      Certified
                    </Badge>
                  </CardFooter>
                </Card>
              </div>
            </section>
          )}

          {/* SECTION 5: Form Controls */}
          {(activeTab === "forms" || activeTab === "all") && (
            <section className="space-y-10">
              <SectionHeader
                badge="05 / Data Inputs"
                title="Form Controls"
                titleAccent="& Validation"
                description="Engineered for high usability with explicit labels, custom selects, and clear validation feedback."
                align="left"
              />

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Interactive Form Component Demo */}
                <Card variant="glass">
                  <CardHeader>
                    <CardTitle>Interactive Form Demo</CardTitle>
                    <CardDescription>
                      Test real-time validation states, helper text, and styled inputs in the active theme.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <FormField
                      id="demo-name"
                      label="Full Name"
                      required={true}
                      error={formError && !formName ? "Full name is required." : undefined}
                      helperText="Enter your official contact name"
                    >
                      <Input
                        id="demo-name"
                        placeholder="Abebe Kebede"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        hasError={formError && !formName}
                      />
                    </FormField>

                    <FormField
                      id="demo-email"
                      label="Corporate Email"
                      required={true}
                      error={formError && !formEmail ? "Please enter a valid work email." : undefined}
                      helperText="We will send technical proposal to this email"
                    >
                      <Input
                        id="demo-email"
                        type="email"
                        leftIcon={<Mail className="w-4 h-4" />}
                        placeholder="name@company.com.et"
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        hasError={formError && !formEmail}
                      />
                    </FormField>

                    <FormField
                      id="demo-service"
                      label="Primary Engineering Service"
                      required={true}
                      error={formError && !formService ? "Please choose a primary service." : undefined}
                    >
                      <Select
                        id="demo-service"
                        placeholder="Select service..."
                        options={serviceOptions}
                        value={formService}
                        onChange={(e) => setFormService(e.target.value)}
                        hasError={formError && !formService}
                      />
                    </FormField>

                    <FormField
                      id="demo-notes"
                      label="Project Requirements"
                      optionalLabel="Optional"
                      helperText="Brief details about facility location or scale"
                    >
                      <Textarea
                        id="demo-notes"
                        placeholder="Describe your site requirements (e.g., 32-camera IP network in Bole office)..."
                        rows={3}
                      />
                    </FormField>
                  </CardContent>
                  <CardFooter className="flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setFormError(true);
                      }}
                    >
                      Trigger Validation Errors
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      rightIcon={<Send className="w-4 h-4" />}
                      onClick={() => {
                        if (!formName || !formEmail || !formService) {
                          setFormError(true);
                        } else {
                          setFormError(false);
                          alert("Form is valid! Ready for submission.");
                        }
                      }}
                    >
                      Validate & Submit
                    </Button>
                  </CardFooter>
                </Card>

                {/* Form Guidelines */}
                <Card variant="glass">
                  <CardHeader>
                    <CardTitle>Form Field Specifications</CardTitle>
                    <CardDescription>
                      Adhering to accessibility standards and enterprise data hygiene.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-2">
                      <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <span>Explicit Labels & Indicators</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Labels are always positioned above input fields with an asterisk (*) for required fields to ensure screen-reader clarity.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-2">
                      <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span>Consistent Focus Glow</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Inputs adopt `focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500` with high-contrast text.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-2">
                      <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                        <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                        <span>Red Alert Messaging</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Invalid fields glow with `--status-danger` (`#ef4444`) and display an inline explanation message.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          )}

          {/* SECTION 6: Layout & Spacing */}
          {(activeTab === "layout-spacing" || activeTab === "all") && (
            <section className="space-y-10">
              <SectionHeader
                badge="06 / Spacing & Layout"
                title="Container Constraints"
                titleAccent="& Radius Scale"
                description="Responsive container widths and geometric radii scale for structural consistency."
                align="left"
              />

              <div className="space-y-8">
                {/* Container Widths */}
                <Card variant="glass">
                  <CardHeader>
                    <CardTitle>Container Width Hierarchy</CardTitle>
                    <CardDescription>
                      Standardized max-width containers used throughout the application.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-2">
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-600 dark:text-slate-400">
                        <span>Container xl (max-w-7xl / 1280px)</span>
                        <span className="text-blue-600 dark:text-blue-400">Default for major sections & hero</span>
                      </div>
                      <div className="h-6 w-full rounded-md bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-[11px] font-mono text-blue-700 dark:text-blue-300">
                        1280px Maximum
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-600 dark:text-slate-400">
                        <span>Container lg (max-w-5xl / 1024px)</span>
                        <span className="text-blue-600 dark:text-blue-400">Case studies & project details</span>
                      </div>
                      <div className="h-6 w-4/5 rounded-md bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-[11px] font-mono text-cyan-700 dark:text-cyan-300">
                        1024px Maximum
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-600 dark:text-slate-400">
                        <span>Container md (max-w-3xl / 768px)</span>
                        <span className="text-blue-600 dark:text-blue-400">Section headers & contact forms</span>
                      </div>
                      <div className="h-6 w-3/5 rounded-md bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-[11px] font-mono text-emerald-700 dark:text-emerald-300">
                        768px Maximum
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Border Radius Hierarchy */}
                <Card variant="glass">
                  <CardHeader>
                    <CardTitle>Border Radius Geometry</CardTitle>
                    <CardDescription>
                      Hierarchy of corner roundness defining interaction scale.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                    <div className="p-4 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-center space-y-1">
                      <div className="text-xs font-bold text-slate-900 dark:text-white">rounded-md (6px)</div>
                      <div className="text-[11px] text-slate-600 dark:text-slate-400">Form Inputs & Chips</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-center space-y-1">
                      <div className="text-xs font-bold text-slate-900 dark:text-white">rounded-xl (12px)</div>
                      <div className="text-[11px] text-slate-600 dark:text-slate-400">Buttons & Badges</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-center space-y-1">
                      <div className="text-xs font-bold text-slate-900 dark:text-white">rounded-2xl (16px)</div>
                      <div className="text-[11px] text-slate-600 dark:text-slate-400">Cards & Modals</div>
                    </div>
                    <div className="p-4 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-center space-y-1">
                      <div className="text-xs font-bold text-slate-900 dark:text-white">rounded-full</div>
                      <div className="text-[11px] text-slate-600 dark:text-slate-400">Pills & Eyebrows</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          )}

          {/* SECTION 7: Icons & Media */}
          {(activeTab === "media-icons" || activeTab === "all") && (
            <section className="space-y-10">
              <SectionHeader
                badge="07 / Visual Assets"
                title="Iconography & Image"
                titleAccent="Treatments"
                description="Unified 2px stroke iconography with gradient containers and adaptive scrim image framing."
                align="left"
              />

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Icon Grid Resolver */}
                <Card variant="glass">
                  <CardHeader>
                    <CardTitle>Centralized Iconography (Lucide)</CardTitle>
                    <CardDescription>
                      Mapped via `IconResolver` for consistent line weights and container styling.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid grid-cols-3 sm:grid-cols-4 gap-4 pt-2">
                    {sampleIcons.map((iconName) => (
                      <div
                        key={iconName}
                        className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center gap-2 group hover:border-blue-500/40 transition-colors shadow-sm"
                      >
                        <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/25 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                          <IconResolver name={iconName} className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-medium text-slate-600 dark:text-slate-400 truncate max-w-[80px]">
                          {iconName}
                        </span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Image Treatment Container */}
                <Card variant="glass">
                  <CardHeader>
                    <CardTitle>Image Treatment & Fallbacks</CardTitle>
                    <CardDescription>
                      Automatic gradient scrims and circuit fallback placeholders.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-2">
                    <ImageContainer
                      alt="CCTV Video Surveillance & AI Detection System"
                      aspectRatio="video"
                      category="Physical Security"
                      withOverlay={true}
                      withGlow={true}
                    />
                    <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
                      <span>• Built-in scrim gradient guarantees text legibility</span>
                      <Badge variant="primary" size="sm">
                        Aspect 16:9
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          )}
        </Container>
      </main>

      {/* Footer Callout */}
      <footer className="border-t border-slate-200 dark:border-slate-900 bg-slate-100 dark:bg-slate-950 py-12 transition-colors">
        <Container size="xl" className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <BrandLogo size="sm" />
            <span>— Design System Documentation & Component Catalog</span>
          </div>
          <div>
            <Button href="/" variant="primary" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Return to Homepage
            </Button>
          </div>
        </Container>
      </footer>
    </div>
  );
}
