"use client";
import { motion } from "framer-motion";

const textFadeIn = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full min-h-[60vh] bg-[#18191A] px-8 md:px-32 py-20 flex flex-col justify-center light:bg-[#fff8f1] light:text-[#18191A]"
    >
      {/* Section Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-2"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      {/* Underline */}
      <motion.div
        className="w-16 h-1 bg-[var(--accent)] mb-10 rounded"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        style={{ transformOrigin: "left" }}
      />

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left: Text */}
        <motion.div
          className="flex-1 text-lg text-gray-300 space-y-8 light:text-gray-700"
          {...textFadeIn}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="light:text-gray-800">
            Information Technology graduate from Cavite State University - Trece Martires Campus specializing in Web Development and Programming. Passionate about creating efficient, scalable web applications and exploring the intersection of AI and development.
          </p>
          <p className="light:text-gray-800">
            My approach combines technical expertise with creative problem-solving to deliver elegant solutions that balance form and function.
          </p>
        </motion.div>

        {/* Right: Info Cards */}
        <motion.div
          className="flex-1 flex flex-col gap-8"
          {...textFadeIn}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {/* Education */}
          <div className="flex items-start gap-4 card p-4 rounded-xl shadow">
            <span className="text-2xl mt-1" role="img" aria-label="graduation cap">🎓</span>
            <div>
              <div className="font-bold text-lg light:text-[#18191A]">Education</div>
              <div className="text-gray-200 light:text-[#18191A]">Cavite State University – Trece Martires Campus</div>
              <div className="text-gray-400 text-sm light:text-gray-900">B.S. in Information Technology</div>
            </div>
          </div>

          {/* Focus */}
          <div className="flex items-start gap-4 card p-4 rounded-xl shadow">
            <span className="text-2xl mt-1" role="img" aria-label="code">&lt;/&gt;</span>
            <div>
              <div className="font-bold text-lg light:text-[#18191A]">Focus</div>
              <div className="text-gray-200 light:text-[#18191A]">Laravel, AI Integration</div>
              <div className="text-gray-400 text-sm light:text-gray-900">Clean code & scalable architecture</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
