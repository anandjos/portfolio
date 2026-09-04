import type { Experience, Project, Education, SkillGroup } from "../types/portfolio";

export const personalInfo = {
  name: "Anand Jose",
  title: "Software Engineer II • Frontend & Cross-Platform",
  phone: "+91 9747812000",
  email: "anandjose5@gmail.com",
  github: "https://github.com/anandjos",
  linkedin: "https://linkedin.com/in/anand-jose-abb881191/",
  about:
    "Software engineer with 4 years of experience specializing in React and cross-platform frontend architecture. Experienced in designing reusable UI systems, integrating AI-assisted engineering workflows, and scaling digital banking applications with clean, production-ready code.",
};

export const experiences: Experience[] = [
  {
    role: "Software Engineer II",
    company: "Candescent (acquired from NCR Voyix)",
    location: "Hyderabad, India",
    period: "October 2024 - Present",
    highlights: [
      "Led React.js development for reusable components used across web and embedded iOS/Android environments, enhancing UX and performance.",
      "Collaborated with designers and PMs to architect high-impact web features including AI-enabled workflows.",
      "Improved frontend velocity using AI tools for boilerplate generation, bug fixing, and documentation while enforcing production-ready standards.",
      "Ensured engineering continuity during acquisition; authored HLDs, drove code reviews, and mentored junior engineers.",
    ],
  },
  {
    role: "Software Engineer",
    company: "NCR Voyix",
    location: "Hyderabad, India",
    period: "July 2022 - September 2024",
    highlights: [
      "Developed and maintained digital banking features using React, Redux, Material-UI, and RTK Query.",
      "Improved code quality, increasing test pass rates by 20% via testing with Jest and Vitest.",
      "Delivered critical production support by resolving over 50 complex defects with minimal downtime.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "StoryBrain",
    location: "Singapore (Remote)",
    period: "May 2021 - June 2021",
    highlights: [
      "Built and optimized cross-platform mobile applications focusing on user experience and speed.",
      "Automated deployment processes and minimized application download sizes through data transformation.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Sparklines",
    tech: "JavaScript, Crypto API",
    description: [
      "Developed sparkline cards for real-time cryptocurrency comparison showcasing key metrics and tracking periods.",
      "Integrated crypto APIs to facilitate effortless switching among 12 cryptocurrency pairs with 90% positive user feedback.",
    ],
  },
  {
    title: "Snake Game",
    tech: "JavaScript, p5.js",
    description: [
      "Developed a classic snake game with intuitive bottom-positioned controls tailored for mobile browser usability.",
      "Implemented score display with timestamps and local storage caching for persistent records.",
    ],
  },
];

export const educationList: Education[] = [
  {
    institution: "National Institute of Technology Calicut",
    degree: "B.Tech in Computer Science and Engineering",
    period: "May 2018 - May 2022",
    location: "Kozhikode, Kerala",
    grade: "CGPA: 8.19",
  },
  {
    institution: "Chavara Public School",
    degree: "Secondary School",
    period: "Jun 2016 - May 2018",
    location: "Pala, Kerala",
  },
];

export const skillCategories: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "HTML/CSS", "SQL", "C/C++"],
  },
  {
    category: "Libraries & Frameworks",
    skills: ["React", "Angular", "Redux", "RTK Query", "Material-UI", "Jest / Vitest"],
  },
  {
    category: "AI Productivity",
    skills: ["Prompt Engineering", "GitHub Copilot", "Cursor", "Code Generation & Debugging"],
  },
  {
    category: "Developer Tools",
    skills: ["Git", "VS Code"],
  },
];