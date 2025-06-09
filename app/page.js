"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import AboutSection from "./AboutSection";

const LoadingScreen = dynamic(() => import("./LoadingScreen"), { ssr: false });

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loading screen for the full animation duration (4s + 0.5s fade)
    let timer = setTimeout(() => {
      setLoading(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-[#18191A] text-white font-sans relative overflow-x-hidden">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-12 py-8">
        <div className="text-3xl font-extrabold tracking-tight">PORTFOLIO</div>
        <div className="flex gap-8 text-lg font-bold">
          <a href="#home" className="hover:text-yellow-400 transition">HOME</a>
          <a href="#about" className="hover:text-yellow-400 transition">ABOUT</a>
        </div>
      </nav>

      {/* Main Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-12 md:px-24 py-12 md:py-24 gap-12 md:gap-0">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Hi I&apos;m <span className="text-gray-200">Kurt!!</span>
          </h1>
          <div className="text-2xl md:text-3xl font-bold mb-2">
            <span className="text-yellow-400">Web Developer</span>
            <span className="text-base font-normal text-gray-300 ml-2">specializing in <span className="font-bold text-white">UI/UX design</span>,</span>
          </div>
          <div className="text-lg text-gray-400 mb-6">
            creating responsive, user-friendly websites with cutting-edge technologies.
          </div>
          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-4 mt-4">
            {["Next.js", "ReactJS", "Laravel", "JavaScript", "TypeScript", "Git", "TailwindCSS", "Figma", "Photoshop", "Postman"].map((tech) => (
              <span key={tech} className="bg-[#232323] text-gray-200 px-5 py-2 rounded-full text-base font-medium shadow-sm border border-[#232323] hover:bg-[#333] transition">
                {tech}
              </span>
            ))}
          </div>
        </div>
        {/* Right: Profile Image */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-[350px] h-[400px] rounded-[48px] overflow-hidden shadow-2xl border border-gray-700 bg-gradient-to-br from-[#1a1a1a] to-[#2a1a2a]">
            <Image
              src="/profile.png" // Replace with your image
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
            {/* Optional: Add a background effect behind the image */}
            <div className="absolute inset-0 z-0" style={{background: "radial-gradient(ellipse at 60% 40%, #a83279 0%, #1a1a1a 80%)", opacity: 0.5}} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Optional: Subtle dots background */}
      <div className="pointer-events-none absolute inset-0 z-0">
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
        `}</style>
      </div>
    </div>
  );
}
