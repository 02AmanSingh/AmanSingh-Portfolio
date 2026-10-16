import { useState } from "react";
import { Calendar, MapPin, ChevronDown, ChevronUp, Briefcase } from "lucide-react";
import { resumeData } from "../data";

export default function ExperienceTimeline() {
  const [showEarlier, setShowEarlier] = useState(false);

  // Keep only the first 2 experiences as open
  const primaryRoles = resumeData.experience.slice(0, 2);
  // The rest remaining in the drop-down
  const earlierRoles = resumeData.experience.slice(2);

  return (
    <section id="experience" className="py-20 border-b border-black/10 dark:border-stone-800 bg-[#FFFDF2] dark:bg-[#000000] transition-colors duration-200">
      <div className="max-w-5xl mx-auto space-y-12 text-left px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-2">
          <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            Career History
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black dark:text-[#FFFDF2]">
            Professional Experience & Operational Roles
          </h2>
          <p className="text-sm text-stone-700 dark:text-stone-300 max-w-2xl leading-relaxed">
            Hands-on technical support, enterprise incident resolution, web troubleshooting, and operational data management across client environments.
          </p>
        </div>

        {/* First 2 Core Roles (Always Open) */}
        <div className="space-y-6">
          {primaryRoles.map((exp, idx) => (
            <article
              key={idx}
              className="p-6 sm:p-7 rounded-lg bg-white dark:bg-[#0D0D0D] border border-black/10 dark:border-stone-800 shadow-2xs space-y-4 transition-all text-left"
            >
              {/* Header: Role, Company, Client, and Dates */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 pb-4 border-b border-black/5 dark:border-stone-800">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-black dark:text-[#FFFDF2]">
                      {exp.role}
                    </h3>
                    {exp.isCurrent && (
                      <span className="text-[11px] font-mono font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-800">
                        Current Role
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm font-medium text-stone-800 dark:text-stone-200 mt-1">
                    <span className="text-black dark:text-[#FFFDF2] font-semibold">{exp.company}</span>
                    {exp.client && (
                      <>
                        <span className="text-stone-300 dark:text-stone-700" aria-hidden="true">·</span>
                        <span className="text-stone-700 dark:text-stone-300">
                          Client / Platform: <strong className="text-black dark:text-[#FFFDF2] font-semibold">{exp.client}</strong>
                        </span>
                      </>
                    )}
                    <span className="text-stone-300 dark:text-stone-700" aria-hidden="true">·</span>
                    <span className="text-stone-600 dark:text-stone-400 flex items-center gap-1 text-xs">
                      <MapPin className="w-3 h-3 text-stone-500 dark:text-stone-400" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                <div className="text-xs font-mono text-stone-600 dark:text-stone-400 whitespace-nowrap tabular-nums flex items-center gap-1.5 shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400" />
                  <span>{exp.dates}</span>
                </div>
              </div>

              {/* Responsibilities Bullets */}
              <ul className="space-y-2 text-sm text-stone-800 dark:text-stone-300 leading-relaxed">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Highlight Tags */}
              {exp.highlightTags && exp.highlightTags.length > 0 && (
                <div className="pt-3 border-t border-black/5 dark:border-stone-800 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-stone-600 dark:text-stone-400">
                  <span className="font-medium text-stone-700 dark:text-stone-300 text-[11px] uppercase tracking-wider">
                    Competencies:
                  </span>
                  {exp.highlightTags.map((tag, tIdx) => (
                    <span key={tIdx} className="flex items-center gap-2">
                      <span className="text-stone-800 dark:text-stone-200 font-mono text-[11px]">{tag}</span>
                      {tIdx < exp.highlightTags!.length - 1 && (
                        <span className="text-stone-300 dark:text-stone-700" aria-hidden="true">·</span>
                      )}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Drop-down Section for Remaining Experiences */}
        {earlierRoles.length > 0 && (
          <div className="pt-2">
            <button
              onClick={() => setShowEarlier(!showEarlier)}
              className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors py-2.5 px-4 rounded-md border border-black/10 dark:border-stone-800 bg-white dark:bg-[#0D0D0D] hover:bg-stone-50 dark:hover:bg-[#151515] shadow-2xs cursor-pointer focus-visible:outline-none"
            >
              <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>
                {showEarlier
                  ? "Hide Additional Experience"
                  : `View Additional Experience (${earlierRoles.length} roles: Ecom Express & PMI)`}
              </span>
              {showEarlier ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {showEarlier && (
              <div className="mt-5 space-y-4 pl-3 sm:pl-4 border-l-2 border-blue-500/30">
                {earlierRoles.map((exp, idx) => (
                  <article
                    key={idx}
                    className="p-5 sm:p-6 rounded-lg bg-white dark:bg-[#0D0D0D] border border-black/10 dark:border-stone-800 shadow-2xs space-y-3 text-left"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 pb-3 border-b border-black/5 dark:border-stone-800">
                      <div>
                        <h4 className="text-base font-bold text-black dark:text-[#FFFDF2]">
                          {exp.role}
                        </h4>
                        <div className="flex flex-wrap items-center gap-x-2 text-xs text-stone-700 dark:text-stone-300 mt-0.5">
                          <span className="font-semibold text-black dark:text-[#FFFDF2]">{exp.company}</span>
                          {exp.client && (
                            <>
                              <span className="text-stone-300 dark:text-stone-700">·</span>
                              <span>Client: <strong className="font-semibold">{exp.client}</strong></span>
                            </>
                          )}
                          <span className="text-stone-300 dark:text-stone-700">·</span>
                          <span className="text-stone-500 dark:text-stone-400">{exp.location}</span>
                        </div>
                      </div>

                      <span className="text-xs font-mono text-stone-600 dark:text-stone-400 whitespace-nowrap tabular-nums">
                        {exp.dates}
                      </span>
                    </div>

                    <ul className="space-y-1.5 text-xs sm:text-sm text-stone-800 dark:text-stone-300 leading-relaxed">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-stone-400 dark:bg-stone-600 mt-2 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.highlightTags && (
                      <div className="pt-2 border-t border-black/5 dark:border-stone-800 flex flex-wrap gap-1.5">
                        {exp.highlightTags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded text-[11px] font-mono text-stone-700 dark:text-stone-300 bg-[#FAF7EC] dark:bg-[#181818] border border-black/5 dark:border-stone-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </article>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
