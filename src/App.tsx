import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ProjectsSection from "./components/ProjectsSection";
import SkillsHub from "./components/SkillsHub";
import CertificationsEducation from "./components/CertificationsEducation";
import ResumePreview from "./components/ResumePreview";
import ContactSection from "./components/ContactSection";
import { ThemeProvider } from "./ThemeContext";

function MainApp() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF2] dark:bg-[#000000] text-black dark:text-[#FFFDF2] selection:bg-blue-600 selection:text-white transition-colors duration-200">
      {/* 1. Recruiter Top Navigation Bar with Theme Switcher Button */}
      <Navbar
        onNavigateToResume={() => scrollToSection("resume-viewer")}
        onNavigateToContact={() => scrollToSection("contact")}
      />

      {/* Main Content Sections */}
      <main>
        {/* 2. Hero Section with Intro, Image on Right Column, and CTAs */}
        <Hero
          onExploreProjects={() => scrollToSection("projects")}
          onViewExperience={() => scrollToSection("experience")}
          onContactClick={() => scrollToSection("contact")}
        />

        {/* 3. Positioning Narrative & 4-Column Impact Metric Strip */}
        <AboutSection />

        {/* 4. Professional Experience Timeline (First 2 open, remaining in drop-down) */}
        <ExperienceTimeline />

        {/* 5. Data Analytics & Technical Projects (Customer Behavior, T20 Cricket, Rate Limiter) */}
        <ProjectsSection />

        {/* 6. Skills Inventory (Grouped into Data Analytics, Support, Web, Tools) */}
        <SkillsHub />

        {/* 7. Verified Certifications & Higher Education (Atlassian, ServiceNow, B.Tech CSE) */}
        <CertificationsEducation />

        {/* 8. ATS Formal Resume Viewer with Print & Copy Functions */}
        <ResumePreview />

        {/* 9. Contact Dispatcher, Direct Coordinates & Terms/Privacy */}
        <ContactSection />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}
