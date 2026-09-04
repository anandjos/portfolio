import { type JSX } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaBriefcase,
  FaUser,
  FaCode,
  FaGraduationCap,
  FaProjectDiagram,
} from "react-icons/fa";
import {
  personalInfo,
  experiences,
  projects,
  educationList,
  skillCategories,
} from "./data/resumeData";

export default function App(): JSX.Element {
  return (
    <main className="min-h-screen bg-slate-100 py-10 px-4 flex justify-center items-start text-slate-800 antialiased font-sans">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-xl border border-slate-200 overflow-hidden">
        
        {/* Top Floating Bar */}
        <header className="px-8 pt-8 pb-4 flex justify-between items-center border-b border-slate-100">
          <div className="flex gap-3 text-slate-600">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-slate-50 hover:bg-slate-200 transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-slate-50 hover:bg-slate-200 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={18} />
            </a>
          </div>

          <a
            href={`mailto:${personalInfo.email}`}
            className="px-5 py-2 rounded-full bg-rose-500 text-white font-medium text-sm shadow hover:bg-rose-600 transition-colors"
          >
            Contact Me
          </a>
        </header>

        {/* Hero Section */}
        <section className="text-center py-10 px-8 border-b border-slate-200">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wider text-slate-900 uppercase">
            {personalInfo.name}
          </h1>
          <p className="mt-2 text-sm sm:text-base font-semibold tracking-widest text-slate-500 uppercase">
            {personalInfo.title}
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-slate-400 text-xs" />
              <span>{personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-slate-400 text-xs" />
              <span>{personalInfo.email}</span>
            </div>
          </div>
        </section>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
          
          {/* Main Column */}
          <div className="md:col-span-2 space-y-10">
            
            {/* About */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2 rounded-full bg-slate-100 text-slate-700">
                  <FaUser size={14} />
                </span>
                <h2 className="text-sm font-bold tracking-widest uppercase text-slate-800">
                  About Me
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm">
                {personalInfo.about}
              </p>
            </section>

            {/* Experience */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <span className="p-2 rounded-full bg-slate-100 text-slate-700">
                  <FaBriefcase size={14} />
                </span>
                <h2 className="text-sm font-bold tracking-widest uppercase text-slate-800">
                  Experience
                </h2>
              </div>

              <div className="relative border-l-2 border-slate-200 ml-4 space-y-8">
                {experiences.map((exp, idx) => (
                  <article key={idx} className="relative pl-6">
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-slate-400" />
                    
                    <div className="flex justify-between items-baseline flex-wrap gap-1">
                      <h3 className="font-bold text-slate-900">{exp.role}</h3>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        {exp.company}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 mt-0.5">
                      {exp.period} • {exp.location}
                    </p>

                    <ul className="mt-2.5 space-y-1.5 list-disc list-inside text-xs text-slate-600 leading-relaxed">
                      {exp.highlights.map((item, itemIdx) => (
                        <li key={itemIdx}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <span className="p-2 rounded-full bg-slate-100 text-slate-700">
                  <FaProjectDiagram size={14} />
                </span>
                <h2 className="text-sm font-bold tracking-widest uppercase text-slate-800">
                  Projects
                </h2>
              </div>

              <div className="space-y-4">
                {projects.map((proj, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="flex justify-between items-center mb-1.5">
                      <h3 className="text-sm font-bold text-slate-900">{proj.title}</h3>
                      <span className="text-xs text-slate-500 font-mono">{proj.tech}</span>
                    </div>
                    <ul className="space-y-1 text-xs text-slate-600 list-disc list-inside">
                      {proj.description.map((line, lIdx) => (
                        <li key={lIdx}>{line}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-10">
            
            {/* Skills */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <span className="p-2 rounded-full bg-slate-100 text-slate-700">
                  <FaCode size={14} />
                </span>
                <h2 className="text-sm font-bold tracking-widest uppercase text-slate-800">
                  Technical Skills
                </h2>
              </div>

              <div className="space-y-5">
                {skillCategories.map((group) => (
                  <div key={group.category}>
                    <h3 className="text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">
                      {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <span className="p-2 rounded-full bg-slate-100 text-slate-700">
                  <FaGraduationCap size={14} />
                </span>
                <h2 className="text-sm font-bold tracking-widest uppercase text-slate-800">
                  Education
                </h2>
              </div>

              <div className="space-y-4">
                {educationList.map((edu, idx) => (
                  <div key={idx} className="text-xs space-y-1">
                    <h3 className="font-bold text-slate-900">{edu.institution}</h3>
                    <p className="text-slate-600">{edu.degree}</p>
                    {edu.grade && <p className="text-slate-500 font-medium">{edu.grade}</p>}
                    <p className="text-slate-400">{edu.period} • {edu.location}</p>
                  </div>
                ))}
              </div>
            </section>

          </aside>
        </div>
      </div>
    </main>
  );
}