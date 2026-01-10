"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const certificates = [
  {
    year: "2025",
    title: "Certificate",
    imageSrc: "/1.png",
  },

    {
    year: "2025",
    title: "Certificate",
    imageSrc: "/2.png",
  },

    {
    year: "2025",
    title: "Certificate",
    imageSrc: "/3.png",
  },

    {
    year: "2025",
    title: "Certificate",
    imageSrc: "/4.png",
  },

    {
    year: "2025",
    title: "Certificate",
    imageSrc: "/5.png",
  },

    {
    year: "2025",
    title: "Certificate",
    imageSrc: "/6.png",
  },

    {
    year: "2025",
    title: "Certificate",
    imageSrc: "/7.png",
  },

    {
    year: "2025",
    title: "Certificate",
    imageSrc: "/8.png",
  },

    {
    year: "2025",
    title: "Certificate",
    imageSrc: "/9.png",
  },

    {
    year: "2025",
    title: "Certificate",
    imageSrc: "/10.png",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function CertificateSection() {
  return (
    <section
      id="certificates"
      className="w-full min-h-[50vh] bg-[#18191A] px-8 md:px-32 py-20 light:bg-[#fff8f1] light:text-[#18191A]"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-left mb-2 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] light:text-[#18191A]"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Certificates
      </motion.h2>

      <motion.div
        className="w-20 h-1.5 bg-[var(--accent)] mb-10 rounded-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        style={{ transformOrigin: "left" }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificates.map((cert, idx) => (
          <motion.div
            key={`${cert.title}-${idx}`}
            className="card border border-[#222] rounded-xl shadow-lg p-6 light:border-[#e2cdb0]"
            {...fadeUp}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xl font-extrabold mb-1 light:text-[#18191A]">
                  {cert.title}
                </div>
                <div className="text-[var(--accent)] font-semibold">
                  {cert.issuer}
                </div>
              </div>
              <div className="inline-block px-3 py-1 bg-[var(--accent)]/20 text-[var(--accent)] rounded-full text-xs font-bold whitespace-nowrap">
                {cert.year}
              </div>
            </div>

            <a
              href={cert.imageSrc}
              target="_blank"
              rel="noreferrer"
              className="block mt-5"
              aria-label={`Open ${cert.title} image`}
            >
              <div className="relative w-full overflow-hidden rounded-xl border border-white/10 light:border-black/10">
                <Image
                  src={cert.imageSrc}
                  alt={cert.title}
                  width={1200}
                  height={850}
                  className="w-full h-auto object-cover"
                />
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
