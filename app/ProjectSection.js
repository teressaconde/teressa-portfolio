"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const techs = ["figma"];

export default function ProjectSection() {
  const [open, setOpen] = useState(true);
  const [rotate, setRotate] = useState(0);

  return (
    <>
      <section id="projects" className="relative w-full min-h-[80vh] px-8 md:px-32 py-20 overflow-hidden bg-[#18191A] light:bg-[#fff8f1] light:text-[#18191A]">
        <h2 className="text-3xl md:text-4xl font-extrabold text-left mb-2 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] light:text-[#18191A]">Projects</h2>
        <div className="w-20 h-1.5 bg-[var(--accent)] mb-10 rounded-full" />
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left: Project Info */}
          <div className="relative z-10 flex-1 max-w-xl text-white card p-6 rounded-xl shadow light:text-[#18191A]">
            <div className="mb-2 text-xs text-[var(--accent)] font-semibold">UI Design</div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight light:text-[#18191A]">Habihouse</h2>
            <p className="mb-6 text-lg text-white/90 light:text-gray-900">
             Web-Based Boarding House Finder And Listing Platform for UM Students And Matina Gravahan Landlords
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {techs.map((tech) => (
                <span key={tech} className="badge bg-black/60 text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide border border-[var(--accent)]/30 light:bg-[#fff8f1] light:text-[var(--accent)] light:border-[var(--accent)]/30 light:hover:bg-[#f5e6d8]">{tech}</span>
              ))}
            </div>
            <div className="flex gap-4 mt-4">
              <a href="https://www.behance.net/gallery/228110131/Habihouse" className="bg-[var(--accent)] hover:bg-[#6d3bbd] text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 shadow transition">
                View Project <span aria-hidden>→</span>
              </a>
              <a href="https://www.figma.com/proto/6Q1qRkfy9ga5C5LbaP4Qdc/Habihouse-improved?node-id=2-7469&t=1O0NKpETfjPZSIXf-1" className="text-[var(--accent)] hover:underline flex items-center gap-2">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v8m0 0l-3-3m3 3l3-3"/><rect x="3" y="3" width="12" height="12" rx="2"/></svg>
                Live Demo
              </a>
            </div>
          </div>
          {/* Right: Project Image */}
          <div className="relative flex-1 flex items-center justify-center z-10 mt-12 md:mt-0">
                      <Image
              src="/habihouse.png"
              alt="habihouse"
              width={500}
              height={260}
              className="rounded-2xl object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Second Project */}
      <section className="relative w-full min-h-[80vh] px-8 md:px-32 py-20 overflow-hidden bg-[#18191A] border-t border-gray-800 light:bg-[#fff8f1] light:text-[#18191A] light:border-[#e2cdb0]">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left: Project Info */}
          <div className="relative z-10 flex-1 max-w-xl text-white card p-6 rounded-xl shadow light:text-[#18191A]">
            <div className="mb-2 text-xs text-[var(--accent)] font-semibold">UI/UX Design</div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight light:text-[#18191A]">TaskOnTrack</h2>
            <p className="mb-6 text-lg text-white/90 light:text-gray-900">
             This app is designed to simplify task management. It helps users organize their daily tasks by providing an easy way to create, track, and prioritize their work. The goal is to address the common problem of disorganization, and task overload ensuring users can stay productive and focused.
              </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Flutter", "Firebase",
              ].map((tech) => (
                <span key={tech} className="badge bg-black/60 text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide border border-[var(--accent)]/30 light:bg-[#fff8f1] light:text-[var(--accent)] light:border-[var(--accent)]/30 light:hover:bg-[#f5e6d8]">{tech}</span>
              ))}
            </div>
            <div className="flex gap-4 mt-4">
              <a href="https://www.behance.net/gallery/228106543/TaskOnTrack" className="bg-[var(--accent)] hover:bg-[#6d3bbd] text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 shadow transition">
                View Project <span aria-hidden>→</span>
              </a>
            </div>
          </div>
          {/* Right: Project Image */}
          <div className="relative flex-1 flex items-center justify-center z-10 mt-12 md:mt-0">
                      <Image
              src="/taskontrack.png"
              alt="Task on Track Screenshot"
              width={800} // adjust as needed
              height={470} // maintain aspect ratio
              className="object-cover rounded-2xl w-full h-auto"
              priority
            />
          </div>    
        </div>
      </section>

      {/* Third Project */}
<section className="relative w-full min-h-[80vh] px-8 md:px-32 py-20 overflow-hidden bg-[#18191A] border-t border-gray-800 light:bg-[#fff8f1] light:text-[#18191A] light:border-[#e2cdb0]">
  <div className="flex flex-col md:flex-row items-center justify-between">
    {/* Left: Project Info */}
    <div className="relative z-10 flex-1 max-w-xl text-white card p-6 rounded-xl shadow light:text-[#18191A]">
      <div className="mb-2 text-xs text-[var(--accent)] font-semibold">UI Design</div>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight light:text-[#18191A]">Cinematheque Kiosk Ticketing System</h2>
      <p className="mb-6 text-lg text-white/90 light:text-gray-900">
        [Short description of your third project. Mention the purpose, audience, or a key feature.]
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {["[Tech 1]", "[Tech 2]"].map((tech) => (
          <span key={tech} className="badge bg-black/60 text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide border border-[var(--accent)]/30 light:bg-[#fff8f1] light:text-[var(--accent)] light:border-[var(--accent)]/30 light:hover:bg-[#f5e6d8]">{tech}</span>
        ))}
      </div>
      <div className="flex gap-4 mt-4">
        <a href="[Behance or portfolio link]" className="bg-[var(--accent)] hover:bg-[#6d3bbd] text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 shadow transition">
          View Project <span aria-hidden>→</span>
        </a>
        {/** Optional live demo */}
        <a href="[Live link]" className="text-[var(--accent)] hover:underline flex items-center gap-2">
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v8m0 0l-3-3m3 3l3-3"/><rect x="3" y="3" width="12" height="12" rx="2"/></svg>
          Live Demo
        </a>
      </div>
    </div>
    {/* Right: Project Image */}
    <div className="relative flex-1 flex items-center justify-center z-10 mt-12 md:mt-0">
      <Image
        src="/[image-file].png"
        alt="[Alt text for image]"
        width={800}
        height={470}
        className="object-cover rounded-2xl w-full h-auto"
        priority
      />
    </div>
  </div>
</section>

    </>
    
  );
} 