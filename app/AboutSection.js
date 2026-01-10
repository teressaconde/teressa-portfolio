"use client";
import Image from "next/image";
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
          className="flex-1 text-lg text-gray-300 space-y-8 light:text-gray-700 text-justify"
          {...textFadeIn}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
       <p className="light:text-gray-800">
  Hello! I&apos;m a UI/UX designer and Computer Science student at the University of Mindanao with a strong passion for creating user-centered digital experiences. 
  Through academic projects, freelance work, and internships, I&apos;ve developed practical skills in tools like Figma, Canva, Adobe Photoshop, and explored 
  development using Flutter and Firebase.
</p>
<p className="light:text-gray-800">
  My experience as a Design Editor and Freelance Designer has taught me how to translate ideas into clear, user-friendly visual designs while collaborating with 
  clients and teams.
</p>

        </motion.div>

        {/* Right: Info Cards */}
        <motion.div
          className="flex-1 flex flex-col gap-8"
          {...textFadeIn}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {/* Education */}
          <div className="flex items-start gap-4 bg-[#242526] hover:bg-[#2a2b2c] transition-colors duration-300 p-6 rounded-xl shadow-lg border border-gray-700/50 light:bg-white light:border-gray-200 light:hover:bg-gray-50">
            <span className="text-2xl mt-1" role="img" aria-label="graduation cap">🎓</span>
            <div>
              <div className="font-bold text-lg light:text-[#18191A]">Education</div>
              <div className="text-gray-200 light:text-[#18191A]">University of Mindanao</div>
              <div className="text-gray-400 text-sm light:text-gray-900">B.S. in Computer Science</div>
            </div>
          </div>

          {/* Focus */}
          <div className="flex items-start gap-4 bg-[#242526] hover:bg-[#2a2b2c] transition-colors duration-300 p-6 rounded-xl shadow-lg border border-gray-700/50 light:bg-white light:border-gray-200 light:hover:bg-gray-50">
            <div className="mt-1" aria-hidden>
              <Image
                src="/figma.svg"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6"
              />
            </div>
            <div>
              <div className="font-bold text-lg light:text-[#18191A]">Focus</div>
              <div className="text-gray-200 light:text-[#18191A]">UI/UX Design, Figma</div>
              <div className="text-gray-400 text-sm light:text-gray-900">Clean design & user experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
