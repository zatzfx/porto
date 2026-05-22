import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Instagram, ArrowRight, Clock, Sparkles, Terminal, FileCode, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Hero() {
  const [liveTime, setLiveTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setLiveTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format UTC & Bandung (WIB - UTC+7)
  const formatTime = (date: Date, offsetHours = 0) => {
    const utcTime = date.getTime() + date.getTimezoneOffset() * 60000;
    const offsetDate = new Date(utcTime + 3600000 * offsetHours);
    return offsetDate.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 85;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Elegant Tagline Greeting - Westworld minimalist border style */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-mono tracking-widest text-neutral-300 uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 animate-pulse" />
              <span>{PERSONAL_INFO.education}</span>
            </motion.div>

            {/* Giant Bold Title */}
            <div className="space-y-3">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-neutral-500 text-sm uppercase tracking-widest font-mono block"
              >
                // SYSTEM_COORDINATE: IN_INITIATION
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold font-display leading-[1.1] tracking-tight"
              >
                <span className="text-white block sm:inline">{PERSONAL_INFO.fullName}</span>
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 via-neutral-300 to-neutral-400">
                  {' '}{PERSONAL_INFO.title}
                </span>
              </motion.h1>
            </div>

            {/* Subtitle / Bio summary */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-neutral-450 text-base sm:text-lg max-w-xl font-sans font-light leading-relaxed text-neutral-400"
            >
              Siswa Pengembang Perangkat Lunak dan Server Sampingan yang mendedikasikan diri untuk merakit baris koding premium, visual fungsional bersih, dan arsitektur server yang sangat efisien.
            </motion.p>

            {/* CTA and Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <button
                onClick={() => handleScrollTo('projects')}
                className="px-6 py-3.5 rounded-lg bg-white text-neutral-950 font-semibold text-sm hover:bg-neutral-200 active:scale-97 transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                Jelajahi Proyek Saya
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-neutral-950" />
              </button>
              
              <button
                onClick={() => handleScrollTo('contact')}
                className="px-6 py-3.5 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white font-semibold text-sm active:scale-97 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Hubungi Saya
              </button>
            </motion.div>

            {/* Social quick links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-5 pt-4"
            >
              <span className="text-neutral-600 text-xs font-mono tracking-wider uppercase">LOG_PROFILE:</span>
              <div className="flex gap-4">
                {[
                  { icon: Github, link: PERSONAL_INFO.socials.github, color: 'hover:text-white', label: 'GitHub' },
                  { icon: Linkedin, link: PERSONAL_INFO.socials.linkedin, color: 'hover:text-white/80', label: 'LinkedIn' },
                  { icon: Instagram, link: PERSONAL_INFO.socials.instagram, color: 'hover:text-white/80', label: 'Instagram' },
                ].map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <a
                      key={idx}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-neutral-500 transition-all ${item.color} hover:scale-110`}
                      title={item.label}
                    >
                      <span className="sr-only">{item.label}</span>
                      <IconComp className="w-4.5 h-4.5 pointer-events-none" />
                    </a>
                  );
                })}
              </div>
            </motion.div>

          </div>

          {/* Right Column: Westworld Inspired High-contrast Terminal */}
          <div className="lg:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="glass-card rounded-xl border border-neutral-800 shadow-2xl overflow-hidden relative bg-[#070707]/90"
            >
              {/* Window Header */}
              <div className="bg-[#0b0b0b] px-4 py-3 border-b border-neutral-850 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
                </div>
                <div className="flex items-center gap-1.5 text-neutral-500 text-xs font-mono">
                  <FileCode className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Drazat_Host.ts</span>
                </div>
                <div className="w-12" /> {/* alignment spacer */}
              </div>

              {/* Code Screen Body */}
              <div className="p-5 font-mono text-xs text-left leading-relaxed text-neutral-300 space-y-4 bg-black/40">
                {/* Simulated TS Class Definition */}
                <div>
                  <span className="text-neutral-500">import</span> {'{'} <span className="text-white font-medium">SewaHost</span> {'}'} <span className="text-neutral-500">from</span> <span className="text-neutral-400">'delos-laboratories'</span>;
                </div>
                
                <div className="space-y-1.5 text-neutral-400">
                  <p><span className="text-neutral-500">class</span> <span className="text-white">DrazatHerdiansyah</span> <span className="text-neutral-500">implements</span> <span className="text-neutral-300">SewaHost</span> {'{'}</p>
                  <p className="pl-4"><span className="text-neutral-600">// Metrik Konstruksi Host</span></p>
                  <p className="pl-4"><span className="text-neutral-400">generasi_lahir</span> = <span className="text-neutral-300">2010</span>;</p>
                  <p className="pl-4"><span className="text-neutral-400">status</span> = <span className="text-neutral-300">"Constructing_In_Class_9"</span>;</p>
                  <p className="pl-4"><span className="text-neutral-400">sekolah</span> = <span className="text-neutral-300">"SMPN 1 Ciawi"</span>;</p>
                  <p className="pl-4"><span className="text-neutral-400">spesialisasi</span> = [<span className="text-neutral-300">"UFW_VPS"</span>, <span className="text-neutral-300">"Next_Tailwind"</span>, <span className="text-neutral-300">"Shell"</span>];</p>
                </div>

                <div className="pl-4 space-y-1.5 text-neutral-400">
                  <p><span className="text-white">initiateSystem</span>() {'{'}</p>
                  <p className="pl-8 text-neutral-500">return {'{'}</p>
                  <p className="pl-12"><span className="text-neutral-400">siap_kolaborasi</span>: <span className="text-neutral-350">true</span>,</p>
                  <p className="pl-12"><span className="text-neutral-400">analisis_finansial_forex</span>: <span className="text-neutral-350">"Aktif_Sejak_2024"</span></p>
                  <p className="pl-8 text-neutral-500">{'}'};</p>
                  <p className="pl-4">{'}'}</p>
                </div>
                <p className="text-neutral-400">{'}'}</p>

                {/* Simulated Run Result */}
                <div className="pt-2 border-t border-neutral-800 space-y-1 text-[11px] text-neutral-500">
                  <p className="text-neutral-300 flex items-center gap-1.5 font-bold">
                    <Terminal className="w-3 h-3 text-neutral-400" /> DELOS_SHELL_EXEC: tsc Drazat_Host.ts
                  </p>
                  <div className="bg-neutral-900/60 p-2 rounded-lg border border-neutral-850 text-neutral-400 space-y-0.5 font-mono">
                    <p className="flex items-center gap-1.5 text-white font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400" /> Host Construction Calibrated!
                    </p>
                    <p className="text-[10px] text-neutral-500">Node_ID: Ciawi_Bogor_Indonesia</p>
                  </div>
                </div>
              </div>

              {/* Ticking Live GMT & WIB Clocks - Very Technical / Premium Footer */}
              <div className="bg-black/60 border-t border-neutral-850 px-4 py-3 flex text-[10px] text-neutral-500 font-mono justify-between items-center">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-neutral-400" />
                  STARK_CLOCK:
                </span>
                <div className="flex gap-4">
                  <span className="flex gap-1">
                    <span className="text-neutral-600">GMT:</span>
                    <span className="text-neutral-400 font-semibold">{formatTime(liveTime, 0)}</span>
                  </span>
                  <span className="flex gap-1 border-l border-neutral-850 pl-4">
                    <span className="text-neutral-600">WIB:</span>
                    <span className="text-white font-semibold">{formatTime(liveTime, 7)} <span className="text-[8px] text-neutral-400 font-normal">WIB</span></span>
                  </span>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
      
      {/* Absolute Bottom Ambient Grid Transition */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
    </section>
  );
}
