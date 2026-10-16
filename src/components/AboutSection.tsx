import { resumeData, impactHighlights } from "../data";

export default function AboutSection() {
  return (
    <section id="positioning" className="py-20 border-b border-black/10 dark:border-stone-800 bg-[#FFFDF2] dark:bg-[#000000] transition-colors duration-200">
      <div className="max-w-5xl mx-auto space-y-16 px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-left space-y-2">
          <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            Professional Overview & Impact
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black dark:text-[#FFFDF2]">
            Connecting technical troubleshooting to business decisions
          </h2>
        </div>

        {/* 4-Column Impact Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {impactHighlights.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-lg bg-white dark:bg-[#0D0D0D] border border-black/10 dark:border-stone-800 shadow-2xs text-left space-y-2 flex flex-col justify-between"
            >
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  0{index + 1}. Focus
                </span>
                <h3 className="text-base font-bold text-black dark:text-[#FFFDF2] tracking-tight">
                  {item.metric}
                </h3>
                <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                  {item.context}
                </p>
              </div>
              <div className="pt-3 border-t border-black/5 dark:border-stone-800 text-[11px] text-stone-500 dark:text-stone-400 italic">
                Verified from operational experience
              </div>
            </div>
          ))}
        </div>

        {/* Two-Column Deep Dive: Narrative & Recruiter Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left pt-2">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-4 text-stone-800 dark:text-stone-300 leading-relaxed text-sm sm:text-base">
            <h3 className="text-lg font-bold text-black dark:text-[#FFFDF2]">
              Why this dual support and analytics background matters
            </h3>
            <p>
              In product operations and customer support, problems rarely exist in isolation. A sudden spike in billing inquiries might point to ambiguous checkout UX; an influx of deployment support tickets often reveals silent network timeout patterns or confusing documentation.
            </p>
            <p>
              Having worked directly in front-line customer engineering at Verifinity.ai (supporting Netlify) and enterprise L2/L3 support at Infosys, I bring hands-on familiarity with the full lifecycle of an issue: from initial customer triage and browser DevTools inspection to logging, root cause analysis (RCA), and collaborating on platform enhancements.
            </p>
            <p>
              At the same time, my analytical work in Python (Pandas, NumPy) and Power BI enables me to move beyond individual tickets to understand aggregate operational trends. I apply data cleaning, cohort segmentation, and metric modeling to turn unstructured operational logs into clear, actionable business intelligence.
            </p>
          </div>

          {/* Quick Recruiter Factsheet Column */}
          <div className="lg:col-span-5 p-6 rounded-lg bg-[#FAF7EC] dark:bg-[#0D0D0D] border border-black/10 dark:border-stone-800 space-y-5 text-left shadow-2xs">
            <h4 className="text-xs font-bold text-black dark:text-[#FFFDF2] uppercase tracking-wider pb-2 border-b border-black/10 dark:border-stone-800">
              Candidate Factsheet
            </h4>

            <div className="space-y-3.5 text-xs text-stone-800 dark:text-stone-300">
              <div>
                <span className="text-stone-500 dark:text-stone-400 block mb-0.5">Current Role</span>
                <span className="font-semibold text-black dark:text-[#FFFDF2]">
                  Support Analyst SA1 at Verifinity.ai (Client: Netlify)
                </span>
              </div>

              <div>
                <span className="text-stone-500 dark:text-stone-400 block mb-0.5">Primary Target Positions</span>
                <span className="font-semibold text-black dark:text-[#FFFDF2] block">
                  Data Analyst · BI Analyst · Technical Support Analyst · Product Support Engineer
                </span>
              </div>

              <div>
                <span className="text-stone-500 dark:text-stone-400 block mb-0.5">Education</span>
                <span className="font-semibold text-black dark:text-[#FFFDF2] block">
                  B.Tech in Computer Science & Engineering (CGPA: 8.68 / 10)
                </span>
                <span className="text-stone-600 dark:text-stone-400">Babu Banarasi Das University, Lucknow</span>
              </div>

              <div>
                <span className="text-stone-500 dark:text-stone-400 block mb-0.5">Key Certifications</span>
                <span className="font-semibold text-black dark:text-[#FFFDF2] block">
                  Atlassian ITSM · ServiceNow IT Leadership · ServiceNow Administration · React
                </span>
              </div>

              <div>
                <span className="text-stone-500 dark:text-stone-400 block mb-0.5">Location & Availability</span>
                <span className="font-semibold text-black dark:text-[#FFFDF2] block">
                  Pune, Maharashtra (Open to remote & relocation)
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
