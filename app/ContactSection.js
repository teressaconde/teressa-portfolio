"use client";

import { useState } from "react";
import ContactModal from "./components/ContactModal";

export default function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section id="contact" className="py-20 px-8 md:px-32">
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
        Let&apos;s <span className="text-[var(--accent)]">Connect</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 light:text-gray-700">
          Have a project in mind? I&apos;d love to help bring it to life!
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent)]/80 text-black font-semibold text-lg px-10 py-4 rounded-xl shadow transition-colors duration-200 mb-4 md:mb-0"
          >
            <span className="text-xl">
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2} stroke='currentColor' className='w-6 h-6'><path strokeLinecap='round' strokeLinejoin='round' d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.091 7.091a2.25 2.25 0 01-3.182 0L3.409 8.584A2.25 2.25 0 012.75 6.993V6.75' /></svg>
            </span>
            Send Message
            <span className="ml-2">→</span>
          </button>
          <a
            href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Meeting+with+Maria+Teressa&add=mariateressaconde@gmail.com&details=Let%27s+discuss+your+project!&location=Google+Meet"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-black font-semibold text-lg px-10 py-4 rounded-xl shadow transition-colors duration-200"
          >
            <span className="text-xl">
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2} stroke='currentColor' className='w-6 h-6'><path strokeLinecap='round' strokeLinejoin='round' d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-9A2.25 2.25 0 002.25 5.25v13.5A2.25 2.25 0 004.5 21h9a2.25 2.25 0 002.25-2.25V15m0-6l5.25 5.25m0 0l-5.25 5.25m5.25-5.25H9' /></svg>
            </span>
            Schedule Google Meet
          </a>
        </div>
        {/* Top Row - Download Resume (Centered) */}
        <div className="flex justify-center mt-8">
          <a
            href="/Conde_Resume.pdf"
            download
            className="bg-gradient-to-br from-black/60 to-black/40 light:from-white/80 light:to-white/60 rounded-2xl p-8 flex flex-col items-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-[var(--accent)]/20 hover:border-[var(--accent)]/40 group max-w-md w-full"
          >
            <span className="mb-6 text-4xl text-[var(--accent)] group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-8m0 8l-4-4m4 4l4-4M4 20h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </span>
            <p className="text-xl font-bold mb-2 text-white light:text-black group-hover:text-[var(--accent)] transition-colors">Download Resume</p>
            <p className="text-sm text-gray-400 light:text-gray-600">Get my latest CV</p>
          </a>
        </div>
        
        {/* Bottom Row - Phone & Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          <a
            href="tel:+639063323183"
            className="bg-gradient-to-br from-black/60 to-black/40 light:from-white/80 light:to-white/60 rounded-2xl p-8 flex flex-col items-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-[var(--accent)]/20 hover:border-[var(--accent)]/40 group"
          >
            <span className="mb-6 text-4xl text-[var(--accent)] group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h.75a2.25 2.25 0 002.25-2.25v-2.25a2.25 2.25 0 00-2.25-2.25h-1.125a1.125 1.125 0 01-1.125-1.125v-1.5a1.125 1.125 0 011.125-1.125H21a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0021 4.5h-15A2.25 2.25 0 003.75 6.75v.243a2.25 2.25 0 01-.659 1.591l-7.091 7.091a2.25 2.25 0 01-3.182 0L3.409 8.584A2.25 2.25 0 012.75 6.993V6.75" /></svg>
            </span>
            <p className="text-xl font-bold mb-2 text-white light:text-black group-hover:text-[var(--accent)] transition-colors">+639063323183</p>
            <p className="text-sm text-gray-400 light:text-gray-600">Call me directly</p>
          </a>
          
          <a
            href="https://www.google.com/maps/place/Davao+City,+Philippines/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-black/60 to-black/40 light:from-white/80 light:to-white/60 rounded-2xl p-8 flex flex-col items-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-[var(--accent)]/20 hover:border-[var(--accent)]/40 group"
          >
            <span className="mb-6 text-4xl text-[var(--accent)] group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75c-4.97-4.97-7.5-8.25-7.5-11.25A7.5 7.5 0 0112 3a7.5 7.5 0 017.5 7.5c0 3-2.53 6.28-7.5 11.25z" /><circle cx="12" cy="10.5" r="2.5" /></svg>
            </span>
            <p className="text-xl font-bold mb-2 text-white light:text-black group-hover:text-[var(--accent)] transition-colors">Davao City, Philippines</p>
            <p className="text-sm text-gray-400 light:text-gray-600">My location</p>
          </a>
        </div>
      </div>
    </section>
  );
} 