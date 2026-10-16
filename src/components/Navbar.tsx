import { useState, useEffect } from "react";
import { Menu, X, FileText, Sun, Moon } from "lucide-react";
import { useTheme } from "../ThemeContext";

interface NavbarProps {
  onNavigateToResume: () => void;
  onNavigateToContact: () => void;
}

export default function Navbar({ onNavigateToResume, onNavigateToContact }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "hero", label: "Overview" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Analytics & Projects" },
    { id: "skills", label: "Skills" },
    { id: "certifications", label: "Certifications" },
    { id: "resume-viewer", label: "Resume (ATS)" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const scrollPosition = window.scrollY + 180;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          scrolled
            ? "bg-[#FFFDF2]/95 dark:bg-[#000000]/95 backdrop-blur-md border-b border-black/10 dark:border-stone-800 py-3 shadow-xs"
            : "bg-[#FFFDF2] dark:bg-[#000000] py-4 border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleScrollTo("hero")}
            className="flex items-center gap-2.5 text-left group cursor-pointer focus-visible:outline-none"
          >
            <div className="w-8 h-8 rounded-md bg-black dark:bg-[#1E1E1E] text-[#FFFDF2] border border-black/10 dark:border-stone-700 flex items-center justify-center font-bold text-xs tracking-tight transition-transform group-hover:scale-105 group-hover:bg-blue-600 dark:group-hover:bg-blue-600">
              AS
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-black dark:text-[#FFFDF2] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors whitespace-nowrap">
                Aman Kumar Singh
              </span>
              <span className="text-[11px] text-stone-600 dark:text-stone-400 whitespace-nowrap">
                Support & Analytics
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Single-Line, Clean Typography) */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-700 dark:text-stone-300">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className={`relative py-1 transition-colors whitespace-nowrap focus-visible:outline-none cursor-pointer ${
                    isActive
                      ? "text-black dark:text-[#FFFDF2] font-semibold"
                      : "text-stone-700 dark:text-stone-300 hover:text-black dark:hover:text-[#FFFDF2]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Theme Switcher Button */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
              title={`Switch to ${theme === "dark" ? "Light (Cream #FFFDF2)" : "Dark (Black #000000)"}`}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md border transition-colors cursor-pointer border-black/15 dark:border-stone-700 bg-white dark:bg-[#141414] text-black dark:text-[#FFFDF2] hover:bg-stone-100 dark:hover:bg-[#202020] shadow-2xs"
            >
              {theme === "dark" ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>

            <button
              onClick={onNavigateToResume}
              className="text-xs font-medium text-stone-700 dark:text-stone-300 hover:text-black dark:hover:text-[#FFFDF2] px-3 py-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400" />
              <span>Formal CV</span>
            </button>

            <button
              onClick={onNavigateToContact}
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-md transition-colors shadow-xs whitespace-nowrap cursor-pointer"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Right Controls: Theme Toggle & Menu Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-md border border-black/10 dark:border-stone-700 bg-white dark:bg-[#141414] text-black dark:text-[#FFFDF2]"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-blue-600" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-stone-800 dark:text-stone-200 hover:text-black dark:hover:text-[#FFFDF2] hover:bg-black/5 dark:hover:bg-white/5 focus-visible:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs md:hidden">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#FFFDF2] dark:bg-[#0A0A0A] border-l border-black/10 dark:border-stone-800 p-6 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-black/10 dark:border-stone-800">
                <span className="text-sm font-bold text-black dark:text-[#FFFDF2]">Aman Kumar Singh</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-md text-stone-500 hover:text-black dark:hover:text-[#FFFDF2] hover:bg-black/5 dark:hover:bg-white/5"
                  aria-label="Close Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Theme Toggle within Mobile Menu */}
              <div className="pt-4 pb-2">
                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-md text-xs font-semibold border border-black/10 dark:border-stone-800 bg-white dark:bg-[#141414] text-black dark:text-[#FFFDF2]"
                >
                  <span className="flex items-center gap-2">
                    {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-600" />}
                    <span>Active Theme: {theme === "dark" ? "Dark (Black #000000)" : "Light (Cream #FFFDF2)"}</span>
                  </span>
                  <span className="text-blue-600 dark:text-blue-400">Switch</span>
                </button>
              </div>

              <nav className="flex flex-col gap-1 pt-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleScrollTo(item.id)}
                    className="text-left px-3 py-2.5 rounded-md text-sm font-medium text-stone-800 dark:text-stone-200 hover:text-black dark:hover:text-[#FFFDF2] hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-black/10 dark:border-stone-800 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateToResume();
                }}
                className="w-full py-2.5 text-xs font-semibold text-black dark:text-[#FFFDF2] bg-white dark:bg-[#181818] border border-black/10 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-[#222222] rounded-md transition-colors"
              >
                View Printable Resume
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateToContact();
                }}
                className="w-full py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors shadow-xs"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
