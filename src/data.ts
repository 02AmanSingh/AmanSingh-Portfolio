import { ResumeData } from "./types";

export const resumeData: ResumeData = {
  basics: {
    name: "Aman Kumar Singh",
    headline: "Support the product. Understand the data. Improve the experience.",
    supportingCopy:
      "I'm Aman Kumar Singh, a technology professional working across customer support, application troubleshooting, web technologies, and data analytics. I investigate problems, connect technical details to user experience, and turn data into actionable insights.",
    titles: [
      "Support Analyst SA1 @ Verifinity.ai (Client: Netlify)",
      "Technical Support Analyst",
      "Data Analyst & BI Specialist",
      "Application Support Engineer",
      "Product Support Engineer",
      "Full-Stack Web Troubleshooter"
    ],
    summary: [
      "I am a technology professional with hands-on experience bridging customer support, frontend web debugging, and data analytics. My work centers on investigating complex application tickets, isolating root causes in browser environments and network workflows, and extracting actionable business intelligence from operational data.",
      "With enterprise support experience at Verifinity.ai (supporting Netlify) and Infosys, combined with analytical project work in Python, Pandas, SQL, and Power BI, I help cross-functional teams maintain service reliability and optimize customer digital journeys."
    ],
    location: "Pune / Pimpri-Chinchwad Area, Maharashtra, India",
    email: "amansingh02001@gmail.com",
    phone: "+91 6200100569",
    linkedin: "https://www.linkedin.com/in/aman-singh-328432202/",
    github: "https://github.com/02AmanSingh"
  },
  targetRoles: [
    "Data Analyst",
    "Business Intelligence Analyst",
    "Junior Business Analyst",
    "Technical Support Analyst",
    "Application Support Engineer",
    "Product Support Engineer"
  ],
  experience: [
    {
      company: "Verifinity.ai",
      role: "Support Analyst SA1",
      client: "Netlify",
      dates: "31 August 2026 – Present",
      location: "Pune, Maharashtra, India (Hybrid)",
      isCurrent: true,
      bullets: [
        "Deliver front-line customer and technical support for developers and enterprise teams deploying applications on Netlify.",
        "Investigate billing-related inquiries, subscription renewals, invoice discrepancies, and account access authorization issues.",
        "Perform frontend UI/UX troubleshooting and browser debugging using Chrome DevTools to inspect console errors, failed API calls, and HTTP headers.",
        "Execute rigorous ticket investigation, triage, priority assessment, and escalation to Tier-2/Tier-3 engineering adhering strictly to SLA benchmarks.",
        "Analyze recurring support tickets and operational ticket volumes to surface platform friction points and recommend product documentation improvements.",
        "Author, update, and peer-review internal support playbooks, standard operating procedures (SOPs), and customer-facing troubleshooting guides."
      ],
      highlightTags: [
        "Netlify Support",
        "Chrome DevTools",
        "Billing & Access",
        "Ticket Prioritization",
        "SLA Compliance",
        "Troubleshooting Guides"
      ]
    },
    {
      company: "Infosys",
      role: "Technical Process Executive",
      dates: "May 2025 – July 2026",
      location: "Pune, Maharashtra, India",
      bullets: [
        "Delivered L2/L3 technical support for enterprise web applications, ensuring high availability and resolving incidents within agreed SLAs.",
        "Maintained and monitored frontend data flows and UI component rendering to prevent regressions and dynamic content failures.",
        "Managed incident lifecycles, user access requests (UAM/IAM), and root cause analysis (RCA) using ServiceNow ITSM.",
        "Debugged and diagnosed UI rendering issues using Chrome DevTools, isolating syntax and execution defects in HTML, CSS, and JavaScript.",
        "Designed and customized ServiceNow operational dashboards and KPI reports, increasing leadership visibility into team resolution speed.",
        "Configured ServiceNow UI forms, policies, layouts, and client scripts to improve ticket intake accuracy and streamline agent workflows."
      ],
      highlightTags: [
        "ServiceNow ITSM",
        "L2/L3 Support",
        "Root Cause Analysis",
        "User Access (IAM)",
        "ServiceNow Scripting",
        "SLA Governance"
      ]
    },
    {
      company: "Kumar Building Facility",
      role: "Data Operator",
      client: "Ecom Express",
      dates: "February 2025 – May 2025",
      location: "Gurugram, Haryana, India",
      bullets: [
        "Maintained operational data accuracy across high-volume inbound/outbound logistics shipments and barcode inventory databases.",
        "Provided dedicated end-user IT support and frontline hardware troubleshooting for Handheld Terminals (HST) and warehouse scanners.",
        "Collaborated with hub supervisors and warehouse personnel to train staff on scanning protocols, error recovery, and data logging accuracy.",
        "Configured and maintained local network connectivity (LAN switches, routers, and label printers) to uphold continuous dispatch operations."
      ],
      highlightTags: [
        "Logistics Data Accuracy",
        "Ecom Express",
        "Handheld Terminals (HST)",
        "Hardware Troubleshooting",
        "Network Connectivity"
      ]
    },
    {
      company: "Philip Morris International",
      role: "Information Technology Support Engineer",
      dates: "March 2025 – March 2025",
      location: "Gurugram, Haryana, India",
      bullets: [
        "Managed enterprise IT service requests and incidents using ServiceNow, resolving user issues within standard resolution targets.",
        "Supported Microsoft 365, Teams, and Outlook account setups, user permission configurations, and client mail sync troubleshooting.",
        "Configured corporate laptops and mobile device profiles, installed business-approved SAP software, and configured GlobalProtect VPN client connections.",
        "Diagnosed local network issues (DNS resolution, gateway connectivity, and firewall permissions) and provided remote assistance via Quick Assist."
      ],
      highlightTags: [
        "ServiceNow",
        "Microsoft 365",
        "SAP Basis Support",
        "GlobalProtect VPN",
        "Remote Desktop Support"
      ]
    }
  ],
  skills: [
    {
      category: "Data Analytics",
      description: "Exploratory analysis, dataset cleansing, statistical thinking, and business intelligence dashboards.",
      skills: [
        "Python (Pandas, NumPy)",
        "MySQL & Analytical SQL",
        "Power BI Dashboards",
        "Exploratory Data Analysis (EDA)",
        "Data Cleaning & Wrangling",
        "RFM & Cohort Segmentation",
        "DAX Calculated Measures",
        "Data Storytelling & Reporting",
        "Jupyter Notebook",
        "Statistical Modeling Basics"
      ]
    },
    {
      category: "Technical Support",
      description: "Enterprise incident management, root cause analysis, ticket triage, and SLA enforcement.",
      skills: [
        "L2/L3 Incident Management",
        "Root Cause Analysis (RCA)",
        "SLA Compliance & Monitoring",
        "ServiceNow (Forms, Policies, Scripts)",
        "Ticket Prioritization & Escalation",
        "User Access Management (UAM/IAM)",
        "ITIL Best Practices",
        "Support Runbooks & SOP Creation",
        "Customer Billing & Account Triage",
        "Remote Desktop Support"
      ]
    },
    {
      category: "Web Technologies",
      description: "Frontend debugging, browser devtools inspection, API testing, and web architecture.",
      skills: [
        "JavaScript (ES6+)",
        "React.js & Component Architecture",
        "HTML5 Semantic Markup",
        "CSS3 & Responsive Design",
        "REST API Integration",
        "Chrome DevTools Debugging",
        "Browser Console & Network Profiling",
        "WebSocket & Socket.io",
        "Node.js & Express.js",
        "JWT Authentication & Cookies"
      ]
    },
    {
      category: "Platforms & Tools",
      description: "Cloud hosting platforms, directory services, version control, and diagnostic utilities.",
      skills: [
        "Netlify Hosting & Deployments",
        "Git & GitHub Workflow",
        "Azure Active Directory (Azure AD)",
        "ServiceNow Platform",
        "Postman API Client",
        "SAP Basis End-User Client",
        "Microsoft Excel (Pivot Tables, VLOOKUP)",
        "GlobalProtect VPN",
        "Handheld Terminals (HST) & Scanners"
      ]
    }
  ],
  certifications: [
    "Atlassian IT Service Management (ITSM) Professional Certificate",
    "ServiceNow IT Leadership Professional Certificate",
    "ServiceNow: Basic Administration",
    "Frontend Developer(React)"
  ],
  education: [
    {
      institution: "Babu Banarasi Das University, Lucknow",
      degree: "Bachelor of Technology - B.Tech, Computer Science & Engineering",
      date: "Graduated June 2024",
      grade: "CGPA: 8.68 / 10",
      details:
        "Comprehensive curriculum in Data Structures, Object-Oriented Software Design (Java/C), Database Management Systems, Computer Networks, Operating Systems, and Discrete Mathematics."
    }
  ],
  languages: [
    "Hindi (Native / Full Professional)",
    "English (Full Professional Working Proficiency)"
  ],
  projects: [
    {
      title: "Customer Behavior Analysis",
      category: "Data Analytics",
      summary:
        "Exploratory data analysis uncovering customer purchasing patterns, retention drivers, and cohort revenue concentration in Python.",
      description:
        "An in-depth data analytics project investigating customer transactional records to understand purchase frequency, spending habits, demographic correlations, and churn indicators. The analysis provides actionable segmentation to help businesses tailor retention strategies rather than relying on blanket marketing outreach.",
      businessProblem:
        "Modern digital businesses struggle with customer drop-off and excessive customer acquisition costs when they treat all shoppers uniformly. Without behavioral visibility, high-value loyal customers receive the same messaging as one-off discount seekers. This project sets out to analyze customer purchasing histories, quantify retention risks, and segment customers by revenue contribution.",
      datasetObjective:
        "Transactional customer profiles covering demographics (age, income), purchase history (frequency, total basket value), and order dates. Objective: Clean, transform, and evaluate the dataset to isolate high-value cohorts and discover what behavioral variables correlate with repeat purchases.",
      toolsUsed: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Jupyter Notebook"
      ],
      techniquesDemonstrated: [
        "Data cleaning: handling missing values, imputing incomplete attributes, and removing duplicate entries",
        "Outlier identification using Interquartile Range (IQR) methods across order values",
        "Recency, Frequency, and Monetary (RFM) behavioral segmentation framework",
        "Correlation matrix analysis to identify dependencies between customer age, income, and transaction volume",
        "Visual storytelling with Seaborn distribution plots and demographic spend curves"
      ],
      keyFindings: [
        "A concentrated top tier of repeat customers generates a disproportionate share of cumulative revenue, confirming that customer retention programs yield significantly higher return on investment than blind user acquisition.",
        "Identified distinct transaction intervals where first-time purchasers typically disengage without follow-up incentive campaigns.",
        "Established clear behavioral profiles to categorize audiences into active loyalists, seasonal discount seekers, and at-risk cohorts."
      ],
      bullets: [
        "Developed automated data cleaning workflows in Pandas to normalize raw customer transaction logs.",
        "Applied statistical summary methods and Seaborn heatmaps to explore correlations between customer attributes and purchase sizes.",
        "Produced actionable customer segmentation insights to help marketing teams prioritize retention initiatives."
      ],
      githubUrl: "https://github.com/02AmanSingh/Customer_Behavior_Analysis",
      notebookUrl: "https://github.com/02AmanSingh/Customer_Behavior_Analysis"
    },
    {
      title: "T20 Cricket Best XI Analysis Dashboard",
      category: "Data Analytics",
      summary:
        "Comprehensive sports analytics project and interactive Power BI dashboard evaluating player performance metrics to select a balanced 11-player squad.",
      description:
        "A data-driven sports analytics solution that processes delivery-level tournament data to evaluate player performance across specific match phases (Powerplay, Middle Overs, Death Overs) and construct a statistically balanced 11-player T20 team.",
      businessProblem:
        "Selecting a competitive T20 cricket squad using aggregate statistics (like total runs or total wickets) creates blind spots regarding match context, strike velocity, and role compatibility. The challenge was to define role-specific KPIs (Openers, Middle Order Anchors, Power Hitters, All-Rounders, and Death Bowlers) to assemble an optimal squad based on phase-specific execution.",
      datasetObjective:
        "Ball-by-ball tournament logs covering international T20 cricket matches sourced from ESPN Cricinfo tournament records. Objective: Clean, aggregate, and engineer metrics to evaluate individual player consistency and match impact.",
      toolsUsed: [
        "Python",
        "Pandas",
        "Power BI",
        "DAX (Data Analysis Expressions)",
        "Jupyter Notebook"
      ],
      techniquesDemonstrated: [
        "Data wrangling and transformation using Pandas to parse complex delivery-level events and match scorecards",
        "Feature engineering for modern T20 KPIs: Boundary %, Dot Ball %, Batting Strike Rate, Economy Rate, and Wickets per Over",
        "Role-based benchmark filtering across Openers, Middle Order Anchors, Power Hitters (Finishers), All-Rounders, and Specialist Bowlers",
        "Interactive Power BI dashboard construction featuring dynamic slicers, matrix comparisons, and DAX calculated measures",
        "Visual trade-off analysis comparing scoring acceleration against wicket preservation"
      ],
      keyFindings: [
        "Boundary percentages in the first 6 Powerplay overs correlate more strongly with match victories than raw wicket retention.",
        "Identified an optimal 11-player squad composition maintaining power hitting through overs 16–20 alongside middle-overs bowling with sub-7.5 economy rates.",
        "Demonstrated that death-over bowling economy and dot-ball frequency are far more decisive in defending totals than aggregate tournament wickets."
      ],
      bullets: [
        "Cleaned and aggregated delivery-level tournament logs into structured player performance tables using Pandas.",
        "Authored custom DAX measures in Power BI to calculate dynamic strike rates, economy figures, and role benchmark rankings.",
        "Built an interactive multi-view dashboard enabling users to filter player candidates by team, role, and match scenario."
      ],
      githubUrl: "https://github.com/02AmanSingh/T20_Cricket_Best11Player-Analysis-Dashboard",
      notebookUrl: "https://github.com/02AmanSingh/T20_Cricket_Best11Player-Analysis-Dashboard"
    },
    {
      title: "Rate Limiter Redis (rate-limiter-rediss)",
      category: "Technical Support & Systems",
      summary:
        "Published NPM API rate-limiting middleware safeguarding Node.js endpoints against DDoS spikes and brute-force traffic under 2ms using Redis.",
      description:
        "An in-memory rate-limiting middleware package published to the NPM registry. It intercepts incoming client requests, evaluates IP and user token allowances against Redis in-memory data structures, and throttles abusive traffic with standard HTTP 429 responses.",
      businessProblem:
        "Unrestricted API endpoints are susceptible to brute-force credential stuffing, automated scrapers, and volumetric traffic surges that degrade system availability. Production environments need lightweight middleware that throttles abusive clients with minimal latency overhead.",
      datasetObjective:
        "High-concurrency synthetic and real HTTP requests monitored for latency overhead, request throughput, and HTTP 429 Too Many Requests enforcement.",
      toolsUsed: [
        "Node.js",
        "Express.js",
        "Redis",
        "TypeScript",
        "NPM Registry"
      ],
      techniquesDemonstrated: [
        "Sliding window counter and token bucket rate-limiting algorithms",
        "Sub-2ms Redis key read/write execution with automated TTL key expiration",
        "Standard RateLimit-* HTTP response header compliance",
        "Graceful fallback handling when Redis connectivity experiences latency or interruption",
        "Published as a fully typed package with strict TypeScript declarations"
      ],
      keyFindings: [
        "Mitigates repeated brute-force attacks and prevents cascading API failures by throttling excessive client requests within 2ms.",
        "Maintains service stability during sudden request spikes without exhausting server memory."
      ],
      bullets: [
        "Engineered middleware intercepting and evaluating incoming traffic under 2ms using Redis memory structures.",
        "Distributed as a production-ready package on NPM with custom duration hooks and configurable thresholds.",
        "Implemented standard RateLimit headers to help client applications respect API consumption allowances."
      ],
      githubUrl: "https://github.com/02AmanSingh/rate-limiter-rediss",
      isNPM: true
    },
    {
      title: "Let's Chat Real-Time Application",
      category: "Web Engineering",
      summary:
        "Full-stack real-time collaboration application featuring bidirectional WebSocket streaming, JWT authentication, and browser UI state caching.",
      description:
        "A full-duplex communication platform built on the MERN stack with Socket.io, providing instant multi-room messaging, user presence detection, and secure cookie-based session handling.",
      businessProblem:
        "Building responsive real-time web applications requires balancing persistent network tunnels, low-latency UI updates, and secure state authentication without causing browser UI freezes or message loss.",
      datasetObjective:
        "Real-time message payloads, connection heartbeat events, and room member status data.",
      toolsUsed: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.io",
        "Tailwind CSS",
        "Vite"
      ],
      techniquesDemonstrated: [
        "WebSocket event lifecycle handling: connect, disconnect, reconnect, and room broadcasts",
        "JWT (JSON Web Token) authentication with secure HTTP-only cookie transport",
        "Optimistic UI updates and local browser state caching to minimize perceived network latency",
        "Responsive UI engineering and DevTools network timeline profiling for smooth 60fps rendering"
      ],
      keyFindings: [
        "Achieved sub-100ms message delivery between active client sockets across separate browser windows.",
        "Eliminated race conditions in thread rendering by enforcing sequential message dispatch and local state reconciliation."
      ],
      bullets: [
        "Architected low-latency dynamic communication tunnels with Socket.io room segregation.",
        "Implemented secure token authentication and protected API endpoints against unauthorized access.",
        "Profiled and debugged DOM rendering cycles using Chrome DevTools to eliminate layout thrashing."
      ],
      githubUrl: "https://github.com/02AmanSingh/Let-s-Chat_MERN_APP"
    }
  ]
};

export const impactHighlights = [
  {
    metric: "Netlify Platform Support",
    context: "Customer issue diagnosis, DNS & build troubleshooting, and account access resolution at Verifinity.ai.",
    source: "Deliver front-line customer and technical support for developers and enterprise teams deploying applications on Netlify."
  },
  {
    metric: "L2/L3 Enterprise Support",
    context: "Sustained high uptime and SLA compliance across enterprise web applications and ServiceNow workflows at Infosys.",
    source: "Delivered L2/L3 technical support for enterprise web applications, ensuring high availability and resolving incidents within agreed SLAs."
  },
  {
    metric: "Data Analytics & BI",
    context: "Engineered exploratory analysis and Power BI dashboards from real tournament and customer behavioral datasets.",
    source: "Developed automated data cleaning workflows in Pandas, authoring custom DAX measures in Power BI for role-specific KPI evaluations."
  },
  {
    metric: "Web Debugging & Systems",
    context: "In-depth Chrome DevTools browser inspection and published Redis rate-limiting package under 2ms latency.",
    source: "Debugged and diagnosed UI rendering issues using Chrome DevTools; engineered Redis middleware published on NPM."
  }
];
