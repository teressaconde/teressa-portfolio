"use client";

import { useState } from "react";
import ContactModal from "./components/ContactModal";
import Live from "/public/icons/demo.svg"
import Mail from "/public/icons/mail.svg"

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
            className="flex items-center justify-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent)]/80 text-white font-semibold text-lg px-10 py-4 rounded-xl shadow transition-colors duration-200 mb-4 md:mb-0"
          >
            <span className="text-xl">
              <Mail/>
            </span>
            Send Message
          </button>
          <a
            href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Meeting+with+Maria+Teressa&add=mariateressaconde@gmail.com&details=Let%27s+discuss+your+project!&location=Google+Meet"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-black font-semibold text-lg px-10 py-4 rounded-xl shadow transition-colors duration-200"
          >
            <span className="text-xl">
               <Live/>
            </span>
            Schedule Google Meet
          </a>
        </div>

      </div>
    </section>
  );
} 