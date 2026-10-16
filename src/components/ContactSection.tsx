import { useState, FormEvent } from "react";
import { Copy, Check, ExternalLink, Send, Shield, FileText, X, Linkedin, Github, MapPin } from "lucide-react";
import { resumeData } from "../data";

export default function ContactSection() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSendEmail = (e: FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${resumeData.basics.email}?subject=${encodeURIComponent(
      subject || "Inquiry from Portfolio: Aman Kumar Singh"
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <footer id="contact" className="py-20 bg-[#FFFDF2] dark:bg-[#000000] border-t border-black/10 dark:border-stone-800 transition-colors duration-200">
      <div className="max-w-5xl mx-auto space-y-16 text-left px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-2">
          <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            Communication
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black dark:text-[#FFFDF2]">
            Get in Touch
          </h2>
          <p className="text-sm text-stone-700 dark:text-stone-300 max-w-2xl leading-relaxed">
            I am available for conversations regarding Technical Support, Application Engineering, and Data Analytics positions. Connect via email, LinkedIn, or schedule an introduction.
          </p>
        </div>

        {/* Contact Layout: Left Details, Right Quick Message Builder */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Coordinates (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Box */}
            <div className="p-5 rounded-lg bg-white dark:bg-[#0D0D0D] border border-black/10 dark:border-stone-800 shadow-2xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
                  Direct Email
                </span>
                <button
                  onClick={() => handleCopy(resumeData.basics.email, "email")}
                  className="text-xs text-stone-500 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 cursor-pointer font-mono"
                >
                  {copiedKey === "email" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400 text-[11px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${resumeData.basics.email}`}
                className="text-sm font-bold text-black dark:text-[#FFFDF2] hover:text-blue-600 dark:hover:text-blue-400 transition-colors block break-all"
              >
                {resumeData.basics.email}
              </a>
              <p className="text-xs text-stone-600 dark:text-stone-400">
                Preferred for initial hiring outreach and recruiter scheduling.
              </p>
            </div>

            {/* Phone & Mobile */}
            <div className="p-5 rounded-lg bg-white dark:bg-[#0D0D0D] border border-black/10 dark:border-stone-800 shadow-2xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
                  Phone / WhatsApp
                </span>
                <button
                  onClick={() => handleCopy(resumeData.basics.phone, "phone")}
                  className="text-xs text-stone-500 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 cursor-pointer font-mono"
                >
                  {copiedKey === "phone" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400 text-[11px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`tel:${resumeData.basics.phone}`}
                className="text-sm font-bold text-black dark:text-[#FFFDF2] hover:text-blue-600 dark:hover:text-blue-400 transition-colors block font-mono tabular-nums"
              >
                {resumeData.basics.phone}
              </a>
              <p className="text-xs text-stone-600 dark:text-stone-400">
                Available during standard Indian Standard Time (IST) working hours.
              </p>
            </div>

            {/* Profiles & Location Grid */}
            <div className="p-5 rounded-lg bg-white dark:bg-[#0D0D0D] border border-black/10 dark:border-stone-800 shadow-2xs space-y-3 text-xs">
              <div className="flex items-center justify-between py-1 border-b border-black/5 dark:border-stone-800">
                <span className="text-stone-600 dark:text-stone-400 flex items-center gap-1.5">
                  <Linkedin className="w-3.5 h-3.5 text-stone-400" />
                  <span>LinkedIn</span>
                </span>
                <a
                  href={resumeData.basics.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                >
                  <span>in/aman-singh-328432202</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-black/5 dark:border-stone-800">
                <span className="text-stone-600 dark:text-stone-400 flex items-center gap-1.5">
                  <Github className="w-3.5 h-3.5 text-stone-400" />
                  <span>GitHub</span>
                </span>
                <a
                  href="https://github.com/02AmanSingh?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                >
                  <span>github.com/02AmanSingh</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="flex items-center justify-between py-1">
                <span className="text-stone-600 dark:text-stone-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-stone-400" />
                  <span>Base Location</span>
                </span>
                <span className="font-medium text-black dark:text-[#FFFDF2]">
                  Pune / Pimpri-Chinchwad, MH
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Mailto Dispatcher (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-7 rounded-lg bg-white dark:bg-[#0D0D0D] border border-black/10 dark:border-stone-800 shadow-2xs space-y-5">
            <div className="space-y-1">
              <h3 className="text-base font-bold text-black dark:text-[#FFFDF2]">
                Direct Communication Dispatcher
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400">
                Compose an inquiry below to launch your default email client with pre-filled details. No external trackers or intermediaries.
              </p>
            </div>

            <form onSubmit={handleSendEmail} className="space-y-4">
              <div className="space-y-1">
                <label htmlFor="contact-subject" className="block text-xs font-semibold text-stone-800 dark:text-stone-200">
                  Subject / Position
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g., Technical Support Analyst Opportunity / Interview Invitation"
                  className="w-full px-3.5 py-2.5 text-xs text-black dark:text-[#FFFDF2] bg-[#FAF7EC] dark:bg-[#161616] border border-black/10 dark:border-stone-800 rounded-md focus:bg-white dark:focus:bg-[#1F1F1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="contact-message" className="block text-xs font-semibold text-stone-800 dark:text-stone-200">
                  Message / Job Details
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hi Aman, we reviewed your experience with Netlify support and data analytics projects..."
                  className="w-full px-3.5 py-2.5 text-xs text-black dark:text-[#FFFDF2] bg-[#FAF7EC] dark:bg-[#161616] border border-black/10 dark:border-stone-800 rounded-md focus:bg-white dark:focus:bg-[#1F1F1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  required
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] text-stone-500 dark:text-stone-400">
                  Sends directly to amansingh02001@gmail.com
                </span>

                <button
                  type="submit"
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send via Native Email</span>
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Bottom Legal & Footer Metadata */}
        <div className="pt-8 border-t border-black/10 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600 dark:text-stone-400">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
            <span>© {new Date().getFullYear()} Aman Kumar Singh.</span>
            <span className="hidden sm:inline text-stone-300 dark:text-stone-700">·</span>
            <span>All professional rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={() => setShowPrivacy(true)}
              className="text-stone-600 dark:text-stone-400 hover:text-black dark:hover:text-[#FFFDF2] hover:underline cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-stone-300 dark:text-stone-700">·</span>
            <button
              onClick={() => setShowTerms(true)}
              className="text-stone-600 dark:text-stone-400 hover:text-black dark:hover:text-[#FFFDF2] hover:underline cursor-pointer"
            >
              Terms of Use
            </button>
          </div>
        </div>

      </div>

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div 
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowPrivacy(false);
          }}
        >
          <div className="relative w-full max-w-xl bg-[#FFFDF2] dark:bg-[#0E0E0E] text-black dark:text-[#FFFDF2] rounded-lg shadow-xl border border-black/15 dark:border-stone-800 p-6 sm:p-7 space-y-4 text-left">
            <div className="flex items-center justify-between pb-3 border-b border-black/10 dark:border-stone-800">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <h3 className="text-base font-bold text-black dark:text-[#FFFDF2]">Privacy Notice</h3>
              </div>
              <button
                onClick={() => setShowPrivacy(false)}
                className="p-1 rounded text-stone-400 hover:text-black dark:hover:text-[#FFFDF2]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-stone-800 dark:text-stone-300 leading-relaxed max-h-[60vh] overflow-y-auto pr-1">
              <p>
                <strong>1. Data Collection:</strong> This website is an informational personal portfolio. It does not run tracking cookies, third-party analytics pixels, or background profiling scripts.
              </p>
              <p>
                <strong>2. Communications:</strong> When you click email or phone communication links, interactions happen directly through your personal device's mail client or dialer. No contact details entered in the client-side message helper are retained or transmitted to external servers.
              </p>
              <p>
                <strong>3. External Platforms:</strong> Links to external platforms (GitHub, LinkedIn) are subject to their respective privacy terms and policies.
              </p>
              <p className="text-[11px] text-stone-500 dark:text-stone-400 italic">
                Draft disclosure for Aman Kumar Singh's professional portfolio. Last updated: October 2026.
              </p>
            </div>

            <div className="pt-3 border-t border-black/10 dark:border-stone-800 flex justify-end">
              <button
                onClick={() => setShowPrivacy(false)}
                className="px-4 py-1.5 text-xs font-semibold text-stone-800 dark:text-stone-200 bg-black/5 dark:bg-[#1E1E1E] hover:bg-black/10 dark:hover:bg-[#2A2A2A] rounded cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Use Modal */}
      {showTerms && (
        <div 
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowTerms(false);
          }}
        >
          <div className="relative w-full max-w-xl bg-[#FFFDF2] dark:bg-[#0E0E0E] text-black dark:text-[#FFFDF2] rounded-lg shadow-xl border border-black/15 dark:border-stone-800 p-6 sm:p-7 space-y-4 text-left">
            <div className="flex items-center justify-between pb-3 border-b border-black/10 dark:border-stone-800">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <h3 className="text-base font-bold text-black dark:text-[#FFFDF2]">Terms of Use</h3>
              </div>
              <button
                onClick={() => setShowTerms(false)}
                className="p-1 rounded text-stone-400 hover:text-black dark:hover:text-[#FFFDF2]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-stone-800 dark:text-stone-300 leading-relaxed max-h-[60vh] overflow-y-auto pr-1">
              <p>
                <strong>1. Purpose:</strong> This website is published solely to showcase the professional background, employment history, technical projects, and academic qualifications of Aman Kumar Singh for employment, contracting, and collaborative opportunities.
              </p>
              <p>
                <strong>2. Accuracy & Intellectual Property:</strong> Project summaries and case studies represent genuine technical projects. All code snippets, repositories, and documentation remain the property of their respective creators or open-source licenses (MIT).
              </p>
              <p>
                <strong>3. Client Disclosures:</strong> Employer mentions (Verifinity.ai, Infosys, Kumar Building Facility) and platform/client engagements (Netlify, Ecom Express) accurately reflect legitimate support assignments without implying direct corporate sponsorship or endorsement.
              </p>
              <p className="text-[11px] text-stone-500 dark:text-stone-400 italic">
                Draft terms for Aman Kumar Singh's professional portfolio. Last updated: October 2026.
              </p>
            </div>

            <div className="pt-3 border-t border-black/10 dark:border-stone-800 flex justify-end">
              <button
                onClick={() => setShowTerms(false)}
                className="px-4 py-1.5 text-xs font-semibold text-stone-800 dark:text-stone-200 bg-black/5 dark:bg-[#1E1E1E] hover:bg-black/10 dark:hover:bg-[#2A2A2A] rounded cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
