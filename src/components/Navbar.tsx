import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Terminal, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Beranda' },
    { id: 'about', label: 'Tentang' },
    { id: 'projects', label: 'Proyek' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Kontak' },
  ];

  // Monitor scroll height to make navbar opaque or blur-heavy on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section Highlight tracking on scroll
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 100;

      sections.forEach(sec => {
        if (sec) {
          const top = sec.offsetTop;
          const height = sec.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[#030014]/70 backdrop-blur-md border-b border-white/5 shadow-lg'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo with interactive glowing terminal feel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 cursor-pointer font-display font-bold text-lg text-white"
            onClick={() => handleNavClick('home')}
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 via-cyan-400 to-purple-500 p-[1px]">
              <div className="w-full h-full bg-[#030014] rounded-lg flex items-center justify-center">
                <Terminal className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
            <span className="tracking-tight">
              {PERSONAL_INFO.shortName.toLowerCase()}
              <span className="text-cyan-400 font-extrabold text-glow-cyan">.dev</span>
            </span>
          </motion.div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5 backdrop-blur-md">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                    activeSection === item.id ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-cyan-400/20 rounded-full"
                    />
                  )}
                  {item.label}
                </button>
              ))}
            </div>

            {/* Availability Badge */}
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-300 hover:bg-cyan-500/20 transition-all duration-300 pointer-events-auto"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Tersedia untuk Magang
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.a>
          </nav>

          {/* Hamburger menu for small screens */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[70px] z-35 mx-4 max-w-lg md:hidden glass-card rounded-2xl p-6 border border-white/10 shadow-2xl flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full py-3 px-4 rounded-xl text-left text-base font-medium transition-all ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-blue-500/15 via-cyan-500/10 to-purple-500/15 border border-cyan-500/25 text-white pl-6'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Separator line */}
            <div className="h-[1px] bg-white/5" />

            {/* Availability Banner for Mobile */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-cyan-950/20 border border-cyan-800/30">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-semibold text-cyan-300">Tersedia untuk Magang / Freelance</span>
              </div>
              <button
                onClick={() => handleNavClick('contact')}
                className="text-xs text-white bg-cyan-500 hover:bg-cyan-600 px-3 py-1 rounded-lg font-medium transition-colors"
              >
                Kontak
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
