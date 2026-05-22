import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, Folder, Tag, X, CheckCircle, Cpu, ShieldAlert, Laptop, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

// Dynamic, ultra-modern SVG Illustrations representing each app to guarantee zero broken image links
function ProjectIllustration({ type }: { type: string }) {
  if (type === 'edumate') {
    return (
      <div className="w-full h-full bg-[#0a0a0a] relative flex items-center justify-center p-6 select-none overflow-hidden group-hover:scale-102 transition-transform duration-500 border-b border-neutral-850">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.003)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:15px_15px] opacity-50" />
        {/* Mock task layout widget */}
        <div className="w-[85%] max-w-[280px] rounded-lg bg-neutral-900 border border-neutral-800 p-4 space-y-3 shadow-xl relative z-10">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
            <span className="text-[9px] uppercase tracking-widest text-neutral-400 font-mono">[ EDUMATE // CALIBRATION ]</span>
            <div className="w-2 h-2 rounded-full bg-neutral-400 animate-pulse" />
          </div>
          <div className="space-y-2">
            <div className="h-6 rounded bg-neutral-950 border border-neutral-800 text-[10px] text-white font-mono flex items-center px-2.5 justify-between">
              <span>ALGEBRA MODEL</span>
              <span className="text-[7px] bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-300 font-extrabold uppercase">COMPLETE</span>
            </div>
            <div className="h-6 rounded bg-neutral-950 border border-neutral-800 text-[10px] text-white font-mono flex items-center px-2.5 justify-between">
              <span>VPS DEPLOYMENT</span>
              <span className="text-[7px] bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-300 font-extrabold uppercase">ACTIVE</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'kantingo') {
    return (
      <div className="w-full h-full bg-[#0a0a0a] relative flex items-center justify-center p-6 select-none overflow-hidden group-hover:scale-102 transition-transform duration-500 border-b border-neutral-850">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:10px_10px]" />
        {/* Mock mobile booking UI */}
        <div className="w-[60%] max-w-[180px] aspect-[9/16] rounded-xl bg-neutral-900 border border-neutral-800 p-3 shadow-xl relative z-10 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="h-4 rounded bg-neutral-950 border border-neutral-850 flex items-center justify-between px-1.5">
              <span className="text-[8px] font-mono text-neutral-300">CREDIT: Rp75.000</span>
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-450" />
            </div>
            {/* Food item row */}
            <div className="p-1.5 rounded bg-neutral-950 border border-neutral-850 flex gap-2 items-center">
              <div className="w-5 h-5 rounded bg-neutral-900 flex items-center justify-center text-[10px]">🍜</div>
              <div>
                <p className="text-[8px] font-bold text-white font-display">Mie Ayam Bakso</p>
                <p className="text-[7px] font-mono text-neutral-500">Toko 3 - Bu Nani</p>
              </div>
            </div>
          </div>
          {/* Order button */}
          <div className="h-6 rounded bg-white text-neutral-950 flex items-center justify-center text-[8px] font-bold cursor-pointer hover:bg-neutral-200">
            CONFIRM ORDER
          </div>
        </div>
      </div>
    );
  }

  if (type === 'ecosphere') {
    return (
      <div className="w-full h-full bg-[#0a0a0a] relative flex items-center justify-center p-6 select-none overflow-hidden group-hover:scale-102 transition-transform duration-500 border-b border-neutral-850">
        {/* Gauge bar mock */}
        <div className="w-[80%] max-w-[260px] rounded-lg bg-neutral-900 border border-neutral-800 p-4 space-y-4 shadow-xl relative z-10">
          <span className="text-[9px] uppercase tracking-widest text-neutral-400 font-mono block">CARBON IMPACT EVALUATION</span>
          <div className="flex gap-4 items-center">
            {/* Visual Circular dial */}
            <div className="relative w-12 h-12 rounded-full border border-dashed border-neutral-700 flex items-center justify-center">
              <div className="absolute w-9 h-9 rounded-full border border-neutral-800 flex items-center justify-center">
                <span className="text-[8px] font-mono font-bold text-white">4.2 KG</span>
              </div>
            </div>
            {/* Stats labels */}
            <div className="flex-1 space-y-1.5 text-left">
              <div className="h-1 w-full bg-neutral-950 rounded-full overflow-hidden">
                <div className="h-full w-[45%] bg-neutral-400 rounded-full" />
              </div>
              <p className="text-[7px] text-neutral-500 font-mono uppercase">Emission: STABLE</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // CodeQuest IDE mock
  return (
    <div className="w-full h-full bg-[#0a0a0a] relative flex items-center justify-center p-6 select-none overflow-hidden group-hover:scale-102 transition-transform duration-500 border-b border-neutral-850">
      <div className="w-[90%] max-w-[290px] rounded-lg bg-neutral-900 border border-neutral-800 shadow-xl relative z-10 overflow-hidden font-mono text-[9px] text-left">
        <div className="p-2 border-b border-neutral-800 bg-neutral-950 flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
        </div>
        <div className="p-3 space-y-1 text-neutral-300">
          <p><span className="text-neutral-500">const</span> player = <span className="text-white">new</span> <span className="text-neutral-400">Hero</span>(<span className="text-neutral-300">'SMP_Student'</span>);</p>
          <p>player.<span className="text-white">solve</span>(quizzes.<span className="text-neutral-450">level1</span>);</p>
          <p className="border-t border-neutral-850 pt-1 mt-1 text-neutral-400 text-[8px] tracking-widest uppercase">✓ EVALUATION SUCCESSFUL</p>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Frontend' | 'Fullstack' | 'Tools'>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filters = ['All', 'Frontend', 'Fullstack', 'Tools'] as const;

  const filteredProjects = selectedFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedFilter);

  const openProjectDetails = (proj: Project) => {
    setActiveModalProject(proj);
    // Prevent background scrolling while modal is active
    document.body.style.overflow = 'hidden';
  };

  const closeProjectDetails = () => {
    setActiveModalProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-neutral-950/20 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-sm bg-neutral-950 border border-neutral-800 text-[10px] font-mono tracking-widest text-neutral-450 uppercase animate-pulse"
          >
            <Laptop className="w-3.5 h-3.5 text-neutral-500" />
            <span>KARYA_DAN_PRODUK_DIGITAL</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold font-display text-white"
          >
            Portofolio{' '}
            <span className="text-neutral-400">
              Proyek Pilihan
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 text-sm font-light font-sans max-w-xl mx-auto leading-relaxed"
          >
            Konseptualisasi web modern fungsional berdaya saing tinggi yang siap memecahkan masalah administrasi, sekolah, maupun digitalisasi UMKM.
          </motion.p>

          {/* Filtering row tabs (Sleek monochrome) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center flex-wrap gap-2 pt-6"
          >
            {filters.map((fil) => (
              <button
                key={fil}
                onClick={() => setSelectedFilter(fil)}
                className={`px-4 py-1.5 rounded-md text-xs font-mono font-medium border cursor-pointer transition-all ${
                  selectedFilter === fil
                    ? 'bg-neutral-100 border-neutral-200 text-neutral-950 shadow'
                    : 'bg-neutral-950 border-neutral-850 text-neutral-400 hover:text-white hover:bg-neutral-900'
                }`}
              >
                {fil === 'All' ? 'TAMPILKAN SEMUA' : fil.toUpperCase()}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Portfolio Showcase Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj, idx) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.98, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 5 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="glass-card rounded-lg overflow-hidden border border-neutral-855 flex flex-col group text-left cursor-pointer transition-all duration-300 hover:border-neutral-500 hover:bg-neutral-950"
                onClick={() => openProjectDetails(proj)}
              >
                {/* Simulated Thumbnail graphical panel container */}
                <div className="aspect-[16/10] w-full overflow-hidden border-b border-neutral-850 relative bg-black">
                  <ProjectIllustration type={proj.image} />
                  
                  {/* Category overlay tags */}
                  <div className="absolute top-4 left-4 z-20 px-3.5 py-1 text-[8px] font-bold font-mono tracking-widest uppercase rounded bg-neutral-950/90 border border-neutral-800 text-neutral-300">
                    {proj.category}
                  </div>

                  {/* Open text trigger on hover */}
                  <div className="absolute inset-0 bg-neutral-950/70 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-250">
                    <span className="px-5 py-2 rounded border border-neutral-700 bg-neutral-900 font-mono tracking-widest text-[10px] text-white uppercase scale-95 group-hover:scale-100 transition-all">
                      [ Rincian Proyek ]
                    </span>
                  </div>
                </div>

                {/* Info summary metadata text */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-4 bg-black/40">
                  <div className="space-y-2">
                    <h3 className="text-white text-base md:text-lg font-bold font-display group-hover:text-neutral-300 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-neutral-400 text-xs font-light leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  {/* Inline tech badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[9px] font-mono rounded bg-neutral-950 border border-neutral-900 text-neutral-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {proj.technologies.length > 4 && (
                      <span className="px-2.5 py-1 text-[9px] font-mono rounded bg-neutral-950 border border-neutral-900 text-neutral-500">
                        +{proj.technologies.length - 4} Items
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* DETAILED PROJECT MODAL (Delos Inc corporate calibration style) */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            
            {/* Modal Backdrop Blockout */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#000000]/90 backdrop-blur-sm"
              onClick={closeProjectDetails}
            />

            {/* Modal Card frame Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 15 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl glass-card rounded-lg border border-neutral-805 shadow-2xl overflow-hidden z-10 flex flex-col text-left max-h-[85vh] bg-[#0c0c0c]"
            >
              
              {/* Modal Banner Graphic header */}
              <div className="aspect-[16/8] min-h-[180px] w-full relative border-b border-neutral-850">
                <ProjectIllustration type={activeModalProject.image} />
                
                {/* Closing button trigger */}
                <button
                  onClick={closeProjectDetails}
                  className="absolute top-4 right-4 z-40 p-2 rounded bg-neutral-950 border border-neutral-850 text-neutral-450 hover:text-white cursor-pointer"
                  aria-label="Tutup Rincian"
                >
                  <X className="w-4.5 h-4.5" />
                </button>

                {/* Title Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent p-6 text-left">
                  <span className="text-[8px] font-mono tracking-widest text-neutral-300 uppercase font-bold px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">
                    // TYPE: {activeModalProject.category.toUpperCase()}
                  </span>
                  <h3 className="text-white text-lg sm:text-xl font-bold font-display mt-2">
                    {activeModalProject.title}
                  </h3>
                </div>
              </div>

              {/* Modal Scrolling Body text */}
              <div className="p-6 sm:p-8 space-y-6 overflow-y-auto bg-black/40">
                
                {/* Description Segment */}
                <div className="space-y-2">
                  <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed">
                    {activeModalProject.description}
                  </p>
                </div>

                {/* Problem Solved Segment */}
                {activeModalProject.problemSolved && (
                  <div className="p-4 rounded-md bg-neutral-950 border border-neutral-850 space-y-2">
                    <h4 className="text-white text-xs font-bold font-mono tracking-wider flex items-center gap-1.5 uppercase">
                      <ShieldAlert className="w-3.5 h-3.5 text-neutral-450" />
                      Rintangan / Masalah Yang Dipecahkan:
                    </h4>
                    <p className="text-neutral-405 text-xs leading-relaxed font-light font-mono">
                      {activeModalProject.problemSolved}
                    </p>
                  </div>
                )}

                {/* Key Features segment */}
                {activeModalProject.keyFeatures && (
                  <div className="space-y-3">
                    <h4 className="text-white text-xs font-bold font-mono tracking-wider flex items-center gap-1.5 uppercase">
                      <Sparkles className="w-3.5 h-3.5 text-neutral-400" />
                      Arsitektur Fitur & Sistem Desain:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-[11px]">
                      {activeModalProject.keyFeatures.map((feat, fIdx) => (
                        <li key={fIdx} className="flex gap-2 text-neutral-400 leading-normal align-top">
                          <CheckCircle className="w-3.5 h-3.5 text-neutral-300 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Badges assembly */}
                <div className="space-y-2 font-mono">
                  <h4 className="text-neutral-405 text-xs font-bold tracking-wider flex items-center gap-1.5 uppercase">
                    <Cpu className="w-3.5 h-3.5 text-neutral-500" />
                    Tech Stack & Modul:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[10px] rounded bg-neutral-950 border border-neutral-900 text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Modal CTA Buttons Footer (Delos sterile style) */}
              <div className="p-6 bg-neutral-950 border-t border-neutral-850 flex flex-col sm:flex-row gap-4 justify-between items-center bg-[#090909]">
                <span className="text-[9px] text-neutral-500 font-mono tracking-widest uppercase hidden sm:block">Metrik_ID: {activeModalProject.id}</span>
                <div className="flex gap-3 w-full sm:w-auto">
                  <a
                    href={activeModalProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none px-4 py-2 rounded-md border border-neutral-800 bg-[#0e0e0e] hover:bg-neutral-900 text-neutral-350 hover:text-white font-mono text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Github Code
                  </a>
                  <a
                    href={activeModalProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none px-4 py-2 rounded-md bg-white text-neutral-950 font-mono font-bold text-xs hover:bg-neutral-200 flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Buka Demo
                  </a>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
