import { motion } from "motion/react";
import { FolderGit2, ExternalLink, Github, Sparkles, Code2, Tag } from "lucide-react";
import { resumeData } from "../data";

export default function ProjectsSection() {
  const projects = resumeData.projects || [];

  return (
    <section id="projects" className="py-24 relative overflow-hidden px-4">
      {/* Background glowing effects for futuristic vibe */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/20 shadow-[0_0_10px_rgba(34,211,238,0.1)]">
              CREATIVE WORKS
            </span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tight text-white">
            Major Project Deployments
          </h2>
          <p className="text-xs text-slate-400 font-mono tracking-wider max-w-xl mx-auto leading-relaxed">
            FUNCTIONAL REPOSITORIES EXPORTED DIRECTLY FROM SOURCE CODE LOGS
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
          {projects.map((proj, pIdx) => (
            <motion.div
              key={pIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: pIdx * 0.15, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="relative group p-6 rounded-2xl bg-[#0d111a]/95 border border-white/5 shadow-xl hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Corner tech lines/decorations */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/5 to-transparent blur-xl pointer-events-none" />

              <div className="space-y-4 text-left">
                {/* Folder & Category Indicator */}
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-cyan-950/40 rounded-xl border border-cyan-800/30 text-cyan-400 group-hover:scale-110 transition duration-300">
                    <FolderGit2 className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">
                    {proj.isNPM ? "NPM PACKAGE" : "WEB DEPLOYMENT"}
                  </span>
                </div>

                {/* Info Text */}
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-slate-100 font-sans tracking-tight group-hover:text-cyan-400 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                {/* Structured Bullets */}
                <ul className="space-y-2 pt-2 border-t border-white/[0.03]">
                  {proj.bullets.map((b, bIdx) => (
                    <li
                      key={bIdx}
                      className="text-[11px] text-slate-300 font-sans leading-relaxed flex items-start space-x-2"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proj.stack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-[9px] font-mono text-slate-400 bg-white/[0.02] border border-white/5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Source Code Action Links */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-500">
                  REF: 02_AMAN_SINGH
                </span>
                
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono font-medium text-slate-200 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/20 transition flex items-center space-x-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>View Code</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global GitHub Repo Direct Channel Centerpiece (Direct Link to 02AmanSingh?tab=repositories) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/25 to-cyan-950/25 border border-cyan-500/20 shadow-2xl relative overflow-hidden text-left"
        >
          {/* Decorative network grid overlay visual */}
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-cyan-500/10 to-transparent blur-xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 relative z-10">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Code2 className="w-4.5 h-4.5 text-cyan-400" />
                <h4 className="text-base sm:text-lg font-bold text-slate-100 font-sans tracking-tight">
                  Interested in Exploring More Repository Codebases?
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-xl leading-relaxed">
                Aman Singh's primary GitHub profile contains public repositories detailing functional experiments, automated algorithms, academic assignments, and full-stack utilities.
              </p>
            </div>

            <a
              href="https://github.com/02AmanSingh?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:brightness-110 font-mono text-xs font-semibold text-white tracking-wider flex items-center justify-center space-x-2.5 shadow-[0_0_20px_rgba(37,99,235,0.45)] group transition"
            >
              <Github className="w-4 h-4" />
              <span>GITHUB REPOSITORIES TAB</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
