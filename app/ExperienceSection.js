"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    date: "2025",
    title: "Shopify Store Project",
    position: "Shopify Developer",
    description: [
      "Built and customized Shopify store layouts using pre-built themes and custom styling.",
      "Configured products, collections, payment methods, and shipping settings.",
      "Optimized storefront layouts for mobile and desktop responsiveness.",
      "Applied UI/UX principles to improve product visibility and navigation clarity."
    ],
  },
  {
    date: "2025",
    title: "Front End Developer - Intern",
    company: "Mini Clean Business Solution (Infosoft)",
    description: [
      "Designed a high-fidelity mobile app prototype (20+ screens) in Figma, supporting 5+ core farmer workflows and improving UI clarity and navigation",
      "Implemented front-end UI using Flutter for a 2-platform mobile app (Android & iOS), delivering 100% responsive layouts across multiple screen sizes."
    ],
  },
  {
    date: "2021 - Present",
    title: "Freelance Design Entrepreneur",
    company: "Self-employed",
    description: [
     "Managed a small design business, delivering 50+ customized souvenirs and visual materials using Canva for various clients.",
    "Designed 100+ materials, including invitations, ID cards, social media graphics, and branded merchandise, ensuring brand consistency.",
    "Collaborated with 20+ clients to understand needs and provide tailored, visually impactful design solutions.",
    "Maintained a 100% on-time delivery rate while ensuring high-quality outputs aligned with client expectations and brand identity."
    ],
  },
  {
    date: "2024 - 2025",
    title: "Publication Material Editor",
    company: "Freelance | Solumi, Tibungco, Davao City",
    description: [
      "Design and edit 30+ print and digital materials, including menus, promotional posters, and announcements for a coffee shop in Tibungco, Davao City.",
      "Apply creative design principles to enhance customer engagement by improving visual appeal and reinforcing brand identity.",
      "Collaborate with management to produce materials that maintain consistent branding across all touchpoints."
    ],
  },
  {
    date: "2019 - 2025",
    title: "Design Editor",
    company: "Dr. Santiago Dakudao Sr. National High School",
    description: [
      "Designed and produced 50+ educational and administrative materials using Canva and Adobe Photoshop, including ID cards, classroom visuals, and official documents.",
      "Created clear and professional layouts that improved visual communication and organization within the school.",
      "Developed strong skills in layout design, attention to detail, and adherence to brand/educational guidelines."
    ],
  },
  {
    date: "2020",
    title: "Animation & Programming Intern",
    company: "F-Squared Technologies Inc.",
    description: [
    "Applied programming and animation tools to create 5+ visual assets, improving project workflow efficiency.",
    "Gained hands-on experience with industry-standard software and animation pipelines, accelerating learning of professional production practices.",
    "Supported the team in streamlining animation tasks, reducing review and iteration time by ~15%."
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="w-full min-h-[60vh] bg-[#18191A] px-8 md:px-32 py-20 light:bg-[#fff8f1] light:text-[#18191A]"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-left mb-2 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
        Experience
      </h2>
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
                <div className="text-xl md:text-2xl font-extrabold mb-1 light:text-[#18191A]">
                  {exp.title}
                </div>
                <div className="text-[var(--accent)] mb-1">{exp.company}</div>
                <div className="text-gray-300 mb-2 light:text-gray-900 text-justify">
                  {Array.isArray(exp.description) ? (
                    <ul className="list-disc list-inside space-y-1">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{exp.description}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
