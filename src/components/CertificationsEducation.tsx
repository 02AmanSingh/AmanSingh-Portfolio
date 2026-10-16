import { Award, GraduationCap, CheckCircle2, ExternalLink } from "lucide-react";
import { resumeData } from "../data";

export default function CertificationsEducation() {
  const certificationsData = [
    {
      title: "Atlassian IT Service Management (ITSM) Professional Certificate",
      issuer: "Atlassian",
      focus: "ITSM Workflows, Jira Service Management, Incident & Request Handling"
    },
    {
      title: "ServiceNow IT Leadership Professional Certificate",
      issuer: "ServiceNow",
      focus: "Strategic ITSM Governance, Leadership Best Practices & SLA Optimization"
    },
    {
      title: "ServiceNow: Basic Administration",
      issuer: "ServiceNow",
      focus: "Instance Configuration, Forms, UI Policies, Client Scripts & User Management"
    },
    {
      title: "Frontend Developer(React)",
      issuer: "HackerRank / Industry Assessment",
      focus: "React Component Architecture, Hooks, State Management & Modern ES6+"
    }
  ];

  return (
    <section id="certifications" className="py-20 border-b border-black/10 dark:border-stone-800 bg-[#FFFDF2] dark:bg-[#000000] transition-colors duration-200">
      <div className="max-w-5xl mx-auto space-y-12 text-left px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-2">
          <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            Verified Credentials
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black dark:text-[#FFFDF2]">
            Certifications & Academic Foundation
          </h2>
          <p className="text-sm text-stone-700 dark:text-stone-300 max-w-2xl leading-relaxed">
            Formal professional accreditations in IT Service Management, ServiceNow system administration, and Computer Science Engineering.
          </p>
        </div>

        {/* Two-Column Grid: Certifications on Left (7 cols), Education on Right (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Certifications */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-sm font-bold text-black dark:text-[#FFFDF2] uppercase tracking-wider flex items-center gap-2 pb-2 border-b border-black/10 dark:border-stone-800">
              <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Professional Certifications (4)</span>
            </h3>

            <div className="space-y-3">
              {certificationsData.map((cert, index) => (
                <div
                  key={index}
                  className="p-4 sm:p-5 rounded-lg bg-white dark:bg-[#0D0D0D] border border-black/10 dark:border-stone-800 shadow-2xs space-y-2 text-left transition-all hover:border-black/25 dark:hover:border-stone-700"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                        <h4 className="text-sm font-bold text-black dark:text-[#FFFDF2] leading-snug">
                          {cert.title}
                        </h4>
                      </div>
                      <span className="text-xs font-medium text-stone-500 dark:text-stone-400 block pl-6">
                        Issuer: {cert.issuer}
                      </span>
                    </div>

                    <a
                      href="https://www.linkedin.com/in/aman-singh-328432202/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-1"
                      title="Verify on LinkedIn"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <p className="text-xs text-stone-700 dark:text-stone-300 pl-6 leading-relaxed">
                    {cert.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Academic Degree */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-bold text-black dark:text-[#FFFDF2] uppercase tracking-wider flex items-center gap-2 pb-2 border-b border-black/10 dark:border-stone-800">
              <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Higher Education</span>
            </h3>

            {resumeData.education.map((edu, eIdx) => (
              <div
                key={eIdx}
                className="p-5 sm:p-6 rounded-lg bg-white dark:bg-[#0D0D0D] border border-black/10 dark:border-stone-800 shadow-2xs space-y-4 text-left"
              >
                <div className="space-y-1.5 pb-4 border-b border-black/5 dark:border-stone-800">
                  <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    Bachelor of Technology (B.Tech)
                  </span>
                  <h4 className="text-base font-bold text-black dark:text-[#FFFDF2] leading-snug">
                    Computer Science & Engineering
                  </h4>
                  <p className="text-sm font-medium text-stone-700 dark:text-stone-300">
                    {edu.institution}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-stone-700 dark:text-stone-300 font-mono tabular-nums">
                  <span>Graduated: <strong className="text-black dark:text-[#FFFDF2]">{edu.date}</strong></span>
                  <span className="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-bold border border-blue-200 dark:border-blue-900">
                    {edu.grade}
                  </span>
                </div>

                {edu.details && (
                  <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed pt-2 border-t border-black/5 dark:border-stone-800">
                    {edu.details}
                  </p>
                )}
              </div>
            ))}

            {/* Academic highlights summary box */}
            <div className="p-4 rounded-lg bg-[#FAF7EC] dark:bg-[#0D0D0D] border border-black/10 dark:border-stone-800 text-xs text-stone-700 dark:text-stone-300 space-y-1.5 leading-relaxed">
              <span className="font-bold text-black dark:text-[#FFFDF2] block text-[11px] uppercase tracking-wider">
                Relevant Engineering Coursework
              </span>
              <p>
                Object-Oriented Programming (Java, C), Data Structures & Algorithms, Relational Database Management Systems (SQL), Operating Systems, Computer Networks, and Discrete Mathematics.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
