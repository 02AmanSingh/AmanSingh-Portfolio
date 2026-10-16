import { useState } from "react";
import { Github, ExternalLink, X, ArrowRight } from "lucide-react";
import { resumeData } from "../data";
import { Project } from "../types";

export default function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);

  const filterOptions = [
    "All",
    "Data Analytics",
    "Technical Support & Systems",
    "Web Engineering"
  ];

  const filteredProjects = selectedFilter === "All"
    ? resumeData.projects
    : resumeData.projects.filter(p => p.category === selectedFilter);

  return (
    <section id="projects" className="py-20 border-b border-black/10 dark:border-stone-800 bg-[#FFFDF2] dark:bg-[#000000] transition-colors duration-200">
      <div className="max-w-5xl mx-auto space-y-10 text-left px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-2">
          <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            Verified Technical Work
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black dark:text-[#FFFDF2]">
            Data Analytics & Technical Projects
          </h2>
          <p className="text-sm text-stone-700 dark:text-stone-300 max-w-2xl leading-relaxed">
            Detailed case studies across exploratory data analysis, business intelligence dashboards, API rate limiting, and real-time web infrastructure.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-black/5 dark:bg-[#181818] border border-black/10 dark:border-stone-800 rounded-md w-fit">
          {filterOptions.map((option) => {
            const isActive = selectedFilter === option;
            return (
              <button
                key={option}
                onClick={() => setSelectedFilter(option)}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-white dark:bg-[#282828] text-black dark:text-[#FFFDF2] font-semibold shadow-2xs"
                    : "text-stone-700 dark:text-stone-400 hover:text-black dark:hover:text-[#FFFDF2]"
                }`}
              >
                {option === "All" ? `All Projects (${resumeData.projects.length})` : option}
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((proj, idx) => {
            return (
              <article
                key={idx}
                className="p-6 rounded-lg bg-white dark:bg-[#0D0D0D] border border-black/10 dark:border-stone-800 shadow-2xs flex flex-col justify-between space-y-5 hover:border-black/25 dark:hover:border-stone-700 transition-all text-left"
              >
                <div className="space-y-4">
                  {/* Category & Status */}
                  <div className="flex items-center justify-between text-xs text-stone-500 pb-2 border-b border-black/5 dark:border-stone-800">
                    <span className="font-mono text-[11px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                      {proj.category}
                    </span>
                    {proj.isNPM && (
                      <span className="font-mono text-[11px] text-stone-700 dark:text-stone-300 bg-[#FAF7EC] dark:bg-[#1C1C1C] px-1.5 py-0.5 rounded border border-black/10 dark:border-stone-800">
                        NPM Package
                      </span>
                    )}
                  </div>

                  {/* Title & Summary */}
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-black dark:text-[#FFFDF2] tracking-tight">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                      {proj.summary}
                    </p>
                  </div>

                  {/* Business Problem Snippet */}
                  <div className="p-3 bg-[#FAF7EC] dark:bg-[#151515] rounded border border-black/5 dark:border-stone-800 text-xs space-y-1">
                    <span className="font-bold text-black dark:text-[#FFFDF2] block text-[11px] uppercase tracking-wider">
                      Business Problem
                    </span>
                    <p className="text-stone-700 dark:text-stone-300 line-clamp-3 leading-relaxed">
                      {proj.businessProblem}
                    </p>
                  </div>

                  {/* Key Highlights Bullet points */}
                  <ul className="space-y-1.5 text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                    {proj.bullets.slice(0, 2).map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-1.5 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tools Strip */}
                  <div className="pt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-stone-600 dark:text-stone-400">
                    <span className="font-medium text-black dark:text-[#FFFDF2] text-[11px] uppercase tracking-wider">
                      Tech Stack:
                    </span>
                    {proj.toolsUsed.map((tool, tIdx) => (
                      <span key={tIdx} className="flex items-center gap-2">
                        <span className="text-stone-800 dark:text-stone-300 font-mono text-[11px]">{tool}</span>
                        {tIdx < proj.toolsUsed.length - 1 && (
                          <span className="text-stone-300 dark:text-stone-700" aria-hidden="true">·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-black/5 dark:border-stone-800 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveCaseStudy(proj)}
                    className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1.5 cursor-pointer py-1.5"
                  >
                    <span>Read Complete Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded text-xs font-medium text-stone-800 dark:text-stone-200 hover:text-black dark:hover:text-white bg-[#FAF7EC] dark:bg-[#1A1A1A] hover:bg-stone-200/70 dark:hover:bg-[#252525] border border-black/10 dark:border-stone-800 transition-colors flex items-center gap-1.5 shrink-0"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Repository</span>
                    <ExternalLink className="w-3 h-3 text-stone-400" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* GitHub Repositories Banner Link */}
        <div className="p-6 rounded-lg bg-[#FAF7EC] dark:bg-[#0D0D0D] border border-black/10 dark:border-stone-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-black dark:text-[#FFFDF2]">
              Browse More Code & Analysis Repositories
            </h4>
            <p className="text-xs text-stone-700 dark:text-stone-300 max-w-xl">
              Explore public GitHub repositories containing exploratory data analysis scripts, automated utilities, and full-stack applications.
            </p>
          </div>
          <a
            href="https://github.com/02AmanSingh?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-md text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shrink-0 shadow-2xs"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Repositories Tab</span>
            <ExternalLink className="w-3 h-3 text-white/80" />
          </a>
        </div>

      </div>

      {/* Interactive Case Study Modal Dialog */}
      {activeCaseStudy && (
        <div 
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveCaseStudy(null);
          }}
        >
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#FFFDF2] dark:bg-[#0E0E0E] text-black dark:text-[#FFFDF2] rounded-xl shadow-2xl border border-black/15 dark:border-stone-800 overflow-y-auto text-left p-6 sm:p-8 space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-black/10 dark:border-stone-800">
              <div>
                <span className="text-[11px] font-mono font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider block">
                  Project Case Study · {activeCaseStudy.category}
                </span>
                <h3 id="case-study-title" className="text-xl sm:text-2xl font-bold text-black dark:text-[#FFFDF2] mt-1">
                  {activeCaseStudy.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveCaseStudy(null)}
                className="p-1.5 rounded-md text-stone-400 hover:text-black dark:hover:text-[#FFFDF2] hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close Case Study Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Case Study Structured Breakdown */}
            <div className="space-y-6 text-sm text-stone-800 dark:text-stone-300 leading-relaxed">
              
              {/* 1. Project Overview & Business Problem */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-black dark:text-[#FFFDF2] uppercase tracking-wider">
                  1. Business Context & Problem Statement
                </h4>
                <p className="text-stone-800 dark:text-stone-300 bg-white dark:bg-[#161616] p-4 rounded-md border border-black/10 dark:border-stone-800 leading-relaxed">
                  {activeCaseStudy.businessProblem}
                </p>
              </div>

              {/* 2. Dataset & Analytical Objective */}
              {activeCaseStudy.datasetObjective && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-black dark:text-[#FFFDF2] uppercase tracking-wider">
                    2. Dataset & Analytical Objective
                  </h4>
                  <p className="text-stone-800 dark:text-stone-300">
                    {activeCaseStudy.datasetObjective}
                  </p>
                </div>
              )}

              {/* 3. Tools & Technologies */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-black dark:text-[#FFFDF2] uppercase tracking-wider">
                  3. Tools & Technologies Demonstrated
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeCaseStudy.toolsUsed.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-xs font-mono font-medium text-stone-900 dark:text-stone-200 bg-white dark:bg-[#1A1A1A] rounded border border-black/10 dark:border-stone-800"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* 4. Techniques Demonstrated */}
              {activeCaseStudy.techniquesDemonstrated && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-black dark:text-[#FFFDF2] uppercase tracking-wider">
                    4. Data Cleaning, Transformation & Analytical Techniques
                  </h4>
                  <ul className="space-y-2">
                    {activeCaseStudy.techniquesDemonstrated.map((tech, techIdx) => (
                      <li key={techIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                        <span className="text-stone-800 dark:text-stone-300">{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 5. Key Findings & Business Implications */}
              {activeCaseStudy.keyFindings && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-black dark:text-[#FFFDF2] uppercase tracking-wider">
                    5. Key Findings & Practical Implications
                  </h4>
                  <ul className="space-y-2 bg-blue-50/60 dark:bg-blue-950/30 p-4 rounded-md border border-blue-200 dark:border-blue-900/50">
                    {activeCaseStudy.keyFindings.map((finding, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                        <span className="text-stone-900 dark:text-stone-200 font-medium">{finding}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 6. Execution Highlights */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-black dark:text-[#FFFDF2] uppercase tracking-wider">
                  6. Technical Implementation Highlights
                </h4>
                <ul className="space-y-2">
                  {activeCaseStudy.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0" />
                      <span className="text-stone-800 dark:text-stone-300">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Modal Footer with Direct Links */}
            <div className="pt-5 border-t border-black/10 dark:border-stone-800 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500 font-mono">
                Source: 02AmanSingh GitHub Profile
              </span>

              <div className="flex items-center gap-3">
                <a
                  href={activeCaseStudy.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors flex items-center gap-1.5 shadow-2xs"
                >
                  <Github className="w-4 h-4" />
                  <span>Open GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 text-white/80" />
                </a>

                <button
                  onClick={() => setActiveCaseStudy(null)}
                  className="px-4 py-2 text-xs font-semibold text-stone-800 dark:text-stone-200 bg-black/5 dark:bg-[#1E1E1E] hover:bg-black/10 dark:hover:bg-[#2A2A2A] rounded-md transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
