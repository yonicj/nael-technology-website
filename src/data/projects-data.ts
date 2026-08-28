// Comprehensive Projects Data Model for Nael Technology Solutions

export interface ProjectDetailItem {
  id: string;
  title: string;
  category: string;
  clientSector: string;
  scope: string;
  image: string;
  highlights: string[];
  tags: string[];
  relatedServiceSlug: string;
  relatedSolutionSlug: string;
}

export const DETAILED_PROJECTS_LIST: ProjectDetailItem[] = [
  {
    id: "financial-banking-security",
    title: "Multi-Branch Banking Security & Centralized Surveillance",
    category: "Physical Security",
    clientSector: "Banking & Financial Services",
    scope:
      "Turnkey deployment of IP video surveillance, vault biometric entry, and silent intrusion alarms across commercial bank branch networks in Addis Ababa.",
    image: "/images/security-control-hub.jpg",
    highlights: [
      "Over 120+ 4K IP cameras with 90-day redundant video backup",
      "Dual-custody biometric locks installed on main cash vaults",
      "Centralized monitoring feed connected to headquarters security operations",
      "Zero downtime during operational banking hours",
    ],
    tags: ["Banking", "CCTV 4K", "Biometrics", "Centralized Monitoring"],
    relatedServiceSlug: "cctv",
    relatedSolutionSlug: "banking-security",
  },
  {
    id: "commercial-tower-fire-safety",
    title: "Commercial High-Rise Fire Alarm & Suppression System",
    category: "Safety Engineering",
    clientSector: "Commercial Real Estate",
    scope:
      "Full design, installation, and civil defense certification of addressable fire alarm systems across a multi-story commercial office tower in Addis Ababa.",
    image: "/images/services/fire-alarm.jpg",
    highlights: [
      "Comprehensive multi-zone addressable smoke and heat detector coverage",
      "Automatic clean-agent fire suppression protecting server and electrical rooms",
      "Emergency voice evacuation integration with high-decibel strobes",
      "100% compliance with Ethiopian safety and building codes",
    ],
    tags: ["Fire Safety", "Commercial Tower", "Clean Agent Suppression", "Life Safety"],
    relatedServiceSlug: "fire-alarm",
    relatedSolutionSlug: "fire-safety-suppression",
  },
  {
    id: "enterprise-datacenter-cabling",
    title: "High-Density Data Center Structured Cabling & Server Racks",
    category: "Network Infrastructure",
    clientSector: "Enterprise IT & Logistics",
    scope:
      "Engineering a high-availability server room with 10Gbps optical fiber backbones, Cat6A structured copper, precision cooling, and modular UPS backup.",
    image: "/images/datacenter-facility.jpg",
    highlights: [
      "10Gbps OM4 multi-mode fiber optic backbone linking server clusters",
      "Organized 42U server cabinets with clean overhead cable trays",
      "Full Fluke DSX-8000 testing with 100% pass certification",
      "N+1 redundant UPS battery bank with automated power switchover",
    ],
    tags: ["Data Center", "10Gbps Fiber", "Structured Cabling", "Fluke Certified"],
    relatedServiceSlug: "data-center",
    relatedSolutionSlug: "datacenter-turnkey",
  },
  {
    id: "hospital-nurse-call-installation",
    title: "Regional Hospital Nurse Call & Emergency Alert System",
    category: "Healthcare Technology",
    clientSector: "Healthcare & Hospitals",
    scope:
      "Installation of a multi-ward nurse call network covering 80+ patient beds, ICU suites, and emergency treatment rooms.",
    image: "/images/nurse-call-solution.jpg",
    highlights: [
      "Instant 2-way audio communication between patient beds and duty stations",
      "Waterproof emergency pull cords installed in all patient washrooms",
      "Tri-color dome indicators for quick visual ward triage",
      "Complete medical staff operational training delivered upon commissioning",
    ],
    tags: ["Healthcare", "Nurse Call", "Patient Safety", "Hospital Systems"],
    relatedServiceSlug: "nurse-call",
    relatedSolutionSlug: "nurse-call-system",
  },
  {
    id: "corporate-smart-boardroom",
    title: "Corporate HQ Smart Boardroom & Video Conferencing",
    category: "Communications & AV",
    clientSector: "Corporate & NGO Headquarters",
    scope:
      "Complete AV modernization of executive boardrooms with acoustic optimization, 4K PTZ tracking cameras, and beamforming ceiling microphones.",
    image: "/images/corporate-boardroom.jpg",
    highlights: [
      "One-touch start for hybrid Microsoft Teams & Zoom meetings",
      "Invisible ceiling microphone arrays with automatic echo and noise cancellation",
      "Dual 85-inch interactive displays with wireless screen sharing",
      "Custom acoustic wall treatment for optimal voice clarity",
    ],
    tags: ["Smart Boardroom", "Video Conferencing", "Acoustics", "Hybrid Meetings"],
    relatedServiceSlug: "video-conference",
    relatedSolutionSlug: "smart-boardroom",
  },
];
