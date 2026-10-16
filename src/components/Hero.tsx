import { MapPin, Mail, Phone, Linkedin, Github, ArrowRight } from "lucide-react";
import { resumeData } from "../data";
import heroIdentityImage from "../assets/images/og_image_aman_singh_1780307518998.png";

interface HeroProps {
  onExploreProjects: () => void;
  onViewExperience: () => void;
  onContactClick: () => void;
}

export default function Hero({ onExploreProjects, onViewExperience, onContactClick }: HeroProps) {
  return (
    <section id="hero" className="pt-28 pb-16 sm:pt-36 sm:pb-24 px-4 sm:px-6 lg:px-8 border-b border-black/10 dark:border-stone-800 bg-[#FFFDF2] dark:bg-[#000000] transition-colors duration-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center text-left">
          
          {/* Left Column: Introduction, Headline, Copy & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Current Role & Availability Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-stone-700 dark:text-stone-300 font-medium">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-black/5 dark:bg-white/10 text-black dark:text-[#FFFDF2] border border-black/10 dark:border-white/15 font-mono text-[11px]">
                <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
                Current: Support Analyst SA1 at Verifinity.ai (Client: Netlify)
              </span>
              <span className="text-stone-400 dark:text-stone-600 hidden sm:inline">/</span>
              <span className="text-stone-600 dark:text-stone-400 font-medium">
                Open to Analyst & Support Roles
              </span>
            </div>

            {/* Primary Recruiter-Focused Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black dark:text-[#FFFDF2] leading-[1.12]">
              Support the product. Understand the data. Improve the experience.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-stone-700 dark:text-stone-300 leading-relaxed text-pretty">
              I'm Aman Kumar Singh, a technology professional working across customer support, application troubleshooting, web technologies, and data analytics. I investigate problems, connect technical details to user experience, and turn data into actionable insights.
            </p>

            {/* Target Roles Positioning Row */}
            <div className="pt-5 border-t border-black/10 dark:border-stone-800">
              <p className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-2.5">
                Target Roles & Technical Disciplines
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-stone-800 dark:text-stone-300 font-medium">
                {resumeData.targetRoles.map((role, idx) => (
                  <span key={role} className="flex items-center gap-3">
                    <span className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default">
                      {role}
                    </span>
                    {idx < resumeData.targetRoles.length - 1 && (
                      <span className="text-stone-300 dark:text-stone-700 select-none" aria-hidden="true">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* Primary Call to Action Controls */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreProjects}
                className="px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-md transition-colors shadow-xs flex items-center gap-2 cursor-pointer"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onViewExperience}
                className="px-5 py-3 text-sm font-semibold text-black dark:text-[#FFFDF2] bg-white dark:bg-[#141414] hover:bg-stone-100 dark:hover:bg-[#202020] border border-black/15 dark:border-stone-700 rounded-md transition-colors shadow-xs cursor-pointer"
              >
                View Experience
              </button>

              <button
                onClick={onContactClick}
                className="px-5 py-3 text-sm font-semibold text-black dark:text-[#FFFDF2] bg-white dark:bg-[#141414] hover:bg-stone-100 dark:hover:bg-[#202020] border border-black/15 dark:border-stone-700 rounded-md transition-colors shadow-xs cursor-pointer"
              >
                Contact Me
              </button>

              <a
                href="https://github.com/02AmanSingh?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 text-sm font-medium text-stone-700 dark:text-stone-300 hover:text-black dark:hover:text-[#FFFDF2] hover:bg-black/5 dark:hover:bg-white/5 rounded-md transition-colors flex items-center gap-1.5"
              >
                <Github className="w-4 h-4 text-stone-600 dark:text-stone-400" />
                <span>View GitHub</span>
              </a>
            </div>

            {/* Contact Strip / Location / Direct Coordinates */}
            <div className="pt-6 border-t border-black/10 dark:border-stone-800 flex flex-wrap items-center gap-y-2.5 gap-x-5 text-xs text-stone-600 dark:text-stone-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400" />
                <span>Pune / Pimpri-Chinchwad, MH</span>
              </div>

              <span className="text-stone-300 dark:text-stone-700 hidden sm:inline" aria-hidden="true">·</span>

              <a
                href={`mailto:${resumeData.basics.email}`}
                className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400" />
                <span>{resumeData.basics.email}</span>
              </a>

              <span className="text-stone-300 dark:text-stone-700 hidden sm:inline" aria-hidden="true">·</span>

              <a
                href={`tel:${resumeData.basics.phone}`}
                className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-mono tabular-nums"
              >
                <Phone className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400" />
                <span>{resumeData.basics.phone}</span>
              </a>

              <span className="text-stone-300 dark:text-stone-700 hidden sm:inline" aria-hidden="true">·</span>

              <a
                href={resumeData.basics.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Column: Featured Image Asset (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md relative group">
              {/* Subtle ambient lighting effect */}
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-blue-600/30 to-cyan-500/20 blur-xl opacity-60 dark:opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative rounded-xl overflow-hidden border border-black/15 dark:border-stone-800 bg-white dark:bg-[#0D0D0D] shadow-lg">
                <img
                  src={heroIdentityImage}
                  alt="Aman Singh - Support Analyst and Data Analytics Brand"
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-[1.01]"
                  loading="eager"
                />
                
                {/* Image Footer Caption */}
                <div className="px-4 py-3 bg-[#FAF7EC] dark:bg-[#121212] border-t border-black/10 dark:border-stone-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-semibold text-black dark:text-[#FFFDF2]">Aman Singh</span>
                    <span className="text-stone-400">·</span>
                    <span className="text-stone-600 dark:text-stone-400">Technical Identity</span>
                  </div>
                  <span className="font-mono text-[11px] text-blue-600 dark:text-blue-400 font-medium">
                    Verified Profile
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
