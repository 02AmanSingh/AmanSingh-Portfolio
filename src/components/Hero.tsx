import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowDown, Mail, Phone, Linkedin, MapPin, Sparkles, FileText, ChevronRight } from "lucide-react";
import { resumeData, impactHighlights } from "../data";

export default function Hero() {
  const [titleIdx, setTitleIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIdx((prev) => (prev + 1) % resumeData.basics.titles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleScrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative flex flex-col justify-center items-center overflow-hidden pt-32 pb-16 px-4"
    >
      {/* Visual cyber design grids & background neon nodes */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

      {/* Primary Container */}
      <div className="max-w-4xl mx-auto text-center space-y-8 z-10 relative">
        {/* Availability Active Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-950/50 to-emerald-950/30 border border-emerald-500/20 px-3.5 py-1.5 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.05)] cursor-default"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] font-mono tracking-widest text-emerald-400 font-semibold uppercase">
            SERVING NOTICE PERIOD • AVAILABLE IMMEDIATELY
          </span>
        </motion.div>

        {/* Display Typography Name */}
        <div className="space-y-3">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl font-sans font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-100 to-slate-400"
          >
            {resumeData.basics.name}
          </motion.h1>
        </div>

        {/* Dynamic Rotating Title Ribbon */}
        <div className="h-8 justify-center items-center flex relative">
          <motion.p
            key={titleIdx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="text-sm sm:text-lg font-mono tracking-wide text-cyan-400 text-center font-medium bg-cyan-950/20 px-4 py-1.5 rounded-lg border border-cyan-800/20 shadow-[0_0_15px_rgba(34,211,238,0.05)]"
          >
            {resumeData.basics.titles[titleIdx]}
          </motion.p>
        </div>

        {/* Statement Summaries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-2xl mx-auto space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed tracking-wide font-sans text-center"
        >
          <p>{resumeData.basics.summary[0]}</p>
        </motion.div>

        {/* Action button triggers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <button
            onClick={() => handleScrollTo("experience")}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:brightness-110 font-medium text-white shadow-[0_4px_25px_rgba(37,99,235,0.4)] transition flex items-center justify-center space-x-2 group cursor-pointer"
          >
            <span>View Experience</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => handleScrollTo("resume-viewer")}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0d121c]/90 border border-white/10 hover:border-slate-400 hover:bg-[#141b2a] font-medium text-slate-200 transition flex items-center justify-center space-x-2 group cursor-pointer"
          >
            <FileText className="w-4 h-4 text-slate-400" />
            <span>Interactive Formal CV</span>
          </button>
        </motion.div>

        {/* Location & Quick Contacts Details */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 text-xs text-slate-400 font-mono mt-8 pt-6 border-t border-white/5"
        >
          <div className="flex items-center space-x-1.5">
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            <span>Pune/Pimpri-Chinchwad</span>
          </div>
          <div className="w-1 h-1 bg-slate-700 rounded-full hidden sm:block" />
          <div className="flex items-center space-x-1.5">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>amansingh02001@gmail.com</span>
          </div>
          <div className="w-1 h-1 bg-slate-700 rounded-full hidden sm:block" />
          <div className="flex items-center space-x-1.5">
            <Phone className="w-3.5 h-3.5 text-indigo-400" />
            <span>+91 6200100569</span>
          </div>
        </motion.div>
      </div>

      {/* Animated Down Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 cursor-pointer text-slate-500 hover:text-slate-300 flex flex-col items-center space-y-1.5 z-10"
        onClick={() => handleScrollTo("about")}
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">SCROLL_DOWN</span>
        <ArrowDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
}
