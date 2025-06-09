"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const techs = ["html", "css", "javascript", "react", "tailwind css", "zustand"];

export default function ProjectSection() {
  const [open, setOpen] = useState(true);
  const [rotate, setRotate] = useState(0);

  return (
    <>
      <section id="projects" className="relative w-full min-h-[80vh] px-8 md:px-32 py-20 overflow-hidden bg-[#18191A]">
        <h2 className="text-3xl md:text-4xl font-extrabold text-left mb-2 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">Projects</h2>
        <div className="w-20 h-1.5 bg-gray-400 mb-10 rounded-full" />
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left: Project Info */}
          <div className="relative z-10 flex-1 max-w-xl text-white">
            <div className="mb-2 text-xs text-blue-400 font-semibold">Frontend</div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">PASS COLLEGE OFFICIAL WEBSITE</h2>
            <p className="mb-6 text-lg text-white/90">
              As part of my thesis, I developed an official website for Pass College, directly addressing their absence of a dedicated online presence beyond a Facebook page. This project involved creating a marketing platform to attract prospective students and implementing an efficient online document request system for current students. Key features include dynamic program showcases, news and events sections, a user-friendly content management system, and a secure student portal for document requests, significantly enhancing the college&apos;s communication and service capabilities.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {techs.map((tech) => (
                <span key={tech} className="bg-black/60 text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide border border-white/10">{tech}</span>
              ))}
            </div>
            <div className="flex gap-4 mt-4">
              <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 shadow transition">
                View Code <span aria-hidden>→</span>
              </a>
              <a href="#" className="text-blue-300 hover:underline flex items-center gap-2">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v8m0 0l-3-3m3 3l3-3"/><rect x="3" y="3" width="12" height="12" rx="2"/></svg>
                Live Demo
              </a>
            </div>
          </div>
          {/* Right: Project Image */}
          <div className="relative flex-1 flex items-center justify-center z-10 mt-12 md:mt-0">
            <div className="w-[440px] h-[260px] rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-800 bg-gray-900 flex items-center justify-center">
              <Image
                src="/project-laptop.png"
                alt="Project Screenshot"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      {/* Second Project (dummy info) */}
      <section className="relative w-full min-h-[80vh] px-8 md:px-32 py-20 overflow-hidden bg-[#18191A] border-t border-gray-800">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left: Project Info */}
          <div className="relative z-10 flex-1 max-w-xl text-white">
            <div className="mb-2 text-xs text-green-400 font-semibold">Fullstack</div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">DUMMY PROJECT TITLE</h2>
            <p className="mb-6 text-lg text-white/90">
              This is a dummy project description. It showcases a fullstack application with authentication, real-time chat, and a beautiful dashboard. Built for demonstration purposes only.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["node.js", "express", "mongodb", "react", "socket.io"].map((tech) => (
                <span key={tech} className="bg-black/60 text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide border border-white/10">{tech}</span>
              ))}
            </div>
            <div className="flex gap-4 mt-4">
              <a href="#" className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 shadow transition">
                View Code <span aria-hidden>→</span>
              </a>
              <a href="#" className="text-green-300 hover:underline flex items-center gap-2">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v8m0 0l-3-3m3 3l3-3"/><rect x="3" y="3" width="12" height="12" rx="2"/></svg>
                Live Demo
              </a>
            </div>
          </div>
          {/* Right: Project Image */}
          <div className="relative flex-1 flex items-center justify-center z-10 mt-12 md:mt-0">
            <div className="w-[440px] h-[260px] rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-800 bg-gray-900 flex items-center justify-center">
              <Image
                src="/dummy.png"
                alt="Dummy Project Screenshot"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 