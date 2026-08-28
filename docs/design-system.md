# Nael Technology Solutions — Visual Design System (v1.0)

This document establishes the official visual design language, UI tokens, component specifications, and interaction guidelines for **Nael Technology Solutions** (`naeltechnologies.com`).

---

## 1. Brand Direction & Identity

- **Positioning:** Premier Technology Systems Integrator in Ethiopia (Addis Ababa).
- **Core Verticals:**
  - CCTV Video Surveillance & AI Vision
  - Certified Fire Alarm Detection & Automated Suppression
  - Biometric & RFID Access Control
  - Structured Copper/Fiber Optic Cabling
  - High-Availability Data Centers & Server Infrastructure
  - Unified Enterprise Communications (IP PABX, Video Conferencing, Call Center Systems)
- **Visual Personality:**
  - **Enterprise Grade:** Clean, robust, engineered precision.
  - **High Trust & Security:** Calm obsidian dark mode accented by vibrant cobalt blue, cyan, and emerald green.
  - **Modern & Premium:** Glassmorphic surfaces with subtle borders, glowing ambient backlights, and responsive micro-interactions.

---

## 2. Design System Architecture (16 Pillars)

### 2.1 Color System & Dual Theming

The color system uses CSS custom properties configured with Tailwind CSS v4 `@theme inline` tokens for seamless dark mode, light mode, and system OS preference support.

#### Neutral & Surface Tokens (Dual Matrix)
| Token Name | CSS Variable | Light Mode Value | Dark Mode (Obsidian) Value | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Base Background** | `--background` | `#f8fafc` (Slate 50) | `#060911` (Obsidian) | Root page background |
| **Subtle Background** | `--background-subtle` | `#ffffff` (Pure White) | `#090d16` (Deep Slate) | Alternate section backdrop |
| **Card Surface** | `--card` | `#ffffff` | `#0f172a` | Default card & container surface |
| **Card Elevated** | `--card-elevated` | `#f1f5f9` (Slate 100) | `#1e293b` | Floating dropdowns, hover cards |
| **Border Subtle** | `--border` | `rgba(15, 23, 42, 0.08)` | `rgba(255, 255, 255, 0.08)` | Default card and divider borders |
| **Border Accent** | `--border-accent` | `rgba(37, 99, 235, 0.25)` | `rgba(59, 130, 246, 0.35)` | Active states, hover card borders |
| **Foreground (Primary Text)** | `--foreground` | `#0f172a` (Slate 900) | `#f8fafc` (Slate 50) | High-contrast headings and body |
| **Foreground Muted** | `--foreground-muted` | `#475569` (Slate 600) | `#94a3b8` (Slate 400) | Secondary body, metadata, descriptions |
| **Foreground Subtle** | `--foreground-subtle`| `#64748b` (Slate 500) | `#64748b` (Slate 500) | Captions, timestamps, disabled items |

#### Brand Accent Tokens
| Token Name | CSS Variable | Hex / RGBA | Usage |
| :--- | :--- | :--- | :--- |
| **Primary (Cobalt Blue)** | `--primary` | `#2563eb` | Primary buttons, active tabs, main accents |
| **Primary Hover** | `--primary-hover` | `#1d4ed8` | Button hover state, deep emphasis |
| **Primary Glow** | `--primary-glow` | `rgba(37, 99, 235, 0.20)` | Ambient background lighting, box shadows |
| **Accent Cyan** | `--accent` | `#0891b2` (Light) / `#06b6d4` (Dark) | Highlight pills, secondary glow, metrics |

#### Semantic Status Tokens
| Token Name | Hex | Usage |
| :--- | :--- | :--- |
| **Success / Security Green** | `#10b981` | Access granted, system operational, certified compliance |
| **Warning / Hazard Amber** | `#f59e0b` | Maintenance notice, pending review, alert status |
| **Danger / Fire Red** | `#ef4444` | Fire alarms, system offline, destructive actions, form errors |
| **Info / Cyber Cyan** | `#0891b2` / `#06b6d4` | Technical advisories, feature highlights, network status |

---

### 2.2 Typography

- **Primary Font Family:** `Inter`, system-ui, -apple-system, sans-serif (imported via `next/font/google` as `--font-sans`).
- **Code / Specs Font Family:** `var(--font-mono)`, monospace for serials, IP addresses, cable standards, and specifications.
- **Font Weights:**
  - `Light (300)`: Hero subheadings and large leads.
  - `Regular (400)`: Body copy and long-form descriptions.
  - `Medium (500)`: Navigation links, table cells, form labels.
  - `Semibold (600)`: Section subtitles, card titles, button labels.
  - `Bold (700)`: Major section headlines and modal headings.
  - `Extrabold (800)`: Hero display titles and key metric figures.

---

### 2.3 Heading Hierarchy

```text
Display / Hero Title   : text-4xl sm:text-6xl lg:text-7xl (font-extrabold, tracking-tight, leading-[1.1])
H1 / Primary Section   : text-3xl sm:text-5xl (font-extrabold, tracking-tight, text-white)
H2 / Subsection Title  : text-2xl sm:text-3xl (font-bold, tracking-tight, text-white)
H3 / Card Header       : text-lg sm:text-xl (font-bold, tracking-tight, text-slate-100)
H4 / Sub-Card & Specs  : text-sm sm:text-base (font-semibold, text-slate-200)
H5 / Eyebrow / Badge   : text-xs uppercase (font-semibold, tracking-widest, text-blue-400)
```

---

### 2.4 Body Typography

- **Body Large (Lead):** `text-lg sm:text-xl text-slate-300 font-light leading-relaxed`
- **Body Base (Default):** `text-base text-slate-300 font-normal leading-relaxed`
- **Body Small (Secondary):** `text-sm text-slate-400 font-normal leading-normal`
- **Caption / Legal:** `text-xs text-slate-500 font-normal leading-tight`

---

### 2.5 Spacing Scale

Built upon a consistent 4px baseline system:
- **Component Gutters:** `gap-2` (8px), `gap-3` (12px), `gap-4` (16px), `gap-6` (24px)
- **Container Padding:** `px-4 sm:px-6 lg:px-8` (16px / 24px / 32px)
- **Card Padding:** `p-5` (20px) to `p-8` (32px)
- **Section Vertical Padding:** `py-20 sm:py-28` (80px to 112px)

---

### 2.6 Container Widths

- **Default Layout Container (`Container` `xl`):** `max-w-7xl` (1280px) — Hero, Services grid, Product catalog, Footer.
- **Medium Container (`Container` `lg`):** `max-w-5xl` (1024px) — Projects, Case studies, Quote builder.
- **Narrow Container (`Container` `md`):** `max-w-3xl` (768px) — Section headers, Contact form, Single-column articles.
- **Compact Container (`Container` `sm`):** `max-w-xl` (576px) — Modals, Auth dialogs, Newsletter forms.

---

### 2.7 Border Radius

- **Controls & Chips:** `rounded-lg` (8px) / `rounded-md` (6px) — Form inputs, dropdown options, tags.
- **Buttons & Small Panels:** `rounded-xl` (12px) — Buttons, tooltips, icon badges.
- **Cards & Dialogs:** `rounded-2xl` (16px) — Service cards, product cards, detail modals.
- **Special Enclosures:** `rounded-3xl` (24px) — Featured hero containers, banner callouts.
- **Pills & Badges:** `rounded-full` (9999px) — Eyebrow badges, slide indicators, avatar icons.

---

### 2.8 Buttons

Six distinct semantic button variants:
1. **Primary:** Cobalt blue gradient with subtle elevation shadow (`bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25`).
2. **Secondary:** Dark slate glass with border (`bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-100`).
3. **Outline:** Transparent with subtle border (`border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white`).
4. **Ghost:** Transparent without border (`text-slate-300 hover:text-white hover:bg-slate-800/60`).
5. **Subtle:** Soft blue tint (`bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/20`).
6. **Destructive:** Red accent (`bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/25`).

All buttons support:
- Three sizes: `sm` (h-8), `md` (h-11), `lg` (h-14).
- `isLoading` with animated SVG spinner.
- `leftIcon` and `rightIcon` slots with micro-transition (`group-hover:translate-x-0.5`).
- Accessible keyboard focus ring (`focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950`).

---

### 2.9 Cards

- **Glass Card:** `bg-slate-900/80 backdrop-blur-md border border-slate-800/80 rounded-2xl`
- **Interactive Hover Card:** Smooth 300ms hover lift (`hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10`)
- **Featured Glow Card:** Gradient background (`from-blue-950/40 to-slate-900 border-blue-500/30`)
- **Stat / Metric Card:** Dark glass with bold accent numeral and secondary descriptor.

---

### 2.10 Navigation

- **Fixed Header:** `bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80`
- **Brand Emblem:** Stylized vector shield with circuit path + high-contrast wordmark.
- **Segmented Nav Pill:** Pill-shaped grouped navigation bar with active section highlight.
- **Direct Phone Contact:** Quick dialing action with Lucide `Phone` icon.
- **Mobile Menu Drawer:** Slide-in animation from top with backdrop blur.

---

### 2.11 Footer

- **5-Column Architecture:**
  1. Company Profile & Safety Certification Note
  2. Main Navigation Links
  3. Core Engineering Services
  4. Specialized Solutions
  5. Direct Contact Channels (Addis Ababa office, multiple phone lines, corporate email, working hours)
- **Legal & Back-to-Top:** Copyright statement, developer attribution, and smooth scroll-to-top button.

---

### 2.12 Forms

- **FormField Wrapper:** Standardized label, optional/required `*` indicator, helper text, and accessible error message.
- **Input & Textarea:** `bg-slate-900/80 border-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white placeholder:text-slate-500 rounded-xl`
- **Select Dropdown:** Native select wrapped in dark container with custom SVG chevron.
- **Checkbox & Radio:** Custom styled controls with high-contrast check indicators.

---

### 2.13 Icons

- **Library:** `lucide-react`
- **Standard Stroke Width:** `1.75px` to `2.0px`
- **Icon Container Styles:**
  - `Primary:` `bg-blue-600/15 border border-blue-500/25 text-blue-400 p-2.5 rounded-xl`
  - `Emerald:` `bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 p-2.5 rounded-xl`
  - `Amber:` `bg-amber-500/15 border border-amber-500/25 text-amber-400 p-2.5 rounded-xl`
  - `Rose:` `bg-rose-500/15 border border-rose-500/25 text-rose-400 p-2.5 rounded-xl`

---

### 2.14 Image Treatment

- **Dark Gradient Scrim:** `bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent` to guarantee text readability over hardware photography.
- **Backlight Glow:** Radial blue/cyan glow behind featured equipment images.
- **Aspect Ratios:** `aspect-video` (16:9), `aspect-[4/3]`, `aspect-square` (1:1).
- **Fallback Container:** Circuit grid patterned background with tech emblem placeholder when image is unavailable.

---

### 2.15 Responsive Behavior

- **Breakpoints:**
  - Mobile: `< 640px` (Single column, full-width buttons, collapsible menus, 16px horizontal margins)
  - Tablet: `640px – 1023px` (2-column grids, horizontal swipe tabs, 24px margins)
  - Desktop: `1024px – 1279px` (3–4 column grids, full navigation bar, 32px margins)
  - Wide Desktop: `1280px+` (Max 1280px centered container, spacious layout)

---

### 2.16 Animation Principles

- **Philosophy:** Subdued, purposeful, non-distracting, hardware-accelerated.
- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo for crisp, responsive motion).
- **Durations:**
  - Micro-interactions (hover, click, focus): `150ms – 200ms`
  - Transitions (modals, drawers, accordion): `250ms – 300ms`
  - Ambient glows (carousel rotation, pulse): `4000ms – 6500ms`
- **Accessibility:** Fully supports `@media (prefers-reduced-motion: reduce)`.
