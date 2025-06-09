"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="w-full min-h-[60vh] bg-[#18191A] px-8 md:px-32 py-20 flex flex-col justify-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-2"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      <motion.div
        className="w-16 h-1 bg-white/60 mb-10 rounded"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        style={{ transformOrigin: "left" }}
      />
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left: About Text */}
        <motion.div
          className="flex-1 text-lg text-gray-200 space-y-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>
            Information Technology graduate from Cavite State University - Trece Martires Campus specializing in Web Development and Programming. Passionate about creating efficient, scalable web applications and exploring the intersection of AI and development.
          </p>
          <p>
            My approach combines technical expertise with creative problem-solving to deliver elegant solutions that balance form and function.
          </p>
        </motion.div>
        {/* Right: Info Cards */}
        <motion.div
          className="flex-1 flex flex-col gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Education */}
          <div className="flex items-start gap-4">
            <span className="text-2xl mt-1">🎓</span>
            <div>
              <div className="font-bold text-lg">Education</div>
              <div className="text-gray-200">Cavite State University - Trece Martires Campus</div>
              <div className="text-gray-400 text-sm">B.S. in Information Technology</div>
            </div>
          </div>
          {/* Experience */}
          <div className="flex items-start gap-4">
            <span className="text-2xl mt-1">💼</span>
            <div>
              <div className="font-bold text-lg">Experience</div>
              <div className="text-gray-200">Web Developer</div>
              <div className="text-gray-400 text-sm">Fresh Graduate</div>
            </div>
          </div>
          {/* Focus */}
          <div className="flex items-start gap-4">
            <span className="text-2xl mt-1">&lt;/&gt;</span>
            <div>
              <div className="font-bold text-lg">Focus</div>
              <div className="text-gray-200">Laravel, AI Integration</div>
              <div className="text-gray-400 text-sm">Clean code & scalable architecture</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 