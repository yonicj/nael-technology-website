// Comprehensive Solutions Data Model for Nael Technology Solutions

export interface SolutionDetail {
  slug: string;
  id: string;
  title: string;
  category: "IT & Data Centers" | "Physical Security & Banking" | "Corporate AV & Boardrooms" | "Industrial & Logistics" | "Healthcare Technology" | "Institutional Networks";
  industry: string;
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
  components: {
    title: string;
    description: string;
    tags: string[];
  }[];
  applications: {
    facility: string;
    description: string;
    icon: string;
  }[];
  standards: string[];
  relatedServices: string[]; // service slugs
  relatedSolutions: string[]; // solution slugs
}

export const DETAILED_SOLUTIONS_DATA: SolutionDetail[] = [
  // 1. Data Center Turnkey Infrastructure
  {
    slug: "datacenter-turnkey",
    id: "datacenter-turnkey-infrastructure",
    title: "Data Center Turnkey Infrastructure",
    category: "IT & Data Centers",
    industry: "Enterprise IT, Telecom & Financial Services",
    badge: "Mission-Critical Facility Engineering",
    tagline: "End-to-end design and deployment of enterprise server rooms, in-row precision cooling, modular UPS power, and clean-agent fire suppression.",
    image: "/images/datacenter-facility.jpg",
    iconName: "Server",
    overview:
      "Nael Technology Solutions delivers full turnkey data center engineering for financial institutions, telecom operators, government ministries, and large enterprises across Ethiopia. We engineer the complete physical and mechanical ecosystem—from structural overhead cable routing and seismic-rated server racks to precision climate control (CRAC), modular N+1 UPS power conditioning, automatic generator transfer, and gas-based clean agent fire suppression.",
    problemItSolves: {
      title: "Mitigating Server Room Outages & Environmental Hazards",
      description:
        "Standard commercial office spaces lack the environmental safeguards, thermal dynamics, and power conditioning necessary to host high-density compute infrastructure safely.",
      points: [
        "Uncontrolled server heat loads causing thermal throttling, hardware degradation, and unpredictable system crashes",
        "Utility grid fluctuations, voltage spikes, and sudden blackouts risking corrupted transactional databases",
        "Water sprinkler risks in IT spaces where conventional water suppression permanently destroys electrical hardware",
        "Unmonitored physical access and lack of real-time environmental telemetry (temperature, humidity, water leak detection)",
      ],
    },
    whatNaelProvides: {
      title: "Our Turnkey Data Center Engineering Methodology",
      description:
        "We execute complete, certified data center buildouts from architectural design to commissioning, testing, and 24/7 SLA maintenance.",
      steps: [
        {
          number: "01",
          title: "Thermal & Power Load Calculation",
          description: "We analyze server wattage, heat dissipation requirements (BTU/hr), and UPS runtime demands to dimension precision cooling and electrical distribution.",
        },
        {
          number: "02",
          title: "Structural Racks & Clean-Agent Piping",
          description: "Deploying high-density server enclosures, overhead basket trays, raised flooring, and FM-200 / Novec clean-agent gas delivery piping.",
        },
        {
          number: "03",
          title: "In-Row CRAC & Modular UPS Integration",
          description: "Installing precision in-row air conditioning units, modular true online double-conversion UPS banks, and automatic transfer switches (ATS).",
        },
        {
          number: "04",
          title: "DCIM Monitoring & Environmental Handover",
          description: "Configuring real-time DCIM software for temperature, humidity, water leak alerts, and dual-custody biometric server room access control.",
        },
      ],
    },
    components: [
      {
        title: "High-Density Server Racks & Cable Trays",
        description: "Standard 42U/48U 19-inch server cabinets with ventilated mesh doors, vertical cable organizers, and overhead zinc-plated basket trays.",
        tags: ["42U/48U Racks", "Overhead Trays", "Seismic Anchoring", "PDU Distribution"],
      },
      {
        title: "Modular True Online Double-Conversion UPS",
        description: "Scalable N+1 modular power systems with lithium-ion/VRLA battery banks, bypass switches, and automatic generator synchronization.",
        tags: ["N+1 Redundancy", "Double Conversion", "Automatic ATS", "Battery Monitoring"],
      },
      {
        title: "Precision In-Row Air Conditioning (CRAC)",
        description: "Close-coupled in-row cooling systems with EC fans, hot/cold aisle containment, and precise microclimate humidity regulation.",
        tags: ["In-Row Cooling", "Hot Aisle Containment", "Humidity Control", "Energy Efficient"],
      },
      {
        title: "Clean-Agent Gas Fire Suppression",
        description: "Waterless gas suppression (FM-200 / NOVEC 1230) engineered to extinguish electrical fires within 10 seconds without damaging servers.",
        tags: ["FM-200 / Gas", "10s Discharge", "Zero Water Damage", "NFPA 2001"],
      },
      {
        title: "Environmental & DCIM Telemetry",
        description: "IoT sensor networks monitoring rack temperatures, intake humidity, under-floor liquid leaks, and door contact alarms with SMS/email alerts.",
        tags: ["IoT Sensors", "Water Leak Detection", "SMS Alerts", "DCIM Software"],
      },
    ],
    applications: [
      {
        facility: "Commercial Banks & Fintech Hubs",
        description: "Hosting mission-critical core banking databases and transaction switches requiring Tier III 99.982% availability.",
        icon: "Landmark",
      },
      {
        facility: "Telecommunications & ISP PoPs",
        description: "High-density optical cross-connects, edge routing nodes, and fiber transmission multiplexers.",
        icon: "Network",
      },
      {
        facility: "Government & National Ministries",
        description: "Secure sovereign data hosting for citizen records, tax authorities, and centralized ministerial ERP platforms.",
        icon: "Shield",
      },
      {
        facility: "Enterprise Corporate Headquarters",
        description: "Consolidated on-premise cloud infrastructure, centralized storage area networks (SAN), and disaster recovery nodes.",
        icon: "Building2",
      },
    ],
    standards: [
      "TIA-942 Telecommunications Infrastructure Standard for Data Centers",
      "NFPA 2001 Standard on Clean Agent Fire Extinguishing Systems",
      "ASHRAE TC 9.9 Thermal Guidelines for Data Processing Environments",
      "IEC 62040 Uninterruptible Power Systems (UPS) Compliance",
      "ISO/IEC 27001 Physical Security Safeguards",
    ],
    relatedServices: ["data-center", "structured-cabling", "fire-alarm"],
    relatedSolutions: ["banking-security", "industrial-perimeter", "campus-network"],
  },

  // 2. Banking & Financial Facility Security
  {
    slug: "banking-security",
    id: "banking-facility-security",
    title: "Banking & Financial Facility Security",
    category: "Physical Security & Banking",
    industry: "Commercial Banks, Microfinances & Insurance",
    badge: "Regulatory Compliant Financial Defense",
    tagline: "Multi-layered physical security, ultra-HD vault surveillance, dual-custody biometric entry, and centralized multi-branch monitoring.",
    image: "/images/security-control-hub.jpg",
    iconName: "Landmark",
    overview:
      "Financial institutions demand the most rigorous physical security protocols. Nael Technology Solutions engineers specialized security architectures for commercial bank headquarters, retail branches, cash processing centers, and ATM lobbies across Ethiopia. Our turnkey systems integrate pinhole teller cameras, seismic vault vibration sensors, dual-custody biometric interlocking, silent panic alerts, and centralized Video Management Software (VMS) capable of streaming hundreds of remote branch feeds into a national Security Operations Center (SOC).",
    problemItSolves: {
      title: "Addressing Financial Facility Risks & Regulatory Mandates",
      description:
        "Banking environments face sophisticated robbery threats, internal cash discrepancies, ATM tampering, and strict National Bank regulatory audit requirements.",
      points: [
        "Unmonitored cash handling zones leading to untraceable teller discrepancies and disputes",
        "Unauthorized single-person entry into high-security cash vaults without dual-custody authorization",
        "Delayed emergency response during intrusion or robbery due to unintegrated manual alarm systems",
        "Disjointed branch security forcing central audit teams to physically travel to retrieve local CCTV footage",
      ],
    },
    whatNaelProvides: {
      title: "Comprehensive Financial Security Deployment",
      description:
        "From preliminary security vulnerability assessments to National Bank compliance signoff, we implement turnkey defense ecosystems.",
      steps: [
        {
          number: "01",
          title: "Branch Security Blueprint & Risk Audit",
          description: "Mapping teller counters, customer waiting areas, ATM kiosks, and vault perimeters to eliminate optical blind spots.",
        },
        {
          number: "02",
          title: "Biometric Interlocking & Vault Access",
          description: "Installing dual-custody biometric fingerprint/facial turnstiles, mantrap interlocking doors, and seismic vault sensors.",
        },
        {
          number: "03",
          title: "High-Resolution Teller & Pinhole Cameras",
          description: "Deploying 4K transaction-focused cameras calibrated to capture exact banknote denominations and customer faces clearly.",
        },
        {
          number: "04",
          title: "Centralized SOC & Panic Alarm Integration",
          description: "Connecting silent duress buttons, glass-break sensors, and branch NVRs to a centralized headquarters monitoring wall.",
        },
      ],
    },
    components: [
      {
        title: "Pinhole & 4K Ultra-HD Teller Surveillance",
        description: "Specialized optical cameras positioned directly above teller windows to capture crisp footage of currency transactions and customer counters.",
        tags: ["Teller Cameras", "Currency Clarity", "Pinhole Discretion", "4K Ultra-HD"],
      },
      {
        title: "Dual-Custody Biometric Vault Interlocking",
        description: "Mantrap airlock doors requiring simultaneous authentication by two designated branch managers before unlocking the cash vault.",
        tags: ["Dual-Custody", "Mantrap Airlock", "Biometric Vault", "Anti-Passback"],
      },
      {
        title: "Seismic & Vault Vibration Sensors",
        description: "Piezoelectric sensors installed on reinforced concrete vault walls and safe deposit boxes to detect drilling, cutting, or explosive impacts.",
        tags: ["Seismic Detection", "Drill Sensors", "Vault Defense", "Tamper Proof"],
      },
      {
        title: "Silent Duress & Panic Alarm Network",
        description: "Under-counter foot pedals and hidden pushbuttons that instantly transmit silent robbery signals to local police and central security desks.",
        tags: ["Under-Counter Pedals", "Silent Dispatch", "Instant Alert", "GSM Backup"],
      },
      {
        title: "Centralized Multi-Branch VMS Platform",
        description: "Enterprise software consolidating video feeds, door access logs, and alarm events from dozens of regional branches into a single SOC dashboard.",
        tags: ["Enterprise VMS", "Central SOC", "Audit Trails", "Bandwidth Throttling"],
      },
    ],
    applications: [
      {
        facility: "Commercial Bank Retail Branches",
        description: "Full security packages covering teller lines, customer lobbies, manager offices, and back-office accounting desks.",
        icon: "Landmark",
      },
      {
        facility: "Main Cash Vaults & Currency Depots",
        description: "Maximum-security dual-custody access control, 24/7 thermal imaging, and vibration-sensitive intrusion alarms.",
        icon: "ShieldAlert",
      },
      {
        facility: "Off-Site ATM Kiosks & Drive-Throughs",
        description: "Vandal-resistant IP cameras, vibration impact sensors, and cellular GSM alarm transmitters for remote locations.",
        icon: "CreditCard",
      },
      {
        facility: "Microfinance & Insurance Institutions",
        description: "Cost-effective, compliant security suites with biometric time attendance and secure file room authorization.",
        icon: "Building2",
      },
    ],
    standards: [
      "National Bank of Ethiopia Physical Security Compliance Guidelines",
      "UL 294 Standard for Access Control System Units",
      "EN 50131 Grade 3/4 Intrusion and Hold-Up Alarm Systems",
      "IEC 62676 Video Surveillance Systems for Security Applications",
      "PCI-DSS Physical Access Control Requirements",
    ],
    relatedServices: ["cctv", "access-control", "fire-alarm"],
    relatedSolutions: ["datacenter-turnkey", "smart-boardroom", "industrial-perimeter"],
  },

  // 3. Corporate Smart Boardroom & Conferencing
  {
    slug: "smart-boardroom",
    id: "corporate-smart-boardroom",
    title: "Corporate Smart Boardroom & Conferencing",
    category: "Corporate AV & Boardrooms",
    industry: "Enterprises, NGOs, Embassies & Government",
    badge: "Executive Audio/Video Integration",
    tagline: "Turnkey conference room acoustics, automated PTZ speaker tracking, wireless multi-screen presentation, and unified hybrid collaboration.",
    image: "/images/corporate-boardroom.jpg",
    iconName: "Video",
    overview:
      "Modern executive decision-making requires flawless audiovisual clarity. Nael Technology Solutions designs and integrates world-class smart boardroom systems for multinational corporations, international non-governmental organizations (NGOs), government ministries, and diplomatic missions in Addis Ababa. We combine acoustic wall paneling, motorized 4K laser projection/interactive flat panels, intelligent beamforming ceiling microphone arrays, auto-framing PTZ cameras, and unified one-touch control interfaces certified for Microsoft Teams, Zoom, and Cisco Webex.",
    problemItSolves: {
      title: "Eliminating Meeting Room Friction & Hybrid Audio Fatigue",
      description:
        "Executive teams frequently lose valuable meeting time troubleshooting tangled HDMI cables, struggling with hollow room echo, or suffering inaudible remote participants.",
      points: [
        "Excessive room echo and reverberation rendering hybrid video calls exhausting and unintelligible",
        "Cluttered conference tables covered in tangled adapters, charging bricks, and loose cables",
        "Fixed wide-angle webcams where in-room participants appear as tiny, distant figures to remote callers",
        "Complicated AV equipment requiring specialized IT staff intervention for every single meeting start",
      ],
    },
    whatNaelProvides: {
      title: "Turnkey Boardroom AV Architecture & Implementation",
      description:
        "We transform executive spaces into intuitive, zero-friction collaboration environments built for instantaneous productivity.",
      steps: [
        {
          number: "01",
          title: "Acoustic Modeling & Spatial Analysis",
          description: "Measuring room reverberation time (RT60) and ambient noise levels to specify acoustic paneling and microphone polar patterns.",
        },
        {
          number: "02",
          title: "Concealed Cabling & Under-Table Integration",
          description: "Installing floor grommets, retractable cable cubbies, and clean CAT6A/fiber AV-over-IP conduits to keep conference tables completely pristine.",
        },
        {
          number: "03",
          title: "Display, PTZ Camera & Ceiling Array Mounting",
          description: "Mounting interactive 4K commercial touch displays, optical zoom PTZ cameras with speaker tracking, and Dante ceiling array mics.",
        },
        {
          number: "04",
          title: "One-Touch Controller Programming & User Training",
          description: "Configuring a dedicated 10-inch tabletop touch controller for one-touch meeting starts, lighting presets, and screen sharing.",
        },
      ],
    },
    components: [
      {
        title: "Intelligent Beamforming Ceiling Microphone Arrays",
        description: "Discreet ceiling-mounted microphones with steerable lobes that track active speakers while actively canceling HVAC hum and paper rustle.",
        tags: ["Beamforming", "Dante Audio", "Noise Cancellation", "Acoustic Echo Cancellation"],
      },
      {
        title: "Auto-Framing 4K Dual-Camera PTZ Systems",
        description: "Motorized optical zoom cameras featuring artificial intelligence to automatically switch between full-room wide views and close-up speaker frames.",
        tags: ["4K PTZ", "Auto-Framing", "Speaker Tracking", "Optical 12x Zoom"],
      },
      {
        title: "Commercial 4K Interactive Flat Panels & Laser Displays",
        description: "Anti-glare commercial touch displays (75\" to 98\") supporting digital whiteboarding, multi-user annotation, and 24/7 reliability.",
        tags: ["Interactive Display", "Anti-Glare", "Digital Whiteboard", "4K UHD"],
      },
      {
        title: "Wireless Multi-Device Presentation Gateways",
        description: "Zero-latency wireless screen sharing allowing up to 4 simultaneous laptops, tablets, or smartphones to present side-by-side without dongles.",
        tags: ["Wireless Sharing", "AirPlay / Miracast", "Multi-Screen Split", "No Dongles"],
      },
      {
        title: "Centralized Tabletop Room Management Tablet",
        description: "Intuitive touch panel allowing executives to initiate video calls, adjust audio levels, switch video sources, and dim room lights with a single tap.",
        tags: ["One-Touch Start", "Room Automation", "Teams / Zoom Certified", "PoE Powered"],
      },
    ],
    applications: [
      {
        facility: "Corporate Executive Boardrooms",
        description: "High-prestige, acoustically isolated conference rooms designed for board meetings, investor presentations, and VIP summits.",
        icon: "Building2",
      },
      {
        facility: "International NGO & Diplomatic Briefing Rooms",
        description: "Multilingual interpretation systems, secure encrypted videoconferencing, and multi-country operational briefing centers.",
        icon: "Globe",
      },
      {
        facility: "Government Ministerial Cabinet Halls",
        description: "Large-capacity council chambers with push-to-talk delegate microphone units and automated video tracking.",
        icon: "Landmark",
      },
      {
        facility: "Enterprise Training Auditoriums",
        description: "High-output laser projection, wireless lapel microphones, and live session recording/streaming capabilities.",
        icon: "Presentation",
      },
    ],
    standards: [
      "AVIXA 10:2013 Audiovisual Systems Energy Management",
      "AVIXA A102.01:2017 Display Image Size for 2D Content",
      "ITU-T G.711 / G.722 Audio Compression Standards",
      "IEEE 802.3at Power-over-Ethernet Plus for AV Hardware",
      "AES67 Standard for High-Performance Audio-over-IP Interoperability",
    ],
    relatedServices: ["video-conference", "wireless-network", "structured-cabling"],
    relatedSolutions: ["campus-network", "call-center-telephony", "banking-security"],
  },

  // 4. Industrial & Logistics Perimeter Protection
  {
    slug: "industrial-perimeter",
    id: "industrial-perimeter-protection",
    title: "Industrial & Logistics Perimeter Protection",
    category: "Industrial & Logistics",
    industry: "Manufacturing Plants, Warehouses & Agro-Industrial Parks",
    badge: "Heavy-Duty Perimeter & Fire Defense",
    tagline: "Long-range thermal & optical perimeter surveillance, beam intrusion detection, ruggedized optical fiber rings, and warehouse fire safety.",
    image: "/images/perimeter-protection.jpg",
    iconName: "ShieldAlert",
    overview:
      "Industrial manufacturing plants, logistics hubs, agro-processing facilities, and expansive commercial compounds require heavy-duty security systems engineered to withstand dust, weather extremes, and vast geographic footprints. Nael Technology Solutions engineers robust perimeter defense systems integrating long-range bi-spectrum thermal/optical PTZ cameras, infrared active beam barriers, automatic vehicle barrier gates, explosion-proof components, and industrial-grade fiber optic network rings connected directly to 24/7 guardhouse command consoles.",
    problemItSolves: {
      title: "Securing Expansive Outer Boundaries & Harsh Environments",
      description:
        "Large manufacturing yards and logistics compounds face perimeter trespassing, stock shrinkage, blind spots along perimeter fences, and delayed industrial fire detection.",
      points: [
        "Vast physical fence-lines that cannot be reliably monitored by manual security patrols alone",
        "Complete pitch-dark conditions where standard optical cameras fail to detect intruders",
        "High dust and outdoor weather conditions causing frequent failure of standard consumer electronic equipment",
        "High-bay warehouse stockrooms vulnerable to rapid fire spread without specialized beam smoke detection",
      ],
    },
    whatNaelProvides: {
      title: "Turnkey Industrial Security & Life Safety Engineering",
      description:
        "We build ruggedized, heavy-duty electronic perimeter and fire defense systems customized for industrial operations.",
      steps: [
        {
          number: "01",
          title: "Perimeter Topography & Choke-Point Survey",
          description: "Assessing perimeter fence lengths, terrain elevations, vehicle gate flow, and outdoor illumination levels.",
        },
        {
          number: "02",
          title: "Industrial Fiber Ring Backbone Deployment",
          description: "Laying armored multi-core fiber optic ring backbones with self-healing redundant loops around the entire compound boundary.",
        },
        {
          number: "03",
          title: "Thermal PTZ & Active Beam Sensor Mounting",
          description: "Installing thermal/optical cameras with long-range night detection and multi-beam infrared tripwires along perimeter walls.",
        },
        {
          number: "04",
          title: "Guardhouse Command Station & Gate Automation",
          description: "Configuring automated boom barriers, RFID long-range vehicle tags, and multi-screen guardhouse alarm consoles.",
        },
      ],
    },
    components: [
      {
        title: "Bi-Spectrum Thermal & Optical PTZ Cameras",
        description: "Heavy-duty cameras combining heat-sensing thermal sensors (for zero-light human detection up to 500m) and 4K optical zoom for facial verification.",
        tags: ["Thermal Imaging", "500m Detection", "Zero Light Vision", "IP67 Weatherproof"],
      },
      {
        title: "Active Multi-Beam Infrared Perimeter Sensors",
        description: "Multi-stacked infrared beam towers creating invisible perimeter tripwires that trigger immediate alarms if an intruder scales the fence.",
        tags: ["Infrared Beam", "Fence Tripwire", "Anti-Climb", "Tamper Resistant"],
      },
      {
        title: "Automated Vehicle Barrier Gates & Long-Range RFID",
        description: "Heavy-duty boom barriers integrated with long-range windshield RFID tags and automatic number plate recognition (ANPR) cameras.",
        tags: ["Boom Barriers", "ANPR Cameras", "Long-Range RFID", "Access Automation"],
      },
      {
        title: "High-Bay Optical Beam Smoke Detectors",
        description: "Long-range optical beam fire detectors engineered specifically for high-ceiling warehouses where standard ceiling spot detectors are ineffective.",
        tags: ["Beam Smoke Detector", "High-Bay Warehouse", "100m Range", "Early Warning"],
      },
      {
        title: "Ruggedized Industrial Fiber Optic Ring",
        description: "Armored outdoor fiber optic backbone with redundant ring topology and industrial temperature-hardened PoE switches (-40°C to +75°C).",
        tags: ["Armored Fiber", "Ring Redundancy", "Industrial PoE", "Surge Protected"],
      },
    ],
    applications: [
      {
        facility: "Industrial Parks & Manufacturing Complexes",
        description: "Complete perimeter security for multi-hectare factory compounds, raw material yards, and staff entry gates.",
        icon: "Factory",
      },
      {
        facility: "Logistics Hubs & Distribution Warehouses",
        description: "High-bay fire safety, loading dock vehicle surveillance, and inventory protection for high-value freight.",
        icon: "Truck",
      },
      {
        facility: "Agro-Processing & Commodity Depots",
        description: "Grain silo fire protection, dust-tight security housings, and weighbridge automated license plate recognition.",
        icon: "Trees",
      },
      {
        facility: "Construction Compounds & Heavy Equipment Yards",
        description: "Solar-powered mobile camera towers and wireless perimeter intrusion sensors for temporary project sites.",
        icon: "HardHat",
      },
    ],
    standards: [
      "EN 54-12 Fire Detection and Fire Alarm Systems — Line Detectors Using Optical Light Beam",
      "IEC 60529 Ingress Protection (IP66/IP67/IP68) Testing",
      "IEC 62262 Mechanical Impact Resistance (IK10) Rating",
      "NFPA 72 National Fire Alarm and Signaling Code for Industrial Occupancies",
      "ISO 22301 Business Continuity & Perimeter Security Standards",
    ],
    relatedServices: ["cctv", "fire-alarm", "structured-cabling"],
    relatedSolutions: ["datacenter-turnkey", "campus-network", "banking-security"],
  },

  // 5. Healthcare Nurse Call & Alert Solution
  {
    slug: "nurse-call-system",
    id: "hospital-nurse-call-solution",
    title: "Healthcare Nurse Call & Alert Solution",
    category: "Healthcare Technology",
    industry: "Hospitals, Clinics, Specialty Centers & Nursing Homes",
    badge: "Certified Life-Safety Clinical Communications",
    tagline: "Rapid patient-to-nurse emergency communication, waterproof bathroom pull cords, multi-color triage corridor dome lights, and duty station consoles.",
    image: "/images/nurse-call-solution.jpg",
    iconName: "HeartPulse",
    overview:
      "In healthcare environments, rapid communication between patients and clinical caregivers directly impacts medical outcomes and patient safety. Nael Technology Solutions designs, installs, and maintains certified hospital nurse call systems for private hospitals, specialized surgical centers, maternal clinics, and regional referral health institutions across Ethiopia. Our solutions encompass bedside call pendants, waterproof bathroom emergency pull cords, multi-color corridor triage dome lights, and master duty station intercom consoles.",
    problemItSolves: {
      title: "Eliminating Critical Delays in Hospital Patient Response",
      description:
        "Hospitals without dedicated nurse call systems face delayed emergency response times, elevated patient fall risks in bathrooms, and lack of accountability regarding caregiver response intervals.",
      points: [
        "Vulnerable in-patient wards lacking rapid emergency signaling to duty nursing staff",
        "High slip-and-fall hazards in hospital bathrooms without waterproof emergency pull cords",
        "Disorganized triage alert routing causing nurses to miss critical patient requests during peak hours",
        "No digital event logging to track caregiver response times for hospital quality compliance",
      ],
    },
    whatNaelProvides: {
      title: "End-to-End Hospital Nurse Call Deployment",
      description:
        "We engineer reliable, antibacterial, and intuitive clinical alert systems meeting international healthcare accreditation standards.",
      steps: [
        {
          number: "01",
          title: "Ward Layout & Bed Distribution Audit",
          description: "Reviewing architectural hospital floor plans, ICU beds, standard wards, and bathroom locations to engineer call station topology.",
        },
        {
          number: "02",
          title: "Low-Voltage Shielded Cabling Installation",
          description: "Deploying medical-grade, fire-retardant cabling conduits separating critical clinical signaling from electromagnetic interference.",
        },
        {
          number: "03",
          title: "Bedside, Bathroom & Dome Station Mounting",
          description: "Installing ergonomic bedside hand units, antibacterial pull cords, and 4-color corridor dome lights outside every patient room.",
        },
        {
          number: "04",
          title: "Master Console Configuration & Staff Training",
          description: "Setting up central nursing station annunciators, audio intercoms, response timer analytics, and conducting hands-on nurse training.",
        },
      ],
    },
    components: [
      {
        title: "Ergonomic Bedside Call Handsets",
        description: "Impact-resistant patient pendants with high-contrast emergency buttons, reassurance LEDs, and flexible coiled cord clips.",
        tags: ["Bedside Pendant", "Reassurance LED", "Antibacterial", "Ergonomic Design"],
      },
      {
        title: "Waterproof Bathroom Emergency Pull Cords",
        description: "IP65 waterproof pull stations with ceiling-to-floor cords designed for easy reach by patients who may have slipped in wet shower/toilet areas.",
        tags: ["IP65 Waterproof", "Pull Cord", "Bathroom Safety", "Dual Alert Rings"],
      },
      {
        title: "Multi-Color Corridor Triage Dome Lights",
        description: "Distinct LED indicator dome lights positioned above room doors illuminating in green (nurse present), red (routine call), and flashing blue (Code Blue).",
        tags: ["Corridor Dome", "Triage Multi-Color", "Code Blue Alert", "Ultra-Bright LED"],
      },
      {
        title: "Master Nurse Station Intercom Consoles",
        description: "Centralized desk consoles displaying active calls by bed number, priority queue sorting, and clear two-way audio communication with patients.",
        tags: ["Master Console", "Two-Way Audio", "Priority Queue", "Bedside Display"],
      },
      {
        title: "Clinical Response Logging & Software Analytics",
        description: "Centralized server logging timestamped records of every patient call, nurse arrival, and resolution time for hospital quality audits.",
        tags: ["Audit Logging", "Response Analytics", "HIS Integration", "Quality Compliance"],
      },
    ],
    applications: [
      {
        facility: "Multi-Specialty Private Hospitals",
        description: "Full clinical communication networks across VIP rooms, surgical wards, maternity suites, and recovery bays.",
        icon: "Hospital",
      },
      {
        facility: "Intensive Care Units (ICU & CCU)",
        description: "High-priority instant emergency escalation with Code Blue integration and silent alert routing.",
        icon: "Activity",
      },
      {
        facility: "Maternal & Pediatric Clinics",
        description: "Gentle chime alerts, bedside baby monitoring integration, and mother-to-nurse prompt communication.",
        icon: "Baby",
      },
      {
        facility: "Elderly Care & Rehabilitation Centers",
        description: "Low-resistance pull cords, mobility-friendly call stations, and automated wandering alerts.",
        icon: "Heart",
      },
    ],
    standards: [
      "UL 1069 Standard for Hospital Signaling and Nurse Call Equipment",
      "VDE 0834 Code of Practice for Call Systems in Hospitals and Care Homes",
      "HTM 08-03 Specialist Services — Bedhead Services & Nurse Call Systems",
      "ISO 13485 Medical Devices Quality Management System Principles",
      "IEC 60601-1-2 Medical Electrical Equipment Electromagnetic Compatibility",
    ],
    relatedServices: ["nurse-call", "wireless-network", "cctv"],
    relatedSolutions: ["campus-network", "smart-boardroom", "datacenter-turnkey"],
  },

  // 6. Integrated Campus Voice & High-Speed Data
  {
    slug: "campus-network",
    id: "campus-unified-network",
    title: "Integrated Campus Voice & High-Speed Data",
    category: "Institutional Networks",
    industry: "Universities, Hotels, Mixed-Use Developments & Corporate Campuses",
    badge: "High-Capacity Campus Telephony & Fiber Backbone",
    tagline: "Inter-building optical fiber backbone, high-density Wi-Fi 6 roaming, unified IP-PABX telephony, and centralized multi-gigabit switching.",
    image: "/images/campus-network.jpg",
    iconName: "Network",
    overview:
      "Multi-building environments such as universities, hospital compounds, hotel resorts, mixed-use commercial developments, and government compounds require unified digital infrastructure. Nael Technology Solutions designs and deploys robust campus-wide network and telephony ecosystems in Ethiopia. We link disparate buildings via underground/overhead armored fiber optic backbones, deploy high-density seamless Wi-Fi 6 roaming, configure enterprise Core/Distribution switches, and unify communications with an integrated IP-PABX system featuring direct extension dialing across all blocks.",
    problemItSolves: {
      title: "Overcoming Campus Connectivity Silos & Bandwidth Bottlenecks",
      description:
        "Large campuses frequently suffer from isolated building networks, dropped Wi-Fi connections when walking across facilities, and expensive external calls for internal communications.",
      points: [
        "Fragmented IT networks across different buildings forcing staff to use external telephone lines for internal queries",
        "Slow inter-building file transfers and server access due to outdated copper cable links",
        "Wi-Fi dead zones and annoying connection drops as users move between campus blocks and outdoor courtyards",
        "Lack of centralized network security firewalls leaving the entire institution vulnerable to cyber intrusions",
      ],
    },
    whatNaelProvides: {
      title: "Turnkey Campus Network & Telephony Deployment",
      description:
        "We build resilient, scalable optical backbones and unified communications engineered for thousands of concurrent users.",
      steps: [
        {
          number: "01",
          title: "Campus Optical Routing & RF Site Survey",
          description: "Mapping trenching routes, manhole infrastructure, fiber conduit distances, and wireless RF coverage requirements.",
        },
        {
          number: "02",
          title: "Armored Fiber Backbone Splicing & Testing",
          description: "Laying 24/48-core single-mode armored fiber backbones with fusion splicing and OTDR tier-2 loss certification.",
        },
        {
          number: "03",
          title: "Core Switching & Wi-Fi 6 AP Distribution",
          description: "Configuring multi-gigabit 10G/40G core routing switches, VLAN segmentation, and seamless roaming Wi-Fi access points.",
        },
        {
          number: "04",
          title: "IP-PABX Telephony Setup & Extension Mapping",
          description: "Deploying enterprise IP-PABX telephony servers with customized extension numbering, IVR attendants, and SIP trunking.",
        },
      ],
    },
    components: [
      {
        title: "Inter-Building Armored Single-Mode Fiber Backbone",
        description: "Underground rodent-proof 24-core to 96-core single-mode fiber optic cabling creating 10Gbps/40Gbps high-speed links between all campus blocks.",
        tags: ["Armored Fiber", "Single-Mode", "10Gbps / 40Gbps", "OTDR Certified"],
      },
      {
        title: "High-Density Wi-Fi 6 Roaming Access Points",
        description: "Enterprise indoor and outdoor weather-proof access points with 802.11k/v/r fast roaming protocols ensuring zero dropped connections.",
        tags: ["Wi-Fi 6", "Fast Roaming", "High Density", "Outdoor IP67 APs"],
      },
      {
        title: "Enterprise Core & Distribution Switching Layer",
        description: "Layer-3 managed switches with redundant power supplies, 10G SFP+ uplinks, PoE+ device powering, and advanced VLAN isolation.",
        tags: ["Layer-3 Core", "10G SFP+", "PoE+ 30W/60W", "VLAN Segmentation"],
      },
      {
        title: "Unified IP-PABX Telephony & Branch Extensions",
        description: "Scalable VoIP telephony server supporting hundreds of desktop IP phones, softphones on mobile devices, and automated IVR routing.",
        tags: ["IP-PABX", "VoIP Telephony", "Free Extension Calls", "IVR Attendant"],
      },
      {
        title: "Next-Generation Firewall & Bandwidth Management",
        description: "Centralized perimeter security appliance with deep packet inspection, guest portal authentication, and bandwidth QoS throttling.",
        tags: ["Next-Gen Firewall", "Guest Captive Portal", "Bandwidth QoS", "Cyber Defense"],
      },
    ],
    applications: [
      {
        facility: "Universities & Higher Education Campuses",
        description: "Connecting faculty blocks, student dormitories, computer labs, and administrative centers on a single high-speed network.",
        icon: "GraduationCap",
      },
      {
        facility: "Hospitality Resorts & Hotel Complexes",
        description: "High-speed guest Wi-Fi, property management system (PMS) integration, room IP telephony, and CCTV network.",
        icon: "Hotel",
      },
      {
        facility: "Commercial Mixed-Use Real Estate",
        description: "Shared optical infrastructure serving retail shopping malls, office towers, and underground parking facilities.",
        icon: "Building",
      },
      {
        facility: "Government Administrative Complexes",
        description: "Secure ministerial intranet, encrypted inter-agency VoIP dialing, and centralized disaster backup links.",
        icon: "Landmark",
      },
    ],
    standards: [
      "ANSI/TIA-568.3-D Optical Fiber Cabling Component Standard",
      "IEEE 802.11ax High-Efficiency Wireless (Wi-Fi 6) Standard",
      "IEEE 802.3af/at/bt Power-over-Ethernet Standards",
      "ITU-T H.323 / SIP Session Initiation Protocol for IP Telephony",
      "ISO/IEC 11801 Information Technology — Generic Cabling for Customer Premises",
    ],
    relatedServices: ["structured-cabling", "wireless-network", "call-center"],
    relatedSolutions: ["smart-boardroom", "datacenter-turnkey", "nurse-call-system"],
  },

  // 7. Fire Detection, Alarm & Clean-Agent Suppression Solution
  {
    slug: "fire-safety-suppression",
    id: "fire-safety-suppression-solution",
    title: "Integrated Fire Detection & Clean-Agent Suppression",
    category: "Physical Security & Banking",
    industry: "Commercial Buildings, Industrial Plants & Server Rooms",
    badge: "Life-Safety & Asset Protection Engineering",
    tagline: "Addressable smoke/heat detection, automatic emergency voice evacuation, sprinkler monitoring, and waterless clean-agent gas suppression.",
    image: "/images/services/fire-alarm.jpg",
    iconName: "Flame",
    overview:
      "Fire safety is non-negotiable for commercial buildings, industrial facilities, and data centers. Nael Technology Solutions delivers turnkey fire safety engineering compliant with international NFPA and Ethiopian building codes. Our integrated solutions combine addressable multi-zone fire detection panels, early-warning smoke/heat sensors, manual break-glass call points, emergency voice evacuation strobes, and automated waterless clean-agent gas suppression for electrical and server enclosures.",
    problemItSolves: {
      title: "Preventing Catastrophic Fire Loss & Regulatory Non-Compliance",
      description:
        "Facilities without integrated fire protection face uncontained fire outbreaks, structural destruction, regulatory shutdowns, and danger to human lives.",
      points: [
        "Delayed fire detection in unmonitored electrical rooms leading to rapid smoke escalation",
        "Water damage from conventional hoses or sprinklers destroying sensitive server hardware",
        "Non-compliance with Ethiopian municipal building safety codes and insurance requirements",
        "Lack of central monitoring causing delayed emergency fire brigade dispatch",
      ],
    },
    whatNaelProvides: {
      title: "Comprehensive Life-Safety Engineering & Commissioning",
      description:
        "From hydraulic gas calculations and detector zone mapping to annual maintenance certification, we protect lives and physical assets.",
      steps: [
        {
          number: "01",
          title: "Fire Risk & Zone Classification Survey",
          description: "Evaluating building occupancy, ceiling heights, electrical hazard zones, and designing addressable detection loops.",
        },
        {
          number: "02",
          title: "Fire-Resistant Shielded Cabling & Piping",
          description: "Installing red fire-rated certified cables, gas manifold distribution piping, and discharge nozzles.",
        },
        {
          number: "03",
          title: "Panel Programming & Interlock Testing",
          description: "Programming addressable control panels, elevator emergency grounding, HVAC shutoff, and access control door release.",
        },
        {
          number: "04",
          title: "Commissioning & Safety Certificate Handover",
          description: "Performing full system smoke simulation tests, audible sound level dB testing, and delivering compliance handover documentation.",
        },
      ],
    },
    components: [
      {
        title: "Addressable Fire Alarm Control Panels",
        description: "Multi-loop intelligent panels pinpointing the exact room and detector address of any alarm or fault event instantly.",
        tags: ["Addressable Panel", "Multi-Loop", "LCD Display", "Battery Backup"],
      },
      {
        title: "Photoelectric Smoke & Heat Detectors",
        description: "Microprocessor-based sensors with drift compensation and anti-dust algorithms to eliminate false alarms while detecting real fires rapidly.",
        tags: ["Smoke Detection", "Rate-of-Rise Heat", "Anti-Dust", "EN54 Certified"],
      },
      {
        title: "Clean-Agent Gas Extinguishing Systems",
        description: "Automated gaseous suppression (FM-200 / NOVEC) extinguishing electrical fires in enclosed server rooms without leaving residue.",
        tags: ["Clean Agent", "FM-200", "Zero Residue", "NFPA 2001"],
      },
      {
        title: "Voice Evacuation Strobes & Sounders",
        description: "High-decibel multi-tone sounders and synchronized xenon strobe lights delivering clear bilingual emergency evacuation instructions.",
        tags: ["Voice Evacuation", "Synchronized Strobes", "High dB Alert", "Emergency Audio"],
      },
      {
        title: "BMS & Access Control Safety Interlock",
        description: "Automatic integration that immediately unlocks all electromagnetic emergency exit doors and halts HVAC fans upon fire confirmation.",
        tags: ["Door Release", "HVAC Shutdown", "Elevator Recall", "BMS Integration"],
      },
    ],
    applications: [
      {
        facility: "Commercial High-Rise Office Towers",
        description: "Multi-story addressable detection with zoned floor evacuation and fire pump monitoring.",
        icon: "Building2",
      },
      {
        facility: "Mission-Critical Server Rooms & Data Centers",
        description: "Gas-based clean agent fire suppression for electrical rooms where water cannot be used.",
        icon: "Server",
      },
      {
        facility: "Manufacturing Plants & Warehouses",
        description: "Industrial heat sensors, flame detectors, and high-bay optical beam smoke detectors.",
        icon: "Factory",
      },
      {
        facility: "Hotels & Residential Complexes",
        description: "In-room sounder bases, corridor call points, and central 24/7 reception monitoring panels.",
        icon: "Hotel",
      },
    ],
    standards: [
      "NFPA 72 National Fire Alarm and Signaling Code",
      "NFPA 2001 Standard on Clean Agent Fire Extinguishing Systems",
      "EN 54 Fire Detection and Fire Alarm Systems European Standard",
      "Ethiopian Building Code Standard (EBCS) Fire Protection Directives",
      "UL 864 Standard for Control Units and Accessories for Fire Alarm Systems",
    ],
    relatedServices: ["fire-alarm", "data-center", "access-control"],
    relatedSolutions: ["datacenter-turnkey", "industrial-perimeter", "banking-security"],
  },

  // 8. Enterprise IP-PABX & Call Center Telephony Solution
  {
    slug: "call-center-telephony",
    id: "call-center-telephony-solution",
    title: "Enterprise IP-PABX & Call Center Telephony",
    category: "Corporate AV & Boardrooms",
    industry: "Customer Service Centers, Banks, Airlines & Commercial Sales Teams",
    badge: "Omnichannel Communications & Voice Automation",
    tagline: "High-capacity IP-PABX telephony, multi-level interactive voice response (IVR), automated call distribution (ACD), call recording, and CRM integration.",
    image: "/images/services/call-center.jpg",
    iconName: "Headphones",
    overview:
      "Customer engagement and seamless internal communications are the lifeblood of competitive businesses. Nael Technology Solutions engineers full-scale IP-PABX and modern call center telephony platforms for banks, airlines, telecom service desks, utility providers, and corporate sales offices in Ethiopia. Our solutions support high-volume inbound/outbound calling, intelligent IVR self-service trees, queue management, agent performance monitoring, call recording for compliance, and integration with CRM customer databases.",
    problemItSolves: {
      title: "Solving Call Congestion & Lack of Customer Visibility",
      description:
        "Enterprises using basic traditional phone lines struggle with busy signals, unmeasured customer hold times, lost business opportunities, and lack of agent accountability.",
      points: [
        "Frustrated customers encountering constant busy tones during peak business hours",
        "No automated interactive voice response (IVR) to route callers to the appropriate technical department",
        "Zero supervisor visibility into agent call duration, customer wait times, or dropped call rates",
        "High inter-office communication costs for companies operating multiple regional branch offices",
      ],
    },
    whatNaelProvides: {
      title: "Turnkey IP Telephony & Call Center Implementation",
      description:
        "We build scalable VoIP communications from on-premise PBX servers to agent headsets and analytics dashboards.",
      steps: [
        {
          number: "01",
          title: "Telephony Traffic & Extension Architecture",
          description: "Calculating simultaneous trunk line capacity, incoming call volumes, and designing custom IVR call-flow diagrams.",
        },
        {
          number: "02",
          title: "VoIP Server & SIP Trunk Configuration",
          description: "Deploying high-reliability IP-PABX servers, Ethio Telecom SIP trunk integration, and failover routing rules.",
        },
        {
          number: "03",
          title: "Agent Workstation & Headset Setup",
          description: "Installing gigabit IP desktop phones, softphones for remote agents, and noise-canceling USB call center headsets.",
        },
        {
          number: "04",
          title: "Supervisor Dashboard & Analytics Training",
          description: "Configuring real-time wallboard displays, call recording storage, queue management, and supervisor training.",
        },
      ],
    },
    components: [
      {
        title: "Enterprise IP-PABX Server Appliance",
        description: "High-availability telephony server supporting up to 500 concurrent calls, SIP trunking, automated attendants, and multi-office peering.",
        tags: ["IP-PABX", "SIP Trunking", "High Capacity", "Failover Redundancy"],
      },
      {
        title: "Multi-Level Interactive Voice Response (IVR)",
        description: "Customized multi-language voice menus guiding callers efficiently (e.g. \"Press 1 for Sales, Press 2 for Technical Support\").",
        tags: ["IVR Menus", "Multi-Language", "Self-Service", "Time-of-Day Routing"],
      },
      {
        title: "Automatic Call Distribution (ACD) & Queues",
        description: "Smart distribution algorithms routing incoming calls to available agents based on skill, round-robin, or longest-idle parameters.",
        tags: ["Smart Queue", "ACD Routing", "Skill-Based", "Hold Music & Announcements"],
      },
      {
        title: "100% Voice Recording & Quality Auditing",
        description: "Centralized encrypted audio recording of all inbound and outbound conversations with search filters for compliance and training.",
        tags: ["Voice Recording", "Encrypted Audio", "Quality Auditing", "Compliance"],
      },
      {
        title: "Live Supervisor Wallboards & Analytics",
        description: "Real-time visual dashboards displaying active calls, waiting callers, average handle time (AHT), and daily performance metrics.",
        tags: ["Live Wallboard", "Agent Metrics", "AHT Tracking", "Scheduled Reports"],
      },
    ],
    applications: [
      {
        facility: "Financial Services & Bank Customer Support",
        description: "High-volume card query hotlines, account verification IVR, and fraud reporting queues.",
        icon: "Landmark",
      },
      {
        facility: "Airline, Travel & Hospitality Desks",
        description: "Flight reservation inquiries, ticket modification queues, and multi-language agent routing.",
        icon: "Plane",
      },
      {
        facility: "Utility & Government Citizen Service Lines",
        description: "High-capacity public assistance hotlines, power/water outage reports, and emergency dispatch.",
        icon: "Zap",
      },
      {
        facility: "Corporate Multi-Branch Commercial Sales",
        description: "Inter-branch free extension calling, CRM screen-pop integration, and outbound telemarketing.",
        icon: "PhoneCall",
      },
    ],
    standards: [
      "ITU-T E.164 International Public Telecommunication Numbering Plan",
      "IETF RFC 3261 SIP: Session Initiation Protocol",
      "IETF RFC 3550 RTP: A Transport Protocol for Real-Time Applications",
      "PCI-DSS Guidelines on Protecting Voice-Recorded Cardholder Data",
      "ETSI Telecommunications and Internet converged Services and Protocols (TISPAN)",
    ],
    relatedServices: ["call-center", "wireless-network", "structured-cabling"],
    relatedSolutions: ["smart-boardroom", "campus-network", "banking-security"],
  },
];
