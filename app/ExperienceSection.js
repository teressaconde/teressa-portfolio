"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    date: "2020",
    title: "Customer Service Representative",
    company: "iQor Philippines",
    description:
      "Customer Service Representative with a focus on providing exceptional support and solutions to customers.",
  },
  {
    date: "Feb 2025 - May 2025",
    title: "Frontend Developer Intern",
    company: "ISPIR Center - Bulacan State University",
    description:
      "Gained hands-on experience in frontend development, working with React Vite, TailwindCSS and API integration to create user-friendly web applications.",
    readMore: true,
  },
  {
    date: "June 2025",
    title: "UI/UX Designer",
    company: "Freelance",
    description:
      "Gained hands-on experience in frontend development, working with React Vite, TailwindCSS and API integration to create user-friendly web applications.",
    readMore: true,
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full min-h-[60vh] bg-[#18191A] px-8 md:px-32 py-20 light:bg-[#fff8f1] light:text-[#18191A]">
      <h2 className="text-3xl md:text-4xl font-extrabold text-left mb-2 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">Experience</h2>
      <div className="w-20 h-1.5 bg-[var(--accent)] mb-10 rounded-full" />
      <div className="relative flex flex-col items-start">
        {/* Vertical timeline line */}
        <div className="absolute -left-6 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[var(--accent)]/60 to-transparent rounded-full z-0" />
        <div className="flex flex-col gap-12 w-full max-w-3xl z-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.title}
              className="relative flex items-start gap-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Timeline dot */}
              <span className="mt-2 w-4 h-4 bg-[var(--accent)] rounded-full border-4 border-[#18191A] z-10 light:border-[#fff8f1]" />
              {/* Card */}
              <div className="card border border-[#222] rounded-xl shadow-lg p-6 flex-1 light:border-[#e2cdb0]">
                <div className="inline-block px-4 py-1 bg-[var(--accent)]/20 text-[var(--accent)] rounded-full text-sm font-bold mb-3">
                  {exp.date}
                </div>
                <div className="text-xl md:text-2xl font-extrabold mb-1 light:text-[#18191A]">{exp.title}</div>
                <div className="text-[var(--accent)] mb-1">{exp.company}</div>
                <div className="text-gray-300 mb-2 light:text-gray-900">{exp.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 