import { useState } from "react";
import { Printer, Copy, Check, Sparkles, Download, FileText, Globe } from "lucide-react";
import { resumeData } from "../data";

export default function ResumePreview() {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    // Generate text layout exactly matching LaTeX
    let text = `AMAN KUMAR SINGH\n`;
    text = text + `+91 6200100569 | amansingh02001@gmail.com | LinkedIn (linkedin.com/in/aman-singh-328432202) | GitHub (github.com/02AmanSingh)\n\n`;
    
    text = text + `SUMMARY\n`;
    text = text + `Results-driven developer with experience building scalable web applications using React, Node.js, and MongoDB. Skilled in real-time systems, API design, and performance optimization. Proven ability to deliver responsive and user-centric solutions.\n\n`;
    
    text = text + `SKILLS / RELEVANT COURSEWORK\n`;
    text = text + `- Languages: Java, JavaScript, C, Python\n`;
    text = text + `- Frontend: React.js, HTML5, CSS, Bootstrap\n`;
    text = text + `- Backend: Node.js, Express.js\n`;
    text = text + `- Database: MySQL, MongoDB\n`;
    text = text + `- Tools: Git, GitHub, ServiceNow, Azure AD, SAP Basis, Admin.net, IAM Access Management\n`;
    text = text + `- Concepts: OOPs, REST APIs, WebSocket, JWT Authentication\n\n`;
    
    text = text + `EXPERIENCE\n`;
    text = text + `Technical Process Executive – Infosys | May 2025 -- Present\n`;
    text = text + `• Delivered L2/L3 support for enterprise web applications, ensuring high availability and faster issue resolution.\n`;
    text = text + `• Maintained and monitored frontend data flow and UI components, ensuring rendering of dynamic content.\n`;
    text = text + `• Performed incident management, service requests, and problem troubleshooting using ITSM tools.\n`;
    text = text + `• Debugged and resolved UI issues using Chrome DevTools, identifying problems in HTML, CSS, and JavaScript execution.\n`;
    text = text + `• Designed and customized ServiceNow dashboards and reports, enhancing visibility of team performance metrics.\n`;
    text = text + `• Modified UI forms, layouts, UI policies, and client scripts in ServiceNow, improving usability and workflow efficiency.\n\n`;
    
    text = text + `PROJECTS\n`;
    text = text + `Real Time Let's Chat Application (MERN Stack, Socket.io, Vite.js)\n`;
    text = text + `• Developed a real-time chat application using MERN Stack and Socket.io supporting concurrent users.\n`;
    text = text + `• Implemented WebSocket-based architecture communication achieving low-latency messaging.\n`;
    text = text + `• Integrated REST APIs and JWT-based authentication for secure user sessions.\n`;
    text = text + `• Developed responsive UI components using React.js, ensuring cross-device compatibility.\n\n`;
    text = text + `Rate Limiter Redis (Node.js + Redis)\n`;
    text = text + `• Designed a scalable API rate limiter using Node.js and Redis to handle high traffic loads.\n`;
    text = text + `• Reduced server overload by implementing request throttling and caching strategies.\n`;
    text = text + `• Optimized performance using efficient data structures for concurrent requests.\n\n`;
    
    text = text + `EDUCATION\n`;
    text = text + `Babu Banarasi Das University, Lucknow\n`;
    text = text + `Bachelor of Technology in Computer Science Engineering (CGPA: 8.68)\n\n`;
    
    text = text + `CERTIFICATIONS\n`;
    text = text + `• Atlassian IT Service Management (ITSM) Professional Certificate\n`;
    text = text + `• ServiceNow IT Leadership Professional Certificate\n`;
    text = text + `• ServiceNow: Basic Administration\n`;
    text = text + `• Frontend Developer(React)\n\n`;
    
    text = text + `EXTRA-CURRICULAR\n`;
    text = text + `• Sports Coordinator – AKTU College Fest (2024)\n`;
    text = text + `• Led a team of 15 for Khelo India National Games venue branding, ensuring timely execution and coordination.\n`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="resume-viewer" className="py-24 relative overflow-hidden px-4">
      {/* Background gradients */}
      <div className="absolute top-1/4 right-10 w-80 h-80 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        
        {/* Header Title */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
              RECRUITER ACCESS SHEETS
            </span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tight text-white">
            Formal Resume Hub
          </h2>
          <p className="text-xs text-slate-400 font-mono tracking-wider max-w-xl mx-auto leading-relaxed">
            PRINT-READY LAYOUT OPTIMIZED FOR ENTERPRISE APPLICANT TRACKING SYSTEMS (ATS)
          </p>
        </div>

        {/* Toolbar widgets */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#0b0e14]/90 border border-white/5 shadow-md">
          <span className="text-xs font-mono text-slate-400">
            SECURE_VIEWPORT_CONNECTED
          </span>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopyText}
              className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 border border-white/10 transition flex items-center space-x-1.5"
              title="Copy plain-text CV details"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-400" />
                  <span className="text-green-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy TXT</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:brightness-110 text-xs font-mono text-white transition flex items-center space-x-1.5 shadow-[0_4px_15px_rgba(37,99,235,0.3)]"
              title="Print standard copy of this CV directly"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print/Download PDF</span>
            </button>
          </div>
        </div>

        {/* Outer Formal Visual Container matching Standard White PDF style cleanly on print */}
        <div 
          id="formal-cv-document"
          className="bg-white text-slate-900 rounded-2xl p-6 sm:p-12 shadow-2xl text-left font-serif border border-slate-200 print:shadow-none print:p-0 print:border-none relative select-text"
        >
          {/* Print instructions overlay - hidden on print */}
          <div className="absolute top-4 right-4 flex items-center space-x-1 px-2.5 py-1 bg-slate-100 text-slate-700 text-[10px] font-mono rounded border border-slate-200 uppercase tracking-wider print:hidden select-none">
            <Printer className="w-3 h-3" />
            <span>Optimal on A4/Letter size</span>
          </div>

          {/* LaTeX Document Body container */}
          <div className="max-w-[800px] mx-auto text-[13px] leading-relaxed text-[#111] space-y-5">
            
            {/* LaTeX-style Header section */}
            <div className="text-center space-y-1">
              <h3 className="text-3xl font-bold tracking-tight text-slate-950 font-serif uppercase">
                AMAN KUMAR SINGH
              </h3>
              
              <div className="text-xs sm:text-sm text-slate-800 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 font-serif">
                <span>+91 6200100569</span>
                <span className="text-slate-400 font-sans">|</span>
                <a 
                  href="mailto:amansingh02001@gmail.com" 
                  className="hover:underline hover:text-blue-600 font-serif"
                >
                  amansingh02001@gmail.com
                </a>
                <span className="text-slate-400 font-sans">|</span>
                <a 
                  href="https://linkedin.com/in/aman-singh-328432202" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:underline hover:text-blue-600 font-serif"
                >
                  LinkedIn
                </a>
                <span className="text-slate-400 font-sans">|</span>
                <a 
                  href="https://github.com/02AmanSingh" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:underline hover:text-blue-600 font-serif"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* LaTeX-style SUMMARY Section */}
            <div className="space-y-1 page-break-inside-avoid">
              <h4 className="text-[13.5px] font-bold tracking-wider text-slate-950 border-b border-slate-950 uppercase pb-0.5 font-serif select-none">
                SUMMARY
              </h4>
              <p className="text-[#111] font-serif text-justify leading-relaxed">
                Results-driven developer with experience building scalable web applications using React, Node.js, and MongoDB. Skilled in real-time systems, API design, and performance optimization. Proven ability to deliver responsive and user-centric solutions.
              </p>
            </div>

            {/* LaTeX-style SKILLS / RELEVANT COURSEWORK Section */}
            <div className="space-y-1 page-break-inside-avoid">
              <h4 className="text-[13.5px] font-bold tracking-wider text-slate-950 border-b border-slate-950 uppercase pb-0.5 font-serif select-none">
                SKILLS / RELEVANT COURSEWORK
              </h4>
              <ul className="list-disc pl-5 mt-1 text-[#111] font-serif space-y-0.5">
                <li className="leading-relaxed">
                  <strong className="font-serif">Languages:</strong> Java, JavaScript, C, Python
                </li>
                <li className="leading-relaxed">
                  <strong className="font-serif">Frontend:</strong> React.js, HTML5, CSS, Bootstrap
                </li>
                <li className="leading-relaxed">
                  <strong className="font-serif">Backend:</strong> Node.js, Express.js
                </li>
                <li className="leading-relaxed">
                  <strong className="font-serif">Database:</strong> MySQL, MongoDB
                </li>
                <li className="leading-relaxed">
                  <strong className="font-serif">Tools:</strong> Git, GitHub, ServiceNow, Azure AD, SAP Basis, Admin.net, IAM Access Management
                </li>
                <li className="leading-relaxed">
                  <strong className="font-serif">Concepts:</strong> OOPs, REST APIs, WebSocket, JWT Authentication
                </li>
              </ul>
            </div>

            {/* LaTeX-style EXPERIENCE Section */}
            <div className="space-y-2 page-break-inside-avoid">
              <h4 className="text-[13.5px] font-bold tracking-wider text-slate-950 border-b border-slate-950 uppercase pb-0.5 font-serif select-none">
                EXPERIENCE
              </h4>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between items-baseline font-serif">
                    <span className="font-bold text-slate-950">Technical Process Executive – Infosys</span>
                    <span className="text-xs text-slate-900 font-serif">May 2025 -- Present</span>
                  </div>
                  <ul className="list-disc pl-5 mt-1 text-[#111] font-serif space-y-0.5">
                    <li className="leading-relaxed text-justify">
                      Delivered L2/L3 support for enterprise web applications, ensuring high availability and faster issue resolution.
                    </li>
                    <li className="leading-relaxed text-justify">
                      Maintained and monitored frontend data flow and UI components, ensuring rendering of dynamic content.
                    </li>
                    <li className="leading-relaxed text-justify">
                      Performed incident management, service requests, and problem troubleshooting using ITSM tools.
                    </li>
                    <li className="leading-relaxed text-justify">
                      Debugged and resolved UI issues using Chrome DevTools, identifying problems in HTML, CSS, and JavaScript execution.
                    </li>
                    <li className="leading-relaxed text-justify">
                      Designed and customized ServiceNow dashboards and reports, enhancing visibility of team performance metrics.
                    </li>
                    <li className="leading-relaxed text-justify">
                      Modified UI forms, layouts, UI policies, and client scripts in ServiceNow, improving usability and workflow efficiency.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* LaTeX-style PROJECTS Section */}
            <div className="space-y-3 page-break-inside-avoid">
              <h4 className="text-[13.5px] font-bold tracking-wider text-slate-950 border-b border-slate-950 uppercase pb-0.5 font-serif select-none">
                PROJECTS
              </h4>
              <div className="space-y-3">
                {/* Project 1 */}
                <div>
                  <div className="flex justify-between items-baseline font-serif">
                    <span className="font-bold text-slate-950">Real Time Let's Chat Application</span>
                    <span className="text-xs text-slate-800 font-serif italic">(MERN Stack, Socket.io, Vite.js)</span>
                  </div>
                  <ul className="list-disc pl-5 mt-1 text-[#111] font-serif space-y-0.5">
                    <li className="leading-relaxed text-justify">
                      Developed a real-time chat application using MERN Stack and Socket.io supporting concurrent users.
                    </li>
                    <li className="leading-relaxed text-justify">
                      Implemented WebSocket-based architecture communication achieving low-latency messaging.
                    </li>
                    <li className="leading-relaxed text-justify">
                      Integrated REST APIs and JWT-based authentication for secure user sessions.
                    </li>
                    <li className="leading-relaxed text-justify">
                      Developed responsive UI components using React.js, ensuring cross-device compatibility.
                    </li>
                  </ul>
                </div>

                {/* Project 2 */}
                <div>
                  <div className="flex justify-between items-baseline font-serif">
                    <span className="font-bold text-slate-950">Rate Limiter Redis</span>
                    <span className="text-xs text-slate-800 font-serif italic">(Node.js + Redis)</span>
                  </div>
                  <ul className="list-disc pl-5 mt-1 text-[#111] font-serif space-y-0.5">
                    <li className="leading-relaxed text-justify">
                      Designed a scalable API rate limiter using Node.js and Redis to handle high traffic loads.
                    </li>
                    <li className="leading-relaxed text-justify">
                      Reduced server overload by implementing request throttling and caching strategies.
                    </li>
                    <li className="leading-relaxed text-justify">
                      Optimized performance using efficient data structures for concurrent requests.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* LaTeX-style EDUCATION Section */}
            <div className="space-y-1 page-break-inside-avoid">
              <h4 className="text-[13.5px] font-bold tracking-wider text-slate-950 border-b border-slate-950 uppercase pb-0.5 font-serif select-none">
                EDUCATION
              </h4>
              <div className="flex justify-between items-baseline font-serif">
                <span className="font-bold text-slate-950">Babu Banarasi Das University, Lucknow</span>
                <span className="text-xs text-slate-900 font-serif font-bold">CGPA: 8.68</span>
              </div>
              <p className="text-slate-800 font-serif text-xs sm:text-[13px] italic">
                Bachelor of Technology in Computer Science Engineering
              </p>
            </div>

            {/* LaTeX-style CERTIFICATIONS Section */}
            <div className="space-y-1 page-break-inside-avoid">
              <h4 className="text-[13.5px] font-bold tracking-wider text-slate-950 border-b border-slate-950 uppercase pb-0.5 font-serif select-none">
                CERTIFICATIONS
              </h4>
              <ul className="list-disc pl-5 mt-1 text-[#111] font-serif space-y-0.5">
                <li className="leading-relaxed">Atlassian IT Service Management (ITSM) Professional Certificate</li>
                <li className="leading-relaxed">ServiceNow IT Leadership Professional Certificate</li>
                <li className="leading-relaxed">ServiceNow: Basic Administration</li>
                <li className="leading-relaxed">Frontend Developer(React)</li>
              </ul>
            </div>

            {/* LaTeX-style EXTRA CURRICULAR Section */}
            <div className="space-y-1 page-break-inside-avoid">
              <h4 className="text-[13.5px] font-bold tracking-wider text-slate-950 border-b border-slate-950 uppercase pb-0.5 font-serif select-none">
                EXTRA-CURRICULAR
              </h4>
              <ul className="list-disc pl-5 mt-1 text-[#111] font-serif space-y-0.5">
                <li className="leading-relaxed text-justify">
                  <strong className="font-serif">Sports Coordinator</strong> – AKTU College Fest (2024)
                </li>
                <li className="leading-relaxed text-justify">
                  Led a team of 15 for Khelo India National Games venue branding, ensuring timely execution and coordination.
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
