"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you can integrate with an email service or API
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          key="modal-content"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-[#18191A] rounded-2xl p-8 max-w-md w-full shadow-2xl max-h-[90vh] overflow-y-auto relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold focus:outline-none"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
          <div className="flex flex-col items-center mb-6">
            <span className="text-5xl mb-2" role="img" aria-label="send">
              <svg width="48" height="48" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="var(--accent)"><path strokeLinecap="round" strokeLinejoin="round" d="M3 20l18-8-18-8v7l13 1-13 1v7z"/></svg>
            </span>
            <h2 className="text-2xl font-bold mb-1 text-white">Send a Message</h2>
            <p className="text-gray-300 mb-4">I&apos;ll get back to you soon.</p>
          </div>
          {submitted ? (
            <div className="text-center text-green-400 font-semibold py-8">Thank you for your message!</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#242526] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                />
              </div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.091 7.091a2.25 2.25 0 01-3.182 0L3.409 8.584A2.25 2.25 0 012.75 6.993V6.75"/></svg>
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#242526] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                />
              </div>
              <div className="relative">
                <span className="absolute left-3 top-4 text-gray-400">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z"/></svg>
                </span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                  rows={4}
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#242526] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent)]/80 text-black font-bold text-lg py-3 rounded-xl shadow transition-colors duration-200 mt-2"
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 20l18-8-18-8v7l13 1-13 1v7z"/></svg>
                Send Message
              </button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
} 