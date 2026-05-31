import { useState } from "react";
import { Mail, Phone, Linkedin, MapPin, Check, Copy, ExternalLink, Sparkles } from "lucide-react";
import { resumeData } from "../data";

export default function ContactSection() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const contactList = [
    {
      label: "Direct Email",
      value: resumeData.basics.email,
      href: `mailto:${resumeData.basics.email}`,
      icon: Mail,
      color: "text-blue-400 border-blue-900/40 bg-blue-950/20",
    },
    {
      label: "Mobile Number",
      value: resumeData.basics.phone,
      href: `tel:${resumeData.basics.phone}`,
      icon: Phone,
      color: "text-indigo-400 border-indigo-900/40 bg-indigo-950/20",
    },
    {
      label: "LinkedIn Ecosystem",
      value: resumeData.basics.linkedin,
      href: "https://www.linkedin.com/in/aman-singh-328432202",
      icon: Linkedin,
      color: "text-cyan-400 border-cyan-900/40 bg-cyan-950/20",
    },
    {
      label: "Primary Location",
      value: resumeData.basics.location,
      icon: MapPin,
      color: "text-emerald-400 border-emerald-900/40 bg-emerald-950/20",
    }
  ];

  return (
    <footer id="contact" className="py-24 relative overflow-hidden px-4 border-t border-white/5 bg-[#06080c]/60">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Module Header */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
              TRANSMISSION LINK
            </span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tight text-white">
            Get In Touch
          </h2>
          <p className="text-xs text-slate-400 font-mono tracking-wider max-w-xl mx-auto leading-relaxed">
            SECURE PORTS OF DIRECT COMMUNICATION OPEN FOR OFFERS AND OPPORTUNITIES
          </p>
        </div>

        {/* Channels Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactList.map((chan, idx) => {
            const Icon = chan.icon;
            const isCopied = copiedField === chan.label;

            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0b0e14]/90 border border-white/5 shadow-xl flex flex-col justify-between space-y-4 hover:border-slate-500 transition-colors text-left group"
              >
                <div className="space-y-3">
                  <div className={`p-2.5 rounded-xl border w-fit ${chan.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-slate-500 uppercase">
                      {chan.label}
                    </span>
                    <p className="text-sm font-bold text-slate-200 break-words group-hover:text-white transition-colors">
                      {chan.value}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 pt-2 border-t border-white/5">
                  <button
                    onClick={() => copyToClipboard(chan.value, chan.label)}
                    className="p-1.5 rounded bg-white/5 border border-white/10 text-slate-400 hover:text-slate-200 transition text-xs flex items-center space-x-1"
                    title="Copy details"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span className="font-mono text-[10px]">{isCopied ? "COPIED" : "COPY"}</span>
                  </button>

                  {chan.href && (
                    <a
                      href={chan.href}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/20 transition text-xs flex items-center space-x-1"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span className="font-mono text-[10px]">OPEN</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Clean, humble bottom details */}
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 max-w-6xl mx-auto text-center">
          <div className="space-y-1 text-left">
            <p>© {new Date().getFullYear()} AMAN SINGH. ALL RIGHTS RESERVED.</p>
            <p className="text-[10px]">VERIFIED SECURITY PORTFOLIO DEPLOYMENT</p>
          </div>
          
          <div className="flex items-center space-x-3 text-[10px] text-slate-400">
            <span>MERN EXPERT</span>
            <span>•</span>
            <span>SERVICING NOTICE PERIOD</span>
            <span>•</span>
            <span>CERTIFIED ITIL</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
