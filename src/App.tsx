import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUp, Terminal, Code } from 'lucide-react';
import GlowBackground from './components/GlowBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import CosmicCompanion from './components/CosmicCompanion';
import { PERSONAL_INFO } from './data';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative min-h-screen font-sans antialiased text-neutral-200 bg-[#050505] overflow-x-hidden">
      {/* Dynamic vector schematic line background */}
      <GlowBackground isPlaying={isPlaying} />

      {/* Floating Minimal navigation header */}
      <Navbar />

      {/* Primary Section Blocks Grid layout */}
      <main className="relative">
        <Hero />
        
        {/* Subtle separating visual line */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[1px] bg-neutral-900" />
        </div>

        <About />

        {/* Subtle separating visual line */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[1px] bg-neutral-900" />
        </div>

        <Projects />

        {/* Subtle separating visual line */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[1px] bg-neutral-900" />
        </div>

        <FAQ />

        {/* Subtle separating visual line */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[1px] bg-neutral-900" />
        </div>

        <Contact />
      </main>

      {/* Floating Active Companion & Audio Controller */}
      <CosmicCompanion onPlayStateChange={setIsPlaying} />

      {/* Footer system */}
      <footer className="relative border-t border-neutral-900 bg-[#080808] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Trademark branding */}
          <div className="flex flex-col items-center md:items-start space-y-1.5 text-center md:text-left">
            <div className="flex items-center gap-1.5 font-display font-medium text-sm text-white font-mono uppercase tracking-widest">
              <Terminal className="w-4 h-4 text-neutral-450" />
              <span>
                {PERSONAL_INFO.shortName.toLowerCase()}
                <span className="text-neutral-450 font-extrabold">.sys</span>
              </span>
            </div>
            <p className="text-neutral-500 text-[10px] font-mono uppercase tracking-wider">
              © {new Date().getFullYear()} {PERSONAL_INFO.fullName}. All Rights Reserved.
            </p>
          </div>

          {/* Slogan */}
          <p className="text-neutral-450 text-xs font-light font-mono select-none">
            [ SYSTEM UNIT OPERATION: STABLE ]
          </p>

          {/* Back to Top */}
          <button
            onClick={handleScrollToTop}
            className="p-2.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-all cursor-pointer shadow group"
            aria-label="Kembali ke atas"
            title="Kembali ke atas"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </footer>
    </div>
  );
}
