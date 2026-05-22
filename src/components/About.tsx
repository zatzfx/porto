import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookOpen, Award, Briefcase, MapPin, Mail, Calendar, Sparkles,
  Code2, Palette, ShieldAlert, Compass, Cpu, Server, Database,
  Layers, GitBranch, Layout, Zap, CheckSquare, GraduationCap,
  TrendingUp, Globe, Coins
} from 'lucide-react';
import { PERSONAL_INFO, SKILLS, TIMELINE } from '../data';
import { Skill } from '../types';

// Map iconName strings to Lucide Component elements
const iconMap: Record<string, React.ComponentType<any>> = {
  Code2,
  Palette,
  ShieldAlert,
  Compass,
  Cpu,
  Server,
  Database,
  Layers,
  GitBranch,
  Layout,
  Zap,
  CheckSquare,
};

export default function About() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Frontend' | 'Backend' | 'Database' | 'Tools'>('All');
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);

  // High precision real-time ticking age calculator starting from year 2010
  const [preciseAge, setPreciseAge] = useState<string>('16.050000000');

  useEffect(() => {
    const birthDate = new Date('2010-03-19T00:00:00Z').getTime();
    const interval = setInterval(() => {
      const now = Date.now();
      const differenceMs = now - birthDate;
      // Precise conversion using average year milliseconds (365.242199 days)
      const calculatedAge = differenceMs / (365.242199 * 24 * 60 * 60 * 1000);
      setPreciseAge(calculatedAge.toFixed(9));
    }, 45); // highly responsive ticking
    return () => clearInterval(interval);
  }, []);

  const skillCategories = ['All', 'Frontend', 'Backend', 'Database', 'Tools'] as const;

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS
    : SKILLS.filter(s => s.category === selectedCategory);

  return (
    <section id="about" className="py-24 relative overflow-hidden border-b border-neutral-900">
      
      {/* Background decoration: perfectly subtle vector grid line */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-neutral-900/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-sm bg-neutral-950 border border-neutral-800 text-[10px] font-mono tracking-widest text-neutral-400 uppercase"
          >
            <GraduationCap className="w-3.5 h-3.5 text-neutral-450" />
            <span>BIO_AND_MILSTONE_TRACKER</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight"
          >
            Biografi &{' '}
            <span className="text-neutral-400">
              Silsilah Konstruksi
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 text-sm font-light font-sans max-w-xl mx-auto leading-relaxed"
          >
            Memadukan hasrat mendalam di bidang web development, orkestrasi VPS siber, dan ketajaman pembacaan makroekonomi pasar bebas.
          </motion.p>
        </div>

        {/* High-precision Ticking Age Banner - Westworld laboratory style */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 glass-card rounded-xl p-6 border border-neutral-850 bg-[#090909]/90 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.01]" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 text-left">
            <div className="space-y-1">
              <span className="text-neutral-500 font-mono text-[9px] tracking-widest font-bold flex items-center gap-1.5 uppercase">
                [ MODEL_TIME_METRIC // UNIT_PROGRESS ]
              </span>
              <h3 className="text-white text-lg font-bold font-display">Tumbuh Kembang & Kronologi Belajar</h3>
              <p className="text-neutral-450 text-xs font-light max-w-md leading-relaxed">
                Metrik presisi untuk memantau waktu hidup harian sejak kelahiran di tahun 2010 demi kepastian optimasi efisiensi koding.
              </p>
            </div>
            
            <div className="bg-neutral-950 border border-neutral-900 rounded-lg px-6 py-4 flex flex-col items-center justify-center font-mono min-w-[260px]">
              <span className="text-neutral-500 text-[9px] tracking-widest font-bold">// AZATZ_AGE_VECTOR</span>
              <span className="text-2xl font-bold text-white mt-1 tabular-nums tracking-wide">
                {preciseAge}
              </span>
              <span className="text-[8px] text-neutral-400 mt-1 uppercase font-bold tracking-widest flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 animate-ping inline-block" />
                Live Years Counting
              </span>
            </div>
          </div>
        </motion.div>

        {/* Bio and Interests Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-stretch text-left">
          
          {/* Bio side - 6 cols */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div className="glass-card rounded-xl p-6 md:p-8 border border-neutral-850 h-full flex flex-col justify-between relative overflow-hidden bg-[#090909]/90">
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-neutral-300 font-display font-semibold text-base">
                  <BookOpen className="w-4.5 h-4.5 text-neutral-400" />
                  <span>Biografi & Karakter Kerja</span>
                </div>
                
                <p className="text-neutral-350 text-sm leading-relaxed font-light">
                  {PERSONAL_INFO.bio}
                </p>
                
                <p className="text-neutral-350 text-sm leading-relaxed font-light">
                  Saya memiliki ketahanan kerja yang tangguh dan sangat berkomitmen untuk terlibat dalam <strong>kerja sama tim, magang industri, atau pengerjaan proyek siber independen</strong>. Kombinasi setup server VPS Linux mandiri dan rancangan web responsif terstruktur membuat saya siap mewujudkan solusi fungsional bisnis Anda.
                </p>

                {/* Info pills board */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-xs font-mono">
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-neutral-950/65 border border-neutral-900">
                    <MapPin className="w-4 h-4 text-neutral-400 shrink-0" />
                    <div className="text-left">
                      <p className="text-neutral-600 text-[8px] font-bold tracking-wider">LOKASI</p>
                      <p className="text-neutral-300 mt-0.5">{PERSONAL_INFO.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-neutral-950/65 border border-neutral-900">
                    <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
                    <div className="text-left">
                      <p className="text-neutral-600 text-[8px] font-bold tracking-wider">EMAIL_KONTAK</p>
                      <p className="text-neutral-300 mt-0.5 overflow-hidden text-ellipsis truncate max-w-[150px] sm:max-w-none hover:text-white transition-colors">
                        <a href={`mailto:${PERSONAL_INFO.email}`}>{PERSONAL_INFO.email}</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-neutral-950/65 border border-neutral-900">
                    <GraduationCap className="w-4 h-4 text-neutral-400 shrink-0" />
                    <div className="text-left">
                      <p className="text-neutral-600 text-[8px] font-bold tracking-wider">PENDIDIKAN</p>
                      <p className="text-neutral-300 mt-0.5">{PERSONAL_INFO.education}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-neutral-950 border border-neutral-850">
                    <Briefcase className="w-4 h-4 text-neutral-300 shrink-0" />
                    <div className="text-left">
                      <p className="text-neutral-500 text-[8px] font-bold tracking-wider">KATEGORI_FREELANCE</p>
                      <p className="text-white mt-0.5 font-medium">{PERSONAL_INFO.availability}</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Tagline footer */}
              <div className="mt-8 pt-6 border-t border-neutral-900 flex items-center justify-between text-[9px] text-neutral-600 font-mono">
                <span>DELOS_SYSTEM_METRICS_V2</span>
                <span>SECURE & OPTIMIZED</span>
              </div>
            </div>
          </motion.div>

          {/* Drazat's Side Hustle & Interests - 6 cols */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div className="glass-card rounded-xl p-6 md:p-8 border border-neutral-850 h-full flex flex-col gap-6 justify-between bg-[#090909]/90">
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-neutral-300 font-display font-semibold text-base">
                  <Coins className="w-4.5 h-4.5 text-neutral-400 shrink-0" />
                  <span>Minat Sampingan & Analitis Makro</span>
                </div>

                {/* Card 1: Trading Forex & Crypto (Sejak 2024) */}
                <div className="p-4 rounded-lg bg-neutral-950/80 border border-neutral-900 relative overflow-hidden group">
                  <div className="flex gap-3">
                    <div className="p-2.5 rounded-lg bg-neutral-900 text-neutral-300 h-fit shrink-0">
                      <TrendingUp className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="text-[8px] font-mono tracking-widest font-extrabold text-neutral-500 uppercase">
                        FINANCIAL MODEL (SEJAK 2024)
                      </span>
                      <h4 className="text-white text-sm font-semibold font-display mt-0.5">Analisis Forex & Cryptocurrency</h4>
                      <p className="text-xs text-neutral-400 font-light mt-1.5 leading-relaxed">
                        Sengaja terjun ke dunia trading aset sejak tahun 2024 untuk melatih insting disiplin psikologis, manajemen keuangan ketat, serta analisa ketajaman grafik pergerakan candle secara independen.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2: Geopolitics & Global Macroeconomics (Sejak 2025) */}
                <div className="p-4 rounded-lg bg-neutral-950/80 border border-neutral-900 relative overflow-hidden group">
                  <div className="flex gap-3">
                    <div className="p-2.5 rounded-lg bg-neutral-900 text-neutral-300 h-fit shrink-0">
                      <Globe className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="text-[8px] font-mono tracking-widest font-extrabold text-neutral-500 uppercase">
                        GEOPOLITICAL PARAMETER (SEJAK 2025)
                      </span>
                      <h4 className="text-white text-sm font-semibold font-display mt-0.5">Dinamika Geopolitik & Ekonomi Global</h4>
                      <p className="text-xs text-neutral-400 font-light mt-1.5 leading-relaxed">
                        Sangat termotivasi mengulik dinamika geopolitik internasional, pergeseran rantai pasokan chip silikon, inflasi bank sentral, serta hubungannya dengan hosting infrastruktur server siber dunia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hiring Tagline box */}
              <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-900 flex items-center gap-3">
                <Award className="w-5 h-5 text-neutral-300 shrink-0" />
                <p className="text-[11px] text-neutral-400 font-sans font-light leading-relaxed">
                  <strong>Pernyataan Kesiapan Kerja:</strong> Memiliki kemauan belajar yang intensif dan mentalitas tak gampang goyah untuk mendukung kesuksesan digital mitra bisnis Anda.
                </p>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Timelines and Progress History */}
        <div className="mb-12 text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="glass-card rounded-xl p-6 md:p-8 border border-neutral-850 bg-[#090909]/90"
          >
            <div className="flex items-center gap-2 mb-8 text-neutral-300 font-display font-semibold text-base">
              <Calendar className="w-4.5 h-4.5 text-neutral-400" />
              <span>Linimasa Perjalanan & Milestone Penting</span>
            </div>

            {/* Timeline Container */}
            <div className="relative pl-6 border-l border-neutral-850 space-y-8">
              {TIMELINE.map((evt, idx) => {
                const isAchievement = evt.type === 'achievement';
                return (
                  <div key={idx} className="relative group text-left">
                    {/* Minimalist grey calibration dot */}
                    <div className={`absolute -left-[30px] top-1.5 w-3 h-3 rounded-full border-2 bg-neutral-950 transition-all duration-300 ${
                      isAchievement 
                        ? 'border-neutral-300 group-hover:bg-neutral-300'
                        : 'border-neutral-500 group-hover:bg-neutral-500'
                    }`} />
                    
                    {/* Timeline Card content */}
                    <div className="space-y-1.5 pb-1">
                      <span className={`inline-block font-mono text-[9px] uppercase tracking-widest font-extrabold ${
                        isAchievement ? 'text-neutral-300' : 'text-neutral-500'
                      }`}>
                        // YEAR_{evt.year}
                      </span>
                      
                      <h4 className="text-white text-sm md:text-base font-semibold font-display group-hover:text-neutral-300 transition-colors">
                        {evt.title}
                      </h4>
                      
                      <p className="text-neutral-400 font-semibold text-xs">
                        {evt.org}
                      </p>
                      
                      <p className="text-neutral-400 text-xs leading-relaxed font-light mt-1">
                        {evt.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Technical stack / Skills board */}
        <div className="mt-16 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-850 pb-6 text-left">
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-bold font-display text-white">
                Metrik Keahlian Teknis
              </h3>
              <p className="text-neutral-405 text-xs md:text-sm font-light">
                Aspek koding dan sistem administrasi server yang terus-menerus didokumentasi dan dioptimalkan keefektifannya.
              </p>
            </div>

            {/* Category Filter Pills (Sleek minimalist borders) */}
            <div className="flex flex-wrap gap-2">
              {skillCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-md text-xs font-mono font-medium border transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-neutral-100 border-neutral-200 text-neutral-950 shadow-sm'
                      : 'bg-neutral-950 border-neutral-850 text-neutral-400 hover:text-white hover:bg-neutral-900'
                  }`}
                >
                  {cat === 'All' ? 'SEMUA' : cat.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Core Interactive Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((sk) => {
                const IconComponent = iconMap[sk.iconName] || Code2;
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    key={sk.name}
                    onMouseEnter={() => setHoveredSkill(sk)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="glass-card rounded-lg p-5 border border-neutral-850 flex flex-col justify-between hover:border-neutral-500 hover:bg-neutral-900/35 group transition-all duration-305 relative overflow-hidden cursor-pointer"
                  >
                    <div className="space-y-4 text-left">
                      <div className="flex items-center justify-between">
                        <div className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-900 text-neutral-400 group-hover:text-white group-hover:border-neutral-700 transition-all duration-200">
                          <IconComponent className="w-4.5 h-4.5" />
                        </div>
                        <span className="text-xs font-mono font-bold text-neutral-500 group-hover:text-white transition-colors">
                          {sk.level}%
                        </span>
                      </div>

                      <div className="space-y-1">
                        <h4 className="text-white text-sm font-bold font-display group-hover:text-neutral-300 transition-colors">
                          {sk.name}
                        </h4>
                        <span className="text-[9px] text-neutral-400 bg-neutral-950 border border-neutral-900 font-mono px-2 py-0.5 rounded uppercase">
                          {sk.category}
                        </span>
                      </div>

                      <p className="text-neutral-450 text-[11px] leading-relaxed line-clamp-2 font-light group-hover:text-neutral-300 transition-colors">
                        {sk.description}
                      </p>
                    </div>

                    {/* Minimalist Progress Meter Bar - Grayscale/Sand hues */}
                    <div className="w-full h-1 bg-neutral-950 rounded-full mt-5 overflow-hidden border border-neutral-900">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${sk.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-full bg-neutral-300 rounded-full"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Interactive Informative Overlay Box */}
          <div className="min-h-[45px] relative">
            <AnimatePresence mode="wait">
              {hoveredSkill ? (
                <motion.div
                  key={hoveredSkill.name}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="p-3.5 rounded-lg bg-neutral-950/80 border border-neutral-850 text-center text-xs text-neutral-400 font-mono"
                >
                  <span className="font-semibold text-white uppercase tracking-widest">{hoveredSkill.name}:</span> {hoveredSkill.description}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                  className="p-4 text-center text-xs text-neutral-500 font-mono tracking-widest"
                >
                  [ TIP: ARAHKAN KURSOR KE LEVEL SKILL UNTUK DIAGNOSA DATA TEKNIS ]
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
