export interface Experience {
  company: string;
  role: string;
  dates: string;
  location: string;
  type?: string;
  bullets: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer?: string;
}

export interface Education {
  institution: string;
  degree: string;
  date: string;
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  bullets: string[];
  githubUrl: string;
  demoUrl?: string;
  isNPM?: boolean;
}

export interface ResumeData {
  basics: {
    name: string;
    titles: string[];
    summary: string[];
    location: string;
    email: string;
    phone: string;
    linkedin: string;
  };
  experience: Experience[];
  skills: SkillGroup[];
  certifications: string[];
  education: Education[];
  languages: string[];
  projects?: Project[];
}
