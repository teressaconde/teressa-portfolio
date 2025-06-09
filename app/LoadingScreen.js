"use client";
import React, { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (percent < 100) {
      const interval = setInterval(() => {
        setPercent((prev) => (prev < 100 ? prev + 1 : 100));
      }, 16); // ~60fps
      return () => clearInterval(interval);
    }
  }, [percent]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0a1026] to-[#181c2f] overflow-hidden">
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-blue-400 rounded-tl-lg" />
      <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-pink-400 rounded-tr-lg" />
      <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-pink-400 rounded-bl-lg" />
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-blue-400 rounded-br-lg" />

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Glowing Icon */}
      <div className="relative mb-8">
        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center shadow-2xl animate-glow">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        </div>
        <style jsx>{`
          .animate-glow {
            box-shadow: 0 0 60px 10px #7f5af0, 0 0 120px 40px #ff6ac1;
            animation: glow 2s alternate infinite;
          }
          @keyframes glow {
            0% { box-shadow: 0 0 60px 10px #7f5af0, 0 0 120px 40px #ff6ac1; }
            100% { box-shadow: 0 0 80px 20px #7f5af0, 0 0 160px 60px #ff6ac1; }
          }
        `}</style>
      </div>

      {/* Name and Subtitle */}
      <h1 className="text-3xl md:text-5xl font-bold mb-2 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        Dexter <span className="text-pink-400">Miranda</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-200 mb-8 text-center font-mono tracking-wide">
        Full Stack Developer
      </p>

      {/* Progress Bar */}
      <div className="w-72 max-w-full mb-4">
        <div className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-pink-400 relative overflow-hidden">
          <div className="absolute left-0 top-0 h-2 bg-white/30 animate-progress w-full" />
        </div>
        <style jsx>{`
          .animate-progress {
            animation: progress 2s linear infinite;
          }
          @keyframes progress {
            0% { width: 0; }
            100% { width: 100%; }
          }
        `}</style>
      </div>
      <div className="text-xl font-bold text-blue-300 mb-2">{percent}%</div>
      <div className="flex gap-2 justify-center">
        <span className="w-3 h-3 bg-blue-400 rounded-full inline-block animate-bounce" style={{ animationDelay: '0s' }} />
        <span className="w-3 h-3 bg-blue-400 rounded-full inline-block animate-bounce" style={{ animationDelay: '0.2s' }} />
        <span className="w-3 h-3 bg-blue-400 rounded-full inline-block animate-bounce" style={{ animationDelay: '0.4s' }} />
      </div>
    </div>
  );
} 