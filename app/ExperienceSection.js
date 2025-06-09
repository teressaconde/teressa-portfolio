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
    <section id="experience" className="w-full min-h-[60vh] bg-[#18191A] px-4 md:px-24 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience</h2>
      <div className="relative flex flex-col items-center">
        {/* Vertical timeline line */}
        <div className="absolute left-6 top-0 h-full w-1 bg-gradient-to-b from-transparent via-emerald-500/60 to-transparent rounded-full z-0" />
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
              <span className="mt-2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-[#18191A] z-10" />
              {/* Card */}
              <div className="bg-[#18191A] border border-[#222] rounded-xl shadow-lg p-6 flex-1">
                <div className="inline-block px-4 py-1 bg-emerald-700 text-emerald-100 rounded-full text-sm font-bold mb-3">
                  {exp.date}
                </div>
                <div className="text-xl md:text-2xl font-extrabold mb-1">{exp.title}</div>
                <div className="text-emerald-200 mb-1">{exp.company}</div>
                <div className="text-gray-300 mb-2">{exp.description}</div>
                {exp.readMore && (
                  <a href="#" className="text-emerald-400 font-semibold hover:underline">Read More</a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 