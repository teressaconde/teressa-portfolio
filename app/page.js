"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import ProjectSection from "./ProjectSection";
import CertificateSection from "./certificate";
import ContactSection from "./ContactSection";
import Sun3D from './components/Sun3D';
import { useTheme } from "./ThemeProvider";


const LoadingScreen = dynamic(() => import("./LoadingScreen"), { ssr: false });

export default function Home() {
  const [loading, setLoading] = useState(true);
  const { toggleTheme, theme } = useTheme();

  useEffect(() => {
    // Show loading screen for the full animation duration (4s + 0.5s fade)
    let timer = setTimeout(() => {
      setLoading(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-[#18191A] text-white font-sans relative overflow-x-hidden light:bg-[#fdf6ee] light:text-[#18191A]">
      {/* Navigation */}
      {/* Removed old header navigation */}

      {/* Main Section */}
      <section id="home" className="flex flex-col md:flex-row items-center justify-between px-8 md:px-32 py-12 md:py-24 gap-12 md:gap-0">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight text-left">
            Hi I&apos;m <span className="text-[var(--accent)]">Maria Teressa!!</span>
          </h1>
          <div className="text-2xl md:text-3xl font-bold mb-2 text-left">
            <span className="text-[var(--accent)]">UI/UX Designer</span>
           
          </div>
          <div className="text-lg text-gray-400 mb-6 text-left light:text-gray-700">
          designing intuitive, responsive user interfaces and seamless experiences using modern design principles and tools.
          </div>
          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-4 mt-4">
            {[
              "Next.js", "JavaScript",  "Git", "Figma", "Photoshop", "Flutter" , "Canva", "Firebase", "Java", "PHP", "SQL", "HTML", "CSS", "TailwindCSS", "Shopify"
            ].map((tech) => (
              <span
                key={tech}
                className="badge bg-black/60 text-[var(--accent)] px-5 py-2 rounded-full text-base font-medium shadow-sm border border-[var(--accent)]/30 hover:bg-[#232323] transition light:bg-[#fff8f1] light:text-[var(--accent)] light:border-[var(--accent)]/30 light:hover:bg-[#f5e6d8]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        {/* Right: Profile Image */}
        <div className="flex-1 flex items-center justify-center">
          <Sun3D onClick={toggleTheme} mode={theme} />
        </div>
      </section>
        {/* Resume + Phone + Location */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
          <a
            href="/Conde_Resume.pdf"
            download
            className="bg-gradient-to-br from-black/60 to-black/40 light:from-white/80 light:to-white/60 rounded-2xl p-8 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-[var(--accent)]/20 hover:border-[var(--accent)]/40 group h-full"
          >
            <span className="mb-6 text-4xl text-[var(--accent)] group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-8m0 8l-4-4m4 4l4-4M4 20h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </span>
            <p className="text-xl font-bold mb-2 text-white light:text-black group-hover:text-[var(--accent)] transition-colors">Download Resume</p>
            <p className="text-sm text-gray-400 light:text-gray-600">Get my latest CV</p>
          </a>

          <a
            href="tel:+639063323183"
            className="bg-gradient-to-br from-black/60 to-black/40 light:from-white/80 light:to-white/60 rounded-2xl p-8 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-[var(--accent)]/20 hover:border-[var(--accent)]/40 group h-full"
          >
            <span className="mb-6 text-4xl text-[var(--accent)] group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.5 5.5A2 2 0 0 1 4.5 3.5H7a2 2 0 0 1 2 1.6l.5 2.2a2 2 0 0 1-.6 1.9l-1.3 1.2a13.5 13.5 0 0 0 6 6l1.2-1.3a2 2 0 0 1 1.9-.6l2.2.5a2 2 0 0 1 1.6 2V19.5a2 2 0 0 1-2 2H18C9.7 21.5 2.5 14.3 2.5 6V5.5z"
                />
              </svg>
            </span>
            <p className="text-xl font-bold mb-2 text-white light:text-black group-hover:text-[var(--accent)] transition-colors">+639063323183</p>
            <p className="text-sm text-gray-400 light:text-gray-600">Call me directly</p>
          </a>
          
          <a
            href="https://www.google.com/maps/place/Davao+City,+Philippines/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-black/60 to-black/40 light:from-white/80 light:to-white/60 rounded-2xl p-8 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-[var(--accent)]/20 hover:border-[var(--accent)]/40 group h-full"
          >
            <span className="mb-6 text-4xl text-[var(--accent)] group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75c-4.97-4.97-7.5-8.25-7.5-11.25A7.5 7.5 0 0112 3a7.5 7.5 0 017.5 7.5c0 3-2.53 6.28-7.5 11.25z" /><circle cx="12" cy="10.5" r="2.5" /></svg>
            </span>
            <p className="text-xl font-bold mb-2 text-white light:text-black group-hover:text-[var(--accent)] transition-colors">Davao City, Philippines</p>
            <p className="text-sm text-gray-400 light:text-gray-600">My location</p>
          </a>
        </div>
      {/* About Section */}
      <AboutSection />
      {/* Experience Section */}
      <ExperienceSection />
      {/* Project Section */}
      <ProjectSection />
      {/* Certificates Section */}
      <CertificateSection />
      {/* Contact Section */}
      <ContactSection />

      {/* Optional: Subtle dots background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {[...Array(40)].map((_, i) => {
          // Randomize initial position, direction, and duration
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          const dx = (Math.random() - 0.5) * 20; // move up to ±10% vertically
          const dy = (Math.random() - 0.5) * 20; // move up to ±10% horizontally
          const duration = 6 + Math.random() * 6; // 6s to 12s
          return (
            <span
              key={i}
              className="absolute w-1 h-1 bg-white/10 rounded-full particle"
              style={{
                top: `${top}%`,
                left: `${left}%`,
                animation: `moveParticle${i} ${duration}s ease-in-out infinite alternate`,
              }}
            />
          );
        })}
        <style jsx>{`
          ${[...Array(40)].map((_, i) => {
            const dx = (Math.random() - 0.5) * 20;
            const dy = (Math.random() - 0.5) * 20;
            return `
              @keyframes moveParticle${i} {
                0% { transform: translate(0, 0); }
                100% { transform: translate(${dx}vw, ${dy}vh); }
              }
            `;
          }).join('')}
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 15s ease infinite;
          }
        `}</style>
      </div>
      {/* Footer */}
      <footer className="w-full py-6 text-center text-xs text-gray-500 bg-transparent z-10 relative">
        © {new Date().getFullYear()} Maria Teressa Conde. All rights reserved.
      </footer>
    </div>
  );
}
