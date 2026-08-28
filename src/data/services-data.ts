// Comprehensive Services Data Model for Nael Technology Solutions

export interface ServiceDetail {
  slug: string;
  title: string;
  category: "Security & Safety" | "Network & Infrastructure" | "Communication & Collaboration" | "Healthcare Technology";
  badge: string;
  tagline: string;
  image: string;
  iconName: string;
  overview: string;
  problemItSolves: {
    title: string;
    description: string;
    points: string[];
  };
  whatNaelProvides: {
    title: string;
    description: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  capabilities: {
    title: string;
    description: string;
    tags: string[];
  }[];
  applications: {
    facility: string;
    description: string;
    icon: string;
  }[];
  relatedServices: string[]; // slugs
  relatedSolutions: string[]; // solution IDs
}

export const DETAILED_SERVICES_DATA: ServiceDetail[] = [
  {
    slug: "cctv",
    title: "CCTV & Video Surveillance Systems",
    category: "Security & Safety",
    badge: "Enterprise Physical Security & AI Vision",
    tagline: "High-definition IP surveillance, smart AI perimeter detection, and 24/7 centralized video monitoring for Ethiopian facilities.",
    image: "/images/services/cctv.jpg",
    iconName: "Camera",
    overview:
      "Nael Technology Solutions designs, installs, and maintains enterprise-grade IP video surveillance systems for corporate headquarters, financial institutions, industrial warehouses, and commercial complexes in Addis Ababa and across Ethiopia. We handle the entire engineering lifecycle—from initial optical field-of-view surveys and cable routing to NVR server configuration, encrypted mobile viewing, and SLA-backed preventative maintenance.",
    problemItSolves: {
      title: "Addressing Blind Spots & Operational Vulnerabilities",
      description:
        "Commercial and industrial facilities frequently struggle with unmonitored blind spots, low-resolution analog footage unusable in forensic investigations, and lack of remote visibility across multi-branch locations.",
      points: [
        "Unmonitored facility perimeters and vulnerable stockrooms",
        "Grainy night-time recordings that fail to capture identifiable facial features or license plates",
        "Disjointed branch locations requiring physical on-site video retrieval",
        "Frequent system downtime due to poor cabling and power surges",
      ],
    },
    whatNaelProvides: {
      title: "Our Turnkey Installation & Engineering Lifecycle",
      description:
        "We do not simply sell cameras; our certified engineering team delivers complete, resilient surveillance ecosystems built to international standards.",
      steps: [
        {
          number: "01",
          title: "Optical Site Survey & Heat-Mapping",
          description: "We analyze site architectural blueprints, lighting conditions, and critical choke-points to select optimal focal lengths and camera angles.",
        },
        {
          number: "02",
          title: "Structured Cabling & Surge Protection",
          description: "Deploying certified outdoor Cat6A shielded cabling, industrial PoE switches, and voltage surge suppressors to guarantee continuous uptime.",
        },
        {
          number: "03",
          title: "NVR Storage & AI Analytics Configuration",
          description: "Configuring high-capacity NVR servers with RAID video redundancy, line-crossing detection, motion alerts, and scheduled archiving.",
        },
        {
          number: "04",
          title: "Secure Client Viewing & Handover Training",
          description: "Setting up encrypted multi-device viewing on desktop control stations, iOS, and Android, followed by staff operational training.",
        },
      ],
    },
    capabilities: [
      {
        title: "Ultra-HD 4K & IP Network Cameras",
        description: "Fixed dome, bullet, and 360-degree PTZ cameras with optical zoom, smart infrared night vision up to 80 meters, and vandal-proof IK10 housings.",
        tags: ["4K Resolution", "PTZ Tracking", "Smart IR 80m", "IK10 Vandal-Proof"],
      },
      {
        title: "Centralized Multi-Branch Monitoring",
        description: "Unified video management software (VMS) enabling headquarters security teams to monitor dozens of remote branches simultaneously.",
        tags: ["Unified VMS", "Multi-Branch Feeds", "Bandwidth Optimization"],
      },
      {
        title: "AI Perimeter Intrusion Analytics",
        description: "Intelligent video algorithms that detect unauthorized perimeter crossing, loitering, and object removal, sending instant alerts to security desks.",
        tags: ["Line Crossing", "Loitering Detection", "Instant Push Alerts"],
      },
      {
        title: "Redundant Long-Term Storage Architecture",
        description: "Scalable enterprise NVR and NAS storage solutions configured with RAID failover to satisfy 30, 60, or 90-day compliance archiving requirements.",
        tags: ["RAID Redundancy", "90-Day Archiving", "H.265+ Compression"],
      },
    ],
    applications: [
      { facility: "Banking & Financial Facilities", description: "Teller surveillance, vault security, ATM vestibule monitoring, and audited branch feeds.", icon: "Landmark" },
      { facility: "Commercial High-Rise Towers", description: "Lobby entrance monitoring, elevator coverage, underground parking, and perimeter security.", icon: "Building" },
      { facility: "Industrial & Logistics Warehouses", description: "Loading dock surveillance, high-bay inventory monitoring, and perimeter intrusion detection.", icon: "ShieldAlert" },
      { facility: "Educational & Healthcare Campuses", description: "Campus-wide outdoor surveillance, entry gate monitoring, and emergency response feeds.", icon: "Users" },
    ],
    relatedServices: ["access-control", "fire-alarm", "structured-cabling"],
    relatedSolutions: ["banking-facility-security", "industrial-perimeter-protection"],
  },
  {
    slug: "access-control",
    title: "Access Control & Time Attendance",
    category: "Security & Safety",
    badge: "Biometrics, Smart Credentials & Perimeter Entry",
    tagline: "Regulate personnel entry, secure high-risk zones, and automate staff attendance audits across your Ethiopian facilities.",
    image: "/images/services/access-control.jpg",
    iconName: "Lock",
    overview:
      "Nael Technology Solutions delivers turnkey electronic access control and automated workforce time-attendance systems. From biometric facial recognition terminals and RFID proximity cards to motorized turnstiles, electromagnetic locks, and visitor management software, we ensure that only authorized personnel enter your critical infrastructure while maintaining comprehensive digital audit logs.",
    problemItSolves: {
      title: "Eliminating Key Duplication & Unaudited Entry",
      description:
        "Traditional mechanical keys and paper visitor logbooks create severe security gaps, unauthorized key copying, 'buddy-punching' attendance fraud, and zero real-time auditability in high-risk zones.",
      points: [
        "Unrestricted access to server rooms, executive offices, and cash vaults",
        "Time-consuming and inaccurate manual staff attendance tracking",
        "Inability to immediately revoke access for former employees or lost credentials",
        "Lack of integration with fire alarm systems during emergency evacuations",
      ],
    },
    whatNaelProvides: {
      title: "Turnkey Access Architecture & Deployment",
      description:
        "We implement fully integrated, failsafe access systems with dedicated power backup and emergency fire overrides.",
      steps: [
        {
          number: "01",
          title: "Facility Door Audit & Zoning",
          description: "We categorize entry points by security level—from public reception turnstiles to dual-authentication server room vaults.",
        },
        {
          number: "02",
          title: "Hardware Mounting & Maglock Wiring",
          description: "Installing heavy-duty magnetic locks, electric strikes, door closers, and request-to-exit buttons with concealed wiring.",
        },
        {
          number: "03",
          title: "Controller & Reader Configuration",
          description: "Deploying multi-door TCP/IP controllers, biometric face/fingerprint terminals, and encrypted RFID card readers.",
        },
        {
          number: "04",
          title: "Software Deployment & Fire Alarm Interlock",
          description: "Configuring attendance reporting software and integrating automatic unlock triggers upon fire alarm activation.",
        },
      ],
    },
    capabilities: [
      {
        title: "Multi-Modal Biometric Terminals",
        description: "Touchless anti-spoofing facial recognition with sub-second verification speed, high-precision optical fingerprint sensors, and encrypted PIN keypads.",
        tags: ["Face Recognition", "Fingerprint Scanner", "Anti-Spoofing", "PIN Access"],
      },
      {
        title: "Encrypted Smart RFID Credentials",
        description: "High-security contactless smart cards and keyfobs with encrypted sectors preventing card cloning and unauthorized duplication.",
        tags: ["Contactless RFID", "Encrypted Credentials", "Keyfob Support"],
      },
      {
        title: "Automated Time Attendance Reporting",
        description: "Centralized attendance management software generating automated shift logs, overtime tracking, and payroll export reports.",
        tags: ["Shift Management", "Overtime Tracking", "Payroll Export"],
      },
      {
        title: "Emergency Fire Interlock & Failsafe",
        description: "Hardwired integration with fire alarm control panels to automatically release all magnetic locks in an emergency, ensuring safe evacuation.",
        tags: ["Fire Interlock", "Failsafe Maglocks", "Emergency Break-Glass"],
      },
    ],
    applications: [
      { facility: "Corporate Office Suites", description: "Main entry doors, department zoning, executive suites, and employee time-attendance tracking.", icon: "Building" },
      { facility: "Server Rooms & Data Centers", description: "Dual-custody biometric authentication and 24/7 digital access logging for IT compliance.", icon: "Server" },
      { facility: "Financial & Vault Areas", description: "Two-person authentication rules, interlocked airlock doors, and silent anti-tailgating alarms.", icon: "Landmark" },
      { facility: "Industrial Plants & Gates", description: "Pedestrian optical turnstiles, RFID boom gates for vehicles, and contractor visitor badging.", icon: "ShieldCheck" },
    ],
    relatedServices: ["cctv", "fire-alarm", "data-center"],
    relatedSolutions: ["banking-facility-security", "industrial-perimeter-protection"],
  },
  {
    slug: "fire-alarm",
    title: "Fire Alarm & Detection Systems",
    category: "Security & Safety",
    badge: "Certified Life Safety & Emergency Notification",
    tagline: "Certified addressable fire alarm engineering, multi-zone smoke/heat detection, and automated emergency notification for Ethiopian buildings.",
    image: "/images/services/fire-alarm.jpg",
    iconName: "Flame",
    overview:
      "Nael Technology Solutions engineers, installs, tests, and certifies commercial fire alarm and detection systems. Complying with international safety standards (NFPA / EN54) and Ethiopian civil defense codes, our solutions integrate multi-loop addressable control panels, optical smoke sensors, rate-of-rise heat detectors, manual call points, and synchronized audio-visual evacuation alarms.",
    problemItSolves: {
      title: "Mitigating Life-Safety Hazards & Structural Loss",
      description:
        "Fires in commercial buildings and data centers can cause devastating loss of life, destroyed IT assets, and permanent operational shutdown if detection and alerting are delayed.",
      points: [
        "Delayed fire detection allowing localized sparks or smoldering to become uncontrollable blazes",
        "Non-compliant conventional systems that fail to identify the exact room or floor of the incident",
        "Lack of emergency notification integration across multi-story commercial towers",
        "Absence of regular certification, battery maintenance, and sensor sensitivity testing",
      ],
    },
    whatNaelProvides: {
      title: "Certified Life-Safety Engineering Process",
      description:
        "Our specialized safety technicians follow strict design, installation, and commissioning standards for every building project.",
      steps: [
        {
          number: "01",
          title: "Fire Hazard Assessment & Zone Layout",
          description: "We review building floor plans and categorize zones based on occupancy, ceiling heights, airflow, and fire load risks.",
        },
        {
          number: "02",
          title: "Fire-Rated Cabling & Conduit Routing",
          description: "Deploying fire-resistant shielded loop cabling capable of maintaining circuit integrity under extreme heat conditions.",
        },
        {
          number: "03",
          title: "Sensor & Control Panel Installation",
          description: "Mounting addressable optical smoke, thermal heat, and duct detectors connected to multi-loop central annunciator panels.",
        },
        {
          number: "04",
          title: "Audible Strobe Testing & BMS Commissioning",
          description: "Conducting sound pressure dB tests for evacuation sirens, strobes, HVAC shut-off interlocks, and emergency certification.",
        },
      ],
    },
    capabilities: [
      {
        title: "Addressable Multi-Loop Control Panels",
        description: "Intelligent panels that display the precise device number, room location, and smoke concentration level in real time.",
        tags: ["Addressable Panels", "Multi-Loop Architecture", "LCD Annunciators"],
      },
      {
        title: "Optical Smoke & Thermal Heat Detection",
        description: "Advanced photoelectric smoke detectors with drift compensation and rate-of-rise thermal sensors engineered to minimize false alarms.",
        tags: ["Photoelectric Smoke", "Rate-of-Rise Heat", "Drift Compensation"],
      },
      {
        title: "High-Decibel Evacuation Sounders & Strobes",
        description: "Synchronized multi-tone horns and high-candela xenon/LED strobe lights ensuring unambiguous evacuation alerting across entire facilities.",
        tags: ["Synchronized Strobes", "Multi-Tone Sounders", "Voice Evacuation Ready"],
      },
      {
        title: "HVAC & Access Control Safety Interlocks",
        description: "Automated relay triggers that immediately shut down air handling units to prevent smoke spread and release all access control doors.",
        tags: ["HVAC Damper Interlock", "Door Release Relays", "BMS Integration"],
      },
    ],
    applications: [
      { facility: "Commercial Towers & Offices", description: "Multi-floor loop addressable fire detection with localized annunciators and voice alarm.", icon: "Building" },
      { facility: "Data Centers & Server Rooms", description: "High-sensitivity smoke detection integrated with clean-agent automated gas suppression.", icon: "Server" },
      { facility: "Hospitals & Medical Centers", description: "Zoned notification designed to alert medical staff without inducing panic in patient wards.", icon: "HeartPulse" },
      { facility: "Hotels & Hospitality Complexes", description: "In-room sounder bases, corridor manual pull stations, and centralized command consoles.", icon: "Users" },
    ],
    relatedServices: ["cctv", "data-center", "access-control"],
    relatedSolutions: ["datacenter-turnkey-infrastructure", "industrial-perimeter-protection"],
  },
  {
    slug: "data-center",
    title: "Data Center Infrastructure & Power",
    category: "Network & Infrastructure",
    badge: "High-Availability Server Rooms & Critical Power",
    tagline: "Turnkey server room design, precision CRAC cooling, modular UPS power conditioning, and environmental monitoring for Ethiopian enterprises.",
    image: "/images/services/data-center.jpg",
    iconName: "Server",
    overview:
      "Nael Technology Solutions delivers turnkey data center infrastructure and enterprise server room construction. We engineer high-density server rack architectures, precision computer room air conditioning (CRAC), modular uninterruptible power supplies (UPS), power distribution units (PDUs), clean-agent fire suppression, and real-time environmental telemetry to guarantee 99.98%+ IT availability.",
    problemItSolves: {
      title: "Preventing Critical Downtime & Hardware Thermal Failure",
      description:
        "Unreliable commercial power grids, inadequate cooling, and haphazard cabling create constant risks of server overheating, sudden equipment damage, and crippling system outages.",
      points: [
        "Uncontrolled server room temperatures causing thermal throttling and premature server failure",
        "Frequent electrical surges, sags, and blackout interruptions disrupting business operations",
        "Disorganized server racks with choked airflow and tangled power/data cables",
        "Lack of environmental leak, temperature, and humidity sensors triggering silent disasters",
      ],
    },
    whatNaelProvides: {
      title: "Turnkey Data Center Engineering Lifecycle",
      description:
        "From raw architectural space to fully commissioned, certified server facilities, we manage every engineering discipline.",
      steps: [
        {
          number: "01",
          title: "Thermal & Electrical Load Assessment",
          description: "Calculating exact kilowatt heat dissipation, future server expansion capacity, and generator/UPS runtime specifications.",
        },
        {
          number: "02",
          title: "Precision Cooling & Rack Architecture",
          description: "Installing 42U enclosed server cabinets with hot/cold aisle containment and in-row precision CRAC climate control units.",
        },
        {
          number: "03",
          title: "UPS Power Conditioning & Dual PDU Paths",
          description: "Deploying modular online double-conversion UPS systems with automatic transfer switches (ATS) and monitored rack PDUs.",
        },
        {
          number: "04",
          title: "Environmental Telemetry & Clean-Agent Suppression",
          description: "Integrating multi-sensor temperature/humidity/water leak probes and FM-200 / Novec clean-agent gas fire suppression.",
        },
      ],
    },
    capabilities: [
      {
        title: "High-Density Server Cabinets & Cable Trays",
        description: "Standard 19-inch 42U server racks with perforated front/rear mesh doors, integrated vertical cable managers, and overhead ladder racks.",
        tags: ["42U Enclosures", "Overhead Cable Trays", "Perforated Mesh Doors"],
      },
      {
        title: "Modular Online Double-Conversion UPS",
        description: "True online double-conversion UPS systems offering N+1 power redundancy, zero transfer time, and scalable battery backup banks.",
        tags: ["Online Double-Conversion", "N+1 Redundancy", "ATS Integration"],
      },
      {
        title: "In-Row & Perimeter Precision Cooling (CRAC)",
        description: "Continuous 24/7 temperature and humidity management units engineered specifically for high-heat electronic server room environments.",
        tags: ["Precision CRAC", "Hot/Cold Aisle", "Humidity Control"],
      },
      {
        title: "Environmental Telemetry & Remote Alerting",
        description: "Network-connected monitoring probes tracking ambient room temperature, humidity, water leaks, smoke, and unauthorized door access.",
        tags: ["Water Leak Probes", "Thermal Telemetry", "SNMP / Email Alerts"],
      },
    ],
    applications: [
      { facility: "Financial & Banking Headquarters", description: "Mission-critical core banking server rooms requiring high-availability tier standards.", icon: "Landmark" },
      { facility: "Telecommunications & ISP Hubs", description: "High-density fiber patch rooms and carrier-grade equipment server facilities.", icon: "Network" },
      { facility: "Corporate Enterprises & NGOs", description: "On-premise private cloud server infrastructure and centralized backup repositories.", icon: "Building" },
      { facility: "Government & Healthcare IT", description: "Secure, compliant data storage rooms with strict physical and environmental controls.", icon: "Cpu" },
    ],
    relatedServices: ["structured-cabling", "fire-alarm", "access-control"],
    relatedSolutions: ["datacenter-turnkey-infrastructure", "banking-facility-security"],
  },
  {
    slug: "structured-cabling",
    title: "Structured Cabling & Optical Fiber",
    category: "Network & Infrastructure",
    badge: "Certified Copper & Fiber Optic Backbones",
    tagline: "Certified Cat6/Cat6A structured copper networks, single/multi-mode optical fiber splicing, and Fluke performance certification.",
    image: "/images/services/structured-cabling.jpg",
    iconName: "Cable",
    overview:
      "Nael Technology Solutions engineers, implements, and certifies structured network cabling infrastructure. We specialize in high-speed Cat6, Cat6A, and Cat7 copper cabling networks, single-mode and multi-mode optical fiber backbones, patch panel management, server rack termination, and Fluke DSX-8000 performance certification for enterprise facilities across Ethiopia.",
    problemItSolves: {
      title: "Eliminating Network Bottlenecks & Cable Clutter",
      description:
        "Uncertified cabling, tangled server cabinets, and subpar copper terminations cause packet drops, slow data throughput, interference crosstalk, and painful network troubleshooting.",
      points: [
        "Unlabeled, disorganized patch cables that make moves and changes a nightmare",
        "Interference, attenuation, and slow throughput capping gigabit speeds",
        "Lack of high-bandwidth fiber optic connections between multi-story floors or campus blocks",
        "Absence of certified Fluke test reports verifying copper and fiber transmission compliance",
      ],
    },
    whatNaelProvides: {
      title: "Fluke-Certified Cabling Engineering Lifecycle",
      description:
        "Every cable run is systematically installed, labeled, organized, and digitally tested to ensure lifetime reliability.",
      steps: [
        {
          number: "01",
          title: "Network Topology & Drop Planning",
          description: "We map workstation data drops, IP camera runs, Wi-Fi access point locations, and inter-floor riser routes.",
        },
        {
          number: "02",
          title: "Cable Containment & Trunking",
          description: "Installing PVC conduits, metal trunking, perforated cable trays, and floor distribution boxes for clean concealment.",
        },
        {
          number: "03",
          title: "Termination & Fusion Splicing",
          description: "Punching down Cat6A keystone jacks, modular patch panels, and fusion splicing single/multi-mode fiber pigtails.",
        },
        {
          number: "04",
          title: "Fluke Testing & Comprehensive Labeling",
          description: "Testing every drop with Fluke DSX cable analyzers and delivering bound pass test reports and detailed CAD network maps.",
        },
      ],
    },
    capabilities: [
      {
        title: "Cat6 & Cat6A Shielded Structured Copper",
        description: "10Gbps-ready copper cabling certified up to 500MHz with full alien crosstalk immunity for high-density office environments.",
        tags: ["Cat6A Shielded", "10Gbps Ready", "500MHz Bandwidth", "Low Crosstalk"],
      },
      {
        title: "Single-Mode & Multi-Mode Optical Fiber",
        description: "OS2 and OM3/OM4 fiber optic backbone cabling with fusion splicing, optical patch panels, and low-loss LC/SC terminations.",
        tags: ["Fusion Splicing", "OS2 / OM4 Fiber", "Fiber Patch Panels"],
      },
      {
        title: "Fluke Performance Testing & Certification",
        description: "Rigorous channel and permanent link testing utilizing calibrated Fluke DSX analyzers, generating verifiable compliance documentation.",
        tags: ["Fluke DSX-8000", "Permanent Link Tests", "Full PDF Reports"],
      },
      {
        title: "Patch Panel & Server Rack Management",
        description: "Precision rack assembly, 24/48-port patch panels, horizontal/vertical cable organizers, and laser-engraved port identification.",
        tags: ["Laser Labeling", "Cable Organizers", "24/48-Port Panels"],
      },
    ],
    applications: [
      { facility: "Corporate Office Floors", description: "High-density workstation Ethernet drops, VoIP cabling, and ceiling Wi-Fi access point drops.", icon: "Building" },
      { facility: "Commercial Multi-Story Towers", description: "High-speed fiber optic vertical risers linking main MDF room to intermediate IDF closets.", icon: "Network" },
      { facility: "Multi-Building Campuses", description: "Armored outdoor fiber optic ring backbones connecting distributed university/hospital blocks.", icon: "Cpu" },
      { facility: "Industrial Plants & Warehouses", description: "Ruggedized, shielded cabling resistant to electromagnetic motor interference and dust.", icon: "ShieldAlert" },
    ],
    relatedServices: ["data-center", "wireless-network", "cctv"],
    relatedSolutions: ["campus-unified-network", "datacenter-turnkey-infrastructure"],
  },
  {
    slug: "wireless-network",
    title: "Enterprise Wi-Fi & Switching",
    category: "Network & Infrastructure",
    badge: "High-Density Wireless & Managed Switching",
    tagline: "Enterprise Wi-Fi 6 wireless deployments, managed switching, VLAN segmentation, and perimeter cybersecurity.",
    image: "/images/services/wireless-network.jpg",
    iconName: "Wifi",
    overview:
      "Nael Technology Solutions designs, implements, and optimizes high-density enterprise wireless networks and managed switching architectures. From RF spectrum site surveys and predictive heat-mapping to Wi-Fi 6 access point mounting, VLAN network segmentation, and secure captive guest portals, we ensure fast, dead-zone-free wireless coverage for Ethiopian organizations.",
    problemItSolves: {
      title: "Eliminating Wi-Fi Dead Zones & Slow Roaming",
      description:
        "Consumer-grade routers and unmanaged switches cause chronic connection drops, severe lag during video calls, bandwidth hogging, and security vulnerabilities across office floors.",
      points: [
        "Frustrating dead zones in conference rooms, executive offices, and executive corridors",
        "Connection disconnects when moving between floors or office sections",
        "Security risks from unsegregated guest devices accessing private internal file servers",
        "Lack of centralized cloud management and bandwidth traffic shaping",
      ],
    },
    whatNaelProvides: {
      title: "Enterprise Wireless Architecture & Deployment",
      description:
        "We build unified wireless ecosystems engineered for high device density and seamless roaming.",
      steps: [
        {
          number: "01",
          title: "RF Site Survey & Spectrum Analysis",
          description: "Analyzing physical wall materials, radio interference, and device density to determine precise access point placement.",
        },
        {
          number: "02",
          title: "PoE Managed Switch Infrastructure",
          description: "Deploying Gigabit/10G managed PoE switches, creating isolated VLANs for corporate data, VoIP phones, and guest traffic.",
        },
        {
          number: "03",
          title: "Wi-Fi 6 Access Point Deployment",
          description: "Mounting ceiling-flush access points supporting seamless 802.11k/v/r fast roaming and multi-gigabit throughput.",
        },
        {
          number: "04",
          title: "Captive Portal & Security Provisioning",
          description: "Configuring WPA3 enterprise authentication, branded guest login portals, bandwidth throttling, and firewall rules.",
        },
      ],
    },
    capabilities: [
      {
        title: "High-Density Wi-Fi 6 Technology",
        description: "Next-generation access points supporting hundreds of concurrent mobile devices, laptops, and IoT sensors without performance degradation.",
        tags: ["Wi-Fi 6 (802.11ax)", "MU-MIMO", "High-Density Capacity", "OFDMA"],
      },
      {
        title: "Seamless Zero-Handoff Fast Roaming",
        description: "Intelligent client roaming protocols allowing users to walk through multi-floor offices during VoIP calls without dropping connection.",
        tags: ["Fast Roaming (802.11r/k/v)", "Zero Handoff", "Mesh Uplinks"],
      },
      {
        title: "Managed Enterprise Switching & VLANs",
        description: "Layer 2/Layer 3 managed switches with Quality of Service (QoS) prioritization for VoIP and video conferencing traffic.",
        tags: ["Layer 2/3 Switching", "QoS Priority", "VLAN Segmentation", "PoE+"],
      },
      {
        title: "Branded Guest Portals & Access Control",
        description: "Secure captive portals for visitors with SMS/voucher authentication, isolated guest subnets, and bandwidth rate limits.",
        tags: ["Captive Portal", "WPA3 Security", "Bandwidth Throttling"],
      },
    ],
    applications: [
      { facility: "Corporate Open-Plan Offices", description: "High-density Wi-Fi supporting laptops, mobile devices, and seamless conference room streaming.", icon: "Building" },
      { facility: "Hotels & Hospitality Resorts", description: "Full room coverage, public lobby Wi-Fi, branded guest portals, and PMS integration.", icon: "Users" },
      { facility: "Hospitals & Medical Clinics", description: "Reliable mobile telemetry network for doctors, nurses, and digital tablet patient records.", icon: "HeartPulse" },
      { facility: "Schools & Educational Campuses", description: "Campus-wide Wi-Fi covering lecture halls, libraries, and administrative staff offices.", icon: "Network" },
    ],
    relatedServices: ["structured-cabling", "data-center", "video-conference"],
    relatedSolutions: ["campus-unified-network", "corporate-smart-boardroom"],
  },
  {
    slug: "video-conference",
    title: "Audio & Video Conferencing",
    category: "Communication & Collaboration",
    badge: "Smart Boardrooms & Hybrid AV Collaboration",
    tagline: "Crystal-clear 4K video conferencing, meeting room acoustics, beamforming microphone arrays, and smart boardroom controls.",
    image: "/images/services/video-conference.jpg",
    iconName: "Video",
    overview:
      "Nael Technology Solutions turns executive boardrooms, conference halls, and huddle spaces into modern collaboration hubs. We integrate 4K PTZ conference cameras with AI speaker framing, beamforming ceiling microphone arrays, high-fidelity room speakers, acoustic paneling, and one-touch touch consoles compatible with Microsoft Teams, Zoom, and Google Meet.",
    problemItSolves: {
      title: "Eliminating Echo, Clutter & Disjointed Hybrid Meetings",
      description:
        "Poor boardroom audio, tangled HDMI cables on meeting tables, blurry webcams, and room echo make remote business meetings unproductive and unprofessional.",
      points: [
        "Muffled sound and room reverberation making remote participants hard to understand",
        "Tangled table cables and confusing display inputs causing meeting start delays",
        "Fixed-angle webcams that fail to show all in-room participants clearly",
        "Lack of interactive wireless presentation and screen sharing tools",
      ],
    },
    whatNaelProvides: {
      title: "Turnkey Boardroom AV Engineering Lifecycle",
      description:
        "We deliver clean, cable-free meeting spaces engineered for flawless audio clarity and visual presentation.",
      steps: [
        {
          number: "01",
          title: "Acoustic Assessment & Room Layout",
          description: "Measuring room reverberation, reflection points, and seating geometry to position mics, speakers, and displays.",
        },
        {
          number: "02",
          title: "Concealed AV Cabling & Wall Plates",
          description: "Installing under-table pop-up boxes, in-wall conduits, and ceiling cable tracks to eliminate all surface clutter.",
        },
        {
          number: "03",
          title: "Camera & Beamforming Mic Integration",
          description: "Mounting 4K PTZ cameras with AI speaker-tracking and ceiling microphone arrays with digital signal processing (DSP).",
        },
        {
          number: "04",
          title: "One-Touch Console & Platform Pairing",
          description: "Configuring tabletop touch controllers certified for Teams Rooms and Zoom Rooms with one-touch join capabilities.",
        },
      ],
    },
    capabilities: [
      {
        title: "4K UHD PTZ Cameras with AI Auto-Framing",
        description: "Ultra-HD cameras with motorized pan/tilt/zoom and AI facial algorithms that automatically frame active speakers and room groups.",
        tags: ["4K UHD", "12x Optical Zoom", "AI Auto-Framing", "Speaker Tracking"],
      },
      {
        title: "Beamforming Ceiling & Table Microphone Arrays",
        description: "Multi-element microphone arrays with acoustic echo cancellation (AEC) and noise suppression capturing voices clearly from any seat.",
        tags: ["Beamforming Mics", "Echo Cancellation", "Noise Suppression", "DSP Audio"],
      },
      {
        title: "Wireless Presentation & Screen Sharing",
        description: "Seamless wireless content sharing from laptops, tablets, and phones without needing adapters or loose table HDMI cables.",
        tags: ["Wireless Sharing", "Multi-Screen Presentation", "AirPlay / Miracast"],
      },
      {
        title: "One-Touch Touch Control Consoles",
        description: "Tabletop touch controllers with intuitive UI allowing instant meeting join, room calendar display, and audio/camera adjustments.",
        tags: ["Touch Console", "Teams Rooms Certified", "Zoom Rooms Certified"],
      },
    ],
    applications: [
      { facility: "Executive Corporate Boardrooms", description: "High-end AV integration with acoustic wall panels, dual displays, and ceiling microphones.", icon: "Building" },
      { facility: "International NGO & Embassy Rooms", description: "Secure, encrypted conferencing facilities for global bilateral meetings.", icon: "Landmark" },
      { facility: "Multi-Purpose Training Halls", description: "Motorized projection screens, podium microphones, and multi-speaker ceiling audio.", icon: "Users" },
      { facility: "Small Team Huddle Rooms", description: "All-in-one 4K video bars with integrated mics, speakers, and plug-and-play USB connection.", icon: "Video" },
    ],
    relatedServices: ["wireless-network", "call-center", "structured-cabling"],
    relatedSolutions: ["corporate-smart-boardroom", "campus-unified-network"],
  },
  {
    slug: "call-center",
    title: "Unified IP-PABX & Call Centers",
    category: "Communication & Collaboration",
    badge: "Enterprise Telephony, SIP Trunking & Call Centers",
    tagline: "Scalable IP-PABX communication servers, multi-line VoIP, interactive voice response (IVR), and customer service call centers.",
    image: "/images/services/call-center.jpg",
    iconName: "PhoneCall",
    overview:
      "Nael Technology Solutions deploys unified IP-PABX telephony systems and interactive customer service call center solutions. Supporting traditional analog lines, PRI trunks, and modern VoIP SIP protocols, our systems enable multi-extension internal communication, automated IVR call routing, call recording, queue analytics, and CRM integration for corporate and customer-facing enterprises.",
    problemItSolves: {
      title: "Overcoming High Telecom Costs & Missed Customer Inquiries",
      description:
        "Legacy phone setups lead to missed customer calls, expensive internal communication between branches, and zero visibility into agent performance or call volumes.",
      points: [
        "Callers waiting on busy lines without automated queueing or interactive menu guidance",
        "High recurring telephony costs for inter-office calls between distant branch locations",
        "Lack of call recording and performance analytics for quality control",
        "Inability for remote or mobile workers to receive office desk phone calls",
      ],
    },
    whatNaelProvides: {
      title: "Turnkey Telephony & Call Center Deployment",
      description:
        "We build scalable voice communications that unite office phones, mobile extensions, and customer contact centers.",
      steps: [
        {
          number: "01",
          title: "Telephony Traffic & Trunk Planning",
          description: "We audit existing lines, extension requirements, peak call volumes, and VoIP SIP trunk provider connectivity.",
        },
        {
          number: "02",
          title: "IP-PABX Server Deployment",
          description: "Installing robust hardware/software IP-PABX servers with extension provisioning and voice VLAN configuration.",
        },
        {
          number: "03",
          title: "IVR Menu & Queue Programming",
          description: "Programming multi-level IVR auto-attendant menus, ring groups, call queues, and voicemail-to-email routing.",
        },
        {
          number: "04",
          title: "Call Center Dashboard & Staff Training",
          description: "Deploying real-time supervisor monitoring dashboards, call recording storage, and training customer service agents.",
        },
      ],
    },
    capabilities: [
      {
        title: "Scalable Hybrid & IP-PABX Telephony",
        description: "Unified communication servers supporting from 20 to 1,000+ IP extensions with simultaneous multi-line call handling.",
        tags: ["IP-PABX", "VoIP SIP", "Multi-Extension", "FXS/FXO/PRI Support"],
      },
      {
        title: "Multi-Level IVR & Auto-Attendant",
        description: "Interactive voice menus guiding callers to the right department with custom greetings, queue announcements, and music on hold.",
        tags: ["Interactive IVR", "Queue Management", "Auto-Attendant"],
      },
      {
        title: "Call Recording & Quality Analytics",
        description: "Centralized call recording with encrypted audio playback, supervisor whisper/barge-in tools, and agent performance reports.",
        tags: ["Call Recording", "Supervisor Barge-In", "Analytics Reports"],
      },
      {
        title: "Mobile Softphones & Multi-Branch Dialing",
        description: "Connect remote branches and mobile staff via smartphone softphones with free direct internal extension dialing.",
        tags: ["Mobile Softphone", "Branch Extension Dialing", "Voicemail-to-Email"],
      },
    ],
    applications: [
      { facility: "Corporate Enterprises & Banks", description: "Multi-department IP telephony with executive desk phones and direct branch dialing.", icon: "Landmark" },
      { facility: "Customer Support Call Centers", description: "Inbound customer service queues, agent headsets, and real-time supervisor metrics.", icon: "PhoneCall" },
      { facility: "Hotels & Hospitality Resorts", description: "Guest room phones, front desk dispatch, wake-up calls, and PMS billing integration.", icon: "Building" },
      { facility: "Healthcare & Clinic Desks", description: "Appointment booking lines, triage phone routing, and multi-line reception stations.", icon: "HeartPulse" },
    ],
    relatedServices: ["video-conference", "wireless-network", "structured-cabling"],
    relatedSolutions: ["campus-unified-network", "corporate-smart-boardroom"],
  },
  {
    slug: "nurse-call",
    title: "Hospital Nurse Call Systems",
    category: "Healthcare Technology",
    badge: "Medical Ward Safety & Emergency Alerts",
    tagline: "Certified hospital nurse call stations, waterproof bathroom emergency pull cords, corridor dome indicators, and duty room consoles.",
    image: "/images/services/nurse-call.jpg",
    iconName: "HeartPulse",
    overview:
      "Nael Technology Solutions engineers, installs, and supports certified hospital nurse call systems. Designed specifically for healthcare facilities, clinics, and ICU wards in Ethiopia, our solutions connect patient bedside call units, waterproof washroom pull cords, corridor triage dome lamps, and master duty consoles to guarantee instant emergency alerting and elevated patient care.",
    problemItSolves: {
      title: "Eliminating Delayed Patient Response in Medical Wards",
      description:
        "In healthcare environments, every second counts. Lack of reliable emergency communication between bedridden patients and nursing duty rooms can lead to severe medical complications and unassisted patient falls.",
      points: [
        "Bedridden patients unable to signal duty nurses during acute medical emergencies",
        "Washroom slip-and-fall incidents where patients cannot reach standard wall switches",
        "Lack of visual corridor dome indicators causing confusion on which ward bed needs help",
        "Absence of timestamped response logs for hospital quality assurance and accreditation",
      ],
    },
    whatNaelProvides: {
      title: "Turnkey Healthcare Communication Lifecycle",
      description:
        "We implement reliable, antimicrobial wired and wireless nurse call infrastructures engineered for 24/7 medical operation.",
      steps: [
        {
          number: "01",
          title: "Ward Layout & Bed Capacity Audit",
          description: "We map patient bed positions, ICU stations, washroom locations, and nursing duty room console centers.",
        },
        {
          number: "02",
          title: "Medical-Grade Cabling & Bedside Mounting",
          description: "Installing medical-grade bedside call pendants with reassurance LEDs and antimicrobial surface housings.",
        },
        {
          number: "03",
          title: "Waterproof Bathroom Pulls & Corridor Domes",
          description: "Mounting IP65 waterproof emergency pull cords in washrooms and tri-color visual dome lamps outside ward doors.",
        },
        {
          number: "04",
          title: "Duty Station Console Programming & Handover",
          description: "Configuring the central nursing display console with 2-way audio intercom and delivering nurse training.",
        },
      ],
    },
    capabilities: [
      {
        title: "Ergonomic Patient Bedside Handsets",
        description: "Durable, antimicrobial patient call pendants with tactile call buttons, reassurance LEDs, and optional reading light control.",
        tags: ["Antimicrobial Casing", "Reassurance LED", "Tactile Button"],
      },
      {
        title: "IP65 Waterproof Washroom Pull Cords",
        description: "Ceiling-mounted emergency pull cords with bright red rings for easy grasping during slip-and-fall emergencies, with call cancel buttons.",
        tags: ["IP65 Waterproof", "Emergency Pull Ring", "Reset Button"],
      },
      {
        title: "Tri-Color Corridor Triage Dome Lamps",
        description: "High-visibility LED dome lamps mounted outside room doors displaying distinct colors for normal calls, emergency calls, and nurse presence.",
        tags: ["Tri-Color LEDs", "High Visibility", "Corridor Triage"],
      },
      {
        title: "Master Duty Console & 2-Way Audio Intercom",
        description: "Backlit LCD nurse master consoles showing the exact calling room and bed number with clear two-way voice communication.",
        tags: ["LCD Display", "2-Way Intercom", "Call Prioritization"],
      },
    ],
    applications: [
      { facility: "General Hospital Wards", description: "Multi-bed patient rooms with bedside call pendants and corridor dome lights.", icon: "HeartPulse" },
      { facility: "ICU & High-Dependency Units", description: "Priority emergency call triggers and staff assistance emergency buttons.", icon: "Activity" },
      { facility: "Private Clinics & Maternity Wards", description: "Ergonomic call stations with audio intercom to nursing duty desks.", icon: "Building" },
      { facility: "Elderly Care & Rehabilitation Centers", description: "Accessible bathroom pull cords and continuous nurse reassurance monitoring.", icon: "Users" },
    ],
    relatedServices: ["cctv", "fire-alarm", "call-center"],
    relatedSolutions: ["hospital-nurse-call-solution", "banking-facility-security"],
  },
];
