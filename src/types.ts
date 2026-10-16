export interface Experience {
  company: string;
  role: string;
  dates: string;
  location: string;
  client?: string;
  isCurrent?: boolean;
  type?: string;
  bullets: string[];
  highlightTags?: string[];
}

export interface SkillGroup {
  category: "Data Analytics" | "Technical Support" | "Web Technologies" | "Platforms & Tools" | string;
  description?: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer?: string;
  status?: string;
}

export interface Education {
  institution: string;
  degree: string;
  date: string;
  grade?: string;
  details?: string;
}

export interface Project {
  title: string;
  category: "Data Analytics" | "Technical Support & Systems" | "Web Engineering";
  summary: string;
  description: string;
  businessProblem: string;
  datasetObjective?: string;
  toolsUsed: string[];
  techniquesDemonstrated: string[];
  keyFindings: string[];
  bullets: string[];
  githubUrl: string;
  notebookUrl?: string;
  demoUrl?: string;
  isNPM?: boolean;
}

export interface ResumeData {
  basics: {
    name: string;
    headline: string;
    supportingCopy: string;
    titles: string[];
    summary: string[];
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
  };
  targetRoles: string[];
  experience: Experience[];
  skills: SkillGroup[];
  certifications: string[];
  education: Education[];
  languages: string[];
  projects: Project[];
}
