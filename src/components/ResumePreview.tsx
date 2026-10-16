import { useState } from "react";
import { Printer, Copy, Check, FileText } from "lucide-react";

export default function ResumePreview() {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `AMAN KUMAR SINGH
+91 6200100569 | amansingh02001@gmail.com | LinkedIn: linkedin.com/in/aman-singh-328432202 | GitHub: github.com/02AmanSingh
Location: Pune, Maharashtra, India

PROFESSIONAL SUMMARY
Technology professional with cross-functional experience across technical support, web application troubleshooting, and data analytics. Proven track record in front-line customer engineering at Verifinity.ai (supporting Netlify) and enterprise L2/L3 application support at Infosys. Experienced in browser DevTools debugging, incident root cause analysis (RCA), and extracting business insights from datasets using Python (Pandas, NumPy) and Power BI.

TECHNICAL SKILLS
• Data Analytics: Python (Pandas, NumPy), MySQL, Power BI Dashboards, Exploratory Data Analysis (EDA), RFM Segmentation, DAX Measures, Statistical Analysis
• Technical Support & ITSM: L2/L3 Incident Management, Root Cause Analysis (RCA), SLA Compliance, ServiceNow Administration (Forms, Policies, Scripts), UAM/IAM, ITIL Best Practices, SOPs & Playbooks
• Web Technologies: JavaScript (ES6+), React.js, HTML5, CSS3, REST APIs, Chrome DevTools Debugging, Browser Network Profiling, WebSocket, Node.js, Express.js
• Platforms & Tools: Netlify Hosting, Git & GitHub, Azure Active Directory, SAP Basis Client, Postman, Microsoft Excel (Pivot Tables, VLOOKUP), Handheld Terminals (HST)

PROFESSIONAL EXPERIENCE

Support Analyst SA1 – Verifinity.ai (Client / Platform: Netlify)
31 August 2026 -- Present | Pune, India
• Deliver technical support for developers and enterprise teams deploying modern web applications on Netlify.
• Investigate billing inquiries, subscription renewals, invoice reconciliation, and account access issues.
• Troubleshoot frontend UI/UX anomalies and runtime errors using Chrome DevTools to inspect console logs, network requests, and HTTP headers.
• Triage, prioritize, and escalate complex tickets to Tier-2/Tier-3 engineering teams in adherence to strict SLA targets.
• Analyze recurring customer support tickets to surface platform usability friction points and improve product documentation.
• Author and maintain internal support playbooks, standard operating procedures (SOPs), and customer troubleshooting guides.

Technical Process Executive – Infosys
May 2025 -- July 2026 | Pune, Maharashtra, India
• Delivered L2/L3 technical support for enterprise web applications, maintaining system uptime and resolving incidents within agreed SLAs.
• Monitored frontend data flows and UI component rendering to prevent regressions and dynamic content failures.
• Managed incident lifecycles, user access provisioning (UAM/IAM), and root cause analysis (RCA) via ServiceNow ITSM.
• Diagnosed and debugged browser UI execution issues using Chrome DevTools across HTML, CSS, and JavaScript.
• Designed and customized ServiceNow operational dashboards and KPI reports to improve visibility into team ticket turnaround times.
• Configured ServiceNow UI forms, policies, layouts, and client scripts to streamline ticket intake accuracy.

Data Operator – Kumar Building Facility (Client: Ecom Express)
February 2025 -- May 2025 | Gurugram, Haryana, India
• Maintained operational data integrity across high-volume inbound/outbound logistics shipments and barcode inventory databases.
• Delivered frontline IT support and hardware troubleshooting for Handheld Terminals (HST) and barcode scanners on the warehouse floor.
• Collaborated with hub supervisors to audit inventory discrepancies and train operations staff on proper device handling.
• Configured and maintained local network connectivity (LAN switches, routers, and label printers) to uphold continuous dispatch operations.

FEATURED PROJECTS

Customer Behavior Analysis (Python, Pandas, NumPy, Matplotlib, Seaborn)
• Conducted comprehensive exploratory data analysis on transactional customer profiles to uncover purchasing patterns and churn factors.
• Applied RFM (Recency, Frequency, Monetary) segmentation and correlation matrices to identify high-value customer cohorts.
• Generated data-backed recommendations for retention marketing strategies to mitigate customer drop-off.
• GitHub: github.com/02AmanSingh/Customer_Behavior_Analysis

T20 Cricket Best XI Analysis Dashboard (Python, Pandas, Power BI, DAX)
• Processed delivery-level tournament logs to model role-specific player performance across Powerplay, Middle, and Death overs.
• Authored custom DAX calculated measures in Power BI to evaluate Strike Rates, Economy Rates, Boundary %, and Dot Ball %.
• Built an interactive multi-view dashboard to select a statistically balanced 11-player squad based on phase-specific execution.
• GitHub: github.com/02AmanSingh/T20_Cricket_Best11Player-Analysis-Dashboard

Rate Limiter Redis (Node.js, Express.js, Redis, TypeScript, NPM)
• Engineered high-performance API rate-limiting middleware capable of intercepting and validating traffic under 2ms using Redis.
• Published production-ready package to NPM registry with custom duration hooks and configurable thresholds to shield endpoints from DDoS abuse.
• GitHub: github.com/02AmanSingh/rate-limiter-rediss

EDUCATION
Bachelor of Technology (B.Tech) in Computer Science & Engineering | CGPA: 8.68 / 10
Babu Banarasi Das University, Lucknow (Graduated June 2024)

CERTIFICATIONS
• Atlassian IT Service Management (ITSM) Professional Certificate
• ServiceNow IT Leadership Professional Certificate
• ServiceNow: Basic Administration
• Frontend Developer(React)

LANGUAGES
• English (Full Professional Working Proficiency)
• Hindi (Native / Full Professional)`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="resume-viewer" className="py-20 border-b border-black/10 dark:border-stone-800 bg-[#FFFDF2] dark:bg-[#000000] transition-colors duration-200">
      <div className="max-w-4xl mx-auto space-y-8 text-left px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-2">
          <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            Curriculum Vitae
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black dark:text-[#FFFDF2]">
            ATS-Formatted Formal Resume
          </h2>
          <p className="text-sm text-stone-700 dark:text-stone-300 max-w-2xl leading-relaxed">
            Standard single-column layout formatted for corporate Applicant Tracking Systems (ATS) and hiring committee review.
          </p>
        </div>

        {/* Action Toolbar */}
        <div id="cv-toolbar" className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-lg bg-white dark:bg-[#0D0D0D] border border-black/10 dark:border-stone-800 shadow-2xs">
          <div className="flex items-center gap-2 text-xs font-mono text-stone-700 dark:text-stone-300">
            <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Format: Standard ATS-Optimized Clean Typography</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyText}
              className="px-3.5 py-2 text-xs font-semibold text-black dark:text-[#FFFDF2] bg-black/5 dark:bg-[#1C1C1C] hover:bg-black/10 dark:hover:bg-[#282828] border border-black/10 dark:border-stone-700 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Copy formatted plain-text resume"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-700 dark:text-emerald-400 font-medium">Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy TXT Resume</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer"
              title="Print standard copy or save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>

        {/* Clean ATS Resume Paper Viewport */}
        <div 
          id="formal-cv-document"
          className="bg-white text-stone-900 rounded-lg p-8 sm:p-14 shadow-sm border border-black/10 dark:border-stone-800 text-left font-serif text-[13px] leading-relaxed select-text"
        >
          {/* Header */}
          <div className="text-center pb-5 border-b border-stone-900 space-y-1">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-950 uppercase font-serif">
              Aman Kumar Singh
            </h3>
            <div className="text-xs text-stone-700 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-serif">
              <span>+91 6200100569</span>
              <span className="text-stone-400">|</span>
              <a href="mailto:amansingh02001@gmail.com" className="hover:underline text-stone-900">
                amansingh02001@gmail.com
              </a>
              <span className="text-stone-400">|</span>
              <a href="https://linkedin.com/in/aman-singh-328432202" target="_blank" rel="noreferrer" className="hover:underline text-stone-900">
                LinkedIn: linkedin.com/in/aman-singh-328432202
              </a>
              <span className="text-stone-400">|</span>
              <a href="https://github.com/02AmanSingh" target="_blank" rel="noreferrer" className="hover:underline text-stone-900">
                GitHub: github.com/02AmanSingh
              </a>
            </div>
            <p className="text-xs text-stone-600 font-serif">Location: Pune, Maharashtra, India</p>
          </div>

          <div className="space-y-6 pt-5">
            {/* Summary */}
            <section className="space-y-1.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-950 border-b border-stone-300 pb-1 font-serif">
                Professional Summary
              </h4>
              <p className="text-stone-800 leading-relaxed font-serif text-justify">
                Technology professional with cross-functional experience across technical support, web application troubleshooting, and data analytics. Proven track record in front-line customer engineering at Verifinity.ai (supporting Netlify) and enterprise L2/L3 application support at Infosys. Experienced in browser DevTools debugging, incident root cause analysis (RCA), and extracting business insights from datasets using Python (Pandas, NumPy) and Power BI.
              </p>
            </section>

            {/* Technical Skills */}
            <section className="space-y-1.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-950 border-b border-stone-300 pb-1 font-serif">
                Technical Skills & Competencies
              </h4>
              <ul className="list-disc pl-5 text-stone-800 font-serif space-y-1 text-xs">
                <li>
                  <strong>Data Analytics:</strong> Python (Pandas, NumPy), MySQL, Power BI Dashboards, Exploratory Data Analysis (EDA), RFM Segmentation, DAX Calculated Measures, Statistical Analysis.
                </li>
                <li>
                  <strong>Technical Support & ITSM:</strong> L2/L3 Incident Management, Root Cause Analysis (RCA), SLA Compliance, ServiceNow Administration (Forms, Policies, Scripts), UAM/IAM, ITIL Best Practices, SOPs & Playbooks.
                </li>
                <li>
                  <strong>Web Technologies:</strong> JavaScript (ES6+), React.js, HTML5, CSS3, REST APIs, Chrome DevTools Debugging, Browser Network Profiling, WebSocket, Node.js, Express.js.
                </li>
                <li>
                  <strong>Platforms & Tools:</strong> Netlify Hosting, Git & GitHub, Azure Active Directory, SAP Basis Client, Postman, Microsoft Excel (Pivot Tables, VLOOKUP), Handheld Terminals (HST).
                </li>
              </ul>
            </section>

            {/* Experience */}
            <section className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-950 border-b border-stone-300 pb-1 font-serif">
                Professional Experience
              </h4>

              {/* Role 1: Verifinity.ai */}
              <div className="space-y-1">
                <div className="flex justify-between items-baseline font-serif">
                  <span className="font-bold text-stone-950">
                    Support Analyst SA1 – Verifinity.ai (Client: Netlify)
                  </span>
                  <span className="text-xs text-stone-700 font-serif">31 August 2026 – Present | Pune, India</span>
                </div>
                <ul className="list-disc pl-5 text-stone-800 font-serif space-y-0.5 text-xs">
                  <li>Deliver technical support for developers and enterprise teams deploying modern web applications on Netlify.</li>
                  <li>Investigate billing inquiries, subscription renewals, invoice reconciliation, and account access issues.</li>
                  <li>Troubleshoot frontend UI/UX anomalies and runtime errors using Chrome DevTools to inspect console logs and HTTP headers.</li>
                  <li>Triage, prioritize, and escalate complex tickets to Tier-2/Tier-3 engineering teams in adherence to strict SLA targets.</li>
                  <li>Analyze recurring customer support tickets to surface platform usability friction points and improve product documentation.</li>
                  <li>Author and maintain internal support playbooks, standard operating procedures (SOPs), and customer troubleshooting guides.</li>
                </ul>
              </div>

              {/* Role 2: Infosys */}
              <div className="space-y-1 pt-1">
                <div className="flex justify-between items-baseline font-serif">
                  <span className="font-bold text-stone-950">
                    Technical Process Executive – Infosys
                  </span>
                  <span className="text-xs text-stone-700 font-serif">May 2025 – July 2026 | Pune, India</span>
                </div>
                <ul className="list-disc pl-5 text-stone-800 font-serif space-y-0.5 text-xs">
                  <li>Delivered L2/L3 technical support for enterprise web applications, maintaining system uptime and resolving incidents within agreed SLAs.</li>
                  <li>Monitored frontend data flows and UI component rendering to prevent regressions and dynamic content failures.</li>
                  <li>Managed incident lifecycles, user access provisioning (UAM/IAM), and root cause analysis (RCA) via ServiceNow ITSM.</li>
                  <li>Diagnosed and debugged browser UI execution issues using Chrome DevTools across HTML, CSS, and JavaScript.</li>
                  <li>Designed and customized ServiceNow operational dashboards and KPI reports to improve visibility into team ticket turnaround times.</li>
                  <li>Configured ServiceNow UI forms, policies, layouts, and client scripts to streamline ticket intake accuracy.</li>
                </ul>
              </div>

              {/* Role 3: Ecom Express */}
              <div className="space-y-1 pt-1">
                <div className="flex justify-between items-baseline font-serif">
                  <span className="font-bold text-stone-950">
                    Data Operator – Kumar Building Facility (Client: Ecom Express)
                  </span>
                  <span className="text-xs text-stone-700 font-serif">February 2025 – May 2025 | Gurugram, India</span>
                </div>
                <ul className="list-disc pl-5 text-stone-800 font-serif space-y-0.5 text-xs">
                  <li>Maintained operational data integrity across high-volume inbound/outbound logistics shipments and barcode inventory databases.</li>
                  <li>Delivered frontline IT support and hardware troubleshooting for Handheld Terminals (HST) and barcode scanners on the warehouse floor.</li>
                  <li>Collaborated with hub supervisors to audit inventory discrepancies and train operations staff on proper device handling.</li>
                  <li>Configured and maintained local network connectivity (LAN switches, routers, and label printers) to uphold continuous dispatch operations.</li>
                </ul>
              </div>
            </section>

            {/* Featured Projects */}
            <section className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-950 border-b border-stone-300 pb-1 font-serif">
                Featured Projects
              </h4>

              <div className="space-y-1">
                <div className="flex justify-between items-baseline font-serif">
                  <span className="font-bold text-stone-950">
                    Customer Behavior Analysis (Python, Pandas, NumPy, Seaborn)
                  </span>
                  <span className="text-xs text-stone-600 font-serif italic">GitHub Repository</span>
                </div>
                <ul className="list-disc pl-5 text-stone-800 font-serif space-y-0.5 text-xs">
                  <li>Conducted comprehensive exploratory data analysis on transactional customer profiles to uncover purchasing patterns and churn factors.</li>
                  <li>Applied RFM (Recency, Frequency, Monetary) segmentation and correlation matrices to identify high-value customer cohorts.</li>
                  <li>Generated data-backed recommendations for retention marketing strategies to mitigate customer drop-off.</li>
                </ul>
              </div>

              <div className="space-y-1 pt-1">
                <div className="flex justify-between items-baseline font-serif">
                  <span className="font-bold text-stone-950">
                    T20 Cricket Best XI Analysis Dashboard (Python, Pandas, Power BI, DAX)
                  </span>
                  <span className="text-xs text-stone-600 font-serif italic">GitHub Repository</span>
                </div>
                <ul className="list-disc pl-5 text-stone-800 font-serif space-y-0.5 text-xs">
                  <li>Processed delivery-level tournament logs to model role-specific player performance across Powerplay, Middle, and Death overs.</li>
                  <li>Authored custom DAX calculated measures in Power BI to evaluate Strike Rates, Economy Rates, Boundary %, and Dot Ball %.</li>
                  <li>Built an interactive multi-view dashboard to select a statistically balanced 11-player squad based on phase-specific execution.</li>
                </ul>
              </div>

              <div className="space-y-1 pt-1">
                <div className="flex justify-between items-baseline font-serif">
                  <span className="font-bold text-stone-950">
                    Rate Limiter Redis (Node.js, Express.js, Redis, TypeScript, NPM)
                  </span>
                  <span className="text-xs text-stone-600 font-serif italic">Published NPM Package</span>
                </div>
                <ul className="list-disc pl-5 text-stone-800 font-serif space-y-0.5 text-xs">
                  <li>Engineered high-performance API rate-limiting middleware capable of intercepting traffic under 2ms using Redis.</li>
                  <li>Published production-ready package to NPM registry with custom duration hooks and configurable thresholds.</li>
                </ul>
              </div>
            </section>

            {/* Education & Certifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <section className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-950 border-b border-stone-300 pb-1 font-serif">
                  Education
                </h4>
                <p className="font-bold text-stone-950 font-serif text-xs">
                  Babu Banarasi Das University, Lucknow
                </p>
                <p className="text-stone-800 font-serif text-xs">
                  Bachelor of Technology in Computer Science & Engineering
                </p>
                <p className="text-xs text-stone-700 font-serif">Graduated June 2024 | CGPA: 8.68 / 10</p>
              </section>

              <section className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-950 border-b border-stone-300 pb-1 font-serif">
                  Certifications
                </h4>
                <ul className="list-disc pl-4 text-xs text-stone-800 font-serif space-y-0.5">
                  <li>Atlassian IT Service Management (ITSM) Professional Certificate</li>
                  <li>ServiceNow IT Leadership Professional Certificate</li>
                  <li>ServiceNow: Basic Administration</li>
                  <li>Frontend Developer(React)</li>
                </ul>
              </section>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
