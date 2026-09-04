export interface Experience {
    role: string;
    company: string;
    location: string;
    period: string;
    highlights: string[];
  }
  
  export interface Project {
    title: string;
    tech: string;
    description: string[];
  }
  
  export interface Education {
    institution: string;
    degree: string;
    period: string;
    location: string;
    grade?: string;
  }
  
  export interface SkillGroup {
    category: string;
    skills: string[];
  }