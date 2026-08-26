export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  description: string;
  features: string[];
  tags: string[];
  iconName: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  category: string;
  industry: string;
  excerpt: string;
  description: string;
  deliverables: string[];
  tags: string[];
  iconName: string;
}

export interface ProductItem {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  description: string;
  specs: string[];
  tags: string[];
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  clientSector: string;
  scope: string;
  highlights: string[];
  tags: string[];
}

export const SITE_METADATA = {
  name: "Nael Technology Solutions",
  shortName: "Nael Tech",
  tagline: "Enterprise Security, Scalable Networks & Mission-Critical Infrastructure",
  description:
    "Nael Technology Solutions is Ethiopia's premier technology systems integrator, delivering professional CCTV surveillance, fire alarm systems, access control, data centers, structured cabling, and enterprise conferencing solutions.",
  contact: {
    phones: [
      { number: "+251 911 438 942", label: "Customer Support" },
      { number: "+251 916 841 993", label: "Sales & Inquiries" },
      { number: "+251 934 871 526", label: "Technical Sales" },
    ],
    email: "info@naeltechnologies.com",
    secondaryEmail: "dejenkebede45@gmail.com",
    address: "Awash Building 1st Floor, Addis Ababa, Ethiopia",
    workingHours: "Monday – Friday: 9:00 AM – 6:00 PM",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.569960509924!2d38.7357569!3d9.0116579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b872d66661e47%3A0x3146c2e98a641958!2sNael%20technology%20solution!5e0!3m2!1sen!2set!4v1758715493075!5m2!1sen!2set",
  },
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Products", href: "#products" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const HERO_SLIDES = [
  {
    badge: "Enterprise Security & Safety",
    headline: "Professional CCTV & Fire Alarm Systems",
    subheadline:
      "Secure your enterprise facilities and assets with high-definition surveillance, certified fire alarm detection, and intelligent biometric access control across Ethiopia.",
    primaryCta: { label: "Explore Security Services", href: "#services" },
    secondaryCta: { label: "Request a Consultation", href: "#contact" },
  },
  {
    badge: "Mission-Critical IT Infrastructure",
    headline: "Reliable Structured Cabling & Data Centers",
    subheadline:
      "Design, implement, and certify high-speed fiber optic backbones, structured cabling networks, and scalable server room infrastructures tailored for business continuity.",
    primaryCta: { label: "View Infrastructure Solutions", href: "#solutions" },
    secondaryCta: { label: "Contact Engineering Team", href: "#contact" },
  },
  {
    badge: "Unified Communications",
    headline: "Executive Conferencing & Call Center Systems",
    subheadline:
      "Empower seamless organizational collaboration with crystal-clear audio/video conferencing, modern IP telephony PABX, and customer contact center architectures.",
    primaryCta: { label: "Discover Collaboration Tools", href: "#products" },
    secondaryCta: { label: "Get a Quick Quote", href: "#contact" },
  },
];

export const ABOUT_DATA = {
  heading: "About Nael Technology Solutions",
  subtitle: "Delivering Engineering Excellence Across Ethiopia",
  description:
    "Nael Technology Solutions is a premier technology solutions provider in Ethiopia, specializing in commercial security systems, fire safety engineering, and enterprise IT infrastructure. We deliver reliable, innovative, and scalable solutions that meet the exacting security and connectivity demands of banks, corporate institutions, hospitals, and industrial facilities.",
  vision:
    "To be the most trusted and innovative technology solutions provider in Ethiopia, renowned for uncompromised engineering quality, reliability, and exceptional customer service.",
  mission:
    "To protect lives, secure assets, and empower Ethiopian organizations through world-class electronic security, resilient telecommunications, and cutting-edge IT infrastructure delivered on time and with absolute integrity.",
  pillars: [
    {
      title: "Strategic Focus",
      description:
        "Providing tailored, high-grade security and IT infrastructure engineered specifically to meet your facility's operational and regulatory requirements.",
      icon: "ShieldCheck",
    },
    {
      title: "Collaborative Partnership",
      description:
        "Ensuring seamless end-to-end execution with professional installation, preventative maintenance, training, and 24/7 technical support.",
      icon: "Handshake",
    },
    {
      title: "Innovation & Timely Delivery",
      description:
        "Continuously adopting modern, compliant technologies to deliver turnkey projects within budget and on schedule.",
      icon: "Zap",
    },
  ],
  stats: [
    { value: "100%", label: "Safety & Standards Compliant" },
    { value: "24/7", label: "Dedicated Technical Support" },
    { value: "Turnkey", label: "Design, Install & Maintenance" },
    { value: "Addis Ababa", label: "Nationwide Deployment Reach" },
  ],
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "cctv-surveillance",
    title: "CCTV & Video Surveillance Systems",
    category: "Physical Security",
    excerpt:
      "Enterprise-grade HD and IP surveillance cameras with remote smartphone monitoring and night vision.",
    description:
      "We engineer, install, and support high-definition IP video surveillance systems for corporate offices, commercial complexes, banks, and industrial facilities. Our setups feature high-capacity NVRs, intelligent motion alerts, PTZ cameras, night vision, and encrypted remote access.",
    features: [
      "Ultra-HD 4K & IP Network Cameras",
      "Real-time remote viewing on iOS & Android",
      "Motion detection, perimeter alerts & AI analytics",
      "Infrared & low-light night vision",
      "Scalable on-premise NVR & storage backup",
    ],
    tags: ["CCTV", "IP Surveillance", "Security Cameras", "Remote Monitoring"],
    iconName: "Camera",
  },
  {
    id: "fire-alarm-safety",
    title: "Fire Alarm & Safety Detection",
    category: "Safety Engineering",
    excerpt:
      "Certified fire alarm detection, addressable control panels, and emergency alert systems.",
    description:
      "Protect your facilities and ensure regulatory compliance with certified fire alarm and detection installations. We provide early smoke and heat detection, multi-zone addressable panels, manual call points, and emergency notification systems.",
    features: [
      "Addressable smoke, heat, and flame detectors",
      "Centralized fire alarm control panels & annunciators",
      "Audible sirens, strobe lights & emergency evacuation alerts",
      "24/7 system monitoring and BMS integration",
      "Regular testing, certification & preventative maintenance",
    ],
    tags: ["Fire Alarm", "Smoke Detection", "Life Safety", "Ethiopia Fire Safety"],
    iconName: "Flame",
  },
  {
    id: "access-control-biometrics",
    title: "Access Control & Time Attendance",
    category: "Physical Security",
    excerpt:
      "Regulate entry points using biometrics, RFID smart cards, and integrated time attendance reporting.",
    description:
      "Secure sensitive zones and track personnel access with our advanced access control systems. We design solutions utilizing biometric fingerprint/facial recognition, contactless RFID smart cards, turnstiles, and automated time-attendance software.",
    features: [
      "Biometric fingerprint, facial recognition & smart card readers",
      "Magnetic locks, electric strikes & turnstile controllers",
      "Automated time and attendance audit reports",
      "Visitor management and restricted zone authorization",
      "Seamless integration with CCTV and fire alarm override",
    ],
    tags: ["Access Control", "Biometric Security", "Time Attendance", "Smart Entry"],
    iconName: "Lock",
  },
  {
    id: "structured-cabling",
    title: "Structured Cabling & Fiber Optics",
    category: "Network Infrastructure",
    excerpt:
      "Certified Cat6/Cat6A copper and high-speed optical fiber cabling infrastructure.",
    description:
      "Build a resilient, future-ready network foundation. We handle complete structured cabling projects including Cat6/Cat6A copper wiring, single-mode/multi-mode fiber optics, server racks, patch panels, cable management, and Fluke certification.",
    features: [
      "Cat6, Cat6A, and Cat7 structured copper cabling",
      "Single-mode and multi-mode optical fiber splicing & termination",
      "Server rack installation, cable trays & patch management",
      "Fluke network testing and performance certification",
      "Network infrastructure expansion & overhaul",
    ],
    tags: ["Structured Cabling", "Fiber Optic", "Network Racks", "Fluke Tested"],
    iconName: "Cable",
  },
  {
    id: "data-center-infrastructure",
    title: "Data Center Infrastructure",
    category: "Network Infrastructure",
    excerpt:
      "Turnkey server room design, power conditioning, cooling, and environmental monitoring.",
    description:
      "We design and build mission-critical data center environments built for high availability. Our services cover server rack architecture, precision cooling, uninterruptible power supply (UPS), cable containment, and environmental monitoring.",
    features: [
      "Server and storage rack architecture layout",
      "Precision cooling and climate control management",
      "UPS power backup and power distribution units (PDUs)",
      "Environmental monitoring (temperature, humidity, water leak)",
      "Physical data center security and biometric access",
    ],
    tags: ["Data Center", "Server Room", "UPS Power", "Infrastructure"],
    iconName: "Server",
  },
  {
    id: "wireless-networking",
    title: "Enterprise Wireless & Switching",
    category: "Network Infrastructure",
    excerpt:
      "High-density Wi-Fi networks, enterprise switching, and robust perimeter cybersecurity.",
    description:
      "Deploy robust, seamless wireless connectivity for offices, campuses, hotels, and healthcare facilities. We deliver site heat-mapping, enterprise Wi-Fi 6 access points, managed switching, VLAN segmentation, and firewall security.",
    features: [
      "High-density enterprise Wi-Fi 6 access points",
      "Managed network switches & VLAN segmentation",
      "Captive guest portals and secure enterprise authentication",
      "RF site survey and signal coverage optimization",
      "Network troubleshooting and proactive monitoring",
    ],
    tags: ["Wi-Fi", "Enterprise Wireless", "Managed Switches", "Network Security"],
    iconName: "Wifi",
  },
  {
    id: "video-conferencing",
    title: "Audio & Video Conferencing",
    category: "Communications",
    excerpt:
      "Crystal-clear video conferencing, meeting room acoustics, and smart boardrooms.",
    description:
      "Upgrade your meeting rooms with professional audio and video conferencing technology. We deliver HD PTZ conference cameras, beamforming microphone arrays, digital sound processors, and one-touch integration with Teams, Zoom, and Google Meet.",
    features: [
      "4K Ultra-HD PTZ conference cameras with auto-framing",
      "Beamforming ceiling and tabletop microphone arrays",
      "High-fidelity speakers and room acoustic calibration",
      "Touch control consoles compatible with Teams & Zoom",
      "Wireless presentation and screen sharing hardware",
    ],
    tags: ["Video Conferencing", "Smart Boardroom", "Meeting Room Audio", "Zoom/Teams"],
    iconName: "Video",
  },
  {
    id: "telephony-call-center",
    title: "Unified Telephony & Call Centers",
    category: "Communications",
    excerpt:
      "Scalable IP-PABX telephone systems, multi-line VoIP, and interactive IVR call center solutions.",
    description:
      "Streamline internal communication and customer service with our unified telephony solutions. We deploy IP-PABX phone systems, SIP trunking, interactive voice response (IVR), call recording, and multi-channel call center management software.",
    features: [
      "IP-PABX telephone systems with multi-extension routing",
      "VoIP and SIP trunk configuration",
      "Interactive Voice Response (IVR) & automated queueing",
      "Call recording and agent performance analytics",
      "CRM and helpdesk integration",
    ],
    tags: ["IP-PABX", "Call Center", "VoIP", "Telephony"],
    iconName: "PhoneCall",
  },
];

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: "banking-security-solution",
    title: "Banking & Financial Facility Security",
    category: "Financial Sector",
    industry: "Banks, Microfinances & Insurance",
    excerpt:
      "Multi-layered physical security, vault surveillance, and audited biometric access control.",
    description:
      "A specialized security suite designed to meet stringent financial regulatory standards. Combines high-resolution vault and teller surveillance, tamper-proof alarm systems, dual-authentication biometric vault access, and centralized multi-branch monitoring.",
    deliverables: [
      "High-definition teller & vault camera systems",
      "Dual-custody biometric entry for cash & server rooms",
      "Silent panic buttons & instant emergency alarms",
      "Multi-branch centralized surveillance management",
      "24/7 video archiving with failover redundancy",
    ],
    tags: ["Banking Security", "Vault Protection", "Financial Compliance", "Multi-Branch"],
    iconName: "Landmark",
  },
  {
    id: "healthcare-nurse-call",
    title: "Hospital Nurse Call & Healthcare Systems",
    category: "Healthcare Sector",
    industry: "Hospitals, Clinics & Medical Centers",
    excerpt:
      "Rapid patient-to-nurse emergency communication and smart medical facility alerts.",
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
    iconName: "Activity",
  },
  {
    id: "smart-boardroom-collaboration",
    title: "Corporate Smart Boardroom & Collaboration",
    category: "Corporate Sector",
    industry: "Enterprises, NGOs & Government",
    excerpt:
      "Turnkey meeting room audio/video architecture, wireless screen sharing, and acoustic optimization.",
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
    iconName: "Users",
  },
  {
    id: "datacenter-turnkey-infrastructure",
    title: "Mission-Critical Data Center Turnkey Solution",
    category: "IT & Telecommunications",
    industry: "Enterprise IT & Telecom",
    excerpt:
      "End-to-end server room physical infrastructure, precision cooling, power backup, and environmental safety.",
    description:
      "Full turnkey deployment of enterprise server rooms and data centers, encompassing structural cable trays, server cabinets, precision cooling, FM-200/Novec fire suppression, and redundant UPS power distribution.",
    deliverables: [
      "High-density server racks & cable management",
      "Modular UPS power systems with automatic generator transfer",
      "In-row / perimeter precision air conditioning (CRAC)",
      "Clean-agent fire suppression (FM-200 / Gas suppression)",
      "Environmental monitoring and alert notifications",
    ],
    tags: ["Data Center", "Clean Agent Fire Suppression", "Modular UPS", "High Availability"],
    iconName: "Cpu",
  },
  {
    id: "industrial-perimeter-protection",
    title: "Industrial & Logistics Perimeter Protection",
    category: "Industrial Sector",
    industry: "Factories, Warehouses & Compounds",
    excerpt:
      "Long-range perimeter surveillance, thermal detection, and integrated fire suppression.",
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
  },
  {
    id: "campus-unified-voice-data",
    title: "Integrated Campus Voice & High-Speed Data",
    category: "Institutional Sector",
    industry: "Universities, Hotels & Office Complexes",
    excerpt:
      "Unified fiber backbone, high-density Wi-Fi, and multi-extension IP telephony.",
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
  },
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "commercial-cctv-cameras",
    title: "Commercial IP & HD CCTV Cameras",
    category: "Security Equipment",
    excerpt:
      "High-definition dome, bullet, and PTZ cameras with smart IR and AI motion detection.",
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
    title: "Biometric & RFID Access Controllers",
    category: "Access Hardware",
    excerpt:
      "Multi-modal biometric terminals supporting fingerprint, facial recognition, and RFID cards.",
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
    title: "Fire Alarm Control Panels & Detectors",
    category: "Fire Safety Hardware",
    excerpt:
      "Addressable and conventional fire alarm panels, optical smoke detectors, and manual call points.",
    description:
      "Certified life-safety equipment engineered for fast detection of smoke, extreme heat, and carbon monoxide. Compatible with addressable loop architectures and centralized monitoring annunciators.",
    specs: [
      "Panel Capacity: 1 to 8 Loops (Up to 2,000 devices)",
      "Detectors: Photoelectric Smoke, Rate-of-Rise Heat",
      "Certifications: EN54 / UL Compliant",
      "Notification: Multi-tone sounders and high-visibility strobes",
      "Battery Backup: Integrated 24V standby power supply",
    ],
    tags: ["Fire Alarm Panel", "Smoke Detector", "EN54 Certified", "Life Safety"],
    iconName: "Flame",
  },
  {
    id: "conference-cameras-speakerphones",
    title: "Enterprise Conference Cameras & Audio",
    category: "Conferencing Equipment",
    excerpt:
      "4K video conference soundbars and PTZ cameras with beamforming microphone arrays.",
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
    title: "IP-PABX & Business Telephony Servers",
    category: "Telephony Hardware",
    excerpt:
      "Hybrid and IP-PABX communication servers with multi-line routing and voicemail-to-email.",
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
    title: "Fiber Optic Cables, Racks & Enclosures",
    category: "Networking Equipment",
    excerpt:
      "Heavy-duty server racks, outdoor armored fiber cables, and modular patch panels.",
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
    title: "Hospital Nurse Call Bedside Stations",
    category: "Healthcare Hardware",
    excerpt:
      "Antimicrobial patient handset cords, emergency pull stations, and master duty consoles.",
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
    clientSector: "Banking & Financial Services",
    scope:
      "Turnkey deployment of IP video surveillance, vault biometric entry, and silent intrusion alarms across branch networks in Addis Ababa.",
    highlights: [
      "Over 120+ 4K IP cameras with 90-day redundant video backup",
      "Dual-custody biometric locks installed on main cash vaults",
      "Centralized monitoring feed connected to headquarters security operations",
      "Zero downtime during branch operation hours",
    ],
    tags: ["Banking", "CCTV", "Biometrics", "Centralized Monitoring"],
  },
  {
    id: "commercial-tower-fire-safety",
    title: "Commercial High-Rise Fire Alarm & Suppression System",
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
