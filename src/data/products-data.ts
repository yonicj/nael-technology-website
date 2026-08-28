// Comprehensive Products Data Model for Nael Technology Solutions
import { SITE_METADATA } from "./site-data";

export interface ProductDetail {
  slug: string;
  title: string;
  category: string;
  badge: string;
  excerpt: string;
  description: string;
  image: string;
  gallery: string[];
  iconName: string;
  confirmedFeatures: string[];
  specs: { label: string; value: string }[];
  overview: string;
  deploymentUseCases: { title: string; description: string }[];
  relatedServices: string[]; // service slugs
  relatedSolutions: string[]; // solution slugs
  jijiShopUrl: string;
}

export const DETAILED_PRODUCTS_DATA: ProductDetail[] = [
  // 1. Nurse Call System
  {
    slug: "nurse-call-system",
    title: "Hospital Nurse Call System",
    category: "Healthcare Technology",
    badge: "Medical-Grade Ward Communication",
    excerpt: "Durable bedside patient call units, waterproof bathroom pull cords, multi-color corridor dome lights, and master duty consoles.",
    description:
      "Medical-grade emergency communication stations connecting hospital in-patients, surgical recovery wards, and ICU beds directly to nursing duty rooms for rapid clinical intervention.",
    image: "/images/products/nurse-call.jpg",
    gallery: ["/images/products/nurse-call.jpg", "/images/nurse-call-solution.jpg"],
    iconName: "HeartPulse",
    confirmedFeatures: [
      "Ergonomic bedside call pendants with reassurance LEDs",
      "IP65 waterproof bathroom emergency pull cords with reset levers",
      "Multi-color corridor dome indicator lamps (Green, Amber, Red, Flashing Blue)",
      "Centralized master nurse station annunciator console with clear two-way audio",
      "Antimicrobial, impact-resistant medical casing easy to sanitize with hospital disinfectants",
    ],
    specs: [
      { label: "Application", value: "Hospitals, Clinics, Specialty Surgery & Elder Care" },
      { label: "Material", value: "Antimicrobial flame-retardant ABS resin" },
      { label: "Bathroom Stations", value: "IP65 Waterproof ceiling/wall mount pull cord" },
      { label: "Signaling Interface", value: "Low-voltage shielded 2-wire / 4-wire bus" },
      { label: "Central Console", value: "LCD room/bed ID display with chime annunciator" },
      { label: "Compliance", value: "HTM 08-03 / VDE 0834 / UL 1069 Principles" },
    ],
    overview:
      "The Nael Nurse Call System provides a complete patient signaling ecosystem tailored for Ethiopian healthcare institutions. Engineered for absolute dependability, each ward station provides patients with instant reassurance that their request has been logged at the central nursing desk, while corridor dome lights enable fast visual triage by staff.",
    deploymentUseCases: [
      {
        title: "In-Patient & VIP Hospital Rooms",
        description: "Bedside emergency alert triggers and clear two-way intercom for private patient queries.",
      },
      {
        title: "Intensive Care Units (ICU / CCU)",
        description: "Instant high-priority Code Blue emergency escalation and silent visual alert routing.",
      },
      {
        title: "Maternity & Pediatric Centers",
        description: "Gentle chime signaling and mother-to-nurse prompt communication.",
      },
      {
        title: "Hospital Washrooms & Showers",
        description: "Ceiling-to-floor waterproof pull cords for immediate slip-and-fall emergency signaling.",
      },
    ],
    relatedServices: ["nurse-call", "wireless-network", "cctv"],
    relatedSolutions: ["nurse-call-system", "campus-network", "smart-boardroom"],
    jijiShopUrl: SITE_METADATA.jijiShopUrl,
  },

  // 2. Access Control System
  {
    slug: "access-control-system",
    title: "Biometric & RFID Access Control System",
    category: "Access & Biometrics",
    badge: "Enterprise Physical Security Hardware",
    excerpt: "Multi-modal biometric terminals supporting optical fingerprint recognition, contactless smart cards, PIN codes, and electronic door locks.",
    description:
      "High-speed biometric access control hardware with built-in time and attendance auditing, anti-spoofing recognition, and seamless magnetic door lock relays.",
    image: "/images/products/access-control.jpg",
    gallery: ["/images/products/access-control.jpg", "/images/security-control-hub.jpg"],
    iconName: "Lock",
    confirmedFeatures: [
      "Multi-modal verification: Fingerprint, Contactless RFID card, PIN code, and Facial Recognition",
      "High-speed authentication under 0.3 seconds with anti-spoofing algorithms",
      "Direct relay outputs for magnetic door locks, drop bolts, and pedestrian turnstiles",
      "Integrated time and attendance audit trail logging with TCP/IP network synchronization",
      "Emergency fire alarm interlock to automatically release doors during evacuation",
    ],
    specs: [
      { label: "Authentication Methods", value: "Biometric Fingerprint, RFID (13.56MHz/125kHz), PIN, Face" },
      { label: "Verification Speed", value: "< 0.3 seconds per scan" },
      { label: "Capacity", value: "Up to 50,000 cards / 10,000 fingerprint templates" },
      { label: "Communication", value: "TCP/IP, RS-485, Wiegand In/Out, USB Host" },
      { label: "Lock Control Relay", value: "12V/24V NO/NC relay output for maglocks & strikes" },
      { label: "Enclosure", value: "Weather-resistant IP65 / Vandal-resistant IK08" },
    ],
    overview:
      "Engineered for corporate headquarters, financial institutions, and restricted government archives in Ethiopia, our Access Control Systems restrict unauthorized entry while providing detailed, automated timestamped records of all employee movements.",
    deploymentUseCases: [
      {
        title: "Bank Branches & Cash Vaults",
        description: "Dual-custody authentication requiring manager biometric verification before unlocking vault mantraps.",
      },
      {
        title: "Enterprise Corporate Offices",
        description: "Employee turnstiles and glass-door magnetic locks integrated with HR payroll time attendance.",
      },
      {
        title: "Server Rooms & Data Centers",
        description: "Restricted entry authorization with 24/7 audit logging and anti-passback enforcement.",
      },
      {
        title: "Industrial Warehouses & Gates",
        description: "Heavy-duty outdoor RFID card readers controlling barrier boom gates and perimeter access doors.",
      },
    ],
    relatedServices: ["access-control", "cctv", "data-center"],
    relatedSolutions: ["banking-security", "datacenter-turnkey", "industrial-perimeter"],
    jijiShopUrl: SITE_METADATA.jijiShopUrl,
  },

  // 3. Conference Camera
  {
    slug: "conference-camera",
    title: "Enterprise 4K Conference Camera",
    category: "Conferencing & AV",
    badge: "Executive Collaboration Optics",
    excerpt: "All-in-one 4K PTZ video conference cameras with AI speaker auto-framing, wide-angle lenses, and beamforming microphone integration.",
    description:
      "High-definition video conference hardware designed for boardrooms, executive meeting spaces, and hybrid collaboration certified for Microsoft Teams, Zoom, and Google Meet.",
    image: "/images/products/conference-camera.jpg",
    gallery: ["/images/products/conference-camera.jpg", "/images/corporate-boardroom.jpg"],
    iconName: "Video",
    confirmedFeatures: [
      "Ultra-HD 4K optical sensor with 5x / 12x motorized optical zoom",
      "Intelligent AI speaker tracking and automatic room framing (auto-framing)",
      "Wide 120-degree diagonal field of view capturing all boardroom participants",
      "Plug-and-play USB 3.0, HDMI, and IP network streaming connectivity",
      "Full certified compatibility with Microsoft Teams, Zoom Rooms, Cisco Webex, and Google Meet",
    ],
    specs: [
      { label: "Video Resolution", value: "4K UHD @ 30fps / 1080p Full HD @ 60fps" },
      { label: "Field of View", value: "120° Wide Angle with motorized pan/tilt" },
      { label: "Zoom Capacity", value: "5x Digital / 12x Optical Zoom options" },
      { label: "Audio Integration", value: "Beamforming microphone array with acoustic echo cancellation" },
      { label: "Connectivity", value: "USB 3.0 Type-C, HDMI 2.0, RJ45 Ethernet, Bluetooth" },
      { label: "Control Interface", value: "Handheld IR remote, Tabletop touch controller, IP Web GUI" },
    ],
    overview:
      "The Nael Conference Camera elevates hybrid meetings by delivering crystal-clear 4K optical clarity, balanced color saturation, and intelligent framing. Designed to eliminate conference room friction, it connects directly to laptops or dedicated room computers via a single plug-and-play USB cable.",
    deploymentUseCases: [
      {
        title: "Executive Boardrooms",
        description: "12x optical zoom and auto-framing providing flawless video clarity during shareholder and board meetings.",
      },
      {
        title: "International NGO Meeting Rooms",
        description: "High-definition multi-country video conferences with natural acoustic voice capture.",
      },
      {
        title: "Medium & Large Conference Spaces",
        description: "Wide 120-degree lens ensuring participants seated close to the screen remain completely in frame.",
      },
      {
        title: "Executive Huddle Rooms",
        description: "Compact all-in-one video soundbars delivering premium audio and video in compact 4-to-6 person spaces.",
      },
    ],
    relatedServices: ["video-conference", "wireless-network", "structured-cabling"],
    relatedSolutions: ["smart-boardroom", "campus-network", "call-center-telephony"],
    jijiShopUrl: SITE_METADATA.jijiShopUrl,
  },

  // 4. PABX System
  {
    slug: "pabx-system",
    title: "Enterprise IP-PABX Telephony System",
    category: "Telephony & VoIP",
    badge: "Business Communication & Call Routing",
    excerpt: "Hybrid and IP-PABX telephony servers with multi-extension call routing, multi-level IVR, voicemail-to-email, and SIP trunking.",
    description:
      "Reliable business telephony hardware supporting analog PSTN lines, digital E1/PRI trunks, and modern VoIP/SIP connections for multi-extension corporate offices and customer service centers.",
    image: "/images/products/pabx-system.jpg",
    gallery: ["/images/products/pabx-system.jpg", "/images/services/call-center.jpg"],
    iconName: "PhoneForwarded",
    confirmedFeatures: [
      "Multi-extension support scalable from 20 up to 1,000+ local office extensions",
      "Interactive Voice Response (IVR) multi-level auto-attendant menus",
      "Free inter-branch calling between head office and regional Ethiopian branch offices",
      "Comprehensive call detail recording (CDR), voicemail-to-email, and call queue distribution",
      "Hybrid support for Ethio Telecom analog lines, digital E1/PRI, and IP SIP trunks",
    ],
    specs: [
      { label: "Extension Capacity", value: "20 to 1,000+ SIP / Analog extensions" },
      { label: "Concurrent Calls", value: "Up to 120 simultaneous active voice calls" },
      { label: "Interface Ports", value: "FXS, FXO, E1/T1/PRI, GSM SIM slots, Dual Gigabit LAN" },
      { label: "VoIP Protocols", value: "SIP (RFC 3261), IAX2, RTP/RTCP" },
      { label: "Voice Codecs", value: "G.711u/a, G.722 (HD Voice), G.729a/b, Opus" },
      { label: "Form Factor", value: "1U 19-inch rack-mountable metal chassis" },
    ],
    overview:
      "The Nael IP-PABX Telephony System replaces legacy telephone switches with a modern, feature-rich VoIP communications platform. It provides companies with automated call handling, seamless extension dialing across distributed branches, and reduced telecommunication overhead.",
    deploymentUseCases: [
      {
        title: "Corporate Multi-Branch Offices",
        description: "Unifying head office and regional branches under one numbering plan with zero inter-office call costs.",
      },
      {
        title: "Customer Service Desks & Call Centers",
        description: "Intelligent incoming call queues, agent skill-based routing, and live call supervisor monitoring.",
      },
      {
        title: "Hotels & Hospitality Resorts",
        description: "Guest room direct dialing, wake-up call scheduling, front-desk billing, and maid status integration.",
      },
      {
        title: "Educational & Medical Campuses",
        description: "Direct department extension dialing across distributed campus buildings over high-speed fiber.",
      },
    ],
    relatedServices: ["call-center", "structured-cabling", "wireless-network"],
    relatedSolutions: ["call-center-telephony", "campus-network", "smart-boardroom"],
    jijiShopUrl: SITE_METADATA.jijiShopUrl,
  },

  // 5. CCTV Camera
  {
    slug: "cctv-camera",
    title: "Commercial IP & 4K CCTV Camera",
    category: "Video Surveillance",
    badge: "Ultra-HD Physical Security Cameras",
    excerpt: "Commercial-grade 4K, 5MP, and IP surveillance cameras featuring smart infrared night vision, weatherproof IP67 casings, and AI perimeter analytics.",
    description:
      "High-resolution security cameras designed for continuous 24/7 surveillance in corporate towers, financial banks, industrial warehouses, and perimeter compounds across Ethiopia.",
    image: "/images/products/cctv-camera.jpg",
    gallery: ["/images/products/cctv-camera.jpg", "/images/security-control-hub.jpg"],
    iconName: "Camera",
    confirmedFeatures: [
      "Ultra-HD 4K (8MP) and 5MP high-definition video clarity",
      "Smart infrared (IR) night vision providing clear illumination up to 80 meters in zero light",
      "Vandal-resistant IK10 metal housing and weatherproof IP67 outdoor rating",
      "Power over Ethernet (PoE 802.3af/at) for clean, single-cable power and data installation",
      "On-board smart AI analytics: line crossing, intrusion detection, and vehicle plate capture",
    ],
    specs: [
      { label: "Sensor Resolution", value: "4MP, 5MP, and 4K Ultra-HD (3840 x 2160)" },
      { label: "Housing Rating", value: "IP67 Weatherproof / IK10 Vandal-Proof Metal" },
      { label: "Night Vision (IR)", value: "Smart Infrared LEDs up to 80 meters range" },
      { label: "Lens Type", value: "Motorized Varifocal (2.8-12mm) & Fixed Wide (2.8mm)" },
      { label: "Video Compression", value: "H.265+ / H.265 / H.264 high-efficiency streaming" },
      { label: "Power Supply", value: "PoE (802.3af Class 3) / 12V DC auxiliary" },
    ],
    overview:
      "Built for rigorous security demands, Nael Commercial CCTV Cameras deliver sharp forensic video evidence in all lighting conditions. Whether monitoring indoor cash counters or dark outdoor perimeter fences, these cameras provide stable, long-lasting performance.",
    deploymentUseCases: [
      {
        title: "Banking Teller Windows & Vaults",
        description: "Capturing fine currency denominations, customer faces, and vault entry records in high resolution.",
      },
      {
        title: "Commercial Office Buildings",
        description: "Discreet dome cameras covering lobbies, elevators, stairwells, and secure floor hallways.",
      },
      {
        title: "Industrial Yards & Logistics Parks",
        description: "Long-range bullet and PTZ cameras with smart IR monitoring compound fence lines and loading docks.",
      },
      {
        title: "Shopping Malls & Retail Outlets",
        description: "High-density retail surveillance to reduce stock shrinkage, deter shoplifting, and manage foot traffic.",
      },
    ],
    relatedServices: ["cctv", "access-control", "structured-cabling"],
    relatedSolutions: ["banking-security", "industrial-perimeter", "datacenter-turnkey"],
    jijiShopUrl: SITE_METADATA.jijiShopUrl,
  },

  // 6. Fire Detection & Suppression
  {
    slug: "fire-detection-suppression",
    title: "Fire Detection & Suppression System",
    category: "Fire Safety Hardware",
    badge: "Certified Life-Safety Equipment",
    excerpt: "Certified addressable fire alarm control panels, optical smoke detectors, rate-of-rise heat sensors, and automated clean-agent gas suppression.",
    description:
      "Life-safety and property protection hardware engineered for rapid early detection of smoke, thermal spikes, and automated waterless gas suppression for server rooms.",
    image: "/images/products/fire-safety.jpg",
    gallery: ["/images/products/fire-safety.jpg", "/images/services/fire-alarm.jpg"],
    iconName: "Flame",
    confirmedFeatures: [
      "Addressable fire alarm control panels with multi-loop capacity up to 2,000 devices",
      "Intelligent photoelectric smoke and rate-of-rise heat detectors with anti-dust drift compensation",
      "Manual break-glass call points with high-visibility red housings and reset keys",
      "Clean-agent gas suppression (FM-200 / Gas) for waterless electrical equipment protection",
      "Multi-tone electronic sounders and high-intensity synchronized xenon evacuation strobes",
    ],
    specs: [
      { label: "Panel Architecture", value: "Addressable Multi-Loop (1 to 8 Loops, 250 devices/loop)" },
      { label: "Detection Technologies", value: "Photoelectric Optical Smoke, Rate-of-Rise Heat, Multi-Sensor" },
      { label: "Gas Suppression", value: "FM-200 / Novec 1230 Clean Agent cylinder & solenoid valves" },
      { label: "Notification Appliances", value: "High-decibel Sounders (95-105dB) & EN54-23 Strobe Beacons" },
      { label: "Backup Power", value: "Internal 24V DC battery charger with 72-hour standby capability" },
      { label: "Certifications", value: "EN54 / NFPA 72 / NFPA 2001 / UL Listed" },
    ],
    overview:
      "Nael Fire Detection & Suppression systems provide immediate early warning of fire risks to safeguard human life and high-value physical assets. The system integrates addressable detection with automated emergency shutdowns for ventilation fans and access control doors.",
    deploymentUseCases: [
      {
        title: "Commercial High-Rise Towers",
        description: "Multi-story addressable detection with zoned floor evacuation alarms and fire pump monitoring.",
      },
      {
        title: "Data Centers & Electrical Rooms",
        description: "Waterless clean-agent gas suppression extinguishing electrical fires in 10 seconds without water damage.",
      },
      {
        title: "Industrial Warehouses & Factories",
        description: "Optical beam smoke detectors and heavy-duty heat sensors built for high-ceiling storage bays.",
      },
      {
        title: "Hotels & Hospitals",
        description: "In-room audible sounder bases, corridor emergency call points, and 24/7 central reception panels.",
      },
    ],
    relatedServices: ["fire-alarm", "data-center", "access-control"],
    relatedSolutions: ["fire-safety-suppression", "datacenter-turnkey", "industrial-perimeter"],
    jijiShopUrl: SITE_METADATA.jijiShopUrl,
  },

  // 7. Optical Fiber
  {
    slug: "optical-fiber",
    title: "Optical Fiber & Structured Cabling System",
    category: "Networking & Fiber",
    badge: "High-Bandwidth Network Backbone",
    excerpt: "Single-mode OS2 and multi-mode OM3/OM4 optical fiber cables, 19-inch server racks, and high-density Cat6A patch panels.",
    description:
      "High-speed passive networking components designed for building enterprise local area networks (LAN), inter-building fiber backbones, and server room infrastructure.",
    image: "/images/products/optical-fiber.jpg",
    gallery: ["/images/products/optical-fiber.jpg", "/images/campus-network.jpg"],
    iconName: "HardDrive",
    confirmedFeatures: [
      "Armored single-mode (OS2) and multi-mode (OM3/OM4) fiber optic cables (4 to 96 cores)",
      "High-density sliding fiber optic patch panels (ODF) with SC, LC, and ST adapter couplings",
      "Standard 19-inch server rack enclosures (4U to 42U) with ventilated tempered glass/mesh doors",
      "Category 6 and Category 6A shielded (STP/FTP) 10Gbps copper patch panels and keystones",
      "Complete cable management accessories: horizontal organizers, brush plates, and PDU power strips",
    ],
    specs: [
      { label: "Fiber Cable Types", value: "Single-Mode OS2 (9/125μm) & Multi-Mode OM3/OM4 (50/125μm)" },
      { label: "Bandwidth Capacity", value: "10Gbps, 40Gbps, and 100Gbps transmission speeds" },
      { label: "Jacket Rating", value: "Low Smoke Zero Halogen (LSZH) / Outdoor Armored Duct" },
      { label: "Rack Cabinet Dimensions", value: "19-inch standard (4U, 6U, 9U, 12U, 24U, 42U options)" },
      { label: "Copper Patch Panels", value: "24-Port / 48-Port Cat6 & Cat6A 110-IDC loaded panels" },
      { label: "Standards Compliance", value: "ISO/IEC 11801, ANSI/TIA-568-C.3, Fluke DTX/DSX Certified" },
    ],
    overview:
      "Nael Optical Fiber and Structured Cabling hardware delivers the physical foundation for modern enterprise networking. Built with premium materials to resist interference and signal attenuation, our fiber and rack solutions guarantee high throughput for decades.",
    deploymentUseCases: [
      {
        title: "Multi-Building Campus Backbones",
        description: "Underground armored single-mode fiber links interconnecting distributed blocks at 10Gbps/40Gbps.",
      },
      {
        title: "Enterprise Server Rooms & Data Centers",
        description: "High-density 42U server cabinets, overhead fiber raceways, and organized vertical cable trunks.",
      },
      {
        title: "Commercial Office Structured Cabling",
        description: "Cat6A copper workstations, wall faceplates, and floor box connectivity for enterprise desks.",
      },
      {
        title: "Industrial Control & CCTV Networking",
        description: "Outdoor ruggedized fiber rings carrying hundreds of security camera video streams simultaneously.",
      },
    ],
    relatedServices: ["structured-cabling", "data-center", "wireless-network"],
    relatedSolutions: ["campus-network", "datacenter-turnkey", "industrial-perimeter"],
    jijiShopUrl: SITE_METADATA.jijiShopUrl,
  },
];
