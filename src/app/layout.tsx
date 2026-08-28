import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nael Technology Solutions | CCTV, Fire Alarm & IT Infrastructure in Ethiopia",
  description:
    "Nael Technology Solutions is Ethiopia's premier systems integrator specializing in CCTV surveillance, certified fire alarm systems, biometric access control, structured cabling, data centers, and unified communications.",
  keywords: [
    "CCTV Installation Addis Ababa",
    "Fire Alarm Systems Ethiopia",
    "Biometric Access Control",
    "Structured Cabling Ethiopia",
    "Data Center Solutions Addis Ababa",
    "Video Conferencing Ethiopia",
    "IP PABX Telephony",
    "Nurse Call System Ethiopia",
    "Nael Technology Solutions",
  ],
  authors: [{ name: "Nael Technology Solutions" }],
  creator: "Nael Technology Solutions",
  openGraph: {
    title: "Nael Technology Solutions | Enterprise Systems Integration in Ethiopia",
    description:
      "Professional CCTV installation, certified fire alarm systems, access control, structured cabling, and enterprise conferencing in Addis Ababa, Ethiopia.",
    url: "https://naeltechnologies.com/",
    siteName: "Nael Technology Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nael Technology Solutions | Systems Integrator Ethiopia",
    description:
      "Enterprise CCTV, fire alarm, biometric access control, and IT infrastructure solutions across Ethiopia.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const antiFoucScript = `
  (function() {
    try {
      var saved = localStorage.getItem('nael-theme');
      var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var effective = saved === 'light' ? 'light' : (saved === 'dark' ? 'dark' : (saved === 'system' ? (systemDark ? 'dark' : 'light') : 'dark'));
      var root = document.documentElement;
      if (effective === 'dark') {
        root.classList.add('dark');
        root.classList.remove('light');
      } else {
        root.classList.remove('dark');
        root.classList.add('light');
      }
      root.setAttribute('data-theme', effective);
      root.style.colorScheme = effective;
    } catch(e) {}
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} scroll-smooth antialiased dark`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: antiFoucScript }} />
      </head>
      <body className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans flex flex-col transition-colors duration-200">
        <ThemeProvider defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
