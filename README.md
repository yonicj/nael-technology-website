# Nael Technology Solutions — Web Platform

Official website and web presence for **Nael Technology Solutions**, built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons & Utilities:** [clsx](https://github.com/lukeed/clsx), [tailwind-merge](https://github.com/dcastil/tailwind-merge)

## Project Structure

```text
├── docs/                   # Project documentation and audit records
│   └── existing-site-audit.md
├── public/                 # Static assets (favicons, images, logos)
├── src/
│   ├── app/                # Next.js App Router (pages, layouts, styles)
│   │   ├── globals.css     # Global styles & Tailwind layers
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Homepage
│   ├── components/         # Modular React components
│   │   ├── common/         # Shared utility components
│   │   ├── layout/         # Header, navigation, footer
│   │   └── ui/             # Design system & primitive UI components
│   ├── lib/                # Shared utilities and helpers
│   │   └── utils.ts        # Class merging and formatting utils
│   └── types/              # TypeScript type definitions
├── eslint.config.mjs       # ESLint configuration
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies and npm scripts
├── postcss.config.mjs      # PostCSS & Tailwind plugins
└── tsconfig.json           # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js (v18.17+ or later recommended)
- npm (v9+ or later)

### Installation

```bash
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm run start
```

### Code Quality

```bash
# Type check
npx tsc --noEmit

# Lint
npm run lint
```
