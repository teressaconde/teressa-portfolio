"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    date: "2020",
    title: "Customer Service Representative",
    company: "iQor Philippines",
    description:
      "Customer Service Representative with a focus on providing exceptional support and solutions to customers.",
    side: "left",
  },
  {
    date: "Feb 2025 - May 2025",
    title: "Frontend Developer Intern",
    company: "ISPIR Center - Bulacan State University",
    description:
      "Gained hands-on experience in frontend development, working with React Vite, TailwindCSS and API integration to create user-friendly web applications.",
    side: "right",
    readMore: true,
  },
  {
    date: "June 2025",
    title: "UI/UX Designer",
    company: "Freelance",
    description:
      "Gained hands-on experience in frontend development, working with React Vite, TailwindCSS and API integration to create user-friendly web applications.",
    side: "right",
    readMore: true,
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full min-h-[60vh] bg-[#18191A] px-4 md:px-24 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience</h2>
      <div className="relative flex flex-col md:flex-row items-start md:items-stretch justify-center gap-8">
        {/* Timeline vertical line */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-transparent via-emerald-500/60 to-transparent rounded-full z-0" style={{ transform: 'translateX(-50%)' }} />
        <div className="flex-1 flex flex-col gap-12 z-10">
          {/* Left side experiences */}
          {experiences.filter(e => e.side === "left").map((exp, idx) => (
            <motion.div
              key={exp.title}
              className="relative bg-[#18191A] border border-[#222] rounded-xl shadow-lg p-6 md:mr-8"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <span className="absolute right-[-18px] top-8 w-3 h-3 bg-emerald-500 rounded-full border-4 border-[#18191A] md:block hidden" />
              <div className="inline-block px-4 py-1 bg-emerald-700 text-emerald-100 rounded-full text-sm font-bold mb-3">
                {exp.date}
              </div>
              <div className="text-xl md:text-2xl font-extrabold mb-1">{exp.title}</div>
              <div className="text-emerald-200 mb-1">{exp.company}</div>
              <div className="text-gray-300 mb-2">{exp.description}</div>
            </motion.div>
          ))}
        </div>
        <div className="flex-1 flex flex-col gap-12 z-10">
          {/* Right side experiences */}
          {experiences.filter(e => e.side === "right").map((exp, idx) => (
            <motion.div
              key={exp.title}
              className="relative bg-[#18191A] border border-[#222] rounded-xl shadow-lg p-6 md:ml-8 text-right"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <span className="absolute left-[-18px] top-8 w-3 h-3 bg-emerald-500 rounded-full border-4 border-[#18191A] md:block hidden" />
              <div className="inline-block px-4 py-1 bg-emerald-700 text-emerald-100 rounded-full text-sm font-bold mb-3">
                {exp.date}
              </div>
              <div className="text-xl md:text-2xl font-extrabold mb-1">{exp.title}</div>
              <div className="text-emerald-200 mb-1">{exp.company}</div>
              <div className="text-gray-300 mb-2">{exp.description}</div>
              {exp.readMore && (
                <a href="#" className="text-emerald-400 font-semibold hover:underline">Read More</a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 