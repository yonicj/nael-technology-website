// Core Data Structures & Confirmed Business Information for Nael Technology Solutions

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tags: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  category: "Security & Safety" | "Network Infrastructure" | "Communication & Collaboration" | "Healthcare Technology";
  excerpt: string;
  description: string;
  features: string[];
  tags: string[];
  iconName: string;
  image?: string;
}

export interface SolutionItem {
  id: string;
  slug?: string;
  title: string;
  category: string;
  industry: string;
  excerpt: string;
  description: string;
  deliverables: string[];
  tags: string[];
  iconName: string;
  image?: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
  keySolutions: string[];
}

export interface ProductItem {
  id: string;
  slug?: string;
  title: string;
  category: string;
  excerpt: string;
  description: string;
  specs: string[];
  tags: string[];
  iconName: string;
  jijiCategoryUrl?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  clientSector: string;
  scope: string;
  highlights: string[];
  tags: string[];
  category: string;
}

export interface ValuePillar {
  title: string;
  description: string;
  icon: string;
}

export const SITE_METADATA = {
  name: "Nael Technology Solutions",
  shortName: "Nael Tech",
  tagline: "Building smarter, safer and connected environments",
  description:
    "Nael Technology Solutions is Ethiopia's premier technology systems integrator, delivering professional CCTV surveillance, fire alarm systems, biometric access control, data centers, structured cabling, and enterprise conferencing solutions.",
  jijiShopUrl: "https://jiji.com.et/shop/nael-technology-solu",
  contact: {
    phones: [
      { number: "+251 911 438 942", label: "Customer Support" },
      { number: "+251 916 841 993", label: "Sales & Inquiries" },
      { number: "+251 934 871 526", label: "Technical Sales Desk" },
    ],
    email: "dejenkebede45@gmail.com",
    address: "Awash Building 1st Floor, Addis Ababa, Ethiopia",
    workingHours: "Monday – Friday: 9:00 AM – 6:00 PM (EAT)",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.569960509924!2d38.7357569!3d9.0116579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b872d66661e47%3A0x3146c2e98a641958!2sNael%20technology%20solution!5e0!3m2!1sen!2set!4v1758715493075!5m2!1sen!2set",
  },
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Products", href: "#products" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const CAPABILITIES_DATA: CapabilityItem[] = [
  {
    id: "security-systems",
    title: "Security Systems",
    description: "4K AI IP video surveillance, biometric access control, smart turnstiles, and intrusion alarm systems.",
    iconName: "ShieldCheck",
    tags: ["CCTV 4K", "Biometrics", "RFID Access", "Intrusion"],
  },
  {
    id: "network-infrastructure",
    title: "Network Infrastructure",
    description: "Certified Cat6A/Cat7 copper cabling, single/multi-mode optical fiber splicing, and managed enterprise switching.",
    iconName: "Cable",
    tags: ["Fiber Optics", "Structured Cabling", "Fluke Certified", "Switching"],
  },
  {
    id: "data-centers",
    title: "Data Centers",
    description: "Turnkey server room architecture, precision cooling, clean-agent fire suppression, and modular UPS power.",
    iconName: "Server",
    tags: ["Server Racks", "Precision CRAC", "Modular UPS", "Clean Agent"],
  },
  {
    id: "unified-communication",
    title: "Communication & AV",
    description: "Executive video conferencing, smart boardroom acoustics, IP-PABX telephony, and IVR call center solutions.",
    iconName: "Video",
    tags: ["Smart Boardroom", "IP-PABX", "Call Center", "Teams/Zoom"],
  },
  {
    id: "fire-safety",
    title: "Fire Safety",
    description: "Certified addressable fire detection, automated emergency notification, and compliance with safety standards.",
    iconName: "Flame",
    tags: ["Addressable Panels", "Smoke Detectors", "Emergency Alerts", "NFPA/EN54"],
  },
  {
    id: "enterprise-technology",
    title: "Enterprise Technology",
    description: "Integrated hospital nurse call stations, smart building environmental sensors, and centralized monitoring desks.",
    iconName: "Cpu",
    tags: ["Nurse Call", "BMS Integration", "Sensors", "24/7 Monitoring"],
  },
];

export const ABOUT_DATA = {
  heading: "About Nael Technology Solutions",
  subtitle: "Engineering Smarter, Safer & Connected Facilities Across Ethiopia",
  description:
    "Nael Technology Solutions is an Addis Ababa-based technology systems integrator specializing in electronic physical security, fire safety engineering, data center infrastructure, structured networking, and unified communications. We partner with commercial enterprises, banking institutions, government bodies, and healthcare organizations to deliver scalable, reliable, and compliant technology environments.",
  vision:
    "To be the most trusted and innovative technology systems integrator in Ethiopia, renowned for engineering excellence, dependability, and uncompromising customer support.",
  mission:
    "To safeguard lives, protect critical assets, and empower Ethiopian organizations with state-of-the-art electronic security, high-speed connectivity, and resilient IT infrastructure delivered with utmost technical precision.",
  pillars: [
    {
      title: "Strategic Focus",
      description:
        "Custom-engineered security, networking, and IT infrastructure built to match each client's physical layout and operational workflow.",
      icon: "ShieldCheck",
    },
    {
      title: "Collaborative Partnership",
      description:
        "Seamless end-to-end execution covering design, professional installation, preventative maintenance, staff training, and 24/7 support.",
      icon: "Handshake",
    },
    {
      title: "Innovation & Timely Delivery",
      description:
        "Adopting modern, globally certified technologies to complete projects on schedule, within budget, and to international standards.",
      icon: "Zap",
    },
  ],
  stats: [
    { value: "100%", label: "Standards & Safety Compliance" },
    { value: "24/7", label: "Technical Engineering Support" },
    { value: "Turnkey", label: "Design, Cabling & Deployment" },
    { value: "Addis Ababa", label: "Nationwide Installation Reach" },
  ],
};

export const SERVICES_DATA: ServiceItem[] = [
  // 1. Security & Safety
  {
    id: "cctv-surveillance",
    title: "CCTV & Video Surveillance Systems",
    category: "Security & Safety",
    excerpt: "Enterprise-grade HD and IP surveillance cameras with remote smartphone monitoring and smart AI detection.",
    description:
      "We design, install, and support high-definition IP video surveillance systems for corporate offices, commercial complexes, banks, and industrial sites in Ethiopia. Our setups feature high-capacity NVRs, intelligent motion alerts, PTZ cameras, night vision, and encrypted remote access.",
    features: [
      "Ultra-HD 4K & IP Network Cameras",
      "Real-time remote viewing on iOS & Android",
      "Motion detection, perimeter alerts & AI analytics",
      "Infrared & low-light night vision up to 80m",
      "Scalable on-premise NVR & redundant storage backup",
    ],
    tags: ["CCTV", "IP Surveillance", "Security Cameras", "Remote Access"],
    iconName: "Camera",
    image: "/images/services/cctv.jpg",
  },
  {
    id: "access-control-biometrics",
    title: "Access Control & Time Attendance",
    category: "Security & Safety",
    excerpt: "Regulate facility entry points using biometrics, RFID smart cards, and automated attendance reporting.",
    description:
      "Secure sensitive zones and track personnel access with our advanced access control systems. We design solutions utilizing biometric fingerprint/facial recognition, contactless RFID smart cards, turnstiles, and automated time-attendance software.",
    features: [
      "Biometric fingerprint, facial recognition & smart card readers",
      "Magnetic locks, electric strikes & turnstile controllers",
      "Automated time and attendance audit reports",
      "Visitor management and restricted zone authorization",
      "Seamless integration with CCTV and emergency fire override",
    ],
    tags: ["Access Control", "Biometric Security", "Time Attendance", "Smart Entry"],
    iconName: "Lock",
    image: "/images/services/access-control.jpg",
  },
  {
    id: "fire-alarm-safety",
    title: "Fire Alarm & Detection Systems",
    category: "Security & Safety",
    excerpt: "Certified addressable fire alarm detection, control panels, and multi-zone emergency alerts.",
    description:
      "Protect your facilities and ensure regulatory compliance with certified fire alarm installations. We provide early smoke and heat detection, multi-zone addressable panels, manual call points, and emergency notification systems.",
    features: [
      "Addressable smoke, heat, and flame detectors",
      "Centralized fire alarm control panels & annunciators",
      "Audible sirens, strobe lights & emergency evacuation alerts",
      "24/7 system monitoring and BMS integration",
      "Regular testing, certification & preventative maintenance",
    ],
    tags: ["Fire Alarm", "Smoke Detection", "Life Safety", "Ethiopian Building Codes"],
    iconName: "Flame",
    image: "/images/services/fire-alarm.jpg",
  },

  // 2. Network Infrastructure
  {
    id: "structured-cabling",
    title: "Structured Cabling & Fiber Optics",
    category: "Network Infrastructure",
    excerpt: "Certified Cat6/Cat6A copper wiring and high-speed optical fiber cabling backbones.",
    description:
      "Build a resilient, future-ready network foundation. We handle complete structured cabling projects including Cat6/Cat6A copper wiring, single-mode/multi-mode fiber optics, server racks, patch panels, cable management, and Fluke certification.",
    features: [
      "Cat6, Cat6A, and Cat7 structured copper cabling",
      "Single-mode and multi-mode optical fiber splicing & termination",
      "Server rack installation, cable trays & patch management",
      "Fluke network testing and performance certification",
      "Network infrastructure expansion & overhaul",
    ],
    tags: ["Structured Cabling", "Fiber Optic", "Network Racks", "Fluke Certified"],
    iconName: "Cable",
    image: "/images/services/structured-cabling.jpg",
  },
  {
    id: "data-center-infrastructure",
    title: "Data Center Infrastructure & Power",
    category: "Network Infrastructure",
    excerpt: "Turnkey server room design, precision cooling, power conditioning, and environmental monitoring.",
    description:
      "We design and build mission-critical data center environments engineered for continuous availability. Our services cover server rack architecture, precision cooling, uninterruptible power supply (UPS), cable containment, and environmental monitoring.",
    features: [
      "Server and storage rack architecture layout",
      "Precision cooling and climate control management",
      "Modular UPS power backup and intelligent PDUs",
      "Environmental monitoring (temperature, humidity, water leak)",
      "Physical data center security and biometric access",
    ],
    tags: ["Data Center", "Server Room", "UPS Power", "Precision Cooling"],
    iconName: "Server",
    image: "/images/services/data-center.jpg",
  },
  {
    id: "wireless-networking",
    title: "Enterprise Wi-Fi & Switching",
    category: "Network Infrastructure",
    excerpt: "High-density Wi-Fi networks, enterprise managed switching, and perimeter cybersecurity.",
    description:
      "Deploy robust, seamless wireless connectivity for offices, campuses, hotels, and healthcare facilities. We deliver site heat-mapping, enterprise Wi-Fi 6 access points, managed switching, VLAN segmentation, and firewall security.",
    features: [
      "High-density enterprise Wi-Fi 6 access points",
      "Managed network switches & VLAN segmentation",
      "Captive guest portals and secure enterprise authentication",
      "RF site survey and signal coverage optimization",
      "Network troubleshooting and proactive monitoring",
    ],
    tags: ["Enterprise Wi-Fi", "Managed Switches", "VLAN", "Network Security"],
    iconName: "Wifi",
    image: "/images/services/wireless-network.jpg",
  },

  // 3. Communication & Collaboration
  {
    id: "video-conferencing",
    title: "Audio & Video Conferencing",
    category: "Communication & Collaboration",
    excerpt: "Crystal-clear 4K video conferencing, meeting room acoustics, and smart boardroom controls.",
    description:
      "Upgrade your meeting rooms with professional audio and video conferencing technology. We deliver HD PTZ conference cameras, beamforming microphone arrays, digital sound processors, and one-touch integration with Teams, Zoom, and Google Meet.",
    features: [
      "4K Ultra-HD PTZ conference cameras with auto-framing",
      "Beamforming ceiling and tabletop microphone arrays",
      "High-fidelity speakers and room acoustic calibration",
      "Touch control consoles compatible with Teams & Zoom",
      "Wireless presentation and screen sharing hardware",
    ],
    tags: ["Video Conferencing", "Smart Boardroom", "Room Acoustics", "Hybrid Meetings"],
    iconName: "Video",
    image: "/images/services/video-conference.jpg",
  },
  {
    id: "telephony-call-center",
    title: "Unified IP-PABX & Call Centers",
    category: "Communication & Collaboration",
    excerpt: "Scalable IP-PABX telephone systems, multi-line VoIP, and interactive IVR call center solutions.",
    description:
      "Streamline internal communication and customer service with our unified telephony solutions. We deploy IP-PABX phone systems, SIP trunking, interactive voice response (IVR), call recording, and multi-channel call center management software.",
    features: [
      "IP-PABX telephone systems with multi-extension routing",
      "VoIP and SIP trunk configuration",
      "Interactive Voice Response (IVR) & automated queueing",
      "Call recording and agent performance analytics",
      "CRM and helpdesk integration",
    ],
    tags: ["IP-PABX", "Call Center", "VoIP SIP", "Business Phones"],
    iconName: "PhoneCall",
    image: "/images/services/call-center.jpg",
  },

  // 4. Healthcare Technology
  {
    id: "healthcare-nurse-call-service",
    title: "Hospital Nurse Call Systems",
    category: "Healthcare Technology",
    excerpt: "Turnkey hospital nurse call wiring, bedside stations, corridor dome alerts, and duty room consoles.",
    description:
      "Equip medical facilities with dependable wired and wireless nurse call stations, bedside pull cords, corridor indicator lights, and staff duty stations to minimize emergency response times and elevate patient care.",
    features: [
      "Bedside call pendants with reassurance LEDs",
      "Waterproof bathroom emergency pull stations",
      "Corridor multi-color triage dome indicator lights",
      "Duty room master intercom & display consoles",
      "Integration with hospital emergency alert systems",
    ],
    tags: ["Nurse Call", "Patient Safety", "Healthcare AV", "Medical Systems"],
    iconName: "HeartPulse",
    image: "/images/services/nurse-call.jpg",
  },
];

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: "datacenter-turnkey-infrastructure",
    slug: "datacenter-turnkey",
    title: "Data Center Turnkey Infrastructure",
    category: "IT & Telecommunications",
    industry: "Enterprise IT, Telecom & Financial",
    excerpt: "Full turnkey deployment of enterprise server rooms, precision cooling, power backup, and clean agent fire suppression.",
    description:
      "Complete design and implementation of mission-critical server facilities. Encompasses structural cable trays, high-density server cabinets, in-row precision cooling, FM-200 clean-agent fire suppression, and modular UPS power distribution.",
    deliverables: [
      "High-density server racks & overhead cable trays",
      "Modular UPS power systems with automatic generator transfer",
      "In-row / perimeter precision air conditioning (CRAC)",
      "Clean-agent fire suppression (FM-200 / Gas suppression)",
      "Environmental monitoring and alert notifications",
    ],
    tags: ["Data Center", "Clean Agent Fire Suppression", "Modular UPS", "High Availability"],
    iconName: "Server",
    image: "/images/datacenter-facility.jpg",
  },
  {
    id: "banking-facility-security",
    slug: "banking-security",
    title: "Banking & Financial Facility Security",
    category: "Physical Security",
    industry: "Banks, Microfinances & Insurance",
    excerpt: "Multi-layered physical security, vault surveillance, silent alarms, and audited biometric access control.",
    description:
      "A specialized security suite designed to meet stringent financial regulatory standards. Combines high-resolution vault and teller surveillance, tamper-proof alarm systems, dual-custody biometric vault access, and centralized multi-branch monitoring.",
    deliverables: [
      "High-definition teller & vault camera systems",
      "Dual-custody biometric entry for cash & server rooms",
      "Silent panic buttons & instant emergency alarms",
      "Multi-branch centralized surveillance management",
      "24/7 video archiving with failover redundancy",
    ],
    tags: ["Banking Security", "Vault Protection", "Financial Compliance", "Multi-Branch"],
    iconName: "Landmark",
    image: "/images/security-control-hub.jpg",
  },
  {
    id: "corporate-smart-boardroom",
    slug: "smart-boardroom",
    title: "Corporate Smart Boardroom & Conferencing",
    category: "Corporate AV",
    industry: "Enterprises, NGOs & Government",
    excerpt: "Turnkey meeting room audio/video architecture, wireless screen sharing, and acoustic optimization.",
    description:
      "Transform corporate boardrooms and conference halls into high-productivity collaboration hubs with acoustic engineering, motorized displays, ceiling array mics, and seamless hybrid meeting software integration.",
    deliverables: [
      "Interactive displays & motorized projection systems",
      "Acoustic paneling and reverberation reduction",
      "Intelligent camera tracking and speaker framing",
      "One-touch room management controller",
      "Wireless presentation without cable clutter",
    ],
    tags: ["Smart Boardroom", "Executive Collaboration", "Acoustics", "Hybrid Work"],
    iconName: "Video",
    image: "/images/corporate-boardroom.jpg",
  },
  {
    id: "industrial-perimeter-protection",
    slug: "industrial-perimeter",
    title: "Industrial & Logistics Perimeter Protection",
    category: "Industrial Security",
    industry: "Factories, Warehouses & Compounds",
    excerpt: "Long-range perimeter surveillance, thermal detection, and integrated fire suppression.",
    description:
      "Heavy-duty security and safety architecture for factories, logistics warehouses, and large industrial compounds. Features long-range PTZ cameras, perimeter intrusion detection, explosion-proof components, and automated fire suppression.",
    deliverables: [
      "Long-range thermal & optical perimeter surveillance",
      "Beam intrusion detectors & automated gate access",
      "High-bay warehouse smoke detection & sprinkler integration",
      "Industrial ruggedized fiber optic ring backbone",
      "Centralized guardhouse monitoring command station",
    ],
    tags: ["Industrial Security", "Perimeter Defense", "Warehouse Safety", "Heavy-Duty"],
    iconName: "ShieldAlert",
    image: "/images/perimeter-protection.jpg",
  },
  {
    id: "hospital-nurse-call-solution",
    slug: "nurse-call-system",
    title: "Healthcare Nurse Call & Alert Solution",
    category: "Healthcare Technology",
    industry: "Hospitals, Clinics & Medical Centers",
    excerpt: "Rapid patient-to-nurse emergency communication and smart medical facility alert routing.",
    description:
      "Equip medical facilities with dependable wired and wireless nurse call stations, bedside pull cords, corridor indicator lights, and staff duty stations to minimize response times and elevate patient care.",
    deliverables: [
      "Bedside call units & waterproof bathroom pull cords",
      "Corridor dome lights & duty room annunciator consoles",
      "Real-time nurse alert routing & priority escalation",
      "Hospital Information System (HIS) integration",
      "Audio communication between patient and duty station",
    ],
    tags: ["Nurse Call", "Healthcare Safety", "Hospital Systems", "Patient Care"],
    iconName: "HeartPulse",
    image: "/images/nurse-call-solution.jpg",
  },
  {
    id: "campus-unified-network",
    slug: "campus-network",
    title: "Integrated Campus Voice & High-Speed Data",
    category: "Institutional Network",
    industry: "Universities, Hotels & Office Complexes",
    excerpt: "Unified fiber backbone, high-density Wi-Fi roaming, and multi-extension IP telephony.",
    description:
      "A comprehensive network and telephony solution for multi-building campuses. Connects distributed buildings via high-speed fiber backbones while providing uniform Wi-Fi roaming, VLAN management, and unified IP-PABX extensions across all departments.",
    deliverables: [
      "Inter-building optical fiber backbone linking all blocks",
      "High-capacity core and distribution switching",
      "Campus-wide seamless Wi-Fi roaming",
      "Unified IP telephony with direct branch extension dialing",
      "Centralized network management and cybersecurity firewall",
    ],
    tags: ["Campus Network", "Fiber Backbone", "Unified Voice", "Enterprise Wi-Fi"],
    iconName: "Network",
    image: "/images/campus-network.jpg",
  },
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "banking-finance",
    name: "Banking & Financial Services",
    description: "Vault security, audited biometric access, 4K teller surveillance, and compliant data centers.",
    iconName: "Landmark",
    keySolutions: ["Vault Biometrics", "Centralized CCTV", "Clean-Agent Suppression", "Redundant Power"],
  },
  {
    id: "corporate-enterprise",
    name: "Corporate & Enterprise",
    description: "Structured Cat6A cabling, smart boardroom AV, high-density Wi-Fi 6, and IP telephony.",
    iconName: "Users",
    keySolutions: ["Smart Boardrooms", "Structured Cabling", "IP-PABX Phones", "Access Control"],
  },
  {
    id: "healthcare-hospitals",
    name: "Healthcare & Hospitals",
    description: "Wired/wireless nurse call stations, medical ward alerts, and clean data connectivity.",
    iconName: "HeartPulse",
    keySolutions: ["Nurse Call Systems", "Emergency Pulls", "Ward Dome Lights", "Facility CCTV"],
  },
  {
    id: "commercial-real-estate",
    name: "Commercial Buildings & Towers",
    description: "Multi-zone certified fire alarm detection, building-wide fiber, and smart access turnstiles.",
    iconName: "Building",
    keySolutions: ["Certified Fire Alarms", "Optical Fiber Backbone", "Turnstile Entry", "Perimeter Defense"],
  },
  {
    id: "industrial-logistics",
    name: "Industrial & Logistics",
    description: "Long-range perimeter thermal cameras, warehouse smoke detection, and ruggedized networking.",
    iconName: "ShieldAlert",
    keySolutions: ["Perimeter Thermal", "High-Bay Smoke Alarms", "Industrial Fiber", "Vehicle Gate Control"],
  },
  {
    id: "education-institutions",
    name: "Education & Campus Facilities",
    description: "Campus-wide Wi-Fi roaming, unified IP telephony, and secure building access.",
    iconName: "Network",
    keySolutions: ["Campus Fiber Ring", "Enterprise Wi-Fi", "PABX Extensions", "Lab Access Control"],
  },
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "commercial-cctv-cameras",
    slug: "cctv-camera",
    title: "Commercial IP & 4K CCTV Cameras",
    category: "Security Hardware",
    excerpt: "High-definition dome, bullet, and PTZ cameras with smart IR and AI motion detection.",
    description:
      "Professional surveillance cameras designed for continuous 24/7 operation in commercial, residential, and harsh industrial environments. Features crystal-clear resolution, weatherproof IP67 casings, and smart infrared night vision.",
    specs: [
      "Resolution: 4MP, 5MP, and 4K Ultra-HD options",
      "Housing: Vandal-proof IK10, Weatherproof IP67",
      "Night Vision: Smart IR up to 80 meters",
      "Lens: Motorized Varifocal & Fixed Lens options",
      "Power: Power over Ethernet (PoE 802.3af/at)",
    ],
    tags: ["CCTV", "IP Camera", "4K Surveillance", "Weatherproof"],
    iconName: "Camera",
  },
  {
    id: "biometric-access-controllers",
    slug: "access-control-system",
    title: "Biometric & RFID Access Terminals",
    category: "Access Hardware",
    excerpt: "Multi-modal biometric terminals supporting fingerprint, facial recognition, and RFID cards.",
    description:
      "High-speed biometric access control terminals with built-in time attendance recording. Equipped with anti-spoofing facial recognition algorithms, optical fingerprint sensors, and encrypted RFID card readers.",
    specs: [
      "Identification: Face, Fingerprint, Card & PIN",
      "Face Recognition Speed: < 0.2 seconds",
      "User Capacity: Up to 50,000 cards / 10,000 faces",
      "Communication: TCP/IP, Wi-Fi, Wiegand, RS-485",
      "Relay Output: Door strike, magnetic lock, alarm buzzer",
    ],
    tags: ["Biometrics", "Face Recognition", "RFID Card", "Access Control"],
    iconName: "Fingerprint",
  },
  {
    id: "fire-alarm-panels-detectors",
    slug: "fire-detection-suppression",
    title: "Fire Alarm Control Panels & Detectors",
    category: "Fire Safety Hardware",
    excerpt: "Addressable and conventional fire alarm panels, optical smoke detectors, and manual call points.",
    description:
      "Certified life-safety equipment engineered for fast detection of smoke, extreme heat, and carbon monoxide. Compatible with addressable loop architectures and centralized monitoring annunciators.",
    specs: [
      "Panel Capacity: 1 to 8 Loops (Up to 2,000 devices)",
      "Detectors: Photoelectric Smoke, Rate-of-Rise Heat",
      "Certifications: EN54 / UL Standards Compliant",
      "Notification: Multi-tone sounders and high-visibility strobes",
      "Battery Backup: Integrated 24V standby power supply",
    ],
    tags: ["Fire Alarm Panel", "Smoke Detector", "EN54 Certified", "Life Safety"],
    iconName: "Flame",
  },
  {
    id: "conference-cameras-speakerphones",
    slug: "conference-camera",
    title: "Enterprise Conference Cameras & Audio",
    category: "Conferencing AV",
    excerpt: "4K video conference soundbars and PTZ cameras with beamforming microphone arrays.",
    description:
      "All-in-one conference room cameras and speakerphones that turn meeting spaces into interactive conference rooms. Plug-and-play USB connection with studio-quality audio and AI speaker tracking.",
    specs: [
      "Optics: 4K UHD with 5x/12x optical zoom",
      "Field of View: 120° wide-angle with auto-framing",
      "Microphones: 6-element beamforming array with noise cancellation",
      "Compatibility: Certified for Microsoft Teams, Zoom, Google Meet",
      "Connectivity: USB 3.0, HDMI, Bluetooth, Ethernet",
    ],
    tags: ["Conference Camera", "Speakerphone", "Zoom Rooms", "Microsoft Teams"],
    iconName: "Video",
  },
  {
    id: "ip-pabx-telephony-servers",
    slug: "pabx-system",
    title: "IP-PABX & Business Telephony Servers",
    category: "Telephony Hardware",
    excerpt: "Hybrid and IP-PABX communication servers with multi-line routing and voicemail-to-email.",
    description:
      "Robust telephony servers designed for small offices up to enterprise headquarters. Supports traditional PSTN analog lines, digital E1/T1/PRI lines, and modern SIP trunking.",
    specs: [
      "Extensions: Scalable from 20 to 1,000+ users",
      "Concurrent Calls: Up to 120 simultaneous calls",
      "Interfaces: FXS, FXO, E1/PRI, GSM, SIP Trunks",
      "Features: IVR, Call Queuing, Conference Bridge, Voicemail",
      "Management: Web-based GUI with call detail recording (CDR)",
    ],
    tags: ["IP-PABX", "VoIP PBX", "SIP Trunk", "Business Phones"],
    iconName: "PhoneForwarded",
  },
  {
    id: "fiber-optic-cables-racks",
    slug: "optical-fiber",
    title: "Server Racks & Optical Fiber Enclosures",
    category: "Networking Hardware",
    excerpt: "Heavy-duty server racks, outdoor armored fiber cables, and modular patch panels.",
    description:
      "High-specification passive networking equipment designed for maximum reliability and ease of maintenance. Includes standard 19-inch server cabinets, Cat6A patch panels, and armored fiber optic cabling.",
    specs: [
      "Rack Sizes: 4U to 42U Free-Standing & Wall-Mount Cabinets",
      "Fiber Type: OS2 Single-Mode & OM3/OM4 Multi-Mode",
      "Patch Panels: 24-Port / 48-Port Cat6/Cat6A Shielded",
      "Accessories: Cable managers, PDU power strips, cooling fans",
      "Build: Cold-rolled steel with electrostatic powder coating",
    ],
    tags: ["Server Rack", "Fiber Optic", "Patch Panel", "Cat6A"],
    iconName: "HardDrive",
  },
  {
    id: "hospital-nurse-call-units",
    slug: "nurse-call-system",
    title: "Hospital Nurse Call Bedside Stations",
    category: "Healthcare Hardware",
    excerpt: "Antimicrobial patient handset cords, emergency pull stations, and master duty consoles.",
    description:
      "Durable, easy-to-sanitize nurse call equipment built for healthcare institutions. Provides instant call signaling, reassurance LEDs, and emergency call cancellation buttons.",
    specs: [
      "Materials: Medical-grade antimicrobial plastic casing",
      "Handsets: Ergonomic call pendant with light button",
      "Bathroom Stations: Waterproof IP65 pull cord with reset button",
      "Indicators: Tri-color corridor dome lamps",
      "Master Console: Backlit LCD display with audio intercom",
    ],
    tags: ["Nurse Call Station", "Hospital Hardware", "Medical Grade", "Emergency Alert"],
    iconName: "HeartPulse",
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "financial-banking-security",
    title: "Multi-Branch Banking Security & Centralized Surveillance",
    category: "Physical Security",
    clientSector: "Banking & Financial Services",
    scope:
      "Turnkey deployment of IP video surveillance, vault biometric entry, and silent intrusion alarms across branch networks in Addis Ababa.",
    highlights: [
      "Over 120+ 4K IP cameras with 90-day redundant video backup",
      "Dual-custody biometric locks installed on main cash vaults",
      "Centralized monitoring feed connected to headquarters security operations",
      "Zero downtime during operational banking hours",
    ],
    tags: ["Banking", "CCTV 4K", "Biometrics", "Centralized Monitoring"],
  },
  {
    id: "commercial-tower-fire-safety",
    title: "Commercial High-Rise Fire Alarm & Suppression System",
    category: "Safety Engineering",
    clientSector: "Commercial Real Estate",
    scope:
      "Full design, installation, and civil defense certification of addressable fire alarm systems across a multi-story commercial tower.",
    highlights: [
      "Comprehensive multi-zone addressable smoke and heat detector coverage",
      "Automatic clean-agent fire suppression protecting server and electrical rooms",
      "Emergency voice evacuation integration with high-decibel strobes",
      "100% compliance with Ethiopian safety and building codes",
    ],
    tags: ["Fire Safety", "Commercial Tower", "Clean Agent Suppression", "Life Safety"],
  },
  {
    id: "enterprise-datacenter-cabling",
    title: "High-Density Data Center Structured Cabling & Server Racks",
    category: "Network Infrastructure",
    clientSector: "Enterprise IT & Logistics",
    scope:
      "Engineering a high-availability server room with 10Gbps optical fiber backbones, Cat6A structured copper, precision cooling, and modular UPS backup.",
    highlights: [
      "10Gbps OM4 multi-mode fiber optic backbone linking server clusters",
      "Organized 42U server cabinets with clean overhead cable trays",
      "Full Fluke DSX-8000 testing with 100% pass certification",
      "N+1 redundant UPS battery bank with automated power switchover",
    ],
    tags: ["Data Center", "10Gbps Fiber", "Structured Cabling", "Fluke Certified"],
  },
  {
    id: "hospital-nurse-call-installation",
    title: "Regional Hospital Nurse Call & Emergency Alert System",
    category: "Healthcare Technology",
    clientSector: "Healthcare & Hospitals",
    scope:
      "Installation of a multi-ward nurse call network covering 80+ patient beds, ICU suites, and emergency treatment rooms.",
    highlights: [
      "Instant 2-way audio communication between patient beds and duty stations",
      "Waterproof emergency pull cords installed in all patient washrooms",
      "Tri-color dome indicators for quick visual ward triage",
      "Complete medical staff operational training delivered upon commissioning",
    ],
    tags: ["Healthcare", "Nurse Call", "Patient Safety", "Hospital Systems"],
  },
  {
    id: "corporate-smart-boardroom",
    title: "Corporate HQ Smart Boardroom & Video Conferencing",
    category: "Communications",
    clientSector: "Corporate & NGO Headquarters",
    scope:
      "Complete AV modernization of executive boardrooms with acoustic optimization, 4K PTZ tracking cameras, and beamforming ceiling microphones.",
    highlights: [
      "One-touch start for hybrid Microsoft Teams & Zoom meetings",
      "Invisible ceiling microphone arrays with automatic echo and noise cancellation",
      "Dual 85-inch interactive displays with wireless screen sharing",
      "Custom acoustic wall treatment for optimal voice clarity",
    ],
    tags: ["Smart Boardroom", "Video Conferencing", "Acoustics", "Hybrid Meetings"],
  },
];

export const WHY_NAEL_DATA = [
  {
    id: "certified-standards",
    title: "Certified Safety & Standards Compliance",
    description: "Every installation adheres strictly to international safety standards (NFPA, EN54, ISO, TIA-942) and Ethiopian municipal civil defense codes.",
    iconName: "ShieldCheck",
  },
  {
    id: "turnkey-execution",
    title: "Turnkey Design, Cabling & Maintenance",
    description: "From initial site survey and architectural design to Fluke certification and 24/7 preventative maintenance contracts, we handle the complete lifecycle.",
    iconName: "Zap",
  },
  {
    id: "local-engineering-desk",
    title: "Rapid Addis Ababa Engineering Desk",
    description: "Headquartered at Awash Building in Addis Ababa with dedicated local technicians ready to deliver swift on-site support and spare parts replacement.",
    iconName: "Clock",
  },
  {
    id: "multi-domain-integration",
    title: "Unified Multi-Domain Integration",
    description: "We unify physical security, data networking, fire safety, and enterprise telephony into a single synchronized management ecosystem.",
    iconName: "Cpu",
  },
];
