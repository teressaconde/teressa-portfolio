"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

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
    <div className="min-h-screen bg-white dark:bg-[#1a1a1a]">
      {/* Hero Section */}
      <section className="px-6 py-20 md:px-20 lg:px-40">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Hi, I&apos;m 
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            A passionate developer crafting beautiful digital experiences
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-black dark:border-white rounded-lg font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-20 md:px-20 lg:px-40 bg-gray-50 dark:bg-[#242424]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white dark:bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-200 dark:bg-gray-800 relative">
                <Image
                  src="/project1.jpg"
                  alt="Project 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project Name</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A brief description of the project and its key features.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Next.js</span>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white dark:bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-200 dark:bg-gray-800 relative">
                <Image
                  src="/project2.jpg"
                  alt="Project 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project Name</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A brief description of the project and its key features.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Tailwind</span>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white dark:bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-200 dark:bg-gray-800 relative">
                <Image
                  src="/project3.jpg"
                  alt="Project 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project Name</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A brief description of the project and its key features.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20 md:px-20 lg:px-40">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Let&apos;s Connect</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            I&apos;m always open to discussing new projects and opportunities.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Image
                src="/github.svg"
                alt="GitHub"
                width={24}
                height={24}
                className="dark:invert"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
                className="dark:invert"
              />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Image
                src="/email.svg"
                alt="Email"
                width={24}
                height={24}
                className="dark:invert"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
